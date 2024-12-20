"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[52537],{67754:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"reference/Magazzino/docs/Models/SubTypeCODTO","title":"SubTypeCODTO","description":"Properties","source":"@site/docs/reference/Magazzino/docs/Models/SubTypeCODTO.md","sourceDirName":"reference/Magazzino/docs/Models","slug":"/reference/Magazzino/docs/Models/SubTypeCODTO","permalink":"/develop/docs/1.0.1/reference/Magazzino/docs/Models/SubTypeCODTO","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/Magazzino/docs/Models/SubTypeCODTO.md","tags":[],"version":"current","lastUpdatedAt":1734533964000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"SubCategoryCODTO","permalink":"/develop/docs/1.0.1/reference/Magazzino/docs/Models/SubCategoryCODTO"},"next":{"title":"TestoFissoMGDTO","permalink":"/develop/docs/1.0.1/reference/Magazzino/docs/Models/TestoFissoMGDTO"}}');var s=t(74848),l=t(28453);const r={},d="SubTypeCODTO",o={},c=[{value:"Properties",id:"properties",level:2}];function a(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"subtypecodto",children:"SubTypeCODTO"})}),"\n",(0,s.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Name"}),(0,s.jsx)(i.th,{children:"Type"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Notes"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"codiceCg07"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Double"})}),(0,s.jsx)(i.td,{children:"CG64_CODICE_CG07 - Nazione di incasso"}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"codPaguc"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"String"})}),(0,s.jsx)(i.td,{children:"CG64_CODPAGUC - Codice pagamento estero"}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"codStipoeff"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Double"})}),(0,s.jsx)(i.td,{children:"CG64_CODSTIPOEFF - Sottotipo effetto"}),(0,s.jsx)(i.td,{children:"[default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"descstipo"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"String"})}),(0,s.jsx)(i.td,{children:"CG64_DESCSTIPO - Descrizione sottotipo effetto"}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"flgAssegno"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Integer"})}),(0,s.jsx)(i.td,{children:"CG64_FLGASSEGNO - Assegno"}),(0,s.jsx)(i.td,{children:"[default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"ggoffset"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Double"})}),(0,s.jsx)(i.td,{children:"CG64_GGOFFSET - Giorni spostamento scadenza"}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"id"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Long"})}),(0,s.jsx)(i.td,{children:"CG64_ID - ID (Required only in PUT/PATCH)"}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"indModfatturapa"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Integer"})}),(0,s.jsx)(i.td,{children:"CG64_INDMODFATTURAPA - Modalit\xe0 fattura elettronica<br><ul><li><i>0</i> - Nessuna</li><li><i>10</i> - Contanti</li><li><i>2</i> - Assegno</li><li><i>3</i> - Assegno circolare</li><li><i>1</i> - Contanti presso tesoreria</li><li><i>4</i> - Vaglia cambiario</li><li><i>5</i> - Bollettino bancario</li><li><i>6</i> - Quietanza erario</li><li><i>7</i> - Giroconto su conti di contabilit\xe0 speciale</li><li><i>8</i> - Domiciliazione bancaria</li><li><i>9</i> - Domiciliazione postale</li><li><i>11</i> - Trattenuta su somme gi\xe0 riscosse</li><li><i>12</i> - PagoPa</li></ul>"}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"rowversion"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"byte[]"})}),(0,s.jsx)(i.td,{children:"CG64_ROWVERSION - RowVersion"}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"tipoeff"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"Double"})}),(0,s.jsx)(i.td,{children:"CG64_TIPOEFF - Tipo scadenza<br><ul><li><i>0</i> - Tutti</li><li><i>1</i> - Contanti</li><li><i>2</i> - Ricevuta bancaria</li><li><i>3</i> - Tratta</li><li><i>4</i> - Tratta accettata</li><li><i>5</i> - Cessione</li><li><i>6</i> - Cambiale</li><li><i>7</i> - Carta di credito</li><li><i>8</i> - Bancomat</li><li><i>9</i> - Contrassegno</li><li><i>10</i> - Lettera di credito</li><li><i>11</i> - RID</li><li><i>12</i> - Leasing</li><li><i>13</i> - Rimessa diretta</li><li><i>14</i> - Bonifico</li><li><i>15</i> - C/C postale</li><li><i>16</i> - MAV</li></ul>"}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"foreignPaymentCodeCO"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/develop/docs/1.0.1/reference/Magazzino/docs/Models/ForeignPaymentCodeCODTO",children:(0,s.jsx)(i.strong,{children:"ForeignPaymentCodeCODTO"})})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"nationCO"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/develop/docs/1.0.1/reference/Magazzino/docs/Models/NationCODTO",children:(0,s.jsx)(i.strong,{children:"NationCODTO"})})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"extensionData"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/develop/docs/1.0.1/reference/Magazzino/docs/Models/StringObjectKeyValuePair",children:(0,s.jsx)(i.strong,{children:"List"})})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.strong,{children:"additionalData"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.a,{href:"/develop/docs/1.0.1/reference/Magazzino/docs/Models/AnyType",children:(0,s.jsx)(i.strong,{children:"Map"})})}),(0,s.jsx)(i.td,{}),(0,s.jsx)(i.td,{children:"[optional] [default to null]"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.a,{href:"/develop/docs/1.0.1/reference/Magazzino/docs/#documentation-for-models",children:"[Back to Model list]"})," ",(0,s.jsx)(i.a,{href:"/develop/docs/1.0.1/reference/Magazzino/docs/#documentation-for-api-endpoints",children:"[Back to API list]"})," ",(0,s.jsx)(i.a,{href:"/develop/docs/1.0.1/reference/Magazzino/docs/",children:"[Back to README]"})]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>d});var n=t(96540);const s={},l=n.createContext(s);function r(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);