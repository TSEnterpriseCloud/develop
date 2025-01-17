"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[39651],{78508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"stepbystep/quickstarts/postman-collection","title":"Postman Collection *","description":"The official Postman Collection for the TSE in Cloud APIs","source":"@site/versioned_docs/version-1.0.1/stepbystep/quickstarts/postman-collection.md","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/postman-collection","permalink":"/develop/docs/stepbystep/quickstarts/postman-collection","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/stepbystep/quickstarts/postman-collection.md","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/tags/quickstarts"},{"inline":true,"label":"postman","permalink":"/develop/docs/tags/postman"},{"inline":true,"label":"code example","permalink":"/develop/docs/tags/code-example"}],"version":"1.0.1","lastUpdatedAt":1736952817000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Postman Collection *","slug":"postman-collection","description":"The official Postman Collection for the TSE in Cloud APIs","tags":["quickstarts","postman","code example"]},"sidebar":"tutorialSidebar","previous":{"title":"Quickstarts Overview","permalink":"/develop/docs/stepbystep/quickstarts/"},"next":{"title":"C# SDK Quickstart","permalink":"/develop/docs/stepbystep/quickstarts/csharp-sdk-quickstart"}}');var i=n(74848),s=n(28453);const a={sidebar_position:1,title:"Postman Collection *",slug:"postman-collection",description:"The official Postman Collection for the TSE in Cloud APIs",tags:["quickstarts","postman","code example"]},r=void 0,l={},c=[{value:"0 - Install Postman",id:"0---install-postman",level:2},{value:"1 - Import the Collection",id:"1---import-the-collection",level:2},{value:"2 - Authorization",id:"2---authorization",level:2},{value:"3 - Test our APIs!",id:"3---test-our-apis",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["To test our API without writing a single line of code, we used our ",(0,i.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"})," to generate a dedicated ",(0,i.jsx)(t.strong,{children:"Postman Collection"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Postman is an API Platform for building and using APIs. Postman Collections can describe all the methods exposed by an API, making it possible for the user to modify the different request parameters and perform actual calls towards the API, obtaining the HTTP response as a result."}),"\n",(0,i.jsx)(t.h2,{id:"0---install-postman",children:"0 - Install Postman"}),"\n",(0,i.jsxs)(t.p,{children:["To use our collection, we suggest ",(0,i.jsx)(t.a,{href:"https://www.postman.com/downloads/",children:"downloading Postman on your device"}),"; it is available for Windows, Mac, and Linux."]}),"\n",(0,i.jsxs)(t.p,{children:["Next, sign up to Postman: don't worry, to use our collection the ",(0,i.jsx)(t.em,{children:"Free Plan"})," is enough ","\ud83d\ude09"]}),"\n",(0,i.jsx)(t.h2,{id:"1---import-the-collection",children:"1 - Import the Collection"}),"\n",(0,i.jsxs)(t.p,{children:["Run this button to access collection!",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://god.gw.postman.com/run-collection/15599369-0724de0a-4884-4f66-a027-63c63b4925f6?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D15599369-0724de0a-4884-4f66-a027-63c63b4925f6%26entityType%3Dcollection%26workspaceId%3D2548c00e-b5ef-4ce4-bbd9-a4520843142a#?env%5BBeta%5D=W3sia2V5IjoidG9rZW4iLCJ2YWx1ZSI6IiIsInR5cGUiOiJkZWZhdWx0IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb2xsZWN0aW9uTmFtZSIsInZhbHVlIjoiIiwidHlwZSI6ImRlZmF1bHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImNvbGxlY3Rpb25TY2hlbWFVcmwiLCJ2YWx1ZSI6IiIsInR5cGUiOiJkZWZhdWx0IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJhY2Nlc3NLZXkiLCJ2YWx1ZSI6IiIsInR5cGUiOiJkZWZhdWx0IiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJ3b3Jrc3BhY2VJZCIsInZhbHVlIjoiIiwidHlwZSI6ImRlZmF1bHQiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImNvbGxlY3Rpb25JZCIsInZhbHVlIjoiIiwidHlwZSI6ImRlZmF1bHQiLCJlbmFibGVkIjp0cnVlfV0=",children:(0,i.jsx)(t.img,{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"Now you're almost ready to interact with our API!"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.admonition,{title:"Not satisfied by our collection?",type:"info",children:(0,i.jsxs)(t.p,{children:["If you prefer, you can instead use our OpenAPI Specification directly, importing the ",(0,i.jsx)(t.em,{children:"openapi.yaml"})," file using ",(0,i.jsx)(t.a,{href:"https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-api-specifications",children:"this procedure"}),". You just need to be sure to download also the files in the ",(0,i.jsx)(t.em,{children:"models"})," folder, otherwise, the import will fail. Also, you need to select the right parameters to import the collection correctly."]})}),"\n",(0,i.jsx)(t.h2,{id:"2---authorization",children:"2 - Authorization"}),"\n",(0,i.jsxs)(t.p,{children:["Next, to be able to interact with our API you need to be authorized: see the ",(0,i.jsx)(t.a,{href:"/basics/authentication.mdx",children:"Authentication"})," page for further info."]}),"\n",(0,i.jsx)(t.p,{children:"You have two main options to retrieve a valid token:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Manual Authentication"}),": since Postman is mainly used to test and discover our API behavior, this is a great use case for ",(0,i.jsx)(t.a,{href:"/authentication/manual-authentication.mdx",children:"Manual Authentication"}),". Just generate a new token with the required scopes and insert it in Postman!"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"OAuth 2.0 Authorization Code"}),": if you want to test the authentication step, you can try to ",(0,i.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"retrieve the token"})," and insert it in Postman."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Once you retrieved a valid token, you can just insert it as a Bearer token following ",(0,i.jsx)(t.a,{href:"https://learning.postman.com/docs/sending-requests/authorization/#bearer-token",children:"this procedure"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you want, you can also use Postman to ",(0,i.jsx)(t.a,{href:"https://learning.postman.com/docs/sending-requests/authorization/#authorization-code",children:"retrieve your Access Token automatically"})," from its interface.\nTo set it up, click on the collection and select the ",(0,i.jsx)(t.em,{children:"Authorization"})," tab, then compile the ",(0,i.jsx)(t.strong,{children:"Configure New Token"})," form."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"Configure New Token Form",src:n(38462).A+"#gh-light-mode-only",width:"800",height:"1060"}),"\n",(0,i.jsx)(t.img,{alt:"Configure New Token Form",src:n(2068).A+"#gh-dark-mode-only",width:"804",height:"1098"})]}),"\n",(0,i.jsx)(t.p,{children:"The parameters are:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Auth URL"}),": ",(0,i.jsx)(t.a,{href:"https://api-v2.fattureincloud.it/oauth/authorize",children:"https://api-v2.fattureincloud.it/oauth/authorize"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Access Token URL"}),": ",(0,i.jsx)(t.a,{href:"https://api-v2.fattureincloud.it/oauth/token",children:"https://api-v2.fattureincloud.it/oauth/token"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Callback URL"}),": The redirect URL declared for the OAuth2 Application"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["All the other parameters can be found on the ",(0,i.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"3---test-our-apis",children:"3 - Test our APIs!"}),"\n",(0,i.jsxs)(t.p,{children:["You're finally ready to test our API using Postman. Select the method you want to try, compile the request parameters and click the ",(0,i.jsx)(t.strong,{children:"Send"})," button! Have fun!"]}),"\n",(0,i.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"warning",children:(0,i.jsxs)(t.p,{children:["Many of our methods are Company-scoped, which means they require to indicate the ID of the Company we're operating on.",(0,i.jsx)(t.br,{}),"\n","The good news is that you can use Postman to retrieve it! Check the ",(0,i.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info!"]})}),"\n",(0,i.jsx)(t.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.postman.com/",children:"Postman API Platform"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.postman.com/downloads/",children:"Download Postman"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2068:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/postman-dark-91053e9f30593620fce4899fec157f57.png"},38462:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/postman-light-41b0104a5e10520c695cc719485f681c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(96540);const i={},s=o.createContext(i);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);