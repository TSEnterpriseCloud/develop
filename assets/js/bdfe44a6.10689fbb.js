"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[7651],{36283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"reference/Production/docs/Apis/ItemPDApi","title":"ItemPDApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Production/docs/Apis/ItemPDApi.md","sourceDirName":"reference/Production/docs/Apis","slug":"/reference/Production/docs/Apis/ItemPDApi","permalink":"/develop/docs/reference/Production/docs/Apis/ItemPDApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1739966023000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"DipendentePDApi","permalink":"/develop/docs/reference/Production/docs/Apis/DipendentePDApi"},"next":{"title":"MachinePDApi","permalink":"/develop/docs/reference/Production/docs/Apis/MachinePDApi"}}');var s=n(74848),i=n(28453);const d={},c="ItemPDApi",o={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"itempdapi",children:"ItemPDApi"})}),"\n",(0,s.jsxs)(t.p,{children:["All URIs are relative to ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"HTTP request"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Production/docs/Apis/ItemPDApi#api.ItemPDSearchPost",children:(0,s.jsx)(t.strong,{children:"api.ItemPDSearchPost"})})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"POST"})," /api/v1/production/PD/ItemPD/search"]}),(0,s.jsx)(t.td,{children:"Search"})]})})]}),"\n",(0,s.jsx)("a",{name:"api.ItemPDSearchPost"}),"\n",(0,s.jsx)(t.h1,{id:"apiitempdsearchpost",children:(0,s.jsx)(t.strong,{children:"api.ItemPDSearchPost"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"ItemPDDTO api.ItemPDSearchPost(environment, authorization-scope, SearchDTO, loadEntireDomain, gettotalcount, company, user, accept-language)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Search"}),"\n",(0,s.jsx)(t.p,{children:"Search among object of type"}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"environment"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"authorization-scope"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"SearchDTO"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Production/docs/Models/SearchDTO",children:(0,s.jsx)(t.strong,{children:"SearchDTO"})})}),(0,s.jsx)(t.td,{children:"Search criteria to apply"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"loadEntireDomain"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"gettotalcount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Specify 'gettotalcount=true' if you want the total number of elements"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"company"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Company code"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"user"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"accept-language"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Example for multilanguage"}),(0,s.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"/develop/docs/reference/Production/docs/Models/ItemPDDTO",children:(0,s.jsx)(t.strong,{children:"ItemPDDTO"})})}),"\n",(0,s.jsx)(t.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/develop/docs/reference/Production/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(t.a,{href:"/develop/docs/reference/Production/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(t.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);