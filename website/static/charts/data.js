window.BENCHMARK_DATA = {
  "lastUpdate": 1745340200001,
  "repoUrl": "https://github.com/darrenge/garnet",
  "entries": {
    "Operations.ObjectOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "distinct": true,
          "id": "ac88d4a51e60048efc5a675726d3e9d0957b3fc6",
          "message": "Just change to main so benchmark fires off",
          "timestamp": "2025-04-22T09:30:39-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/ac88d4a51e60048efc5a675726d3e9d0957b3fc6"
        },
        "date": 1745339802814,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 136627.6028703962,
            "unit": "ns",
            "range": "± 499.0525624213896"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 153088.53658040366,
            "unit": "ns",
            "range": "± 711.4124703025539"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 137187.31919508713,
            "unit": "ns",
            "range": "± 634.3325999660815"
          }
        ]
      }
    ],
    "Operations.BasicOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "distinct": true,
          "id": "ac88d4a51e60048efc5a675726d3e9d0957b3fc6",
          "message": "Just change to main so benchmark fires off",
          "timestamp": "2025-04-22T09:30:39-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/ac88d4a51e60048efc5a675726d3e9d0957b3fc6"
        },
        "date": 1745339819933,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1749.4278857367378,
            "unit": "ns",
            "range": "± 8.661488018991895"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1623.4304367065429,
            "unit": "ns",
            "range": "± 8.074962571093407"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1703.3261507670084,
            "unit": "ns",
            "range": "± 20.57790589401387"
          }
        ]
      }
    ],
    "Operations.BasicOperations (ubuntu-latest  net9.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "distinct": true,
          "id": "ac88d4a51e60048efc5a675726d3e9d0957b3fc6",
          "message": "Just change to main so benchmark fires off",
          "timestamp": "2025-04-22T09:30:39-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/ac88d4a51e60048efc5a675726d3e9d0957b3fc6"
        },
        "date": 1745339844290,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1622.5407279968263,
            "unit": "ns",
            "range": "± 9.310341789818926"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1921.6441964369553,
            "unit": "ns",
            "range": "± 6.391342773793283"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1744.8486080169678,
            "unit": "ns",
            "range": "± 8.115409598302435"
          }
        ]
      }
    ],
    "Cluster.ClusterMigrate (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "distinct": true,
          "id": "ac88d4a51e60048efc5a675726d3e9d0957b3fc6",
          "message": "Just change to main so benchmark fires off",
          "timestamp": "2025-04-22T09:30:39-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/ac88d4a51e60048efc5a675726d3e9d0957b3fc6"
        },
        "date": 1745340091346,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36893.766817533055,
            "unit": "ns",
            "range": "± 32.14354147232682"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 40008.987470354354,
            "unit": "ns",
            "range": "± 138.57628618910775"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32625.901606633113,
            "unit": "ns",
            "range": "± 43.52984599856183"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31507.780904134113,
            "unit": "ns",
            "range": "± 65.69110650996278"
          }
        ]
      }
    ],
    "Operations.CustomOperations (ubuntu-latest  net8.0 Release)": [
      {
        "commit": {
          "author": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "committer": {
            "email": "darrenge@microsoft.com",
            "name": "darrenge",
            "username": "darrenge"
          },
          "distinct": true,
          "id": "ac88d4a51e60048efc5a675726d3e9d0957b3fc6",
          "message": "Just change to main so benchmark fires off",
          "timestamp": "2025-04-22T09:30:39-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/ac88d4a51e60048efc5a675726d3e9d0957b3fc6"
        },
        "date": 1745340192937,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: ACL)",
            "value": 32751.17216389974,
            "unit": "ns",
            "range": "± 133.53446903818008"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: ACL)",
            "value": 166670.2356160482,
            "unit": "ns",
            "range": "± 311.2150381430034"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: ACL)",
            "value": 111895.45820835659,
            "unit": "ns",
            "range": "± 375.7720886842048"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: ACL)",
            "value": 79490.91036376954,
            "unit": "ns",
            "range": "± 444.4274497563916"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: AOF)",
            "value": 33112.13026936849,
            "unit": "ns",
            "range": "± 49.890251497982796"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: AOF)",
            "value": 168997.67457682293,
            "unit": "ns",
            "range": "± 638.9665777036013"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: AOF)",
            "value": 127460.28533063616,
            "unit": "ns",
            "range": "± 644.7404551704616"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: AOF)",
            "value": 108743.04138183594,
            "unit": "ns",
            "range": "± 515.3996402603395"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: None)",
            "value": 34071.01256815592,
            "unit": "ns",
            "range": "± 52.75997333230738"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: None)",
            "value": 158609.28878079928,
            "unit": "ns",
            "range": "± 513.7245850020004"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: None)",
            "value": 109929.39376627604,
            "unit": "ns",
            "range": "± 536.8266864170113"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: None)",
            "value": 78866.2773061899,
            "unit": "ns",
            "range": "± 94.30891638859134"
          }
        ]
      }
    ]
  }
}