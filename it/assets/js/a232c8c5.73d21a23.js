"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[94156],{17979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"support/general-knowledge/principle-of-least-privilege","title":"Principle of Least Privilege","description":"Principle of Least Privilege","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/support/general-knowledge/principle-of-least-privilege.md","sourceDirName":"support/general-knowledge","slug":"/support/general-knowledge/principle-of-least-privilege","permalink":"/develop/it/docs/1.0.1/support/general-knowledge/principle-of-least-privilege","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"general knowledge","permalink":"/develop/it/docs/1.0.1/tags/general-knowledge"},{"inline":true,"label":"privileges","permalink":"/develop/it/docs/1.0.1/tags/privileges"},{"inline":true,"label":"beginner","permalink":"/develop/it/docs/1.0.1/tags/beginner"},{"inline":true,"label":"concepts","permalink":"/develop/it/docs/1.0.1/tags/concepts"},{"inline":true,"label":"scopes","permalink":"/develop/it/docs/1.0.1/tags/scopes"}],"version":"current","lastUpdatedAt":1739272330000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Principle of Least Privilege","slug":"principle-of-least-privilege","description":"Principle of Least Privilege","tags":["general knowledge","privileges","beginner","concepts","scopes"]},"sidebar":"tutorialSidebar","previous":{"title":"REST APIs","permalink":"/develop/it/docs/1.0.1/support/general-knowledge/rest-apis"},"next":{"title":"OpenAPI Specification","permalink":"/develop/it/docs/1.0.1/support/general-knowledge/openapi-specification"}}');var s=n(74848),o=n(28453);const r={sidebar_position:3,title:"Principle of Least Privilege",slug:"principle-of-least-privilege",description:"Principle of Least Privilege",tags:["general knowledge","privileges","beginner","concepts","scopes"]},a=void 0,l={},p=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Principle of Least Privilege"})," refers to an information security concept where only the minimum necessary rights should be assigned to a subject that requests access to a resource."]}),"\n",(0,s.jsx)(t.p,{children:"Granting permissions to an access token beyond the scope of the necessary rights of an action can allow an attacker who manages to steal the token to obtain or change information in unwanted ways. Therefore, careful delegation of access rights can limit attackers to manipulate data."}),"\n",(0,s.jsxs)(t.p,{children:["Our APIs adopt the ",(0,s.jsx)(t.a,{href:"/basics/scopes.md",children:"scopes system"}),", the application owner chooses which scopes are needed for the app to run properly and the users will be prompted to allow the requested permissions. Every resource has its own scope that could be either ",(0,s.jsx)(t.strong,{children:"read-only"})," or ",(0,s.jsx)(t.strong,{children:"full write"})," access, make sure to require the least amount of scopes possible for the correct functioning of your app, selecting as few permissions as possible."]}),"\n",(0,s.jsx)(t.admonition,{title:"DO NOT REQUIRE ALL THE SCOPES",type:"danger",children:(0,s.jsx)(t.p,{children:"We know it's easier to just require all the possible scopes in write access and not have to think about what's the lowest configuration of privileges that can be asked to the user, but we kindly ask you not to do that, in most of the cases in fact only 3-4 scopes are actually needed to use an application."})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);