"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[18493],{35557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"stepbystep/quickstarts/js-sdk-quickstart","title":"JavaScript SDK Quickstart","description":"JavaScript Quickstart for the TSE in Cloud APIs","source":"@site/versioned_docs/version-1.0.1/stepbystep/quickstarts/js-sdk-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/js-sdk-quickstart","permalink":"/develop/it/docs/stepbystep/quickstarts/js-sdk-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/stepbystep/quickstarts/js-sdk-quickstart.mdx","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/it/docs/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/it/docs/tags/code-example"},{"inline":true,"label":"javascript","permalink":"/develop/it/docs/tags/javascript"},{"inline":true,"label":"sdk","permalink":"/develop/it/docs/tags/sdk"}],"version":"1.0.1","lastUpdatedAt":1734604377000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"JavaScript SDK Quickstart","slug":"js-sdk-quickstart","description":"JavaScript Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","javascript","sdk"]},"sidebar":"tutorialSidebar","previous":{"title":"Java SDK Quickstart","permalink":"/develop/it/docs/stepbystep/quickstarts/java-sdk-quickstart"},"next":{"title":"PHP SDK Quickstart","permalink":"/develop/it/docs/stepbystep/quickstarts/php-sdk-quickstart"}}');var r=n(74848),a=n(28453),i=n(11470),o=n(19365);const l={sidebar_position:5,title:"JavaScript SDK Quickstart",slug:"js-sdk-quickstart",description:"JavaScript Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","javascript","sdk"]},u=void 0,c={},d=[{value:"0\ufe0f\u20e3\xa0 Prerequisites",id:"zero-prerequisites",level:2},{value:"1\ufe0f\u20e3\xa0 Step One: Install the TSE in Cloud SDK",id:"one-step-one-install-the-tse-in-cloud-sdk",level:2},{value:"2\ufe0f\u20e3\xa0 Step Two: Set up the OAuth access token retrieval",id:"two-step-two-set-up-the-oauth-access-token-retrieval",level:2},{value:"3\ufe0f\u20e3\xa0 Step Three: Set up the sample",id:"three-step-three-set-up-the-sample",level:2},{value:"5\ufe0f\u20e3\xa0 Step Five: Run the sample",id:"five-step-five-run-the-sample",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Following the steps described on this page, you'll create a simple Node Js application that interacts with the TSE in Cloud API."}),"\n",(0,r.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/sdk/js",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"zero-prerequisites",children:["0\ufe0f\u20e3","\xa0 Prerequisites"]}),"\n",(0,r.jsx)(t.p,{children:"In this guide, we assume that these prerequisites are met:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Node.js installed"}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"/basics/create-an-app.mdx",children:"private app"})," using the ",(0,r.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})]}),"\n",(0,r.jsx)(t.li,{children:"A TSE in Cloud account."}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"one-step-one-install-the-tse-in-cloud-sdk",children:["1\ufe0f\u20e3","\xa0 Step One: Install the TSE in Cloud SDK"]}),"\n",(0,r.jsxs)(t.p,{children:["In this quickstart, we'll use the ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-js-sdk",children:"TSE in Cloud SDK"}),", published to ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@fattureincloud/fattureincloud-js-sdk",children:"NPM"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"To install it using Npm:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"npm install @fattureincloud/fattureincloud-js-sdk\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"two-step-two-set-up-the-oauth-access-token-retrieval",children:["2\ufe0f\u20e3","\xa0 Step Two: Set up the OAuth access token retrieval"]}),"\n",(0,r.jsxs)(t.p,{children:["Create the file ",(0,r.jsx)(t.strong,{children:"oauth.js"})," copy in the following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="oauth.js"',children:'const fs = require("fs");\nconst fattureInCloudSdk = require("@fattureincloud/fattureincloud-js-sdk");\nconst oauth = new fattureInCloudSdk.OAuth2AuthorizationCodeManager(\n  "CLIENT_ID",\n  "CLIENT_SECRET",\n  "http://localhost:8000/oauth"\n);\n\nasync function saveAccessToken(req, res) {\n  res.statusCode = 200;\n  res.setHeader("Content-Type", "text/plain");\n\n  let query = req.url.split("?")[1];\n  let params = new URLSearchParams(query);\n\n  if (params.get("code") == null) {\n    res.writeHead(302, {\n      Location: oauth.getAuthorizationUrl(\n        [fattureInCloudSdk.Scope.ENTITY_SUPPLIERS_READ],\n        "EXAMPLE_STATE"\n      ),\n    });\n    res.end();\n  } else {\n    try {\n      let token = await oauth.fetchToken(params.get("code"));\n\n      fs.writeFileSync(\n        "./token.json",\n        JSON.stringify(token, null, 4),\n        (err) => {\n          if (err) {\n            console.error(err);\n            return;\n          }\n        }\n      );\n      res.write("Token succesfully retrived and stored in token.json");\n    } catch (e) {\n      console.log(e);\n    }\n    res.end();\n  }\n}\n\nmodule.exports = {\n  saveAccessToken,\n};\n'})}),"\n",(0,r.jsx)(t.p,{children:"To make this code work properly the only thing you need to set your client id, client secret and eventually the redirect uri at line 3."}),"\n",(0,r.jsx)(t.admonition,{title:"Store the Token safely!",type:"danger",children:(0,r.jsx)(t.p,{children:"In this QuickStart the access token and refresh token are stored in a file. This is only for educational purposes, the OAuth access token and refresh token are sensitive data and should be saved securely on your database.\nAlso, never share your Client Secret with third-party actors, or publish it to your frontend!"})}),"\n",(0,r.jsxs)(t.h2,{id:"three-step-three-set-up-the-sample",children:["3\ufe0f\u20e3","\xa0 Step Three: Set up the sample"]}),"\n",(0,r.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,r.jsxs)(t.p,{children:["In this example, we'll show how to retrieve your Company ID using the JavaScript SDK. If you plan to manage only one company, you can insert it directly into your code as a variable.\nCheck the ",(0,r.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,r.jsxs)(t.p,{children:["Create the files ",(0,r.jsx)(t.strong,{children:"index.js"})," and ",(0,r.jsx)(t.strong,{children:"quickstart.js"})," in your working directory and copy in the following code:"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"index",label:"index.js",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="index.js"',children:'const http = require("http");\nconst url = require("url");\nconst oauthPath = require("./oauth.js"); //import the oauth methods\nconst quickstart = require("./quickstart.js"); //import the quickstart\nconst hostname = "127.0.0.1"; //set your hostname\nconst port = 8000; //set your port\n\nconst server = http.createServer(async (req, res) => {\n  let pathname = url.parse(req.url).pathname;\n\n  //url routing\n  switch (pathname) {\n    case "/oauth": //oauth endpoint\n      res.end(oauthPath.getOAuthAccessToken(req, res));\n      break;\n    case "/quickstart": //quickstart endpoint\n      res.end(quickstart.getFirstCompanySuppliers());\n      break;\n    default:\n      res.end();\n      break;\n  }\n  res.end();\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n'})})}),(0,r.jsx)(o.A,{value:"quickstart",label:"quickstart.js",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="quickstart.js"',children:'const fattureInCloudSdk = require("@fattureincloud/fattureincloud-js-sdk");\nconst fs = require("fs");\n\nasync function getFirstCompanySuppliers() {\n  try {\n    let rawdata = fs.readFileSync(__dirname + "/token.json");\n\n    let json = JSON.parse(rawdata);\n\n    let defaultClient = fattureInCloudSdk.ApiClient.instance;\n    let OAuth2AuthenticationCodeFlow =\n      defaultClient.authentications["OAuth2AuthenticationCodeFlow"];\n    OAuth2AuthenticationCodeFlow.accessToken = json["access_token"];\n\n    // Retrieve the first company id\n    let userApiInstance = new fattureInCloudSdk.UserApi();\n    let userCompaniesResponse = await userApiInstance.listUserCompanies();\n    let firstCompanyId = userCompaniesResponse.data.companies[0].id;\n\n    // Retrieve the list of the Suppliers\n    let suppliersApiInstance = new fattureInCloudSdk.SuppliersApi();\n    let companySuppliers = await suppliersApiInstance.listSuppliers(\n      firstCompanyId\n    );\n\n    return JSON.stringify(companySuppliers.data);\n  } catch (e) {\n    return JSON.stringify(e);\n  }\n}\n\nmodule.exports = {\n  getFirstCompanySuppliers,\n};\n'})})})]}),"\n",(0,r.jsx)(t.admonition,{title:"Check the Redirect URL",type:"warning",children:(0,r.jsxs)(t.p,{children:["Make sure your FattureInCloud app redirect URL points at the just edited file (e.g. ",(0,r.jsx)(t.a,{href:"http://localhost:5000/Index",children:"http://localhost:5000/Index"}),")."]})}),"\n",(0,r.jsxs)(t.h2,{id:"five-step-five-run-the-sample",children:["5\ufe0f\u20e3","\xa0 Step Five: Run the sample"]}),"\n",(0,r.jsx)(t.p,{children:"From the command line, run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"node index.js\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now visit ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://localhost:8000/auth",children:"http://localhost:8000/auth"})})," (or whatever your URL is), you will be redirected to the TSE in Cloud login page where you will be asked to grant some permissions, according to what scopes you specified previously.\nFinally, you will see the success message and the access token will be stored in the token.json file."]}),"\n",(0,r.jsxs)(t.p,{children:["You can now visit ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://localhost:8000/quickstart",children:"http://localhost:8000/quickstart"})})," (or whatever your URL is) to test the application."]}),"\n",(0,r.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,r.jsx)(t.p,{children:"In this example, we used a limited set of the available API methods to show how to use our SDK."}),"\n",(0,r.jsx)(t.p,{children:"If you want to access the full documentation of the available methods and models, you can check the following resources:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-js-sdk",children:"JavaScript SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@fattureincloud/fattureincloud-js-sdk",children:"NPM page"}),": The main package page on NPM"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://yarnpkg.com/package/@fattureincloud/fattureincloud-js-sdk",children:"YarnPkg page"}),": The main package page on Yarn"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(96540),r=n(34164),a=n(23104),i=n(56347),o=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:n,groupId:r}),[f,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),j=(()=>{const e=u??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),k(e)}),[d,k,a]),tabValues:a}}var k=n(92303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function b(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(g,{...t,...e})]})}function y(e){const t=(0,k.A)();return(0,v.jsx)(b,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);