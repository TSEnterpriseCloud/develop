"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[6156],{83696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"reference/index","title":"Api Reference","description":"A List of collection","source":"@site/versioned_docs/version-1.0.1/reference/index.mdx","sourceDirName":"reference","slug":"/reference/api-root","permalink":"/develop/it/docs/reference/api-root","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/reference/index.mdx","tags":[{"inline":true,"label":"api","permalink":"/develop/it/docs/tags/api"},{"inline":true,"label":"use cases","permalink":"/develop/it/docs/tags/use-cases"}],"version":"1.0.1","lastUpdatedAt":1734892087000,"frontMatter":{"title":"Api Reference","description":"A List of collection","slug":"api-root","tags":["api","use cases"]},"sidebar":"tutorialSidebar","previous":{"title":"Debug Integrations","permalink":"/develop/it/docs/basics/debug-integrations"},"next":{"title":"Use the API Reference","permalink":"/develop/it/docs/reference/api-reference"}}');var s=n(74848),o=n(28453),i=n(3514),c=n(95068);const a={title:"Api Reference",description:"A List of collection",slug:"api-root",tags:["api","use cases"]},l=void 0,u={},d=[];function p(e){const t={p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["In this section we collected a set of useful ",(0,s.jsx)(t.strong,{children:"guides"})," meant to explain you how to implement the most common use cases using our APIs."]}),"\n",(0,s.jsxs)(t.p,{children:["This list is constantly updated, so if you don't find what you're looking for, please check back later.\nThe category you're currently viewing is divided into Modules, each one containing a set of guides that explain how to perform a specific action.\nThe Modules is: ",(0,s.jsx)(t.strong,{children:(0,c.$S)().label})]}),"\n",(0,s.jsx)(t.p,{children:"Below you can find the list of the available guides:"}),"\n",(0,s.jsx)(i.A,{items:(0,c.$S)().items})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var r=n(34164),s=n(26972),o=n(28774),i=n(53465),c=n(16654),a=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:s,description:o}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function m(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},95068:(e,t,n)=>{n.d(t,{$S:()=>r});n(44586);function r(){return n(44070).$S(...arguments)}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),s=n(44586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);