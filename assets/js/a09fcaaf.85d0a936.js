"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[9888],{89072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"stepbystep/quickstarts/ts-sdk-quickstart","title":"TypeScript SDK Quickstart","description":"TypeScript Quickstart for the TSE in Cloud APIs","source":"@site/docs/stepbystep/quickstarts/ts-sdk-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/ts-sdk-quickstart","permalink":"/docs/1.0.1/stepbystep/quickstarts/ts-sdk-quickstart","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"quickstarts","permalink":"/docs/1.0.1/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/docs/1.0.1/tags/code-example"},{"inline":true,"label":"typescript","permalink":"/docs/1.0.1/tags/typescript"},{"inline":true,"label":"sdk","permalink":"/docs/1.0.1/tags/sdk"}],"version":"current","lastUpdatedAt":1740751425000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"title":"TypeScript SDK Quickstart","slug":"ts-sdk-quickstart","description":"TypeScript Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","typescript","sdk"]},"sidebar":"tutorialSidebar","previous":{"title":"Ruby SDK Quickstart","permalink":"/docs/1.0.1/stepbystep/quickstarts/ruby-sdk-quickstart"},"next":{"title":"Vanilla Code Examples","permalink":"/docs/1.0.1/stepbystep/quickstarts/vanilla-code"}}');var r=n(74848),a=n(28453),i=n(65537),o=n(79329);const l={sidebar_position:9,title:"TypeScript SDK Quickstart",slug:"ts-sdk-quickstart",description:"TypeScript Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","typescript","sdk"]},c=void 0,u={},d=[{value:"0\ufe0f\u20e3\xa0 Prerequisites",id:"zero-prerequisites",level:2},{value:"1\ufe0f\u20e3\xa0 Step One: Install the TSE in Cloud SDK",id:"one-step-one-install-the-tse-in-cloud-sdk",level:2},{value:"2\ufe0f\u20e3\xa0 Step Two: Set up the OAuth access token retrieval",id:"two-step-two-set-up-the-oauth-access-token-retrieval",level:2},{value:"4\ufe0f\u20e3\xa0 Step Four: Set up the sample",id:"four-step-four-set-up-the-sample",level:2},{value:"5\ufe0f\u20e3\xa0 Step Five: Run the sample",id:"five-step-five-run-the-sample",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Following the steps described on this page, you'll create a simple Node Js application that interacts with the TSE in Cloud API."}),"\n",(0,r.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/sdk/ts",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"zero-prerequisites",children:["0\ufe0f\u20e3","\xa0 Prerequisites"]}),"\n",(0,r.jsx)(t.p,{children:"In this guide, we assume that these prerequisites are met:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Node.js and ts-node installed"}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"/basics/create-an-app.mdx",children:"private app"})," using the ",(0,r.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})]}),"\n",(0,r.jsx)(t.li,{children:"A TSE in Cloud account."}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"one-step-one-install-the-tse-in-cloud-sdk",children:["1\ufe0f\u20e3","\xa0 Step One: Install the TSE in Cloud SDK"]}),"\n",(0,r.jsxs)(t.p,{children:["In this quickstart, we'll use the ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk",children:"TSE in Cloud SDK"}),", published to ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@fattureincloud/fattureincloud-ts-sdk",children:"NPM"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"To install it using Npm:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"npm install @fattureincloud/fattureincloud-ts-sdk\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"two-step-two-set-up-the-oauth-access-token-retrieval",children:["2\ufe0f\u20e3","\xa0 Step Two: Set up the OAuth access token retrieval"]}),"\n",(0,r.jsxs)(t.p,{children:["Create the file ",(0,r.jsx)(t.strong,{children:"oauth.ts"})," and copy in the following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="oauth.ts"',children:'import {\n  OAuth2AuthorizationCodeManager,\n  Scope,\n} from "@fattureincloud/fattureincloud-ts-sdk";\nimport fs from "fs";\nimport http from "http";\n\nexport async function getOAuthAccessToken(\n  req: http.IncomingMessage,\n  res: http.ServerResponse\n) {\n  res.statusCode = 200;\n  res.setHeader("Content-Type", "text/plain");\n\n  let query = !!req.url && req.url.split("?")[1];\n  let params = new URLSearchParams(query || "");\n\n  let oauth = new OAuth2AuthorizationCodeManager(\n    "CLIENT_ID",\n    "CLIENT_SECRET",\n    "http://localhost:8000/oauth"\n  );\n\n  if (params.get("code") == null) {\n    res.writeHead(302, {\n      Location: oauth.getAuthorizationUrl(\n        [Scope.ENTITY_SUPPLIERS_READ],\n        "EXAMPLE_STATE"\n      ),\n    });\n    res.end();\n  } else {\n    let code = params.get("code");\n\n    try {\n      let token = await oauth.fetchToken(code ?? "");\n      // saving the oAuth access token in the token.json file\n      fs.writeFileSync("./token.json", JSON.stringify(token, null, 4));\n      res.write("Token succesfully retrived and stored in token.json");\n    } catch (e) {\n      console.log(e);\n    }\n    res.end();\n  }\n}\n'})}),"\n",(0,r.jsx)(t.p,{children:"To make this code work properly the only thing you need to set your client id, client secret and eventually the redirect uri at line 12."}),"\n",(0,r.jsx)(t.admonition,{title:"Store the Token safely!",type:"danger",children:(0,r.jsx)(t.p,{children:"In this QuickStart the access token and refresh token are stored in a file. This is only for educational purposes, the OAuth access token and refresh token are sensitive data and should be saved securely on your database.\nAlso, never share your Client Secret with third-party actors, or publish it to your frontend!"})}),"\n",(0,r.jsxs)(t.h2,{id:"four-step-four-set-up-the-sample",children:["4\ufe0f\u20e3","\xa0 Step Four: Set up the sample"]}),"\n",(0,r.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,r.jsxs)(t.p,{children:["In this example, we'll show how to retrieve your Company ID using the TypeScript SDK. If you plan to manage only one company, you can insert it directly into your code as a variable.\nCheck the ",(0,r.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,r.jsxs)(t.p,{children:["Create the files ",(0,r.jsx)(t.strong,{children:"index.ts"})," and ",(0,r.jsx)(t.strong,{children:"quickstart.ts"})," in your working directory and copy in the following code:"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.A,{value:"index",label:"index.ts",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="index.ts"',children:'import * as http from "http";\nimport url from "url";\nimport { getOAuthAccessToken } from "./oauth";\nimport { getFirstCompanySuppliers } from "./quickstart";\n\nconst hostname = "127.0.0.1"; //set your hostname\nconst port = 8000; //set your port\n\nconst server = http.createServer(async (req, res) => {\n  var pathname = url.parse(req.url ?? "").pathname;\n\n  //url routing\n  switch (pathname) {\n    case "/oauth": //oauth endpoint\n      res.end(await getOAuthAccessToken(req, res));\n      break;\n    case "/quickstart": //quickstart endpoint\n      res.end(await getFirstCompanySuppliers());\n      break;\n    default:\n      res.end();\n      break;\n  }\n  res.end();\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});\n'})})}),(0,r.jsx)(o.A,{value:"quickstart",label:"quickstart.ts",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="quickstart.ts"',children:'import {\n  Configuration,\n  ListUserCompaniesResponse,\n  SuppliersApi,\n  UserApi,\n} from "@fattureincloud/fattureincloud-ts-sdk";\nimport fs from "fs";\n\nexport async function getFirstCompanySuppliers() {\n  try {\n    let rawdata = fs.readFileSync("./token.json");\n    let json = JSON.parse(rawdata.toString());\n    // Configure OAuth2 access token for authorization:\n    const apiConfig = new Configuration({\n      accessToken: json["access_token"],\n    });\n\n    // Retrieve the first company id\n    var userApiInstance = new UserApi(apiConfig);\n    var userCompaniesResponse: ListUserCompaniesResponse = await (\n      await userApiInstance.listUserCompanies()\n    ).data;\n    var firstCompanyId = userCompaniesResponse?.data?.companies?.[0]?.id;\n\n    if (firstCompanyId) {\n      // Retrieve the list of the Suppliers\n      var suppliersApiInstance = new SuppliersApi(apiConfig);\n      var companySuppliers = await suppliersApiInstance.listSuppliers(\n        firstCompanyId\n      );\n\n      return JSON.stringify(companySuppliers.data);\n    }\n  } catch (e) {\n    return JSON.stringify(e);\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(t.admonition,{title:"Check the Redirect URL",type:"warning",children:(0,r.jsxs)(t.p,{children:["Make sure your FattureInCloud app redirect URL points at the just edited file (e.g. ",(0,r.jsx)(t.a,{href:"http://localhost:8000/oauth",children:"http://localhost:8000/oauth"}),")."]})}),"\n",(0,r.jsxs)(t.h2,{id:"five-step-five-run-the-sample",children:["5\ufe0f\u20e3","\xa0 Step Five: Run the sample"]}),"\n",(0,r.jsx)(t.p,{children:"From the command line, run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"ts-node index.ts\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now visit ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://localhost:8000/oauth",children:"http://localhost:8000/oauth"})})," (or whatever your URL is), you will be redirected to the TSE in Cloud login page where you will be asked to grant some permissions, according to what scopes you specified previously.\nFinally, you will see the success message and the access token will be stored in the token.json file."]}),"\n",(0,r.jsxs)(t.p,{children:["You can now visit ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://localhost:8000/quickstart",children:"http://localhost:8000/quickstart"})})," (or whatever your URL is) to test the application."]}),"\n",(0,r.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,r.jsx)(t.p,{children:"In this example, we used a limited set of the available API methods to show how to use our SDK."}),"\n",(0,r.jsx)(t.p,{children:"If you want to access the full documentation of the available methods and models, you can check the following resources:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk",children:"TypeScript SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@fattureincloud/fattureincloud-ts-sdk",children:"NPM page"}),": The main package page on NPM"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://yarnpkg.com/package/@fattureincloud/fattureincloud-ts-sdk",children:"YarnPkg page"}),": The main package page on Yarn"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(96540),r=n(34164),a=n(65627),i=n(56347),o=n(50372),l=n(30604),c=n(11861),u=n(78749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:r}),[f,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),k(e)}),[d,k,a]),tabValues:a}}var k=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function x(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function b(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,y.jsx)(x,{...t,...e}),(0,y.jsx)(v,{...t,...e})]})}function j(e){const t=(0,k.A)();return(0,y.jsx)(b,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);