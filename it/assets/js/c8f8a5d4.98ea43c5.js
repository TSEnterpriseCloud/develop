"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[68646],{6896:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"support/general-knowledge/principle-of-least-privilege","title":"Principle of Least Privilege","description":"Principle of Least Privilege","source":"@site/versioned_docs/version-1.0.1/support/general-knowledge/principle-of-least-privilege.md","sourceDirName":"support/general-knowledge","slug":"/support/general-knowledge/principle-of-least-privilege","permalink":"/develop/it/docs/support/general-knowledge/principle-of-least-privilege","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/support/general-knowledge/principle-of-least-privilege.md","tags":[{"inline":true,"label":"general knowledge","permalink":"/develop/it/docs/tags/general-knowledge"},{"inline":true,"label":"privileges","permalink":"/develop/it/docs/tags/privileges"},{"inline":true,"label":"beginner","permalink":"/develop/it/docs/tags/beginner"},{"inline":true,"label":"concepts","permalink":"/develop/it/docs/tags/concepts"},{"inline":true,"label":"scopes","permalink":"/develop/it/docs/tags/scopes"}],"version":"1.0.1","lastUpdatedAt":1734978152000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Principle of Least Privilege","slug":"principle-of-least-privilege","description":"Principle of Least Privilege","tags":["general knowledge","privileges","beginner","concepts","scopes"]},"sidebar":"tutorialSidebar","previous":{"title":"REST APIs","permalink":"/develop/it/docs/support/general-knowledge/rest-apis"},"next":{"title":"OpenAPI Specification","permalink":"/develop/it/docs/support/general-knowledge/openapi-specification"}}');var n=s(74848),o=s(28453);const r={sidebar_position:3,title:"Principle of Least Privilege",slug:"principle-of-least-privilege",description:"Principle of Least Privilege",tags:["general knowledge","privileges","beginner","concepts","scopes"]},a=void 0,l={},p=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Principle of Least Privilege"})," refers to an information security concept where only the minimum necessary rights should be assigned to a subject that requests access to a resource."]}),"\n",(0,n.jsx)(t.p,{children:"Granting permissions to an access token beyond the scope of the necessary rights of an action can allow an attacker who manages to steal the token to obtain or change information in unwanted ways. Therefore, careful delegation of access rights can limit attackers to manipulate data."}),"\n",(0,n.jsxs)(t.p,{children:["Our APIs adopt the ",(0,n.jsx)(t.a,{href:"/basics/scopes.md",children:"scopes system"}),", the application owner chooses which scopes are needed for the app to run properly and the users will be prompted to allow the requested permissions. Every resource has its own scope that could be either ",(0,n.jsx)(t.strong,{children:"read-only"})," or ",(0,n.jsx)(t.strong,{children:"full write"})," access, make sure to require the least amount of scopes possible for the correct functioning of your app, selecting as few permissions as possible."]}),"\n",(0,n.jsx)(t.admonition,{title:"DO NOT REQUIRE ALL THE SCOPES",type:"danger",children:(0,n.jsx)(t.p,{children:"We know it's easier to just require all the possible scopes in write access and not have to think about what's the lowest configuration of privileges that can be asked to the user, but we kindly ask you not to do that, in most of the cases in fact only 3-4 scopes are actually needed to use an application."})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(96540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);