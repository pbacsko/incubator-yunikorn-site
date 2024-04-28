"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[66115],{18208:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=r(13274),s=r(1780);const i={id:"architecture",title:"Architecture"},c=void 0,o={id:"design/architecture",title:"Architecture",description:"\x3c!--",source:"@site/versioned_docs/version-1.1.0/design/architecture.md",sourceDirName:"design",slug:"/design/architecture",permalink:"/docs/1.1.0/design/architecture",draft:!1,unlisted:!1,tags:[],version:"1.1.0",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docs",previous:{title:"Development in CodeReady Containers",permalink:"/docs/1.1.0/developer_guide/openshift_development"},next:{title:"Kubernetes Shim Design",permalink:"/docs/1.1.0/design/k8shim"}},a={},h=[{value:"Architecture",id:"architecture",level:2},{value:"Components",id:"components",level:2},{value:"Scheduler interface",id:"scheduler-interface",level:3},{value:"Scheduler core",id:"scheduler-core",level:3},{value:"Kubernetes shim",id:"kubernetes-shim",level:3}];function l(e){const n={a:"a",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Apache YuniKorn is a light-weight, universal resource scheduler for container orchestrator systems.\nIt is created to achieve fine-grained resource sharing for various workloads efficiently on a large scale, multi-tenant,\nand cloud-native environment. YuniKorn brings a unified, cross-platform, scheduling experience for mixed workloads that\nconsist of stateless batch workloads and stateful services."}),"\n",(0,t.jsx)(n.p,{children:"YuniKorn now supports K8s and can be deployed as a custom K8s scheduler. YuniKorn's architecture design also allows\nadding different shim layer and adopt to different ResourceManager implementation including Apache Hadoop YARN,\nor any other systems."}),"\n",(0,t.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,t.jsx)(n.p,{children:"Following chart illustrates the high-level architecture of YuniKorn."}),"\n",(0,t.jsx)("img",{src:r(34697).A}),"\n",(0,t.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,t.jsx)(n.h3,{id:"scheduler-interface",children:"Scheduler interface"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-scheduler-interface",children:"Scheduler interface"})," is an abstract layer\nwhich resource management platform (like YARN/K8s) will speak with, via API like GRPC/programing language bindings."]}),"\n",(0,t.jsx)(n.h3,{id:"scheduler-core",children:"Scheduler core"}),"\n",(0,t.jsxs)(n.p,{children:["Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-scheduler-interface",children:"scheduler interface"}),".\nPlease read more about the design of schedule core ",(0,t.jsx)(n.a,{href:"/docs/1.1.0/design/scheduler_core_design",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"kubernetes-shim",children:"Kubernetes shim"}),"\n",(0,t.jsxs)(n.p,{children:["The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the ",(0,t.jsx)(n.a,{href:"https://github.com/apache/yunikorn-scheduler-interface",children:"scheduler interface"}),".\nPlease read more about the design of the Kubernetes shim ",(0,t.jsx)(n.a,{href:"/docs/1.1.0/design/k8shim",children:"here"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},34697:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/architecture-333225e01d82300eb9ee34e76cf34697.png"},1780:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(79474);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);