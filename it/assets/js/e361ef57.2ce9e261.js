"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[68033],{62855:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"reference/Common/docs/Apis/IEImportCOApi","title":"IEImportCOApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Common/docs/Apis/IEImportCOApi.md","sourceDirName":"reference/Common/docs/Apis","slug":"/reference/Common/docs/Apis/IEImportCOApi","permalink":"/develop/it/docs/reference/Common/docs/Apis/IEImportCOApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1739966695000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"IEExportCOApi","permalink":"/develop/it/docs/reference/Common/docs/Apis/IEExportCOApi"},"next":{"title":"IELayoutCOApi","permalink":"/develop/it/docs/reference/Common/docs/Apis/IELayoutCOApi"}}');var n=t(74848),i=t(28453);const o={},d="IEImportCOApi",l={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function p(e){const r={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"ieimportcoapi",children:"IEImportCOApi"})}),"\n",(0,n.jsxs)(r.p,{children:["All URIs are relative to ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"HTTP request"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Common/docs/Apis/IEImportCOApi#api.IEImportCOCustomersupplierPost",children:(0,n.jsx)(r.strong,{children:"api.IEImportCOCustomersupplierPost"})})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:"POST"})," /api/v1/production/CO/IEImportCO/customersupplier"]}),(0,n.jsx)(r.td,{children:"Import Customers/Suppliers based on the required parameters"})]})})]}),"\n",(0,n.jsx)("a",{name:"api.IEImportCOCustomersupplierPost"}),"\n",(0,n.jsx)(r.h1,{id:"apiieimportcocustomersupplierpost",children:(0,n.jsx)(r.strong,{children:"api.IEImportCOCustomersupplierPost"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"ImportExportResultDTO api.IEImportCOCustomersupplierPost(environment, authorization-scope, ImportCustomerSupplierCOParameterDTO, company, user, accept-language)"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Import Customers/Suppliers based on the required parameters"}),"\n",(0,n.jsx)(r.p,{children:"Import Customers/Suppliers based on the required parameters"}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Notes"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"environment"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"[default to null]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"authorization-scope"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,n.jsx)(r.td,{children:"[default to null]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"ImportCustomerSupplierCOParameterDTO"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Common/docs/Models/ImportCustomerSupplierCOParameterDTO",children:(0,n.jsx)(r.strong,{children:"ImportCustomerSupplierCOParameterDTO"})})}),(0,n.jsx)(r.td,{children:"Import Customers/Suppliers parameters"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"company"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{children:"Company code"}),(0,n.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"user"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,n.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"accept-language"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{children:"Example for multilanguage"}),(0,n.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"return-type",children:"Return type"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Common/docs/Models/ImportExportResultDTO",children:(0,n.jsx)(r.strong,{children:"ImportExportResultDTO"})})}),"\n",(0,n.jsx)(r.h3,{id:"authorization",children:"Authorization"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,n.jsx)(r.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>d});var s=t(96540);const n={},i=s.createContext(n);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);