"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[97078],{1204:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"reference/Warehouse/docs/Models/ItemAgentWHDTO","title":"ItemAgentWHDTO","description":"Properties","source":"@site/versioned_docs/version-1.0.1/reference/Warehouse/docs/Models/ItemAgentWHDTO.md","sourceDirName":"reference/Warehouse/docs/Models","slug":"/reference/Warehouse/docs/Models/ItemAgentWHDTO","permalink":"/develop/it/docs/reference/Warehouse/docs/Models/ItemAgentWHDTO","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1739225591000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"IntragroupStructureCODTO","permalink":"/develop/it/docs/reference/Warehouse/docs/Models/IntragroupStructureCODTO"},"next":{"title":"ItemDescriptionWHDTO","permalink":"/develop/it/docs/reference/Warehouse/docs/Models/ItemDescriptionWHDTO"}}');var r=i(74848),n=i(28453);const s={},d="ItemAgentWHDTO",o={},c=[{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"itemagentwhdto",children:"ItemAgentWHDTO"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Notes"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"codArtMg66"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"String"})}),(0,r.jsx)(t.td,{children:"MG6C_CODART_MG66 - Codice Articolo"}),(0,r.jsx)(t.td,{children:"[default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"idagenteMg17"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Integer"})}),(0,r.jsx)(t.td,{children:"MG6C_IDAGENTE_MG17 - ID Agente"}),(0,r.jsx)(t.td,{children:"[default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"calculateRoyalty"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Integer"})}),(0,r.jsx)(t.td,{children:"MG6C_FLGAGENTEROYALTY - Calcola le royalty per l'agente<br><ul><li><i>0</i> - Si</li><li><i>1</i> - No</li></ul>"}),(0,r.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"dittaCg18"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Double"})}),(0,r.jsx)(t.td,{children:"MG6C_DITTA_CG18 - Ditta"}),(0,r.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"idLp09"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Long"})}),(0,r.jsx)(t.td,{children:"MG6C_ID_LP09 - Tabella priorit\xe0 per listini parametrici"}),(0,r.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"perprov"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Double"})}),(0,r.jsx)(t.td,{children:"MG6C_PERPROV - Percentuale provvigione"}),(0,r.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"regprov"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Integer"})}),(0,r.jsx)(t.td,{children:"MG6C_REGPROV - Regime provvigioni<br><ul><li><i>0</i> - No calcolo provv.</li><li><i>1</i> - % dall'agente</li><li><i>2</i> - % dal cliente</li><li><i>3</i> - % dall'anagrafica articolo</li><li><i>4</i> - % dall'anagrafica articolo/agente</li><li><i>5</i> - % da listino fisso</li><li><i>6</i> - % da listino anag. su cli./for.</li><li><i>7</i> - % da listino fisso e scagl. sc./magg.</li><li><i>8</i> - % da listino utilizzato</li><li><i>9</i> - % da listino utilizzato: solo gest. scagl. di sc./magg.</li><li><i>10</i> - % da listino utilizzato: provv. list. + scagl. di sc./magg.</li><li><i>11</i> - % da tabella composta a due livelli</li><li><i>12</i> - % da tabella composta a tre livelli</li><li><i>13</i> - % da scaglioni di fatturato</li><li><i>14</i> - % da condizioni multiple</li><li><i>15</i> - % da listini parametrici</li></ul>"}),(0,r.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"agentCO"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/develop/it/docs/reference/Warehouse/docs/Models/AgentCODTO",children:(0,r.jsx)(t.strong,{children:"AgentCODTO"})})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"[default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"itemWH"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/develop/it/docs/reference/Warehouse/docs/Models/ItemWHDTO",children:(0,r.jsx)(t.strong,{children:"ItemWHDTO"})})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"[default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"extensionData"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/develop/it/docs/reference/Warehouse/docs/Models/StringObjectKeyValuePair",children:(0,r.jsx)(t.strong,{children:"List"})})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"additionalData"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"AnyType.md",children:(0,r.jsx)(t.strong,{children:"Map"})})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"[optional] [default to null]"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/develop/it/docs/reference/Warehouse/docs/#documentation-for-models",children:"[Back to Model list]"})," ",(0,r.jsx)(t.a,{href:"/develop/it/docs/reference/Warehouse/docs/#documentation-for-api-endpoints",children:"[Back to API list]"})," ",(0,r.jsx)(t.a,{href:"/develop/it/docs/reference/Warehouse/docs/",children:"[Back to README]"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>d});var l=i(96540);const r={},n=l.createContext(r);function s(e){const t=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(n.Provider,{value:t},e.children)}}}]);