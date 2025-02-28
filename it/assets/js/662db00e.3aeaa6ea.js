"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[27558],{13936:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"basics/crud/delete","title":"[D]elete *","description":"Operazioni di cancellazione","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/basics/crud/delete.md","sourceDirName":"basics/crud","slug":"/basics/crud/delete","permalink":"/it/docs/basics/crud/delete","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"status","permalink":"/it/docs/tags/status"},{"inline":true,"label":"http","permalink":"/it/docs/tags/http"},{"inline":true,"label":"code","permalink":"/it/docs/tags/code"},{"inline":true,"label":"support","permalink":"/it/docs/tags/support"},{"inline":true,"label":"200","permalink":"/it/docs/tags/200"},{"inline":true,"label":"400","permalink":"/it/docs/tags/400"},{"inline":true,"label":"404","permalink":"/it/docs/tags/404"},{"inline":true,"label":"409","permalink":"/it/docs/tags/409"}],"version":"1.0.1","lastUpdatedAt":1740737873000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"[D]elete *","slug":"delete","description":"Operazioni di cancellazione","tags":["status","http","code","support","200","400","404","409"]},"sidebar":"tutorialSidebar","previous":{"title":"[U]pdate *","permalink":"/it/docs/basics/crud/update"},"next":{"title":"Codici di Stato *","permalink":"/it/docs/basics/status-code"}}');var n=i(74848),o=i(28453);const l={sidebar_position:4,title:"[D]elete *",slug:"delete",description:"Operazioni di cancellazione",tags:["status","http","code","support",200,400,404,409]},a="Delete",r={},d=[{value:"Parametri",id:"parametri",level:3},{value:"Codici risposta",id:"codici-risposta",level:3}];function c(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"delete",children:"Delete"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"DELETE"}),": ",(0,n.jsx)(t.code,{children:"webapi_base_url/v1/{environment}/{module}/{resource}/{id}"})]}),"\n",(0,n.jsx)(t.h3,{id:"parametri",children:"Parametri"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"id"}),": l'oggetto di tipo ",(0,n.jsx)(t.code,{children:"{resource}DTO"})," da eliminare"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"codici-risposta",children:"Codici risposta"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"200"}),": l'oggetto \xe8 stato eliminato con successso"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"400"}),": l'oggetto non \xe8 stato eliminato, il contenuto della risposta contiene i messaggi di validazione prodotti"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"404"}),": l'oggetto non \xe8 stato trovato"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"409"}),": l'oggetto non \xe8 stato eliminiato a causa di logiche di business non soddisfatte; il contenuto della risposta contiene i messaggi di validazione prodotti"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var s=i(96540);const n={},o=s.createContext(n);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);