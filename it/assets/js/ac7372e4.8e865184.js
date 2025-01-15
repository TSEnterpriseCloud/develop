"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[59285],{20103:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"reference/Common/docs/It/TSEnterprise/Sdk/Api/UMCodeCOApi","title":"UMCodeCOApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Common/docs/It/TSEnterprise/Sdk/Api/UMCodeCOApi.md","sourceDirName":"reference/Common/docs/It/TSEnterprise/Sdk/Api","slug":"/reference/Common/docs/It/TSEnterprise/Sdk/Api/UMCodeCOApi","permalink":"/develop/it/docs/reference/Common/docs/It/TSEnterprise/Sdk/Api/UMCodeCOApi","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/reference/Common/docs/It/TSEnterprise/Sdk/Api/UMCodeCOApi.md","tags":[],"version":"1.0.1","lastUpdatedAt":1736854011000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"SectionalMasterDataCOApi","permalink":"/develop/it/docs/reference/Common/docs/It/TSEnterprise/Sdk/Api/SectionalMasterDataCOApi"},"next":{"title":"UnitOfMeasureCOApi","permalink":"/develop/it/docs/reference/Common/docs/It/TSEnterprise/Sdk/Api/UnitOfMeasureCOApi"}}');var s=r(74848),i=r(28453);const d={},o="UMCodeCOApi",c={},l=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3}];function a(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"umcodecoapi",children:"UMCodeCOApi"})}),"\n",(0,s.jsxs)(t.p,{children:["All URIs are relative to ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"HTTP request"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/develop/it/docs/reference/Common/docs/It/TSEnterprise/Sdk/Api/UMCodeCOApi#api.UMCodeCOSearchPost",children:(0,s.jsx)(t.strong,{children:"api.UMCodeCOSearchPost"})})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"POST"})," /api/v1/production/CO/UMCodeCO/search"]}),(0,s.jsx)(t.td,{children:"Search"})]})})]}),"\n",(0,s.jsx)("a",{name:"api.UMCodeCOSearchPost"}),"\n",(0,s.jsx)(t.h1,{id:"apiumcodecosearchpost",children:(0,s.jsx)(t.strong,{children:"api.UMCodeCOSearchPost"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"UMCodeCODTO api.UMCodeCOSearchPost(environment, Authorization-Scope, SearchDTO, loadEntireDomain, getTotalCount, company, user, Accept-Language)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Search"}),"\n",(0,s.jsx)(t.p,{children:"Search among object of type"}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"environment"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Authorization-Scope"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,s.jsx)(t.td,{children:"[default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"SearchDTO"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../It.TSEnterprise.Model/SearchDTO.md",children:(0,s.jsx)(t.strong,{children:"SearchDTO"})})}),(0,s.jsx)(t.td,{children:"Search criteria to apply"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"loadEntireDomain"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Specify 'loadEntireDomain=true' if you want all the aggregate"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"getTotalCount"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Specify 'getTotalCount=true' if you want the total number of elements"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"company"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Company code"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"user"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,s.jsx)(t.td,{children:"[optional] [default to null]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Accept-Language"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"String"})}),(0,s.jsx)(t.td,{children:"Example for multilanguage"}),(0,s.jsx)(t.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"return-type",children:"Return type"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"../It.TSEnterprise.Model/UMCodeCODTO.md",children:(0,s.jsx)(t.strong,{children:"UMCodeCODTO"})})}),"\n",(0,s.jsx)(t.h3,{id:"authorization",children:"Authorization"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"../README.md#Basic",children:"Basic"}),", ",(0,s.jsx)(t.a,{href:"../README.md#Bearer",children:"Bearer"})]}),"\n",(0,s.jsx)(t.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);