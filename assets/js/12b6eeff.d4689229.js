"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[41596],{2070:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"support/general-knowledge/rest-apis","title":"REST APIs","description":"Do I need some REST?","source":"@site/docs/support/general-knowledge/rest-apis.md","sourceDirName":"support/general-knowledge","slug":"/support/general-knowledge/rest-apis","permalink":"/docs/1.0.1/support/general-knowledge/rest-apis","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"general knowledge","permalink":"/docs/1.0.1/tags/general-knowledge"},{"inline":true,"label":"beginner","permalink":"/docs/1.0.1/tags/beginner"},{"inline":true,"label":"concepts","permalink":"/docs/1.0.1/tags/concepts"},{"inline":true,"label":"rest","permalink":"/docs/1.0.1/tags/rest"}],"version":"current","lastUpdatedAt":1740656035000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"REST APIs","slug":"rest-apis","description":"Do I need some REST?","tags":["general knowledge","beginner","concepts","rest"]},"sidebar":"tutorialSidebar","previous":{"title":"OAuth 2.0","permalink":"/docs/1.0.1/support/general-knowledge/oauth2"},"next":{"title":"Principle of Least Privilege","permalink":"/docs/1.0.1/support/general-knowledge/principle-of-least-privilege"}}');var i=t(74848),r=t(28453);const o={sidebar_position:2,title:"REST APIs",slug:"rest-apis",description:"Do I need some REST?",tags:["general knowledge","beginner","concepts","rest"]},a=void 0,l={},c=[{value:"1\ufe0f\u20e3\xa0 Uniform Interface",id:"one-uniform-interface",level:2},{value:"2\ufe0f\u20e3\xa0 Client-server",id:"two-client-server",level:2},{value:"3\ufe0f\u20e3\xa0 Stateless",id:"three-stateless",level:2},{value:"4\ufe0f\u20e3\xa0 Cacheable",id:"four-cacheable",level:2},{value:"5\ufe0f\u20e3\xa0 Layered System",id:"five-layered-system",level:2},{value:"6\ufe0f\u20e3\xa0 Code-on-demand (optional)",id:"six-code-on-demand-optional",level:2},{value:"\ud83d\udcbc\xa0 Resources",id:"briefcase-resources",level:2},{value:"\ud83d\udcc3\xa0 Interface representation",id:"page_with_curl-interface-representation",level:2},{value:"\ud83d\udcda Additional Resources",id:"books-additional-resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["An ",(0,i.jsx)(n.em,{children:"Application Programming Interface"}),", or ",(0,i.jsx)(n.strong,{children:"API"}),", is a type of software interface, offering a service to other pieces of software. Developing a public API means making it possible for external systems to integrate the exposed services into their own, with advantages for both sides."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"REST"})," stands for ",(0,i.jsx)(n.em,{children:"REpresentational State Transfer"})," and is an architectural style; when the principles of REST are respected by a Web API then it can be called ",(0,i.jsx)(n.strong,{children:"RESTful API"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Do you prefer a video?",type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://youtu.be/lsMQRaeKNDk",children:"Here"})," you can find an interesting video about REST APIs."]})}),"\n",(0,i.jsx)(n.p,{children:"REST consists of six guiding principles, you can find a description below."}),"\n",(0,i.jsx)(n.admonition,{title:"This is a theoretical description of REST",type:"warning",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"TSE in Cloud API"})," ",(0,i.jsx)(n.em,{children:"loosely"})," applies the principles described on this page."]})}),"\n",(0,i.jsxs)(n.h2,{id:"one-uniform-interface",children:["1\ufe0f\u20e3","\xa0 Uniform Interface"]}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.strong,{children:"Uniform Interface"})," helps simplify and decouple the system architecture."]}),"\n",(0,i.jsx)(n.p,{children:"The following constraints make it possible to achieve a uniform REST interface:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Identification of resources"}),": practically, it means that URIs must be used to uniquely identify uniform ",(0,i.jsx)(n.em,{children:"resources"}),' (see below for further information). "Uniform resources" means that the resources interfaces must be standardized and decoupled from the server\'s implementation of the resource itself (for example using JSON for their representation, while the resource is stored in a database).']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Manipulation of resources through representation"}),": ",(0,i.jsx)(n.em,{children:"HTTP verbs"})," are used to create, update and delete resources. Also, if a client knows the representation of a resource it possesses all the information needed to manipulate the resource."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Self-descriptive messaged"}),": Each resource representation should carry enough information to describe how to process the message (for example, using ",(0,i.jsx)(n.em,{children:"Media-Type"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hypermedia as the engine of application state (HATEOAS)"}),": The client should be aware only of the initial URI for the REST application, and it should be able to discover all the other available resources using the URIs provided by the application itself. For example, a resource should contain links to correlated resources."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"two-client-server",children:["2\ufe0f\u20e3","\xa0 Client-server"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"client-server design pattern"})," enforces the principle of ",(0,i.jsx)(n.strong,{children:"separation of concerns"}),": separating the user interface concerns from the data storage concerns.\nThis principle improves the portability of the interface across multiple platforms and the scalability by simplifying the server components."]}),"\n",(0,i.jsxs)(n.h2,{id:"three-stateless",children:["3\ufe0f\u20e3","\xa0 Stateless"]}),"\n",(0,i.jsxs)(n.p,{children:["The communication must be ",(0,i.jsx)(n.strong,{children:"stateless"}),": each request from the client must contain all of the information necessary to understand and complete the request, and the session is stored completely on the client."]}),"\n",(0,i.jsxs)(n.h2,{id:"four-cacheable",children:["4\ufe0f\u20e3","\xa0 Cacheable"]}),"\n",(0,i.jsxs)(n.p,{children:["A response should implicitly or explicitly label itself as ",(0,i.jsx)(n.strong,{children:"cacheable"})," or ",(0,i.jsx)(n.strong,{children:"non-cacheable"}),". If a response is cacheable, the client has the right to reuse it later for equivalent requests."]}),"\n",(0,i.jsxs)(n.h2,{id:"five-layered-system",children:["5\ufe0f\u20e3","\xa0 Layered System"]}),"\n",(0,i.jsx)(n.p,{children:"An architecture can be composed of hierarchical layers by constraining component behavior. It means that each component cannot see beyond the immediate layer they are interacting with; also, it makes it possible to interact with a system using its standardized interfaces without knowing its actual implementation (for example it could be a legacy application)."}),"\n",(0,i.jsxs)(n.h2,{id:"six-code-on-demand-optional",children:["6\ufe0f\u20e3","\xa0 Code-on-demand (optional)"]}),"\n",(0,i.jsx)(n.p,{children:"The client could extend its functionality by downloading code provided by the server in the form of applets or scripts. This makes it possible to reduce the client complexity: some features will not be implemented by the client itself but provided by the server, while the client will just have to execute the code.\nAt the same time, this makes it possible for the server to delegate some of the processing efforts to the client."}),"\n",(0,i.jsxs)(n.h2,{id:"briefcase-resources",children:["\ud83d\udcbc","\xa0 Resources"]}),"\n",(0,i.jsxs)(n.p,{children:["Any information that we can name can be a ",(0,i.jsx)(n.strong,{children:"resource"}),". For example, a REST resource can be a document or image, a temporal service, a collection of other resources, or a non-virtual object (e.g., a person)."]}),"\n",(0,i.jsxs)(n.p,{children:["The state of the resource, at any particular time, is known as the ",(0,i.jsx)(n.strong,{children:"resource representation"}),". It consists of:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.strong,{children:"data"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.strong,{children:"metadata"})," describing the data."]}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.strong,{children:"hypermedia link"})," that can help the client in transition to the next desired state."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"page_with_curl-interface-representation",children:["\ud83d\udcc3","\xa0 Interface representation"]}),"\n",(0,i.jsxs)(n.p,{children:["REST doesn't define an ",(0,i.jsx)(n.em,{children:"Interface Definition Language"}),", but many have been proposed during the years.\nThe ",(0,i.jsx)(n.a,{href:"https://www.openapis.org/",children:"Open API Specification"})," (OAS) is the most used, but some others are available like ",(0,i.jsx)(n.a,{href:"https://apiblueprint.org/",children:"API Blueprint"})," or ",(0,i.jsx)(n.a,{href:"https://raml.org/",children:"RAML"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"We use OpenAPI!",type:"info",children:(0,i.jsxs)(n.p,{children:["We described our API using an OpenAPI specification. For more information, check ",(0,i.jsx)(n.a,{href:"/openapi-specification.md",children:"this page"}),"."]})}),"\n",(0,i.jsxs)(n.h2,{id:"books-additional-resources",children:["\ud83d\udcda"," Additional Resources"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://restfulapi.net/",children:"What is REST"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",children:"REST on Wikipedia"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.ibm.com/cloud/learn/api",children:"What is an application programming interface (API)?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://restfulapi.net/http-methods/",children:"HTTP methods on REST APIs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods",children:"HTTP methods"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://restfulapi.net/http-methods/",children:"POST vs PUT"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.openapis.org/",children:"OpenAPI"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://apiblueprint.org/",children:"API Blueprint"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://raml.org/",children:"RAML"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);