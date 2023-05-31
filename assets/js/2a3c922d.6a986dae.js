"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6651],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return t?o.createElement(m,l(l({ref:n},u),{},{components:t})):o.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},89621:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),l=["components"],i={id:"scheduler_core_design",title:"Scheduler Core Design"},c=void 0,s={unversionedId:"design/scheduler_core_design",id:"version-1.1.0/design/scheduler_core_design",title:"Scheduler Core Design",description:"\x3c!--",source:"@site/versioned_docs/version-1.1.0/design/scheduler_core_design.md",sourceDirName:"design",slug:"/design/scheduler_core_design",permalink:"/docs/1.1.0/design/scheduler_core_design",draft:!1,tags:[],version:"1.1.0",frontMatter:{id:"scheduler_core_design",title:"Scheduler Core Design"},sidebar:"docs",previous:{title:"Scheduler Object States",permalink:"/docs/1.1.0/design/scheduler_object_states"},next:{title:"Cross Queue Preemption",permalink:"/docs/1.1.0/design/cross_queue_preemption"}},u={},d=[{value:"Components:",id:"components",level:2},{value:"Scheduler API Server (RMProxy)",id:"scheduler-api-server-rmproxy",level:3},{value:"Scheduler Cache",id:"scheduler-cache",level:3},{value:"Scheduler Cache Event Handler",id:"scheduler-cache-event-handler",level:3},{value:"Admin Service",id:"admin-service",level:3},{value:"Scheduler and Preemptor",id:"scheduler-and-preemptor",level:3},{value:"Scheduler&#39;s responsibility",id:"schedulers-responsibility",level:2},{value:"Preemption",id:"preemption",level:2},{value:"Communication between Shim and Core",id:"communication-between-shim-and-core",level:2},{value:"Configurations &amp; Semantics",id:"configurations--semantics",level:2},{value:"How scheduler do allocation",id:"how-scheduler-do-allocation",level:2},{value:"Flow of events",id:"flow-of-events",level:2}],p={toc:d},h="wrapper";function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)(h,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The scheduler core design has changed. ",(0,a.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-317"},"YUNIKORN-317")," was committed and has removed the scheduler cache.\nThis document will not be maintained and is just for historical reference.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/docs/1.1.0/design/cache_removal"},"scheduler cache removal design"))),(0,a.kt)("p",null,"Github repo: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-core"},"https://github.com/apache/yunikorn-core")),(0,a.kt)("p",null,"Scheduler core encapsulates all scheduling algorithms, it collects resources from underneath resource management\nplatforms (like YARN/K8s), and is responsible for container allocation requests. It makes the decision where is the\nbest spot for each request and then sends response allocations to the resource management platform.\nScheduler core is agnostic about underneath platforms, all the communications are through the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface"},"scheduler interface"),"."),(0,a.kt)("h2",{id:"components"},"Components:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n                     +---------------+  +--------------+\n                     |K8s Shim       |  |YARN Shim     |\n                     +---------------+  +--------------+\n\n                                +--------------+   +------------+\n                Scheduler-      | GRPC Protocol|   |Go API      |\n                Interface:      +--------------+   +------------+\n\n+---------------------------------------------------------------------------+\n                     +--------------------+\n                     |Scheduler API Server|\n +-------------+     +---------+----------+\n |AdminService |               |\n +-------------+               |Write Ops                    +----------------+\n +-------------+               V                            ++Scheduler       |\n |Configurator |      +-------------------+  Allocate       ||   And          |\n +-------------+      |Cache Event Handler+<-----------------|                |\n         +----------\x3e +-------------------+  Preempt        ++Preemptor       |\n          Update Cfg   Handled by policies                   +----------------+\n                               +  (Stateless)\n                        +------v--------+\n                        |Scheduler Cache|\n                        +---------------+\n                +---------------------------------------------+\n                |--------+ +------+ +----------+ +----------+ |\n                ||Node   | |Queue | |Allocation| |Requests  | |\n                |--------+ +------+ +----------+ +----------+ |\n                +---------------------------------------------+\n")),(0,a.kt)("h3",{id:"scheduler-api-server-rmproxy"},"Scheduler API Server (RMProxy)"),(0,a.kt)("p",null,"Responsible for communication between RM and Scheduler, which implements scheduler-interface GRPC protocol,\nor just APIs. (For intra-process communication w/o Serde)."),(0,a.kt)("h3",{id:"scheduler-cache"},"Scheduler Cache"),(0,a.kt)("p",null,"Caches all data related to scheduler state, such as used resources of each queues, nodes, allocations.\nRelationship between allocations and nodes, etc. Should not include in-flight data for resource allocation.\nFor example to-be-preempted allocation candidates. Fair share resource of queues, etc."),(0,a.kt)("h3",{id:"scheduler-cache-event-handler"},"Scheduler Cache Event Handler"),(0,a.kt)("p",null,"Handles all events which needs to update scheduler internal state. So all the write operations will be carefully handled."),(0,a.kt)("h3",{id:"admin-service"},"Admin Service"),(0,a.kt)("p",null,"Handles request from Admin, which can also load configurations from storage and update scheduler policies."),(0,a.kt)("h3",{id:"scheduler-and-preemptor"},"Scheduler and Preemptor"),(0,a.kt)("p",null,"Handles Scheduler's internal state. (Which is not belong to scheduelr cache), such as internal reservations, etc.\nScheduler and preemptor will work together, make scheduling or preemption decisions. All allocate/preempt request\nwill be handled by event handler."),(0,a.kt)("h2",{id:"schedulers-responsibility"},"Scheduler's responsibility"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"According to resource usages between queues, sort queues, applications, and figure out order of application allocation. (This will be used by preemption as well)."),(0,a.kt)("li",{parentName:"ul"},"It is possible that we cannot satisfy some of the allocation request, we need to skip them and find next request."),(0,a.kt)("li",{parentName:"ul"},"It is possible that some allocation request cannot be satisfied because of resource fragmentation. We need to reserve room for such requests."),(0,a.kt)("li",{parentName:"ul"},"Different nodes may belong to different disjoint partitions, we can make independent scheduler runs"),(0,a.kt)("li",{parentName:"ul"},"Be able to config and change ordering policies for apps, queues."),(0,a.kt)("li",{parentName:"ul"},"Application can choose their own way to manage sort of nodes.")),(0,a.kt)("h2",{id:"preemption"},"Preemption"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'It is important to know "who wants the resource", so we can do preemption based on allocation orders.'),(0,a.kt)("li",{parentName:"ul"},"When do preemption, it is also efficient to trigger allocation op. Think about how to do it."),(0,a.kt)("li",{parentName:"ul"},"Preemption needs to take care about queue resource balancing.")),(0,a.kt)("h2",{id:"communication-between-shim-and-core"},"Communication between Shim and Core"),(0,a.kt)("p",null,"YuniKorn-Shim (like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-k8shim"},"https://github.com/apache/yunikorn-k8shim"),") communicates with core by\nusing scheduler-interface (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-scheduler-interface"},"https://github.com/apache/yunikorn-scheduler-interface"),").\nScheduler interface has Go API or GRPC. Currently, yunikorn-k8shim is using Go API to communicate with yunikorn-core\nto avoid extra overhead introduced by GRPC. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Shim (like K8shim) first need to register with core:")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (m *RMProxy) RegisterResourceManager(request *si.RegisterResourceManagerRequest, callback api.ResourceManagerCallback) (*si.RegisterResourceManagerResponse, error)\n")),(0,a.kt)("p",null,"Which indicate ResourceManager's name, a callback function for updateResponse. The design of core is be able to do scheduling for multiple clusters (such as multiple K8s cluster) just with one core instance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Shim interacts with core by invoking RMProxy's Update API frequently, which updates new allocation request, allocation to kill, node updates, etc.")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (m *RMProxy) Update(request *si.UpdateRequest) error\n")),(0,a.kt)("p",null,"Response of update (such as new allocated container) will be received by registered callback."),(0,a.kt)("h2",{id:"configurations--semantics"},"Configurations & Semantics"),(0,a.kt)("p",null,"Example of configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Partition is name space.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Same queues can under different partitions, but enforced to have same hierarchy."),(0,a.kt)("p",{parentName:"li"},"  Good:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        / \\\n  b     c      b   c\n")),(0,a.kt)("p",{parentName:"li"},'  Good (c in partition y acl=""):'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        /\n  b     c      b\n")),(0,a.kt)("p",{parentName:"li"},"  Bad (c in different hierarchy)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," partition=x    partition=y\n     a           a\n   /   \\        /  \\\n  b     c      b    d\n              /\n             c\n")),(0,a.kt)("p",{parentName:"li"},"  Bad (Duplicated c)"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," partition=x\n     a\n   /   \\\n  b     c\n /\nc\n\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Different hierarchies can be added"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scheduler-conf.yaml"},"partitions:\n  - name:  default\n    queues:\n        root:\n          configs:\n            acls:\n          childrens:\n            - a\n            - b\n            - c\n            - ...\n        a:\n          configs:\n            acls:\n            capacity: (capacity is not allowed to set for root)\n            max-capacity: ...\n      mapping-policies:\n        ...\n  - name: partition_a:\n    queues:\n        root:...\n")))),(0,a.kt)("h2",{id:"how-scheduler-do-allocation"},"How scheduler do allocation"),(0,a.kt)("p",null,"Scheduler runs a separate goroutine to look at asks and available resources, and do resource allocation. Here's allocation logic in pseudo code: "),(0,a.kt)("p",null,"Entry point of scheduler allocation is ",(0,a.kt)("inlineCode",{parentName:"p"},"scheduler.go: func (s *Scheduler) schedule()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# First of all, YuniKorn has partition concept, a logical resource pool can consists\n# of one of multiple physical dis-joint partitions. It is similar to YARN's node\n# partition concept.\n\nfor partition : partitions:\n  # YuniKorn can reserve allocations for picky asks (such as large request, etc.)\n  # Before doing regular allocation, YuniKorn look at reservedAllocations first.\n  for reservedAllocation : partition.reservedAllocations: \n     reservedAllocation.tryAllocate(..)\n  \n  # After tried all reserved allocation, YuniKorn will go to regular allocation\n  partition.tryAllocate(..)\n  \n  # If there's any allocation created, scheduler will create an AllocationProposal\n  # and send to Cache to \"commit\" the AllocationProposal \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allocation by hierchical of queues")),(0,a.kt)("p",null,"Inside ",(0,a.kt)("inlineCode",{parentName:"p"},"partition.tryAllocate")," "),(0,a.kt)("p",null,"It recursively traverse from root queue and down to lower level, for each level, logic is inside ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg/scheduler/scheduling_queue.go func (sq *SchedulingQueue) tryAllocate")),(0,a.kt)("p",null,"Remember YuniKorn natively supports hierarchical of queues. For ParentQueue (which has sub queues under the parent queue), it uses queue's own sorting policy to sort subqueues and try to allocate from most preferred queue to least-preferred queue. "),(0,a.kt)("p",null,"For LeafQueue (which has applications inside the queue), it uses queue's own sorting policy to sort applications belong to the queue and allocate based on the sorted order. "),(0,a.kt)("p",null,"(All sorting policies can be configured differently at each level.) "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allocation by application")),(0,a.kt)("p",null,"When it goes to Application, see (",(0,a.kt)("inlineCode",{parentName:"p"},"scheduler_application.go: func (sa *SchedulingApplication) tryAllocate"),"), It first sort the pending resource requests belong to the application (based on requests' priority). And based on the selected request, and configured node-sorting policy, it sorts nodes belong to the partition and try to allocate resources on the sorted nodes. "),(0,a.kt)("p",null,"When application trying to allocate resources on nodes, it will invokes PredicatePlugin to make sure Shim can confirm the node is good. (For example K8shim runs predicates check for allocation pre-check)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allocation completed by scheduler")," "),(0,a.kt)("p",null,"Once allocation is done, scheduler will create an AllocationProposal and send to Cache to do further check, we will cover details in the upcoming section."),(0,a.kt)("h2",{id:"flow-of-events"},"Flow of events"),(0,a.kt)("p",null,"Like mentioned before, all communications between components like RMProxy/Cache/Schedulers are done by using async event handler. "),(0,a.kt)("p",null,"RMProxy/Cache/Scheduler include local event queues and event handlers. RMProxy and Scheduler have only one queue (For example: ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg/scheduler/scheduler.go: handleSchedulerEvent"),"), and Cache has two queues (One for events from RMProxy, and one for events from Scheduler, which is designed for better performance). "),(0,a.kt)("p",null,"We will talk about how events flowed between components: "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Events for ResourceManager registration and updates:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Update from ResourceManager -> RMProxy -> RMUpdateRequestEvent Send to Cache\nNew ResourceManager registration -> RMProxy -> RegisterRMEvent Send to Cache\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cache Handles RM Updates")," "),(0,a.kt)("p",null,"There're many fields inside RM Update event (",(0,a.kt)("inlineCode",{parentName:"p"},"RMUpdateRequestEvent"),"), among them, we have following categories: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1) Update for Application-related updates\n2) Update for New allocation ask and release. \n3) Node (Such as kubelet) update (New node, remove node, node resource change, etc.)\n")),(0,a.kt)("p",null,"More details can be found at: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (m *ClusterInfo) processRMUpdateEvent(event *cacheevent.RMUpdateRequestEvent)\n\ninside cluster_info.go\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cache send RM updates to Scheduler")),(0,a.kt)("p",null,"For most cases, Cache propagate updates from RM to scheduler directly (including Application, Node, Asks, etc.). And it is possible that some updates from RM is not valid (such as adding an application to a non-existed queue), for such cases, cache can send an event back to RMProxy and notify the ResourceManager. (See ",(0,a.kt)("inlineCode",{parentName:"p"},"RMApplicationUpdateEvent.RejectedApplications"),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cache handles scheduler config")," "),(0,a.kt)("p",null,"Cache also handles scheduler's config changes, see"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func (m *ClusterInfo) processRMConfigUpdateEvent(event *commonevents.ConfigUpdateRMEvent)\n")),(0,a.kt)("p",null,"Similar to other RM updates, it propages news to scheduelr."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Scheduler do allocation")),(0,a.kt)("p",null,"Once an AllocationProposal created by scheduler, scheduler sends ",(0,a.kt)("inlineCode",{parentName:"p"},"AllocationProposalBundleEvent")," to Cache to commit. "),(0,a.kt)("p",null,"Cache look at AllocationProposal under lock, and commit these proposals. The reason to do proposal/commit is Scheduler can run in multi-threads which could cause conflict for resource allocation. This approach is inspired by Borg/Omega/YARN Global Scheduling."),(0,a.kt)("p",null,"Cache checks more states such as queue resources, node resources (we cannot allocate more resource than nodes' available), etc. Once check is done, Cache updates internal data strcture and send confirmation to Scheduler to update the same, and scheduler sends allocated Allocation to RMProxy so Shim can do further options. For example, K8shim will ",(0,a.kt)("inlineCode",{parentName:"p"},"bind")," an allocation (POD) to kubelet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Job Add:\n--------\nRM -> Cache -> Scheduler (Implemented)\n\nJob Remove:\n-----------\nRM -> Scheduler -> Cache (Implemented)\nReleased allocations: (Same as normal release) (Implemented)\nNote: Make sure remove from scheduler first to avoid new allocated created. \n\nScheduling Request Add:\n-----------------------\nRM -> Cache -> Scheduler (Implemented)\nNote: Will check if requested job exists, queue exists, etc.\nWhen any request invalid:\n   Cache -> RM (Implemented)\n   Scheduler -> RM (Implemented)\n\nScheduling Request remove:\n------------------------- \nRM -> Scheduler -> Cache (Implemented)\nNote: Make sure removed from scheduler first to avoid new container allocated\n\nAllocation remove (Preemption) \n-----------------\nScheduler -> Cache -> RM (TODO)\n              (confirmation)\n\nAllocation remove (RM voluntarilly ask)\n---------------------------------------\nRM -> Scheduler -> Cache -> RM. (Implemented)\n                      (confirmation)\n\nNode Add: \n---------\nRM -> Cache -> Scheduler (Implemented)\nNote: Inside Cache, update allocated resources.\nError handling: Reject Node to RM (Implemented)\n\nNode Remove: \n------------\nImplemented in cache side\nRM -> Scheduler -> Cache (TODO)\n\nAllocation Proposal:\n--------------------\nScheduler -> Cache -> RM\nWhen rejected/accepted:\n    Cache -> Scheduler\n    \nInitial: (TODO)\n--------\n1. Admin configured partitions\n2. Cache initializes\n3. Scheduler copies configurations\n\nRelations between Entities \n-------------------------\n1. RM includes one or multiple:\n   - Partitions \n   - Jobs\n   - Nodes \n   - Queues\n   \n2. One queue: \n   - Under one partition\n   - Under one RM.\n   \n3. One job: \n   - Under one queue (Job with same name can under different partitions)\n   - Under one partition\n\nRM registration: (TODO)\n----------------\n1. RM send registration\n2. If RM already registered, remove old one, including everything belong to RM.\n\nRM termination (TODO) \n--------------\nJust remove the old one.\n\nUpdate of queues (TODO) \n------------------------\nAdmin Service -> Cache\n\nAbout partition (TODO) \n-----------------------\nInternal partition need to be normalized, for example, RM specify node with partition = xyz. \nScheduler internally need to normalize it to <rm-id>_xyz\nThis need to be done by RMProxy\n\n")))}m.isMDXComponent=!0}}]);