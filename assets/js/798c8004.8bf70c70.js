"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[84800],{71778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>f,frontMatter:()=>d,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"stepbystep/authentication","title":"Authentication *","description":"The supported authentication methods","source":"@site/versioned_docs/version-1.0.1/stepbystep/authentication.mdx","sourceDirName":"stepbystep","slug":"/stepbystep/authentication","permalink":"/develop/docs/stepbystep/authentication","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"basics","permalink":"/develop/docs/tags/basics"},{"inline":true,"label":"authentication","permalink":"/develop/docs/tags/authentication"},{"inline":true,"label":"oauth","permalink":"/develop/docs/tags/oauth"},{"inline":true,"label":"unauthorized","permalink":"/develop/docs/tags/unauthorized"},{"inline":true,"label":"401","permalink":"/develop/docs/tags/401"}],"version":"1.0.1","lastUpdatedAt":1738925084000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Authentication *","slug":"authentication","description":"The supported authentication methods","tags":["basics","authentication","oauth","unauthorized","401"]},"sidebar":"tutorialSidebar","previous":{"title":"Step by step overview","permalink":"/develop/docs/stepbystep/"},"next":{"title":"Company methods *","permalink":"/develop/docs/stepbystep/company-methods"}}');var s=n(74848),r=n(28453);const i=({children:e})=>(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"gray"},children:e});function o(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["To make requests towards the ",(0,s.jsx)(t.strong,{children:"TSE in Cloud API"})," it is necessary to use only supported authentication methods.",(0,s.jsx)(t.br,{}),"\n","In the next paragraph, you'll find a flowchart that will guide you in your choice."]}),"\n",(0,s.jsx)(t.p,{children:"The currently supported methods are with access token"}),"\n",(0,s.jsxs)(t.h3,{id:"-how-i-can-get-authentication-",children:[(0,s.jsx)("i",{class:"fas fa-lock"})," How i can get authentication ?"]}),"\n",(0,s.jsx)(t.p,{children:"This section documents the supported authentication models. M2M Scenario Many times a secure and authorized communication channel is needed between different parts of a system such as two back-end services of different applications. The key aspect of these communications lies in the fact that the element for establishing trust in the system is the client. In TSE a client is assigned a technical API Key which is used during the login phase to recognize it and enable it to use the services."}),"\n",(0,s.jsx)(t.p,{children:"The figure illustrates the authentication flow (Login)."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"API Gateway",src:n(8847).A+"",width:"688",height:"465"})}),"\n",(0,s.jsx)(i,{children:(0,s.jsx)(t.p,{children:"Make Your Own API Gateway with Nginx and Proper Auth Validation"})}),"\n",(0,s.jsxs)(t.h3,{id:"-token-generation",children:[(0,s.jsx)("i",{class:"fas fa-lock-open"})," Token generation"]}),"\n",(0,s.jsxs)(t.p,{children:["During this phase, the client uses the API Key to obtain a JWT token that will be used in subsequent calls to access application resources.\nFor information on how to obtain an API Key, refer to this ",(0,s.jsx)(t.a,{href:"/docs/started/howto#-obtain-personal-token",children:"link"}),".\nThe application must request the token via POST with parameters in x-www-form-urlencoded to a specific path"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"webapi_base_url/auth/token"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Specifying in the body"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Form Parameter"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"Description"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["grant_type ",(0,s.jsx)(t.em,{children:"required"})]}),(0,s.jsxs)(t.td,{children:["\u201ctoken\u201d ",(0,s.jsx)(t.strong,{children:"Type:"})," string"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["username ",(0,s.jsx)(t.em,{children:"required"})]}),(0,s.jsxs)(t.td,{children:["admin_<cid> ",(0,s.jsx)(t.strong,{children:"Type:"})," string"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["token ",(0,s.jsx)(t.em,{children:"required"})]}),(0,s.jsxs)(t.td,{children:["Bearer ",(0,s.jsx)(t.em,{children:"API Key"})," ",(0,s.jsx)(t.strong,{children:"Type:"})," string"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["scope ",(0,s.jsx)(t.em,{children:"required"})]}),(0,s.jsxs)(t.td,{children:["Indicates the access context for which authorization is requested. Possible values are: webapi_admin - used for example to retrieve the list of environments <environment> - one of any registered work environments ",(0,s.jsx)(t.strong,{children:"Type"}),": string"]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:'In response to the call, an authorization code consisting of a JWT token is obtained, whose duration is reported in the response of the call in the "expires_in" parameter (usually lasting 8 hours).'}),"\n",(0,s.jsxs)(t.admonition,{type:"danger",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{}),(0,s.jsxs)(t.p,{children:["It is important that in the token section the API Key is preceded by the word ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Bearer"})})," for example"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3ZWJhcGlhZG1pbiIsIndlYmFwaTphdXRoZW50aWNhdGlvbjpzY29wZSI6Imh1Yl9hZG1pbix0c2UxMHdlYmFwaXRlc3QyX2FseXRzZTEwd2ViYXBpdGVzdDIiLCJqdGkiOiIwMjdkYmRlMC03OTg5LTQ0MTItODliOC0yM2FkYTVjNTdjZTIiLCJpYXQiOjE2NTg3NDA4NzcsImlzcyI6IkFseUNFU3J2MlNydklzc3VlciIsImF1ZCI6IkFseUNFU3J2MlNydkF1ZGllbmNlIn0.p1oEy4LJyFuTKIjJynYw4zQQQXIYPO3WfLe8VTNh7XA\n"})})]}),"\n",(0,s.jsxs)(t.h3,{id:"-webapi-call-in-action",children:[(0,s.jsx)("i",{class:"fas fa-cloud"})," WebApi call in action"]}),"\n",(0,s.jsx)(t.p,{children:"The calls to the application services will be authenticated with a Bearer token consisting of a JWT token obtained with the Login call.\nBelow are some examples of the get call for clients."})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}var c=n(65537),u=n(79329);const d={sidebar_position:1,title:"Authentication *",slug:"authentication",description:"The supported authentication methods",tags:["basics","authentication","oauth","unauthorized",401]},h="Authentication",p={},m=[{value:'<i class="fas fa-lock"></i> How i can get authentication ?',id:"-how-i-can-get-authentication-",level:3},{value:'<i class="fas fa-lock-open"></i> Token generation',id:"-token-generation",level:3},{value:'<i class="fas fa-cloud"></i> WebApi call in action',id:"-webapi-call-in-action",level:3}];function b(e){const t={code:"code",h1:"h1",header:"header",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"authentication",children:"Authentication"})}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsxs)(c.A,{groupId:"languages",children:[(0,s.jsx)(u.A,{value:"jsx",label:"React",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"    var https = require('follow-redirects').https;\n    var fs = require('fs');\n\n    var options = {\n      'method': 'GET',\n      'hostname': 'webapicorso1.ts-paas.com',\n      'path': '/api/v1/webapicorso1_alywebapicorso1/CO/CustomerSupplierCO/4?company=2',\n      'headers': {\n        'Authorization-Scope': 'webapicorso1_alywebapicorso1',\n        'Content-Type': 'application/json',\n        'Authorization': '\u2022\u2022\u2022\u2022\u2022\u2022'\n      },\n      'maxRedirects': 20\n    };\n\n    var req = https.request(options, function (res) {\n      var chunks = [];\n\n      res.on(\"data\", function (chunk) {\n        chunks.push(chunk);\n      });\n\n      res.on(\"end\", function (chunk) {\n        var body = Buffer.concat(chunks);\n        console.log(body.toString());\n      });\n\n      res.on(\"error\", function (error) {\n        console.error(error);\n      });\n    });\n\n    req.end();\n"})})}),(0,s.jsx)(u.A,{value:"csharp",label:"C#",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",children:'    using System.Net.Http.Headers;\n    // No more boilerplate needed with top level statements (https://docs.microsoft.com/en-us/dotnet/core/tutorials/top-level-templates)\n    var client = new HttpClient();\n    var request = new HttpRequestMessage(HttpMethod.Get, "https://webapicorso1.ts-paas.com/api/v1/webapicorso1_alywebapicorso1/CO/CustomerSupplierCO/4?company=2");\n    request.Headers.Add("Authorization-Scope", "webapicorso1_alywebapicorso1");\n    request.Headers.Add("Authorization", "\u2022\u2022\u2022\u2022\u2022\u2022");\n    var content = new StringContent(string.Empty);\n    content.Headers.ContentType = new MediaTypeHeaderValue("application/json");\n    request.Content = content;\n    var response = await client.SendAsync(request);\n    response.EnsureSuccessStatusCode();\n    Console.WriteLine(await response.Content.ReadAsStringAsync());\n'})})}),(0,s.jsx)(u.A,{value:"curl",label:"cURL",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"    curl --location --request GET 'https://webapicorso1.ts-paas.com/api/v1/webapicorso1_alywebapicorso1/CO/CustomerSupplierCO/4?company=2' \\\n    --header 'Authorization-Scope: webapicorso1_alywebapicorso1' \\\n    --header 'Content-Type: application/json' \\\n    --header 'Authorization: \u2022\u2022\u2022\u2022\u2022\u2022'\n"})})})]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),s=n(34164),r=n(65627),i=n(56347),o=n(50372),l=n(30604),c=n(11861),u=n(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:n,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),x=(()=>{const e=c??b;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==a&&(c(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(t))}},8847:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/Api-gateway-aeb7e792935eb90cdc7c24e679ca07ce.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);