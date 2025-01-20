"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[85800],{46590:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"scenario/common/master-data","title":"Master Data","description":"Learn the basics about building a client","source":"@site/docs/scenario/common/master-data.md","sourceDirName":"scenario/common","slug":"/scenario/common/Ana-creation","permalink":"/develop/docs/1.0.1/scenario/common/Ana-creation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scenario/common/master-data.md","tags":[{"inline":true,"label":"guides","permalink":"/develop/docs/1.0.1/tags/guides"}],"version":"current","lastUpdatedAt":1737112022000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Master Data","slug":"Ana-creation","description":"Learn the basics about building a client","tags":["guides"],"author":"Nome Autore"},"sidebar":"tutorialSidebar","previous":{"title":"Common","permalink":"/develop/docs/1.0.1/scenario/common/"},"next":{"title":"Documents MG","permalink":"/develop/docs/1.0.1/scenario/documents/"}}');var r=s(74848),i=s(28453);const a={sidebar_position:1,title:"Master Data",slug:"Ana-creation",description:"Learn the basics about building a client",tags:["guides"],author:"Nome Autore"},o="Master Data",l={},c=[];function d(e){const n={a:"a",h1:"h1",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"master-data",children:"Master Data"})}),"\n",(0,r.jsx)(n.p,{children:"List of available use cases:"}),"\n",(0,r.jsx)(n.p,{children:"Clients/Suppliers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Search for a client/supplier by tax code and/or VAT number (data present in the general master data) with a single query;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Insert/Modify/Delete a general master data record;"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Insert a client/supplier with reference to a general master data record with the following linked entities available ",(0,r.jsx)(n.a,{href:"/api-reference-co#post-/api/v1/-environment-/CO/CustomerSupplierCO",children:"here"}),":"]}),"\n",(0,r.jsx)(n.li,{children:"Payment conditions;"}),"\n",(0,r.jsx)(n.li,{children:"Recipients;"}),"\n",(0,r.jsx)(n.li,{children:"Expenses;"}),"\n",(0,r.jsx)(n.li,{children:"Currencies;"}),"\n",(0,r.jsx)(n.li,{children:"Client Banks;"}),"\n",(0,r.jsx)(n.li,{children:"Company Banks;"}),"\n",(0,r.jsx)(n.li,{children:"Agents;"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Items:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Insert/Modify/Delete an item master data record and the following linked entities available:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Agents"}),"\n",(0,r.jsx)(n.li,{children:"Warehouses"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here you can find references to the ",(0,r.jsx)(n.a,{href:"https://ts-enterprise-dev.ts-paas.com/link/27#bkmrk-2023001000",children:"release version"}),";"]}),"\n",(0,r.jsx)(n.p,{children:"Common Master Data:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Insert/Modify the following common master data records: \xa0","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["VAT Codes: ",(0,r.jsx)(n.a,{href:"/docs/support/change-log#2024001000",children:"release version"})]}),"\n",(0,r.jsx)(n.li,{children:"Nations;"}),"\n",(0,r.jsx)(n.li,{children:"Languages;"}),"\n",(0,r.jsx)(n.li,{children:"Banks and Agencies (ABI/CAB);"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here you can find references to the\xa0",(0,r.jsx)(n.a,{href:"https://ts-enterprise-dev.ts-paas.com/link/19#bkmrk-2024002000",children:"release version"}),";"]}),"\n",(0,r.jsx)(n.p,{children:"Company Master Data:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Insert/Modify the following company master data records: \xa0\xa0","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sections: ",(0,r.jsx)(n.a,{href:"https://ts-enterprise-dev.ts-paas.com/link/27#bkmrk-2023001000",children:"release version"}),";"]}),"\n",(0,r.jsxs)(n.li,{children:["Company locations: ",(0,r.jsx)(n.a,{href:"https://ts-enterprise-dev.ts-paas.com/link/19#bkmrk-2024002000",children:"release version"}),";"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Here you can find references to the\xa0",(0,r.jsx)(n.a,{href:"/api-reference-co#auth",children:"api reference"})," and the ",(0,r.jsx)(n.a,{href:"https://ts-enterprise-dev.ts-paas.com/link/13#bkmrk-page-title",children:"usage examples"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://ts-enterprise-dev.ts-paas.com/books/teamsystem-enterprise-webapi/page/anagrafiche/edit",title:"Go to the section in the editor"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const r={},i=t.createContext(r);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);