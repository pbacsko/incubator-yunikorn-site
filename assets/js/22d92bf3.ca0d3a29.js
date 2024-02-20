"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47063],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},40150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(58168),o=(r(96540),r(15680));const a={id:"usergroup_resolution",title:"User & Group Resolution"},i=void 0,s={unversionedId:"user_guide/usergroup_resolution",id:"version-0.12.1/user_guide/usergroup_resolution",title:"User & Group Resolution",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.1/user_guide/usergroup_resolution.md",sourceDirName:"user_guide",slug:"/user_guide/usergroup_resolution",permalink:"/docs/0.12.1/user_guide/usergroup_resolution",draft:!1,tags:[],version:"0.12.1",frontMatter:{id:"usergroup_resolution",title:"User & Group Resolution"},sidebar:"version-0.12.1/docs",previous:{title:"App Placement Rules",permalink:"/docs/0.12.1/user_guide/placement_rules"},next:{title:"Sorting Policies",permalink:"/docs/0.12.1/user_guide/sorting_policies"}},u={},l=[{value:"User resolution",id:"user-resolution",level:2},{value:"Group resolution",id:"group-resolution",level:2}],p={toc:l},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.yg)(d,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"user-resolution"},"User resolution"),(0,o.yg)("p",null,"User information is an important aspect of the scheduling cycle. It is one of the key identifier that can be used to determine the queue to which a job should be submitted. The Yunikorn Scheduler relies on the K8s Shim to provide user information. In the world of Kubernetes, there is no object defined that identfies the actual user. This is by design and more information can be found ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#users-in-kubernetes"},"here")),(0,o.yg)("p",null,"Since, Kubernetes has no pre-defined field or resource for user information and individual cluster deployments with unique user identification tools can vary, we have defined a standard way of identifying the user. Yunikorn requires a Kubernetes ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"Label")," added. Using the ",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/common-labels/"},"recommendation")," provided here, the default label is defined as below:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Label"),(0,o.yg)("th",{parentName:"tr",align:null},"Value"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"yunikorn.apache.org/username"),(0,o.yg)("td",{parentName:"tr",align:null},"User name. It can have duplicate entries but only the first value will be used. The default user is ",(0,o.yg)("inlineCode",{parentName:"td"},"nobody"))))),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'metadata:\n  labels:\n    yunikorn.apache.org/username: "john"\n')),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"In order to make this field uniquiely identifiable to the authorized user, the suggestion is to add this label as an immutable field by the user identification tool used by the cluster administrators. The cluster administrators or users are free to use any method or tool to add this field and value. This includes adding it manually at the time of submission. ")),(0,o.yg)("admonition",{title:"Assumption ",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Assumption:\nYunikorn assumes that all pods belonging to an application are owned by the same user. We recommend that the user label is added to every pod of an app. This is to ensure that there is no discrepency. ")),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"yunikorn.apache.org/username")," key can be customized by overriding the default value using the ",(0,o.yg)("inlineCode",{parentName:"p"},"USER_LABEL_KEY"),"env variable to the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-release/blob/master/helm-charts/yunikorn/templates/deployment.yaml"},"K8s"),". This is particularly useful in scenarios where the user label is already being added or if the label has to be modified for some secuirty reasons. "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},'            env:\n            - name: USER_LABEL_KEY\n              value: "custom_user_label"\n')),(0,o.yg)("h2",{id:"group-resolution"},"Group resolution"),(0,o.yg)("p",null,"Group membership resolution is pluggables and is defined here. Groups do not have to be part of provided user and group object. When the object is added to the cache the groups are automatically resolved based on the resolution that is configured.\nThe resolver which is linked to the cache can be set per partition."),(0,o.yg)("p",null,'The default group resolver is "no resolver".\nThis resolver just echos the user name and a primary group with the same name as the user.'),(0,o.yg)("p",null,"Other resolvers are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"OS resolver"),(0,o.yg)("li",{parentName:"ul"},"test resolver")))}c.isMDXComponent=!0}}]);