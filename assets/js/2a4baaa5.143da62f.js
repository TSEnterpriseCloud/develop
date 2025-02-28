"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[72858],{76816:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"scenario/documents/documents-mg","title":"Documents *","description":"Learn the basics about company documents","source":"@site/versioned_docs/version-1.0.1/scenario/documents/documents-mg.mdx","sourceDirName":"scenario/documents","slug":"/scenario/documents/documents","permalink":"/docs/scenario/documents/documents","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"guides","permalink":"/docs/tags/guides"},{"inline":true,"label":"document","permalink":"/docs/tags/document"}],"version":"1.0.1","lastUpdatedAt":1740732256000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Documents *","slug":"documents","description":"Learn the basics about company documents","tags":["guides","document"],"author":"Nome Autore"},"sidebar":"tutorialSidebar","previous":{"title":"Documents MG","permalink":"/docs/scenario/documents/"},"next":{"title":"Kit Management *","permalink":"/docs/scenario/documents/kit-management"}}');var s=i(74848),r=i(28453);function a(e){const n={a:"a",h2:"h2",li:"li",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"list-of-available-use-cases",children:"List of available Use Cases:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Document insertion with minimal data"}),": Here you can find the references for the API reference and release version;"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Complex document insertion with the following data:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Line item of type article, with article code and quantity (price retrieved from the BO price list);"}),"\n",(0,s.jsx)(n.li,{children:"Expense line item;"}),"\n",(0,s.jsx)(n.li,{children:"Manual article line and descriptive line;"}),"\n",(0,s.jsx)(n.li,{children:"Delivery date in the header;"}),"\n",(0,s.jsx)(n.li,{children:"Agents in the header;"}),"\n",(0,s.jsx)(n.li,{children:"Manual line commissions;"}),"\n",(0,s.jsx)(n.li,{children:"Manual footer commissions;"}),"\n",(0,s.jsx)(n.li,{children:"Project code and reference node in the header;"}),"\n",(0,s.jsx)(n.li,{children:"Project code and reference node in the body;"}),"\n",(0,s.jsx)(n.li,{children:"Start and end date of competence in the header;"}),"\n",(0,s.jsx)(n.li,{children:"Start and end date of competence in the line;"}),"\n",(0,s.jsx)(n.li,{children:"Custom header extension data;"}),"\n",(0,s.jsx)(n.li,{children:"Standard header extension data;"}),"\n",(0,s.jsx)(n.li,{children:"Custom line extension data;"}),"\n",(0,s.jsx)(n.li,{children:"Standard line extension data;"}),"\n",(0,s.jsx)(n.li,{children:"Destination account fields and analytical accounting destination VDS;"}),"\n",(0,s.jsx)(n.li,{children:"Line with batch details;"}),"\n",(0,s.jsx)(n.li,{children:"Package management on article line;"}),"\n",(0,s.jsx)(n.li,{children:"Transport entrusted to third parties (carrier/s);"}),"\n",(0,s.jsx)(n.li,{children:"Nature of the transported object;"}),"\n",(0,s.jsx)(n.li,{children:"Appearance of the goods;"}),"\n",(0,s.jsx)(n.li,{children:"Quantity of goods;"}),"\n",(0,s.jsx)(n.li,{children:"Accompanying data fields;"}),"\n",(0,s.jsxs)(n.li,{children:["Special management:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Force the value = 0 of the stamp duty expenses flag;"}),"\n",(0,s.jsx)(n.li,{children:"Force the value = 0 of the collection expenses flag;"}),"\n",(0,s.jsx)(n.li,{children:"Exclude loading of multiple agents in the header;"}),"\n",(0,s.jsx)(n.li,{children:"Force the VAT code of the document header;"}),"\n",(0,s.jsx)(n.li,{children:"Block the insertion of an already existing document;"}),"\n",(0,s.jsx)(n.li,{children:"Deactivate letters of intent;"}),"\n",(0,s.jsx)(n.li,{children:"Exclude customer/supplier header expenses;"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Reading a price when inserting a document line from Parametric Price Lists, go to the ",(0,s.jsx)(n.a,{href:"/api-reference-li#tag--PriceParametricLI",children:"APIreference"})," and the ",(0,s.jsx)(n.a,{href:"../../support/change-log#202302000-jul-2023",children:"release version"}),". ",(0,s.jsx)(n.a,{href:"../../support/examples-apis#listini-parametrici",children:"examples"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Reading a price when inserting a document line from Priority Price Lists, go to the ",(0,s.jsx)(n.a,{href:"../../support/examples#api-reference-li#tag--PricePriorityLI",children:"APIreference"})," and the\r\n",(0,s.jsx)(n.a,{href:"../../support/change-log#2024001000-mar-2024",children:"release version"}),". ",(0,s.jsx)(n.a,{href:"../../support/examples-apis#listini-prioritari",children:"examples"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Generating and downloading the print of a document as per the module present on TSE in pdf format, go to the ",(0,s.jsx)(n.a,{href:"/api-reference-mg#get-/api/v1/-environment-/MG/Documento/-id-/print",children:"APIreference"})," and the ",(0,s.jsx)(n.a,{href:"../../support/change-log#2024002000-jul-2024",children:"release version"}),".\r\n",(0,s.jsx)(n.a,{href:"../../support/examples-apis#servizio-print-documenti-generazione-stampa-documento-su-pdf",children:"examples"})]}),"\n"]}),"\n",(0,s.jsx)("br",{})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}const l={sidebar_position:1,title:"Documents *",slug:"documents",description:"Learn the basics about company documents",tags:["guides","document"],author:"Nome Autore"},c=void 0,d={},h=[{value:"List of available Use Cases:",id:"list-of-available-use-cases",level:2},{value:"Usage Examples",id:"usage-examples",level:2}];function u(e){return(0,s.jsx)(o,{})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u()}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(96540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);