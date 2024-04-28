"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97766],{65568:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=i(13274),s=i(1780);const t={id:"queue_config",title:"Partition and Queue Configuration"},a=void 0,o={id:"user_guide/queue_config",title:"Partition and Queue Configuration",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/user_guide/queue_config.md",sourceDirName:"user_guide",slug:"/user_guide/queue_config",permalink:"/docs/0.9.0/user_guide/queue_config",draft:!1,unlisted:!1,tags:[],version:"0.9.0",frontMatter:{id:"queue_config",title:"Partition and Queue Configuration"},sidebar:"docs",previous:{title:"Features",permalink:"/docs/0.9.0/get_started/core_features"},next:{title:"App Placement Rules",permalink:"/docs/0.9.0/user_guide/placement_rules"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Partitions",id:"partitions",level:2},{value:"Queues",id:"queues",level:3},{value:"Placement rules",id:"placement-rules",level:3},{value:"Limits",id:"limits",level:3},{value:"Resources",id:"resources",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The basis for the queue configuration is given in the ",(0,r.jsx)(n.a,{href:"/docs/0.9.0/design/scheduler_configuration",children:"configuration design document"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["This document provides the generic queue configuration.\nIt references both the ",(0,r.jsx)(n.a,{href:"/docs/0.9.0/user_guide/acls",children:"Access control lists"})," and ",(0,r.jsx)(n.a,{href:"/docs/0.9.0/user_guide/placement_rules",children:"placement rule"})," documentation."]}),"\n",(0,r.jsx)(n.p,{children:"This document explains how to create the partition and queue configuration for the scheduler with examples."}),"\n",(0,r.jsx)(n.p,{children:"The scheduler relies on the shim to reliably provide user information as part of the application submission.\nIn the current shim there is no reliable way to identify the user and the groups the user belongs to.\nThe user and group information provided by the shim is incomplete in the best case.\nThis shim limitation impacts the behaviour of user based limits and access control in the scheduler.\nThe current implementation only provides the framework in the scheduler and will not be fully functional until the shim changes are added."}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The configuration file for the scheduler that is described here only provides the configuration for the partitions and queues."}),"\n",(0,r.jsxs)(n.p,{children:["By default we use the file called ",(0,r.jsx)(n.code,{children:"queues.yaml"})," in our deployments.\nThe filename can be changed via the command line flag ",(0,r.jsx)(n.code,{children:"policyGroup"})," of the scheduler.\nChanging the filename must be followed by corresponding changes in the deployment details, either the ",(0,r.jsx)(n.code,{children:"configmap"})," or the file included in the docker container."]}),"\n",(0,r.jsxs)(n.p,{children:["The example file for the configuration is located in the scheduler core's ",(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-yunikorn-core/blob/master/config/queues.yaml",children:"queues.yaml"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"partitions",children:"Partitions"}),"\n",(0,r.jsx)(n.p,{children:"Partitions are the top level of the scheduler configuration.\nThere can be more than one partition defined in the configuration."}),"\n",(0,r.jsx)(n.p,{children:"Basic structure for the partition definition in the configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"partitions:\n  - name: <name of the 1st partition>\n  - name: <name of the 2nd partition>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The default name for the partition is ",(0,r.jsx)(n.code,{children:"default"}),".\nThe partition definition contains the full configuration for the scheduler for a particular shim.\nEach shim uses its own unique partition."]}),"\n",(0,r.jsx)(n.p,{children:"The partition must have at least the following keys defined:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"name"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#queues",children:"queues"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The queues configuration is explained below."}),"\n",(0,r.jsx)(n.p,{children:"Optionally the following keys can be defined for a partition:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#placement-rules",children:"placementrules"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#limits",children:"limits"})}),"\n",(0,r.jsx)(n.li,{children:"nodesortpolicy"}),"\n",(0,r.jsx)(n.li,{children:"preemption"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Placement rules and limits are explained in their own chapters"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"nodesortpolicy"})," defines the way the nodes are sorted for the partition.\nDetails on the values that can be used are in the ",(0,r.jsx)(n.a,{href:"/docs/0.9.0/user_guide/sorting_policies#node-sorting",children:"sorting policy"})," documentation."]}),"\n",(0,r.jsxs)(n.p,{children:["The preemption key can currently have only one sub key: ",(0,r.jsx)(n.em,{children:"enabled"}),".\nThis boolean value defines the preemption behaviour for the whole partition."]}),"\n",(0,r.jsxs)(n.p,{children:["The default value for ",(0,r.jsx)(n.em,{children:"enabled"})," is ",(0,r.jsx)(n.em,{children:"false"}),".\nAllowed values: ",(0,r.jsx)(n.em,{children:"true"})," or ",(0,r.jsx)(n.em,{children:"false"}),", any other value will cause a parse error."]}),"\n",(0,r.jsxs)(n.p,{children:["Example ",(0,r.jsx)(n.code,{children:"partition"})," yaml entry with ",(0,r.jsx)(n.em,{children:"preemption"})," flag set and a ",(0,r.jsx)(n.code,{children:"nodesortpolicy"})," of ",(0,r.jsx)(n.em,{children:"fair"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"partitions:\n  - name: <name of the partition>\n    nodesortpolicy: fair\n    preemption:\n      enabled: true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["NOTE:\nCurrently the Kubernetes unique shim does not support any other partition than the ",(0,r.jsx)(n.code,{children:"default"})," partition..\nThis has been logged as an ",(0,r.jsx)(n.a,{href:"https://issues.apache.org/jira/browse/YUNIKORN-22",children:"jira"})," for the shim."]}),"\n",(0,r.jsx)(n.h3,{id:"queues",children:"Queues"}),"\n",(0,r.jsx)(n.p,{children:"YuniKorn manages resources by leveraging resource queues. The resource queue has the following characters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["queues can have ",(0,r.jsx)(n.strong,{children:"hierarchical"})," structure"]}),"\n",(0,r.jsxs)(n.li,{children:["each queue can be preset with ",(0,r.jsx)(n.strong,{children:"min/max capacity"})," where min-capacity defines the guaranteed resource and the max-capacity defines the resource limit (aka resource quota)"]}),"\n",(0,r.jsx)(n.li,{children:"tasks must be running under a certain leaf queue"}),"\n",(0,r.jsxs)(n.li,{children:["queues can be ",(0,r.jsx)(n.strong,{children:"static"})," (loading from configuration file) or ",(0,r.jsx)(n.strong,{children:"dynamical"})," (internally managed by YuniKorn)"]}),"\n",(0,r.jsxs)(n.li,{children:["queue level ",(0,r.jsx)(n.strong,{children:"resource fairness is"})," enforced by the scheduler"]}),"\n",(0,r.jsx)(n.li,{children:"a job can only run under a specific queue"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The difference between YuniKorn queue and ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/",children:"Kubernetes namespace"}),":\nKubernetes namespace provides the scope for the Kubernetes resources, including the security context (i.e who can access the objects), and resource\nboundary when ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/",children:"resource quota"})," is defined (i.e how many resources can be used by the objects).\nOn the other hand, YuniKorn queue is only used how many resources can be used by a group of jobs, and in which order. It provides\na more fine-grained control on resource sharing across multiple tenants with considering of resource fairness, job ordering, etc. In most of the cases,\nYuniKorn queue can be used to replace the namespace resource quota, in order to provide more scheduling features."]})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"queues"})," entry is the main configuration element.\nIt defines a hierarchical structure for the queues."]}),"\n",(0,r.jsxs)(n.p,{children:["It can have a ",(0,r.jsx)(n.code,{children:"root"})," queue defined but it is not a required element.\nIf the ",(0,r.jsx)(n.code,{children:"root"})," queue is not defined the configuration parsing will insert the root queue for consistency.\nThe insertion of the root queue is triggered by:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the configuration has more than one queue defined at the top level a root queue is inserted."}),"\n",(0,r.jsxs)(n.li,{children:["If there is only one queue defined at the top level and it is not called ",(0,r.jsx)(n.code,{children:"root"})," a root queue is inserted."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The defined queue or queues will become a child queue of the inserted ",(0,r.jsx)(n.code,{children:"root"})," queue."]}),"\n",(0,r.jsxs)(n.p,{children:["Basic ",(0,r.jsx)(n.code,{children:"queues"})," yaml entry with sub queue:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"queues:\n- name: <name of the queue>\n  queues:\n  - name: <name of the queue>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Supported parameters for the queues:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"name"}),"\n",(0,r.jsx)(n.li,{children:"parent"}),"\n",(0,r.jsx)(n.li,{children:"queues"}),"\n",(0,r.jsx)(n.li,{children:"properties"}),"\n",(0,r.jsx)(n.li,{children:"adminacl"}),"\n",(0,r.jsx)(n.li,{children:"submitacl"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#resources",children:"resources"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#limits",children:"limits"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Each queue must have a ",(0,r.jsx)(n.em,{children:"name"}),".\nThe name of a queue must be unique at the level that the queue is defined.\nSince the queue structure is fully hierarchical queues at different points in the hierarchy may have the same name.\nAs an example: the queue structure ",(0,r.jsx)(n.code,{children:"root.testqueue"})," and ",(0,r.jsx)(n.code,{children:"root.parent.testqueue"}),' is a valid structure.\nA queue cannot contain a dot "." character as that character is used to separate the queues in the hierarchy.\nIf the name is not unique for the queue in the configuration or contains a dot a parsing error is generated and the configuration is rejected.']}),"\n",(0,r.jsx)(n.p,{children:"Queues in the structure will automatically get a type assigned.\nThe type of the queue is based on the fact that the queue has children or sub queues.\nThe two types of queues are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"parent"}),"\n",(0,r.jsx)(n.li,{children:"leaf"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Applications can only be assigned to a ",(0,r.jsx)(n.em,{children:"leaf"})," queue.\nA queue that has a child or sub queue in the configuration is automatically a ",(0,r.jsx)(n.em,{children:"parent"})," queue.\nIf a queue does not have a sub the queue in the configuration it is a ",(0,r.jsx)(n.em,{children:"leaf"})," queue, unless the ",(0,r.jsx)(n.code,{children:"parent"})," parameter is set to ",(0,r.jsx)(n.em,{children:"true"}),".\nTrying to override a ",(0,r.jsx)(n.em,{children:"parent"})," queue type in the configuration will cause a parsing error of the configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Sub queues for a parent queue are defined under the ",(0,r.jsx)(n.code,{children:"queues"})," entry.\nThe ",(0,r.jsx)(n.code,{children:"queues"})," entry is a recursive entry for a queue level and uses the exact same set of parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"properties"})," parameter is a simple key value pair list.\nThe list provides a simple set of properties for the queue.\nThere are no limitations on the key or value values, anything is allowed.\nCurrently, the property list is only used in the scheduler to define a ",(0,r.jsx)(n.a,{href:"/docs/0.9.0/user_guide/sorting_policies#application-sorting",children:"sorting order"})," for a leaf queue.\nFuture expansions, like the option to turn on or off preemption on a queue or other sorting policies, would use this same property construct without the need to change the configuration."]}),"\n",(0,r.jsxs)(n.p,{children:["Access to a queue is set via the ",(0,r.jsx)(n.code,{children:"adminacl"})," for administrative actions and for submitting an application via the ",(0,r.jsx)(n.code,{children:"submitacl"})," entry.\nACLs are documented in the ",(0,r.jsx)(n.a,{href:"/docs/0.9.0/user_guide/acls",children:"Access control lists"})," document."]}),"\n",(0,r.jsxs)(n.p,{children:["Queue resource limits are set via the ",(0,r.jsx)(n.code,{children:"resources"})," parameter.\nUser and group limits are set via the ",(0,r.jsx)(n.code,{children:"limits"})," parameter.\nAs both entries are complex configuration entries they are explained in ",(0,r.jsx)(n.a,{href:"#resources",children:"resources"})," and ",(0,r.jsx)(n.a,{href:"#limits",children:"limits"})," below."]}),"\n",(0,r.jsxs)(n.p,{children:["An example configuration of a queue ",(0,r.jsx)(n.code,{children:"root.namespaces"})," as a ",(0,r.jsx)(n.em,{children:"parent"})," queue with limits:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"partitions:\n  - name: default\n    queues:\n      - name: namespaces\n        parent: true\n        resources:\n          guaranteed:\n            {memory: 1000, vcore: 10}\n          max:\n            {memory: 10000, vcore: 100}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"placement-rules",children:"Placement rules"}),"\n",(0,r.jsxs)(n.p,{children:["The placement rules are defined and documented in the ",(0,r.jsx)(n.a,{href:"/docs/0.9.0/user_guide/placement_rules",children:"placement rule"})," document."]}),"\n",(0,r.jsxs)(n.p,{children:["Each partition can have only one set of placement rules defined.\nIf no rules are defined the placement manager is not started and each application ",(0,r.jsx)(n.em,{children:"must"})," have a queue set on submit."]}),"\n",(0,r.jsx)(n.h3,{id:"limits",children:"Limits"}),"\n",(0,r.jsx)(n.p,{children:"Limits define a set of limit objects for a partition or queue.\nIt can be set on either the partition or on a queue at any level."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"limits:\n  - limit: <description>\n  - limit: <description>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A limit object is a complex configuration object.\nIt defines one limit for a set of users and or groups.\nMultiple independent limits can be set as part of one ",(0,r.jsx)(n.code,{children:"limits"})," entry on a queue or partition.\nUsers and or groups that are not part of the limit setting will not be limited."]}),"\n",(0,r.jsx)(n.p,{children:"A sample limits entry:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'limits:\n  - limit: <description>\n    users:\n    - <user name or "*"">\n    - <user name>\n    groups:\n    - <group name or "*"">\n    - <group name>\n    maxapplications: <1..maxint>\n    maxresources:\n      <resource name 1>: <0..maxint>\n      <resource name 2>: <0..maxint>\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Limits are applied recursively in the case of a queue limit.\nThis means that a limit on the ",(0,r.jsx)(n.code,{children:"root"})," queue is an overall limit in the cluster for the user or group.\nA ",(0,r.jsx)(n.code,{children:"root"})," queue limit is thus also equivalent with the ",(0,r.jsx)(n.code,{children:"partition"})," limit."]}),"\n",(0,r.jsx)(n.p,{children:"The limit object parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"limit"}),"\n",(0,r.jsx)(n.li,{children:"users"}),"\n",(0,r.jsx)(n.li,{children:"groups"}),"\n",(0,r.jsx)(n.li,{children:"maxapplications"}),"\n",(0,r.jsx)(n.li,{children:"maxresources"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"limit"})," parameter is an optional description of the limit entry.\nIt is not used for anything but making the configuration understandable and readable."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"users"})," and ",(0,r.jsx)(n.em,{children:"groups"})," that can be configured can be one of two types:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'a star "*"'}),"\n",(0,r.jsx)(n.li,{children:"a list of users or groups."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'If the entry for users or groups contains more than one (1) entry it is always considered a list of either users or groups.\nThe star "*" is the wildcard character and matches all users or groups.\nDuplicate entries in the lists are ignored and do not cause a parsing error.\nSpecifying a star beside other list elements is not allowed.'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"maxapplications"})," is an unsigned integer value, larger than 1, which allows you to limit the number of running applications for the configured user or group.\nSpecifying a zero maximum applications limit is not allowed as it would implicitly deny access.\nDenying access must be handled via the ACL entries."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"maxresources"})," parameter can be used to specify a limit for one or more resources.\nThe ",(0,r.jsx)(n.em,{children:"maxresources"})," uses the same syntax as the ",(0,r.jsx)(n.a,{href:"#resources",children:"resources"})," parameter for the queue.\nResources that are not specified in the list are not limited.\nA resource limit can be set to 0.\nThis prevents the user or group from requesting the specified resource even though the queue or partition has that specific resource available.",(0,r.jsx)(n.br,{}),"\n","Specifying an overall resource limit of zero is not allowed.\nThis means that at least one of the resources specified in the limit must be greater than zero."]}),"\n",(0,r.jsxs)(n.p,{children:["If a resource is not available on a queue the maximum resources on a queue definition should be used.\nSpecifying a limit that is effectively zero, ",(0,r.jsx)(n.em,{children:"maxapplications"})," is zero and all resource limits are zero, is not allowed and will cause a parsing error."]}),"\n",(0,r.jsxs)(n.p,{children:["A limit is per user or group.\nIt is ",(0,r.jsx)(n.em,{children:"not"})," a combined limit for all the users or groups together."]}),"\n",(0,r.jsx)(n.p,{children:"As an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'limit: "example entry"\nmaxapplications: 10\nusers:\n- sue\n- bob\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this case both the users ",(0,r.jsx)(n.code,{children:"sue"})," and ",(0,r.jsx)(n.code,{children:"bob"})," are allowed to run 10 applications."]}),"\n",(0,r.jsx)(n.h3,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.p,{children:["The resources entry for the queue can set the ",(0,r.jsx)(n.em,{children:"guaranteed"})," and or ",(0,r.jsx)(n.em,{children:"maximum"})," resources for a queue.\nResource limits are checked recursively.\nThe usage of a leaf queue is the sum of all assigned resources for that queue.\nThe usage of a parent queue is the sum of the usage of all queues, leafs and parents, below the parent queue."]}),"\n",(0,r.jsx)(n.p,{children:"The root queue, when defined, cannot have any resource limit set.\nIf the root queue has any limit set a parsing error will occur.\nThe maximum resource limit for the root queue is automatically equivalent to the cluster size.\nThere is no guaranteed resource setting for the root queue."}),"\n",(0,r.jsxs)(n.p,{children:["Maximum resources when configured place a hard limit on the size of all allocations that can be assigned to a queue at any point in time.\nA maximum resource can be set to 0 which makes the resource not available to the queue.\nGuaranteed resources are used in calculating the share of the queue and during allocation.\nIt is used as one of the inputs for deciding which queue to give the allocation to.\nPreemption uses the ",(0,r.jsx)(n.em,{children:"guaranteed"})," resource of a queue as a base which a queue cannot go below."]}),"\n",(0,r.jsxs)(n.p,{children:["Basic ",(0,r.jsx)(n.code,{children:"resources"})," yaml entry:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"resources:\n  guaranteed:\n    <resource name 1>: <0..maxint>\n    <resource name 2>: <0..maxint>\n  max:\n    <resource name 1>: <0..maxint>\n    <resource name 2>: <0..maxint>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Resources that are not specified in the list are not limited, for max resources, or guaranteed in the case of guaranteed resources."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1780:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(79474);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);