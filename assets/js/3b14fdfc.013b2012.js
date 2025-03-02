"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[76688],{85744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"sdk/javascript-sdk","title":"JavaScript SDK","description":"The official TSE in Cloud JavaScript SDK","source":"@site/versioned_docs/version-1.0.1/sdk/javascript-sdk.mdx","sourceDirName":"sdk","slug":"/sdk/javascript-sdk","permalink":"/docs/sdk/javascript-sdk","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sdk","permalink":"/docs/tags/sdk"},{"inline":true,"label":"code example","permalink":"/docs/tags/code-example"},{"inline":true,"label":"javascript","permalink":"/docs/tags/javascript"}],"version":"1.0.1","lastUpdatedAt":1740753802000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"JavaScript SDK","slug":"javascript-sdk","description":"The official TSE in Cloud JavaScript SDK","tags":["sdk","code example","javascript"]},"sidebar":"tutorialSidebar","previous":{"title":".NET SDK","permalink":"/docs/sdk/net-sdk"},"next":{"title":"Support & Feature Request*","permalink":"/docs/support/support"}}');var s=t(74848),a=t(28453);t(65537),t(79329);const i={sidebar_position:4,title:"JavaScript SDK",slug:"javascript-sdk",description:"The official TSE in Cloud JavaScript SDK",tags:["sdk","code example","javascript"]},o=void 0,l={},d=[{value:"Requirements and Dependencies",id:"requirements-and-dependencies",level:2},{value:"Download and Installation",id:"download-and-installation",level:2},{value:"SDK Structure",id:"sdk-structure",level:2},{value:"Additional resources",id:"additional-resources",level:2}];function c(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"TSE in Cloud JavaScript SDK"})," is a ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/JavaScript",children:"JavaScript"})," library that offers models and methods to interact with the ",(0,s.jsx)(n.strong,{children:"TSE in Cloud"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Do you need a generic intro?",type:"info",children:(0,s.jsxs)(n.p,{children:["If you want to know more generic information about our SDKs, please check the ",(0,s.jsx)(n.a,{href:"sdk",children:"SDK Overview"})," page."]})}),"\n",(0,s.jsx)(n.h2,{id:"requirements-and-dependencies",children:"Requirements and Dependencies"}),"\n",(0,s.jsxs)(n.p,{children:["This SDK can be used in ",(0,s.jsx)(n.a,{href:"https://nodejs.org/it/",children:"Node.js"})," applications and in-browser (using ",(0,s.jsx)(n.a,{href:"https://browserify.org/",children:"Browserify"}),"). It is mainly based on the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/superagent",children:"Superagent HTTP Client"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"download-and-installation",children:"Download and Installation"}),"\n",(0,s.jsx)(n.p,{children:"The SDK code is Download in:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Common Area"}),"  ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(67364).A+"",children:"Download"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Finance Area"})," ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(28039).A+"",children:"Download"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Document Area"})," ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(71406).A+"",children:"Download"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Framework Area"})," ",(0,s.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(6533).A+"",children:"Download"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"sdk-structure",children:"SDK Structure"}),"\n",(0,s.jsx)(n.p,{children:"Our SDK is mainly split into two different packages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"api"}),": Here you can find the implementation of our API methods, you will need to initialize one of those APIs to start."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"model"}),": This package contains all the representations of our API requests and responses; when using one of the methods above, you'll have to manage some of those models."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"There are some models with a special role:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The models with a name ending for ",(0,s.jsx)(n.em,{children:"Request"})," can be used as request body for one of our methods."]}),"\n",(0,s.jsxs)(n.li,{children:["The models with a name ending for ",(0,s.jsx)(n.em,{children:"Response"})," will be returned after the execution of one of the methods.\nThe other models will be used to compose the content of the requests or responses for our methods."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can think about Request and Response as wrappers: each one of them is dedicated to a single method of the API, and they will most of the time contain a single attribute called ",(0,s.jsx)(n.em,{children:"data"}),", that contains the real body of the request or the response represented through a composition of the other models. Each method will accept at most one Request model and will return at most one Response model."]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://restfulapi.net/",children:"REST APIs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/JavaScript",children:"JavaScript"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Node.js",children:"Node.js on Wikipedia"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/en/about/releases/",children:"Node.js releases"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://browserify.org/",children:"Browserify"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/",children:"NPM"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://yarnpkg.com/",children:"Yarn"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/superagent",children:"Superagent HTTP Client"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(34164);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),s=t(34164),a=t(65627),i=t(56347),o=t(50372),l=t(30604),d=t(11861),c=t(78749);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[d,u]=f({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=d??m;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=t(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(d(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:c,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...n,...e}),(0,x.jsx)(g,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,x.jsx)(k,{...e,children:u(e.children)},String(n))}},67364:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/sdk_co_javascript-b31b35f059533daf02c77c2747650bb0.zip"},28039:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/sdk_fi_javascript-ea84c43eff62a9d7eeb6bae292a87b5c.zip"},6533:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/sdk_fw_javascript-e554f86e3cdc519b76baa9905b420390.zip"},71406:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/files/sdk_mg_javascript-e53a06004b14296f3d7c71b6bd10e6b8.zip"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);