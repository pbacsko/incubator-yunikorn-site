"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43169],{15680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>g});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=a,g=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return t?n.createElement(g,o(o({ref:r},l),{},{components:t})):n.createElement(g,o({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68688:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(58168),a=(t(96540),t(15680));const i={id:"core_features",title:"Features",keywords:["feature"]},o=void 0,s={unversionedId:"get_started/core_features",id:"get_started/core_features",title:"Features",description:"\x3c!--",source:"@site/docs/get_started/core_features.md",sourceDirName:"get_started",slug:"/get_started/core_features",permalink:"/docs/next/get_started/core_features",draft:!1,tags:[],version:"current",frontMatter:{id:"core_features",title:"Features",keywords:["feature"]},sidebar:"docs",previous:{title:"Get Started",permalink:"/docs/next/"},next:{title:"Version details",permalink:"/docs/next/get_started/version"}},u={},c=[{value:"App-aware scheduling",id:"app-aware-scheduling",level:2},{value:"Hierarchy Resource Queues",id:"hierarchy-resource-queues",level:2},{value:"Gang Scheduling",id:"gang-scheduling",level:2},{value:"Job Ordering and Queuing",id:"job-ordering-and-queuing",level:2},{value:"Resource fairness",id:"resource-fairness",level:2},{value:"Resource Reservation",id:"resource-reservation",level:2},{value:"Preemption",id:"preemption",level:2},{value:"Throughput",id:"throughput",level:2},{value:"MaxApplication Enforcement",id:"maxapplication-enforcement",level:2},{value:"CPU Architecture support",id:"cpu-architecture-support",level:2}],l={toc:c},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The main features of YuniKorn include:"),(0,a.yg)("h2",{id:"app-aware-scheduling"},"App-aware scheduling"),(0,a.yg)("p",null,"One of the key differences of YuniKorn is, it does app-aware scheduling. In default K8s scheduler, it simply schedules\npod by pod, without any context about user, app, queue. However, YuniKorn recognizes users, apps, queues, and it considers\na lot more factors, e.g resource, ordering etc, while making scheduling decisions. This gives us the possibility to do\nfine-grained controls on resource quotas, resource fairness and priorities, which are the most important requirements\nfor a multi-tenancy computing system."),(0,a.yg)("h2",{id:"hierarchy-resource-queues"},"Hierarchy Resource Queues"),(0,a.yg)("p",null,"Hierarchy queues provide an efficient mechanism to manage cluster resources. The hierarchy of the queues can logically\nmap to the structure of an organization. This gives fine-grained control over resources for different tenants. The YuniKorn\nUI provides a centralised view to monitor the usage of resource queues, it helps you to get the insight how the resources are\nused across different tenants. What's more, By leveraging the min/max queue capacity, it can define how elastic it can be\nin terms of the resource consumption for each tenant."),(0,a.yg)("h2",{id:"gang-scheduling"},"Gang Scheduling"),(0,a.yg)("p",null,"An application can request a set of resources, i.e. a gang, to be scheduled all at once.\nThe gang defines all the resources the application requires to start.\nDuring the first scheduling phase all resources requested will be reserved.\nThe application will only be started when all requested resources are available."),(0,a.yg)("p",null,"Reservation duration and application behaviour when the reservation fails are configurable.\nIt is even possible to create multiple gangs of different specifications for one application.\nSee the ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/design/gang_scheduling"},"gang design")," and the Gang Scheduling ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/user_guide/gang_scheduling"},"user guide")," for more details."),(0,a.yg)("h2",{id:"job-ordering-and-queuing"},"Job Ordering and Queuing"),(0,a.yg)("p",null,"Applications can be properly queued in working-queues, the ordering policy determines which application can get resources first.\nThe policy can be various, such as simple ",(0,a.yg)("inlineCode",{parentName:"p"},"FIFO"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Fair"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"StateAware")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"Priority")," based. Queues can maintain the order of applications,\nand based on different policies, the scheduler allocates resources to jobs accordingly. The behavior is much more predictable."),(0,a.yg)("p",null,"What's more, when the queue max-capacity is configured, jobs and tasks can be properly queued up in the resource queue.\nIf the remaining capacity is not enough, they can be waiting in line until some resources are released. This simplifies\nthe client side operation. Unlike the default scheduler, resources are capped by namespace resource quotas,\nand that is enforced by the quota-admission-controller, if the underneath namespace has no enough quota, pods cannot be\ncreated. Client side needs complex logic, e.g retry by condition, to handle such scenarios."),(0,a.yg)("h2",{id:"resource-fairness"},"Resource fairness"),(0,a.yg)("p",null,"In a multi-tenant environment, a lot of users are sharing cluster resources. To avoid tenants from competing resources\nand potential get starving. More fine-grained fairness needs to achieve fairness across users, as well as teams/organizations.\nWith consideration of weights or priorities, some more important applications can get high demand resources that stand over its share.\nThis is often associated with resource budget, a more fine-grained fairness mode can further improve the expense control."),(0,a.yg)("h2",{id:"resource-reservation"},"Resource Reservation"),(0,a.yg)("p",null,"YuniKorn automatically does reservations for outstanding requests. If a pod could not be allocated, YuniKorn will try to\nreserve it on a qualified node and tentatively allocate the pod on this reserved node (before trying rest of nodes).\nThis mechanism can avoid this pod gets starved by later submitted smaller, less-picky pods.\nThis feature is important in the batch workloads scenario because when a large amount of heterogeneous pods is submitted\nto the cluster, it's very likely some pods can be starved even they are submitted much earlier. "),(0,a.yg)("h2",{id:"preemption"},"Preemption"),(0,a.yg)("p",null,"YuniKorn's preemption feature allows higher-priority tasks to dynamically reallocate resources by preempting lower-priority ones, ensuring critical workloads get necessary resources in a multi-tenant Kubernetes environment. This proactive mechanism maintains system stability and fairness, integrating with Kubernetes' priority classes and YuniKorn's hierarchical queue system."),(0,a.yg)("h2",{id:"throughput"},"Throughput"),(0,a.yg)("p",null,"Throughput is a key criterion to measure scheduler performance. It is critical for a large scale distributed system.\nIf throughput is bad, applications may waste time on waiting for scheduling, and further impact service SLAs.\nWhen the cluster gets bigger, it also means the requirement of higher throughput. The ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/performance/evaluate_perf_function_with_kubemark"},"performance evaluation based on Kube-mark"),"\nreveals some perf numbers."),(0,a.yg)("h2",{id:"maxapplication-enforcement"},"MaxApplication Enforcement"),(0,a.yg)("p",null,"MaxApplication enforcement feature allows users to limit the number of running applications for a configured queue.\nThis feature is critical in large scale batch workloads.\nWithout this feature, when there are a large number of concurrent jobs launched, they would compete for resources and a certain a mount of resources will be wasted, which could lead to job failure.\nThe ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/user_guide/queue_config"},"Partition and Queue Configuration")," provides configuration examples."),(0,a.yg)("h2",{id:"cpu-architecture-support"},"CPU Architecture support"),(0,a.yg)("p",null,"YuniKorn supports running on ARM as well as on AMD/Intel CPUs.\nWith the release of YuniKorn 1.1.0 prebuilt convenience images for both architectures are provided in the docker hub."))}d.isMDXComponent=!0}}]);