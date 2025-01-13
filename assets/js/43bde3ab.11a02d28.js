"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[423],{61890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"reference/Common/docs/Apis/IELayoutCOApi","title":"IELayoutCOApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Common/docs/Apis/IELayoutCOApi.md","sourceDirName":"reference/Common/docs/Apis","slug":"/reference/Common/docs/Apis/IELayoutCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/IELayoutCOApi","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/reference/Common/docs/Apis/IELayoutCOApi.md","tags":[],"version":"1.0.1","lastUpdatedAt":1735903812000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"GeneralMasterDataCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/GeneralMasterDataCOApi"},"next":{"title":"IEServiceCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/IEServiceCOApi"}}');var s=n(74848),d=n(28453);const i={},l="IELayoutCOApi",o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"ielayoutcoapi",children:"IELayoutCOApi"})}),"\n",(0,s.jsxs)(t.p,{children:["All URIs are relative to ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"HTTP request"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/Apis/IELayoutCOApi#api.IELayoutCOIdGet",children:(0,s.jsx)(t.strong,{children:"api.IELayoutCOIdGet"})})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"GET"})," /api/v1/production/CO/IELayoutCO/0"]}),(0,s.jsx)(t.td,{children:"Get by ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/Apis/IELayoutCOApi#api.IELayoutCOReadPost",children:(0,s.jsx)(t.strong,{children:"api.IELayoutCOReadPost"})})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"POST"})," /api/v1/production/CO/IELayoutCO/read"]}),(0,s.jsx)(t.td,{children:"Read"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/Apis/IELayoutCOApi#api.IELayoutCOSearchPost",children:(0,s.jsx)(t.strong,{children:"api.IELayoutCOSearchPost"})})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"POST"})," /api/v1/production/CO/IELayoutCO/search"]}),(0,s.jsx)(t.td,{children:"Search"})]})]})]}),"\n",(0,s.jsx)("a",{name:"api.IELayoutCOIdGet"}),"\n",(0,s.jsx)(t.h1,{id:"apiielayoutcoidget",children:(0,s.jsx)(t.strong,{children:"api.IELayoutCOIdGet"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"IELayoutCODTO api.IELayoutCOIdGet(id, environment, CodStructureType, Authorization-Scope, dlevel, dlevelkey, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Get by ID"}),"\n",(0,s.jsx)(t.p,{children:"Get an object of type corresponding the requested id"}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"id"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Id to get the object"}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"environment"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"CodStructureType"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"CodStructureType Mandatory to execute current action"}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"dlevel"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Serialization level"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"dlevelkey"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Serialization level key"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"company"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Company code"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"user"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Accept-Language"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Example for multilanguage"}),(0,s.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/Models/IELayoutCODTO",children:(0,s.jsx)(t.strong,{children:"IELayoutCODTO"})})}),"\n",(0,s.jsx)(t.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(t.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Content-Type"}),": Not defined"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"api.IELayoutCOReadPost"}),"\n",(0,s.jsx)(t.h1,{id:"apiielayoutcoreadpost",children:(0,s.jsx)(t.strong,{children:"api.IELayoutCOReadPost"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"IELayoutCODTO api.IELayoutCOReadPost(environment, CodStructureType, Authorization-Scope, SearchElementDTO, dlevel, dlevelkey, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Read"}),"\n",(0,s.jsx)(t.p,{children:"Read among object of type"}),"\n",(0,s.jsx)(t.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"environment"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"CodStructureType"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"CodStructureType Mandatory to execute current action"}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"SearchElementDTO"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/Models/SearchElementDTO",children:(0,s.jsx)(t.strong,{children:"List"})})}),(0,s.jsx)(t.td,{children:"Search criteria to apply"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"dlevel"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Serialization level"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"dlevelkey"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Serialization level key"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"company"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Company code"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"user"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Accept-Language"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Example for multilanguage"}),(0,s.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"return-type-1",children:"Return type"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/Models/IELayoutCODTO",children:(0,s.jsx)(t.strong,{children:"IELayoutCODTO"})})}),"\n",(0,s.jsx)(t.h3,{id:"authorization-1",children:"Authorization"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(t.h3,{id:"http-request-headers-1",children:"HTTP request headers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"api.IELayoutCOSearchPost"}),"\n",(0,s.jsx)(t.h1,{id:"apiielayoutcosearchpost",children:(0,s.jsx)(t.strong,{children:"api.IELayoutCOSearchPost"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"IELayoutCODTO api.IELayoutCOSearchPost(environment, Authorization-Scope, SearchDTO, loadEntireDomain, getTotalCount, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Search"}),"\n",(0,s.jsx)(t.p,{children:"Search among object of type"}),"\n",(0,s.jsx)(t.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"environment"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"SearchDTO"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/Models/SearchDTO",children:(0,s.jsx)(t.strong,{children:"SearchDTO"})})}),(0,s.jsx)(t.td,{children:"Search criteria to apply"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"loadEntireDomain"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"getTotalCount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Specify 'getTotalCount=true' if you want the total number of elements"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"company"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Company code"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"user"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Accept-Language"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Example for multilanguage"}),(0,s.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"return-type-2",children:"Return type"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/Models/IELayoutCODTO",children:(0,s.jsx)(t.strong,{children:"IELayoutCODTO"})})}),"\n",(0,s.jsx)(t.h3,{id:"authorization-2",children:"Authorization"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(t.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(t.h3,{id:"http-request-headers-2",children:"HTTP request headers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(96540);const s={},d=r.createContext(s);function i(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);