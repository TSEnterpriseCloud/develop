"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[68190],{36151:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"stepbystep/common-terms","title":"Common Terms","description":"Most common terms list","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/stepbystep/common-terms.md","sourceDirName":"stepbystep","slug":"/stepbystep/common-terms","permalink":"/it/docs/1.0.1/stepbystep/common-terms","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"basics","permalink":"/it/docs/1.0.1/tags/basics"},{"inline":true,"label":"terms","permalink":"/it/docs/1.0.1/tags/terms"},{"inline":true,"label":"concepts","permalink":"/it/docs/1.0.1/tags/concepts"}],"version":"current","lastUpdatedAt":1740768973000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Common Terms","slug":"common-terms","description":"Most common terms list","tags":["basics","terms","concepts"]},"sidebar":"tutorialSidebar","previous":{"title":"Step by step overview","permalink":"/it/docs/1.0.1/stepbystep/"},"next":{"title":"Company methods","permalink":"/it/docs/1.0.1/stepbystep/company-methods"}}');var i=s(74848),o=s(28453);const a={sidebar_position:1,title:"Common Terms",slug:"common-terms",description:"Most common terms list",tags:["basics","terms","concepts"]},r=void 0,c={},l=[{value:"Common Terms List",id:"common-terms-list",level:2},{value:"URL",id:"url",level:3},{value:"CID",id:"cid",level:3},{value:"APIGateway",id:"apigateway",level:3},{value:"apigwt_base_url",id:"apigwt_base_url",level:3},{value:"webapi_base_url",id:"webapi_base_url",level:3},{value:"Scope",id:"scope",level:3},{value:"ResourceName",id:"resourcename",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"If you are a newbie in the TSE in Cloud world, you will most probably feel overwhelmed by the amount of information that you can find in this documentation."}),"\n",(0,i.jsx)(t.p,{children:"This is why we suggest you get started by learning what we're talking about: we think that you need to get accustomed to the terms used by the TSE in Cloud API as a very first step."}),"\n",(0,i.jsx)(t.h2,{id:"common-terms-list",children:"Common Terms List"}),"\n",(0,i.jsxs)(t.p,{children:["Below you can find a list of the ",(0,i.jsx)(t.strong,{children:"main concepts"})," that you need to know:"]}),"\n",(0,i.jsx)(t.h3,{id:"url",children:"URL"}),"\n",(0,i.jsx)(t.p,{children:"It is the URL that you connect to to access the application; it has a structure like"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"[protocol]://[cid].domain\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For example ",(0,i.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})]}),"\n",(0,i.jsx)(t.h3,{id:"cid",children:"CID"}),"\n",(0,i.jsx)(t.p,{children:"Customer identification is assigned uniquely to a customer"}),"\n",(0,i.jsx)(t.p,{children:"For example csdemo"}),"\n",(0,i.jsx)(t.h3,{id:"apigateway",children:"APIGateway"}),"\n",(0,i.jsx)(t.p,{children:"An API gateway is the gatekeeper for access to APIs, which protects and manages traffic between API consumers and applications that expose those APIs. Adopting an API gateway provides several benefits by ensuring:"}),"\n",(0,i.jsx)(t.p,{children:"authentication and authorization,\nrouting to backends,\nrate limiting to avoid overloading systems and protecting against DDoS attacks,\noffloading SSL / TLS traffic to improve performance and handling errors or exceptions,\ntracking and monitoring access to resources.\nTSE APIs intended for integration are exposed downstream of the Teamsystem PaaS API Gateway."}),"\n",(0,i.jsx)(t.h3,{id:"apigwt_base_url",children:"apigwt_base_url"}),"\n",(0,i.jsx)(t.p,{children:"It is the base url for calling services; it has the form"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"[protocol]://[cid].APIGatewayDomain\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For example: ",(0,i.jsx)(t.a,{href:"https://csdemo.ts-paas.com",children:"https://csdemo.ts-paas.com"})]}),"\n",(0,i.jsx)(t.h3,{id:"webapi_base_url",children:"webapi_base_url"}),"\n",(0,i.jsx)(t.p,{children:"webapi_base_url: https://[apigwt_base_url]/api"}),"\n",(0,i.jsxs)(t.p,{children:["it is the rootpath that will be referred to below with webapi_base_url, unless otherwise indicated, it is usually composed of api+CID.domain,\nfor example: ",(0,i.jsx)(t.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})]}),"\n",(0,i.jsx)(t.h3,{id:"scope",children:"Scope"}),"\n",(0,i.jsx)(t.p,{children:"Also referred to as [environment] or [environment] represents the set of data to which you have access; although other configurations are possible in Teamsystem Enterprise Cloud, each installation has access to only one environment."}),"\n",(0,i.jsx)(t.h3,{id:"resourcename",children:"ResourceName"}),"\n",(0,i.jsx)(t.p,{children:"It is the REST resource name assigned to the application entity; it is used in the rest call."}),"\n",(0,i.jsx)(t.p,{children:"For example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"{{webapi_base_url}}/api/v1/{{scope}}/CO/CustomerSupplierCo/search?company=2\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);