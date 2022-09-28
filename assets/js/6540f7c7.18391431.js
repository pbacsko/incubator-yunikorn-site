"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7802],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,b=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(b,i(i({ref:t},f),{},{components:r})):n.createElement(b,i({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},13942:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"run_tf",title:"Run Tensorflow Jobs",keywords:["tensorflow"]},l=void 0,u={unversionedId:"user_guide/workloads/run_tf",id:"version-0.10.0/user_guide/workloads/run_tf",title:"Run Tensorflow Jobs",description:"\x3c!--",source:"@site/versioned_docs/version-0.10.0/user_guide/workloads/run_tensorflow.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_tf",permalink:"/docs/0.10.0/user_guide/workloads/run_tf",draft:!1,tags:[],version:"0.10.0",frontMatter:{id:"run_tf",title:"Run Tensorflow Jobs",keywords:["tensorflow"]},sidebar:"version-0.10.0/docs",previous:{title:"Run Flink Jobs",permalink:"/docs/0.10.0/user_guide/workloads/run_flink"},next:{title:"Cluster",permalink:"/docs/0.10.0/api/cluster"}},f={},c=[],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here is an example for Tensorflow job. You must install tf-operator first.\nYou can install tf-operator by applying all yaml from two website down below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CRD: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base"},"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-crds/base")),(0,a.kt)("li",{parentName:"ul"},"Deployment: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"},"https://github.com/kubeflow/manifests/tree/master/tf-training/tf-job-operator/base"),"\nAlso you can install kubeflow which can auto install tf-operator for you, URL: ",(0,a.kt)("a",{parentName:"li",href:"https://www.kubeflow.org/docs/started/getting-started/"},"https://www.kubeflow.org/docs/started/getting-started/"))),(0,a.kt)("p",null,"A simple Tensorflow job example:"),(0,a.kt)("p",null,"You need to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeflow/tf-operator/tree/master/examples/v1/dist-mnist"},"build the image")," which used in example yaml."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create -f examples/tfjob/tf-job-mnist.yaml\n")),(0,a.kt)("p",null,"The file for this example can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/examples#Tensorflow-job"},"README Tensorflow job")," section."))}m.isMDXComponent=!0}}]);