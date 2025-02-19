"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[33723],{46655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"sdks/javascript-sdk","title":"JavaScript SDK","description":"The official TSE in Cloud JavaScript SDK","source":"@site/docs/sdks/javascript-sdk.mdx","sourceDirName":"sdks","slug":"/sdks/javascript-sdk","permalink":"/develop/docs/1.0.1/sdks/javascript-sdk","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sdk","permalink":"/develop/docs/1.0.1/tags/sdk"},{"inline":true,"label":"code example","permalink":"/develop/docs/1.0.1/tags/code-example"},{"inline":true,"label":"javascript","permalink":"/develop/docs/1.0.1/tags/javascript"}],"version":"current","lastUpdatedAt":1739806144000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"JavaScript SDK","slug":"javascript-sdk","description":"The official TSE in Cloud JavaScript SDK","tags":["sdk","code example","javascript"]},"sidebar":"tutorialSidebar","previous":{"title":".NET SDK","permalink":"/develop/docs/1.0.1/sdks/net-sdk"},"next":{"title":"TypeScript SDK","permalink":"/develop/docs/1.0.1/sdks/typescript-sdk"}}');var r=n(74848),a=n(28453);n(65537),n(79329);const i={sidebar_position:4,title:"JavaScript SDK",slug:"javascript-sdk",description:"The official TSE in Cloud JavaScript SDK",tags:["sdk","code example","javascript"]},o=void 0,l={},c=[{value:"\u2611\ufe0f\xa0 Requirements and Dependencies",id:"ballot_box_with_check-requirements-and-dependencies",level:2},{value:"\u2b07\ufe0f\xa0 Download and Installation",id:"arrow_down-download-and-installation",level:2},{value:"\ud83d\udc77\xa0 SDK Structure",id:"construction_worker_man-sdk-structure",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2},{value:"\ud83d\udcda\xa0 Additional resources",id:"books-additional-resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"TSE in Cloud JavaScript SDK"})," is a ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/JavaScript",children:"JavaScript"})," library that offers models and methods to interact with the ",(0,r.jsx)(t.strong,{children:"TSE in Cloud v2 REST API"}),"."]}),"\n",(0,r.jsx)(t.admonition,{title:"Do you need a generic intro?",type:"info",children:(0,r.jsxs)(t.p,{children:["If you want to know more generic information about our SDKs, please check the ",(0,r.jsx)(t.a,{href:"/develop/docs/1.0.1/sdks/",children:"SDK Overview"})," page."]})}),"\n",(0,r.jsxs)(t.h2,{id:"ballot_box_with_check-requirements-and-dependencies",children:["\u2611\ufe0f","\xa0 Requirements and Dependencies"]}),"\n",(0,r.jsxs)(t.p,{children:["This SDK can be used in ",(0,r.jsx)(t.a,{href:"https://nodejs.org/it/",children:"Node.js"})," applications and in-browser (using ",(0,r.jsx)(t.a,{href:"https://browserify.org/",children:"Browserify"}),"). It is mainly based on the ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/superagent",children:"Superagent HTTP Client"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"arrow_down-download-and-installation",children:["\u2b07\ufe0f","\xa0 Download and Installation"]}),"\n",(0,r.jsx)(t.p,{children:"The SDK code is Download in:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Common Area"}),"  ",(0,r.jsx)(t.a,{href:"https://nexus.ts-paas.com/repository/ts-active/sdk/tsec-sdk/v2024/latest/sdk_co_javascript.zip",children:"Download"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Finance Area"})," ",(0,r.jsx)(t.a,{href:"https://nexus.ts-paas.com/repository/ts-active/sdk/tsec-sdk/v2024/latest/sdk_fi.zip",children:"Download"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Document Area"})," [Download](",(0,r.jsx)(t.a,{href:"https://nexus.ts-paas.com/repository/ts-active/sdk/tsec-sdk/v2024/latest/sdk_mg.zip()",children:"https://nexus.ts-paas.com/repository/ts-active/sdk/tsec-sdk/v2024/latest/sdk_mg.zip()"})]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Important!",type:"danger",children:(0,r.jsxs)(t.p,{children:["Make sure you always import the newest version of our SDK, you can check which version is the latest on ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@fattureincloud/fattureincloud-js-sdk",children:"NPM"})," or ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/package/@fattureincloud/fattureincloud-js-sdk",children:"Yarn"})]})}),"\n",(0,r.jsxs)(t.h2,{id:"construction_worker_man-sdk-structure",children:["\ud83d\udc77","\xa0 SDK Structure"]}),"\n",(0,r.jsx)(t.p,{children:"Our SDK is mainly split into two different packages:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"api"}),": Here you can find the implementation of our API methods, you will need to initialize one of those APIs to start."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"model"}),": This package contains all the representations of our API requests and responses; when using one of the methods above, you'll have to manage some of those models."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"There are some models with a special role:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The models with a name ending for ",(0,r.jsx)(t.em,{children:"Request"})," can be used as request body for one of our methods."]}),"\n",(0,r.jsxs)(t.li,{children:["The models with a name ending for ",(0,r.jsx)(t.em,{children:"Response"})," will be returned after the execution of one of the methods.\nThe other models will be used to compose the content of the requests or responses for our methods."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can think about Request and Response as wrappers: each one of them is dedicated to a single method of the API, and they will most of the time contain a single attribute called ",(0,r.jsx)(t.em,{children:"data"}),", that contains the real body of the request or the response represented through a composition of the other models. Each method will accept at most one Request model and will return at most one Response model."]}),"\n",(0,r.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,r.jsxs)(t.p,{children:["If you need a more detailed example, you can check our ",(0,r.jsx)(t.a,{href:"/quickstarts/js-sdk-quickstart.mdx",children:"JavaScript SDK Quickstart"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Here you can find the full documentation of the available methods and models:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-js-sdk",children:"JavaScript SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional resources"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://restfulapi.net/",children:"REST APIs"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/JavaScript",children:"JavaScript"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Node.js",children:"Node.js on Wikipedia"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/en/about/releases/",children:"Node.js releases"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://browserify.org/",children:"Browserify"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/",children:"NPM"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://yarnpkg.com/",children:"Yarn"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/superagent",children:"Superagent HTTP Client"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>g});var s=n(96540),r=n(34164),a=n(65627),i=n(56347),o=n(50372),l=n(30604),c=n(11861),d=n(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:n,groupId:r}),[m,j]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...t,...e}),(0,v.jsx)(k,{...t,...e})]})}function g(e){const t=(0,j.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);