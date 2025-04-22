window.BENCHMARK_DATA = {
  "lastUpdate": 1745344876792,
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
    ],
    "Lua.LuaScriptCacheOperations (ubuntu-latest  net9.0 Release)": [
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
        "date": 1745344846409,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupHit(Params: Managed,Limit)",
            "value": 1110.763440860215,
            "unit": "ns",
            "range": "± 544.2753738338201"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupMiss(Params: Managed,Limit)",
            "value": 957.1875,
            "unit": "ns",
            "range": "± 430.760119165131"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadOuterHit(Params: Managed,Limit)",
            "value": 2010.1145833333333,
            "unit": "ns",
            "range": "± 1414.1589903155698"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadInnerHit(Params: Managed,Limit)",
            "value": 483077.63157894736,
            "unit": "ns",
            "range": "± 10127.306849473447"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadMiss(Params: Managed,Limit)",
            "value": 2160.821052631579,
            "unit": "ns",
            "range": "± 739.8557504452914"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.Digest(Params: Managed,Limit)",
            "value": 11163.541666666666,
            "unit": "ns",
            "range": "± 2604.933016278586"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupHit(Params: Managed,None)",
            "value": 1570.4468085106382,
            "unit": "ns",
            "range": "± 458.5251395418308"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupMiss(Params: Managed,None)",
            "value": 940.0520833333334,
            "unit": "ns",
            "range": "± 390.3851504345736"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadOuterHit(Params: Managed,None)",
            "value": 1811.2444444444445,
            "unit": "ns",
            "range": "± 454.4223536871693"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadInnerHit(Params: Managed,None)",
            "value": 438484.24210526317,
            "unit": "ns",
            "range": "± 31361.059649757615"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadMiss(Params: Managed,None)",
            "value": 1810.1538461538462,
            "unit": "ns",
            "range": "± 277.21471514080616"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.Digest(Params: Managed,None)",
            "value": 8818.714285714286,
            "unit": "ns",
            "range": "± 147.09046330610423"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupHit(Params: Native,None)",
            "value": 1056.1145833333333,
            "unit": "ns",
            "range": "± 489.93311830970026"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupMiss(Params: Native,None)",
            "value": 764.7446808510638,
            "unit": "ns",
            "range": "± 340.25245801677346"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadOuterHit(Params: Native,None)",
            "value": 1621.6483516483515,
            "unit": "ns",
            "range": "± 438.78507453665924"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadInnerHit(Params: Native,None)",
            "value": 413237.1666666667,
            "unit": "ns",
            "range": "± 11993.649049517355"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadMiss(Params: Native,None)",
            "value": 2861.3229166666665,
            "unit": "ns",
            "range": "± 920.2660083943882"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.Digest(Params: Native,None)",
            "value": 16185.887755102041,
            "unit": "ns",
            "range": "± 5415.065100145848"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupHit(Params: Tracked,Limit)",
            "value": 1310.7362637362637,
            "unit": "ns",
            "range": "± 451.3976772244879"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupMiss(Params: Tracked,Limit)",
            "value": 1116.4777777777779,
            "unit": "ns",
            "range": "± 448.6076894695252"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadOuterHit(Params: Tracked,Limit)",
            "value": 2727.53125,
            "unit": "ns",
            "range": "± 1343.9470772249847"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadInnerHit(Params: Tracked,Limit)",
            "value": 497137.3793103448,
            "unit": "ns",
            "range": "± 14370.785107327478"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadMiss(Params: Tracked,Limit)",
            "value": 2021.5333333333333,
            "unit": "ns",
            "range": "± 863.7522461311629"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.Digest(Params: Tracked,Limit)",
            "value": 19010.69,
            "unit": "ns",
            "range": "± 7068.623986643049"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupHit(Params: Tracked,None)",
            "value": 1557.872340425532,
            "unit": "ns",
            "range": "± 861.9968594364683"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LookupMiss(Params: Tracked,None)",
            "value": 1368.223404255319,
            "unit": "ns",
            "range": "± 717.2714787896286"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadOuterHit(Params: Tracked,None)",
            "value": 2662.8865979381444,
            "unit": "ns",
            "range": "± 972.7544105559297"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadInnerHit(Params: Tracked,None)",
            "value": 495067.36842105264,
            "unit": "ns",
            "range": "± 10396.625431202432"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.LoadMiss(Params: Tracked,None)",
            "value": 2394.8846153846152,
            "unit": "ns",
            "range": "± 698.3247854565283"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScriptCacheOperations.Digest(Params: Tracked,None)",
            "value": 12589.056701030928,
            "unit": "ns",
            "range": "± 3148.3358863886074"
          }
        ]
      }
    ],
    "Operations.PubSubOperations (ubuntu-latest  net8.0 Release)": [
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
        "date": 1745344850353,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.PubSubOperations.Publish(Params: ACL)",
            "value": 19466.571678748496,
            "unit": "ns",
            "range": "± 74.7817555248272"
          },
          {
            "name": "BDN.benchmark.Operations.PubSubOperations.Publish(Params: AOF)",
            "value": 18747.426651000977,
            "unit": "ns",
            "range": "± 65.16466906096421"
          },
          {
            "name": "BDN.benchmark.Operations.PubSubOperations.Publish(Params: None)",
            "value": 18157.626218159992,
            "unit": "ns",
            "range": "± 18.200170006288786"
          }
        ]
      }
    ],
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
          "id": "405495a09d449fd0d32eaf18a3bff77cd18d2a11",
          "message": "Change to main to trigger it",
          "timestamp": "2025-04-22T10:57:44-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/405495a09d449fd0d32eaf18a3bff77cd18d2a11"
        },
        "date": 1745344857905,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 134976.1802280971,
            "unit": "ns",
            "range": "± 384.54774833937427"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 161696.75561523438,
            "unit": "ns",
            "range": "± 711.7524366898286"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 138640.5912737165,
            "unit": "ns",
            "range": "± 580.4641110153983"
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
          "id": "405495a09d449fd0d32eaf18a3bff77cd18d2a11",
          "message": "Change to main to trigger it",
          "timestamp": "2025-04-22T10:57:44-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/405495a09d449fd0d32eaf18a3bff77cd18d2a11"
        },
        "date": 1745344869366,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 37748.70445033482,
            "unit": "ns",
            "range": "± 194.3335728977153"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 40257.18956502279,
            "unit": "ns",
            "range": "± 67.10380134925052"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 32308.129869733537,
            "unit": "ns",
            "range": "± 143.03790705435057"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 31677.40547688802,
            "unit": "ns",
            "range": "± 327.5649074075876"
          }
        ]
      }
    ]
  }
}