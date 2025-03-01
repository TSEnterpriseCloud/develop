"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[70175],{37841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"reference/Infrastructure/docs/Apis/DlevelLookupApi","title":"DlevelLookupApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Infrastructure/docs/Apis/DlevelLookupApi.md","sourceDirName":"reference/Infrastructure/docs/Apis","slug":"/reference/Infrastructure/docs/Apis/DlevelLookupApi","permalink":"/it/docs/reference/Infrastructure/docs/Apis/DlevelLookupApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1740751425000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Documentation for TSE Cloud - IN","permalink":"/it/docs/reference/Infrastructure/docs/"},"next":{"title":"LookupApi","permalink":"/it/docs/reference/Infrastructure/docs/Apis/LookupApi"}}');var i=n(74848),s=n(28453);const l={},d="DlevelLookupApi",o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dlevellookupapi",children:"DlevelLookupApi"})}),"\n",(0,i.jsxs)(t.p,{children:["All URIs are relative to ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Method"}),(0,i.jsx)(t.th,{children:"HTTP request"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/Apis/DlevelLookupApi#apiV1EnvironmentFWDlevelEntityNameDtonameGet",children:(0,i.jsx)(t.strong,{children:"apiV1EnvironmentFWDlevelEntityNameDtonameGet"})})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"GET"})," /api/v1/production/FW/DlevelEntityName/DtoName"]}),(0,i.jsx)(t.td,{children:"List of internal and external entity names for deserialization (dlevel) of the requested DTO entity"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/Apis/DlevelLookupApi#apiV1EnvironmentFWDlevelKeyDtonameGet",children:(0,i.jsx)(t.strong,{children:"apiV1EnvironmentFWDlevelKeyDtonameGet"})})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"GET"})," /api/v1/production/FW/DlevelKey/DtoName"]}),(0,i.jsx)(t.td,{children:"List of standard dlevelkey names for deserialization of the requested DTO entity"})]})]})]}),"\n",(0,i.jsx)("a",{name:"apiV1EnvironmentFWDlevelEntityNameDtonameGet"}),"\n",(0,i.jsx)(t.h1,{id:"apiv1environmentfwdlevelentitynamedtonameget",children:(0,i.jsx)(t.strong,{children:"apiV1EnvironmentFWDlevelEntityNameDtonameGet"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"DlevelEntityNameDTO apiV1EnvironmentFWDlevelEntityNameDtonameGet(dtoname, environment, authorization-scope, company, user, accept-language)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"List of internal and external entity names for deserialization (dlevel) of the requested DTO entity"}),"\n",(0,i.jsx)(t.p,{children:"Retrieve list of internal and external entity names for deserialization (dlevel) of the requested DTO entity"}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"dtoname"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"[default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"environment"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"[default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"authorization-scope"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,i.jsx)(t.td,{children:"[default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"company"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"Company code"}),(0,i.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"user"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,i.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"accept-language"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"Example for multilanguage"}),(0,i.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"return-type",children:"Return type"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/Models/DlevelEntityNameDTO",children:(0,i.jsx)(t.strong,{children:"DlevelEntityNameDTO"})})}),"\n",(0,i.jsx)(t.h3,{id:"authorization",children:"Authorization"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/#Basic",children:"Basic"}),", ",(0,i.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/#Bearer",children:"Bearer"})]}),"\n",(0,i.jsx)(t.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Content-Type"}),": Not defined"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,i.jsx)("a",{name:"apiV1EnvironmentFWDlevelKeyDtonameGet"}),"\n",(0,i.jsx)(t.h1,{id:"apiv1environmentfwdlevelkeydtonameget",children:(0,i.jsx)(t.strong,{children:"apiV1EnvironmentFWDlevelKeyDtonameGet"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"DlevelKeyDTO apiV1EnvironmentFWDlevelKeyDtonameGet(dtoname, environment, authorization-scope, company, user, accept-language)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"List of standard dlevelkey names for deserialization of the requested DTO entity"}),"\n",(0,i.jsx)(t.p,{children:"Retrieve list of standard dlevelkey names for deserialization of the requested DTO entity"}),"\n",(0,i.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"dtoname"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"[default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"environment"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"[default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"authorization-scope"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,i.jsx)(t.td,{children:"[default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"company"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"Company code"}),(0,i.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"user"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,i.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"accept-language"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"Example for multilanguage"}),(0,i.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"return-type-1",children:"Return type"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/Models/DlevelKeyDTO",children:(0,i.jsx)(t.strong,{children:"DlevelKeyDTO"})})}),"\n",(0,i.jsx)(t.h3,{id:"authorization-1",children:"Authorization"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/#Basic",children:"Basic"}),", ",(0,i.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/#Bearer",children:"Bearer"})]}),"\n",(0,i.jsx)(t.h3,{id:"http-request-headers-1",children:"HTTP request headers"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Content-Type"}),": Not defined"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var r=n(96540);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);