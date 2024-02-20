"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28922],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,g=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={id:"evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn Performance with Kubemark",keywords:["performance","throughput"]},o=void 0,s={unversionedId:"performance/evaluate_perf_function_with_kubemark",id:"version-1.3.0/performance/evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn Performance with Kubemark",description:"\x3c!--",source:"@site/versioned_docs/version-1.3.0/performance/evaluate_perf_function_with_kubemark.md",sourceDirName:"performance",slug:"/performance/evaluate_perf_function_with_kubemark",permalink:"/docs/1.3.0/performance/evaluate_perf_function_with_kubemark",draft:!1,tags:[],version:"1.3.0",frontMatter:{id:"evaluate_perf_function_with_kubemark",title:"Evaluate YuniKorn Performance with Kubemark",keywords:["performance","throughput"]},sidebar:"docs",previous:{title:"Cross Queue Preemption",permalink:"/docs/1.3.0/archived_design/cross_queue_preemption"},next:{title:"Benchmarking Tutorial",permalink:"/docs/1.3.0/performance/performance_tutorial"}},l={},c=[{value:"Environment setup",id:"environment-setup",level:2},{value:"Scheduler Throughput",id:"scheduler-throughput",level:2},{value:"Performance Analysis",id:"performance-analysis",level:2},{value:"K8s Limitation",id:"k8s-limitation",level:3},{value:"Node Sorting",id:"node-sorting",level:3},{value:"Per Node Precondition Checks",id:"per-node-precondition-checks",level:3},{value:"Why YuniKorn is faster?",id:"why-yunikorn-is-faster",level:2},{value:"Summary",id:"summary",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...i}=e;return(0,a.yg)(d,(0,r.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The YuniKorn community concerns about the scheduler\u2019s performance and continues to optimize it over the releases. The community has developed some tools in order to test and tune the performance repeatedly."),(0,a.yg)("h2",{id:"environment-setup"},"Environment setup"),(0,a.yg)("p",null,"We leverage ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster"},"Kubemark")," to evaluate scheduler\u2019s performance. Kubemark is a testing tool that simulates large scale clusters. It create hollow nodes which runs hollow kubelet to pretend original kubelet behavior. Scheduled pods on these hollow nodes won\u2019t actually execute. It is able to create a big cluster that meets our experiment requirement that reveals the yunikorn scheduler performance. Please see the ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.3.0/performance/performance_tutorial"},"detail steps")," about how to setup the environment."),(0,a.yg)("h2",{id:"scheduler-throughput"},"Scheduler Throughput"),(0,a.yg)("p",null,"We have designed some simple benchmarking scenarios on a simulated large scale environment in order to evaluate the scheduler performance. Our tools measure the ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Throughput"},"throughput")," and use these key metrics to evaluate the performance. In a nutshull, scheduler throughput is the rate of processing pods from discovering them on the cluster to allocating them to nodes."),(0,a.yg)("p",null,"In this experiment, we setup a simulated 2000/4000 nodes cluster with ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/devel/kubemark-guide.md#starting-a-kubemark-cluster"},"Kubemark"),". Then we launch 10 ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"deployments"),", with setting replicas to 5000 in each deployment respectively. This simulates large scale workloads submitting to the K8s cluster simultaneously. Our tool periodically monitors and checks pods status, counting the number of started pods based on ",(0,a.yg)("inlineCode",{parentName:"p"},"podSpec.StartTime")," as time elapses. As a comparison, we apply the same experiment to the default scheduler in the same environment. And we see the YuniKorn performance advantage over the default scheduler as illustrated below:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Scheduler Throughput",src:n(63272).A,width:"1920",height:"1080"})),(0,a.yg)("p",{align:"center"},"Fig 1. Yunikorn and default scheduler throughput "),(0,a.yg)("p",null,"The charts record the time spent until all pods are running on the cluster:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Number of Nodes"),(0,a.yg)("th",{parentName:"tr",align:"center"},"yunikorn"),(0,a.yg)("th",{parentName:"tr",align:"center"},"k8s default scheduler"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Diff"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"2000(nodes)"),(0,a.yg)("td",{parentName:"tr",align:"center"},"204(pods/sec)"),(0,a.yg)("td",{parentName:"tr",align:"center"},"49(pods/sec)"),(0,a.yg)("td",{parentName:"tr",align:"center"},"416%")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"4000(nodes)"),(0,a.yg)("td",{parentName:"tr",align:"center"},"115(pods/sec)"),(0,a.yg)("td",{parentName:"tr",align:"center"},"48(pods/sec)"),(0,a.yg)("td",{parentName:"tr",align:"center"},"240%")))),(0,a.yg)("p",null,"In order to normalize the result, we have been running the tests for several rounds. As shown above, YuniKorn achieves a ",(0,a.yg)("inlineCode",{parentName:"p"},"2x")," ~ ",(0,a.yg)("inlineCode",{parentName:"p"},"4x")," performance gain comparing to the default scheduler."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Like other performance testing, the result is highly variable depending on the underlying hardware, e.g server CPU/memory, network bandwidth, I/O speed, etc. To get an accurate result that applies to your environment, we encourage you to run these tests on a cluster that is close to your production environment.")),(0,a.yg)("h2",{id:"performance-analysis"},"Performance Analysis"),(0,a.yg)("p",null,"The results we got from the experiment are promising. We further take a deep dive to analyze the performance by observing more internal YuniKorn metrics, and we are able to locate a few key areas affecting the performance."),(0,a.yg)("h3",{id:"k8s-limitation"},"K8s Limitation"),(0,a.yg)("p",null,"We found the overall performance actually is capped by the K8s master services, such as api-server, controller-manager and etcd, it did not reached the limit of YuniKorn in all our experiments. If you look at the internal scheduling metrics, you can see:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Allocation latency",src:n(90715).A,width:"1697",height:"703"})),(0,a.yg)("p",{align:"center"},"Fig 2. Yunikorn metric in 4k nodes "),(0,a.yg)("p",null,"Figure 2 is a screenshot from Prometheus, which records the ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.3.0/performance/metrics"},"internal metrics")," ",(0,a.yg)("inlineCode",{parentName:"p"},"containerAllocation")," in YuniKorn. They are the number of pods being allocated by the scheduler, but have not necessarily been bound to nodes. It consumes roughly 122 seconds to finish scheduling 50k pods, i.e 410 pod/sec. The actual throughput drops to 115 pods/sec, and the extra time was used to bind the pods on different nodes. If K8s side could catch up, we will see a better result. Actually, when we tune the performance on a large scale cluster, the first thing we do is to tune up some parameters in API-server, controller manager in order to increase the throughput. See more in the ",(0,a.yg)("a",{parentName:"p",href:"/docs/1.3.0/performance/performance_tutorial"},"performance tutorial doc"),"."),(0,a.yg)("h3",{id:"node-sorting"},"Node Sorting"),(0,a.yg)("p",null,"When the cluster size grows, we see an obvious performance drop in YuniKorn. This is because in YuniKorn, we do a full sorting of the cluster nodes in order to find the ",(0,a.yg)("strong",{parentName:"p"},'"best-fit"')," node for a given pod. Such strategy makes the pods distribution more optimal based on the ",(0,a.yg)("a",{parentName:"p",href:"./../user_guide/sorting_policies#node-sorting"},"node sorting policy")," being used. However, sorting nodes is expensive, doing this in the scheduling cycle creates a lot of overhead. To overcome this, we have improved our node sorting mechanism in ",(0,a.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-807"},"YUNIKORN-807"),", the idea behind of this is to use a ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/B-tree"},"B-Tree")," to store all nodes and applies an incremental updates when necessary. This significantly improves the latency, according to our benchmark testing, this improves 35x, 42x, 51x, 74x respectively on 500, 1000, 2000 and 5000 nodes clusters."),(0,a.yg)("h3",{id:"per-node-precondition-checks"},"Per Node Precondition Checks"),(0,a.yg)("p",null,'In each scheduling cycle, another time consuming part is the "Precondition Checks" for a node. In this phase, YuniKorn evaluates all K8s standard predicates, e.g node-selector, pod affinity/anti-affinity, etc, in order to qualify a pod is fit onto a node. These evaluations are expensive.'),(0,a.yg)("p",null,"We have done two experiments to compare the case where the predicates evaluation was enabled with being disabled. See the results below:"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Allocation latency",src:n(78946).A,width:"1920",height:"1080"})),(0,a.yg)("p",{align:"center"},"Fig 3. Predicate effect comparison in yunikorn "),(0,a.yg)("p",null,"When the predicates evaluation is disabled, the throughput improves a lot. We looked further into the latency distribution of the entire scheduling cycle and the predicates-eval latency. And found: "),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"YK predicate latency",src:n(812).A,width:"1854",height:"817"})),(0,a.yg)("p",{align:"center"},"Fig 4. predicate latency "),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"YK scheduling with predicate",src:n(66073).A,width:"1855",height:"808"})),(0,a.yg)("p",{align:"center"},"Fig 5. Scheduling time with predicate active "),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"YK scheduling with no predicate",src:n(63551).A,width:"1841",height:"797"})),(0,a.yg)("p",{align:"center"},"Fig 6. Scheduling time with predicate inactive "),(0,a.yg)("p",null,"Overall, YuniKorn scheduling cycle runs really fast, and the latency drops in ",(0,a.yg)("strong",{parentName:"p"},"0.001s - 0.01s")," range per cycle. And the majority of the time was used for predicates evaluation, 10x to other parts in the scheduling cycle."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:"center"},"scheduling latency distribution(second)"),(0,a.yg)("th",{parentName:"tr",align:"center"},"predicates-eval latency distribution(second)"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"predicates enabled"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.01 - 0.1"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.01-0.1")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"predicates disabled"),(0,a.yg)("td",{parentName:"tr",align:"center"},"0.001 - 0.01"),(0,a.yg)("td",{parentName:"tr",align:"center"},"none")))),(0,a.yg)("h2",{id:"why-yunikorn-is-faster"},"Why YuniKorn is faster?"),(0,a.yg)("p",null,"The default scheduler was created as a service-oriented scheduler; it is less sensitive in terms of throughput compared to YuniKorn. YuniKorn community works really hard to keep the performance outstanding in the line and keep improving it. The reasons that YuniKorn can run faster than the default scheduler are:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Short Circuit Scheduling Cycle")),(0,a.yg)("p",null,"YuniKorn keeps the scheduling cycle short and efficient. YuniKorn uses all async communication protocol to make sure all the critical paths are non-blocking calls. Most of the places are just doing in-memory calculation which can be highly efficient. The default scheduler leverages ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/"},"scheduling framework"),", it provides lots of flexibility to extend the scheduler, however, the trade-off is the performance. The scheduling cycle becomes to be a really long chain because it needs to visit all these plugins."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Async Events Handling")),(0,a.yg)("p",null,"YuniKorn leverages an async event handling framework to deal with internal states. And this allows the core scheduling cycle can run fast without being blocked by any expensive calls. An example is the default scheduler needs to write state updates, events to pod objects, that is done inside of the scheduling cycle. This involves persisting data to etcd which could be slow. YuniKorn, instead, caches all such events in a queue and writes back to the pod in asynchronous manner. "),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Faster Node Sorting")),(0,a.yg)("p",null,"After ",(0,a.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-807"},"YUNIKORN-807"),', YuniKorn does the incremental node sorting which is highly efficient. This is built on top of the so-called "resource-weight" based node scoring mechanism, and it is also extensible via plugins. All these together reduce the overhead while computing node scores. In comparison, the default scheduler provides a few extension points for calculating node scores, such as ',(0,a.yg)("inlineCode",{parentName:"p"},"PreScore"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Score")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"NormalizeScore"),". These computations are heavy and they are called in every scheduling cycle. See details in ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/481459d12dc82ab88e413886e2130c2a5e4a8ec4/pkg/scheduler/framework/runtime/framework.go#L857"},"code lines"),"."),(0,a.yg)("h2",{id:"summary"},"Summary"),(0,a.yg)("p",null,"During the tests, we found YuniKorn is performing really well, especially compared to the default scheduler. We have identified the major factors in YuniKorn where we can continue to improve the performance, and also explained why YuniKorn is performing better than the default scheduler. We also realized the limitations while scaling Kubernetes to thousands of nodes, that can be alleviated by using other techiques such as, e.g federation. At a result, YuniKorn is a high-efficient, high-throughput scheduler that perfectly positioned for running batch/mixed workloads on Kubernetes."))}h.isMDXComponent=!0},90715:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/allocation_4k-55774ca09e13367c41799e4172d34a87.png"},78946:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/predicateComaparation-301262c33323e9faad72a1143ccc1617.png"},812:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/predicate_4k-3ad50742ac5f0356e7707e6a01cbba0f.png"},63551:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/scheduling_no_predicate_4k-bfbb358a7c3c555ecdfbd218eefa1257.png"},66073:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/scheduling_with_predicate_4k_-951a3d6c4f1614330bb567cb5a797d24.png"},63272:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/yunirkonVSdefault-933832efd32ef583c6415a07c0d9b50b.png"}}]);