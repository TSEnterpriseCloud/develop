"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[28895],{65728:(e,i,s)=>{s.r(i),s.d(i,{CenteredText:()=>c,assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"glossary/index","title":"Glossario *","description":"Termini Comuni","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/glossary/index.md","sourceDirName":"glossary","slug":"/glossary/common-terms","permalink":"/develop/it/docs/glossary/common-terms","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"basics","permalink":"/develop/it/docs/tags/basics"},{"inline":true,"label":"terms","permalink":"/develop/it/docs/tags/terms"},{"inline":true,"label":"concepts","permalink":"/develop/it/docs/tags/concepts"},{"inline":true,"label":"scope","permalink":"/develop/it/docs/tags/scope"}],"version":"1.0.1","lastUpdatedAt":1739966023000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Glossario *","slug":"common-terms","description":"Termini Comuni","tags":["basics","terms","concepts","scope"]},"sidebar":"tutorialSidebar","previous":{"title":"OpenAPI Specification","permalink":"/develop/it/docs/support/general-knowledge/openapi-specification"}}');var n=s(74848),o=s(28453);const t={sidebar_position:1,title:"Glossario *",slug:"common-terms",description:"Termini Comuni",tags:["basics","terms","concepts","scope"]},r=void 0,l={},c=({children:e})=>(0,n.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"gray"},children:e}),d=[{value:'<i class="fas fa-asterisk"></i> Termini Comuni',id:"-termini-comuni",level:2},{value:'<i class="fas fa-globe"></i> Url',id:"-url",level:3},{value:'<i class="fas fa-fingerprint"></i> CID',id:"-cid",level:3},{value:'<i class="fas fa-network-wired"></i> APIGateway',id:"-apigateway",level:3},{value:'<i class="fas fa-globe"></i>  apigwt_base_url',id:"--apigwt_base_url",level:3},{value:'<i class="fas fa-globe"></i>  webapi_base_url',id:"--webapi_base_url",level:3},{value:'<i class="fas fa-compass"></i>  Scope',id:"--scope",level:3},{value:'<i class="fas fa-address-card"></i>  Risorsa',id:"--risorsa",level:3}];function p(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Se sei un principiante nel mondo del TSE in Cloud, probabilmente ti sentirai sopraffatto dalla quantit\xe0 di informazioni che puoi trovare in questa documentazione."}),"\n",(0,n.jsx)(i.p,{children:"Ecco perch\xe9 ti suggeriamo di iniziare imparando di cosa stiamo parlando: pensiamo che il primo passo sia familiarizzare con i termini utilizzati dall\u2019API TSE in Cloud."}),"\n",(0,n.jsxs)(i.h2,{id:"-termini-comuni",children:[(0,n.jsx)("i",{class:"fas fa-asterisk"})," Termini Comuni"]}),"\n",(0,n.jsxs)(i.p,{children:["Di seguito puoi trovare un elenco dei ",(0,n.jsx)(i.strong,{children:"concetti fondamentali"})," che devi conoscere:"]}),"\n",(0,n.jsxs)(i.h3,{id:"-url",children:[(0,n.jsx)("i",{class:"fas fa-globe"})," Url"]}),"\n",(0,n.jsx)(i.p,{children:"Questo \xc8 l\u2019URL a cui ti connetti per accedere all\u2019applicazione; ha una struttura simile a"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-http",children:"[protocol]://[cid].domain\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Per esempio ",(0,n.jsx)(i.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})]}),"\n",(0,n.jsxs)(i.h3,{id:"-cid",children:[(0,n.jsx)("i",{class:"fas fa-fingerprint"})," CID"]}),"\n",(0,n.jsx)(i.p,{children:"L\u2019identificazione del cliente \xe8 assegnata in modo univoco a ciascun cliente."}),"\n",(0,n.jsxs)(i.p,{children:["Per esempio ",(0,n.jsx)(i.code,{children:"csdemo"})]}),"\n",(0,n.jsxs)(i.h3,{id:"-apigateway",children:[(0,n.jsx)("i",{class:"fas fa-network-wired"})," APIGateway"]}),"\n",(0,n.jsx)(i.p,{children:"Un API gateway \xe8 un punto di protezione per l'accesso alle API, che protegge e gestisce il traffico tra gli utilizzatori delle API e le applicazioni che espongono quelle API. Adottare un API gateway offre diversi vantaggi, garantendo:"}),"\n",(0,n.jsx)(i.p,{children:"autenticazione and autorizzazione,\ninstradamento ai backend,\nlimitazione della velocit\xe0 per evitare il sovraccarico dei sistemi e proteggere dagli attacchi DDoS,\nscarico del traffico SSL/TLS per migliorare le prestazioni e gestire errori o eccezioni,\ntracciamento e monitoraggio dell\u2019accesso alle risorse.\nLe API TSE destinate all\u2019integrazione sono esposte a valle del Teamsystem PaaS API Gateway.."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"API Gateway",src:s(6028).A+"",width:"688",height:"465"})}),"\n",(0,n.jsx)(c,{children:(0,n.jsx)(i.p,{children:"Creare il proprio API Gateway con Nginx e una corretta validazione dell'autenticazione"})}),"\n",(0,n.jsxs)(i.h3,{id:"--apigwt_base_url",children:[(0,n.jsx)("i",{class:"fas fa-globe"}),"  apigwt_base_url"]}),"\n",(0,n.jsx)(i.p,{children:"\xc8 l\u2019URL di base per chiamare i servizi; ed \xe8 di questo tipo:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"[protocol]://[cid].APIGatewayDomain\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Per esempio: ",(0,n.jsx)(i.a,{href:"https://csdemo.ts-paas.com",children:"https://csdemo.ts-paas.com"})]}),"\n",(0,n.jsxs)(i.h3,{id:"--webapi_base_url",children:[(0,n.jsx)("i",{class:"fas fa-globe"}),"  webapi_base_url"]}),"\n",(0,n.jsx)(i.p,{children:"webapi_base_url: https://[apigwt_base_url]/api"}),"\n",(0,n.jsxs)(i.p,{children:["\xc8 il percorso radice che verr\xe0 indicato di seguito con webapi_base_url, a meno che non sia diversamente indicato, di solito \xe8 composto da api+CID.domain,\nPer esempio: ",(0,n.jsx)(i.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})]}),"\n",(0,n.jsxs)(i.h3,{id:"--scope",children:[(0,n.jsx)("i",{class:"fas fa-compass"}),"  Scope"]}),"\n",(0,n.jsx)(i.p,{children:"Anche indicato come [environment] o [environment] rappresenta l'insieme di dati ai quali hai accesso; sebbene siano possibili altre configurazioni in Teamsystem Enterprise Cloud,ogni installazione ha accesso ad un solo environment."}),"\n",(0,n.jsxs)(i.h3,{id:"--risorsa",children:[(0,n.jsx)("i",{class:"fas fa-address-card"}),"  Risorsa"]}),"\n",(0,n.jsx)(i.p,{children:"\xc8 il nome della risorsa REST assegnato all\u2019entit\xe0 dell\u2019applicazione; viene utilizzato nella chiamata REST."}),"\n",(0,n.jsx)(i.p,{children:"Per esempio:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"{{webapi_base_url}}/api/v1/{{scope}}/CO/CustomerSupplierCo/search?company=2\n"})})]})}function m(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},6028:(e,i,s)=>{s.d(i,{A:()=>a});const a=s.p+"assets/images/Api-gateway-aeb7e792935eb90cdc7c24e679ca07ce.png"},28453:(e,i,s)=>{s.d(i,{R:()=>t,x:()=>r});var a=s(96540);const n={},o=a.createContext(n);function t(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),a.createElement(o.Provider,{value:i},e.children)}}}]);