window.BENCHMARK_DATA = {
  "lastUpdate": 1733773669147,
  "repoUrl": "https://github.com/darrenge/garnet",
  "entries": {
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
          "id": "d69fdc20b7a265342db5c7a2e892246ff2f6126a",
          "message": "Adding the \"previous\" task",
          "timestamp": "2024-12-09T11:44:20-08:00",
          "tree_id": "9640b41136f8106657d52a8fdd43c14111f448d0",
          "url": "https://github.com/darrenge/garnet/commit/d69fdc20b7a265342db5c7a2e892246ff2f6126a"
        },
        "date": 1733773639790,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 36465.9535945012,
            "unit": "ns",
            "range": "± 28.935174781980738"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 38131.500850423174,
            "unit": "ns",
            "range": "± 340.66931653404225"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 33311.62421593299,
            "unit": "ns",
            "range": "± 106.07628578774836"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 32821.346171061195,
            "unit": "ns",
            "range": "± 28.964248476689313"
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
          "id": "d69fdc20b7a265342db5c7a2e892246ff2f6126a",
          "message": "Adding the \"previous\" task",
          "timestamp": "2024-12-09T11:44:20-08:00",
          "tree_id": "9640b41136f8106657d52a8fdd43c14111f448d0",
          "url": "https://github.com/darrenge/garnet/commit/d69fdc20b7a265342db5c7a2e892246ff2f6126a"
        },
        "date": 1733773653840,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: ACL)",
            "value": 1811.701229286194,
            "unit": "ns",
            "range": "± 12.483782558282405"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: AOF)",
            "value": 1713.6622589111328,
            "unit": "ns",
            "range": "± 17.251195595280276"
          },
          {
            "name": "BDN.benchmark.Operations.BasicOperations.InlinePing(Params: None)",
            "value": 1745.0324239095053,
            "unit": "ns",
            "range": "± 16.43434217677454"
          }
        ]
      }
    ],
    "Lua.LuaScripts (ubuntu-latest  net8.0 Release)": [
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
          "id": "d69fdc20b7a265342db5c7a2e892246ff2f6126a",
          "message": "Adding the \"previous\" task",
          "timestamp": "2024-12-09T11:44:20-08:00",
          "tree_id": "9640b41136f8106657d52a8fdd43c14111f448d0",
          "url": "https://github.com/darrenge/garnet/commit/d69fdc20b7a265342db5c7a2e892246ff2f6126a"
        },
        "date": 1733773667273,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: None)",
            "value": 178.68666701316835,
            "unit": "ns",
            "range": "± 1.3911877434049584"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: None)",
            "value": 326.6504349708557,
            "unit": "ns",
            "range": "± 1.3268656303993447"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: None)",
            "value": 619.28530737559,
            "unit": "ns",
            "range": "± 5.700748342238343"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: None)",
            "value": 2964.1531188964846,
            "unit": "ns",
            "range": "± 15.422242209773199"
          }
        ]
      }
    ]
  }
}