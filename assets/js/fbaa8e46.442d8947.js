"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[37198],{5452:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"basics/authentication","title":"Authentication","description":"The supported authentication methods","source":"@site/docs/basics/authentication.md","sourceDirName":"basics","slug":"/basics/authentication","permalink":"/docs/1.0.1/basics/authentication","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"basics","permalink":"/docs/1.0.1/tags/basics"},{"inline":true,"label":"authentication","permalink":"/docs/1.0.1/tags/authentication"},{"inline":true,"label":"oauth","permalink":"/docs/1.0.1/tags/oauth"},{"inline":true,"label":"unauthorized","permalink":"/docs/1.0.1/tags/unauthorized"},{"inline":true,"label":"401","permalink":"/docs/1.0.1/tags/401"}],"version":"current","lastUpdatedAt":1740730985000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Authentication","slug":"authentication","description":"The supported authentication methods","tags":["basics","authentication","oauth","unauthorized","401"]},"sidebar":"tutorialSidebar","previous":{"title":"Operazioni base","permalink":"/docs/1.0.1/basics/"},"next":{"title":"[C]reate","permalink":"/docs/1.0.1/basics/crud/status-code"}}');var s=n(74848),a=n(28453);const o={sidebar_position:1,title:"Authentication",slug:"authentication",description:"The supported authentication methods",tags:["basics","authentication","oauth","unauthorized",401]},r=void 0,c={},l=[{value:"<IIcon></IIcon> How i can get authentication ?",id:"-how-i-can-get-authentication-",level:3},{value:"JWT Token",id:"jwt-token",level:3},{value:"GET/POST",id:"getpost",level:5},{value:"Scenario Utente",id:"scenario-utente",level:4},{value:"Scope",id:"scope",level:2},{value:"\ud83d\udcda\xa0 Additional resources",id:"books-additional-resources",level:2},{value:"Company",id:"company",level:2}];function d(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components},{IIcon:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IIcon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.p,{children:["To make requests towards the ",(0,s.jsx)(i.strong,{children:"TSE in Cloud API"})," it is necessary to use one of the supported authentication methods.  In the next paragraph, you'll find a flowchart that will guide you in your choice."]}),"\n",(0,s.jsx)(i.p,{children:"The currently supported methods are with access token"}),"\n",(0,s.jsxs)(i.h3,{id:"-how-i-can-get-authentication-",children:[(0,s.jsx)(n,{icon:"mdi:cloud-access-outline"})," How i can get authentication ?"]}),"\n",(0,s.jsx)(i.p,{children:"This section documents the supported authentication models. M2M Scenario Many times a secure and authorized communication channel is needed between different parts of a system such as two back-end services of different applications. The key aspect of these communications lies in the fact that the element for establishing trust in the system is the client. In TSE a client is assigned a technical API Key which is used during the login phase to recognize it and enable it to use the services."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://ts-enterprise-dev.ts-paas.com/uploads/images/gallery/2022-06/image-1655924656661.png",children:(0,s.jsx)(i.img,{src:"https://ts-enterprise-dev.ts-paas.com/uploads/images/gallery/2022-06/scaled-1680-/image-1655924656661.png",alt:"image-1655924656661.png"})})}),"\n",(0,s.jsx)(i.p,{children:"La figura illustra il flusso di autenticazione (Login) e di consumo dei servizi (GET/POST)."}),"\n",(0,s.jsx)(i.h3,{id:"jwt-token",children:"JWT Token"}),"\n",(0,s.jsx)(i.p,{children:"Durante questa fase il client utilizza l'API Key per ottenere un token JWT che verr\xe0 utilizzato nelle successive chiamate per accedere le risorse applicative."}),"\n",(0,s.jsx)(i.p,{children:"L\u2019applicativo deve eseguire la richiesta del token, in POST con i parametri in x-www-form-urlencoded, ad uno specifico path"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"webapi_base_url/auth/token"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Specificando nel body"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"Form Parameter"})}),(0,s.jsx)(i.th,{children:(0,s.jsx)(i.strong,{children:"Description"})})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["grant_type ",(0,s.jsx)(i.em,{children:"required"})]}),(0,s.jsxs)(i.td,{children:["\u201ctoken\u201d ",(0,s.jsx)(i.strong,{children:"Type:"})," string"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["username ",(0,s.jsx)(i.em,{children:"required"})]}),(0,s.jsxs)(i.td,{children:["admin_<cid> ",(0,s.jsx)(i.strong,{children:"Type:"})," string"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["token ",(0,s.jsx)(i.em,{children:"required"})]}),(0,s.jsxs)(i.td,{children:["Bearer ",(0,s.jsx)(i.em,{children:"API Key"})," ",(0,s.jsx)(i.strong,{children:"Type:"})," string"]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsxs)(i.td,{children:["scope ",(0,s.jsx)(i.em,{children:"required"})]}),(0,s.jsxs)(i.td,{children:["Indica il contesto di accesso per il quale si richiede autorizzazione. Possibili valori sono:  webapi_admin - usato ad es. per recuperare lista ambienti  <ambiente> - uno dei qualsiasi ambienti di lavoro registrati ",(0,s.jsx)(i.strong,{children:"Type"}),": string"]})]})]})]}),"\n",(0,s.jsx)(i.p,{children:"In risposta alla chiamata si ottiene un authorization code costituito da un token jwt della durata di un giorno."}),"\n",(0,s.jsxs)(i.admonition,{type:"danger",children:[(0,s.jsx)(i.mdxAdmonitionTitle,{}),(0,s.jsxs)(i.p,{children:["E' importante che nella sezione token l'API Key sia preceduta dalla parola ",(0,s.jsx)(i.em,{children:(0,s.jsx)(i.strong,{children:"Bearer"})})," ad esempio"]}),(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3ZWJhcGlhZG1pbiIsIndlYmFwaTphdXRoZW50aWNhdGlvbjpzY29wZSI6Imh1Yl9hZG1pbix0c2UxMHdlYmFwaXRlc3QyX2FseXRzZTEwd2ViYXBpdGVzdDIiLCJqdGkiOiIwMjdkYmRlMC03OTg5LTQ0MTItODliOC0yM2FkYTVjNTdjZTIiLCJpYXQiOjE2NTg3NDA4NzcsImlzcyI6IkFseUNFU3J2MlNydklzc3VlciIsImF1ZCI6IkFseUNFU3J2MlNydkF1ZGllbmNlIn0.p1oEy4LJyFuTKIjJynYw4zQQQXIYPO3WfLe8VTNh7XA\n"})})]}),"\n",(0,s.jsx)(i.h5,{id:"getpost",children:"GET/POST"}),"\n",(0,s.jsx)(i.p,{children:"Le chiamate ai servizi applicativi saranno autenticate con un Bearer token costituito da token jwt ottenuto con la chiamata di Login."}),"\n",(0,s.jsx)(i.h4,{id:"scenario-utente",children:"Scenario Utente"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"Disponibile dai prossimi rilasci"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Nel caso in cui il client sia integrato con il Teamsystem ID sar\xe0 possibile utilizzare l'access_token assegnato all'utente per innescare il flusso di login."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.a,{href:"https://ts-enterprise-dev.ts-paas.com/uploads/images/gallery/2022-06/image-1655993531202.png",children:(0,s.jsx)(i.img,{src:"https://ts-enterprise-dev.ts-paas.com/uploads/images/gallery/2022-06/scaled-1680-/image-1655993531202.png",alt:"image-1655993531202.png"})})}),"\n",(0,s.jsx)(i.h2,{id:"scope",children:"Scope"}),"\n",(0,s.jsxs)(i.p,{children:["Le applicazioni devono richiedere i permessi esclusivamente per le risorse a cui intendono accedere. I sistemi di autorizzazione supportati, riferiscono a tali permessi come ",(0,s.jsx)(i.em,{children:"scopes"}),". Tutti gli endpoints di Enterprise WebAPI richiedono uno scope, al fine di riferire correttamente ad uno specifico ambiente di lavoro definito per il gestionale."]}),"\n",(0,s.jsx)(i.p,{children:"Le applicazioni devono specificare lo scope nella richiesta di autenticazione. I\u2019access token rilasciato conterr\xe0 solo gli scopes (al momento solo uno) che l\u2019applicativo ha richiesto."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Scope"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"Webapi_admin"}),(0,s.jsx)(i.td,{children:"Questo scope permette di accedere alle api di richiesta su ambienti disponibili. Permette di avere un token anche non conoscendo l'ambiente di riferimento a priori, perch\xe9 magari non ancora richiesto all'utente. Tipicamente con questo tipo di token si eseguono interrogazioni di tipo amministrativo, come la GetAmbienti"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"[ambiente]"}),(0,s.jsx)(i.td,{children:"Rappresenta l\u2019ambiente di lavoro Enterprise a cui le API devono accedere"})]})]})]}),"\n",(0,s.jsxs)(i.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional resources"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://jwt.io/",children:"JWT Token"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Query_string",children:"Query String"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Percent-encoding#Percent-encoding_reserved_characters",children:"URL Encoding"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Whitelisting",children:"Whitelist"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"company",children:"Company"}),"\n",(0,s.jsx)(i.p,{children:"How use Company"})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var t=n(96540);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);