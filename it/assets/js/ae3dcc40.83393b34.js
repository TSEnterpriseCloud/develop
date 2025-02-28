"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[90114],{8171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"reference/Document/docs/Apis/GiacenzaMGApi","title":"GiacenzaMGApi","description":"All URIs are relative to https://apicsdemo.teamsystem.io","source":"@site/versioned_docs/version-1.0.1/reference/Document/docs/Apis/GiacenzaMGApi.md","sourceDirName":"reference/Document/docs/Apis","slug":"/reference/Document/docs/Apis/GiacenzaMGApi","permalink":"/it/docs/reference/Document/docs/Apis/GiacenzaMGApi","draft":false,"unlisted":false,"tags":[],"version":"1.0.1","lastUpdatedAt":1740732256000,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"DocumentoApi","permalink":"/it/docs/reference/Document/docs/Apis/DocumentoApi"},"next":{"title":"RecipientMGApi","permalink":"/it/docs/reference/Document/docs/Apis/RecipientMGApi"}}');var r=t(74848),s=t(28453);const a={},c="GiacenzaMGApi",l={},d=[{value:"Parameters",id:"parameters",level:3},{value:"Return type",id:"return-type",level:3},{value:"Authorization",id:"authorization",level:3},{value:"HTTP request headers",id:"http-request-headers",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Return type",id:"return-type-1",level:3},{value:"Authorization",id:"authorization-1",level:3},{value:"HTTP request headers",id:"http-request-headers-1",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Return type",id:"return-type-2",level:3},{value:"Authorization",id:"authorization-2",level:3},{value:"HTTP request headers",id:"http-request-headers-2",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"giacenzamgapi",children:"GiacenzaMGApi"})}),"\n",(0,r.jsxs)(n.p,{children:["All URIs are relative to ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.a,{href:"https://apicsdemo.teamsystem.io",children:"https://apicsdemo.teamsystem.io"})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Method"}),(0,r.jsx)(n.th,{children:"HTTP request"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/Apis/GiacenzaMGApi#api.GiacenzaMGDisponibilitaPost",children:(0,r.jsx)(n.strong,{children:"api.GiacenzaMGDisponibilitaPost"})})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"POST"})," /api/v1/production/MG/GiacenzaMG/disponibilita"]}),(0,r.jsx)(n.td,{children:"Calculate stock availability based on the required parameters"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/Apis/GiacenzaMGApi#api.GiacenzaMGRicalcologiacenzaPost",children:(0,r.jsx)(n.strong,{children:"api.GiacenzaMGRicalcologiacenzaPost"})})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"POST"})," /api/v1/production/MG/GiacenzaMG/ricalcologiacenza"]}),(0,r.jsx)(n.td,{children:"Recalculate the stock based on the required parameters"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/Apis/GiacenzaMGApi#api.GiacenzaMGValidatePost",children:(0,r.jsx)(n.strong,{children:"api.GiacenzaMGValidatePost"})})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"POST"})," /api/v1/production/MG/GiacenzaMG/validate"]}),(0,r.jsx)(n.td,{children:"Validate"})]})]})]}),"\n",(0,r.jsx)("a",{name:"api.GiacenzaMGDisponibilitaPost"}),"\n",(0,r.jsx)(n.h1,{id:"apigiacenzamgdisponibilitapost",children:(0,r.jsx)(n.strong,{children:"api.GiacenzaMGDisponibilitaPost"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"api.GiacenzaMGDisponibilitaPost(environment, authorization-scope, CalcolaDisponibilitaParams, company, user, accept-language)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Calculate stock availability based on the required parameters"}),"\n",(0,r.jsx)(n.p,{children:"Calculate stock availability based on the required parameters"}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"environment"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"authorization-scope"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,r.jsx)(n.td,{children:"[default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"CalcolaDisponibilitaParams"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/Models/CalcolaDisponibilitaParams",children:(0,r.jsx)(n.strong,{children:"CalcolaDisponibilitaParams"})})}),(0,r.jsx)(n.td,{children:"Object that contains all the parameters that can affect the stock availability recalculation"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"company"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"Company code"}),(0,r.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"user"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,r.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"accept-language"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"Example for multilanguage"}),(0,r.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"return-type",children:"Return type"}),"\n",(0,r.jsx)(n.p,{children:"null (empty response body)"}),"\n",(0,r.jsx)(n.h3,{id:"authorization",children:"Authorization"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/#Basic",children:"Basic"}),", ",(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/#Bearer",children:"Bearer"})]}),"\n",(0,r.jsx)(n.h3,{id:"http-request-headers",children:"HTTP request headers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Accept"}),": Not defined"]}),"\n"]}),"\n",(0,r.jsx)("a",{name:"api.GiacenzaMGRicalcologiacenzaPost"}),"\n",(0,r.jsx)(n.h1,{id:"apigiacenzamgricalcologiacenzapost",children:(0,r.jsx)(n.strong,{children:"api.GiacenzaMGRicalcologiacenzaPost"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"api.GiacenzaMGRicalcologiacenzaPost(environment, authorization-scope, RicalcoloGiacenzaParams, company, user, accept-language)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Recalculate the stock based on the required parameters"}),"\n",(0,r.jsx)(n.p,{children:"Recalculate the stock based on the required parameters"}),"\n",(0,r.jsx)(n.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"environment"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"authorization-scope"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,r.jsx)(n.td,{children:"[default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"RicalcoloGiacenzaParams"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/Models/RicalcoloGiacenzaParams",children:(0,r.jsx)(n.strong,{children:"RicalcoloGiacenzaParams"})})}),(0,r.jsx)(n.td,{children:"Object that contains all the parameters that can affect the stock recalculation"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"company"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"Company code"}),(0,r.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"user"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,r.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"accept-language"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"Example for multilanguage"}),(0,r.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"return-type-1",children:"Return type"}),"\n",(0,r.jsx)(n.p,{children:"null (empty response body)"}),"\n",(0,r.jsx)(n.h3,{id:"authorization-1",children:"Authorization"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/#Basic",children:"Basic"}),", ",(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/#Bearer",children:"Bearer"})]}),"\n",(0,r.jsx)(n.h3,{id:"http-request-headers-1",children:"HTTP request headers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Accept"}),": Not defined"]}),"\n"]}),"\n",(0,r.jsx)("a",{name:"api.GiacenzaMGValidatePost"}),"\n",(0,r.jsx)(n.h1,{id:"apigiacenzamgvalidatepost",children:(0,r.jsx)(n.strong,{children:"api.GiacenzaMGValidatePost"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"api.GiacenzaMGValidatePost(environment, authorization-scope, GiacenzaMGDTO, company, user, accept-language)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Validate"}),"\n",(0,r.jsx)(n.p,{children:"Validation of object of type"}),"\n",(0,r.jsx)(n.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Notes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"environment"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"[default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"authorization-scope"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"The environment where this operation will be executed. This must match with the environment in the url."}),(0,r.jsx)(n.td,{children:"[default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"GiacenzaMGDTO"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/Models/GiacenzaMGDTO",children:(0,r.jsx)(n.strong,{children:"GiacenzaMGDTO"})})}),(0,r.jsx)(n.td,{children:"Object of type to validate"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"company"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"Company code"}),(0,r.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"user"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"Application user (mandatory if the WebApi user does not have any mapped application user)"}),(0,r.jsx)(n.td,{children:"[optional] [default to null]"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"accept-language"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"String"})}),(0,r.jsx)(n.td,{children:"Example for multilanguage"}),(0,r.jsx)(n.td,{children:"[optional] [default to it-IT] [enum: it-IT, en-GB]"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"return-type-2",children:"Return type"}),"\n",(0,r.jsx)(n.p,{children:"null (empty response body)"}),"\n",(0,r.jsx)(n.h3,{id:"authorization-2",children:"Authorization"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/#Basic",children:"Basic"}),", ",(0,r.jsx)(n.a,{href:"/it/docs/reference/Document/docs/#Bearer",children:"Bearer"})]}),"\n",(0,r.jsx)(n.h3,{id:"http-request-headers-2",children:"HTTP request headers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Content-Type"}),": application/json, application/xml"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Accept"}),": application/json, application/xml"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);