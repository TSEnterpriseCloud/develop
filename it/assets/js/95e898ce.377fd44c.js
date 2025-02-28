"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[86833],{96145:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"support/faq","title":"FAQs","description":"FAQs","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/support/faq.md","sourceDirName":"support","slug":"/support/FAQs","permalink":"/it/docs/support/FAQs","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"faqs","permalink":"/it/docs/tags/faqs"},{"inline":true,"label":"questions","permalink":"/it/docs/tags/questions"},{"inline":true,"label":"help","permalink":"/it/docs/tags/help"},{"inline":true,"label":"support","permalink":"/it/docs/tags/support"}],"version":"1.0.1","lastUpdatedAt":1740674549000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"FAQs","slug":"FAQs","description":"FAQs","tags":["faqs","questions","help","support"]},"sidebar":"tutorialSidebar","previous":{"title":"Supporto & Richieste di implementazione*","permalink":"/it/docs/support/support"},"next":{"title":"Support link *","permalink":"/it/docs/support/support-link"}}');var t=n(74848),r=n(28453);const o={sidebar_position:1,title:"FAQs",slug:"FAQs",description:"FAQs",tags:["faqs","questions","help","support"]},a=void 0,l={},c=[];function d(e){const i={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:n}=i;return n||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Quale metodo di autenticazione dovrei usare?"}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Per iniziare a lavorare con le nostre API in un ambiente di sviluppo, puoi semplicemente\nutilizzare un Token Personale. Abbiamo creato una guida pi\xf9 estesa"}),(0,t.jsx)("a",{href:"../started/howto#ottenere-il-token-personale",children:(0,t.jsx)(i.p,{children:"alla selezione del metodo di autenticazione"})}),(0,t.jsx)(i.p,{children:"per aiutarti a scegliere quello che utilizzerai quando andrai in produzione."})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Come posso scaricare i file swagger in formato .yaml?"}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Per scaricare i file in formato .yaml, puoi semplicemente cliccare sul link di riferimento in swagger,"})," ",(0,t.jsx)("a",{href:"https://webapitest1.ts-paas-com/swagger/v1_IntegrationWH/swagger.json",children:(0,t.jsx)(i.p,{children:"e rinominare l'estensione in"})}),(0,t.jsx)("a",{href:"https://webapitest1.ts-paas-com/swagger/v1_IntegrationWH/swagger.yaml"})," "]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Dove posso trovare il mio Company_ID?"}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Il Company_Id \xe8 un parametro molto importante per le WebAPI di TSE in Cloud\nperch\xe9 consente all'utente di utilizzare i metodi con ambito aziendale. Per il\nrecupero del companyID vai al seguente link ()"})," ",(0,t.jsx)("a",{href:"https://developers.fattureincloud.it/docs/basics/company-scoped-methods",children:(0,t.jsx)(i.p,{children:"metodi con ambito aziendale."})}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Che cosa si deve fare in caso di messaggi di errori warning ?"}),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(i.p,{children:"Per forzare e non considerare un warning nell'esecuzione di un servizio \xe8\nnecessario aggiungere il parametro 'force' nella chiamata.\nIl parametro 'force' richiede l'elenco dei codici di warning che non si vogliono\nconsiderare (force=97788,97760) o del singolo warning.\nPer individuare l'elenco dei codici warning \xe8 necessario richiamare il servizio\nsenza il suddetto parametro.\nSe in fase di inserimento di un'anagrafica tramite POST, \xe8 riportato nella response\n\"warningCode\": 97788, \xe8 necessario aggiungere il parametro \"&force=97788\"."})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Come generare un'autofattura extraue?"}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["Every account has a potentially huge number of entities and documents, so we\nneed to preserve the functionality of our system by ",(0,t.jsx)("i",{children:"paginating"})," the\nresults; to safeguard our systems it is not possible to deactivate\npagination, so it is important to manage it properly."]}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)(i.p,{children:["We explained how to do it in this ",(0,t.jsx)("a",{href:"https://developers.fattureincloud.it/docs/basics/additional-capabilities/paginate-results",children:"\nguide\n"}),"."]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"E' possibile escludere gli Agenti Multipli memorizzati sul cliente?"}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.p,{children:["Tramite la propriet\xe0 callOptions con il parametro 'EsclusioneAgentiMultipli' \xe8 possibile escludere\no meno gli agenti multipli del cliente.\nSe il parametro 'EsclusioneAgentiMultipli=true', il sistema popoler\xe0 la tabella ",(0,t.jsx)(i.code,{children:"DO29_DOCTESAGENTI"}),"\ncon i soli agenti passati in ",(0,t.jsx)(i.code,{children:"DocumentoTestataAgentiMG"}),", ignorando quelli proposti da configurazione\ncliente."]})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Come generare la stampa pdf?"}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.p,{children:["Per consentire la stampa in pdf di un documento, \xe8 possibile recuperare con una GET, tramite il comando\nPrint lo streamPDF di un documento che sar\xe0 decodificato e convertito in PDF tramite un qualsiasi\nprogramma di conversione.\nSi possono avere maggiore dettagli dal seguente link ",(0,t.jsx)(i.a,{href:"../support/examples-apis#documenti",children:"casi d'uso"})]})})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"** Come si inserisce un documento prima della 202501000?"}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"No, you just need an HTTP Client. This makes it possible to use our APIs\neven if your programming language isn't currently supported, or if the SDK\nfor your language doesn't support the version you're using."}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(i.p,{children:"Of course, we strongly suggest using our SDKs when possible because they speed\nup your development process."}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsxs)(i.p,{children:["If you still don't think our SDKs are the best solutions for you, you can\ncheck the"," "]}),(0,t.jsx)("a",{href:"https://developers.fattureincloud.it/docs/quickstarts/vanilla-code",children:(0,t.jsx)(i.p,{children:"Vanilla Code Quickstart"})})," ",(0,t.jsx)(i.p,{children:"to help you getting started with some code examples."})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"How do I generate a delivery note (ddt)?"}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["To create a ddt you have to use the"," "]}),(0,t.jsx)("a",{href:"https://developers.fattureincloud.it/api-reference#get-/c/-company_id-/issued_documents",children:(0,t.jsx)(i.p,{children:"Create Issued Document method"})}),(0,t.jsxs)(i.p,{children:[", passing the ",(0,t.jsx)("code",{children:"type"})," field set to ",(0,t.jsx)("code",{children:"delivery_note"}),"."]}),(0,t.jsx)("br",{}),(0,t.jsxs)(i.p,{children:["You may also find useful the guide: ",(0,t.jsx)("a",{href:"https://developers.fattureincloud.it/docs/guides/invoice-creation",children:"\ncreate an issued document\n"}),"."]})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"How can I avoid giving my developer permission to access my company's data?"}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["We suggest creating a new TSE in Cloud account and company for your\ndevelopment team. Check the following link for more info:"," "]}),(0,t.jsx)("a",{href:"https://developers.fattureincloud.it/docs/developer-account#%EF%B8%8F-keep-your-own-data-safe",children:(0,t.jsx)(i.p,{children:"Developer Account"})})]})]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"How can I create a self invoice?"}),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["A self invoice (autofattura) is a special type of issued document, there are 2 types of\nthem:"," "]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("b",{children:"self_own_invoice"}),": you are only the client"]})}),(0,t.jsx)("li",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("b",{children:"self_supplier_invoice"}),": you are both the client and the supplier"]})})]}),(0,t.jsx)(i.p,{children:"You will also need to set the ei_raw according to the type of autofattura\nthat you want to create, below you can find an example."}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("div",{children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n    "ei_raw": {\n        "FatturaElettronicaBody": {\n            "DatiGenerali": {\n                "DatiGeneraliDocumento": {\n                    "TipoDocumento": "TD18"\n                }\n            }\n        },\n        "FatturaElettronicaHeader": {\n            "CedentePrestatore": {\n                "DatiAnagrafici": {\n                    "RegimeFiscale": "RF01"\n                }\n            }\n        }\n    }\n}\n'})})})]})]})]})}function p(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var s=n(96540);const t={},r=s.createContext(t);function o(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);