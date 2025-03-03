"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[2755],{26786:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"reference/api-reference","title":"Use the API Reference","description":"Use the API Reference","source":"@site/versioned_docs/version-1.0.1/reference/api-reference.mdx","sourceDirName":"reference","slug":"/reference/api-reference","permalink":"/docs/reference/api-reference","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"api reference","permalink":"/docs/tags/api-reference"},{"inline":true,"label":"test calls","permalink":"/docs/tags/test-calls"}],"version":"1.0.1","lastUpdatedAt":1740768973000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Use the API Reference","slug":"api-reference","description":"Use the API Reference","tags":["api reference","test calls"]},"sidebar":"tutorialSidebar","previous":{"title":"Api Reference","permalink":"/docs/reference/api-root"},"next":{"title":"Common","permalink":"/docs/reference/Common/"}}');var o=s(74848),n=s(28453);function a(e){const t={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["This is a general explanation of how to use our ",(0,o.jsx)(t.strong,{children:"API Reference"})," and make your first steps with our APIs.",(0,o.jsx)(t.br,{}),"\n","We strongly suggest using the API Reference ",(0,o.jsx)(t.em,{children:"before"})," trying to implement it in your code. In this way, you'll learn how a valid request must be built, making it easier to write correct code with our SDKs or an HTTP client."]}),"\n",(0,o.jsx)(t.h2,{id:"lets-do-our-housework-first",children:"Let's do our housework first"}),"\n",(0,o.jsxs)(t.p,{children:["The API Reference's main objective is to show you how the different parts of the API requests must be defined to obtain a proper response. Since our API respects the ",(0,o.jsx)(t.a,{href:"/docs/support/general-knowledge/rest-apis",children:"REST Architectural Style"}),", we suggest you check the dedicated page first if you don't know what we're talking about, and maybe also check out the ",(0,o.jsx)(t.em,{children:"Additional Resources"})," on that page, to discover more about the HTTP protocol."]}),"\n",(0,o.jsxs)(t.p,{children:["Additionally, we suggest you check our pages dedicated to ",(0,o.jsx)(t.a,{href:"/docs/support/general-knowledge/oauth2",children:"OAuth 2.0"})," and the ",(0,o.jsx)(t.a,{href:"/docs/stepbystep/authentication",children:"authentication methods"})," supported by the TSE in Cloud APIs."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"set-the-token",children:"Set the token"}),"\n",(0,o.jsxs)(t.p,{children:["To make test calls using the API Reference you must set an Access Token in the ",(0,o.jsx)(t.a,{href:"/docs/started/howto#-use-personal-token-api-key",children:"dedicated section"}),"."]}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"call-the-method",children:"Call the method"}),"\n",(0,o.jsx)(t.p,{children:"Once the access token has been set you can make all the calls you want according to the scopes you specified when creating the access token."}),"\n",(0,o.jsx)(t.h3,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,o.jsxs)(t.p,{children:["Most of our methods require some ",(0,o.jsx)(t.em,{children:"Path Parameters"}),", e.g. the parameters that must be inserted as part of the URL that must be contacted by the REST call. The parameters marked with ",(0,o.jsx)("span",{style:{color:"red"},children:"*"})," are mandatory but sometimes you can also find optional ones, in most cases the only one required is the ",(0,o.jsx)(t.em,{children:"company_id"}),", if you don't know your company's identifier you can just retrieve it using the ",(0,o.jsx)(t.a,{href:"/docs/stepbystep/company-methods",children:"List User Companies"})," method."]}),"\n",(0,o.jsx)(t.h3,{id:"query-string-parametes",children:"Query String Parametes"}),"\n",(0,o.jsxs)(t.p,{children:["When you are making a GET call you will also have the possibility to set some ",(0,o.jsx)(t.strong,{children:"Query String Parameters"}),". These parameters must be defined at the end of the URL and make it possible to define some additional parameters to the request. Most of these kind of parameters are explained ",(0,o.jsx)(t.a,{href:"/docs/basics/",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"request--response-body",children:"Request & Response Body"}),"\n",(0,o.jsxs)(t.p,{children:["For all our POST or PUT methods, you will always need to set a JSON ",(0,o.jsx)(t.strong,{children:"Request Body"}),", that will contain the core of the request. In every section, you will find a prefilled body example that you must modify to make the request work, plus the ",(0,o.jsx)(t.em,{children:"schema"})," that the request body must respect.\nPlease, keep in mind that in the majority of the cases the examples will not work as-they-are, because they contain some invalid example data that were inserted just to show you the format of the request. The most common examples are the identifiers of the resources related to your account. To obtain a successful response, you must modify these parameters accordingly to what are the resources you own.\nEvery method includes also a ",(0,o.jsx)(t.strong,{children:"Response"})," section, where you'll find an example response in JSON format and the related ",(0,o.jsx)(t.em,{children:"schema"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"When you'll perform the request, the actual response obtained from the server will be shown on the page, so you'll be able to write the proper code to manage the results of your API calls."}),"\n",(0,o.jsxs)(t.p,{children:["Sometimes you will need to expand the field description to get all the information like allowed values in enums, to do it you will only need to click the ",(0,o.jsx)(t.em,{children:"Multi-line description"})," placed at the top of the section.\nThe fields marked with * are mandatory."]}),"\n",(0,o.jsxs)(t.p,{children:["The fields marked with ",(0,o.jsx)("span",{style:{color:"red"},children:"*"})," are mandatory."]})]})}function i(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}const l={sidebar_position:1,title:"Use the API Reference",slug:"api-reference",description:"Use the API Reference",tags:["api reference","test calls"]},c=void 0,h={},d=[{value:"Let&#39;s do our housework first",id:"lets-do-our-housework-first",level:2},{value:"Set the token",id:"set-the-token",level:2},{value:"Call the method",id:"call-the-method",level:2},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Query String Parametes",id:"query-string-parametes",level:3},{value:"Request &amp; Response Body",id:"request--response-body",level:3}];function u(e){return(0,o.jsx)(i,{})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u()}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var r=s(96540);const o={},n=r.createContext(o);function a(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);