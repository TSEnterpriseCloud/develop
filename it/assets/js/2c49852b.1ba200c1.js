"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[37546],{44762:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"reference/Production/docs/Apis/OrderWorkingCyclePDApi","title":"OrderWorkingCyclePDApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Production/docs/Apis/OrderWorkingCyclePDApi.md","sourceDirName":"reference/Production/docs/Apis","slug":"/reference/Production/docs/Apis/OrderWorkingCyclePDApi","permalink":"/develop/it/docs/reference/Production/docs/Apis/OrderWorkingCyclePDApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1739806144000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"OrderProdPDApi","permalink":"/develop/it/docs/reference/Production/docs/Apis/OrderProdPDApi"},"next":{"title":"ProgettoApi","permalink":"/develop/it/docs/reference/Production/docs/Apis/ProgettoApi"}}');var i=t(74848),s=t(28453);const d={},o="OrderWorkingCyclePDApi",c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"orderworkingcyclepdapi",children:"OrderWorkingCyclePDApi"})}),"\n",(0,i.jsxs)(r.p,{children:["All URIs are relative to ",(0,i.jsx)(r.em,{children:(0,i.jsx)(r.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Method"}),(0,i.jsx)(r.th,{children:"HTTP request"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/Apis/OrderWorkingCyclePDApi#api.OrderWorkingCyclePDSearchPost",children:(0,i.jsx)(r.strong,{children:"api.OrderWorkingCyclePDSearchPost"})})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.strong,{children:"POST"})," /api/v1/production/PD/OrderWorkingCyclePD/search"]}),(0,i.jsx)(r.td,{children:"Search"})]})})]}),"\n",(0,i.jsx)("a",{name:"api.OrderWorkingCyclePDSearchPost"}),"\n",(0,i.jsx)(r.h1,{id:"apiorderworkingcyclepdsearchpost",children:(0,i.jsx)(r.strong,{children:"api.OrderWorkingCyclePDSearchPost"})}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsx)(r.p,{children:"OrderWorkingCyclePDDTO api.OrderWorkingCyclePDSearchPost(environment, authorization-scope, SearchDTO, loadEntireDomain, gettotalcount, company, user, accept-language)"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Search"}),"\n",(0,i.jsx)(r.p,{children:"Search among object of type"}),"\n",(0,i.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Notes"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"environment"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"String"})}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"[default to null]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"authorization-scope"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"String"})}),(0,i.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,i.jsx)(r.td,{children:"[default to null]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"SearchDTO"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/Models/SearchDTO",children:(0,i.jsx)(r.strong,{children:"SearchDTO"})})}),(0,i.jsx)(r.td,{children:"Search criteria to apply"}),(0,i.jsx)(r.td,{})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"loadEntireDomain"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"String"})}),(0,i.jsx)(r.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,i.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"gettotalcount"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"String"})}),(0,i.jsx)(r.td,{children:"Specify 'gettotalcount=true' if you want the total number of elements"}),(0,i.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"company"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"String"})}),(0,i.jsx)(r.td,{children:"Company code"}),(0,i.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"user"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"String"})}),(0,i.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,i.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"accept-language"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.strong,{children:"String"})}),(0,i.jsx)(r.td,{children:"Example for multilanguage"}),(0,i.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,i.jsx)(r.h3,{id:"return-type",children:"Return type"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/Models/OrderWorkingCyclePDDTO",children:(0,i.jsx)(r.strong,{children:"OrderWorkingCyclePDDTO"})})}),"\n",(0,i.jsx)(r.h3,{id:"authorization",children:"Authorization"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/#Basic",children:"Basic"}),", ",(0,i.jsx)(r.a,{href:"/develop/it/docs/reference/Production/docs/#Bearer",children:"Bearer"})]}),"\n",(0,i.jsx)(r.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var n=t(96540);const i={},s=n.createContext(i);function d(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);