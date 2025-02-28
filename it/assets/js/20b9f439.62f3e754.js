"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[98944],{18342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"reference/Infrastructure/docs/Apis/MetadataDTOApi","title":"MetadataDTOApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Infrastructure/docs/Apis/MetadataDTOApi.md","sourceDirName":"reference/Infrastructure/docs/Apis","slug":"/reference/Infrastructure/docs/Apis/MetadataDTOApi","permalink":"/it/docs/reference/Infrastructure/docs/Apis/MetadataDTOApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1740674549000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"LookupApi","permalink":"/it/docs/reference/Infrastructure/docs/Apis/LookupApi"},"next":{"title":"DlevelEntityNameDTO","permalink":"/it/docs/reference/Infrastructure/docs/Models/DlevelEntityNameDTO"}}');var s=n(74848),i=n(28453);const a={},d="MetadataDTOApi",c={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"metadatadtoapi",children:"MetadataDTOApi"})}),"\n",(0,s.jsxs)(t.p,{children:["All URIs are relative to ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"HTTP request"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/Apis/MetadataDTOApi#apiV1EnvironmentFWMetadataDTODtonameGet",children:(0,s.jsx)(t.strong,{children:"apiV1EnvironmentFWMetadataDTODtonameGet"})})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"GET"})," /api/v1/production/FW/MetadataDTO/DtoName"]}),(0,s.jsx)(t.td,{children:"Get application domain metadata"})]})})]}),"\n",(0,s.jsx)("a",{name:"apiV1EnvironmentFWMetadataDTODtonameGet"}),"\n",(0,s.jsx)(t.h1,{id:"apiv1environmentfwmetadatadtodtonameget",children:(0,s.jsx)(t.strong,{children:"apiV1EnvironmentFWMetadataDTODtonameGet"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"ResourceMetaDTO apiV1EnvironmentFWMetadataDTODtonameGet(dtoname, environment, authorization-scope, company, user, accept-language)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Get application domain metadata"}),"\n",(0,s.jsx)(t.p,{children:"Retrieves the application domain metadata for the indicated DTOName"}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"dtoname"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Name of the dtoname for which to retrieve the metadata"}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"environment"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"authorization-scope"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"company"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Company code"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"user"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"accept-language"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Example for multilanguage"}),(0,s.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/Models/ResourceMetaDTO",children:(0,s.jsx)(t.strong,{children:"ResourceMetaDTO"})})}),"\n",(0,s.jsx)(t.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(t.a,{href:"/it/docs/reference/Infrastructure/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(t.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Content-Type"}),": Not defined"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);