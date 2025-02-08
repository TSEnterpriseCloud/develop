"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[12343],{83673:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"support/general-knowledge/oauth2","title":"OAuth 2.0","description":"What is the OAuth 2.0 protocol?","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/support/general-knowledge/oauth2.md","sourceDirName":"support/general-knowledge","slug":"/support/general-knowledge/oauth2","permalink":"/develop/it/docs/1.0.1/support/general-knowledge/oauth2","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"general knowledge","permalink":"/develop/it/docs/1.0.1/tags/general-knowledge"},{"inline":true,"label":"beginner","permalink":"/develop/it/docs/1.0.1/tags/beginner"},{"inline":true,"label":"concepts","permalink":"/develop/it/docs/1.0.1/tags/concepts"},{"inline":true,"label":"oauth","permalink":"/develop/it/docs/1.0.1/tags/oauth"}],"version":"current","lastUpdatedAt":1738925084000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"OAuth 2.0","slug":"oauth2","description":"What is the OAuth 2.0 protocol?","tags":["general knowledge","beginner","concepts","oauth"]},"sidebar":"tutorialSidebar","previous":{"title":"General Knowledge","permalink":"/develop/it/docs/1.0.1/support/general-knowledge/"},"next":{"title":"REST APIs","permalink":"/develop/it/docs/1.0.1/support/general-knowledge/rest-apis"}}');var n=i(74848),s=i(28453);const r={sidebar_position:1,title:"OAuth 2.0",slug:"oauth2",description:"What is the OAuth 2.0 protocol?",tags:["general knowledge","beginner","concepts","oauth"]},a=void 0,h={},l=[{value:"\ud83c\udf89\xa0 Who\u2019s joining the party?",id:"tada-whos-joining-the-party",level:2},{value:"\ud83d\udd11\xa0 Wait a minute, what are tokens?",id:"key-wait-a-minute-what-are-tokens",level:2},{value:"\ud83d\udd00\xa0 OAuth 2.0 flows overview",id:"twisted_rightwards_arrows-oauth-20-flows-overview",level:2},{value:"\ud83d\udd10\xa0 Authorization Code Flow",id:"closed_lock_with_key-authorization-code-flow",level:2},{value:"\ud83d\udcf1\xa0 Device Code Flow",id:"iphone-device-code-flow",level:2},{value:"\ud83d\udcda\xa0 Additional Resources",id:"books-additional-resources",level:2}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"OAuth 2.0"})," is the industry-standard protocol for authorization and it was developed to provide a universal way to secure communication between different services. The standard provides guidelines to build the authentication service but leaves many decisions to the implementers. Nevertheless, most of the web services that do implement OAuth 2.0 for their API come to many of the same decisions, and so most of the implementations look very similar."]}),"\n",(0,n.jsx)(t.p,{children:"In this brief guide, we are going to illustrate the basic concepts of the standard, it should contain all you need to know about OAuth 2.0! \ud83d\ude01"}),"\n",(0,n.jsx)(t.p,{children:"A detailed description of our implementations of the OAuth 2.0 flows is available here:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/authentication/device-code.mdx",children:"OAuth 2.0 Device Code Flow"})}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Do I need to read this?",type:"info",children:(0,n.jsx)(t.p,{children:"Despite this mini-guide being optional and not necessary to use our API, we recommend reading it as it clarifies many concepts of the protocol that you will encounter very often."})}),"\n",(0,n.jsxs)(t.p,{children:["In the following sections, you can find a concise description of the fundamentals of the OAuth 2.0 protocol that will help you to understand some concepts widely used in our documentation.\nIf you want to further investigate the OAuth 2.0 standard, feel free to check out the ",(0,n.jsx)(t.strong,{children:"Additional Resources"})," section, where we collected a lot of useful resources that should help you to fulfill your thirst for learning! \ud83d\ude0c"]}),"\n",(0,n.jsxs)(t.h2,{id:"tada-whos-joining-the-party",children:["\ud83c\udf89","\xa0 Who\u2019s joining the party?"]}),"\n",(0,n.jsx)(t.p,{children:"Let\u2019s start by introducing the subjects that take part in the authentication process:"}),"\n",(0,n.jsxs)(t.p,{children:["First of all, we have the app that you developed, which we\u2019re going to name ",(0,n.jsx)(t.strong,{children:"Client Application"}),". It\u2019s the applicant who wants to access the user\u2019s data."]}),"\n",(0,n.jsxs)(t.p,{children:["This allows us to introduce the second subject, the ",(0,n.jsx)(t.strong,{children:"End-User"}),". He\u2019s the owner of the data you want to access, and we need his authorization to do so."]}),"\n",(0,n.jsxs)(t.p,{children:["The user\u2019s data in this case are stored in TSE in Cloud\u2019s server, which we\u2019re going to name ",(0,n.jsx)(t.strong,{children:"Resource Server"}),". To access this data we need a ",(0,n.jsx)(t.em,{children:"token"}),", a string that acts as permission to ask the Resource Server to provide us the information we need."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"token"})," will be provided to us by the last subject, the ",(0,n.jsx)(t.strong,{children:"Authorization Server"}),". This can be a separate entity from the Resource Server, but in our implementation, they are technically the same. For the purpose of this guide though, we will assume that they are two separate entities."]}),"\n",(0,n.jsxs)(t.h2,{id:"key-wait-a-minute-what-are-tokens",children:["\ud83d\udd11","\xa0 Wait a minute, what are tokens?"]}),"\n",(0,n.jsx)(t.p,{children:"Tokens are like keys, they allow the possessor to perform certain operations. There are two main types of tokens:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.strong,{children:"Access Token"})," is the final token the Client Application will use to request data to the Resource Server. It expires, so it is required to request a new access token to continue using the APIs."]}),"\n",(0,n.jsxs)(t.li,{children:["When an Access Token expires, you don\u2019t need to redo the whole process again. The ",(0,n.jsx)(t.strong,{children:"Refresh Token"})," allows the Client Application to request a new Access Token directly to the Authorization Server. It can also expire, but its expiration time is usually much larger with respect to the Access Token."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When also the Refresh Token expires, you need to re-execute the Authorization flow to obtain new tokens."}),"\n",(0,n.jsxs)(t.h2,{id:"twisted_rightwards_arrows-oauth-20-flows-overview",children:["\ud83d\udd00","\xa0 OAuth 2.0 flows overview"]}),"\n",(0,n.jsxs)(t.p,{children:["OAuth 2.0 specifies several ",(0,n.jsx)(t.a,{href:"https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth#oauth-flows",children:"Flows"})," that can be used to retrieve those tokens. Each one of them is specialized for a different use case:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Implicit Flow"}),"\n",(0,n.jsxs)(t.li,{children:["\u2705","\xa0 Authorization Code Flow"]}),"\n",(0,n.jsx)(t.li,{children:"Client Credential Flow"}),"\n",(0,n.jsx)(t.li,{children:"Resource Owner Password Flow"}),"\n",(0,n.jsx)(t.li,{children:"Assertion Flow"}),"\n",(0,n.jsxs)(t.li,{children:["\u2705","\xa0 Device Authorization Flow"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Currently, the TSE in Cloud API supports the ",(0,n.jsx)(t.strong,{children:"Authorization Code Flow"})," and ",(0,n.jsx)(t.strong,{children:"Device Authorization Flow"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"closed_lock_with_key-authorization-code-flow",children:["\ud83d\udd10","\xa0 Authorization Code Flow"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/",children:"Authorization Code Flow"})," is the most common of the OAuth 2.0 grant types. Like the other flows, it describes how the application can retrieve the token required to interact with the APIs."]}),"\n",(0,n.jsx)(t.admonition,{title:"Wanna get technical?",type:"info",children:(0,n.jsxs)(t.p,{children:["Our implementation of this flow can be found ",(0,n.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"here"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"At a high level, the flow can be divided into the following steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The End-User wants to use the Client Application."}),"\n",(0,n.jsx)(t.li,{children:"The Client Application wants to access the user\u2019s data, so it contacts the Authorization Server to get permission."}),"\n",(0,n.jsx)(t.li,{children:"The Authorization Server asks the End-User whether to grant the requested permissions to the Client Application."}),"\n",(0,n.jsxs)(t.li,{children:["If the End-User approves the request, the Authorization Server redirects him to the Client Application with an ",(0,n.jsx)(t.strong,{children:"Authorization Code"})," in the query string."]}),"\n",(0,n.jsx)(t.li,{children:"The Client Application contacts the Authorization Server to exchange the Authorization Code with an Access Token. In addition to the Access Token, the Authorization Server will provide a Refresh Token."}),"\n",(0,n.jsx)(t.li,{children:"The Client Application uses the received tokens to access the user's data."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["As you can see, the Authorization Code flow introduces a new token called ",(0,n.jsx)(t.strong,{children:"Authorization code"}),". It is a short-living one-time use token generated by the Authorization Server, and its only purpose is to be exchanged for an Access Token."]}),"\n",(0,n.jsx)(t.p,{children:"Since the Authorization Code Grant requires the exchange of the Authorization Code for the Access Token, it provides an additional layer of security not present in other grant types.\nThe code exchange step ensures that an attacker isn\u2019t able to intercept the Access Token, given that the Access Token is always sent via a secure backchannel between the Client Application and the Authorization Server."}),"\n",(0,n.jsx)(t.p,{children:"The authorization step is performed directly by the End-User on a page provided by the Authorization Server, so the application needs to expose a Redirect Endpoint that will be used by the Authorization Server to send the Authorization code."}),"\n",(0,n.jsxs)(t.h2,{id:"iphone-device-code-flow",children:["\ud83d\udcf1","\xa0 Device Code Flow"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://www.oauth.com/oauth2-servers/device-flow/",children:"Device Code Flow"})," is an authorization process designed explicitly for browserless and input-constrained devices such as smart TVs, media consoles, picture frames, printers, or hardware video encoders.\nIt can be also used for use cases where the Client cannot safely store a secret (making it impossible to use the Authorization Code Flow), such as CRM plugins or pure frontend applications."]}),"\n",(0,n.jsx)(t.admonition,{title:"Wait a minute!",type:"warning",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"To enable this flow for your application, you have to contact us!"})," We would like to know why you want to use the Device Authorization flow before activating it."]})}),"\n",(0,n.jsx)(t.p,{children:"The Device Code Flow tries to overcome the restrictions that affect the Client Application by asking the End User to manually access a web page, where the authentication and authorization steps will be performed; this second device will usually be a PC or another device browser-provided, where the End User will be able to open the page and perform the requested operations easily."}),"\n",(0,n.jsx)(t.p,{children:'We can then split the Device Code Flow into two different paths, one for the device where the Client Application is running (named "Device Flow") and one for the secondary device (named "Browser Flow"); the two flows will be executed parallelly until the End-User authorization will be provided.'}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Device Flow"})," is executed on the device where the Client App is running, e.g. the device with the restrictions mentioned above."]}),"\n",(0,n.jsx)(t.p,{children:"The steps are the following:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The End-User wants to use the Client Application."}),"\n",(0,n.jsx)(t.li,{children:"The Client Application wants to access the user\u2019s data, so it contacts the Authorization Server to get permission."}),"\n",(0,n.jsx)(t.li,{children:"The Authorization Server sends a verification URL and a code to the Client Application, which displays them to the End-User."}),"\n",(0,n.jsx)(t.li,{children:"The Client Application starts polling the Authorization Server for the authorization result. This process continues until the End-User approves the request."}),"\n",(0,n.jsx)(t.li,{children:"The first Client Application's check following the End-User approval will be successful, and the Authorization Server will provide the Access Token and Refresh Token to the user."}),"\n",(0,n.jsx)(t.li,{children:"The Client Application uses the received tokens to access the user's data."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Browser Flow"})," will be executed manually by the user on a secondary device of his choice, and it can be placed between steps 3 and 5 of the Device Flow:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The End User will open the verification page, writing the verification URL on a secondary device of his choice."}),"\n",(0,n.jsx)(t.li,{children:"The page will require the End User to insert the code and to give permissions to the Client Application to perform the operations on the API"}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional Resources"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://developer.okta.com/blog/2017/06/21/what-the-heck-is-oauth",children:"What the Heck is OAuth?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://auth0.com/docs/authorization/which-oauth-2-0-flow-should-i-use",children:"Which OAuth 2.0 Flow should I use"})}),"\n",(0,n.jsxs)(t.li,{children:["Authorization Code Flow","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/",children:"Authorization Code Grant"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://auth0.com/docs/flows/authorization-code-flow",children:"Authorization Code Flow"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type",children:"What is the OAuth 2.0 Authorization Code Grant Type?"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1",children:"Specification"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Device Code Flow","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.oauth.com/oauth2-servers/device-flow/",children:"Device Authorization Grant"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://auth0.com/docs/authorization/flows/device-authorization-flow",children:"Device Authorization Flow"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://alexbilbie.com/2016/04/oauth-2-device-flow-grant/",children:"OAuth 2.0 Device Flow Grant"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8628",children:"Specification"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://darutk.medium.com/the-simplest-guide-to-oauth-2-0-8c71bd9a15bb",children:"The Simplest Guide To OAuth 2.0"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/OAuth",children:"Wikipedia"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.oauth.com/",children:"OAuth 2.0 Simplified"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var o=i(96540);const n={},s=o.createContext(n);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);