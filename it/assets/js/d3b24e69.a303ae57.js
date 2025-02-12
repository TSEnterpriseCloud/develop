"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[74650],{33041:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"reference/Common/docs/Apis/RegionCOApi","title":"RegionCOApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Common/docs/Apis/RegionCOApi.md","sourceDirName":"reference/Common/docs/Apis","slug":"/reference/Common/docs/Apis/RegionCOApi","permalink":"/develop/it/docs/reference/Common/docs/Apis/RegionCOApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1739272878000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"ProvinceCOApi","permalink":"/develop/it/docs/reference/Common/docs/Apis/ProvinceCOApi"},"next":{"title":"SectionalMasterDataCOApi","permalink":"/develop/it/docs/reference/Common/docs/Apis/SectionalMasterDataCOApi"}}');var i=r(74848),s=r(28453);const d={},l="RegionCOApi",o={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"regioncoapi",children:"RegionCOApi"})}),"\n",(0,i.jsxs)(n.p,{children:["All URIs are relative to ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Method"}),(0,i.jsx)(n.th,{children:"HTTP request"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/Apis/RegionCOApi#api.RegionCOIdGet",children:(0,i.jsx)(n.strong,{children:"api.RegionCOIdGet"})})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"GET"})," /api/v1/production/CO/RegionCO/0"]}),(0,i.jsx)(n.td,{children:"Get by ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/Apis/RegionCOApi#api.RegionCOReadPost",children:(0,i.jsx)(n.strong,{children:"api.RegionCOReadPost"})})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"POST"})," /api/v1/production/CO/RegionCO/read"]}),(0,i.jsx)(n.td,{children:"Read"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/Apis/RegionCOApi#api.RegionCOSearchPost",children:(0,i.jsx)(n.strong,{children:"api.RegionCOSearchPost"})})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"POST"})," /api/v1/production/CO/RegionCO/search"]}),(0,i.jsx)(n.td,{children:"Search"})]})]})]}),"\n",(0,i.jsx)("a",{name:"api.RegionCOIdGet"}),"\n",(0,i.jsx)(n.h1,{id:"apiregioncoidget",children:(0,i.jsx)(n.strong,{children:"api.RegionCOIdGet"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"RegionCODTO api.RegionCOIdGet(id, environment, authorization-scope, dlevel, dlevelkey, company, user, accept-language)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Get by ID"}),"\n",(0,i.jsx)(n.p,{children:"Get an object of type corresponding the requested id"}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Id to get the object"}),(0,i.jsx)(n.td,{children:"[default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"environment"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"[default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"authorization-scope"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,i.jsx)(n.td,{children:"[default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"dlevel"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Serialization level"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"dlevelkey"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Serialization level key"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"company"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Company code"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"user"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"accept-language"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Example for multilanguage"}),(0,i.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"return-type",children:"Return type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/Models/RegionCODTO",children:(0,i.jsx)(n.strong,{children:"RegionCODTO"})})}),"\n",(0,i.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,i.jsx)(n.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type"}),": Not defined"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,i.jsx)("a",{name:"api.RegionCOReadPost"}),"\n",(0,i.jsx)(n.h1,{id:"apiregioncoreadpost",children:(0,i.jsx)(n.strong,{children:"api.RegionCOReadPost"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"RegionCODTO api.RegionCOReadPost(environment, authorization-scope, SearchElementDTO, dlevel, dlevelkey, company, user, accept-language)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Read"}),"\n",(0,i.jsx)(n.p,{children:"Read among object of type"}),"\n",(0,i.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"environment"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"[default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"authorization-scope"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,i.jsx)(n.td,{children:"[default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"SearchElementDTO"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/Models/SearchElementDTO",children:(0,i.jsx)(n.strong,{children:"List"})})}),(0,i.jsx)(n.td,{children:"Search criteria to apply"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"dlevel"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Serialization level"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"dlevelkey"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Serialization level key"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"company"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Company code"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"user"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"accept-language"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Example for multilanguage"}),(0,i.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"return-type-1",children:"Return type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/Models/RegionCODTO",children:(0,i.jsx)(n.strong,{children:"RegionCODTO"})})}),"\n",(0,i.jsx)(n.h3,{id:"authorization-1",children:"Authorization"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,i.jsx)(n.h3,{id:"http-request-headers-1",children:"HTTP request headers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]}),"\n",(0,i.jsx)("a",{name:"api.RegionCOSearchPost"}),"\n",(0,i.jsx)(n.h1,{id:"apiregioncosearchpost",children:(0,i.jsx)(n.strong,{children:"api.RegionCOSearchPost"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"RegionCODTO api.RegionCOSearchPost(environment, authorization-scope, SearchDTO, loadEntireDomain, gettotalcount, company, user, accept-language)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Search"}),"\n",(0,i.jsx)(n.p,{children:"Search among object of type"}),"\n",(0,i.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Notes"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"environment"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{children:"[default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"authorization-scope"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,i.jsx)(n.td,{children:"[default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"SearchDTO"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/Models/SearchDTO",children:(0,i.jsx)(n.strong,{children:"SearchDTO"})})}),(0,i.jsx)(n.td,{children:"Search criteria to apply"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"loadEntireDomain"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"gettotalcount"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Specify 'gettotalcount=true' if you want the total number of elements"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"company"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Company code"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"user"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,i.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"accept-language"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"String"})}),(0,i.jsx)(n.td,{children:"Example for multilanguage"}),(0,i.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"return-type-2",children:"Return type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/Models/RegionCODTO",children:(0,i.jsx)(n.strong,{children:"RegionCODTO"})})}),"\n",(0,i.jsx)(n.h3,{id:"authorization-2",children:"Authorization"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,i.jsx)(n.a,{href:"/develop/it/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,i.jsx)(n.h3,{id:"http-request-headers-2",children:"HTTP request headers"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var t=r(96540);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);