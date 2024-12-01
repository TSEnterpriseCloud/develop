"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[41769],{34791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"reference/Common/docs/Apis/UMCodeCOApi","title":"UMCodeCOApi","description":"All URIs are relative to http://localhost","source":"@site/docs/reference/Common/docs/Apis/UMCodeCOApi.md","sourceDirName":"reference/Common/docs/Apis","slug":"/reference/Common/docs/Apis/UMCodeCOApi","permalink":"/develop/docs/next/reference/Common/docs/Apis/UMCodeCOApi","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/Common/docs/Apis/UMCodeCOApi.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"SectionalMasterDataCOApi","permalink":"/develop/docs/next/reference/Common/docs/Apis/SectionalMasterDataCOApi"},"next":{"title":"UnitOfMeasureCOApi","permalink":"/develop/docs/next/reference/Common/docs/Apis/UnitOfMeasureCOApi"}}');var s=t(74848),i=t(28453);const o={},d="UMCodeCOApi",c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"umcodecoapi",children:"UMCodeCOApi"})}),"\n",(0,s.jsxs)(n.p,{children:["All URIs are relative to ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"http://localhost",children:"http://localhost"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Method"}),(0,s.jsx)(n.th,{children:"HTTP request"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Apis/UMCodeCOApi#apiV1EnvironmentCOUMCodeCOSearchPost",children:(0,s.jsx)(n.strong,{children:"apiV1EnvironmentCOUMCodeCOSearchPost"})})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"POST"})," /api/v1/development/CO/UMCodeCO/search"]}),(0,s.jsx)(n.td,{children:"Search"})]})})]}),"\n",(0,s.jsx)("a",{name:"apiV1EnvironmentCOUMCodeCOSearchPost"}),"\n",(0,s.jsx)(n.h1,{id:"apiv1environmentcoumcodecosearchpost",children:(0,s.jsx)(n.strong,{children:"apiV1EnvironmentCOUMCodeCOSearchPost"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"UMCodeCODTO apiV1EnvironmentCOUMCodeCOSearchPost(environment, Authorization-Scope, SearchDTO, loadEntireDomain, getTotalCount, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Search"}),"\n",(0,s.jsx)(n.p,{children:"Search among object of type"}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"environment"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"SearchDTO"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Models/SearchDTO",children:(0,s.jsx)(n.strong,{children:"SearchDTO"})})}),(0,s.jsx)(n.td,{children:"Search criteria to apply"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"loadEntireDomain"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"getTotalCount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Specify 'getTotalCount=true' if you want the total number of elements"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"company"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Company code"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"user"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Accept-Language"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Example for multilanguage"}),(0,s.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Models/UMCodeCODTO",children:(0,s.jsx)(n.strong,{children:"UMCodeCODTO"})})}),"\n",(0,s.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(n.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);