"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[87271],{97612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"stepbystep/quickstarts/js-quickstart","title":"JavaScript","description":"JavaScript Quickstart for the TSE in Cloud APIs","source":"@site/versioned_docs/version-1.0.1/stepbystep/quickstarts/js-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/js-sdk-quickstart","permalink":"/it/docs/stepbystep/quickstarts/js-sdk-quickstart","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"quickstarts","permalink":"/it/docs/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/it/docs/tags/code-example"},{"inline":true,"label":"javascript","permalink":"/it/docs/tags/javascript"},{"inline":true,"label":"sdk","permalink":"/it/docs/tags/sdk"}],"version":"1.0.1","lastUpdatedAt":1740768973000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"JavaScript","slug":"js-sdk-quickstart","description":"JavaScript Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","javascript","sdk"]},"sidebar":"tutorialSidebar","previous":{"title":"PowerShell","permalink":"/it/docs/stepbystep/quickstarts/powershell-collection"},"next":{"title":"Scenario","permalink":"/it/docs/scenario/"}}');var s=a(74848),n=a(28453);a(65537),a(79329);const i={sidebar_position:5,title:"JavaScript",slug:"js-sdk-quickstart",description:"JavaScript Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","javascript","sdk"]},l=void 0,o={},u=[{value:"0 - Prerequisites",id:"0---prerequisites",level:2},{value:"1 - Download the TSE in Cloud SDK",id:"1---download-the-tse-in-cloud-sdk",level:2},{value:"2 - Set up the OAuth access token retrieval",id:"2---set-up-the-oauth-access-token-retrieval",level:2},{value:"3 - Set up the sample",id:"3---set-up-the-sample",level:2},{value:"5 - Run the sample",id:"5---run-the-sample",level:2}];function c(e){const t={a:"a",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Following the steps described on this page, you'll create a simple Node Js application that interacts with the TSE in Cloud API."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/sdk/js",children:"here"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"0---prerequisites",children:"0 - Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["Autorization info, view page ",(0,s.jsx)(t.a,{href:"../../started/howto#obtain-personal-token",children:"how to Obtain personal token"})]}),"\n",(0,s.jsx)(t.h2,{id:"1---download-the-tse-in-cloud-sdk",children:"1 - Download the TSE in Cloud SDK"}),"\n",(0,s.jsxs)(t.p,{children:["In this quickstart, we'll use the ",(0,s.jsx)(t.a,{href:"/it/docs/sdk/javascript-sdk",children:"TSE in Cloud SDK"})]}),"\n",(0,s.jsx)(t.h2,{id:"2---set-up-the-oauth-access-token-retrieval",children:"2 - Set up the OAuth access token retrieval"}),"\n",(0,s.jsx)(t.h2,{id:"3---set-up-the-sample",children:"3 - Set up the sample"}),"\n",(0,s.jsx)(t.h2,{id:"5---run-the-sample",children:"5 - Run the sample"})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},79329:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var r=a(34164);const s={tabItem:"tabItem_Ymn6"};var n=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:a,children:t})}},65537:(e,t,a)=>{a.d(t,{A:()=>w});var r=a(96540),s=a(34164),n=a(65627),i=a(56347),l=a(50372),o=a(30604),u=a(11861),c=a(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:s}}=e;return{value:t,label:a,attributes:r,default:s}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const s=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,n=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[u,d]=f({queryString:a,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,c.Dv)(a);return[s,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:s}),v=(()=>{const e=u??m;return h({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,n]),tabValues:n}}var b=a(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=a(74848);function g(e){let{className:t,block:a,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),c=e=>{const t=e.currentTarget,a=o.indexOf(t),s=l[a].value;s!==r&&(u(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...n,className:(0,s.A)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=m(e);return(0,k.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,k.jsx)(g,{...t,...e}),(0,k.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,k.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var r=a(96540);const s={},n=r.createContext(s);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);