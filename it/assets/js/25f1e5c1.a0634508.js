"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[26297],{51439:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"scenario/documents/documents-mg","title":"Documenti *","description":"Elenco dei servizi relativo ai documenti","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/scenario/documents/documents-mg.mdx","sourceDirName":"scenario/documents","slug":"/scenario/documents/documents","permalink":"/it/docs/scenario/documents/documents","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"documenti","permalink":"/it/docs/tags/documenti"},{"inline":true,"label":"casi d\'uso","permalink":"/it/docs/tags/casi-duso"},{"inline":true,"label":"scenario","permalink":"/it/docs/tags/scenario"}],"version":"1.0.1","lastUpdatedAt":1740768973000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Documenti *","slug":"documents","description":"Elenco dei servizi relativo ai documenti","tags":["documenti","casi d\'uso","scenario"],"author":"Nome Autore"},"sidebar":"tutorialSidebar","previous":{"title":"Documents MG","permalink":"/it/docs/scenario/documents/"},"next":{"title":"Gestione Kit *","permalink":"/it/docs/scenario/documents/kit-management"}}');var s=n(74848),o=n(28453);function r(i){const e={a:"a",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,o.R)(),...i.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"elenco-casi-duso-disponibili",children:"Elenco casi d'uso disponibili:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Inserimento documento con dati minimi"}),", qui trovi i riferimenti delle ",(0,s.jsx)(e.a,{href:"/api-reference-mg#post-/api/v1/-environment-/MG/Documento",children:"APIreference"})," e ",(0,s.jsx)(e.a,{href:"../../support/change-log#2023001000-mar-2023",children:"versione di rilascio"}),";"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Inserimento documento complesso con i seguenti dati:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Riga di tipo articolo, con codice articolo e quantit\xe0 (prezzo recuperato da listino dal BO);"}),"\n",(0,s.jsx)(e.li,{children:"Riga di tipo spesa;"}),"\n",(0,s.jsx)(e.li,{children:"Riga articolo manuale e riga descrittiva;"}),"\n",(0,s.jsx)(e.li,{children:"Data consegna in testata;"}),"\n",(0,s.jsx)(e.li,{children:"Agenti in testata;"}),"\n",(0,s.jsx)(e.li,{children:"Provvigioni manuali di riga;"}),"\n",(0,s.jsx)(e.li,{children:"Provvigioni manuali di piede;"}),"\n",(0,s.jsx)(e.li,{children:"Codice progetto e nodo di riferimento in testata;"}),"\n",(0,s.jsx)(e.li,{children:"Codice progetto e nodo di riferimento sul corpo;"}),"\n",(0,s.jsx)(e.li,{children:"Data Inizio e fine competenza di testata;"}),"\n",(0,s.jsx)(e.li,{children:"Data Inizio e fine competenza di riga;"}),"\n",(0,s.jsx)(e.li,{children:"Dati estensione personalizzati di testata;"}),"\n",(0,s.jsx)(e.li,{children:"Dati estensione standard di testata;"}),"\n",(0,s.jsx)(e.li,{children:"Dati estensione personalizzati di riga;"}),"\n",(0,s.jsx)(e.li,{children:"Dati estensione standard di riga;"}),"\n",(0,s.jsx)(e.li,{children:"Campi conto destinazione e VDS destinazione di contabilit\xe0 analitica;"}),"\n",(0,s.jsx)(e.li,{children:"Riga con dettaglio lotti;"}),"\n",(0,s.jsx)(e.li,{children:"Gestione confezione su riga articolo;"}),"\n",(0,s.jsx)(e.li,{children:"Trasporto affidato a soggetti terzi (vettore/i);"}),"\n",(0,s.jsx)(e.li,{children:"Natura oggetto del trasporto;"}),"\n",(0,s.jsx)(e.li,{children:"Aspetto dei beni;"}),"\n",(0,s.jsx)(e.li,{children:"Quantit\xe0 dei beni;"}),"\n",(0,s.jsx)(e.li,{children:"Campi dati di accompagnamento;"}),"\n",(0,s.jsxs)(e.li,{children:["Gestioni particolari:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Forzare il valore = 0 del flag spese bolli;"}),"\n",(0,s.jsx)(e.li,{children:"Forzare il valore = 0 del flag spese incassi;"}),"\n",(0,s.jsx)(e.li,{children:"Esclusione caricamento degli agenti multipli in testata;"}),"\n",(0,s.jsx)(e.li,{children:"Forzare il codice Iva di testata del documento;"}),"\n",(0,s.jsx)(e.li,{children:"Bloccare l'inserimento di un documento gi\xe0 esistente;"}),"\n",(0,s.jsx)(e.li,{children:"Disattivare le lettere di intento;"}),"\n",(0,s.jsx)(e.li,{children:"Escludere le spese testata Cliente/Fornitore;"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"esempi-di-utilizzo",children:"Esempi di utilizzo"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Lettura di un prezzo in inserimento di una riga documento da Listini parametrici, vai alle ",(0,s.jsx)(e.a,{href:"/api-reference-li#tag--PriceParametricLI",children:"APIreference"})," e la ",(0,s.jsx)(e.a,{href:"../../support/change-log#202302000-jul-2023",children:"versione di rilascio"}),". ",(0,s.jsx)(e.a,{href:"../../support/examples-apis#listini-parametrici",children:"esempio"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Lettura di un prezzo in inserimento di una riga documento da Listini prioritari, vai alle ",(0,s.jsx)(e.a,{href:"/api-reference-li#tag--PricePriorityLI",children:"APIreference"})," e la ",(0,s.jsx)(e.a,{href:"../../support/change-log#2024001000-mar-2024",children:"versione di rilascio"}),". ",(0,s.jsx)(e.a,{href:"../../support/examples-apis#listini-prioritari",children:"esempio"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Generazione e download della stampa di un documento come da modulo presente su TSE in formato pdf, vai ",(0,s.jsx)(e.a,{href:"/api-reference-mg#get-/api/v1/-environment-/MG/Documento/-id-/print",children:"APIreference"})," e la ",(0,s.jsx)(e.a,{href:"../../support/change-log#2024002000-jul-2024",children:"versione di rilascio"}),". ",(0,s.jsx)(e.a,{href:"../../support/examples-apis#servizio-print-documenti-generazione-stampa-documento-su-pdf",children:"esempi di utilizzo"})]}),"\n"]}),"\n",(0,s.jsx)("br",{})]})}function a(i={}){const{wrapper:e}={...(0,o.R)(),...i.components};return e?(0,s.jsx)(e,{...i,children:(0,s.jsx)(r,{...i})}):r(i)}const l={sidebar_position:1,title:"Documenti *",slug:"documents",description:"Elenco dei servizi relativo ai documenti",tags:["documenti","casi d'uso","scenario"],author:"Nome Autore"},c=void 0,d={},u=[{value:"Elenco casi d&#39;uso disponibili:",id:"elenco-casi-duso-disponibili",level:2},{value:"Esempi di utilizzo",id:"esempi-di-utilizzo",level:2}];function p(i){return(0,s.jsx)(a,{})}function m(i={}){const{wrapper:e}={...(0,o.R)(),...i.components};return e?(0,s.jsx)(e,{...i,children:(0,s.jsx)(p,{...i})}):p()}},28453:(i,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function r(i){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(s):i.components||s:r(i.components),t.createElement(o.Provider,{value:e},i.children)}}}]);