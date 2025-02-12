"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[67969],{19954:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"support/general-knowledge/rest-apis","title":"Rest APIs","description":"Do I need some REST?","source":"@site/versioned_docs/version-1.0.1/support/general-knowledge/rest-apis.md","sourceDirName":"support/general-knowledge","slug":"/support/general-knowledge/rest-apis","permalink":"/develop/docs/support/general-knowledge/rest-apis","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"general knowledge","permalink":"/develop/docs/tags/general-knowledge"},{"inline":true,"label":"beginner","permalink":"/develop/docs/tags/beginner"},{"inline":true,"label":"concepts","permalink":"/develop/docs/tags/concepts"},{"inline":true,"label":"rest","permalink":"/develop/docs/tags/rest"}],"version":"1.0.1","lastUpdatedAt":1739273354000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Rest APIs","slug":"rest-apis","description":"Do I need some REST?","tags":["general knowledge","beginner","concepts","rest"]},"sidebar":"tutorialSidebar","previous":{"title":"OAuth 2.0","permalink":"/develop/docs/support/general-knowledge/oauth2"},"next":{"title":"Principle of Least Privilege","permalink":"/develop/docs/support/general-knowledge/principle-of-least-privilege"}}');var t=n(74848),r=n(28453);const a={sidebar_position:2,title:"Rest APIs",slug:"rest-apis",description:"Do I need some REST?",tags:["general knowledge","beginner","concepts","rest"]},o=void 0,l={},c=[{value:'<i class="fas fa-barcode"></i> Uniform Interface',id:"-uniform-interface",level:2},{value:'<i class="fas fa-server"></i> Client-server',id:"-client-server",level:2},{value:'<i class="fas fa-chart-bar"></i> Stateless',id:"-stateless",level:2},{value:'<i class="fas fa-broom"></i> Cacheable',id:"-cacheable",level:2},{value:'<i class="fas fa-wrench"></i> Layered System',id:"-layered-system",level:2},{value:'<i class="fas fa-code"></i> Code-on-demand (optional)',id:"-code-on-demand-optional",level:2},{value:'<i class="fas fa-briefcase"></i> Resources',id:"-resources",level:2},{value:'<i class="fas fa-ethernet"></i> Interface representation',id:"-interface-representation",level:2},{value:'<i class="fas fa-link"></i>Additional Resources',id:"additional-resources",level:2}];function d(e){const s={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["An ",(0,t.jsx)(s.em,{children:"Application Programming Interface"}),", or ",(0,t.jsx)(s.strong,{children:"API"}),", is a type of software interface, offering a service to other pieces of software. Developing a public API means making it possible for external systems to integrate the exposed services into their own, with advantages for both sides."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"REST"})," stands for ",(0,t.jsx)(s.em,{children:"REpresentational State Transfer"})," and is an architectural style; when the principles of REST are respected by a Web API then it can be called ",(0,t.jsx)(s.strong,{children:"RESTful API"}),"."]}),"\n",(0,t.jsx)(s.admonition,{title:"Do you prefer a video?",type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://youtu.be/lsMQRaeKNDk",children:"Here"})," you can find an interesting video about REST APIs."]})}),"\n",(0,t.jsx)(s.p,{children:"REST consists of six guiding principles, you can find a description below."}),"\n",(0,t.jsx)(s.admonition,{title:"This is a theoretical description of REST",type:"warning",children:(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"TSE in Cloud API"})," ",(0,t.jsx)(s.em,{children:"loosely"})," applies the principles described on this page."]})}),"\n",(0,t.jsxs)(s.h2,{id:"-uniform-interface",children:[(0,t.jsx)("i",{class:"fas fa-barcode"})," Uniform Interface"]}),"\n",(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.strong,{children:"Uniform Interface"})," helps simplify and decouple the system architecture."]}),"\n",(0,t.jsx)(s.p,{children:"The following constraints make it possible to achieve a uniform REST interface:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Identification of resources"}),": practically, it means that URIs must be used to uniquely identify uniform ",(0,t.jsx)(s.em,{children:"resources"}),' (see below for further information). "Uniform resources" means that the resources interfaces must be standardized and decoupled from the server\'s implementation of the resource itself (for example using JSON for their representation, while the resource is stored in a database).']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Manipulation of resources through representation"}),": ",(0,t.jsx)(s.em,{children:"HTTP verbs"})," are used to create, update and delete resources. Also, if a client knows the representation of a resource it possesses all the information needed to manipulate the resource."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Self-descriptive messaged"}),": Each resource representation should carry enough information to describe how to process the message (for example, using ",(0,t.jsx)(s.em,{children:"Media-Type"}),")."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Hypermedia as the engine of application state (HATEOAS)"}),": The client should be aware only of the initial URI for the REST application, and it should be able to discover all the other available resources using the URIs provided by the application itself. For example, a resource should contain links to correlated resources."]}),"\n"]}),"\n",(0,t.jsxs)(s.h2,{id:"-client-server",children:[(0,t.jsx)("i",{class:"fas fa-server"})," Client-server"]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"client-server design pattern"})," enforces the principle of ",(0,t.jsx)(s.strong,{children:"separation of concerns"}),": separating the user interface concerns from the data storage concerns.\nThis principle improves the portability of the interface across multiple platforms and the scalability by simplifying the server components."]}),"\n",(0,t.jsxs)(s.h2,{id:"-stateless",children:[(0,t.jsx)("i",{class:"fas fa-chart-bar"})," Stateless"]}),"\n",(0,t.jsxs)(s.p,{children:["The communication must be ",(0,t.jsx)(s.strong,{children:"stateless"}),": each request from the client must contain all of the information necessary to understand and complete the request, and the session is stored completely on the client."]}),"\n",(0,t.jsxs)(s.h2,{id:"-cacheable",children:[(0,t.jsx)("i",{class:"fas fa-broom"})," Cacheable"]}),"\n",(0,t.jsxs)(s.p,{children:["A response should implicitly or explicitly label itself as ",(0,t.jsx)(s.strong,{children:"cacheable"})," or ",(0,t.jsx)(s.strong,{children:"non-cacheable"}),". If a response is cacheable, the client has the right to reuse it later for equivalent requests."]}),"\n",(0,t.jsxs)(s.h2,{id:"-layered-system",children:[(0,t.jsx)("i",{class:"fas fa-wrench"})," Layered System"]}),"\n",(0,t.jsx)(s.p,{children:"An architecture can be composed of hierarchical layers by constraining component behavior. It means that each component cannot see beyond the immediate layer they are interacting with; also, it makes it possible to interact with a system using its standardized interfaces without knowing its actual implementation (for example it could be a legacy application)."}),"\n",(0,t.jsxs)(s.h2,{id:"-code-on-demand-optional",children:[(0,t.jsx)("i",{class:"fas fa-code"})," Code-on-demand (optional)"]}),"\n",(0,t.jsx)(s.p,{children:"The client could extend its functionality by downloading code provided by the server in the form of applets or scripts. This makes it possible to reduce the client complexity: some features will not be implemented by the client itself but provided by the server, while the client will just have to execute the code.\nAt the same time, this makes it possible for the server to delegate some of the processing efforts to the client."}),"\n",(0,t.jsxs)(s.h2,{id:"-resources",children:[(0,t.jsx)("i",{class:"fas fa-briefcase"})," Resources"]}),"\n",(0,t.jsxs)(s.p,{children:["Any information that we can name can be a ",(0,t.jsx)(s.strong,{children:"resource"}),". For example, a REST resource can be a document or image, a temporal service, a collection of other resources, or a non-virtual object (e.g., a person)."]}),"\n",(0,t.jsxs)(s.p,{children:["The state of the resource, at any particular time, is known as the ",(0,t.jsx)(s.strong,{children:"resource representation"}),". It consists of:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["the ",(0,t.jsx)(s.strong,{children:"data"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["the ",(0,t.jsx)(s.strong,{children:"metadata"})," describing the data."]}),"\n",(0,t.jsxs)(s.li,{children:["the ",(0,t.jsx)(s.strong,{children:"hypermedia link"})," that can help the client in transition to the next desired state."]}),"\n"]}),"\n",(0,t.jsxs)(s.h2,{id:"-interface-representation",children:[(0,t.jsx)("i",{class:"fas fa-ethernet"})," Interface representation"]}),"\n",(0,t.jsxs)(s.p,{children:["REST doesn't define an ",(0,t.jsx)(s.em,{children:"Interface Definition Language"}),", but many have been proposed during the years.\nThe ",(0,t.jsx)(s.a,{href:"https://www.openapis.org/",children:"Open API Specification"})," (OAS) is the most used, but some others are available like ",(0,t.jsx)(s.a,{href:"https://apiblueprint.org/",children:"API Blueprint"})," or ",(0,t.jsx)(s.a,{href:"https://raml.org/",children:"RAML"}),"."]}),"\n",(0,t.jsx)(s.admonition,{title:"We use OpenAPI!",type:"info",children:(0,t.jsxs)(s.p,{children:["We described our API using an OpenAPI specification. For more information, check ",(0,t.jsx)(s.a,{href:"/develop/docs/support/general-knowledge/openapi-specification",children:"this page"}),"."]})}),"\n",(0,t.jsxs)(s.h2,{id:"additional-resources",children:[(0,t.jsx)("i",{class:"fas fa-link"}),"Additional Resources"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://restfulapi.net/",children:"What is REST"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",children:"REST on Wikipedia"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.ibm.com/cloud/learn/api",children:"What is an application programming interface (API)?"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://restfulapi.net/http-methods/",children:"HTTP methods on REST APIs"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods",children:"HTTP methods"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://restfulapi.net/http-methods/",children:"POST vs PUT"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://www.openapis.org/",children:"OpenAPI"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://apiblueprint.org/",children:"API Blueprint"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://raml.org/",children:"RAML"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var i=n(96540);const t={},r=i.createContext(t);function a(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);