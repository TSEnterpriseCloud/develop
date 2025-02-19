"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[5084],{60219:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"basics/status-code","title":"Status Code *","description":"Codici stato http usati in TSE","source":"@site/versioned_docs/version-1.0.1/basics/status-code.md","sourceDirName":"basics","slug":"/basics/status-code","permalink":"/develop/docs/basics/status-code","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"status","permalink":"/develop/docs/tags/status"},{"inline":true,"label":"http","permalink":"/develop/docs/tags/http"},{"inline":true,"label":"code","permalink":"/develop/docs/tags/code"},{"inline":true,"label":"support","permalink":"/develop/docs/tags/support"},{"inline":true,"label":"200","permalink":"/develop/docs/tags/200"},{"inline":true,"label":"201","permalink":"/develop/docs/tags/201"},{"inline":true,"label":"202","permalink":"/develop/docs/tags/202"},{"inline":true,"label":"400","permalink":"/develop/docs/tags/400"},{"inline":true,"label":"401","permalink":"/develop/docs/tags/401"},{"inline":true,"label":"404","permalink":"/develop/docs/tags/404"},{"inline":true,"label":"405","permalink":"/develop/docs/tags/405"},{"inline":true,"label":"409","permalink":"/develop/docs/tags/409"},{"inline":true,"label":"500","permalink":"/develop/docs/tags/500"}],"version":"1.0.1","lastUpdatedAt":1739806144000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Status Code *","slug":"status-code","description":"Codici stato http usati in TSE","tags":["status","http","code","support","200","201","202","400","401","404","405","409","500"]},"sidebar":"tutorialSidebar","previous":{"title":"[D]elete *","permalink":"/develop/docs/basics/crud/delete"},"next":{"title":"Api Reference","permalink":"/develop/docs/reference/api-root"}}');var n=s(74848),i=s(28453);const o={sidebar_position:2,title:"Status Code *",slug:"status-code",description:"Codici stato http usati in TSE",tags:["status","http","code","support",200,201,202,400,401,404,405,409,500]},a="HTTP Status Codes",d={},l=[{value:"The Five Main Categories of Status Codes",id:"the-five-main-categories-of-status-codes",level:2},{value:"1xx: Informational",id:"1xx-informational",level:3},{value:"2xx: Success",id:"2xx-success",level:3},{value:"3xx: Redirection",id:"3xx-redirection",level:3},{value:"4xx: Client Error",id:"4xx-client-error",level:3},{value:"5xx: Server Error",id:"5xx-server-error",level:3},{value:"TeamSystem Enterprise WebAPI Status Codes",id:"teamsystem-enterprise-webapi-status-codes",level:2},{value:"200: Success",id:"200-success",level:3},{value:"201: Created",id:"201-created",level:3},{value:"202: Accepted",id:"202-accepted",level:3},{value:"400: Bad Request",id:"400-bad-request",level:3},{value:"401: Unauthorized",id:"401-unauthorized",level:3},{value:"403: Forbidden",id:"403-forbidden",level:3},{value:"404: Not found",id:"404-not-found",level:3},{value:"405: Method Not Allowed",id:"405-method-not-allowed",level:3},{value:"409: Conflict",id:"409-conflict",level:3},{value:"500: Internal Server Error",id:"500-internal-server-error",level:3}];function c(e){const t={br:"br",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"http-status-codes",children:"HTTP Status Codes"})}),"\n",(0,n.jsx)(t.p,{children:"In addition to HTTP methods, HTTP status codes of the response are particularly important, as they are used to identify the success or failure of an operation."}),"\n",(0,n.jsx)(t.h2,{id:"the-five-main-categories-of-status-codes",children:"The Five Main Categories of Status Codes"}),"\n",(0,n.jsx)(t.p,{children:"The five main categories of status codes, identified by the first digit of the code, are:"}),"\n",(0,n.jsx)(t.h3,{id:"1xx-informational",children:"1xx: Informational"}),"\n",(0,n.jsx)(t.p,{children:"The server informs the client that the request has been received and the process is ongoing."}),"\n",(0,n.jsx)(t.h3,{id:"2xx-success",children:"2xx: Success"}),"\n",(0,n.jsx)(t.p,{children:"The operation was completed successfully. The server has received, processed, and accepted the client's input, and the user typically sees the requested web page or resource."}),"\n",(0,n.jsx)(t.h3,{id:"3xx-redirection",children:"3xx: Redirection"}),"\n",(0,n.jsx)(t.p,{children:"The server receives the request, but further actions and steps are needed on the client side to complete it correctly, as there are forwards and redirects."}),"\n",(0,n.jsx)(t.h3,{id:"4xx-client-error",children:"4xx: Client Error"}),"\n",(0,n.jsx)(t.p,{children:"This is the first category of errors: the request cannot be completed due to client-side issues, such as incorrect syntax or a removed page. The user sees an automatic HTML page indicating the error."}),"\n",(0,n.jsx)(t.h3,{id:"5xx-server-error",children:"5xx: Server Error"}),"\n",(0,n.jsx)(t.p,{children:"This type of code indicates server-side problems that prevent the successful completion of an apparently valid request. The server error can be temporary or permanent, and the user also receives an HTML page indicating the issue."}),"\n",(0,n.jsx)(t.h2,{id:"teamsystem-enterprise-webapi-status-codes",children:"TeamSystem Enterprise WebAPI Status Codes"}),"\n",(0,n.jsx)(t.p,{children:"The codes managed in standard operations in TSEnterprise WebAPI are:"}),"\n",(0,n.jsx)(t.h3,{id:"200-success",children:"200: Success"}),"\n",(0,n.jsx)(t.p,{children:"Operation successful; this is the standard and most common response in the case of a correctly performed operation"}),"\n",(0,n.jsx)(t.h3,{id:"201-created",children:"201: Created"}),"\n",(0,n.jsx)(t.p,{children:"Resource created; used in the POST method for creating a NEW resource"}),"\n",(0,n.jsx)(t.h3,{id:"202-accepted",children:"202: Accepted"}),"\n",(0,n.jsx)(t.p,{children:"Request accepted; used, for example, when a work job has been successfully scheduled"}),"\n",(0,n.jsx)(t.h3,{id:"400-bad-request",children:"400: Bad Request"}),"\n",(0,n.jsxs)(t.p,{children:["Operation failed; this is the standard and most common response in the case of errors during the execution of",(0,n.jsx)(t.br,{}),"\n","the operation"]}),"\n",(0,n.jsx)(t.h3,{id:"401-unauthorized",children:"401: Unauthorized"}),"\n",(0,n.jsx)(t.p,{children:"Used exclusively in case of authentication errors"}),"\n",(0,n.jsx)(t.h3,{id:"403-forbidden",children:"403: Forbidden"}),"\n",(0,n.jsx)(t.p,{children:"In case of permission/authorization errors (unsatisfied claims)"}),"\n",(0,n.jsx)(t.h3,{id:"404-not-found",children:"404: Not found"}),"\n",(0,n.jsx)(t.p,{children:"If resource is not found (e.g., a GET on a resource specifying a non-existent id)"}),"\n",(0,n.jsx)(t.h3,{id:"405-method-not-allowed",children:"405: Method Not Allowed"}),"\n",(0,n.jsx)(t.p,{children:"In case of unsupported HTTP methods (e.g., a PUT on a resource that only supports read operations)"}),"\n",(0,n.jsx)(t.h3,{id:"409-conflict",children:"409: Conflict"}),"\n",(0,n.jsx)(t.p,{children:"mainly used in two cases:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"to indicate the failure of a \u201cCreate,\u201d \u201cUpdate,\u201d or \u201cDelete\u201d operation due to business logic (e.g., entity validation errors or business warnings)"}),"\n",(0,n.jsx)(t.li,{children:"to indicate an INVALID resource in the \u201cValidate\u201d and \u201cValidateProperties\u201d operations"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"500-internal-server-error",children:"500: Internal Server Error"}),"\n",(0,n.jsx)(t.p,{children:"In case of unhandled errors during the execution of the request"})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var r=s(96540);const n={},i=r.createContext(n);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);