"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[5429],{7770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>d,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"stepbystep/authentication","title":"Autenticazione *","description":"Metodi di autenticazione supportati","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/stepbystep/authentication.mdx","sourceDirName":"stepbystep","slug":"/stepbystep/authentication","permalink":"/develop/it/docs/stepbystep/authentication","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"basics","permalink":"/develop/it/docs/tags/basics"},{"inline":true,"label":"authentication","permalink":"/develop/it/docs/tags/authentication"},{"inline":true,"label":"oauth","permalink":"/develop/it/docs/tags/oauth"},{"inline":true,"label":"unauthorized","permalink":"/develop/it/docs/tags/unauthorized"},{"inline":true,"label":"401","permalink":"/develop/it/docs/tags/401"}],"version":"1.0.1","lastUpdatedAt":1739273496000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Autenticazione *","slug":"authentication","description":"Metodi di autenticazione supportati","tags":["basics","authentication","oauth","unauthorized","401"]},"sidebar":"tutorialSidebar","previous":{"title":"Guida passo passo","permalink":"/develop/it/docs/stepbystep/"},"next":{"title":"Company ID *","permalink":"/develop/it/docs/stepbystep/company-methods"}}');var i=n(74848),r=n(28453);const o=({children:e})=>(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"gray"},children:e});function s(e){const t={admonition:"admonition",br:"br",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Per effettuare richieste verso l'",(0,i.jsx)(t.strong,{children:"API TSE in Cloud"})," \xe8 necessario utilizzare solo metodi di autenticazione supportati.",(0,i.jsx)(t.br,{}),"\n","Nel prossimo paragrafo troverai un diagramma di flusso che ti guider\xe0 nella scelta."]}),"\n",(0,i.jsx)(t.p,{children:"I metodi attualmente supportati sono con token di accesso."}),"\n",(0,i.jsxs)(t.h3,{id:"-come-posso-ottenere-lautenticazione",children:[(0,i.jsx)("i",{class:"fas fa-lock"})," Come posso ottenere l'autenticazione?"]}),"\n",(0,i.jsx)(t.p,{children:"Questa sezione documenta i modelli di autenticazione supportati. Scenario M2M Molte volte \xe8 necessario un canale di comunicazione sicuro e autorizzato tra diverse parti di un sistema, come due servizi back-end di applicazioni diverse. L'aspetto chiave di queste comunicazioni risiede nel fatto che l'elemento per stabilire la fiducia nel sistema \xe8 il client. In TSE a un client viene assegnata una chiave API tecnica che viene utilizzata durante la fase di login per riconoscerlo e abilitarlo all'uso dei servizi."}),"\n",(0,i.jsx)(t.p,{children:"La figura illustra il flusso di autenticazione (Login)."}),"\n",(0,i.jsx)(t.p,{children:"!API Gateway"}),"\n",(0,i.jsx)(o,{children:(0,i.jsx)(t.p,{children:"Crea il tuo API Gateway con Nginx e una corretta validazione dell'autenticazione"})}),"\n",(0,i.jsxs)(t.h3,{id:"-generazione-del-token",children:[(0,i.jsx)("i",{class:"fas fa-lock-open"})," Generazione del token"]}),"\n",(0,i.jsx)(t.p,{children:"Durante questa fase, il client utilizza la chiave API per ottenere un token JWT che verr\xe0 utilizzato nelle chiamate successive per accedere alle risorse dell'applicazione.\nPer informazioni su come ottenere una chiave API, consulta questo link.\nL'applicazione deve richiedere il token tramite POST con parametri in x-www-form-urlencoded a un percorso specifico"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"webapi_base_url/auth/token"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Specificando nel corpo"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Parametro del modulo"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Descrizione"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["grant_type ",(0,i.jsx)(t.em,{children:"obbligatorio"})]}),(0,i.jsxs)(t.td,{children:["\u201ctoken\u201d ",(0,i.jsx)(t.strong,{children:"Tipo:"})," stringa"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["username ",(0,i.jsx)(t.em,{children:"obbligatorio"})]}),(0,i.jsxs)(t.td,{children:["admin_<cid>",(0,i.jsx)(t.strong,{children:"Tipo:"})," stringa"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["token ",(0,i.jsx)(t.em,{children:"obbligatorio"})]}),(0,i.jsxs)(t.td,{children:["Bearer ",(0,i.jsx)(t.em,{children:"Chiave API"})," ",(0,i.jsx)(t.strong,{children:"Tipo:"})," stringa"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["scope ",(0,i.jsx)(t.em,{children:"obbligatorio"})]}),(0,i.jsxs)(t.td,{children:["Indica il contesto di accesso per cui si richiede l'autorizzazione. I valori possibili sono: webapi_admin - utilizzato ad esempio per recuperare l'elenco degli ambienti <environment> uno dei qualsiasi ambienti di lavoro registrati ",(0,i.jsx)(t.strong,{children:"Tipo"}),": stringa"]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:'In risposta alla chiamata, si ottiene un codice di autorizzazione costituito da un token JWT, la cui durata \xe8 riportata nella risposta della chiamata nel parametro "expires_in" (solitamente della durata di 8 ore).'}),"\n",(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsxs)(t.p,{children:["\xc8 importante che nella sezione del token la chiave API sia preceduta dalla parola ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Bearer"})})," ad esempio"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3ZWJhcGlhZG1pbiIsIndlYmFwaTphdXRoZW50aWNhdGlvbjpzY29wZSI6Imh1Yl9hZG1pbix0c2UxMHdlYmFwaXRlc3QyX2FseXRzZTEwd2ViYXBpdGVzdDIiLCJqdGkiOiIwMjdkYmRlMC03OTg5LTQ0MTItODliOC0yM2FkYTVjNTdjZTIiLCJpYXQiOjE2NTg3NDA4NzcsImlzcyI6IkFseUNFU3J2MlNydklzc3VlciIsImF1ZCI6IkFseUNFU3J2MlNydkF1ZGllbmNlIn0.p1oEy4LJyFuTKIjJynYw4zQQQXIYPO3WfLe8VTNh7XA\n"})})]}),"\n",(0,i.jsxs)(t.h3,{id:"-chiamata-webapi-in-azione",children:[(0,i.jsx)("i",{class:"fas fa-cloud"})," Chiamata WebApi in azione"]}),"\n",(0,i.jsx)(t.p,{children:"Le chiamate ai servizi dell'applicazione saranno autenticate con un token Bearer costituito da un token JWT ottenuto con la chiamata di Login.\nDi seguito sono riportati alcuni esempi di chiamate get per i clienti."})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}var c=n(65537),u=n(79329);const d={sidebar_position:1,title:"Autenticazione *",slug:"authentication",description:"Metodi di autenticazione supportati",tags:["basics","authentication","oauth","unauthorized",401]},p="Authenticazione",h={},m=[{value:'<i class="fas fa-lock"></i> Come posso ottenere l&#39;autenticazione?',id:"-come-posso-ottenere-lautenticazione",level:3},{value:'<i class="fas fa-lock-open"></i> Generazione del token',id:"-generazione-del-token",level:3},{value:'<i class="fas fa-cloud"></i> Chiamata WebApi in azione',id:"-chiamata-webapi-in-azione",level:3}];function b(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"authenticazione",children:"Authenticazione"})}),"\n",(0,i.jsx)(l,{}),"\n",(0,i.jsxs)(c.A,{groupId:"languages",children:[(0,i.jsx)(u.A,{value:"jsx",label:"React",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"    var https = require('follow-redirects').https;\n    var fs = require('fs');\n\n    var options = {\n      'method': 'GET',\n      'hostname': 'webapicorso1.ts-paas.com',\n      'path': '/api/v1/webapicorso1_alywebapicorso1/CO/CustomerSupplierCO/4?company=2',\n      'headers': {\n        'Authorization-Scope': 'webapicorso1_alywebapicorso1',\n        'Content-Type': 'application/json',\n        'Authorization': '\u2022\u2022\u2022\u2022\u2022\u2022'\n      },\n      'maxRedirects': 20\n    };\n\n    var req = https.request(options, function (res) {\n      var chunks = [];\n\n      res.on(\"data\", function (chunk) {\n        chunks.push(chunk);\n      });\n\n      res.on(\"end\", function (chunk) {\n        var body = Buffer.concat(chunks);\n        console.log(body.toString());\n      });\n\n      res.on(\"error\", function (error) {\n        console.error(error);\n      });\n    });\n\n    req.end();\n"})})}),(0,i.jsx)(u.A,{value:"csharp",label:"C#",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'    using System.Net.Http.Headers;\n    // No more boilerplate needed with top level statements (https://docs.microsoft.com/en-us/dotnet/core/tutorials/top-level-templates)\n    var client = new HttpClient();\n    var request = new HttpRequestMessage(HttpMethod.Get, "https://webapicorso1.ts-paas.com/api/v1/webapicorso1_alywebapicorso1/CO/CustomerSupplierCO/4?company=2");\n    request.Headers.Add("Authorization-Scope", "webapicorso1_alywebapicorso1");\n    request.Headers.Add("Authorization", "\u2022\u2022\u2022\u2022\u2022\u2022");\n    var content = new StringContent(string.Empty);\n    content.Headers.ContentType = new MediaTypeHeaderValue("application/json");\n    request.Content = content;\n    var response = await client.SendAsync(request);\n    response.EnsureSuccessStatusCode();\n    Console.WriteLine(await response.Content.ReadAsStringAsync());\n'})})}),(0,i.jsx)(u.A,{value:"curl",label:"cURL",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"    curl --location --request GET 'https://webapicorso1.ts-paas.com/api/v1/webapicorso1_alywebapicorso1/CO/CustomerSupplierCO/4?company=2' \\\n    --header 'Authorization-Scope: webapicorso1_alywebapicorso1' \\\n    --header 'Content-Type: application/json' \\\n    --header 'Authorization: \u2022\u2022\u2022\u2022\u2022\u2022'\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(34164);const i={tabItem:"tabItem_Ymn6"};var r=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,o),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>y});var a=n(96540),i=n(34164),r=n(65627),o=n(56347),s=n(50372),l=n(30604),c=n(11861),u=n(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:n,groupId:i}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,u.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),v=(()=>{const e=c??b;return h({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=s[n].value;i!==a&&(c(t),o(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...r,className:(0,i.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function z(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,x.jsx)(z,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);