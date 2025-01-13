"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[36993],{9853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"reference/Price/docs/Models/ImportPriceListParameterDTO","title":"ImportPriceListParameterDTO","description":"Properties","source":"@site/docs/reference/Price/docs/Models/ImportPriceListParameterDTO.md","sourceDirName":"reference/Price/docs/Models","slug":"/reference/Price/docs/Models/ImportPriceListParameterDTO","permalink":"/develop/it/docs/1.0.1/reference/Price/docs/Models/ImportPriceListParameterDTO","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/Price/docs/Models/ImportPriceListParameterDTO.md","tags":[],"version":"current","lastUpdatedAt":1735903727000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ImportParameterDTO","permalink":"/develop/it/docs/1.0.1/reference/Price/docs/Models/ImportParameterDTO"},"next":{"title":"PriceParametricLIDTO","permalink":"/develop/it/docs/1.0.1/reference/Price/docs/Models/PriceParametricLIDTO"}}');var s=r(74848),d=r(28453);const n={},l="ImportPriceListParameterDTO",c={},o=[{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"importpricelistparameterdto",children:"ImportPriceListParameterDTO"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"forceTypeInUseOrToExpect"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Force indicator code In Use or Effective<br><ul><li><i>0</i> - From path</li><li><i>1</i> - In use</li><li><i>2</i> - As of</li></ul>"}),(0,s.jsx)(t.td,{children:"[optional] [default to 0]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"insertNewItem"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Boolean"})}),(0,s.jsx)(t.td,{children:"Insert new articles"}),(0,s.jsx)(t.td,{children:"[optional] [default to false]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"updateExistingItem"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Boolean"})}),(0,s.jsx)(t.td,{children:"Update existing articles"}),(0,s.jsx)(t.td,{children:"[optional] [default to false]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"forceBeginDate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Date"})}),(0,s.jsx)(t.td,{children:"Force begin of validity date"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"forceEndDate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Date"})}),(0,s.jsx)(t.td,{children:"Force end of validity date"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"dateUpdate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Date"})}),(0,s.jsx)(t.td,{children:"Force update date"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"updateInsertPriceList"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Boolean"})}),(0,s.jsx)(t.td,{children:"Update or create period price lists"}),(0,s.jsx)(t.td,{children:"[optional] [default to true]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"updatePriceList"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Boolean"})}),(0,s.jsx)(t.td,{children:"Update Price Lists included in the period (Update last update date and flag changed)"}),(0,s.jsx)(t.td,{children:"[optional] [default to true]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"forceTypeUnitOfMeasure"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Force Type Unit of measurement<br><ul><li><i>1</i> - UM1 (All items)</li><li><i>2</i> - UM2 (All items)</li><li><i>3</i> - UM1 (new items only)</li><li><i>4</i> - UM2 (new items only)</li><li><i>5</i> - UMCF (All items) </li><li><i>2</i> - UMCF (new items only)</li></ul>"}),(0,s.jsx)(t.td,{children:"[optional] [default to 1]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"forceCodCurrency"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Force Currency code"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"forceCodCustomerSupplier"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Double"})}),(0,s.jsx)(t.td,{children:"Force Customer/Supplier code"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/develop/it/docs/1.0.1/reference/Price/docs/#documentation-for-models",children:"[Back to Model list]"})," ",(0,s.jsx)(t.a,{href:"/develop/it/docs/1.0.1/reference/Price/docs/#documentation-for-api-endpoints",children:"[Back to API list]"})," ",(0,s.jsx)(t.a,{href:"/develop/it/docs/1.0.1/reference/Price/docs/",children:"[Back to README]"})]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>l});var i=r(96540);const s={},d=i.createContext(s);function n(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);