"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[53689],{85553:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"reference/Production/docs/Apis/WorkOrderServicePDApi","title":"WorkOrderServicePDApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Production/docs/Apis/WorkOrderServicePDApi.md","sourceDirName":"reference/Production/docs/Apis","slug":"/reference/Production/docs/Apis/WorkOrderServicePDApi","permalink":"/develop/it/docs/reference/Production/docs/Apis/WorkOrderServicePDApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1739826855000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"RepartoPDApi","permalink":"/develop/it/docs/reference/Production/docs/Apis/RepartoPDApi"},"next":{"title":"AnagraficaTurnoPDDTO","permalink":"/develop/it/docs/reference/Production/docs/Models/AnagraficaTurnoPDDTO"}}');var n=t(74848),i=t(28453);const d={},o="WorkOrderServicePDApi",c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"workorderservicepdapi",children:"WorkOrderServicePDApi"})}),"\n",(0,n.jsxs)(r.p,{children:["All URIs are relative to ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Method"}),(0,n.jsx)(r.th,{children:"HTTP request"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/Apis/WorkOrderServicePDApi#api.WorkOrderServicePDWorkOrderProgressPost",children:(0,n.jsx)(r.strong,{children:"api.WorkOrderServicePDWorkOrderProgressPost"})})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.strong,{children:"POST"})," /api/v1/production/PD/WorkOrderServicePD/WorkOrderProgress"]}),(0,n.jsx)(r.td,{children:"Work order progress quantity and times"})]})})]}),"\n",(0,n.jsx)("a",{name:"api.WorkOrderServicePDWorkOrderProgressPost"}),"\n",(0,n.jsx)(r.h1,{id:"apiworkorderservicepdworkorderprogresspost",children:(0,n.jsx)(r.strong,{children:"api.WorkOrderServicePDWorkOrderProgressPost"})}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"WorkOrderProgressResultPDDTO api.WorkOrderServicePDWorkOrderProgressPost(environment, authorization-scope, WorkOrderProgressParameterPDDTO, company, user, accept-language)"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Work order progress quantity and times"}),"\n",(0,n.jsx)(r.p,{children:"Work order quantity and time progress operations"}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Notes"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"environment"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"[default to null]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"authorization-scope"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,n.jsx)(r.td,{children:"[default to null]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"WorkOrderProgressParameterPDDTO"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/Models/WorkOrderProgressParameterPDDTO",children:(0,n.jsx)(r.strong,{children:"WorkOrderProgressParameterPDDTO"})})}),(0,n.jsx)(r.td,{children:"Parameters of the request"}),(0,n.jsx)(r.td,{})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"company"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{children:"Company code"}),(0,n.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"user"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,n.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"accept-language"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"String"})}),(0,n.jsx)(r.td,{children:"Example for multilanguage"}),(0,n.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"return-type",children:"Return type"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/Models/WorkOrderProgressResultPDDTO",children:(0,n.jsx)(r.strong,{children:"WorkOrderProgressResultPDDTO"})})}),"\n",(0,n.jsx)(r.h3,{id:"authorization",children:"Authorization"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/#Basic",children:"Basic"}),", ",(0,n.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/#Bearer",children:"Bearer"})]}),"\n",(0,n.jsx)(r.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var s=t(96540);const n={},i=s.createContext(n);function d(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);