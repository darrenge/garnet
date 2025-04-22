window.BENCHMARK_DATA = {
  "lastUpdate": 1745344854177,
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
    ],
    "Lua.LuaRunnerOperations (ubuntu-latest  net8.0 Release)": [
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
        "date": 1745344846737,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Managed,Limit)",
            "value": 3411.5757575757575,
            "unit": "ns",
            "range": "± 117.48431552313437"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Managed,Limit)",
            "value": 3517.930107526882,
            "unit": "ns",
            "range": "± 517.8301382955246"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Managed,Limit)",
            "value": 363979.50505050505,
            "unit": "ns",
            "range": "± 40494.98146164602"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Managed,Limit)",
            "value": 368369,
            "unit": "ns",
            "range": "± 45602.57751465149"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Managed,Limit)",
            "value": 19341.94623655914,
            "unit": "ns",
            "range": "± 3258.718507679893"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Managed,Limit)",
            "value": 142771.27551020408,
            "unit": "ns",
            "range": "± 16420.497728923434"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Managed,None)",
            "value": 4032.1195652173915,
            "unit": "ns",
            "range": "± 703.0536665678761"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Managed,None)",
            "value": 3833.8709677419356,
            "unit": "ns",
            "range": "± 549.7896678020418"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Managed,None)",
            "value": 373016.1530612245,
            "unit": "ns",
            "range": "± 51195.738084961304"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Managed,None)",
            "value": 442667.5,
            "unit": "ns",
            "range": "± 9081.232955937206"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Managed,None)",
            "value": 18054.63186813187,
            "unit": "ns",
            "range": "± 1809.0542723189265"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Managed,None)",
            "value": 145968.5157894737,
            "unit": "ns",
            "range": "± 15239.357714493084"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Native,None)",
            "value": 3729.306818181818,
            "unit": "ns",
            "range": "± 667.1740602119097"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Native,None)",
            "value": 3441.9285714285716,
            "unit": "ns",
            "range": "± 66.6165425120798"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Native,None)",
            "value": 339315.4772727273,
            "unit": "ns",
            "range": "± 19323.220006038755"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Native,None)",
            "value": 333901.6451612903,
            "unit": "ns",
            "range": "± 9936.739695186368"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Native,None)",
            "value": 13129,
            "unit": "ns",
            "range": "± 205.72635546602515"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Native,None)",
            "value": 141342.84444444443,
            "unit": "ns",
            "range": "± 12034.037036542597"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Tracked,Limit)",
            "value": 3958.5689655172414,
            "unit": "ns",
            "range": "± 658.6530616747851"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Tracked,Limit)",
            "value": 4346.049450549451,
            "unit": "ns",
            "range": "± 818.5444027016124"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Tracked,Limit)",
            "value": 448014.07936507935,
            "unit": "ns",
            "range": "± 20399.134083695008"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Tracked,Limit)",
            "value": 438275.2625,
            "unit": "ns",
            "range": "± 22814.116807692375"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Tracked,Limit)",
            "value": 16289.357142857143,
            "unit": "ns",
            "range": "± 210.32021635257368"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Tracked,Limit)",
            "value": 146463.64044943822,
            "unit": "ns",
            "range": "± 12960.059669692171"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Tracked,None)",
            "value": 3519.896551724138,
            "unit": "ns",
            "range": "± 431.4519303975647"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Tracked,None)",
            "value": 3531.2954545454545,
            "unit": "ns",
            "range": "± 416.231482873921"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Tracked,None)",
            "value": 431766.7027027027,
            "unit": "ns",
            "range": "± 13563.389823067555"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Tracked,None)",
            "value": 498291.16,
            "unit": "ns",
            "range": "± 96727.84970816865"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Tracked,None)",
            "value": 21076.066666666666,
            "unit": "ns",
            "range": "± 2827.621392103025"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Tracked,None)",
            "value": 159101.23711340205,
            "unit": "ns",
            "range": "± 21796.310666779707"
          }
        ]
      }
    ]
  }
}