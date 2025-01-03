"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[84553],{8115:(e,s,a)=>{a.r(s),a.d(s,{CenteredText:()=>l,assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"glossary/index","title":"Glossary","description":"Most common terms list","source":"@site/versioned_docs/version-1.0.1/glossary/index.md","sourceDirName":"glossary","slug":"/glossary/common-terms","permalink":"/develop/docs/glossary/common-terms","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/glossary/index.md","tags":[{"inline":true,"label":"basics","permalink":"/develop/docs/tags/basics"},{"inline":true,"label":"terms","permalink":"/develop/docs/tags/terms"},{"inline":true,"label":"concepts","permalink":"/develop/docs/tags/concepts"},{"inline":true,"label":"scope","permalink":"/develop/docs/tags/scope"}],"version":"1.0.1","lastUpdatedAt":1735825293000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Glossary","slug":"common-terms","description":"Most common terms list","tags":["basics","terms","concepts","scope"]},"sidebar":"tutorialSidebar","previous":{"title":"OpenAPI Specification","permalink":"/develop/docs/support/general-knowledge/openapi-specification"}}');var i=a(74848),n=a(28453);const o={sidebar_position:1,title:"Glossary",slug:"common-terms",description:"Most common terms list",tags:["basics","terms","concepts","scope"]},r=void 0,c={},l=({children:e})=>(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"gray"},children:e}),d=[{value:'<i class="fas fa-asterisk"></i> Common Terms List',id:"-common-terms-list",level:2},{value:'<i class="fas fa-globe"></i> Url',id:"-url",level:3},{value:'<i class="fas fa-fingerprint"></i> CID',id:"-cid",level:3},{value:'<i class="fas fa-network-wired"></i> APIGateway',id:"-apigateway",level:3},{value:'<i class="fas fa-globe"></i>  apigwt_base_url',id:"--apigwt_base_url",level:3},{value:'<i class="fas fa-globe"></i>  webapi_base_url',id:"--webapi_base_url",level:3},{value:'<i class="fas fa-compass"></i>  Scope',id:"--scope",level:3},{value:'<i class="fas fa-address-card"></i>  ResourceName',id:"--resourcename",level:3}];function p(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"If you are a newbie in the TSE in Cloud world, you will most probably feel overwhelmed by the amount of information that you can find in this documentation."}),"\n",(0,i.jsx)(s.p,{children:"This is why we suggest you get started by learning what we're talking about: we think that you need to get accustomed to the terms used by the TSE in Cloud API as a very first step."}),"\n",(0,i.jsxs)(s.h2,{id:"-common-terms-list",children:[(0,i.jsx)("i",{class:"fas fa-asterisk"})," Common Terms List"]}),"\n",(0,i.jsxs)(s.p,{children:["Below you can find a list of the ",(0,i.jsx)(s.strong,{children:"main concepts"})," that you need to know:"]}),"\n",(0,i.jsxs)(s.h3,{id:"-url",children:[(0,i.jsx)("i",{class:"fas fa-globe"})," Url"]}),"\n",(0,i.jsx)(s.p,{children:"It is the URL that you connect to to access the application; it has a structure like"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-http",children:"[protocol]://[cid].domain\n"})}),"\n",(0,i.jsxs)(s.p,{children:["For example ",(0,i.jsx)(s.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})]}),"\n",(0,i.jsxs)(s.h3,{id:"-cid",children:[(0,i.jsx)("i",{class:"fas fa-fingerprint"})," CID"]}),"\n",(0,i.jsx)(s.p,{children:"Customer identification is assigned uniquely to a customer"}),"\n",(0,i.jsxs)(s.p,{children:["For example ",(0,i.jsx)(s.code,{children:"csdemo"})]}),"\n",(0,i.jsxs)(s.h3,{id:"-apigateway",children:[(0,i.jsx)("i",{class:"fas fa-network-wired"})," APIGateway"]}),"\n",(0,i.jsx)(s.p,{children:"An API gateway is the gatekeeper for access to APIs, which protects and manages traffic between API consumers and applications that expose those APIs. Adopting an API gateway provides several benefits by ensuring:"}),"\n",(0,i.jsx)(s.p,{children:"authentication and authorization,\nrouting to backends,\nrate limiting to avoid overloading systems and protecting against DDoS attacks,\noffloading SSL / TLS traffic to improve performance and handling errors or exceptions,\ntracking and monitoring access to resources.\nTSE APIs intended for integration are exposed downstream of the Teamsystem PaaS API Gateway."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"API Gateway",src:a(36734).A+"",width:"688",height:"465"})}),"\n",(0,i.jsx)(l,{children:(0,i.jsx)(s.p,{children:"Make Your Own API Gateway with Nginx and Proper Auth Validation"})}),"\n",(0,i.jsxs)(s.h3,{id:"--apigwt_base_url",children:[(0,i.jsx)("i",{class:"fas fa-globe"}),"  apigwt_base_url"]}),"\n",(0,i.jsx)(s.p,{children:"It is the base url for calling services; it has the form"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[protocol]://[cid].APIGatewayDomain\n"})}),"\n",(0,i.jsxs)(s.p,{children:["For example: ",(0,i.jsx)(s.a,{href:"https://csdemo.ts-paas.com",children:"https://csdemo.ts-paas.com"})]}),"\n",(0,i.jsxs)(s.h3,{id:"--webapi_base_url",children:[(0,i.jsx)("i",{class:"fas fa-globe"}),"  webapi_base_url"]}),"\n",(0,i.jsx)(s.p,{children:"webapi_base_url: https://[apigwt_base_url]/api"}),"\n",(0,i.jsxs)(s.p,{children:["it is the rootpath that will be referred to below with webapi_base_url, unless otherwise indicated, it is usually composed of api+CID.domain,\nfor example: ",(0,i.jsx)(s.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})]}),"\n",(0,i.jsxs)(s.h3,{id:"--scope",children:[(0,i.jsx)("i",{class:"fas fa-compass"}),"  Scope"]}),"\n",(0,i.jsx)(s.p,{children:"Also referred to as [environment] or [environment] represents the set of data to which you have access; although other configurations are possible in Teamsystem Enterprise Cloud, each installation has access to only one environment."}),"\n",(0,i.jsxs)(s.h3,{id:"--resourcename",children:[(0,i.jsx)("i",{class:"fas fa-address-card"}),"  ResourceName"]}),"\n",(0,i.jsx)(s.p,{children:"It is the REST resource name assigned to the application entity; it is used in the rest call."}),"\n",(0,i.jsx)(s.p,{children:"For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"{{webapi_base_url}}/api/v1/{{scope}}/CO/CustomerSupplierCo/search?company=2\n"})})]})}function m(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},36734:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/Api-gateway-aeb7e792935eb90cdc7c24e679ca07ce.png"},28453:(e,s,a)=>{a.d(s,{R:()=>o,x:()=>r});var t=a(96540);const i={},n=t.createContext(i);function o(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);