"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34412],{12285:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(13274),t=n(1780);const r={id:"k8shim",title:"Kubernetes Shim Design"},o=void 0,a={id:"archived_design/k8shim",title:"Kubernetes Shim Design",description:"\x3c!--",source:"@site/versioned_docs/version-1.2.0/archived_design/k8shim.md",sourceDirName:"archived_design",slug:"/archived_design/k8shim",permalink:"/docs/1.2.0/archived_design/k8shim",draft:!1,unlisted:!1,tags:[],version:"1.2.0",frontMatter:{id:"k8shim",title:"Kubernetes Shim Design"},sidebar:"docs",previous:{title:"Scheduler Configuration",permalink:"/docs/1.2.0/design/scheduler_configuration"},next:{title:"Namespace Resource Quota",permalink:"/docs/1.2.0/archived_design/namespace_resource_quota"}},c={},d=[{value:"The Kubernetes shim",id:"the-kubernetes-shim",level:2},{value:"The admission controller",id:"the-admission-controller",level:2},{value:"Admission controller deployment",id:"admission-controller-deployment",level:3}];function l(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["Github repo: ",(0,s.jsx)(i.a,{href:"https://github.com/apache/yunikorn-k8shim",children:"https://github.com/apache/yunikorn-k8shim"})]}),"\n",(0,s.jsxs)(i.p,{children:["Please read the ",(0,s.jsx)(i.a,{href:"/docs/1.2.0/design/architecture",children:"architecture"})," doc before reading this one, you will need to understand\nthe 3 layer design of YuniKorn before getting to understand what is the Kubernetes shim."]}),"\n",(0,s.jsx)(i.h2,{id:"the-kubernetes-shim",children:"The Kubernetes shim"}),"\n",(0,s.jsx)(i.p,{children:"The YuniKorn Kubernetes shim is responsible for talking to Kubernetes, it is responsible for translating the Kubernetes\ncluster resources, and resource requests via scheduler interface and send them to the scheduler core.\nAnd when a scheduler decision is made, it is responsible for binding the pod to the specific node. All the communication\nbetween the shim and the scheduler core is through the scheduler-interface."}),"\n",(0,s.jsx)(i.h2,{id:"the-admission-controller",children:"The admission controller"}),"\n",(0,s.jsxs)(i.p,{children:["The admission controller runs in a separate pod, it runs a\n",(0,s.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook",children:"mutation webhook"}),"\nand a ",(0,s.jsx)(i.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#validatingadmissionwebhook",children:"validation webhook"}),", where:"]}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.code,{children:"mutation webhook"})," mutates pod spec by:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Adding ",(0,s.jsx)(i.code,{children:"schedulerName: yunikorn"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"By explicitly specifying the scheduler name, the pod will be scheduled by YuniKorn scheduler."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Adding ",(0,s.jsx)(i.code,{children:"applicationId"})," label","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["When a label ",(0,s.jsx)(i.code,{children:"applicationId"})," exists, reuse the given applicationId."]}),"\n",(0,s.jsxs)(i.li,{children:["When a label ",(0,s.jsx)(i.code,{children:"spark-app-selector"})," exists, reuse the given spark app ID."]}),"\n",(0,s.jsxs)(i.li,{children:["Otherwise, assign a generated application ID for this pod, using convention: ",(0,s.jsx)(i.code,{children:"yunikorn-<namespace>-autogen"}),". This is unique per namespace."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Adding ",(0,s.jsx)(i.code,{children:"queue"})," label","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["When a label ",(0,s.jsx)(i.code,{children:"queue"})," exists, reuse the given queue name. Note, if placement rule is enabled, values set in the label is ignored."]}),"\n",(0,s.jsxs)(i.li,{children:["Otherwise, adds ",(0,s.jsx)(i.code,{children:"queue: root.default"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Adding ",(0,s.jsx)(i.code,{children:"disableStateAware"})," label","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If pod was assigned a generated applicationId by the admission controller, also set ",(0,s.jsx)(i.code,{children:"disableStateAware: true"}),". This causes the generated application\nto immediately transition from the ",(0,s.jsx)(i.code,{children:"Starting"})," to ",(0,s.jsx)(i.code,{children:"Running"})," state so that it will not block other applications."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["The ",(0,s.jsx)(i.code,{children:"validation webhook"})," validates the configuration set in the configmap","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"This is used to prevent writing malformed configuration into the configmap."}),"\n",(0,s.jsxs)(i.li,{children:["The validation webhook calls scheduler ",(0,s.jsx)(i.a,{href:"/docs/1.2.0/api/scheduler#configuration-validation",children:"validation REST API"})," to validate configmap updates."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"admission-controller-deployment",children:"Admission controller deployment"}),"\n",(0,s.jsxs)(i.p,{children:["By default, the admission controller is deployed as part of the YuniKorn Helm chart installation. This can be disabled if necessary (though not recommended) by setting the Helm parameter ",(0,s.jsx)(i.code,{children:"embedAdmissionController"})," to ",(0,s.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(i.p,{children:"On startup, the admission controller performs a series of tasks to ensure that it is properly registered with Kubernetes:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Loads a Kubernetes secret called ",(0,s.jsx)(i.code,{children:"admission-controller-secrets"}),". This secret stores a pair of CA certificates which are used to sign the TLS server certificate used by the admission controller."]}),"\n",(0,s.jsx)(i.li,{children:"If the secret cannot be found or either CA certificate is within 90 days of expiration, generates new certificate(s). If a certificate is expiring, a new one is generated with an expiration of 12 months in the future. If both certificates are missing or expiring, the second certificate is generated with an expiration of 6 months in the future. This ensures that both certificates do not expire at the same time, and that there is an overlap of trusted certificates."}),"\n",(0,s.jsx)(i.li,{children:"If the CA certificates were created or updated, writes the secrets back to Kubernetes."}),"\n",(0,s.jsx)(i.li,{children:"Generates an ephemeral TLS server certificate signed by the CA certificate with the latest expiration date."}),"\n",(0,s.jsxs)(i.li,{children:["Validates, and if necessary, creates or updates the Kubernetes webhook configurations named ",(0,s.jsx)(i.code,{children:"yunikorn-admission-controller-validations"})," and ",(0,s.jsx)(i.code,{children:"yunikorn-admission-controller-mutations"}),". If the CA certificates have changed, the webhooks will also be updated. These webhooks allow the Kubernetes API server to connect to the admission controller service to perform configmap validations and pod mutations."]}),"\n",(0,s.jsx)(i.li,{children:"Starts up the admission controller HTTPS server."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Additionally, the admission controller also starts a background task to wait for CA certificates to expire. Once either certificate is expiring within the next 30 days, new CA and server certificates are generated, the webhook configurations are updated, and the HTTPS server is quickly restarted. This ensures that certificates rotate properly without downtime."}),"\n",(0,s.jsxs)(i.p,{children:["In production clusters, it is recommended to deploy the admission controller with two replicas by setting the Helm parameter ",(0,s.jsx)(i.code,{children:"admissionController.replicaCount"})," to ",(0,s.jsx)(i.code,{children:"2"}),". This will ensure that at least one admission controller webhook is reachable by the Kubernetes API server at all times. In this configuration, the CA certificates and webhook configurations are shared between the instances."]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1780:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var s=n(79474);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);