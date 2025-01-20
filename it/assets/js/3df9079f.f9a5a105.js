"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[24587],{84568:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"stepbystep/scope","title":"Scope *","description":"Scope Method","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/stepbystep/scope.md","sourceDirName":"stepbystep","slug":"/stepbystep/scope","permalink":"/develop/it/docs/stepbystep/scope","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/stepbystep/scope.md","tags":[{"inline":true,"label":"basics","permalink":"/develop/it/docs/tags/basics"},{"inline":true,"label":"scope","permalink":"/develop/it/docs/tags/scope"}],"version":"1.0.1","lastUpdatedAt":1737112022000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Scope *","slug":"scope","description":"Scope Method","tags":["basics","scope"]},"sidebar":"tutorialSidebar","previous":{"title":"Company ID *","permalink":"/develop/it/docs/stepbystep/company-methods"},"next":{"title":"Quickstarts Overview","permalink":"/develop/it/docs/stepbystep/quickstarts/"}}');var o=i(74848),n=i(28453);const r={sidebar_position:3,title:"Scope *",slug:"scope",description:"Scope Method",tags:["basics","scope"]},c="Ambiente",a={},p=[];function d(e){const t={code:"code",em:"em",h1:"h1",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"ambiente",children:"Ambiente"})}),"\n",(0,o.jsxs)(t.p,{children:["Le applicazioni devono richiedere autorizzazioni solo per le risorse che intendono accedere. I sistemi di autorizzazione supportati si riferiscono a queste autorizzazioni come ",(0,o.jsx)(t.em,{children:"scopes"}),'. Tutti gli endpoint Enterprise WebAPI richiedono uno "scope" per riferirsi correttamente a un ambiente di lavoro specifico definito per il sistema di gestione.']}),"\n",(0,o.jsx)(t.p,{children:'Le applicazioni devono specificare lo "scope" nella richiesta di autenticazione. Il token di accesso emesso conterr\xe0 solo gli "scopes" (attualmente solo uno) che l\u2019applicazione ha richiesto.'}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Scope"}),(0,o.jsx)(t.th,{children:"Descrizione"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Webapi_admin"}),(0,o.jsx)(t.td,{children:'Questo "scope" consente l\u2019accesso alle API di richiesta sugli ambienti disponibili. Permette di ottenere un token anche senza conoscere in anticipo l\u2019ambiente di riferimento, poich\xe9 potrebbe non essere ancora richiesto dall\u2019utente. Tipicamente, questo tipo di token viene utilizzato per query amministrative, come GetAmbienti.'})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"[environment]"}),(0,o.jsx)(t.td,{children:"Rappresenta l\u2019ambiente di lavoro Enterprise a cui le API devono accedere."})]})]})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"GET: http://{server}:{port}/api/v1/{scope}/{module}/{resource}/{id}?user=TeamSa&company=1\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var s=i(96540);const o={},n=s.createContext(o);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);