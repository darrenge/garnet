window.BENCHMARK_DATA = {
  "lastUpdate": 1745340794231,
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
    ],
    "Cluster.ClusterMigrate (ubuntu-latest  net9.0 Release)": [
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
        "date": 1745340393498,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Get(Params: None)",
            "value": 35620.89532267253,
            "unit": "ns",
            "range": "± 185.84986530418234"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.Set(Params: None)",
            "value": 36330.173865685094,
            "unit": "ns",
            "range": "± 52.2692562946736"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MGet(Params: None)",
            "value": 31502.75165968675,
            "unit": "ns",
            "range": "± 62.3263029691204"
          },
          {
            "name": "BDN.benchmark.Cluster.ClusterMigrate.MSet(Params: None)",
            "value": 30335.514185587566,
            "unit": "ns",
            "range": "± 42.61685955907813"
          }
        ]
      }
    ],
    "Lua.LuaScripts (windows-latest  net8.0 Release)": [
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
        "date": 1745340551247,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: Managed,Limit)",
            "value": 160.4272450719561,
            "unit": "ns",
            "range": "± 0.22529847320780533"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: Managed,Limit)",
            "value": 193.02358945210776,
            "unit": "ns",
            "range": "± 0.32337640797195877"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: Managed,Limit)",
            "value": 315.4233387538365,
            "unit": "ns",
            "range": "± 0.35469039998578716"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: Managed,Limit)",
            "value": 361.8505398432414,
            "unit": "ns",
            "range": "± 0.48405170378256657"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: Managed,None)",
            "value": 160.2005090032305,
            "unit": "ns",
            "range": "± 0.1602394709599001"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: Managed,None)",
            "value": 192.72062961871808,
            "unit": "ns",
            "range": "± 0.19321166289815322"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: Managed,None)",
            "value": 336.37343724568683,
            "unit": "ns",
            "range": "± 0.5609881842759706"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: Managed,None)",
            "value": 356.33399145943775,
            "unit": "ns",
            "range": "± 0.6584865407849942"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: Native,None)",
            "value": 156.86967883791243,
            "unit": "ns",
            "range": "± 0.20556599386260732"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: Native,None)",
            "value": 190.74838161468506,
            "unit": "ns",
            "range": "± 0.28282157110015405"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: Native,None)",
            "value": 318.4106667836507,
            "unit": "ns",
            "range": "± 0.6465930072296889"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: Native,None)",
            "value": 356.9261516843523,
            "unit": "ns",
            "range": "± 0.26299369346845786"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: Tracked,Limit)",
            "value": 162.6338073185512,
            "unit": "ns",
            "range": "± 0.5266485553706706"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: Tracked,Limit)",
            "value": 193.1558187191303,
            "unit": "ns",
            "range": "± 0.25883015659038017"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: Tracked,Limit)",
            "value": 313.5739363156832,
            "unit": "ns",
            "range": "± 0.4588629779331905"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: Tracked,Limit)",
            "value": 368.83658091227215,
            "unit": "ns",
            "range": "± 0.632066432822375"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script1(Params: Tracked,None)",
            "value": 171.96905771891275,
            "unit": "ns",
            "range": "± 0.21071617084223412"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script2(Params: Tracked,None)",
            "value": 193.05822531382242,
            "unit": "ns",
            "range": "± 0.32981275998900345"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script3(Params: Tracked,None)",
            "value": 316.3060631070818,
            "unit": "ns",
            "range": "± 0.4231688111139674"
          },
          {
            "name": "BDN.benchmark.Lua.LuaScripts.Script4(Params: Tracked,None)",
            "value": 364.23635482788086,
            "unit": "ns",
            "range": "± 0.6834958208315117"
          }
        ]
      }
    ],
    "Operations.ModuleOperations (ubuntu-latest  net9.0 Release)": [
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
        "date": 1745340590620,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpRawStringReadCommand(Params: ACL)",
            "value": 29507.8073185512,
            "unit": "ns",
            "range": "± 149.85751152735594"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpRawStringRmwCommand(Params: ACL)",
            "value": 38199.11060878209,
            "unit": "ns",
            "range": "± 227.9159408155961"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpObjRmwCommand(Params: ACL)",
            "value": 55859.71571044922,
            "unit": "ns",
            "range": "± 277.9816869831716"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpObjReadCommand(Params: ACL)",
            "value": 58660.04498697917,
            "unit": "ns",
            "range": "± 235.82333424697666"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpProc(Params: ACL)",
            "value": 15168.008171081543,
            "unit": "ns",
            "range": "± 83.90978772676421"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpTxn(Params: ACL)",
            "value": 26703.27557881673,
            "unit": "ns",
            "range": "± 152.07418275429356"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleJsonGetCommand(Params: ACL)",
            "value": 144733.0444617638,
            "unit": "ns",
            "range": "± 700.7129834939238"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleJsonSetCommand(Params: ACL)",
            "value": 250257.40985576922,
            "unit": "ns",
            "range": "± 2073.5043996119216"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpRawStringReadCommand(Params: AOF)",
            "value": 29254.18541056315,
            "unit": "ns",
            "range": "± 129.0416868341085"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpRawStringRmwCommand(Params: AOF)",
            "value": 44004.34912344126,
            "unit": "ns",
            "range": "± 92.4457990490477"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpObjRmwCommand(Params: AOF)",
            "value": 62625.626334054126,
            "unit": "ns",
            "range": "± 520.6310848814893"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpObjReadCommand(Params: AOF)",
            "value": 57045.05567714146,
            "unit": "ns",
            "range": "± 101.34916694103137"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpProc(Params: AOF)",
            "value": 16009.553067720854,
            "unit": "ns",
            "range": "± 41.11336200801597"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpTxn(Params: AOF)",
            "value": 33177.74995117188,
            "unit": "ns",
            "range": "± 138.94476430079243"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleJsonGetCommand(Params: AOF)",
            "value": 145076.5325032552,
            "unit": "ns",
            "range": "± 1160.3869585685422"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleJsonSetCommand(Params: AOF)",
            "value": 256747.77232142858,
            "unit": "ns",
            "range": "± 1746.6448076151323"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpRawStringReadCommand(Params: None)",
            "value": 29291.268151855467,
            "unit": "ns",
            "range": "± 173.69861149484262"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpRawStringRmwCommand(Params: None)",
            "value": 37871.83758544922,
            "unit": "ns",
            "range": "± 309.0100355447424"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpObjRmwCommand(Params: None)",
            "value": 54195.43075358073,
            "unit": "ns",
            "range": "± 216.62554076706476"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpObjReadCommand(Params: None)",
            "value": 57503.627893066405,
            "unit": "ns",
            "range": "± 222.73065107737492"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpProc(Params: None)",
            "value": 15055.813385518391,
            "unit": "ns",
            "range": "± 48.57749912690104"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleNoOpTxn(Params: None)",
            "value": 27581.415613810223,
            "unit": "ns",
            "range": "± 34.556395820880155"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleJsonGetCommand(Params: None)",
            "value": 145659.24817708333,
            "unit": "ns",
            "range": "± 1051.513978994763"
          },
          {
            "name": "BDN.benchmark.Operations.ModuleOperations.ModuleJsonSetCommand(Params: None)",
            "value": 250124.3251953125,
            "unit": "ns",
            "range": "± 2579.214903415918"
          }
        ]
      }
    ],
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
          "id": "ac88d4a51e60048efc5a675726d3e9d0957b3fc6",
          "message": "Just change to main so benchmark fires off",
          "timestamp": "2025-04-22T09:30:39-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/ac88d4a51e60048efc5a675726d3e9d0957b3fc6"
        },
        "date": 1745340786940,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Network.BasicOperations.InlinePing(Params: None)",
            "value": 87.58863882835095,
            "unit": "ns",
            "range": "± 0.21339096818898767"
          }
        ]
      }
    ]
  }
}