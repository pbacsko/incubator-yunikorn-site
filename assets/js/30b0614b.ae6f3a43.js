"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17657],{57685:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var t=s(13274),a=s(1780);const r={id:"namespace_resource_quota",title:"Namespace Resource Quota"},i=void 0,o={id:"design/namespace_resource_quota",title:"Namespace Resource Quota",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/design/namespace_resource_quota.md",sourceDirName:"design",slug:"/design/namespace_resource_quota",permalink:"/docs/0.12.2/design/namespace_resource_quota",draft:!1,unlisted:!1,tags:[],version:"0.12.2",frontMatter:{id:"namespace_resource_quota",title:"Namespace Resource Quota"},sidebar:"docs",previous:{title:"Cross Queue Preemption",permalink:"/docs/0.12.2/design/cross_queue_preemption"},next:{title:"Pluggable App Management",permalink:"/docs/0.12.2/design/pluggable_app_management"}},c={},u=[{value:"Best practice",id:"best-practice",level:2},{value:"1. Setup namespace",id:"1-setup-namespace",level:3},{value:"2. Setup YuniKorn queues",id:"2-setup-yunikorn-queues",level:3},{value:"3. Mapping applications to queues &amp; namespace",id:"3-mapping-applications-to-queues--namespace",level:3},{value:"Future Work",id:"future-work",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In K8s, user can setup namespace with ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/",children:"resource quotas"})," to limit aggregated resource consumption in this namespace. The validation of namespace resource quotas is handled in api-server directly, therefore YuniKorn simply honors the quotas like the default scheduler."]}),"\n",(0,t.jsx)(n.h2,{id:"best-practice",children:"Best practice"}),"\n",(0,t.jsx)(n.p,{children:"It is not mandatory to setup YuniKorn queues with respect of namespaces.\nHowever, in practice, it makes more sense to do so.\nNamespace is often used to set a cap for resource consumptions per user-group/team,\nYuniKorn queue is also meant to divide cluster resource into multiple groups.\nLet's go through an example."}),"\n",(0,t.jsx)(n.h3,{id:"1-setup-namespace",children:"1. Setup namespace"}),"\n",(0,t.jsxs)(n.p,{children:["Namespace: ",(0,t.jsx)(n.code,{children:"advertisement"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'apiVersion: v1\nkind: ResourceQuota\nmetadata:\n  name: advertisement\nspec:\n  hard:\n    requests.cpu: "200m"\n    requests.memory: 2000Mi\n    limits.cpu: "200m"\n    limits.memory: 4000Mi\n'})}),"\n",(0,t.jsx)(n.p,{children:"Create the namespace"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl create namespace advertisement\nkubectl create -f ./advertisement.yaml --namespace=advertisement\nkubectl get quota --namespace=advertisement\nkubectl describe quota advertisement --namespace=advertisement\n\n// output\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       0     200m\nlimits.memory    0     4000Mi\nrequests.cpu     0     200m\nrequests.memory  0     2000Mi\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2-setup-yunikorn-queues",children:"2. Setup YuniKorn queues"}),"\n",(0,t.jsxs)(n.p,{children:["Queue: ",(0,t.jsx)(n.code,{children:"advertisement"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"name: advertisement\nresources:\n  guaranteed:\n    vcore: 100\n    memory: 1000\n  max:\n    vcore: 200\n    memory: 2000\n"})}),"\n",(0,t.jsxs)(n.p,{children:["ensure ",(0,t.jsx)(n.code,{children:"QueueMaxResource <= NamespaceResourceQuotaRequests"})]}),"\n",(0,t.jsx)(n.h3,{id:"3-mapping-applications-to-queues--namespace",children:"3. Mapping applications to queues & namespace"}),"\n",(0,t.jsx)(n.p,{children:"In a pod spec"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00001"\n    queue: "root.advertisement"\n  name: task0\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "50m"\n          memory: "800M"\n        limits:\n          cpu: "100m"\n          memory: "1000M"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Check Quota"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl describe quota advertisement --namespace=advertisement\n\nName:            advertisement\nNamespace:       advertisement\nResource         Used  Hard\n--------         ----  ----\nlimits.cpu       100m  200m\nlimits.memory    1G    4000Mi\nrequests.cpu     50m   200m\nrequests.memory  800M  2000Mi\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now submit another application,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'apiVersion: v1\nkind: Pod\nmetadata:\n  namespace: advertisement\n  labels:\n    app: sleep\n    applicationId: "application_2019_01_22_00002"\n    queue: "root.advertisement"\n  name: task1\nspec:\n  schedulerName: yunikorn\n  containers:\n    - name: sleep-5s\n      image: "alpine:latest"\n      command: ["/bin/ash", "-ec", "while :; do echo \'.\'; sleep 5 ; done"]\n      resources:\n        requests:\n          cpu: "200m"\n          memory: "800M"\n        limits:\n          cpu: "200m"\n          memory: "1000M"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["pod will not be able to submitted to api-server, because the requested cpu ",(0,t.jsx)(n.code,{children:"200m"})," + used cpu ",(0,t.jsx)(n.code,{children:"100m"})," = ",(0,t.jsx)(n.code,{children:"300m"})," which exceeds the resource quota."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'kubectl create -f pod_ns_adv_task1.yaml\nError from server (Forbidden): error when creating "pod_ns_adv_task1.yaml": pods "task1" is forbidden: exceeded quota: advertisement, requested: limits.cpu=200m,requests.cpu=200m, used: limits.cpu=100m,requests.cpu=50m, limited: limits.cpu=200m,requests.cpu=200m\n'})}),"\n",(0,t.jsx)(n.h2,{id:"future-work",children:"Future Work"}),"\n",(0,t.jsxs)(n.p,{children:["For compatibility, we should respect namespaces and resource quotas.\nResource quota is overlapped with queue configuration in many ways,\nfor example the ",(0,t.jsx)(n.code,{children:"requests"})," quota is just like queue's max resource. However,\nthere are still a few features resource quota can do but queue cannot, such as"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Resource ",(0,t.jsx)(n.code,{children:"limits"}),". The aggregated resource from all pods in a namespace cannot exceed this limit."]}),"\n",(0,t.jsx)(n.li,{children:"Storage Resource Quota, e.g storage size, PVC number, etc."}),"\n",(0,t.jsx)(n.li,{children:"Object Count Quotas, e.g count of PVCs, services, configmaps, etc."}),"\n",(0,t.jsx)(n.li,{children:"Resource Quota can map to priority class."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Probably we can build something similar to cover (3) in this list.\nBut it would be hard to completely support all these cases."}),"\n",(0,t.jsx)(n.p,{children:"But currently, setting applications mapping to a queue as well as a corresponding namespace is over complex.\nSome future improvements might be:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Automatically detects namespaces in k8s-shim and map them to queues. Behind the scenes, we automatically generates queue configuration based on namespace definition. Generated queues are attached under root queue."}),"\n",(0,t.jsx)(n.li,{children:"When new namespace added/updated/removed, similarly to (1), we automatically update queues."}),"\n",(0,t.jsx)(n.li,{children:"User can add more configuration to queues, e.g add queue ACL, add child queues on the generated queues."}),"\n",(0,t.jsx)(n.li,{children:"Applications submitted to namespaces are transparently submitted to corresponding queues."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1780:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(79474);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);