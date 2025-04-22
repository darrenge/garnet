window.BENCHMARK_DATA = {
  "lastUpdate": 1745338906858,
  "repoUrl": "https://github.com/darrenge/garnet",
  "entries": {
    "Network.BasicOperations (ubuntu-latest  net9.0 Release)": [
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
          "id": "ff40f08003da7409e329b455acb1e8805e3616e9",
          "message": "Updated to main",
          "timestamp": "2025-04-22T09:18:00-07:00",
          "tree_id": "1697ee5b26ded92e3d98070bacca54bc950e95c7",
          "url": "https://github.com/darrenge/garnet/commit/ff40f08003da7409e329b455acb1e8805e3616e9"
        },
        "date": 1745338876993,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Network.BasicOperations.InlinePing(Params: None)",
            "value": 83.11810561418534,
            "unit": "ns",
            "range": "± 0.42326322381170567"
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
          "id": "ff40f08003da7409e329b455acb1e8805e3616e9",
          "message": "Updated to main",
          "timestamp": "2025-04-22T09:18:00-07:00",
          "tree_id": "1697ee5b26ded92e3d98070bacca54bc950e95c7",
          "url": "https://github.com/darrenge/garnet/commit/ff40f08003da7409e329b455acb1e8805e3616e9"
        },
        "date": 1745338890841,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Network.BasicOperations.InlinePing(Params: None)",
            "value": 87.03614935477574,
            "unit": "ns",
            "range": "± 0.376945503248046"
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
          "id": "ff40f08003da7409e329b455acb1e8805e3616e9",
          "message": "Updated to main",
          "timestamp": "2025-04-22T09:18:00-07:00",
          "tree_id": "1697ee5b26ded92e3d98070bacca54bc950e95c7",
          "url": "https://github.com/darrenge/garnet/commit/ff40f08003da7409e329b455acb1e8805e3616e9"
        },
        "date": 1745338898791,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: ACL)",
            "value": 138913.25126765325,
            "unit": "ns",
            "range": "± 560.2848928884813"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: AOF)",
            "value": 153263.02821451824,
            "unit": "ns",
            "range": "± 435.2773937866864"
          },
          {
            "name": "BDN.benchmark.Operations.ObjectOperations.LPushPop(Params: None)",
            "value": 137251.32361653645,
            "unit": "ns",
            "range": "± 940.8588728366443"
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
          "id": "ff40f08003da7409e329b455acb1e8805e3616e9",
          "message": "Updated to main",
          "timestamp": "2025-04-22T09:18:00-07:00",
          "tree_id": "1697ee5b26ded92e3d98070bacca54bc950e95c7",
          "url": "https://github.com/darrenge/garnet/commit/ff40f08003da7409e329b455acb1e8805e3616e9"
        },
        "date": 1745338900113,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "BDN.benchmark.Operations.PubSubOperations.Publish(Params: ACL)",
            "value": 18658.884461622973,
            "unit": "ns",
            "range": "± 38.86865340669859"
          },
          {
            "name": "BDN.benchmark.Operations.PubSubOperations.Publish(Params: AOF)",
            "value": 18417.910304478235,
            "unit": "ns",
            "range": "± 64.23678292080508"
          },
          {
            "name": "BDN.benchmark.Operations.PubSubOperations.Publish(Params: None)",
            "value": 19115.19663297213,
            "unit": "ns",
            "range": "± 19.064947660878662"
          }
        ]
      }
    ]
  }
}