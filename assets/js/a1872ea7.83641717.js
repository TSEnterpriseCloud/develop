"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[41993],{86296:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"reference/api-reference","title":"Use the API Reference","description":"Use the API Reference","source":"@site/docs/reference/api-reference.md","sourceDirName":"reference","slug":"/reference/api-reference","permalink":"/develop/docs/1.0.1/reference/api-reference","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"api reference","permalink":"/develop/docs/1.0.1/tags/api-reference"},{"inline":true,"label":"test calls","permalink":"/develop/docs/1.0.1/tags/test-calls"}],"version":"current","lastUpdatedAt":1739453559000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Use the API Reference","slug":"api-reference","description":"Use the API Reference","tags":["api reference","test calls"]},"sidebar":"tutorialSidebar","previous":{"title":"Api Reference","permalink":"/develop/docs/1.0.1/reference/api-root"},"next":{"title":"Examples APIs","permalink":"/develop/docs/1.0.1/reference/examples-apis"}}');var n=s(74848),o=s(28453);const a={sidebar_position:1,title:"Use the API Reference",slug:"api-reference",description:"Use the API Reference",tags:["api reference","test calls"]},i=void 0,l={},d=[{value:"\ud83e\uddf9\xa0 Let&#39;s do our housework first",id:"broom-lets-do-our-housework-first",level:2},{value:"\ud83d\udc6e\xa0 Set the token",id:"policeman-set-the-token",level:2},{value:"\ud83d\udcde\xa0 Call the method",id:"telephone_receiver-call-the-method",level:2},{value:"\ud83d\udee3\xa0 Path Parameters",id:"motorway-path-parameters",level:3},{value:"\ud83d\udd0d\xa0 Query String Parametes",id:"mag-query-string-parametes",level:3},{value:"\ud83d\udcc4\xa0 Request &amp; Response Body",id:"page_facing_up-request--response-body",level:3}];function c(e){const t={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This is a general explanation of how to use our ",(0,n.jsx)(t.strong,{children:"API Reference"})," and make your first steps with our APIs.",(0,n.jsx)(t.br,{}),"\n","We strongly suggest using the API Reference ",(0,n.jsx)(t.em,{children:"before"})," trying to implement it in your code. In this way, you'll learn how a valid request must be built, making it easier to write correct code with our SDKs or an HTTP client."]}),"\n",(0,n.jsxs)(t.h2,{id:"broom-lets-do-our-housework-first",children:["\ud83e\uddf9","\xa0 Let's do our housework first"]}),"\n",(0,n.jsxs)(t.p,{children:["The API Reference's main objective is to show you how the different parts of the API requests must be defined to obtain a proper response. Since our API respects the ",(0,n.jsx)(t.a,{href:"/docs/general-knowledge/rest-apis.md",children:"REST Architectural Style"}),", we suggest you check the dedicated page first if you don't know what we're talking about, and maybe also check out the ",(0,n.jsx)(t.em,{children:"Additional Resources"})," on that page, to discover more about the HTTP protocol."]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, we suggest you check our pages dedicated to ",(0,n.jsx)(t.a,{href:"/docs/general-knowledge/oauth2.md",children:"OAuth 2.0"})," and the ",(0,n.jsx)(t.a,{href:"/docs/basics/authentication.mdx",children:"authentication methods"})," supported by the TSE in Cloud APIs."]}),"\n",(0,n.jsxs)(t.h2,{id:"policeman-set-the-token",children:["\ud83d\udc6e","\xa0 Set the token"]}),"\n",(0,n.jsxs)(t.p,{children:["To make test calls using the API Reference you must set an Access Token in the ",(0,n.jsx)(t.a,{href:"/api-reference#auth",children:"dedicated section"}),", to do so you have two options:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"OAuth (OAuth2AuthenticationCodeFlow)"}),": In this case, you'll perform the ",(0,n.jsx)(t.a,{href:"/docs/authentication/code-flow/",children:"OAuth2.0 Authorization Code Flow"})," directly inside our API reference, without having to write a single line of code beforehand. To use the OAuth2 option, you just have to select the required scopes and insert your app credentials (Client ID and Client Secret); the tool will then redirect you to the TSE in Cloud page and fetch the token for you."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"HTTP Bearer"}),": You can use this option to test a token you retrieved in other ways. For example, you could insert the ",(0,n.jsx)(t.a,{href:"/docs/authentication/manual-authentication.mdx",children:"Manual Token"}),' you obtained from the TSE in Cloud page, or you could try to implement an OAuth2 flow and then test the retrieved token. In this case, you must insert the Access Token directly in the text box. Please, note that the tool will add the "Bearer" prefix for you, so you must not add it.']}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Retrieve token",src:s(12736).A+"#gh-light-mode-only"}),"\n",(0,n.jsx)(t.img,{alt:"Retrieve token",src:s(74993).A+"#gh-dark-mode-only"})]}),"\n",(0,n.jsxs)(t.h2,{id:"telephone_receiver-call-the-method",children:["\ud83d\udcde","\xa0 Call the method"]}),"\n",(0,n.jsx)(t.p,{children:"Once the access token has been set you can make all the calls you want according to the scopes you specified when creating the access token."}),"\n",(0,n.jsx)(t.p,{children:"When you have identified the method you need to accomplish the wanted action, you can just scroll down to the method section and then fill the request as explained in the next paragraphs."}),"\n",(0,n.jsxs)(t.h3,{id:"motorway-path-parameters",children:["\ud83d\udee3","\xa0 Path Parameters"]}),"\n",(0,n.jsxs)(t.p,{children:["Most of our methods require some ",(0,n.jsx)(t.em,{children:"Path Parameters"}),", e.g. the parameters that must be inserted as part of the URL that must be contacted by the REST call. The parameters marked with ",(0,n.jsx)("span",{style:{color:"red"},children:"*"})," are mandatory but sometimes you can also find optional ones, in most cases the only one required is the ",(0,n.jsx)(t.em,{children:"company_id"}),", if you don't know your company's identifier you can just retrieve it using the ",(0,n.jsx)(t.a,{href:"/api-reference#get-/user/companies",children:"List User Companies"})," method."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Path parameters",src:s(45509).A+"#gh-light-mode-only"}),"\n",(0,n.jsx)(t.img,{alt:"Path parameters",src:s(60600).A+"#gh-dark-mode-only"})]}),"\n",(0,n.jsxs)(t.h3,{id:"mag-query-string-parametes",children:["\ud83d\udd0d","\xa0 Query String Parametes"]}),"\n",(0,n.jsxs)(t.p,{children:["When you are making a GET call you will also have the possibility to set some ",(0,n.jsx)(t.strong,{children:"Query String Parameters"}),". These parameters must be defined at the end of the URL and make it possible to define some additional parameters to the request. Most of these kind of parameters are explained ",(0,n.jsx)(t.a,{href:"/docs/basics/additional-capabilities/",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Query parameters",src:s(64934).A+"#gh-light-mode-only"}),"\n",(0,n.jsx)(t.img,{alt:"Query parameters",src:s(83209).A+"#gh-dark-mode-only"})]}),"\n",(0,n.jsxs)(t.h3,{id:"page_facing_up-request--response-body",children:["\ud83d\udcc4","\xa0 Request & Response Body"]}),"\n",(0,n.jsxs)(t.p,{children:["For all our POST or PUT methods, you will always need to set a JSON ",(0,n.jsx)(t.strong,{children:"Request Body"}),", that will contain the core of the request. In every section, you will find a prefilled body example that you must modify to make the request work, plus the ",(0,n.jsx)(t.em,{children:"schema"})," that the request body must respect.\nPlease, keep in mind that in the majority of the cases the examples will not work as-they-are, because they contain some invalid example data that were inserted just to show you the format of the request. The most common examples are the identifiers of the resources related to your account. To obtain a successful response, you must modify these parameters accordingly to what are the resources you own.\nEvery method includes also a ",(0,n.jsx)(t.strong,{children:"Response"})," section, where you'll find an example response in JSON format and the related ",(0,n.jsx)(t.em,{children:"schema"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"When you'll perform the request, the actual response obtained from the server will be shown on the page, so you'll be able to write the proper code to manage the results of your API calls."}),"\n",(0,n.jsxs)(t.p,{children:["Sometimes you will need to expand the field description to get all the information like allowed values in enums, to do it you will only need to click the ",(0,n.jsx)(t.em,{children:"Multi-line description"})," placed at the top of the section.\nThe fields marked with * are mandatory."]}),"\n",(0,n.jsxs)(t.p,{children:["The fields marked with ",(0,n.jsx)("span",{style:{color:"red"},children:"*"})," are mandatory."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Request body",src:s(66092).A+"#gh-light-mode-only"}),"\n",(0,n.jsx)(t.img,{alt:"Request body",src:s(87681).A+"#gh-dark-mode-only"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},45509:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/api-reference-path-parameters-8b48516beb1b61b40619edb8101ab4e1.png"},64934:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/api-reference-query-parameters-029ecadea4fe7f18ea6b4f8b4da79ce1.png"},66092:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/api-reference-request-466a7da6643d063376d704d7abb126e8.png"},12736:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/api-reference-token-5e2eabb8ee359fab712f5c1e6a8a50fc.png"},60600:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/dark-api-reference-path-parameters-973582e4af27a1a5df4bb5e206b59ce0.png"},83209:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/dark-api-reference-query-parameters-83e2fc5c4a9461bfd9e2c5d0bf335214.png"},87681:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/dark-api-reference-request-25ebba191c84800fd1ca2d638f7864d9.png"},74993:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/dark-api-reference-token-b00ba781c67bf33135d03a193089ed46.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var r=s(96540);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);