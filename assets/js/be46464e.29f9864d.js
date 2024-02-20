"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17785],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>g});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),h=o,g=p["".concat(u,".").concat(h)]||p[h]||c[h]||i;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},70169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(58168),o=(t(96540),t(15680));const i={id:"build",title:"Build and Run"},a=void 0,l={unversionedId:"developer_guide/build",id:"version-0.12.2/developer_guide/build",title:"Build and Run",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/developer_guide/build.md",sourceDirName:"developer_guide",slug:"/developer_guide/build",permalink:"/docs/0.12.2/developer_guide/build",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"build",title:"Build and Run"},sidebar:"version-0.12.2/docs",previous:{title:"Dev Environment Setup",permalink:"/docs/0.12.2/developer_guide/env_setup"},next:{title:"Deploy to Kubernetes",permalink:"/docs/0.12.2/developer_guide/deployment"}},u={},d=[{value:"Development Environment setup",id:"development-environment-setup",level:2},{value:"Build YuniKorn for Kubernetes",id:"build-yunikorn-for-kubernetes",level:2},{value:"A note on Go modules and git version",id:"a-note-on-go-modules-and-git-version",level:3},{value:"Build Docker image",id:"build-docker-image",level:3},{value:"Inspect the docker image",id:"inspect-the-docker-image",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Affected repositories",id:"affected-repositories",level:4},{value:"Making local changes",id:"making-local-changes",level:4},{value:"Updating dependencies",id:"updating-dependencies",level:4},{value:"Build the web UI",id:"build-the-web-ui",level:2},{value:"Locally run the integrated scheduler",id:"locally-run-the-integrated-scheduler",level:2},{value:"Verify external interface changes with e2e tests",id:"verify-external-interface-changes-with-e2e-tests",level:2}],s={toc:d},p="wrapper";function c(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"YuniKorn always works with a container orchestrator system. Currently, a Kubernetes shim ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"yunikorn-k8shim"),"\nis provided in our repositories, you can leverage it to develop YuniKorn scheduling features and integrate with Kubernetes.\nThis document describes resources how to setup dev environment and how to do the development."),(0,o.yg)("h2",{id:"development-environment-setup"},"Development Environment setup"),(0,o.yg)("p",null,"Read the ",(0,o.yg)("a",{parentName:"p",href:"/docs/0.12.2/developer_guide/env_setup"},"environment setup guide")," first to setup Docker and Kubernetes development environment."),(0,o.yg)("h2",{id:"build-yunikorn-for-kubernetes"},"Build YuniKorn for Kubernetes"),(0,o.yg)("p",null,"Prerequisite:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Go 1.16+")),(0,o.yg)("p",null,"You can build the scheduler for Kubernetes from ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim"},"yunikorn-k8shim")," project.\nThe build procedure will build all components into a single executable that can be deployed and running on Kubernetes."),(0,o.yg)("p",null,"Start the integrated build process by pulling the ",(0,o.yg)("inlineCode",{parentName:"p"},"yunikorn-k8shim")," repository:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir $HOME/yunikorn/\ncd $HOME/yunikorn/\ngit clone https://github.com/apache/incubator-yunikorn-k8shim.git\n")),(0,o.yg)("p",null,"At this point you have an environment that will allow you to build an integrated image for the YuniKorn scheduler."),(0,o.yg)("h3",{id:"a-note-on-go-modules-and-git-version"},"A note on Go modules and git version"),(0,o.yg)("p",null,"Go use git to fetch module information.\nCertain modules cannot be retrieved if the git version installed on the machine used to build is old.\nA message similar to the one below will be logged when trying to build for the first time."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-text"},"go: finding modernc.org/mathutil@v1.0.0\ngo: modernc.org/golex@v1.0.0: git fetch -f origin refs/heads/*:refs/heads/* refs/tags/*:refs/tags/* in <location>: exit status 128:\n    error: RPC failed; result=22, HTTP code = 404\n    fatal: The remote end hung up unexpectedly\n")),(0,o.yg)("p",null,"Update git to a recent version to fix this issue.\nGit releases later than 1.22 are known to work."),(0,o.yg)("h3",{id:"build-docker-image"},"Build Docker image"),(0,o.yg)("p",null,"Building a docker image can be triggered by following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"make image\n")),(0,o.yg)("p",null,"The image with the build in configuration can be deployed directly on kubernetes.\nSome sample deployments that can be used are found under ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/deployments/scheduler"},"deployments")," directory.\nFor the deployment that uses a config map you need to set up the ConfigMap in kubernetes.\nHow to deploy the scheduler with a ConfigMap is explained in the ",(0,o.yg)("a",{parentName:"p",href:"/docs/0.12.2/developer_guide/deployment"},"scheduler configuration deployment")," document."),(0,o.yg)("p",null,"The image build command will first build the integrated executable and then create the docker image.\nCurrently, there are some published docker images under ",(0,o.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/yunikorn"},"this docker hub repo"),", you are free to fetch and use.\nThe default image tags are not suitable for deployments to an accessible repository as it uses a hardcoded user and would push to Docker Hub with proper credentials.\nYou ",(0,o.yg)("em",{parentName:"p"},"must")," update the ",(0,o.yg)("inlineCode",{parentName:"p"},"TAG")," variable in the ",(0,o.yg)("inlineCode",{parentName:"p"},"Makefile")," to push to an accessible repository.\nWhen you update the image tag be aware that the deployment examples given will also need to be updated to reflect the same change."),(0,o.yg)("h3",{id:"inspect-the-docker-image"},"Inspect the docker image"),(0,o.yg)("p",null,"The docker image built from previous step has embedded some important build info in image's metadata. You can retrieve\nthese info with docker ",(0,o.yg)("inlineCode",{parentName:"p"},"inspect")," command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"docker inspect apache/yunikorn:scheduler-latest\n")),(0,o.yg)("p",null,"This info includes git revisions (last commit SHA) for each component, to help you understand which version of the source code\nwas shipped by this image. They are listed as docker image ",(0,o.yg)("inlineCode",{parentName:"p"},"labels"),", such as"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'"Labels": {\n    "BuildTimeStamp": "2019-07-16T23:08:06+0800",\n    "Version": "0.1",\n    "yunikorn-core-revision": "dca66c7e5a9e",\n    "yunikorn-k8shim-revision": "bed60f720b28",\n    "yunikorn-scheduler-interface-revision": "3df392eded1f"\n}\n')),(0,o.yg)("h3",{id:"dependencies"},"Dependencies"),(0,o.yg)("p",null,"The dependencies in the projects are managed using ",(0,o.yg)("a",{parentName:"p",href:"https://blog.golang.org/using-go-modules"},"go modules"),".\nGo Modules require at least Go version 1.11 to be installed on the development system."),(0,o.yg)("p",null,"If you want to modify one of the projects locally and build with your local dependencies you will need to change the module file.\nChanging dependencies uses mod ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," directives as explained in the ","[Update dependencies]","(#Updating dependencies)."),(0,o.yg)("p",null,"The YuniKorn project has four repositories three of those repositories have a dependency at the go level.\nThese dependencies are part of the go modules and point to the github repositories.\nDuring the development cycle it can be required to break the dependency on the committed version from github.\nThis requires making changes in the module file to allow loading a local copy or a forked copy from a different repository.  "),(0,o.yg)("h4",{id:"affected-repositories"},"Affected repositories"),(0,o.yg)("p",null,"The following dependencies exist between the repositories:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"repository"),(0,o.yg)("th",{parentName:"tr",align:null},"depends on"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"yunikorn-core"),(0,o.yg)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"yunikorn-k8shim"),(0,o.yg)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface, yunikorn-core")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"yunikorn-scheduler-interface"),(0,o.yg)("td",{parentName:"tr",align:null},"none")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"yunikorn-web"),(0,o.yg)("td",{parentName:"tr",align:null},"yunikorn-core")))),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"yunikorn-web")," repository has no direct go dependency on the other repositories. However any change to the ",(0,o.yg)("inlineCode",{parentName:"p"},"yunikorn-core")," webservices can affect the web interface. "),(0,o.yg)("h4",{id:"making-local-changes"},"Making local changes"),(0,o.yg)("p",null,"To make sure that the local changes will not break other parts of the build you should run:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A full build ",(0,o.yg)("inlineCode",{parentName:"li"},"make")," (build target depends on the repository)"),(0,o.yg)("li",{parentName:"ul"},"A full unit test run ",(0,o.yg)("inlineCode",{parentName:"li"},"make test"))),(0,o.yg)("p",null,"Any test failures should be fixed before proceeding."),(0,o.yg)("h4",{id:"updating-dependencies"},"Updating dependencies"),(0,o.yg)("p",null,"The simplest way is to use the ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," directive in the module file. The ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," directive allows you to override the import path with a new (local) path.\nThere is no need to change any of the imports in the source code. The change must be made in the ",(0,o.yg)("inlineCode",{parentName:"p"},"go.mod")," file of the repository that has the dependency. "),(0,o.yg)("p",null,"Using ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," to use of a forked dependency, such as:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"replace github.com/apache/incubator-yunikorn-core => example.com/some/forked-yunikorn\n")),(0,o.yg)("p",null,"There is no requirement to fork and create a new repository. If you do not have a repository you can use a local checked out copy too.\nUsing ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," to use of a local directory as a dependency:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"replace github.com/apache/incubator-yunikorn-core => /User/example/local/checked-out-yunikorn\n")),(0,o.yg)("p",null,"and for the same dependency using a relative path:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"replace github.com/apache/incubator-yunikorn-core => ../checked-out-yunikorn\n")),(0,o.yg)("p",null,"Note: if the ",(0,o.yg)("inlineCode",{parentName:"p"},"replace")," directive is using a local filesystem path, then the target must have the ",(0,o.yg)("inlineCode",{parentName:"p"},"go.mod")," file at that location."),(0,o.yg)("p",null,"Further details on the modules' wiki: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/golang/go/wiki/Modules#when-should-i-use-the-replace-directive"},"When should I use the 'replace' directive?"),"."),(0,o.yg)("h2",{id:"build-the-web-ui"},"Build the web UI"),(0,o.yg)("p",null,"Example deployments reference the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-web"},"YuniKorn web UI"),".\nThe YuniKorn web UI has its own specific requirements for the build. The project has specific requirements for the build follow the steps in the README to prepare a development environment and build how to build the projects.\nThe scheduler is fully functional without the web UI. "),(0,o.yg)("h2",{id:"locally-run-the-integrated-scheduler"},"Locally run the integrated scheduler"),(0,o.yg)("p",null,"When you have a local development environment setup you can run the scheduler in your local kubernetes environment.\nThis has been tested in a Docker desktop with 'Docker for desktop' and Minikube. See the ",(0,o.yg)("a",{parentName:"p",href:"/docs/0.12.2/developer_guide/env_setup"},"environment setup guide")," for further details."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"make run\n")),(0,o.yg)("p",null,"It will connect with the kubernetes cluster using the users configured configuration located in ",(0,o.yg)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),"."),(0,o.yg)("p",null,"You can also use the same approach to run the scheduler locally but connecting to a remote kubernetes cluster,\nas long as the ",(0,o.yg)("inlineCode",{parentName:"p"},"$HOME/.kube/config")," file is pointing to that remote cluster."),(0,o.yg)("h2",{id:"verify-external-interface-changes-with-e2e-tests"},"Verify external interface changes with e2e tests"),(0,o.yg)("p",null,"Yunikorn has an external REST interface which is validated by end-to-end tests. However, the tests exist in the k8shim repository.\nWhenever a change is made to the external interface, make sure that it is validated by running e2e tests or adjust the test cases accordingly."),(0,o.yg)("p",null,"How to run the tests locally is described ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/test/e2e/README.md"},"here"),"."))}c.isMDXComponent=!0}}]);