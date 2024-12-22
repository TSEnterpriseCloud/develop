"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[75563],{1936:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"reference/Finance/docs/Models/CSHistorySddCODTO","title":"CSHistorySddCODTO","description":"Properties","source":"@site/versioned_docs/version-1.0.1/reference/Finance/docs/Models/CSHistorySddCODTO.md","sourceDirName":"reference/Finance/docs/Models","slug":"/reference/Finance/docs/Models/CSHistorySddCODTO","permalink":"/develop/docs/reference/Finance/docs/Models/CSHistorySddCODTO","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/reference/Finance/docs/Models/CSHistorySddCODTO.md","tags":[],"version":"1.0.1","lastUpdatedAt":1734692556000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"CSHistorySddCO","permalink":"/develop/docs/reference/Finance/docs/Models/CSHistorySddCO"},"next":{"title":"CSInfoCO","permalink":"/develop/docs/reference/Finance/docs/Models/CSInfoCO"}}');var t=n(74848),r=n(28453);const s={},l="CSHistorySddCODTO",o={},c=[{value:"Properties",id:"properties",level:2}];function a(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"cshistorysddcodto",children:"CSHistorySddCODTO"})}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Type"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Notes"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"codBicswift"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"String"})}),(0,t.jsx)(i.td,{children:"MG2E_CODBICSWIFT - BICSWIFT"}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"codClideb"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"String"})}),(0,t.jsx)(i.td,{children:"MG2E_CODCLIDEB - Codice debitore"}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"codIndiv"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Double"})}),(0,t.jsx)(i.td,{children:"MG2E_CODINDIV - Codice individuale<br><ul><li><i>0</i> - Nessuno</li><li><i>1</i> - Utenza</li><li><i>2</i> - Matricola</li><li><i>3</i> - Codice fiscale</li><li><i>4</i> - Codice cliente</li><li><i>5</i> - Codice fornitore</li><li><i>6</i> - Portafoglio commerciale</li><li><i>9</i> - Altro</li></ul>"}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"datavar"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Date"})}),(0,t.jsx)(i.td,{children:"MG2E_DATAVAR - Data"}),(0,t.jsx)(i.td,{children:"[default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"id"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Integer"})}),(0,t.jsx)(i.td,{children:"MG2E_ID - Id"}),(0,t.jsx)(i.td,{children:"[default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"indStorno"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Double"})}),(0,t.jsx)(i.td,{children:"MG2E_INDSTORNO - Facolt\xe0 di storno<br><ul><li><i>0</i> - Nessuno</li><li><i>1</i> - Facolt\xe0 di storno dopo la scadenza (D+5)</li><li><i>2</i> - Facolt\xe0 di storno alla scadenza</li><li><i>3</i> - Nessuna facolt\xe0 di storno per contestazione</li><li><i>4</i> - Nessuna facolt\xe0 di storno per la banca domiciliataria</li><li><i>8</i> - Esiste diritto al rimborso (D+8 settimane)</li><li><i>9</i> - Nessuna facolt\xe0 di storno per le caratteristiche del mandato</li></ul>"}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"indTipoinc"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Integer"})}),(0,t.jsx)(i.td,{children:"MG2E_INDTIPOINC - Tipo seq. incasso<br><ul><li><i>0</i> - First</li><li><i>1</i> - Recurrent</li><li><i>2</i> - Final</li><li><i>3</i> - One-Off</li></ul>"}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"indTiposdd"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Double"})}),(0,t.jsx)(i.td,{children:"MG2E_INDTIPOSDD - Tipo SDD<br><ul><li><i>0</i> - Core</li><li><i>1</i> - B2B</li></ul>"}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"ridiban"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"String"})}),(0,t.jsx)(i.td,{children:"MG2E_RIDIBAN - IBAN"}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"soggtitibanCg16"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Integer"})}),(0,t.jsx)(i.td,{children:"MG2E_SOGGTITIBAN_CG16 - Sogg. titolare IBAN"}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"tipologia"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"Double"})}),(0,t.jsx)(i.td,{children:"MG2E_TIPOLOGIA - Tipologia<br><ul><li><i>1</i> - Consumatore</li><li><i>2</i> - Non Consumatore</li><li><i>3</i> - Microimpresa</li></ul>"}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"extensionData"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/develop/docs/reference/Finance/docs/Models/StringObjectKeyValuePair",children:(0,t.jsx)(i.strong,{children:"List"})})}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.strong,{children:"additionalData"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/develop/docs/reference/Finance/docs/Models/AnyType",children:(0,t.jsx)(i.strong,{children:"Map"})})}),(0,t.jsx)(i.td,{}),(0,t.jsx)(i.td,{children:"[optional] [default to null]"})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/develop/docs/reference/Finance/docs/#documentation-for-models",children:"[Back to Model list]"})," ",(0,t.jsx)(i.a,{href:"/develop/docs/reference/Finance/docs/#documentation-for-api-endpoints",children:"[Back to API list]"})," ",(0,t.jsx)(i.a,{href:"/develop/docs/reference/Finance/docs/",children:"[Back to README]"})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>l});var d=n(96540);const t={},r=d.createContext(t);function s(e){const i=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(r.Provider,{value:i},e.children)}}}]);