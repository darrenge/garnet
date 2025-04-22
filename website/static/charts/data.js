window.BENCHMARK_DATA = {
  "lastUpdate": 1745344848298,
  "repoUrl": "https://github.com/darrenge/garnet",
  "entries": {
    "Network.BasicOperations (ubuntu-latest  net8.0 Release)": [
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
          "id": "405495a09d449fd0d32eaf18a3bff77cd18d2a11",
          "message": "Change to main to trigger it",
          "timestamp": "2025-04-22T10:57:44-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/405495a09d449fd0d32eaf18a3bff77cd18d2a11"
        },
        "date": 1745344820900,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Network.BasicOperations.InlinePing(Params: None)",
            "value": 87.84600476118234,
            "unit": "ns",
            "range": "± 0.13413205223454158"
          }
        ]
      }
    ],
    "Lua.LuaRunnerOperations (ubuntu-latest  net9.0 Release)": [
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
          "id": "405495a09d449fd0d32eaf18a3bff77cd18d2a11",
          "message": "Change to main to trigger it",
          "timestamp": "2025-04-22T10:57:44-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/405495a09d449fd0d32eaf18a3bff77cd18d2a11"
        },
        "date": 1745344840961,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Managed,Limit)",
            "value": 3612.064516129032,
            "unit": "ns",
            "range": "± 623.5816045487204"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Managed,Limit)",
            "value": 3601.8936170212764,
            "unit": "ns",
            "range": "± 749.1544117516704"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Managed,Limit)",
            "value": 444303.46153846156,
            "unit": "ns",
            "range": "± 11941.237162809452"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Managed,Limit)",
            "value": 427893.9081632653,
            "unit": "ns",
            "range": "± 58839.62014371292"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Managed,Limit)",
            "value": 18356.586021505376,
            "unit": "ns",
            "range": "± 3421.686876304784"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Managed,Limit)",
            "value": 154787.15789473685,
            "unit": "ns",
            "range": "± 16259.983218381194"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Managed,None)",
            "value": 3285.1176470588234,
            "unit": "ns",
            "range": "± 72.34110376623823"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Managed,None)",
            "value": 3207.714285714286,
            "unit": "ns",
            "range": "± 34.3341690570074"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Managed,None)",
            "value": 457447.18,
            "unit": "ns",
            "range": "± 11846.442604990469"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Managed,None)",
            "value": 439149.9285714286,
            "unit": "ns",
            "range": "± 58420.347418691534"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Managed,None)",
            "value": 18146.625,
            "unit": "ns",
            "range": "± 3006.8561663743008"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Managed,None)",
            "value": 132898.38461538462,
            "unit": "ns",
            "range": "± 1026.903723048201"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Native,None)",
            "value": 3591.511111111111,
            "unit": "ns",
            "range": "± 393.76897477217994"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Native,None)",
            "value": 3783.9052631578948,
            "unit": "ns",
            "range": "± 312.797231366788"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Native,None)",
            "value": 394121.69,
            "unit": "ns",
            "range": "± 61447.58427642196"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Native,None)",
            "value": 407751.5252525252,
            "unit": "ns",
            "range": "± 67404.0826025902"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Native,None)",
            "value": 15033.059139784946,
            "unit": "ns",
            "range": "± 1859.089652528458"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Native,None)",
            "value": 151272.16666666666,
            "unit": "ns",
            "range": "± 14097.134051151683"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Tracked,Limit)",
            "value": 3598.340425531915,
            "unit": "ns",
            "range": "± 685.3691463257599"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Tracked,Limit)",
            "value": 3389.3684210526317,
            "unit": "ns",
            "range": "± 556.5588621855443"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Tracked,Limit)",
            "value": 470108.28571428574,
            "unit": "ns",
            "range": "± 10993.790689033774"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Tracked,Limit)",
            "value": 470149.4871794872,
            "unit": "ns",
            "range": "± 16463.745864413395"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Tracked,Limit)",
            "value": 15722,
            "unit": "ns",
            "range": "± 112.0066962283952"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Tracked,Limit)",
            "value": 168727.98969072165,
            "unit": "ns",
            "range": "± 22940.066695401652"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Tracked,None)",
            "value": 3907.133333333333,
            "unit": "ns",
            "range": "± 324.9097091518251"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Tracked,None)",
            "value": 3755.875,
            "unit": "ns",
            "range": "± 950.8844663896097"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Tracked,None)",
            "value": 523489.16,
            "unit": "ns",
            "range": "± 93445.2298108276"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Tracked,None)",
            "value": 463786.3787878788,
            "unit": "ns",
            "range": "± 21870.62806299117"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Tracked,None)",
            "value": 19266.894736842107,
            "unit": "ns",
            "range": "± 2319.4728604801385"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Tracked,None)",
            "value": 169049.45454545456,
            "unit": "ns",
            "range": "± 23424.566347682823"
          }
        ]
      }
    ]
  }
}