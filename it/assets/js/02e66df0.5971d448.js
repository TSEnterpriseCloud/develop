"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[6156],{12890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"reference/index","title":"Api Reference","description":"A List of collection","source":"@site/versioned_docs/version-1.0.1/reference/index.mdx","sourceDirName":"reference","slug":"/reference/api-root","permalink":"/develop/it/docs/reference/api-root","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/reference/index.mdx","tags":[{"inline":true,"label":"api","permalink":"/develop/it/docs/tags/api"},{"inline":true,"label":"use cases","permalink":"/develop/it/docs/tags/use-cases"}],"version":"1.0.1","lastUpdatedAt":1737112022000,"frontMatter":{"title":"Api Reference","description":"A List of collection","slug":"api-root","tags":["api","use cases"]},"sidebar":"tutorialSidebar","previous":{"title":"Debug Integrations","permalink":"/develop/it/docs/basics/debug-integrations"},"next":{"title":"Use the API Reference","permalink":"/develop/it/docs/reference/api-reference"}}');var r=t(74848),i=t(28453),o=t(99563),c=t(89791);const l={title:"Api Reference",description:"A List of collection",slug:"api-root",tags:["api","use cases"]},a=void 0,d={},u=[{value:"CO",id:"co",level:3},{value:"MG",id:"mg",level:3},{value:"FI",id:"fi",level:3},{value:"WH",id:"wh",level:3},{value:"PD",id:"pd",level:3}];function p(e){const n={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this section we collected a set of useful ",(0,r.jsx)(n.strong,{children:"guides"})," meant to explain you how to implement the most common use cases using our APIs."]}),"\n",(0,r.jsxs)(n.p,{children:["This list is constantly updated, so if you don't find what you're looking for, please check back later.\nThe category you're currently viewing is divided into Modules, each one containing a set of guides that explain how to perform a specific action.\nThe Modules is: ",(0,r.jsx)(n.strong,{children:(0,c.$S)().label})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"co",children:"CO"}),"\n",(0,r.jsx)(n.p,{children:"Common"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"mg",children:"MG"}),"\n",(0,r.jsx)(n.p,{children:"Document Management"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"fi",children:"FI"}),"\n",(0,r.jsx)(n.p,{children:"Finance Management"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"wh",children:"WH"}),"\n",(0,r.jsx)(n.p,{children:"Warehouse Management"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h3,{id:"pd",children:"PD"}),"\n",(0,r.jsx)(n.p,{children:"Production Management"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Below you can find the list of the available guides:"}),"\n",(0,r.jsx)(o.A,{items:(0,c.$S)().items})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},99563:(e,n,t)=>{t.d(n,{A:()=>j});t(96540);var s=t(34164),r=t(93751),i=t(56289),o=t(81430),c=t(22887),l=t(50539),a=t(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(74848);function p(e){let{href:n,children:t}=e;return(0,u.jsx)(i.A,{href:n,className:(0,s.A)("card padding--lg",d.cardContainer),children:t})}function h(e){let{href:n,icon:t,title:r,description:i}=e;return(0,u.jsxs)(p,{href:n,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,s.A)("text--truncate",d.cardTitle),title:r,children:[t," ",r]}),i&&(0,u.jsx)("p",{className:(0,s.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function m(e){let{item:n}=e;const t=(0,r.Nr)(n),s=function(){const{selectMessage:e}=(0,o.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,u.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??s(n.items.length)}):null}function f(e){let{item:n}=e;const t=(0,c.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(n.docId??void 0);return(0,u.jsx)(h,{href:n.href,icon:t,title:n.label,description:n.description??s?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(f,{item:n});case"category":return(0,u.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const t=(0,r.$S)();return(0,u.jsx)(j,{items:t.items,className:n})}function j(e){const{items:n,className:t}=e;if(!n)return(0,u.jsx)(x,{...e});const i=(0,r.d1)(n);return(0,u.jsx)("section",{className:(0,s.A)("row",t),children:i.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},n)))})}},89791:(e,n,t)=>{t.d(n,{$S:()=>s});t(40797);function s(){return t(56942).$S(...arguments)}},81430:(e,n,t)=>{t.d(n,{W:()=>a});var s=t(96540),r=t(40797);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((n=>e.includes(n)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(n,t)=>function(e,n,t){const s=e.split("|");if(1===s.length)return s[0];s.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=t.select(n),i=t.pluralForms.indexOf(r);return s[Math.min(i,s.length-1)]}(t,n,e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);