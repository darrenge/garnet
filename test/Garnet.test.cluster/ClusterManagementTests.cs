﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using NUnit.Framework;
using NUnit.Framework.Legacy;
using StackExchange.Redis;

namespace Garnet.test.cluster
{
    [TestFixture, NonParallelizable]
    public class ClusterManagementTests
    {
        ClusterTestContext context;
        readonly int defaultShards = 3;

        readonly Dictionary<string, LogLevel> monitorTests = [];

        [SetUp]
        public void Setup()
        {
            context = new ClusterTestContext();
            context.Setup(monitorTests);
        }

        [TearDown]
        public void TearDown()
        {
            context.TearDown();
        }

        [Test, Order(1)]
        [TestCase(0, 16383)]
        [TestCase(1234, 5678)]
        public void ClusterSlotsTest(int startSlot, int endSlot)
        {
            var slotRanges = new List<(int, int)>[1];
            slotRanges[0] = [(startSlot, endSlot)];
            context.CreateInstances(defaultShards);
            context.CreateConnection();
            _ = context.clusterTestUtils.SimpleSetupCluster(customSlotRanges: slotRanges, logger: context.logger);

            var slotsResult = context.clusterTestUtils.ClusterSlots(0, context.logger);
            ClassicAssert.IsTrue(slotsResult.Count == 1);
            ClassicAssert.AreEqual(startSlot, slotsResult[0].startSlot);
            ClassicAssert.AreEqual(endSlot, slotsResult[0].endSlot);
            ClassicAssert.IsTrue(slotsResult[0].nnInfo.Length == 1);
            ClassicAssert.IsTrue(slotsResult[0].nnInfo[0].isPrimary);
            ClassicAssert.AreEqual(slotsResult[0].nnInfo[0].address, context.clusterTestUtils.GetEndPoint(0).Address.ToString());
            ClassicAssert.AreEqual(slotsResult[0].nnInfo[0].port, context.clusterTestUtils.GetEndPoint(0).Port);
            ClassicAssert.AreEqual(slotsResult[0].nnInfo[0].nodeid, context.clusterTestUtils.GetNodeIdFromNode(0, context.logger));
        }

        [Test, Order(2)]
        public void ClusterSlotRangesTest()
        {
            context.CreateInstances(defaultShards);
            context.CreateConnection();
            var slotRanges = new List<(int, int)>[3];
            slotRanges[0] = [(5680, 6150), (12345, 14567)];
            slotRanges[1] = [(1021, 2371), (3376, 5678)];
            slotRanges[2] = [(782, 978), (7345, 11819)];
            _ = context.clusterTestUtils.SimpleSetupCluster(customSlotRanges: slotRanges, logger: context.logger);

            var slotsResult = context.clusterTestUtils.ClusterSlots(0, context.logger);
            while (slotsResult.Count < 6)
                slotsResult = context.clusterTestUtils.ClusterSlots(0, context.logger);
            ClassicAssert.AreEqual(6, slotsResult.Count);

            List<(int, (int, int))>[] origSlotRanges = new List<(int, (int, int))>[3];
            for (var i = 0; i < slotRanges.Length; i++)
            {
                origSlotRanges[i] = new List<(int, (int, int))>();
                for (var j = 0; j < slotRanges[i].Count; j++)
                    origSlotRanges[i].Add((i, slotRanges[i][j]));
            }
            var ranges = origSlotRanges.SelectMany(x => x).OrderBy(x => x.Item2.Item1).ToList();
            ClassicAssert.IsTrue(slotsResult.Count == ranges.Count);
            for (var i = 0; i < slotsResult.Count; i++)
            {
                var origRange = ranges[i];
                var retRange = slotsResult[i];
                ClassicAssert.AreEqual(origRange.Item2.Item1, retRange.startSlot);
                ClassicAssert.AreEqual(origRange.Item2.Item2, retRange.endSlot);
                ClassicAssert.IsTrue(retRange.nnInfo.Length == 1);
                ClassicAssert.IsTrue(retRange.nnInfo[0].isPrimary);
                ClassicAssert.AreEqual(context.clusterTestUtils.GetEndPoint(origRange.Item1).Address.ToString(), retRange.nnInfo[0].address);
                ClassicAssert.AreEqual(context.clusterTestUtils.GetEndPoint(origRange.Item1).Port, retRange.nnInfo[0].port);
                ClassicAssert.AreEqual(context.clusterTestUtils.GetNodeIdFromNode(origRange.Item1, context.logger), retRange.nnInfo[0].nodeid);
            }
        }

        [Test, Order(3)]
        public void ClusterForgetTest()
        {
            var node_count = 4;
            context.CreateInstances(node_count);
            context.CreateConnection();
            var (_, _) = context.clusterTestUtils.SimpleSetupCluster(node_count, 0, logger: context.logger);

            var nodeIds = context.clusterTestUtils.GetNodeIds(logger: context.logger);

            // Forget node0
            for (var i = 1; i < node_count; i++)
            {
                // Issue forget node i to node 0 for 30 seconds
                _ = context.clusterTestUtils.ClusterForget(0, nodeIds[i], 30, context.logger);
                // Issue forget node 0 to node i
                _ = context.clusterTestUtils.ClusterForget(i, nodeIds[0], 30, context.logger);
            }

            // Retrieve config for nodes 1 to i-1
            List<ClusterConfiguration> configs = new();
            for (var i = 1; i < node_count; i++)
                configs.Add(context.clusterTestUtils.ClusterNodes(i, context.logger));

            // Check if indeed nodes 1 to i-1 have forgotten node 0
            foreach (var config in configs)
                foreach (var node in config.Nodes)
                    ClassicAssert.AreNotEqual(nodeIds[0], node.NodeId, "node 0 node forgotten");
        }

        [Test, Order(4)]
        public void ClusterResetTest()
        {
            var node_count = 4;
            context.CreateInstances(node_count);
            context.CreateConnection();
            var (_, _) = context.clusterTestUtils.SimpleSetupCluster(node_count, 0, logger: context.logger);

            // Get slot ranges for node 0
            var config = context.clusterTestUtils.ClusterNodes(0, context.logger);
            var slots = config.Nodes.First().Slots;
            List<(int, int)> slotRanges = new();
            foreach (var slot in slots)
                slotRanges.Add((slot.From, slot.To));

            var nodeIds = context.clusterTestUtils.GetNodeIds(logger: context.logger);
            // Issue forget of node 0 to nodes 1 to i-1
            for (var i = 1; i < node_count; i++)
                _ = context.clusterTestUtils.ClusterForget(i, nodeIds[0], 10, context.logger);

            // Hard reset node state. clean db data and cluster config
            _ = context.clusterTestUtils.ClusterReset(0, soft: false, 10, context.logger);
            config = context.clusterTestUtils.ClusterNodes(0, context.logger);
            var node = config.Nodes.First();

            // Assert node 0 does not know anything about the cluster
            ClassicAssert.AreEqual(1, config.Nodes.Count);
            ClassicAssert.AreNotEqual(nodeIds[0], node.NodeId);
            ClassicAssert.AreEqual(0, node.Slots.Count);
            ClassicAssert.IsFalse(node.IsReplica);

            //Add slotRange for clean node
            context.clusterTestUtils.AddSlotsRange(0, slotRanges, context.logger);

            // Add node back to the cluster
            context.clusterTestUtils.SetConfigEpoch(0, 1, context.logger);
            context.clusterTestUtils.Meet(0, 1, context.logger);
            context.clusterTestUtils.WaitUntilNodeIsKnownByAllNodes(0, context.logger);
            for (int i = 0; i < node_count; i++)
            {
                Console.WriteLine(i);
                context.clusterTestUtils.WaitUntilNodeIsKnownByAllNodes(i, context.logger);
            }
        }

        [Test, Order(4)]
        public void ClusterResetFailsForMasterWithKeysInSlotsTest()
        {
            var node_count = 4;
            context.CreateInstances(node_count);
            context.CreateConnection();
            var (_, _) = context.clusterTestUtils.SimpleSetupCluster(node_count, 0, logger: context.logger);

            var expectedSlotRange = new SlotRange(0, 4095);
            var config = context.clusterTestUtils.ClusterNodes(0, context.logger);
            var node = config.Nodes.First();
            ClassicAssert.AreEqual(expectedSlotRange, node.Slots[0]);
            byte[] key = new byte[16];
            context.clusterTestUtils.RandomBytesRestrictedToSlot(ref key, node.Slots.First().From);

            context.clusterTestUtils.GetServer(0).Execute("SET", key, "1234");
            string res = context.clusterTestUtils.GetServer(0).Execute("GET", key).ToString();
            ClassicAssert.AreEqual("1234", res);

            VerifyClusterResetFails(true);
            VerifyClusterResetFails(false);

            // soft reset node state. clean db data and cluster config
            var nodeIds = context.clusterTestUtils.GetNodeIds(logger: context.logger);
            ClassicAssert.AreEqual(4, config.Nodes.Count);
            ClassicAssert.AreEqual(nodeIds[0], node.NodeId);
            ClassicAssert.AreEqual(expectedSlotRange, node.Slots[0]);
            ClassicAssert.IsFalse(node.IsReplica);
        }

        [Test, Order(4)]
        public void ClusterResetFailsForMasterWithKeysInSlotsObjectStoreTest()
        {
            var node_count = 4;
            context.CreateInstances(node_count);
            context.CreateConnection();
            var (_, _) = context.clusterTestUtils.SimpleSetupCluster(node_count, 0, logger: context.logger);
            context.kvPairsObj = new Dictionary<string, List<int>>();
            context.PopulatePrimaryWithObjects(ref context.kvPairsObj, 16, 10, 0);

            var expectedSlotRange = new SlotRange(0, 4095);
            var config = context.clusterTestUtils.ClusterNodes(0, context.logger);
            var node = config.Nodes.First();
            ClassicAssert.AreEqual(expectedSlotRange, node.Slots[0]);
            byte[] key = new byte[16];
            context.clusterTestUtils.RandomBytesRestrictedToSlot(ref key, node.Slots.First().From);

            VerifyClusterResetFails(true);
            VerifyClusterResetFails(false);

            var nodeIds = context.clusterTestUtils.GetNodeIds(logger: context.logger);
            ClassicAssert.AreEqual(4, config.Nodes.Count);
            ClassicAssert.AreEqual(nodeIds[0], node.NodeId);
            ClassicAssert.AreEqual(expectedSlotRange, node.Slots[0]);
            ClassicAssert.IsFalse(node.IsReplica);
        }

        [Test, Order(4)]
        public void ClusterResetAfterFLushAllTest()
        {
            var node_count = 4;
            context.CreateInstances(node_count);
            context.CreateConnection();
            var (_, _) = context.clusterTestUtils.SimpleSetupCluster(node_count, 0, logger: context.logger);
            context.kvPairsObj = new Dictionary<string, List<int>>();
            context.PopulatePrimaryWithObjects(ref context.kvPairsObj, 16, 10, 0);

            var expectedSlotRange = new SlotRange(0, 4095);
            var config = context.clusterTestUtils.ClusterNodes(0, context.logger);
            var node = config.Nodes.First();
            ClassicAssert.AreEqual(expectedSlotRange, node.Slots[0]);
            byte[] key = new byte[16];
            context.clusterTestUtils.RandomBytesRestrictedToSlot(ref key, node.Slots.First().From);

            VerifyClusterResetFails(true);
            VerifyClusterResetFails(false);

            var nodeIds = context.clusterTestUtils.GetNodeIds(logger: context.logger);
            ClassicAssert.AreEqual(4, config.Nodes.Count);
            ClassicAssert.AreEqual(nodeIds[0], node.NodeId);
            ClassicAssert.AreEqual(expectedSlotRange, node.Slots[0]);
            ClassicAssert.IsFalse(node.IsReplica);

            context.clusterTestUtils.FlushAll(0, context.logger);
            _ = context.clusterTestUtils.ClusterReset(0, soft: false, 10, context.logger);

            config = context.clusterTestUtils.ClusterNodes(0, context.logger);
            node = config.Nodes.First();
            // Assert node 0 does not know anything about the cluster
            ClassicAssert.AreEqual(1, config.Nodes.Count);
            ClassicAssert.AreNotEqual(nodeIds[0], node.NodeId);
            ClassicAssert.AreEqual(0, node.Slots.Count);
            ClassicAssert.IsFalse(node.IsReplica);
        }

        private void VerifyClusterResetFails(bool softReset = true)
        {
            var server = context.clusterTestUtils.GetServer(0);
            var args = new List<object>() {
                "reset",
                softReset ? "soft" : "hard",
                "60"
            };

            try
            {
                _ = (string)server.Execute("cluster", args);
            }
            catch (RedisServerException ex)
            {
                ClassicAssert.AreEqual("ERR CLUSTER RESET can't be called with master nodes containing keys", ex.Message);
            }
        }

        [Test, Order(4)]
        public async Task ClusterResetDisposesGossipConnections()
        {
            var node_count = 3;
            context.CreateInstances(node_count, metricsSamplingFrequency: 1);
            context.CreateConnection();
            var endpoints = context.clusterTestUtils.GetEndpoints();
            for (int i = 0; i < endpoints.Length - 1; i++)
            {
                context.clusterTestUtils.Meet(i, i + 1, context.logger);
            }

            for (int i = 0; i < node_count; i++)
            {
                context.clusterTestUtils.WaitUntilNodeIsKnownByAllNodes(i);
            }

            await Task.Delay(1000);

            var server = context.clusterTestUtils.GetServer(0);
            var gossipConnections = GetStat(server, "Stats", "gossip_open_connections");
            ClassicAssert.AreEqual(node_count - 1, int.Parse(gossipConnections), "Expected one gossip connection per node.");

            context.clusterTestUtils.ClusterReset(0, soft: true);

            await Task.Delay(1000);

            gossipConnections = GetStat(server, "Stats", "gossip_open_connections");
            ClassicAssert.AreEqual("0", gossipConnections, "All gossip connections should be closed after a reset.");
            ClassicAssert.AreEqual(1, context.clusterTestUtils.ClusterNodes(0).Nodes.Count(), "Expected the node to only know about itself after a reset.");
        }

        private string GetStat(IServer server, string section, string statName)
        {
            return server.Info(section).FirstOrDefault(x => x.Key == section)?.FirstOrDefault(x => x.Key == statName).Value;
        }

        [Test, Order(5)]
        public void ClusterKeySlotTest()
        {
            var node_count = 1;
            context.CreateInstances(node_count);
            context.CreateConnection();

            (string, int)[] testCases = [("6e6bzswz8}", 7038),
                ("8}jb94e7tf", 4828),
                ("{}2xc5pbb7", 11672),
                ("vr{a07}pdt", 12154),
                ("cx{ldv}wdl", 14261),
                ("erv805by}u", 15389),
                ("{ey1pqbij}", 8341),
                ("2tbjjyn}n8", 5152),
                ("t}jehlyo06", 1232),
                ("{u08t}xjal", 2490),
                ("5g{mkb95a}", 3345),
                ("x{v}x70nka", 7761),
                ("g67ikt}q8q", 7694),
                ("ovi8}mn7t7", 14473),
                ("p5ljmg{}8s", 11196),
                ("3wov{fd}8m", 3502),
                ("bxmcjzi3{}", 10246),
                ("{b1rrm7rn}", 14105),
                ("e0{4ylm}78", 5069),
                ("rkptge5}sx", 3468),
                ("o6{uyxsy}j", 3278),
                ("ykd6q{ma8}", 5754),
                ("w{j5pz3iy}", 6520),
                ("mhsr{dm}x0", 15077),
                ("0}dtokfryr", 5134),
                ("h7}0cj9mwm", 8187),
                ("w{jhqd}frk", 5369),
                ("5yzd{6}hzw", 5781),
                ("w6b4vgtzr}", 6045),
                ("4{b17h85}l", 5923),
                ("Hm{W\x13\x1c", 7517),
                ("zyy8yt1chw", 3081),
                ("7858tqv03y", 773),
                ("fdhhuk8yqv", 5763),
                ("8bfgeino4s", 6257)];

            foreach (var testCase in testCases)
            {
                var key = testCase.Item1;
                var expectedSlot = testCase.Item2;
                var slot = context.clusterTestUtils.ClusterKeySlot(0, key: key, logger: context.logger);
                ClassicAssert.AreEqual(expectedSlot, slot, $"{key}");
            }
        }

        //[Test, Order(5)]
        //[Category("CLUSTER")]
        public void ClusterRestartNodeDropGossip()
        {
            var logger = context.loggerFactory.CreateLogger("ClusterRestartNodeDropGossip");
            context.CreateInstances(defaultShards);
            context.CreateConnection();
            var (_, _) = context.clusterTestUtils.SimpleSetupCluster(logger: logger);

            var restartingNode = 2;
            // Dispose node and delete data
            context.nodes[restartingNode].Dispose(deleteDir: true);

            context.nodes[restartingNode] = context.CreateInstance(
                context.clusterTestUtils.GetEndPoint(restartingNode).Port,
                disableObjects: true,
                tryRecover: false,
                enableAOF: true,
                timeout: 60,
                gossipDelay: 1,
                cleanClusterConfig: false);
            context.nodes[restartingNode].Start();
            context.CreateConnection();

            Thread.Sleep(5000);
            for (var i = 0; i < 2; i++)
            {
                var config = context.clusterTestUtils.ClusterNodes(restartingNode, logger: logger);
                var knownNodes = config.Nodes.ToArray();
                ClassicAssert.AreEqual(knownNodes.Length, 1);
                Thread.Sleep(1000);
            }
        }

        [Test, Order(7)]
        public void ClusterClientList()
        {
            const int NodeCount = 4;
            context.CreateInstances(NodeCount, enableAOF: true, MainMemoryReplication: true, CommitFrequencyMs: -1);
            context.CreateConnection();
            _ = context.clusterTestUtils.SimpleSetupCluster(NodeCount / 2, 1, logger: context.logger);

            // Check that all nodes have 4 connections
            var numWithTwoMasterConnections = 0;
            var numWithTwoReplicaConnections = 0;

            // Every node should have 1 normal connection and either 2 master + 1 replica, or 2 replica + 1 master
            for (var nodeIx = 0; nodeIx < NodeCount; nodeIx++)
            {
                var fullList = (string)context.clusterTestUtils.Execute((IPEndPoint)context.endpoints[nodeIx], "CLIENT", ["LIST"]);
                var numNormal = fullList.Split("\n").Count(static x => x.Contains(" flags=N "));
                var numReplica = fullList.Split("\n").Count(static x => x.Contains(" flags=S "));
                var numMaster = fullList.Split("\n").Count(static x => x.Contains(" flags=M "));

                ClassicAssert.AreEqual(1, numNormal);
                ClassicAssert.IsTrue(numReplica >= 1 && numReplica <= 2);
                ClassicAssert.IsTrue(numMaster >= 1 && numMaster <= 2);

                if (numMaster == 1)
                {
                    ClassicAssert.AreEqual(2, numReplica);
                    numWithTwoReplicaConnections++;
                }
                else
                {
                    ClassicAssert.AreEqual(1, numReplica);
                    numWithTwoMasterConnections++;
                }

                var replicaList = (string)context.clusterTestUtils.Execute((IPEndPoint)context.endpoints[nodeIx], "CLIENT", ["LIST", "TYPE", "REPLICA"]);
                var masterList = (string)context.clusterTestUtils.Execute((IPEndPoint)context.endpoints[nodeIx], "CLIENT", ["LIST", "TYPE", "MASTER"]);

                ClassicAssert.AreEqual(numReplica, replicaList.Split("\n").Length);
                ClassicAssert.AreEqual(numMaster, masterList.Split("\n").Length);
            }

            ClassicAssert.AreEqual(2, numWithTwoMasterConnections);
            ClassicAssert.AreEqual(2, numWithTwoReplicaConnections);
        }

        [Test, Order(7)]
        public void ClusterClientKill()
        {
            const int NodeCount = 4;
            context.CreateInstances(NodeCount, enableAOF: true, MainMemoryReplication: true, CommitFrequencyMs: -1);
            context.CreateConnection();
            _ = context.clusterTestUtils.SimpleSetupCluster(NodeCount / 2, 1, logger: context.logger);

            var killedMaster = (int)context.clusterTestUtils.Execute((IPEndPoint)context.endpoints[0], "CLIENT", ["KILL", "TYPE", "MASTER"]);
            var killedReplica = (int)context.clusterTestUtils.Execute((IPEndPoint)context.endpoints[0], "CLIENT", ["KILL", "TYPE", "REPLICA"]);

            ClassicAssert.IsTrue(killedMaster >= 1);
            ClassicAssert.IsTrue(killedReplica >= 1);
        }

        [Test, Order(7)]
        public void ClusterClientKillSlave()
        {
            // Test SLAVE separately - it's equivalent to REPLICA, but needed for compatibility

            const int NodeCount = 4;
            context.CreateInstances(NodeCount, enableAOF: true, MainMemoryReplication: true, CommitFrequencyMs: -1);
            context.CreateConnection();
            _ = context.clusterTestUtils.SimpleSetupCluster(NodeCount / 2, 1, logger: context.logger);

            var killed = (int)context.clusterTestUtils.Execute((IPEndPoint)context.endpoints[0], "CLIENT", ["KILL", "TYPE", "SLAVE"]);

            ClassicAssert.IsTrue(killed >= 1);
        }

        [Test, Order(8)]
        public void FailoverBadOptions()
        {
            var node_count = 4;
            context.CreateInstances(node_count);
            context.CreateConnection();
            var (_, _) = context.clusterTestUtils.SimpleSetupCluster(node_count, 0, logger: context.logger);

            var endpoint = (IPEndPoint)context.endpoints[0];

            // Default rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "FAILOVER", ["DEFAULT", "localhost", "6379"]);
                ClassicAssert.AreEqual("ERR syntax error", errorMsg);
            }

            // Invalid rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "FAILOVER", ["INVALID", "localhost", "6379"]);
                ClassicAssert.AreEqual("ERR syntax error", errorMsg);
            }

            // Numeric equivalent rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "FAILOVER", ["2", "localhost", "6379"]);
                ClassicAssert.AreEqual("ERR syntax error", errorMsg);
            }

            // Numeric out of range rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "FAILOVER", ["128", "localhost", "6379"]);
                ClassicAssert.AreEqual("ERR syntax error", errorMsg);
            }
        }

        [Test, Order(9)]
        public void ClusterFailoverBadOptions()
        {
            var node_count = 4;
            context.CreateInstances(node_count);
            context.CreateConnection();
            var (_, _) = context.clusterTestUtils.SimpleSetupCluster(node_count, 0, logger: context.logger);

            var endpoint = (IPEndPoint)context.endpoints[0];

            // Default rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["FAILOVER", "DEFAULT"]);
                ClassicAssert.AreEqual("ERR Failover option (DEFAULT) not supported", errorMsg);
            }

            // Invalid rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["FAILOVER", "Invalid"]);
                ClassicAssert.AreEqual("ERR Failover option (Invalid) not supported", errorMsg);
            }

            // Numeric equivalent rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["FAILOVER", "2"]);
                ClassicAssert.AreEqual("ERR Failover option (2) not supported", errorMsg);
            }

            // Numeric out of range rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["FAILOVER", "128"]);
                ClassicAssert.AreEqual("ERR Failover option (128) not supported", errorMsg);
            }
        }

        [Test, Order(10)]
        public void ClusterSetSlotBadOptions()
        {
            var node_count = 4;
            context.CreateInstances(node_count);
            context.CreateConnection();
            var (_, _) = context.clusterTestUtils.SimpleSetupCluster(node_count, 0, logger: context.logger);

            var endpoint = (IPEndPoint)context.endpoints[0];

            // Non-numeric slot
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["SETSLOT", "abc", "STABLE"]);
                ClassicAssert.AreEqual("ERR Invalid or out of range slot", errorMsg);
            }

            // Invalid rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["SETSLOT", "123", "Invalid"]);
                ClassicAssert.AreEqual("ERR Slot state Invalid not supported.", errorMsg);
            }

            // Offline rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["SETSLOT", "123", "Offline"]);
                ClassicAssert.AreEqual("ERR Slot state Offline not supported.", errorMsg);
            }

            // Numeric rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["SETSLOT", "123", "1"]);
                ClassicAssert.AreEqual("ERR Slot state 1 not supported.", errorMsg);
            }

            // Numeric out of range rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["SETSLOT", "123", "128"]);
                ClassicAssert.AreEqual("ERR Slot state 128 not supported.", errorMsg);
            }

            // Stable with node id rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["SETSLOT", "123", "STABLE", "foo"]);
                ClassicAssert.AreEqual("ERR syntax error", errorMsg);
            }

            // Non-stable without node id rejected
            {
                var errorMsg = (string)context.clusterTestUtils.Execute(endpoint, "CLUSTER", ["SETSLOT", "123", "IMPORTING"]);
                ClassicAssert.AreEqual("ERR syntax error", errorMsg);
            }
        }
    }
}