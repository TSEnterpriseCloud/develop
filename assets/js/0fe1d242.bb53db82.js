"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[15059],{61983:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"reference/Common/docs/Apis/IEStructureSubTypeCOApi","title":"IEStructureSubTypeCOApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Common/docs/Apis/IEStructureSubTypeCOApi.md","sourceDirName":"reference/Common/docs/Apis","slug":"/reference/Common/docs/Apis/IEStructureSubTypeCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/IEStructureSubTypeCOApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1738925084000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"IEServiceCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/IEServiceCOApi"},"next":{"title":"IEStructureTypeCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/IEStructureTypeCOApi"}}');var s=t(74848),d=t(28453);const i={},l="IEStructureSubTypeCOApi",c={},o=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"iestructuresubtypecoapi",children:"IEStructureSubTypeCOApi"})}),"\n",(0,s.jsxs)(r.p,{children:["All URIs are relative to ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method"}),(0,s.jsx)(r.th,{children:"HTTP request"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Apis/IEStructureSubTypeCOApi#api.IEStructureSubTypeCOIdGet",children:(0,s.jsx)(r.strong,{children:"api.IEStructureSubTypeCOIdGet"})})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"GET"})," /api/v1/production/CO/IEStructureSubTypeCO/0"]}),(0,s.jsx)(r.td,{children:"Get by ID"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Apis/IEStructureSubTypeCOApi#api.IEStructureSubTypeCOReadPost",children:(0,s.jsx)(r.strong,{children:"api.IEStructureSubTypeCOReadPost"})})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"POST"})," /api/v1/production/CO/IEStructureSubTypeCO/read"]}),(0,s.jsx)(r.td,{children:"Read"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Apis/IEStructureSubTypeCOApi#api.IEStructureSubTypeCOSearchPost",children:(0,s.jsx)(r.strong,{children:"api.IEStructureSubTypeCOSearchPost"})})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"POST"})," /api/v1/production/CO/IEStructureSubTypeCO/search"]}),(0,s.jsx)(r.td,{children:"Search"})]})]})]}),"\n",(0,s.jsx)("a",{name:"api.IEStructureSubTypeCOIdGet"}),"\n",(0,s.jsx)(r.h1,{id:"apiiestructuresubtypecoidget",children:(0,s.jsx)(r.strong,{children:"api.IEStructureSubTypeCOIdGet"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"IEStructureSubTypeCODTO api.IEStructureSubTypeCOIdGet(id, environment, CodStructureType, Authorization-Scope, dlevel, dlevelkey, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Get by ID"}),"\n",(0,s.jsx)(r.p,{children:"Get an object of type corresponding the requested id"}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"id"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Id to get the object"}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"environment"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"CodStructureType"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"CodStructureType Mandatory to execute current action"}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"dlevel"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Serialization level"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"dlevelkey"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Serialization level key"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"company"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Company code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"user"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Accept-Language"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Example for multilanguage"}),(0,s.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/IEStructureSubTypeCODTO",children:(0,s.jsx)(r.strong,{children:"IEStructureSubTypeCODTO"})})}),"\n",(0,s.jsx)(r.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(r.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type"}),": Not defined"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"api.IEStructureSubTypeCOReadPost"}),"\n",(0,s.jsx)(r.h1,{id:"apiiestructuresubtypecoreadpost",children:(0,s.jsx)(r.strong,{children:"api.IEStructureSubTypeCOReadPost"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"IEStructureSubTypeCODTO api.IEStructureSubTypeCOReadPost(environment, CodStructureType, Authorization-Scope, SearchElementDTO, dlevel, dlevelkey, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Read"}),"\n",(0,s.jsx)(r.p,{children:"Read among object of type"}),"\n",(0,s.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"environment"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"CodStructureType"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"CodStructureType Mandatory to execute current action"}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"SearchElementDTO"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/SearchElementDTO",children:(0,s.jsx)(r.strong,{children:"List"})})}),(0,s.jsx)(r.td,{children:"Search criteria to apply"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"dlevel"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Serialization level"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"dlevelkey"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Serialization level key"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"company"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Company code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"user"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Accept-Language"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Example for multilanguage"}),(0,s.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"return-type-1",children:"Return type"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/IEStructureSubTypeCODTO",children:(0,s.jsx)(r.strong,{children:"IEStructureSubTypeCODTO"})})}),"\n",(0,s.jsx)(r.h3,{id:"authorization-1",children:"Authorization"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(r.h3,{id:"http-request-headers-1",children:"HTTP request headers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"api.IEStructureSubTypeCOSearchPost"}),"\n",(0,s.jsx)(r.h1,{id:"apiiestructuresubtypecosearchpost",children:(0,s.jsx)(r.strong,{children:"api.IEStructureSubTypeCOSearchPost"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"IEStructureSubTypeCODTO api.IEStructureSubTypeCOSearchPost(environment, Authorization-Scope, SearchDTO, loadEntireDomain, gettotalcount, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Search"}),"\n",(0,s.jsx)(r.p,{children:"Search among object of type"}),"\n",(0,s.jsx)(r.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"environment"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"SearchDTO"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/SearchDTO",children:(0,s.jsx)(r.strong,{children:"SearchDTO"})})}),(0,s.jsx)(r.td,{children:"Search criteria to apply"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"loadEntireDomain"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"gettotalcount"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Specify 'gettotalcount=true' if you want the total number of elements"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"company"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Company code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"user"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Accept-Language"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Example for multilanguage"}),(0,s.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"return-type-2",children:"Return type"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/Models/IEStructureSubTypeCODTO",children:(0,s.jsx)(r.strong,{children:"IEStructureSubTypeCODTO"})})}),"\n",(0,s.jsx)(r.h3,{id:"authorization-2",children:"Authorization"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(r.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(r.h3,{id:"http-request-headers-2",children:"HTTP request headers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(96540);const s={},d=n.createContext(s);function i(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);