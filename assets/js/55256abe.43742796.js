"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[86774],{69789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"reference/List/docs/Apis/IEImportLIApi","title":"IEImportLIApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/List/docs/Apis/IEImportLIApi.md","sourceDirName":"reference/List/docs/Apis","slug":"/reference/List/docs/Apis/IEImportLIApi","permalink":"/develop/docs/reference/List/docs/Apis/IEImportLIApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1739273683000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Documentation for TSE Cloud - LI","permalink":"/develop/docs/reference/List/docs/"},"next":{"title":"PriceParametricLIApi","permalink":"/develop/docs/reference/List/docs/Apis/PriceParametricLIApi"}}');var i=r(74848),n=r(28453);const d={},o="IEImportLIApi",l={},c=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"ieimportliapi",children:"IEImportLIApi"})}),"\n",(0,i.jsxs)(t.p,{children:["All URIs are relative to ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Method"}),(0,i.jsx)(t.th,{children:"HTTP request"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/develop/docs/reference/List/docs/Apis/IEImportLIApi#api.IEImportLIPricelistPost",children:(0,i.jsx)(t.strong,{children:"api.IEImportLIPricelistPost"})})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.strong,{children:"POST"})," /api/v1/production/LI/IEImportLI/pricelist"]}),(0,i.jsx)(t.td,{children:"Import price lists based on the required parameters"})]})})]}),"\n",(0,i.jsx)("a",{name:"api.IEImportLIPricelistPost"}),"\n",(0,i.jsx)(t.h1,{id:"apiieimportlipricelistpost",children:(0,i.jsx)(t.strong,{children:"api.IEImportLIPricelistPost"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"ImportExportResultDTO api.IEImportLIPricelistPost(environment, authorization-scope, ImportParameterDTO, company, user, accept-language)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Import price lists based on the required parameters"}),"\n",(0,i.jsx)(t.p,{children:"Import price lists based on the required parameters"}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"environment"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"[default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"authorization-scope"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,i.jsx)(t.td,{children:"[default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"ImportParameterDTO"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"/develop/docs/reference/List/docs/Models/ImportParameterDTO",children:(0,i.jsx)(t.strong,{children:"ImportParameterDTO"})})}),(0,i.jsx)(t.td,{children:"Import price list parameters"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"company"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"Company code"}),(0,i.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"user"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,i.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"accept-language"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"String"})}),(0,i.jsx)(t.td,{children:"Example for multilanguage"}),(0,i.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"return-type",children:"Return type"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/develop/docs/reference/List/docs/Models/ImportExportResultDTO",children:(0,i.jsx)(t.strong,{children:"ImportExportResultDTO"})})}),"\n",(0,i.jsx)(t.h3,{id:"authorization",children:"Authorization"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/develop/docs/reference/List/docs/#Basic",children:"Basic"}),", ",(0,i.jsx)(t.a,{href:"/develop/docs/reference/List/docs/#Bearer",children:"Bearer"})]}),"\n",(0,i.jsx)(t.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var s=r(96540);const i={},n=s.createContext(i);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);