"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[25997],{74942:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"stepbystep/scope","title":"Scope *","description":"Scope Method","source":"@site/versioned_docs/version-1.0.1/stepbystep/scope.md","sourceDirName":"stepbystep","slug":"/stepbystep/scope","permalink":"/develop/docs/stepbystep/scope","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"basics","permalink":"/develop/docs/tags/basics"},{"inline":true,"label":"scope","permalink":"/develop/docs/tags/scope"}],"version":"1.0.1","lastUpdatedAt":1738925084000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Scope *","slug":"scope","description":"Scope Method","tags":["basics","scope"]},"sidebar":"tutorialSidebar","previous":{"title":"Company methods *","permalink":"/develop/docs/stepbystep/company-methods"},"next":{"title":"Quickstarts Overview","permalink":"/develop/docs/stepbystep/quickstarts/"}}');var o=s(74848),i=s(28453);const r={sidebar_position:3,title:"Scope *",slug:"scope",description:"Scope Method",tags:["basics","scope"]},c="Scope",a={},p=[];function d(e){const t={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"scope",children:"Scope"})}),"\n",(0,o.jsxs)(t.p,{children:["Applications must request permissions only for the resources they intend to access. The supported authorization systems refer to these permissions as ",(0,o.jsx)(t.em,{children:"scopes"}),". All Enterprise WebAPI endpoints require a scope to correctly refer to a specific work environment defined for the management system."]}),"\n",(0,o.jsx)(t.p,{children:"Applications must specify the scope in the authentication request. The issued access token will contain only the scopes (currently only one) that the application has requested."}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Scope"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Webapi_admin"}),(0,o.jsx)(t.td,{children:"This scope allows access to request APIs on available environments. It allows obtaining a token even without knowing the reference environment in advance, as it may not yet be requested from the user. Typically, this type of token is used for administrative queries, such as GetAmbienti."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"[environment]"}),(0,o.jsx)(t.td,{children:"Represents the Enterprise work environment that the APIs need to access."})]})]})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"GET: http://{server}:{port}/api/v1/{scope}/{module}/{resource}/{id}?user=TeamSa&company=1\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(96540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);