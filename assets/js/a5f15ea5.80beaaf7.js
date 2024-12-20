"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[95286],{85665:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"reference/Common/docs/Apis/IEStructureTypeCOApi","title":"IEStructureTypeCOApi","description":"All URIs are relative to http://localhost","source":"@site/versioned_docs/version-1.0.1/reference/Common/docs/Apis/IEStructureTypeCOApi.md","sourceDirName":"reference/Common/docs/Apis","slug":"/reference/Common/docs/Apis/IEStructureTypeCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/IEStructureTypeCOApi","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/reference/Common/docs/Apis/IEStructureTypeCOApi.md","tags":[],"version":"1.0.1","lastUpdatedAt":1734533964000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"IEStructureSubTypeCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/IEStructureSubTypeCOApi"},"next":{"title":"LanguageCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/LanguageCOApi"}}');var s=n(74848),i=n(28453);const d={},l="IEStructureTypeCOApi",c={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"iestructuretypecoapi",children:"IEStructureTypeCOApi"})}),"\n",(0,s.jsxs)(r.p,{children:["All URIs are relative to ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.a,{href:"http://localhost",children:"http://localhost"})})]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method"}),(0,s.jsx)(r.th,{children:"HTTP request"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Apis/IEStructureTypeCOApi#apiV1EnvironmentCOIEStructureTypeCOIdGet",children:(0,s.jsx)(r.strong,{children:"apiV1EnvironmentCOIEStructureTypeCOIdGet"})})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"GET"})," /api/v1/development/CO/IEStructureTypeCO/0"]}),(0,s.jsx)(r.td,{children:"Get by ID"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Apis/IEStructureTypeCOApi#apiV1EnvironmentCOIEStructureTypeCOReadPost",children:(0,s.jsx)(r.strong,{children:"apiV1EnvironmentCOIEStructureTypeCOReadPost"})})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"POST"})," /api/v1/development/CO/IEStructureTypeCO/read"]}),(0,s.jsx)(r.td,{children:"Read"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Apis/IEStructureTypeCOApi#apiV1EnvironmentCOIEStructureTypeCOSearchPost",children:(0,s.jsx)(r.strong,{children:"apiV1EnvironmentCOIEStructureTypeCOSearchPost"})})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"POST"})," /api/v1/development/CO/IEStructureTypeCO/search"]}),(0,s.jsx)(r.td,{children:"Search"})]})]})]}),"\n",(0,s.jsx)("a",{name:"apiV1EnvironmentCOIEStructureTypeCOIdGet"}),"\n",(0,s.jsx)(r.h1,{id:"apiv1environmentcoiestructuretypecoidget",children:(0,s.jsx)(r.strong,{children:"apiV1EnvironmentCOIEStructureTypeCOIdGet"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"IEStructureTypeCODTO apiV1EnvironmentCOIEStructureTypeCOIdGet(id, environment, Authorization-Scope, dlevel, dlevelkey, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Get by ID"}),"\n",(0,s.jsx)(r.p,{children:"Get an object of type corresponding the requested id"}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"id"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Id to get the object"}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"environment"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"dlevel"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Serialization level"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"dlevelkey"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Serialization level key"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"company"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Company code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"user"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Accept-Language"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Example for multilanguage"}),(0,s.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/IEStructureTypeCODTO",children:(0,s.jsx)(r.strong,{children:"IEStructureTypeCODTO"})})}),"\n",(0,s.jsx)(r.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(r.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type"}),": Not defined"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"apiV1EnvironmentCOIEStructureTypeCOReadPost"}),"\n",(0,s.jsx)(r.h1,{id:"apiv1environmentcoiestructuretypecoreadpost",children:(0,s.jsx)(r.strong,{children:"apiV1EnvironmentCOIEStructureTypeCOReadPost"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"IEStructureTypeCODTO apiV1EnvironmentCOIEStructureTypeCOReadPost(environment, Authorization-Scope, SearchElementDTO, dlevel, dlevelkey, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Read"}),"\n",(0,s.jsx)(r.p,{children:"Read among object of type"}),"\n",(0,s.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"environment"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"SearchElementDTO"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/SearchElementDTO",children:(0,s.jsx)(r.strong,{children:"List"})})}),(0,s.jsx)(r.td,{children:"Search criteria to apply"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"dlevel"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Serialization level"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"dlevelkey"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Serialization level key"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"company"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Company code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"user"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Accept-Language"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Example for multilanguage"}),(0,s.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"return-type-1",children:"Return type"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/IEStructureTypeCODTO",children:(0,s.jsx)(r.strong,{children:"IEStructureTypeCODTO"})})}),"\n",(0,s.jsx)(r.h3,{id:"authorization-1",children:"Authorization"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(r.h3,{id:"http-request-headers-1",children:"HTTP request headers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"apiV1EnvironmentCOIEStructureTypeCOSearchPost"}),"\n",(0,s.jsx)(r.h1,{id:"apiv1environmentcoiestructuretypecosearchpost",children:(0,s.jsx)(r.strong,{children:"apiV1EnvironmentCOIEStructureTypeCOSearchPost"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"IEStructureTypeCODTO apiV1EnvironmentCOIEStructureTypeCOSearchPost(environment, Authorization-Scope, SearchDTO, loadEntireDomain, getTotalCount, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Search"}),"\n",(0,s.jsx)(r.p,{children:"Search among object of type"}),"\n",(0,s.jsx)(r.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"environment"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"SearchDTO"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/SearchDTO",children:(0,s.jsx)(r.strong,{children:"SearchDTO"})})}),(0,s.jsx)(r.td,{children:"Search criteria to apply"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"loadEntireDomain"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"getTotalCount"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Specify 'getTotalCount=true' if you want the total number of elements"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"company"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Company code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"user"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Accept-Language"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Example for multilanguage"}),(0,s.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"return-type-2",children:"Return type"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/IEStructureTypeCODTO",children:(0,s.jsx)(r.strong,{children:"IEStructureTypeCODTO"})})}),"\n",(0,s.jsx)(r.h3,{id:"authorization-2",children:"Authorization"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(r.h3,{id:"http-request-headers-2",children:"HTTP request headers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>l});var t=n(96540);const s={},i=t.createContext(s);function d(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);