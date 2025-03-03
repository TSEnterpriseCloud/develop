"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[53689],{85553:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"reference/Production/docs/Apis/WorkOrderServicePDApi","title":"WorkOrderServicePDApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Production/docs/Apis/WorkOrderServicePDApi.md","sourceDirName":"reference/Production/docs/Apis","slug":"/reference/Production/docs/Apis/WorkOrderServicePDApi","permalink":"/docs/reference/Production/docs/Apis/WorkOrderServicePDApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1740768973000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"RepartoPDApi","permalink":"/docs/reference/Production/docs/Apis/RepartoPDApi"},"next":{"title":"AnagraficaTurnoPDDTO","permalink":"/docs/reference/Production/docs/Models/AnagraficaTurnoPDDTO"}}');var t=n(74848),i=n(28453);const d={},o="WorkOrderServicePDApi",c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3}];function a(r){const e={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"workorderservicepdapi",children:"WorkOrderServicePDApi"})}),"\n",(0,t.jsxs)(e.p,{children:["All URIs are relative to ",(0,t.jsx)(e.em,{children:(0,t.jsx)(e.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Method"}),(0,t.jsx)(e.th,{children:"HTTP request"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/Apis/WorkOrderServicePDApi#api.WorkOrderServicePDSubcontractingWorkOrderProgressPost",children:(0,t.jsx)(e.strong,{children:"api.WorkOrderServicePDSubcontractingWorkOrderProgressPost"})})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"POST"})," /api/v1/production/PD/WorkOrderServicePD/SubcontractingWorkOrderProgress"]}),(0,t.jsx)(e.td,{children:"Subcontracting work order progress quantity"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/Apis/WorkOrderServicePDApi#api.WorkOrderServicePDWorkOrderProgressPost",children:(0,t.jsx)(e.strong,{children:"api.WorkOrderServicePDWorkOrderProgressPost"})})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.strong,{children:"POST"})," /api/v1/production/PD/WorkOrderServicePD/WorkOrderProgress"]}),(0,t.jsx)(e.td,{children:"Work order progress quantity and times"})]})]})]}),"\n",(0,t.jsx)("a",{name:"api.WorkOrderServicePDSubcontractingWorkOrderProgressPost"}),"\n",(0,t.jsx)(e.h1,{id:"apiworkorderservicepdsubcontractingworkorderprogresspost",children:(0,t.jsx)(e.strong,{children:"api.WorkOrderServicePDSubcontractingWorkOrderProgressPost"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"SubcontractingWorkOrderProgressResultPDDTO api.WorkOrderServicePDSubcontractingWorkOrderProgressPost(environment, authorization-scope, SubcontractingWorkOrderProgressParameterPDDTO, company, user, accept-language)"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Subcontracting work order progress quantity"}),"\n",(0,t.jsx)(e.p,{children:"Subcontracting work order quantity progress operations"}),"\n",(0,t.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Name"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Notes"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"environment"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"[default to null]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"authorization-scope"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,t.jsx)(e.td,{children:"[default to null]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"SubcontractingWorkOrderProgressParameterPDDTO"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/Models/SubcontractingWorkOrderProgressParameterPDDTO",children:(0,t.jsx)(e.strong,{children:"SubcontractingWorkOrderProgressParameterPDDTO"})})}),(0,t.jsx)(e.td,{children:"Parameters of the request"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"company"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{children:"Company code"}),(0,t.jsx)(e.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"user"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,t.jsx)(e.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"accept-language"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{children:"Example for multilanguage"}),(0,t.jsx)(e.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"return-type",children:"Return type"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/Models/SubcontractingWorkOrderProgressResultPDDTO",children:(0,t.jsx)(e.strong,{children:"SubcontractingWorkOrderProgressResultPDDTO"})})}),"\n",(0,t.jsx)(e.h3,{id:"authorization",children:"Authorization"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/#Basic",children:"Basic"}),", ",(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/#Bearer",children:"Bearer"})]}),"\n",(0,t.jsx)(e.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,t.jsx)("a",{name:"api.WorkOrderServicePDWorkOrderProgressPost"}),"\n",(0,t.jsx)(e.h1,{id:"apiworkorderservicepdworkorderprogresspost",children:(0,t.jsx)(e.strong,{children:"api.WorkOrderServicePDWorkOrderProgressPost"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"WorkOrderProgressResultPDDTO api.WorkOrderServicePDWorkOrderProgressPost(environment, authorization-scope, WorkOrderProgressParameterPDDTO, company, user, accept-language)"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Work order progress quantity and times"}),"\n",(0,t.jsx)(e.p,{children:"Work order quantity and time progress operations"}),"\n",(0,t.jsx)(e.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Name"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{children:"Notes"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"environment"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{children:"[default to null]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"authorization-scope"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,t.jsx)(e.td,{children:"[default to null]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"WorkOrderProgressParameterPDDTO"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/Models/WorkOrderProgressParameterPDDTO",children:(0,t.jsx)(e.strong,{children:"WorkOrderProgressParameterPDDTO"})})}),(0,t.jsx)(e.td,{children:"Parameters of the request"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"company"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{children:"Company code"}),(0,t.jsx)(e.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"user"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,t.jsx)(e.td,{children:"[optional] [default to null]"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"accept-language"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"String"})}),(0,t.jsx)(e.td,{children:"Example for multilanguage"}),(0,t.jsx)(e.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"return-type-1",children:"Return type"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/Models/WorkOrderProgressResultPDDTO",children:(0,t.jsx)(e.strong,{children:"WorkOrderProgressResultPDDTO"})})}),"\n",(0,t.jsx)(e.h3,{id:"authorization-1",children:"Authorization"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/#Basic",children:"Basic"}),", ",(0,t.jsx)(e.a,{href:"/docs/reference/Production/docs/#Bearer",children:"Bearer"})]}),"\n",(0,t.jsx)(e.h3,{id:"http-request-headers-1",children:"HTTP request headers"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(r={}){const{wrapper:e}={...(0,i.R)(),...r.components};return e?(0,t.jsx)(e,{...r,children:(0,t.jsx)(a,{...r})}):a(r)}},28453:(r,e,n)=>{n.d(e,{R:()=>d,x:()=>o});var s=n(96540);const t={},i=s.createContext(t);function d(r){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function o(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:d(r.components),s.createElement(i.Provider,{value:e},r.children)}}}]);