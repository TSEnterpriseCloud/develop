"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[423],{33704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"reference/Common/docs/Apis/IELayoutCOApi","title":"IELayoutCOApi","description":"All URIs are relative to http://localhost","source":"@site/versioned_docs/version-1.0.1/reference/Common/docs/Apis/IELayoutCOApi.md","sourceDirName":"reference/Common/docs/Apis","slug":"/reference/Common/docs/Apis/IELayoutCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/IELayoutCOApi","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/reference/Common/docs/Apis/IELayoutCOApi.md","tags":[],"version":"1.0.1","lastUpdatedAt":1734474126000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"GeneralMasterDataCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/GeneralMasterDataCOApi"},"next":{"title":"IEServiceCOApi","permalink":"/develop/docs/reference/Common/docs/Apis/IEServiceCOApi"}}');var s=t(74848),i=t(28453);const d={},l="IELayoutCOApi",o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ielayoutcoapi",children:"IELayoutCOApi"})}),"\n",(0,s.jsxs)(n.p,{children:["All URIs are relative to ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"http://localhost",children:"http://localhost"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Method"}),(0,s.jsx)(n.th,{children:"HTTP request"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Apis/IELayoutCOApi#apiV1EnvironmentCOIELayoutCOIdGet",children:(0,s.jsx)(n.strong,{children:"apiV1EnvironmentCOIELayoutCOIdGet"})})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"GET"})," /api/v1/development/CO/IELayoutCO/0"]}),(0,s.jsx)(n.td,{children:"Get by ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Apis/IELayoutCOApi#apiV1EnvironmentCOIELayoutCOReadPost",children:(0,s.jsx)(n.strong,{children:"apiV1EnvironmentCOIELayoutCOReadPost"})})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"POST"})," /api/v1/development/CO/IELayoutCO/read"]}),(0,s.jsx)(n.td,{children:"Read"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Apis/IELayoutCOApi#apiV1EnvironmentCOIELayoutCOSearchPost",children:(0,s.jsx)(n.strong,{children:"apiV1EnvironmentCOIELayoutCOSearchPost"})})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"POST"})," /api/v1/development/CO/IELayoutCO/search"]}),(0,s.jsx)(n.td,{children:"Search"})]})]})]}),"\n",(0,s.jsx)("a",{name:"apiV1EnvironmentCOIELayoutCOIdGet"}),"\n",(0,s.jsx)(n.h1,{id:"apiv1environmentcoielayoutcoidget",children:(0,s.jsx)(n.strong,{children:"apiV1EnvironmentCOIELayoutCOIdGet"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"IELayoutCODTO apiV1EnvironmentCOIELayoutCOIdGet(id, environment, CodStructureType, Authorization-Scope, dlevel, dlevelkey, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Get by ID"}),"\n",(0,s.jsx)(n.p,{children:"Get an object of type corresponding the requested id"}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"id"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Id to get the object"}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"environment"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"CodStructureType"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"CodStructureType Mandatory to execute current action"}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"dlevel"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Serialization level"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"dlevelkey"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Serialization level key"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"company"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Company code"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"user"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Accept-Language"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Example for multilanguage"}),(0,s.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Models/IELayoutCODTO",children:(0,s.jsx)(n.strong,{children:"IELayoutCODTO"})})}),"\n",(0,s.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(n.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content-Type"}),": Not defined"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"apiV1EnvironmentCOIELayoutCOReadPost"}),"\n",(0,s.jsx)(n.h1,{id:"apiv1environmentcoielayoutcoreadpost",children:(0,s.jsx)(n.strong,{children:"apiV1EnvironmentCOIELayoutCOReadPost"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"IELayoutCODTO apiV1EnvironmentCOIELayoutCOReadPost(environment, CodStructureType, Authorization-Scope, SearchElementDTO, dlevel, dlevelkey, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Read"}),"\n",(0,s.jsx)(n.p,{children:"Read among object of type"}),"\n",(0,s.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"environment"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"CodStructureType"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"CodStructureType Mandatory to execute current action"}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"SearchElementDTO"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Models/SearchElementDTO",children:(0,s.jsx)(n.strong,{children:"List"})})}),(0,s.jsx)(n.td,{children:"Search criteria to apply"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"dlevel"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Serialization level"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"dlevelkey"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Serialization level key"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"company"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Company code"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"user"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Accept-Language"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Example for multilanguage"}),(0,s.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"return-type-1",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Models/IELayoutCODTO",children:(0,s.jsx)(n.strong,{children:"IELayoutCODTO"})})}),"\n",(0,s.jsx)(n.h3,{id:"authorization-1",children:"Authorization"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(n.h3,{id:"http-request-headers-1",children:"HTTP request headers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,s.jsx)("a",{name:"apiV1EnvironmentCOIELayoutCOSearchPost"}),"\n",(0,s.jsx)(n.h1,{id:"apiv1environmentcoielayoutcosearchpost",children:(0,s.jsx)(n.strong,{children:"apiV1EnvironmentCOIELayoutCOSearchPost"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"IELayoutCODTO apiV1EnvironmentCOIELayoutCOSearchPost(environment, Authorization-Scope, SearchDTO, loadEntireDomain, getTotalCount, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Search"}),"\n",(0,s.jsx)(n.p,{children:"Search among object of type"}),"\n",(0,s.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"environment"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"SearchDTO"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Models/SearchDTO",children:(0,s.jsx)(n.strong,{children:"SearchDTO"})})}),(0,s.jsx)(n.td,{children:"Search criteria to apply"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"loadEntireDomain"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"getTotalCount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Specify 'getTotalCount=true' if you want the total number of elements"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"company"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Company code"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"user"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Accept-Language"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Example for multilanguage"}),(0,s.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"return-type-2",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/Models/IELayoutCODTO",children:(0,s.jsx)(n.strong,{children:"IELayoutCODTO"})})}),"\n",(0,s.jsx)(n.h3,{id:"authorization-2",children:"Authorization"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(n.a,{href:"/develop/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(n.h3,{id:"http-request-headers-2",children:"HTTP request headers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);