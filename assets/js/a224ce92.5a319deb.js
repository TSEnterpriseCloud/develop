"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[36993],{9853:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"reference/Price/docs/Models/ImportPriceListParameterDTO","title":"ImportPriceListParameterDTO","description":"Properties","source":"@site/docs/reference/Price/docs/Models/ImportPriceListParameterDTO.md","sourceDirName":"reference/Price/docs/Models","slug":"/reference/Price/docs/Models/ImportPriceListParameterDTO","permalink":"/develop/docs/1.0.1/reference/Price/docs/Models/ImportPriceListParameterDTO","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/Price/docs/Models/ImportPriceListParameterDTO.md","tags":[],"version":"current","lastUpdatedAt":1736854011000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ImportParameterDTO","permalink":"/develop/docs/1.0.1/reference/Price/docs/Models/ImportParameterDTO"},"next":{"title":"PriceParametricLIDTO","permalink":"/develop/docs/1.0.1/reference/Price/docs/Models/PriceParametricLIDTO"}}');var s=t(74848),d=t(28453);const n={},l="ImportPriceListParameterDTO",c={},o=[{value:"Properties",id:"properties",level:2}];function a(e){const r={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"importpricelistparameterdto",children:"ImportPriceListParameterDTO"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"forceTypeInUseOrToExpect"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Force indicator code In Use or Effective<br><ul><li><i>0</i> - From path</li><li><i>1</i> - In use</li><li><i>2</i> - As of</li></ul>"}),(0,s.jsx)(r.td,{children:"[optional] [default to 0]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"insertNewItem"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Boolean"})}),(0,s.jsx)(r.td,{children:"Insert new articles"}),(0,s.jsx)(r.td,{children:"[optional] [default to false]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"updateExistingItem"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Boolean"})}),(0,s.jsx)(r.td,{children:"Update existing articles"}),(0,s.jsx)(r.td,{children:"[optional] [default to false]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"forceBeginDate"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Date"})}),(0,s.jsx)(r.td,{children:"Force begin of validity date"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"forceEndDate"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Date"})}),(0,s.jsx)(r.td,{children:"Force end of validity date"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"dateUpdate"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Date"})}),(0,s.jsx)(r.td,{children:"Force update date"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"updateInsertPriceList"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Boolean"})}),(0,s.jsx)(r.td,{children:"Update or create period price lists"}),(0,s.jsx)(r.td,{children:"[optional] [default to true]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"updatePriceList"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Boolean"})}),(0,s.jsx)(r.td,{children:"Update Price Lists included in the period (Update last update date and flag changed)"}),(0,s.jsx)(r.td,{children:"[optional] [default to true]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"forceTypeUnitOfMeasure"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Force Type Unit of measurement<br><ul><li><i>1</i> - UM1 (All items)</li><li><i>2</i> - UM2 (All items)</li><li><i>3</i> - UM1 (new items only)</li><li><i>4</i> - UM2 (new items only)</li><li><i>5</i> - UMCF (All items) </li><li><i>2</i> - UMCF (new items only)</li></ul>"}),(0,s.jsx)(r.td,{children:"[optional] [default to 1]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"forceCodCurrency"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Force Currency code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"forceCodCustomerSupplier"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Double"})}),(0,s.jsx)(r.td,{children:"Force Customer/Supplier code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]})]})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/develop/docs/1.0.1/reference/Price/docs/#documentation-for-models",children:"[Back to Model list]"})," ",(0,s.jsx)(r.a,{href:"/develop/docs/1.0.1/reference/Price/docs/#documentation-for-api-endpoints",children:"[Back to API list]"})," ",(0,s.jsx)(r.a,{href:"/develop/docs/1.0.1/reference/Price/docs/",children:"[Back to README]"})]})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>l});var i=t(96540);const s={},d=i.createContext(s);function n(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);