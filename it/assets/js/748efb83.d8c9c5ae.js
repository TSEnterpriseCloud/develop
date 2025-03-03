"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[73440],{95264:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"basics/crud/read","title":"[R]ead *","description":"Operazioni di lettura","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/basics/crud/read.md","sourceDirName":"basics/crud","slug":"/basics/crud/read","permalink":"/it/docs/basics/crud/read","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"status","permalink":"/it/docs/tags/status"},{"inline":true,"label":"http","permalink":"/it/docs/tags/http"},{"inline":true,"label":"code","permalink":"/it/docs/tags/code"},{"inline":true,"label":"support","permalink":"/it/docs/tags/support"},{"inline":true,"label":"200","permalink":"/it/docs/tags/200"},{"inline":true,"label":"404","permalink":"/it/docs/tags/404"}],"version":"1.0.1","lastUpdatedAt":1740755324000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"[R]ead *","slug":"read","description":"Operazioni di lettura","tags":["status","http","code","support","200","404"]},"sidebar":"tutorialSidebar","previous":{"title":"[C]reate *","permalink":"/it/docs/basics/crud/status-code"},"next":{"title":"[U]pdate *","permalink":"/it/docs/basics/crud/update"}}');var s=r(74848),l=r(28453);const o={sidebar_position:2,title:"[R]ead *",slug:"read",description:"Operazioni di lettura",tags:["status","http","code","support",200,404]},a="Read",t={},d=[{value:"GET",id:"get",level:2},{value:"Parametri",id:"parametri",level:3},{value:"Codici risposta",id:"codici-risposta",level:3},{value:"SEARCH",id:"search",level:2},{value:"Parametri",id:"parametri-1",level:3},{value:"Codici risposta",id:"codici-risposta-1",level:3},{value:"VALIDAZIONE",id:"validazione",level:2},{value:"Parametri",id:"parametri-2",level:3},{value:"Codici risposta",id:"codici-risposta-2",level:3},{value:"VALIDAZIONE PROPRIETA&#39; DI UNA RISORSA",id:"validazione-proprieta-di-una-risorsa",level:2},{value:"Parametri",id:"parametri-3",level:3},{value:"Codici risposta",id:"codici-risposta-3",level:3},{value:"LOOKUP",id:"lookup",level:2},{value:"Elenco Lookup Disponibili",id:"elenco-lookup-disponibili",level:3},{value:"Codici risposta",id:"codici-risposta-4",level:3},{value:"Recupero Dati Lookup",id:"recupero-dati-lookup",level:2},{value:"Parametri",id:"parametri-4",level:3}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"read",children:"Read"})}),"\n",(0,s.jsx)(i.h2,{id:"get",children:"GET"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"GET"}),": ",(0,s.jsx)(i.code,{children:"webapi_base_url/v1/{environment}/{modulo}/{risorsa}/{id}"})]}),"\n",(0,s.jsx)(i.h3,{id:"parametri",children:"Parametri"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"id"}),": codice identificativo della risorsa da leggere"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"codici-risposta",children:"Codici risposta"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"200"}),": l'oggetto ",(0,s.jsx)(i.code,{children:"{risorsa}DTO"})," richiesto"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"404"}),": se l'oggetto non \xe8 stato trovato"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"search",children:"SEARCH"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"POST"}),": ",(0,s.jsx)(i.code,{children:"webapi_base_url/v1/{environment}/{modulo}/{risorsa}/search"})]}),"\n",(0,s.jsx)(i.h3,{id:"parametri-1",children:"Parametri"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"body"}),": il filtro di ricerca da applicare (",(0,s.jsx)(i.code,{children:"SearchDTO"}),"), valido per tutte le propriet\xe0 del DTO, con la seguente struttura:","\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "filters": {\n    "items": [{\n      "comparer": 0,\n      "operator": 0,\n      "propertyName": "prop1",\n      "value": "value1"\n    }, {\n      "comparer": 20,\n      "operator": 1,\n      "propertyName": "prop2",\n      "value": "value2"\n    }]\n  },\n  "pageSize": 5,\n  "pageNumber": 1\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Note"}),': Si veda il paragrafo "Risorsa Search" per una descrizione dettagliata della struttura da utilizzare nella search.']}),"\n",(0,s.jsx)(i.h3,{id:"codici-risposta-1",children:"Codici risposta"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"200"}),": la lista di oggetti di tipo ",(0,s.jsx)(i.code,{children:"{risorsa}DTO"})," corrispondenti al risultato della search"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"400"}),": se il filtro della search non \xe8 stato specificato"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"validazione",children:"VALIDAZIONE"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"POST"}),": ",(0,s.jsx)(i.code,{children:"webapi_base_url/v1/{environment}/{modulo}/{risorsa}/validate"})]}),"\n",(0,s.jsx)(i.h3,{id:"parametri-2",children:"Parametri"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"body"}),": l'oggetto di tipo ",(0,s.jsx)(i.code,{children:"{risorsa}DTO"})," da validare"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"codici-risposta-2",children:"Codici risposta"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"200"}),": se l'oggetto specificato risulta VALIDO"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"400"}),": se l'oggetto da validare non \xe8 stato specificato"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"409"}),": se l'oggetto specificato risulta NON VALIDO: il contenuto della risposta contiene i messaggi di validazione prodotti"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"validazione-proprieta-di-una-risorsa",children:"VALIDAZIONE PROPRIETA' DI UNA RISORSA"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"POST"}),": ",(0,s.jsx)(i.code,{children:"webapi_base_url/v1/{environment}/{modulo}/{risorsa}/validateproperties"})]}),"\n",(0,s.jsx)(i.h3,{id:"parametri-3",children:"Parametri"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"id"}),": codice identificativo di un oggetto inesistente su cui validare le propriet\xe0 oppure per la validazione delle propriet\xe0 nei confronti di un nuovo oggetto"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"body"}),": una o pi\xf9 coppie 'chiave=valore', in formato x-www-form-urlencoded, in cui la chiave \xe8 il nome della propriet\xe0 del DTO ed il valore da assegnare prima di eseguire la validazione stessa"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"codici-risposta-3",children:"Codici risposta"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"200"}),": se le propriet\xe0 dell'oggetto specificate risultano VALIDE"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"400"}),": se le propriet\xe0 dell'oggetto da validare non sono state specificate"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"409"}),": se una o pi\xf9 propriet\xe0 dell'oggetto specificate risultano NON VALIDE: il contenuto della risposta contiene i messaggi di validazione prodotti"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"lookup",children:"LOOKUP"}),"\n",(0,s.jsx)(i.h3,{id:"elenco-lookup-disponibili",children:"Elenco Lookup Disponibili"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"GET"}),": ",(0,s.jsx)(i.code,{children:"webapi_base_url/v1/{environment}/FW/lookup/"})]}),"\n",(0,s.jsx)(i.h3,{id:"codici-risposta-4",children:"Codici risposta"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"200"}),": un array di oggetti, con la seguente struttura:"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'    {\n    "description": "string",\n    "lookupName": "string",\n    "href": "string"\n    }\n'})}),"\n",(0,s.jsx)(i.h2,{id:"recupero-dati-lookup",children:"Recupero Dati Lookup"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"GET"}),": ",(0,s.jsx)(i.code,{children:"/api/v1/{environment}/{moduleAcron}/lookup/{lookupname}"})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"POST"}),": ",(0,s.jsx)(i.code,{children:"/api/v1/{environment}/{moduleAcron}/lookup/{lookupname}"})]}),"\n",(0,s.jsx)(i.h3,{id:"parametri-4",children:"Parametri"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"moduleAcron"}),": sigla del modulo di appartenenza della lookup (esempio",":CO",",MG, ...)"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"lookupName"}),": il nome della lookup relativa alle seguenti entit\xe0 supportate"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"metadata"}),": se ",(0,s.jsx)(i.code,{children:"true"}),", recupera anche i metadati (la struttura) della lookup"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"_op"}),": da valorizzare obbligatoriamente a 'search' per attivare la funzionalit\xe0 di ricerca"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"body"}),": il filtro di ricerca da applicare alla search, in formato JSON, con la seguente struttura:"]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:'    {\n    "filters": {\n      "items": [{\n        "comparer": 0,\n        "operator": 0,\n        "propertyName": "ItemWH_SubFamilyWH_CodFamMg53",\n        "value": "A"\n      }]\n    },\n    "pageNumber": 0,\n    "pagesize": 50,\n    "orderingproperties": {\n      "CustomerSupplierCO_Clifor": 0\n    }\n  }\n'})})]})}function p(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>a});var n=r(96540);const s={},l=n.createContext(s);function o(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);