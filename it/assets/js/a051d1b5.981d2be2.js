"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[74800],{35552:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"reference/Production/docs/Apis/OrderBomPDApi","title":"OrderBomPDApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Production/docs/Apis/OrderBomPDApi.md","sourceDirName":"reference/Production/docs/Apis","slug":"/reference/Production/docs/Apis/OrderBomPDApi","permalink":"/it/docs/reference/Production/docs/Apis/OrderBomPDApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1740656035000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"MachinePDApi","permalink":"/it/docs/reference/Production/docs/Apis/MachinePDApi"},"next":{"title":"OrderProdPDApi","permalink":"/it/docs/reference/Production/docs/Apis/OrderProdPDApi"}}');var s=t(74848),i=t(28453);const d={},o="OrderBomPDApi",c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function h(e){const r={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"orderbompdapi",children:"OrderBomPDApi"})}),"\n",(0,s.jsxs)(r.p,{children:["All URIs are relative to ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method"}),(0,s.jsx)(r.th,{children:"HTTP request"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/it/docs/reference/Production/docs/Apis/OrderBomPDApi#api.OrderBomPDSearchPost",children:(0,s.jsx)(r.strong,{children:"api.OrderBomPDSearchPost"})})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.strong,{children:"POST"})," /api/v1/production/PD/OrderBomPD/search"]}),(0,s.jsx)(r.td,{children:"Search"})]})})]}),"\n",(0,s.jsx)("a",{name:"api.OrderBomPDSearchPost"}),"\n",(0,s.jsx)(r.h1,{id:"apiorderbompdsearchpost",children:(0,s.jsx)(r.strong,{children:"api.OrderBomPDSearchPost"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsx)(r.p,{children:"OrderBomPDDTO api.OrderBomPDSearchPost(environment, authorization-scope, SearchDTO, loadEntireDomain, gettotalcount, company, user, accept-language)"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Search"}),"\n",(0,s.jsx)(r.p,{children:"Search among object of type"}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Notes"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"environment"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"authorization-scope"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(r.td,{children:"[default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"SearchDTO"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/it/docs/reference/Production/docs/Models/SearchDTO",children:(0,s.jsx)(r.strong,{children:"SearchDTO"})})}),(0,s.jsx)(r.td,{children:"Search criteria to apply"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"loadEntireDomain"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"gettotalcount"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Specify 'gettotalcount=true' if you want the total number of elements"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"company"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Company code"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"user"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(r.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"accept-language"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"String"})}),(0,s.jsx)(r.td,{children:"Example for multilanguage"}),(0,s.jsx)(r.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/it/docs/reference/Production/docs/Models/OrderBomPDDTO",children:(0,s.jsx)(r.strong,{children:"OrderBomPDDTO"})})}),"\n",(0,s.jsx)(r.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/it/docs/reference/Production/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(r.a,{href:"/it/docs/reference/Production/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(r.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>o});var n=t(96540);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);