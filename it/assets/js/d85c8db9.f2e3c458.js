"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[54032],{23448:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"reference/Common/docs/Apis/IEServiceCOApi","title":"IEServiceCOApi","description":"All URIs are relative to http://localhost","source":"@site/docs/reference/Common/docs/Apis/IEServiceCOApi.md","sourceDirName":"reference/Common/docs/Apis","slug":"/reference/Common/docs/Apis/IEServiceCOApi","permalink":"/develop/it/docs/next/reference/Common/docs/Apis/IEServiceCOApi","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/Common/docs/Apis/IEServiceCOApi.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"IELayoutCOApi","permalink":"/develop/it/docs/next/reference/Common/docs/Apis/IELayoutCOApi"},"next":{"title":"IEStructureSubTypeCOApi","permalink":"/develop/it/docs/next/reference/Common/docs/Apis/IEStructureSubTypeCOApi"}}');var s=r(74848),i=r(28453);const o={},d="IEServiceCOApi",c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"ieservicecoapi",children:"IEServiceCOApi"})}),"\n",(0,s.jsxs)(t.p,{children:["All URIs are relative to ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"http://localhost",children:"http://localhost"})})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"HTTP request"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/develop/it/docs/reference/Common/docs/Apis/IEServiceCOApi#apiV1EnvironmentCOIEServiceCOGuidProcessGet",children:(0,s.jsx)(t.strong,{children:"apiV1EnvironmentCOIEServiceCOGuidProcessGet"})})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"GET"})," /api/v1/development/CO/IEServiceCO/000-000-000-000"]}),(0,s.jsx)(t.td,{children:"Get by Guid Session result of import"})]})})]}),"\n",(0,s.jsx)("a",{name:"apiV1EnvironmentCOIEServiceCOGuidProcessGet"}),"\n",(0,s.jsx)(t.h1,{id:"apiv1environmentcoieservicecoguidprocessget",children:(0,s.jsx)(t.strong,{children:"apiV1EnvironmentCOIEServiceCOGuidProcessGet"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"ImportExportResultDTO apiV1EnvironmentCOIEServiceCOGuidProcessGet(GuidProcess, environment, Authorization-Scope, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Get by Guid Session result of import"}),"\n",(0,s.jsx)(t.p,{children:"Get by Guid Session result of import"}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"GuidProcess"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Guid to get the process import"}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"environment"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"company"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Company code"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"user"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Accept-Language"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Example for multilanguage"}),(0,s.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/develop/it/docs/reference/Common/docs/Models/ImportExportResultDTO",children:(0,s.jsx)(t.strong,{children:"ImportExportResultDTO"})})}),"\n",(0,s.jsx)(t.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/develop/it/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(t.a,{href:"/develop/it/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(t.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Content-Type"}),": Not defined"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>d});var n=r(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);