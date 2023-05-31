"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5788],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},96965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"pluggable_app_management",title:"Pluggable App Management"},s=void 0,l={unversionedId:"design/pluggable_app_management",id:"version-0.12.2/design/pluggable_app_management",title:"Pluggable App Management",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/design/pluggable_app_management.md",sourceDirName:"design",slug:"/design/pluggable_app_management",permalink:"/zh-cn/docs/0.12.2/design/pluggable_app_management",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"pluggable_app_management",title:"Pluggable App Management"},sidebar:"version-0.12.2/docs",previous:{title:"Namespace Resource Quota",permalink:"/zh-cn/docs/0.12.2/design/namespace_resource_quota"},next:{title:"Resilience",permalink:"/zh-cn/docs/0.12.2/design/resilience"}},c={},u=[{value:"The Problem",id:"the-problem",level:2},{value:"K8s Operator Pattern",id:"k8s-operator-pattern",level:2},{value:"Design",id:"design",level:2}],d={toc:u},h="wrapper";function m(e){var t=e.components,p=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem"},"The Problem"),(0,o.kt)("p",null,"Currently, we schedule and group an application is based on a label on the pod.\nThis generic way works for any type of workload. It does however give us a limited information on the lifecycle\nand application. On the K8s side, operators have been introduced to provide more detail on the application\nand help scheduling. We cannot use them currently and want to add that functionality."),(0,o.kt)("h2",{id:"k8s-operator-pattern"},"K8s Operator Pattern"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/operator/"},"K8s operator"),"\nis a pattern in K8s to manage applications, it's a handy way to manage application's lifecycle out-of-box on K8s.\nYou define several CRDs and some controllers to monitor and mutate the state of the application based on the CRD definition."),(0,o.kt)("p",null,"For example in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator"},"spark-k8s-operator"),",\nit defines a CRD called ",(0,o.kt)("inlineCode",{parentName:"p"},"SparkApplication"),", the controller watches the events of add/update/delete of this CRD\nand trigger corresponding actions on event notifications. The ",(0,o.kt)("inlineCode",{parentName:"p"},"SparkApplication")," looks like\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/examples/spark-pi.yaml"},"this example"),". There\nare a lot more popular operators, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/flink-on-k8s-operator"},"flink-k8s-operator"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/tf-operator"},"tf-operator"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/pytorch-operator"},"pytorch-operator"),", etc. "),(0,o.kt)("p",null,"Use Spark as an example. YuniKorn is able to schedule resources for all pods in K8s, that seamlessly supports Spark. It\nworks with ",(0,o.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"},"native Spark on K8s"),", or\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/GoogleCloudPlatform/spark-on-k8s-operator/blob/master/docs/design.md#architecture"},"spark on K8s with operator"),",\nyou'll find the difference from the design architecture chart from the given link. To support native Spark on K8s,\nYuniKorn reads pods' spec and group Spark pods by a label-selector, based on ",(0,o.kt)("inlineCode",{parentName:"p"},"spark-app-selector"),".\nThe operator approach gives us more context about the Spark job, such as a better understanding about job state.\nBut all these info requires us to look at ",(0,o.kt)("inlineCode",{parentName:"p"},"SparkApplication")," CRD, currently, there is no neat way to\nadd such functionality. That's why we need to design a flexible approach to support 3rd party operators\n(retrieving info from their CRDs), so we can easily integrate with other operators with small effort."),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("p",null,"The key issue here is we need a app-management interface, that can be easily extended.\nIt needs to be decoupled with existing scheduling logic. For each operator, we create a service to manage this type app's lifecycle,\nand communicate with the scheduling cache independently. The high-level design looks like below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pluggable App Management",src:n(33478).Z,width:"1416",height:"705"})),(0,o.kt)("p",null,"Where"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AppManagementService")," is a composite set of services that can be managed together."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AppManager")," is a specific app management service for a particular type of application. In each service, it has\naccess to K8s clients, such as informers, listers, in order to monitor CRD events. And it collects necessary info\nand talk with scheduler cache through ",(0,o.kt)("inlineCode",{parentName:"li"},"AMProtocol"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"APIProvider")," encapsulate a set of useful APIs that can be shared, such as kube-client, pod/node/storage informers, etc.\nEach of such informers, it can be shared with multiple app managers, to avoid the overhead."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AMProtocol")," defines the basic interaction contract between app manager and the scheduler cache, that helps the cache\nto performs app lifecycle management without understanding what type of the application it is.")),(0,o.kt)("p",null,"In the upon chart, the AppManagementService has 2 services, the ",(0,o.kt)("em",{parentName:"p"},"general")," one is managing normal applications, that\nrecognizes applications by pod labels; the ",(0,o.kt)("em",{parentName:"p"},"spark-k8s-operator")," one watches ",(0,o.kt)("inlineCode",{parentName:"p"},"SparkApplication")," CRD and manage jobs'\nlifecycle defined by this CRD."))}m.isMDXComponent=!0},33478:function(e,t,n){t.Z=n.p+"assets/images/pluggable-app-mgmt-2bf575c7d0093bd5087763ea9de41a11.jpg"}}]);