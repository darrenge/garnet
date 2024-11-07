"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9972],{6548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=n(4848),r=n(8453);const a={id:"intro",sidebar_label:"Intro",title:"Welcome to Garnet",slug:"/"},o="Welcome to Garnet",i={id:"welcome/intro",title:"Welcome to Garnet",description:"Garnet is a new remote cache-store from Microsoft Research, that is designed to be extremely fast, extensible,",source:"@site/docs/welcome/intro.md",sourceDirName:"welcome",slug:"/",permalink:"/garnet/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/welcome/intro.md",tags:[],version:"current",frontMatter:{id:"intro",sidebar_label:"Intro",title:"Welcome to Garnet",slug:"/"},sidebar:"garnetDocSidebar",next:{title:"News",permalink:"/garnet/docs/welcome/news"}},c={},l=[{value:"API Coverage",id:"api-coverage",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"welcome-to-garnet",children:"Welcome to Garnet"})}),"\n",(0,s.jsx)(t.p,{children:"Garnet is a new remote cache-store from Microsoft Research, that is designed to be extremely fast, extensible,\nand low latency. Garnet is thread-scalable within a single node. It also supports sharded cluster execution,\nwith replication, checkpointing, failover, and transactions. It can operate over main memory as well as\ntiered storage (such as SSD and Azure Storage). Garnet supports a rich API surface and a powerful extensibility\nmodel."}),"\n",(0,s.jsxs)(t.p,{children:["Garnet uses Redis' RESP as its primary wire protocol. Thus, one can use Garnet with unmodified Redis clients\n",(0,s.jsx)(t.a,{href:"https://redis.io/docs/latest/develop/connect/clients/",children:"available"})," in most programming languages, for example, with ",(0,s.jsx)(t.a,{href:"https://github.com/StackExchange/StackExchange.Redis",children:"StackExchange.Redis"}),"\nin C#. Compared to other open-source cache-stores, you get much better performance, latency, extensibility, and durability features."]}),"\n",(0,s.jsx)(t.p,{children:"Note that Garnet is a research project from Microsoft Research, and the project should be treated as such. That said, we are bunch\nof highly passionate researchers and developers working on it full-time at the moment to make it as stable and efficient as we\ncan. Our goal is to create a vibrant community around Garnet. In fact, Garnet has been of sufficiently high quality that several\nfirst-party and platform teams at Microsoft have deployed versions of Garnet internally for many months now."}),"\n",(0,s.jsx)(t.p,{children:"Garnet offers the following key advantages:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Orders-of-magnitude better server throughput (ops/sec) with small batches and many client sessions, relative to\ncomparable open-source cache-stores."}),"\n",(0,s.jsx)(t.li,{children:"Extremely low single operation latency (often less than 300 microseconds at the 99.9th percentile) on commodity cloud\n(Azure) machines with accelerated TCP enabled, on both Windows and Linux."}),"\n",(0,s.jsx)(t.li,{children:"Better scalability as we increase the number of clients, with or without client-side batching."}),"\n",(0,s.jsx)(t.li,{children:"The ability to use all CPU/memory resources of a server machine with a single shared-memory server instance\n(no intra-node cluster needed)."}),"\n",(0,s.jsx)(t.li,{children:"Support for larger-than-memory datasets, spilling to local and cloud storage devices."}),"\n",(0,s.jsx)(t.li,{children:"Database features such as fast checkpointing and recovery, and publish/subscribe."}),"\n",(0,s.jsx)(t.li,{children:'Support for multi-node sharded hash partitioning (Redis "cluster" mode), state migration, and replication.'}),"\n",(0,s.jsx)(t.li,{children:"Well tested with a comprehensive test suite (thousands of unit tests across Garnet and its storage layer Tsavorite)."}),"\n",(0,s.jsx)(t.li,{children:"A C# codebase that is easy to evolve and extend."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you need a cache-store for your application or service, with lots of practical features, high performance, and a\nmodern design based on state-of-the-art Microsoft Research technology, then Garnet is the system for you. Check out\nmore details on Garnet's performance advantages ",(0,s.jsx)(t.a,{href:"/garnet/docs/benchmarking/overview",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"api-coverage",children:"API Coverage"}),"\n",(0,s.jsxs)(t.p,{children:["Garnet supports a large (and growing) ",(0,s.jsx)(t.a,{href:"/garnet/docs/commands/api-compatibility",children:"API surface"}),", including:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Raw string operations such as GET, SET, MGET, MSET, GETSET, SETEX, DEL, EXISTS, RENAME, EXPIRE, SET variants (set if exists, set if not exists)."}),"\n",(0,s.jsx)(t.li,{children:"Numeric operations such as INCR, INCRBY, DECR, DECRBY."}),"\n",(0,s.jsx)(t.li,{children:"Checkpoint/recovery ops such as SAVE, LASTSAVE, BGSAVE."}),"\n",(0,s.jsx)(t.li,{children:"Basic admin ops such as PING, QUIT, CONFIG, RESET, TIME."}),"\n",(0,s.jsx)(t.li,{children:"Advanced data structures such as List, Hash, Set, Sorted Set, and Geo."}),"\n",(0,s.jsx)(t.li,{children:"Analytics APIs such as Hyperloglog and Bitmap."}),"\n",(0,s.jsx)(t.li,{children:"Publish/subscribe."}),"\n",(0,s.jsx)(t.li,{children:"Transactions."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The list is growing over time, and we would love to hear from you on what APIs you want the most!"}),"\n",(0,s.jsxs)(t.p,{children:["Further, Garnet supports a powerful custom operator framework whereby you can register custom  C# data structures and read-modify-write operations on the server, and access them\nusing the same wire protocol. Thus, you can invoke these commands using clients' ability to execute new commands, e.g., the ",(0,s.jsx)(t.code,{children:"Execute"})," and ",(0,s.jsx)(t.code,{children:"ExecuteAsync"})," calls in the\nStackExchange.Redis client library."]}),"\n",(0,s.jsx)(t.h2,{id:"platforms-supported",children:"Platforms Supported"}),"\n",(0,s.jsx)(t.p,{children:"Garnet server is based on high-performance .NET technology written from the ground up with performance\nin mind. Garnet has been extensively tested to work equally efficiently on both Linux and Windows,\nand on commodity Azure hardware as well as edge devices."}),"\n",(0,s.jsx)(t.p,{children:"One can also view Garnet as an incredibly fast remote .NET data structure server that can be extended\nby leveraging the rich ecosystem of C# libraries, so we can expand beyond the core API. Garnet's\nstorage layer is called Tsavorite, which supports for various backing storage devices such as fast\nlocal SSD drives and Azure Storage. It has devices optimized for Windows and Linux as well. Finally,\nGarnet supports TLS for secure connections."}),"\n",(0,s.jsx)("sub",{children:(0,s.jsx)(t.p,{children:"Redis is a registered trademark of Redis Ltd. Any rights therein are reserved to Redis Ltd. Any use by Microsoft is for referential purposes only and does not indicate any sponsorship, endorsement or affiliation between Redis and Microsoft."})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(6540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);