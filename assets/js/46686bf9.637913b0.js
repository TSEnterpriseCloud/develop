"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[39512],{3344:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"reference/Warehouse/docs/Apis/IEImportWHApi","title":"IEImportWHApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Warehouse/docs/Apis/IEImportWHApi.md","sourceDirName":"reference/Warehouse/docs/Apis","slug":"/reference/Warehouse/docs/Apis/IEImportWHApi","permalink":"/docs/reference/Warehouse/docs/Apis/IEImportWHApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1740674549000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"IEExportWHApi","permalink":"/docs/reference/Warehouse/docs/Apis/IEExportWHApi"},"next":{"title":"ItemAgentWHApi","permalink":"/docs/reference/Warehouse/docs/Apis/ItemAgentWHApi"}}');var n=r(74848),i=r(28453);const o={},d="IEImportWHApi",c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"ieimportwhapi",children:"IEImportWHApi"})}),"\n",(0,n.jsxs)(t.p,{children:["All URIs are relative to ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Method"}),(0,n.jsx)(t.th,{children:"HTTP request"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/Warehouse/docs/Apis/IEImportWHApi#api.IEImportWHItemPost",children:(0,n.jsx)(t.strong,{children:"api.IEImportWHItemPost"})})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:"POST"})," /api/v1/production/WH/IEImportWH/item"]}),(0,n.jsx)(t.td,{children:"Import Items based on the required parameters"})]})})]}),"\n",(0,n.jsx)("a",{name:"api.IEImportWHItemPost"}),"\n",(0,n.jsx)(t.h1,{id:"apiieimportwhitempost",children:(0,n.jsx)(t.strong,{children:"api.IEImportWHItemPost"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"ImportExportResultDTO api.IEImportWHItemPost(environment, authorization-scope, ImportItemWHParameterDTO, company, user, accept-language)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Import Items based on the required parameters"}),"\n",(0,n.jsx)(t.p,{children:"Import Items based on the required parameters"}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Notes"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"environment"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"String"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"[default to null]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"authorization-scope"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"String"})}),(0,n.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,n.jsx)(t.td,{children:"[default to null]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"ImportItemWHParameterDTO"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/Warehouse/docs/Models/ImportItemWHParameterDTO",children:(0,n.jsx)(t.strong,{children:"ImportItemWHParameterDTO"})})}),(0,n.jsx)(t.td,{children:"Import Items parameters"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"company"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"String"})}),(0,n.jsx)(t.td,{children:"Company code"}),(0,n.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"user"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"String"})}),(0,n.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,n.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"accept-language"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"String"})}),(0,n.jsx)(t.td,{children:"Example for multilanguage"}),(0,n.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"return-type",children:"Return type"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/reference/Warehouse/docs/Models/ImportExportResultDTO",children:(0,n.jsx)(t.strong,{children:"ImportExportResultDTO"})})}),"\n",(0,n.jsx)(t.h3,{id:"authorization",children:"Authorization"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/Warehouse/docs/#Basic",children:"Basic"}),", ",(0,n.jsx)(t.a,{href:"/docs/reference/Warehouse/docs/#Bearer",children:"Bearer"})]}),"\n",(0,n.jsx)(t.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>d});var s=r(96540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);