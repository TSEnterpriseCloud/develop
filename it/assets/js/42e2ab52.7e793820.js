"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[56160],{3182:(e,t,n)=>{n.r(t),n.d(t,{CenteredText:()=>c,assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"stepbystep/company","title":"Company methods *","description":"Why do I need the company ID?","source":"@site/versioned_docs/version-1.0.1/stepbystep/company.mdx","sourceDirName":"stepbystep","slug":"/stepbystep/company-methods","permalink":"/develop/it/docs/stepbystep/company-methods","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/stepbystep/company.mdx","tags":[{"inline":true,"label":"basics","permalink":"/develop/it/docs/tags/basics"},{"inline":true,"label":"terms","permalink":"/develop/it/docs/tags/terms"},{"inline":true,"label":"concepts","permalink":"/develop/it/docs/tags/concepts"},{"inline":true,"label":"company","permalink":"/develop/it/docs/tags/company"},{"inline":true,"label":"company id","permalink":"/develop/it/docs/tags/company-id"},{"inline":true,"label":"scopes","permalink":"/develop/it/docs/tags/scopes"},{"inline":true,"label":"unauthorized","permalink":"/develop/it/docs/tags/unauthorized"},{"inline":true,"label":"401","permalink":"/develop/it/docs/tags/401"}],"version":"1.0.1","lastUpdatedAt":1736786694000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Company methods *","slug":"company-methods","description":"Why do I need the company ID?","tags":["basics","terms","concepts","company","company id","scopes","unauthorized","401"]},"sidebar":"tutorialSidebar","previous":{"title":"Authentication *","permalink":"/develop/it/docs/stepbystep/authentication"},"next":{"title":"Scope *","permalink":"/develop/it/docs/stepbystep/scope"}}');var s=n(74848),r=n(28453);n(65537),n(79329);const o={sidebar_position:3,title:"Company methods *",slug:"company-methods",description:"Why do I need the company ID?",tags:["basics","terms","concepts","company","company id","scopes","unauthorized",401]},i=void 0,l={},c=({children:e})=>(0,s.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"gray"},children:e}),u=[{value:'<i class="fas fa-house-user"></i> Use Company ID',id:"-use-company-id",level:3},{value:'<i class="fas fa-bookmark"></i> Why do I need the company ID?',id:"-why-do-i-need-the-company-id",level:3},{value:'<i class="fas fa-pen"></i> How to get the company ID',id:"-how-to-get-the-company-id",level:3}];function d(e){const t={code:"code",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h3,{id:"-use-company-id",children:[(0,s.jsx)("i",{class:"fas fa-house-user"})," Use Company ID"]}),"\n",(0,s.jsx)(t.p,{children:"In WebApi service requests, you can specify the following parameters:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"user: application user name"}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"company"}),": work company id (mandatory in functional calls)"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"These parameters should be added to the URL using the standard syntax:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"GET: http://{server}:{port}/api/v1/{scope}/{module}/{resource}/{id}?user=TeamSa&company=1\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": If the parameters are not specified, the ones defined by the user during the authentication configuration of the service will be used."]}),"\n",(0,s.jsxs)(t.h3,{id:"-why-do-i-need-the-company-id",children:[(0,s.jsx)("i",{class:"fas fa-bookmark"})," Why do I need the company ID?"]}),"\n",(0,s.jsx)(t.p,{children:"The company is key for the TSE in Cloud API to understand which company you are referring to when you make a request.\nThis is why you need to specify the company ID in the URL.\nExceptions are calls that do not require a company_id, such as the call to obtain the authentication token."}),"\n",(0,s.jsxs)(t.h3,{id:"-how-to-get-the-company-id",children:[(0,s.jsx)("i",{class:"fas fa-pen"})," How to get the company ID"]}),"\n",(0,s.jsx)(t.p,{children:"The company ID is provided by the TSE in Cloud API when you create a new company.\nThe id is unique and is assigned to the company when it is created.\nThe id is visible into Company Management section into WebApp Form."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"API Gateway",src:n(79870).A+"",width:"1408",height:"435"})}),"\n",(0,s.jsx)(c,{children:(0,s.jsx)(t.p,{children:"Click this menu item to view list of company and related ID."})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(34164);const s={tabItem:"tabItem_Ymn6"};var r=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),s=n(34164),r=n(65627),o=n(56347),i=n(50372),l=n(30604),c=n(11861),u=n(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:n,groupId:s}),[y,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,u.Dv)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),f=(()=>{const e=c??y;return h({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==a&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function I(e){const t=y(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(t))}},79870:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/company-list-35ec8d23bc13329b3655e196a2c25c61.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(96540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);