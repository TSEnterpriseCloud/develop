"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[69232],{2391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"reference/Common/docs/Apis/CSBankCOApi","title":"CSBankCOApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Common/docs/Apis/CSBankCOApi.md","sourceDirName":"reference/Common/docs/Apis","slug":"/reference/Common/docs/Apis/CSBankCOApi","permalink":"/it/docs/reference/Common/docs/Apis/CSBankCOApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1740768973000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"BankCOApi","permalink":"/it/docs/reference/Common/docs/Apis/BankCOApi"},"next":{"title":"CompanyBankCOApi","permalink":"/it/docs/reference/Common/docs/Apis/CompanyBankCOApi"}}');var s=t(74848),i=t(28453);const d={},c="CSBankCOApi",o={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"csbankcoapi",children:"CSBankCOApi"})}),"\n",(0,s.jsxs)(n.p,{children:["All URIs are relative to ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Method"}),(0,s.jsx)(n.th,{children:"HTTP request"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/it/docs/reference/Common/docs/Apis/CSBankCOApi#api.CSBankCOSearchPost",children:(0,s.jsx)(n.strong,{children:"api.CSBankCOSearchPost"})})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"POST"})," /api/v1/production/CO/CSBankCO/search"]}),(0,s.jsx)(n.td,{children:"Search"})]})})]}),"\n",(0,s.jsx)("a",{name:"api.CSBankCOSearchPost"}),"\n",(0,s.jsx)(n.h1,{id:"apicsbankcosearchpost",children:(0,s.jsx)(n.strong,{children:"api.CSBankCOSearchPost"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"CSBankCODTO api.CSBankCOSearchPost(environment, authorization-scope, SearchDTO, loadEntireDomain, gettotalcount, company, user, accept-language)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Search"}),"\n",(0,s.jsx)(n.p,{children:"Search among object of type"}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"environment"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"authorization-scope"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(n.td,{children:"[default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"SearchDTO"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/it/docs/reference/Common/docs/Models/SearchDTO",children:(0,s.jsx)(n.strong,{children:"SearchDTO"})})}),(0,s.jsx)(n.td,{children:"Search criteria to apply"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"loadEntireDomain"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"gettotalcount"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Specify 'gettotalcount=true' if you want the total number of elements"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"company"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Company code"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"user"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"accept-language"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"String"})}),(0,s.jsx)(n.td,{children:"Example for multilanguage"}),(0,s.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/it/docs/reference/Common/docs/Models/CSBankCODTO",children:(0,s.jsx)(n.strong,{children:"CSBankCODTO"})})}),"\n",(0,s.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/it/docs/reference/Common/docs/#Basic",children:"Basic"}),", ",(0,s.jsx)(n.a,{href:"/it/docs/reference/Common/docs/#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(n.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(96540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);