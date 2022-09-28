"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4160],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=a,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11577:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"rn-0.8.0",title:"Release Announcement v0.8.0"},u=void 0,s={type:"mdx",permalink:"/release-announce/0.8.0",source:"@site/src/pages/release-announce/0.8.0.md",title:"Release Announcement v0.8.0",description:"\x3c!--",frontMatter:{id:"rn-0.8.0",title:"Release Announcement v0.8.0"}},c=[{value:"Overview",id:"overview",level:2},{value:"Highlights",id:"highlights",level:2},{value:"Queues and placement rules",id:"queues-and-placement-rules",level:3},{value:"Pluggable Application Management",id:"pluggable-application-management",level:3},{value:"Resource Reservation",id:"resource-reservation",level:3},{value:"Pluggable Node Sorting Policies",id:"pluggable-node-sorting-policies",level:3},{value:"Improved Scheduling Performance",id:"improved-scheduling-performance",level:3},{value:"Community",id:"community",level:2}],p={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"release-announcement-v080"},"Release Announcement v0.8.0"),(0,i.kt)("p",null,"This is the first release of Apache YuniKorn (Incubating)."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Apache YuniKorn (Incubating) community has fixed 60 JIRAs in this release: ",(0,i.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12348926"},"YuniKorn jiras fixed in 0.8.0")),(0,i.kt)("p",null,"Release manager: Weiwei Yang"),(0,i.kt)("p",null,"Release date: 2020-05-04"),(0,i.kt)("h2",{id:"highlights"},"Highlights"),(0,i.kt)("h3",{id:"queues-and-placement-rules"},"Queues and placement rules"),(0,i.kt)("p",null,"With this new dynamic queue management feature, users can set up placement rules to delegate queue management.",(0,i.kt)("br",{parentName:"p"}),"\n","This enables use cases like mapping a K8 namespace to a YuniKorn queue without the need to pre-create all queues.",(0,i.kt)("br",{parentName:"p"}),"\n","Queues are created based on placement rules when required for running an application. Dynamic queues are deleted when no longer required.  "),(0,i.kt)("h3",{id:"pluggable-application-management"},"Pluggable Application Management"),(0,i.kt)("p",null,"A pluggable app management framework is being added to this release, with this feature, YuniKorn can be easily integrated with 3rd party K8s operators, such as Spark-k8s-operator, Flink-k8s-operator, etc."),(0,i.kt)("h3",{id:"resource-reservation"},"Resource Reservation"),(0,i.kt)("p",null,"Reservation is the methodology used to avoid large/picky resource requests being starved in the batch scheduling scenario."),(0,i.kt)("p",null,"One node is reserved for a specific request from an application, effectively removing it from the available node list for other applications."),(0,i.kt)("h3",{id:"pluggable-node-sorting-policies"},"Pluggable Node Sorting Policies"),(0,i.kt)("p",null,"There are 2 builtin node sorting policies (FAIR and BinPacking) available in YuniKorn with regards to allocation distribution."),(0,i.kt)("p",null,"The node sorting policies are pluggable, users can implement their own policies and plug that into the scheduler."),(0,i.kt)("h3",{id:"improved-scheduling-performance"},"Improved Scheduling Performance"),(0,i.kt)("p",null,"When running Big Data batch workloads, e.g Spark, on K8s, scheduler throughput becomes one of the main concerns.\nIn YuniKorn, there are lots of optimizations to improve the performance, such as a fully async event-driven system and low-latency sorting policies."),(0,i.kt)("p",null,"Based on our test using Kubemark, YuniKorn is 2x+ faster than the default K8s scheduler."),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Since the birth of the YuniKorn project, the feedback has been well-received. We are thankful to have such a diverse community where we have members from Microsoft, LinkedIn, Alibaba, Apple, Tencent, Nvidia, and Cloudera, to help and guide the project\u2019s growth.\nMany thanks to everyone who contributed to the release, and everyone in the Apache YuniKorn (Incubating) community!"),(0,i.kt)("p",null,"This release is a result of direct and indirect efforts from many. The following  who contributed directly by submitting patches: Adam Antal, Akhil Puthenveettil Balan, Bhuvan Mysore, Jetly Jaimin, Kinga Marton, Sunil Govindan, Tao Yang, Wangda Tan, Wanqiang Ji, Weiwei Yang, Wilfred Spiegelenburg, Vinod Kumar Vavilapalli."),(0,i.kt)("p",null,"Thanks to our mentors Felix Cheung, Holden Karau, Jason Lowe, Junping Du for helping us to set up repositories, permissions, and guide us on how to do the development and release the Apache way."))}d.isMDXComponent=!0}}]);