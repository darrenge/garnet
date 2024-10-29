﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

using BenchmarkDotNet.Attributes;
using Garnet.server;

namespace BDN.benchmark.Resp
{
    [MemoryDiagnoser]
    public unsafe class RespLuaRunnerStress
    {
        LuaRunner r1, r2, r3, r4;
        readonly string[] keys = ["key1"];

        [GlobalSetup]
        public void GlobalSetup()
        {
            r1 = new LuaRunner("return");
            r1.Compile();
            r2 = new LuaRunner("return 1 + 1");
            r2.Compile();
            r3 = new LuaRunner("return KEYS[1]");
            r3.Compile();
            r4 = new LuaRunner("return redis.call(KEYS[1])");
            r4.Compile();
        }

        [GlobalCleanup]
        public void GlobalCleanup()
        {
            r1.Dispose();
            r2.Dispose();
            r3.Dispose();
            r4.Dispose();
        }

        [Benchmark]
        public void BasicLuaRunner1()
            => r1.Run();

        [Benchmark]
        public void BasicLuaRunner2()
            => r2.Run();

        [Benchmark]
        public void BasicLuaRunner3()
            => r3.Run(keys, null);

        [Benchmark]
        public void BasicLuaRunner4()
            => r4.Run(keys, null);
    }
}