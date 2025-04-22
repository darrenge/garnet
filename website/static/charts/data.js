window.BENCHMARK_DATA = {
  "lastUpdate": 1745340967085,
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
    ],
    "Operations.SetOperations (ubuntu-latest  net8.0 Release)": [
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
        "date": 1745340912709,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.SetOperations.SAddRem(Params: ACL)",
            "value": 160919.41630859376,
            "unit": "ns",
            "range": "± 898.9696173508323"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SAddPopSingle(Params: ACL)",
            "value": 80930.74029071514,
            "unit": "ns",
            "range": "± 145.68834344689336"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SCard(Params: ACL)",
            "value": 10216.595786461463,
            "unit": "ns",
            "range": "± 20.63698144960449"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SMembers(Params: ACL)",
            "value": 11710.60219515287,
            "unit": "ns",
            "range": "± 26.97420395835108"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SMoveTwice(Params: ACL)",
            "value": 25815.23235966609,
            "unit": "ns",
            "range": "± 24.29014698438955"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SIsMember(Params: ACL)",
            "value": 12288.369863891601,
            "unit": "ns",
            "range": "± 110.05203370153161"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SMIsMember(Params: ACL)",
            "value": 15125.13571472168,
            "unit": "ns",
            "range": "± 62.20720959940145"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SRandMemberSingle(Params: ACL)",
            "value": 12737.498559570313,
            "unit": "ns",
            "range": "± 62.20670628699118"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SScan(Params: ACL)",
            "value": 11208.784298706054,
            "unit": "ns",
            "range": "± 47.30476724143277"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SUnion(Params: ACL)",
            "value": 13310.185660807292,
            "unit": "ns",
            "range": "± 59.33072448158926"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SUnionStore(Params: ACL)",
            "value": 14096.30404663086,
            "unit": "ns",
            "range": "± 64.50116816836933"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SInter(Params: ACL)",
            "value": 12813.470985412598,
            "unit": "ns",
            "range": "± 41.04068133198634"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SInterStore(Params: ACL)",
            "value": 14189.031028238933,
            "unit": "ns",
            "range": "± 46.3609740768133"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SInterCard(Params: ACL)",
            "value": 15661.027717003455,
            "unit": "ns",
            "range": "± 40.10449594088251"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SDiff(Params: ACL)",
            "value": 12583.735334269206,
            "unit": "ns",
            "range": "± 49.49782287478663"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SDiffStore(Params: ACL)",
            "value": 14082.075236002604,
            "unit": "ns",
            "range": "± 74.00300712580766"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SAddRem(Params: AOF)",
            "value": 171844.01463216144,
            "unit": "ns",
            "range": "± 968.7288649892724"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SAddPopSingle(Params: AOF)",
            "value": 181738.10680338542,
            "unit": "ns",
            "range": "± 1262.5531467546534"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SCard(Params: AOF)",
            "value": 52794.41711425781,
            "unit": "ns",
            "range": "± 183.54993987018383"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SMembers(Params: AOF)",
            "value": 49188.734545026506,
            "unit": "ns",
            "range": "± 196.53126855535538"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SMoveTwice(Params: AOF)",
            "value": 255664.0424107143,
            "unit": "ns",
            "range": "± 1191.0165175768332"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SIsMember(Params: AOF)",
            "value": 49943.117614746094,
            "unit": "ns",
            "range": "± 174.54896838337805"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SMIsMember(Params: AOF)",
            "value": 56731.52073974609,
            "unit": "ns",
            "range": "± 279.7951753702396"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SRandMemberSingle(Params: AOF)",
            "value": 58725.064771379744,
            "unit": "ns",
            "range": "± 150.249007872837"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SScan(Params: AOF)",
            "value": 73790.85155436197,
            "unit": "ns",
            "range": "± 335.8133096697435"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SUnion(Params: AOF)",
            "value": 165099.43540039062,
            "unit": "ns",
            "range": "± 1454.7119489342992"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SUnionStore(Params: AOF)",
            "value": 252652.20040457588,
            "unit": "ns",
            "range": "± 1610.1308392093856"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SInter(Params: AOF)",
            "value": 153426.2503192608,
            "unit": "ns",
            "range": "± 472.11981566011445"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SInterStore(Params: AOF)",
            "value": 240644.66768973213,
            "unit": "ns",
            "range": "± 1439.1562971029357"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SInterCard(Params: AOF)",
            "value": 156068.18059082032,
            "unit": "ns",
            "range": "± 730.1024390826835"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SDiff(Params: AOF)",
            "value": 156441.6717529297,
            "unit": "ns",
            "range": "± 435.4923939063189"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SDiffStore(Params: AOF)",
            "value": 239634.94385579426,
            "unit": "ns",
            "range": "± 1003.1711540214734"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SAddRem(Params: None)",
            "value": 161361.8937174479,
            "unit": "ns",
            "range": "± 874.6327277052239"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SAddPopSingle(Params: None)",
            "value": 170770.97185407366,
            "unit": "ns",
            "range": "± 1081.164989255033"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SCard(Params: None)",
            "value": 56516.61960710798,
            "unit": "ns",
            "range": "± 174.4006391118287"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SMembers(Params: None)",
            "value": 47733.13252766927,
            "unit": "ns",
            "range": "± 216.56869481821613"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SMoveTwice(Params: None)",
            "value": 236332.16188151043,
            "unit": "ns",
            "range": "± 1126.2300910549873"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SIsMember(Params: None)",
            "value": 52165.136419677736,
            "unit": "ns",
            "range": "± 327.57012447422346"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SMIsMember(Params: None)",
            "value": 58612.63926188151,
            "unit": "ns",
            "range": "± 161.95564672162988"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SRandMemberSingle(Params: None)",
            "value": 55834.11523873465,
            "unit": "ns",
            "range": "± 228.99581888165244"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SScan(Params: None)",
            "value": 62701.77025349935,
            "unit": "ns",
            "range": "± 212.08248894106728"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SUnion(Params: None)",
            "value": 150036.02112630208,
            "unit": "ns",
            "range": "± 690.8709414854121"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SUnionStore(Params: None)",
            "value": 212151.132430013,
            "unit": "ns",
            "range": "± 1691.4055930465795"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SInter(Params: None)",
            "value": 142658.15021623884,
            "unit": "ns",
            "range": "± 519.4004218085668"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SInterStore(Params: None)",
            "value": 195570.49087727864,
            "unit": "ns",
            "range": "± 905.8151032041794"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SInterCard(Params: None)",
            "value": 144108.2061593192,
            "unit": "ns",
            "range": "± 369.67791908806845"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SDiff(Params: None)",
            "value": 171046.57748647837,
            "unit": "ns",
            "range": "± 463.9533972307608"
          },
          {
            "name": "BDN.benchmark.Operations.SetOperations.SDiffStore(Params: None)",
            "value": 204173.906703404,
            "unit": "ns",
            "range": "± 633.0477597041632"
          }
        ]
      }
    ],
    "Operations.CustomOperations (ubuntu-latest  net9.0 Release)": [
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
        "date": 1745340957321,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: ACL)",
            "value": 31369.568093436104,
            "unit": "ns",
            "range": "± 43.85862186318358"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: ACL)",
            "value": 141212.08990885416,
            "unit": "ns",
            "range": "± 1407.0694056470313"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: ACL)",
            "value": 111041.53783365885,
            "unit": "ns",
            "range": "± 494.6126258453174"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: ACL)",
            "value": 73422.54524739583,
            "unit": "ns",
            "range": "± 655.7814876157761"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: AOF)",
            "value": 31507.00844828288,
            "unit": "ns",
            "range": "± 44.57498766397584"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: AOF)",
            "value": 146381.85147530693,
            "unit": "ns",
            "range": "± 659.1812966507696"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: AOF)",
            "value": 121711.08104654947,
            "unit": "ns",
            "range": "± 603.5808383774825"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: AOF)",
            "value": 100181.36900916466,
            "unit": "ns",
            "range": "± 220.43335839064594"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomRawStringCommand(Params: None)",
            "value": 32381.730970110213,
            "unit": "ns",
            "range": "± 42.612460689628676"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomObjectCommand(Params: None)",
            "value": 140150.71295166016,
            "unit": "ns",
            "range": "± 304.5109581766285"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomTransaction(Params: None)",
            "value": 110533.33171793619,
            "unit": "ns",
            "range": "± 484.97178945045704"
          },
          {
            "name": "BDN.benchmark.Operations.CustomOperations.CustomProcedure(Params: None)",
            "value": 72820.8518348107,
            "unit": "ns",
            "range": "± 323.775637990856"
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
          "id": "ac88d4a51e60048efc5a675726d3e9d0957b3fc6",
          "message": "Just change to main so benchmark fires off",
          "timestamp": "2025-04-22T09:30:39-07:00",
          "tree_id": "12b9b2524ad0e2baf6d7d66b53786fa27da70760",
          "url": "https://github.com/darrenge/garnet/commit/ac88d4a51e60048efc5a675726d3e9d0957b3fc6"
        },
        "date": 1745340960313,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Managed,Limit)",
            "value": 3707.3651685393256,
            "unit": "ns",
            "range": "± 483.40250476584384"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Managed,Limit)",
            "value": 3143.4666666666667,
            "unit": "ns",
            "range": "± 64.44916786193005"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Managed,Limit)",
            "value": 460111.8181818182,
            "unit": "ns",
            "range": "± 54976.58560647612"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Managed,Limit)",
            "value": 409154.24,
            "unit": "ns",
            "range": "± 56869.99267630008"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Managed,Limit)",
            "value": 17948.297872340427,
            "unit": "ns",
            "range": "± 3515.993420485688"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Managed,Limit)",
            "value": 157684.47474747474,
            "unit": "ns",
            "range": "± 22655.742105116304"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Managed,None)",
            "value": 3199.6739130434785,
            "unit": "ns",
            "range": "± 478.3890000365271"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Managed,None)",
            "value": 3652.5,
            "unit": "ns",
            "range": "± 365.1476921447699"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Managed,None)",
            "value": 408636.07,
            "unit": "ns",
            "range": "± 56596.73029286704"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Managed,None)",
            "value": 467631.70408163266,
            "unit": "ns",
            "range": "± 75575.75263164347"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Managed,None)",
            "value": 21993.652173913044,
            "unit": "ns",
            "range": "± 4565.604645475387"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Managed,None)",
            "value": 165724.32474226804,
            "unit": "ns",
            "range": "± 23780.67532069996"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Native,None)",
            "value": 4581.563829787234,
            "unit": "ns",
            "range": "± 1108.1391508300655"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Native,None)",
            "value": 3856.8977272727275,
            "unit": "ns",
            "range": "± 686.8028133042202"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Native,None)",
            "value": 353143.4428571428,
            "unit": "ns",
            "range": "± 11567.199348214957"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Native,None)",
            "value": 395972.3,
            "unit": "ns",
            "range": "± 64867.6239630847"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Native,None)",
            "value": 15900.760869565218,
            "unit": "ns",
            "range": "± 1795.0110983743662"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Native,None)",
            "value": 161680.05670103093,
            "unit": "ns",
            "range": "± 25427.773683501182"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Tracked,Limit)",
            "value": 3405.3076923076924,
            "unit": "ns",
            "range": "± 748.9032231248826"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Tracked,Limit)",
            "value": 3316.0967741935483,
            "unit": "ns",
            "range": "± 607.1430435371619"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Tracked,Limit)",
            "value": 464155.7413793103,
            "unit": "ns",
            "range": "± 13358.824393997218"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Tracked,Limit)",
            "value": 467069.8823529412,
            "unit": "ns",
            "range": "± 26222.12066104084"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Tracked,Limit)",
            "value": 20782.829545454544,
            "unit": "ns",
            "range": "± 2135.106020257009"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Tracked,Limit)",
            "value": 176466.8,
            "unit": "ns",
            "range": "± 24756.055290897166"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersSmall(Params: Tracked,None)",
            "value": 3334.2555555555555,
            "unit": "ns",
            "range": "± 606.9700085349555"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ResetParametersLarge(Params: Tracked,None)",
            "value": 4354.622222222222,
            "unit": "ns",
            "range": "± 754.3303277217807"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructSmall(Params: Tracked,None)",
            "value": 463192.6756756757,
            "unit": "ns",
            "range": "± 15555.640622284564"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.ConstructLarge(Params: Tracked,None)",
            "value": 541660.68,
            "unit": "ns",
            "range": "± 96312.9588954129"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionSmall(Params: Tracked,None)",
            "value": 36606.762886597935,
            "unit": "ns",
            "range": "± 8228.613481541604"
          },
          {
            "name": "BDN.benchmark.Lua.LuaRunnerOperations.CompileForSessionLarge(Params: Tracked,None)",
            "value": 183754.04545454544,
            "unit": "ns",
            "range": "± 28220.128431299432"
          }
        ]
      }
    ]
  }
}