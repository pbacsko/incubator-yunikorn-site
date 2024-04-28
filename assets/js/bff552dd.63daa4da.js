"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6669],{10834:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(13274),t=o(1780);const i={id:"deployment",title:"Deploy to Kubernetes"},l=void 0,s={id:"developer_guide/deployment",title:"Deploy to Kubernetes",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/developer_guide/deployment.md",sourceDirName:"developer_guide",slug:"/developer_guide/deployment",permalink:"/docs/1.0.0/developer_guide/deployment",draft:!1,unlisted:!1,tags:[],version:"1.0.0",frontMatter:{id:"deployment",title:"Deploy to Kubernetes"},sidebar:"docs",previous:{title:"Go module updates",permalink:"/docs/1.0.0/developer_guide/dependencies"},next:{title:"Development in CodeReady Containers",permalink:"/docs/1.0.0/developer_guide/openshift_development"}},c={},d=[{value:"Build docker image",id:"build-docker-image",level:2},{value:"Setup RBAC for Scheduler",id:"setup-rbac-for-scheduler",level:2},{value:"Create the ConfigMap",id:"create-the-configmap",level:2},{value:"Attach ConfigMap to the Scheduler Pod",id:"attach-configmap-to-the-scheduler-pod",level:2},{value:"Deploy the Scheduler",id:"deploy-the-scheduler",level:2},{value:"Setup RBAC for Admission Controller",id:"setup-rbac-for-admission-controller",level:2},{value:"Create the Secret",id:"create-the-secret",level:2},{value:"Deploy the Admission Controller",id:"deploy-the-admission-controller",level:2},{value:"Access to the web UI",id:"access-to-the-web-ui",level:2},{value:"Configuration Hot Refresh",id:"configuration-hot-refresh",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The easiest way to deploy YuniKorn is to leverage our ",(0,r.jsx)(n.a,{href:"https://hub.helm.sh/charts/yunikorn/yunikorn",children:"helm charts"}),",\nyou can find the guide ",(0,r.jsx)(n.a,{href:"/docs/1.0.0/",children:"here"}),". This document describes the manual process to deploy YuniKorn\nscheduler and admission controller. It is primarily intended for developers."]}),"\n",(0,r.jsx)(n.h2,{id:"build-docker-image",children:"Build docker image"}),"\n",(0,r.jsxs)(n.p,{children:["Under project root of the ",(0,r.jsx)(n.code,{children:"yunikorn-k8shim"}),", run the command to build an image using the map for the configuration:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"make image\n"})}),"\n",(0,r.jsx)(n.p,{children:"This command will build an image. The image will be tagged with a default version and image tag."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," the default build uses a hardcoded user and tag. You ",(0,r.jsx)(n.em,{children:"must"})," update the ",(0,r.jsx)(n.code,{children:"IMAGE_TAG"})," variable in the ",(0,r.jsx)(n.code,{children:"Makefile"})," to push to an appropriate repository."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," the latest yunikorn images in docker hub are not updated anymore due to ASF policy. Hence, you should build both scheduler image and web image locally before deploying them."]}),"\n",(0,r.jsx)(n.h2,{id:"setup-rbac-for-scheduler",children:"Setup RBAC for Scheduler"}),"\n",(0,r.jsxs)(n.p,{children:["The first step is to create the RBAC role for the scheduler, see ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/yunikorn-rbac.yaml",children:"yunikorn-rbac.yaml"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl create -f scheduler/yunikorn-rbac.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"The role is a requirement on the current versions of kubernetes."}),"\n",(0,r.jsx)(n.h2,{id:"create-the-configmap",children:"Create the ConfigMap"}),"\n",(0,r.jsx)(n.p,{children:"This must be done before deploying the scheduler. It requires a correctly setup kubernetes environment.\nThis kubernetes environment can be either local or remote."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"download configuration file if not available on the node to add to kubernetes:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl -o queues.yaml https://raw.githubusercontent.com/apache/yunikorn-k8shim/master/conf/queues.yaml\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"create ConfigMap in kubernetes:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl create configmap yunikorn-configs --from-file=queues.yaml\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"check if the ConfigMap was created correctly:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl describe configmaps yunikorn-configs\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," if name of the ConfigMap is changed the volume in the scheduler yaml file must be updated to reference the new name otherwise the changes to the configuration will not be picked up."]}),"\n",(0,r.jsx)(n.h2,{id:"attach-configmap-to-the-scheduler-pod",children:"Attach ConfigMap to the Scheduler Pod"}),"\n",(0,r.jsx)(n.p,{children:"The ConfigMap is attached to the scheduler as a special volume. First step is to specify where to mount it in the pod:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  volumeMounts:\n    - name: config-volume\n      mountPath: /etc/yunikorn/\n"})}),"\n",(0,r.jsx)(n.p,{children:"Second step is to link the mount point back to the configuration map created in kubernetes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  volumes:\n    - name: config-volume\n      configMap:\n        name: yunikorn-configs\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Both steps are part of the scheduler yaml file, an example can be seen at ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/scheduler.yaml",children:"scheduler.yaml"}),"\nfor reference."]}),"\n",(0,r.jsx)(n.h2,{id:"deploy-the-scheduler",children:"Deploy the Scheduler"}),"\n",(0,r.jsx)(n.p,{children:"The scheduler can be deployed with following command."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl create -f deployments/scheduler/scheduler.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"The deployment will run 2 containers from your pre-built docker images in 1 pod,"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"yunikorn-scheduler-core (yunikorn scheduler core and shim for K8s)"}),"\n",(0,r.jsx)(n.li,{children:"yunikorn-scheduler-web (web UI)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, the scheduler can be deployed as a K8S scheduler plugin:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl create -f deployments/scheduler/plugin.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The pod is deployed as a customized scheduler, it will take the responsibility to schedule pods which explicitly specifies ",(0,r.jsx)(n.code,{children:"schedulerName: yunikorn"})," in pod's spec. In addition to the ",(0,r.jsx)(n.code,{children:"schedulerName"}),", you will also have to add a label ",(0,r.jsx)(n.code,{children:"applicationId"})," to the pod."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"  metadata:\n    name: pod_example\n    labels:\n      applicationId: appID\n  spec:\n    schedulerName: yunikorn\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Note: Admission controller abstracts the addition of ",(0,r.jsx)(n.code,{children:"schedulerName"})," and ",(0,r.jsx)(n.code,{children:"applicationId"})," from the user and hence, routes all traffic to YuniKorn. If you use helm chart to deploy, it will install admission controller along with the scheduler. Otherwise, proceed to the steps\nbelow to manually deploy the admission controller if running non-example workloads where ",(0,r.jsx)(n.code,{children:"schedulerName"})," and ",(0,r.jsx)(n.code,{children:"applicationId"})," are not present in the pod spec and metadata, respectively."]}),"\n",(0,r.jsx)(n.h2,{id:"setup-rbac-for-admission-controller",children:"Setup RBAC for Admission Controller"}),"\n",(0,r.jsxs)(n.p,{children:["Before the admission controller is deployed, we must create its RBAC role, see ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/admission-controller-rbac.yaml",children:"admission-controller-rbac.yaml"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl create -f scheduler/admission-controller-rbac.yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-the-secret",children:"Create the Secret"}),"\n",(0,r.jsxs)(n.p,{children:["Since the admission controller intercepts calls to the API server to validate/mutate incoming requests, we must deploy an empty secret\nused by the webhook server to store TLS certificates and keys. See ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/admission-controller-secrets.yaml",children:"admission-controller-secrets.yaml"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl create -f scheduler/admission-controller-secrets.yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"deploy-the-admission-controller",children:"Deploy the Admission Controller"}),"\n",(0,r.jsxs)(n.p,{children:["Now we can deploy the admission controller as a service. This will automatically validate/modify incoming requests and objects, respectively, in accordance with the ",(0,r.jsx)(n.a,{href:"#Deploy-the-Scheduler",children:"example in Deploy the Scheduler"}),". See the contents of the admission controller deployment and service in ",(0,r.jsx)(n.a,{href:"https://github.com/apache/yunikorn-k8shim/blob/master/deployments/scheduler/admission-controller.yaml",children:"admission-controller.yaml"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"kubectl create -f scheduler/admission-controller.yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"access-to-the-web-ui",children:"Access to the web UI"}),"\n",(0,r.jsx)(n.p,{children:"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard ports can be turned on via:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'POD=`kubectl get pod -l app=yunikorn -o jsonpath="{.items[0].metadata.name}"` && \\\nkubectl port-forward ${POD} 9889 9080\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"9889"})," is the default port for Web UI, ",(0,r.jsx)(n.code,{children:"9080"})," is the default port of scheduler's Restful service where web UI retrieves info from.\nOnce this is done, web UI will be available at: ",(0,r.jsx)(n.a,{href:"http://localhost:9889",children:"http://localhost:9889"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"configuration-hot-refresh",children:"Configuration Hot Refresh"}),"\n",(0,r.jsxs)(n.p,{children:["YuniKorn supports to load configuration changes automatically from attached configmap. Simply update the content in the configmap,\nthat can be done either via Kubernetes dashboard UI or commandline. ",(0,r.jsx)(n.em,{children:"Note"}),", changes made to the configmap might have some\ndelay to be picked up by the scheduler."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1780:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>s});var r=o(79474);const t={},i=r.createContext(t);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);