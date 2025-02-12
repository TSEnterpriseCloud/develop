"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[45155],{99386:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"reference/List/docs/Apis/PricePriorityLIApi","title":"PricePriorityLIApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/List/docs/Apis/PricePriorityLIApi.md","sourceDirName":"reference/List/docs/Apis","slug":"/reference/List/docs/Apis/PricePriorityLIApi","permalink":"/develop/docs/reference/List/docs/Apis/PricePriorityLIApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1739273496000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"PriceParametricLIApi","permalink":"/develop/docs/reference/List/docs/Apis/PriceParametricLIApi"},"next":{"title":"ImportExportHeadResultDTO","permalink":"/develop/docs/reference/List/docs/Models/ImportExportHeadResultDTO"}}');var s=i(74848),n=i(28453);const c={},d="PricePriorityLIApi",o={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"pricepriorityliapi",children:"PricePriorityLIApi"})}),"\n",(0,s.jsxs)(r.p,{children:["All URIs are relative to ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method"}),(0,s.jsx)(r.th,{children:"HTTP request"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/List/docs/Apis/PricePriorityLIApi#api.PricePriorityLISearchPost",children:(0,s.jsx)(r.strong,{children:"api.PricePriorityLISearchPost"})})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"POST"})," /api/v1/production/LI/PricePriorityLI/search"]}),(0,s.jsx)(r.td,{children:"Search prices based on the required parameters"})]})})]}),"\n",(0,s.jsx)("a",{name:"api.PricePriorityLISearchPost"}),"\n",(0,s.jsx)(r.h1,{id:"apipriceprioritylisearchpost",children:(0,s.jsx)(r.strong,{children:"api.PricePriorityLISearchPost"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"PricePriorityLIDTO api.PricePriorityLISearchPost(environment, authorization-scope, PricePriorityParametersDTO, company, user, accept-language)"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Search prices based on the required parameters"}),"\n",(0,s.jsx)(r.p,{children:"Search prices based on the required parameters"}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"environment"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"authorization-scope"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"PricePriorityParametersDTO"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/List/docs/Models/PricePriorityParametersDTO",children:(0,s.jsx)(r.strong,{children:"PricePriorityParametersDTO"})})}),(0,s.jsx)(r.td,{children:"Price priority parameters"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"company"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Company code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"user"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"accept-language"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Example for multilanguage"}),(0,s.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/List/docs/Models/PricePriorityLIDTO",children:(0,s.jsx)(r.strong,{children:"PricePriorityLIDTO"})})}),"\n",(0,s.jsx)(r.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/develop/docs/reference/List/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(r.a,{href:"/develop/docs/reference/List/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(r.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>c,x:()=>d});var t=i(96540);const s={},n=t.createContext(s);function c(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);