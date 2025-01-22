"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[71916],{14624:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"basics/crud/update","title":"[U]pdate *","description":"Update sample","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/basics/crud/update.md","sourceDirName":"basics/crud","slug":"/basics/crud/update","permalink":"/develop/it/docs/basics/crud/update","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"status","permalink":"/develop/it/docs/tags/status"},{"inline":true,"label":"http","permalink":"/develop/it/docs/tags/http"},{"inline":true,"label":"code","permalink":"/develop/it/docs/tags/code"},{"inline":true,"label":"support","permalink":"/develop/it/docs/tags/support"},{"inline":true,"label":"200","permalink":"/develop/it/docs/tags/200"},{"inline":true,"label":"400","permalink":"/develop/it/docs/tags/400"},{"inline":true,"label":"404","permalink":"/develop/it/docs/tags/404"},{"inline":true,"label":"409","permalink":"/develop/it/docs/tags/409"}],"version":"1.0.1","lastUpdatedAt":1737366560000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"[U]pdate *","slug":"update","description":"Update sample","tags":["status","http","code","support","200","400","404","409"]},"sidebar":"tutorialSidebar","previous":{"title":"[R]ead *","permalink":"/develop/it/docs/basics/crud/read"},"next":{"title":"[D]elete *","permalink":"/develop/it/docs/basics/crud/delete"}}');var s=n(74848),o=n(28453);const r={sidebar_position:3,title:"[U]pdate *",slug:"update",description:"Update sample",tags:["status","http","code","support",200,400,404,409]},a="PUT",l={},d=[{value:"Modifica integrale Risorsa",id:"modifica-integrale-risorsa",level:2},{value:"Parametri",id:"parametri",level:3},{value:"Codici risposta",id:"codici-risposta",level:3},{value:"Modifica parziale Risorsa",id:"modifica-parziale-risorsa",level:2},{value:"Parametri",id:"parametri-1",level:3},{value:"Body di esempio",id:"body-di-esempio",level:3},{value:"Codici risposta",id:"codici-risposta-1",level:3}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"put",children:"PUT"})}),"\n",(0,s.jsx)(i.h2,{id:"modifica-integrale-risorsa",children:"Modifica integrale Risorsa"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"PUT"}),": ",(0,s.jsx)(i.code,{children:"webapi_base_url/v1/{environment}/{modulo}/{risorsa}/{id}"})]}),"\n",(0,s.jsx)(i.h3,{id:"parametri",children:"Parametri"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"id"}),": codice identificativo da leggere."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"body"}),": l'oggetto di tipo ",(0,s.jsx)(i.code,{children:"{risorsa}DTO"})," da aggiornare."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"force"}),": il codice (o i codici separati da ",(0,s.jsx)(i.code,{children:","}),") di errore da ignorare durante l'esecuzione dell'operazione."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"codici-risposta",children:"Codici risposta"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"200"}),": l'oggetto \xe8 stato aggiornato correttamente."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"400"}),": l'oggetto non \xe8 stato aggiornato; il contenuto della response contiene i messaggi di validazione prodotti."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"404"}),": l'oggetto non \xe8 stato trovato."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"409"}),": l'oggetto non \xe8 stato aggiornato a causa di logiche di business non rispettate; il contenuto della response contiene i messaggi di validazione prodotti."]}),"\n"]}),"\n",(0,s.jsx)(i.h1,{id:"patch",children:"PATCH"}),"\n",(0,s.jsx)(i.h2,{id:"modifica-parziale-risorsa",children:"Modifica parziale Risorsa"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"PATCH"}),": ",(0,s.jsx)(i.code,{children:"webapi_base_url/v1/{environment}/{modulo}/{risorsa}/{id}"})]}),"\n",(0,s.jsx)(i.h3,{id:"parametri-1",children:"Parametri"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"id"}),": codice identificativo della risorsa da leggere."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"force"}),": il codice (o i codici separati da ",(0,s.jsx)(i.code,{children:","}),") di errore da ignorare nell'esecuzione dell'operazione."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"body"}),": specifica un set di modifiche da applicare alla risorsa. Pu\xf2 essere pi\xf9 efficiente rispetto all'uso della PUT, perch\xe8 il client invia solo le modifiche e non l'intera rappresentazione della risorsa."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"body-di-esempio",children:"Body di esempio"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "title": "pippo",\n  "accounts": [\n    {\n      "id": 1,\n      "description": "account1"\n    },\n    {\n      "id": 2,\n      "patchInternalOp": "delete"\n    },\n    {\n      "patchInternalOp": "add",\n      "description": "account3"\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(i.p,{children:["In questo esempio di body viene fatto uso dell'attributo ",(0,s.jsx)(i.code,{children:"patchInternalOp"})," utilizzato per eliminare, (attraverso la chiave id) o aggiungere sottoelementi ad una risorsa. Ogni sottoelemento senza ",(0,s.jsx)(i.code,{children:"patchInternalOp"})," viene ricercato all'interno della risorsa (attraverso sempre la chiave id). Se viene trovato, viene considerato da modificare, altrimenti da aggiungere."]}),"\n",(0,s.jsx)(i.h3,{id:"codici-risposta-1",children:"Codici risposta"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"200"}),": l'oggetto \xe8 stato aggiornato correttamente."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"400"}),": l'oggetto non \xe8 stato aggiornato; il contenuto della response contiene i messaggi di validazione prodotti."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"404"}),": l'oggetto non \xe8 stato trovato."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"409"}),": l'oggetto non \xe8 stato aggiornato a causa di logiche di business non rispettate; il contenuto della response contiene i messaggi di validazione prodotti."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);