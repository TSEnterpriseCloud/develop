"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[39651],{78508:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"stepbystep/quickstarts/postman-collection","title":"Postman*","description":"The official Postman Collection for the TSE in Cloud APIs","source":"@site/versioned_docs/version-1.0.1/stepbystep/quickstarts/postman-collection.md","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/postman-collection","permalink":"/develop/docs/stepbystep/quickstarts/postman-collection","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/tags/quickstarts"},{"inline":true,"label":"postman","permalink":"/develop/docs/tags/postman"},{"inline":true,"label":"code example","permalink":"/develop/docs/tags/code-example"}],"version":"1.0.1","lastUpdatedAt":1739273683000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Postman*","slug":"postman-collection","description":"The official Postman Collection for the TSE in Cloud APIs","tags":["quickstarts","postman","code example"]},"sidebar":"tutorialSidebar","previous":{"title":"Quickstarts Overview","permalink":"/develop/docs/stepbystep/quickstarts/"},"next":{"title":"PowerShell","permalink":"/develop/docs/stepbystep/quickstarts/powershell-collection"}}');var o=i(74848),s=i(28453);const a={sidebar_position:1,title:"Postman*",slug:"postman-collection",description:"The official Postman Collection for the TSE in Cloud APIs",tags:["quickstarts","postman","code example"]},l=void 0,r={},c=[{value:"0 - Install Postman",id:"0---install-postman",level:2},{value:"1 - Import the Collection",id:"1---import-the-collection",level:2},{value:"2 - Copy Collection with a fork",id:"2---copy-collection-with-a-fork",level:2},{value:"3 - Authorization",id:"3---authorization",level:2},{value:"4 - Test our APIs!",id:"4---test-our-apis",level:2},{value:"5 - Update Collection",id:"5---update-collection",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["To test our API without writing a single line of code, we used our ",(0,o.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"})," to generate a dedicated ",(0,o.jsx)(t.strong,{children:"Postman Collection"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Postman is an API Platform for building and using APIs. Postman Collections can describe all the methods exposed by an API, making it possible for the user to modify the different request parameters and perform actual calls towards the API, obtaining the HTTP response as a result."}),"\n",(0,o.jsx)(t.h2,{id:"0---install-postman",children:"0 - Install Postman"}),"\n",(0,o.jsxs)(t.p,{children:["To use our collection, we suggest ",(0,o.jsx)(t.a,{href:"https://www.postman.com/downloads/",children:"downloading Postman on your device"}),"; it is available for Windows, Mac, and Linux."]}),"\n",(0,o.jsxs)(t.p,{children:["Next, sign up to Postman: don't worry, to use our collection the ",(0,o.jsx)(t.em,{children:"Free Plan"})," is enough ","\ud83d\ude09"]}),"\n",(0,o.jsx)(t.h2,{id:"1---import-the-collection",children:"1 - Import the Collection"}),"\n",(0,o.jsxs)(t.p,{children:["Run this button to access collection!",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.a,{href:"https://app.getpostman.com/run-collection/15599369-d3d6d21f-96d9-47a1-93ed-498234f89aaf?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D15599369-d3d6d21f-96d9-47a1-93ed-498234f89aaf%26entityType%3Dcollection%26workspaceId%3D2548c00e-b5ef-4ce4-bbd9-a4520843142a#?env%5BProduction%5D=W3sia2V5IjoidG9rZW4iLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjB9LHsia2V5IjoiY29sbGVjdGlvbk5hbWUiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjF9LHsia2V5IjoiY29sbGVjdGlvblNjaGVtYVVybCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiIiLCJjb21wbGV0ZVNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6Mn0seyJrZXkiOiJhY2Nlc3NLZXkiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjN9LHsia2V5Ijoid29ya3NwYWNlSWQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwiY29tcGxldGVTZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjR9LHsia2V5IjoiY29sbGVjdGlvbklkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsImNvbXBsZXRlU2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4Ijo1fV0=",children:(0,o.jsx)(t.img,{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"2---copy-collection-with-a-fork",children:"2 - Copy Collection with a fork"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Fork Master Collection",src:i(45314).A+"",width:"666",height:"625"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"Now you're almost ready to interact with our API!"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.admonition,{title:"Not satisfied by our collection?",type:"info",children:(0,o.jsxs)(t.p,{children:["If you prefer, you can instead use our OpenAPI Specification directly, importing the .yaml files using ",(0,o.jsx)(t.a,{href:"https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#importing-api-specifications",children:"this procedure"}),". You just need to be sure to download also the files in the ",(0,o.jsx)(t.em,{children:"models"})," folder, otherwise, the import will fail. Also, you need to select the right parameters to import the collection correctly."]})}),"\n",(0,o.jsx)(t.h2,{id:"3---authorization",children:"3 - Authorization"}),"\n",(0,o.jsxs)(t.p,{children:["Next, to be able to interact with our API you need to be authorized: see the ",(0,o.jsx)(t.a,{href:"/basics/authentication.mdx",children:"Authentication"})," page for further info."]}),"\n",(0,o.jsx)(t.p,{children:"You have two main options to retrieve a valid token:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Manual Authentication"}),": since Postman is mainly used to test and discover our API behavior, this is a great use case for ",(0,o.jsx)(t.a,{href:"/authentication/manual-authentication.mdx",children:"Manual Authentication"}),". Just generate a new token with the required scopes and insert it in Postman!"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"OAuth 2.0 Authorization Code"}),": if you want to test the authentication step, you can try to ",(0,o.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"retrieve the token"})," and insert it in Postman."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Once you retrieved a valid token, you can just insert it as a Bearer token following ",(0,o.jsx)(t.a,{href:"https://learning.postman.com/docs/sending-requests/authorization/#bearer-token",children:"this procedure"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want, you can also use Postman to ",(0,o.jsx)(t.a,{href:"https://learning.postman.com/docs/sending-requests/authorization/#authorization-code",children:"retrieve your Access Token automatically"})," from its interface.\nTo set it up, click on the collection and select the ",(0,o.jsx)(t.em,{children:"Authorization"})," tab, then compile the ",(0,o.jsx)(t.strong,{children:"Configure New Token"})," form."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"Configure New Token Form",src:i(38462).A+"#gh-light-mode-only",width:"800",height:"1060"}),"\n",(0,o.jsx)(t.img,{alt:"Configure New Token Form",src:i(2068).A+"#gh-dark-mode-only",width:"804",height:"1098"})]}),"\n",(0,o.jsx)(t.p,{children:"The parameters are:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"grant_type"}),": token"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"username"}),": param receved"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"token"}),": param receved"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Access-Control-Allow-Origin"}),": ",(0,o.jsx)(t.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"password"}),": null"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"scope"}),": param receved"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"web_base_url"}),": param receved"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"4---test-our-apis",children:"4 - Test our APIs!"}),"\n",(0,o.jsxs)(t.p,{children:["You're finally ready to test our API using Postman. Select the method you want to try, compile the request parameters and click the ",(0,o.jsx)(t.strong,{children:"Send"})," button! Have fun!"]}),"\n",(0,o.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"warning",children:(0,o.jsxs)(t.p,{children:["Many of our methods are Company-scoped, which means they require to indicate the ID of the Company we're operating on.",(0,o.jsx)(t.br,{}),"\n","The good news is that you can use Postman to retrieve it! Check the ",(0,o.jsx)(t.a,{href:"/develop/docs/stepbystep/company-methods",children:"Company-scoped Methods"})," page for more info!"]})}),"\n",(0,o.jsx)(t.h2,{id:"5---update-collection",children:"5 - Update Collection"}),"\n",(0,o.jsxs)(t.p,{children:["In case of changes to the published collection, appropriate notifications are sent mail.\n",(0,o.jsx)(t.img,{alt:"Configure New Token Form",src:i(45879).A+"",width:"752",height:"286"})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"You can update your collection to the latest version by making a Pull request from Postman."}),"\n",(0,o.jsx)(t.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.postman.com/",children:"Postman API Platform"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.postman.com/downloads/",children:"Download Postman"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},45314:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/fork-postman-1572ad6f92467ae724a96a3eca2df6a4.png"},2068:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/postman-dark-91053e9f30593620fce4899fec157f57.png"},38462:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/postman-light-41b0104a5e10520c695cc719485f681c.png"},45879:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/postman-notify-413d5d392d920f4528be742fdce100fa.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(96540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);