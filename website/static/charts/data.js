window.BENCHMARK_DATA = {
  "lastUpdate": 1745339826774,
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
    ]
  }
}