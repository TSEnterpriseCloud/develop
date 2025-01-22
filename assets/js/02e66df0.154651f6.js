"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[6156],{12890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"reference/index","title":"Api Reference","description":"A List of collection","source":"@site/versioned_docs/version-1.0.1/reference/index.mdx","sourceDirName":"reference","slug":"/reference/api-root","permalink":"/develop/docs/reference/api-root","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"api","permalink":"/develop/docs/tags/api"},{"inline":true,"label":"use cases","permalink":"/develop/docs/tags/use-cases"}],"version":"1.0.1","lastUpdatedAt":1737366560000,"frontMatter":{"title":"Api Reference","description":"A List of collection","slug":"api-root","tags":["api","use cases"]},"sidebar":"tutorialSidebar","previous":{"title":"Debug Integrations","permalink":"/develop/docs/basics/debug-integrations"},"next":{"title":"Use the API Reference","permalink":"/develop/docs/reference/api-reference"}}');var s=t(74848),i=t(28453),o=t(99563),l=t(89791);const c={title:"Api Reference",description:"A List of collection",slug:"api-root",tags:["api","use cases"]},a=void 0,d={},u=[{value:"CO",id:"co",level:3},{value:"MG",id:"mg",level:3},{value:"FI",id:"fi",level:3},{value:"WH",id:"wh",level:3},{value:"PD",id:"pd",level:3}];function p(e){const n={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In this section we collected a set of useful ",(0,s.jsx)(n.strong,{children:"guides"})," meant to explain you how to implement the most common use cases using our APIs."]}),"\n",(0,s.jsxs)(n.p,{children:["This list is constantly updated, so if you don't find what you're looking for, please check back later.\nThe category you're currently viewing is divided into Modules, each one containing a set of guides that explain how to perform a specific action.\nThe Modules is: ",(0,s.jsx)(n.strong,{children:(0,l.$S)().label})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h3,{id:"co",children:"CO"}),"\n",(0,s.jsx)(n.p,{children:"Common"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h3,{id:"mg",children:"MG"}),"\n",(0,s.jsx)(n.p,{children:"Document Management"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h3,{id:"fi",children:"FI"}),"\n",(0,s.jsx)(n.p,{children:"Finance Management"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h3,{id:"wh",children:"WH"}),"\n",(0,s.jsx)(n.p,{children:"Warehouse Management"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.h3,{id:"pd",children:"PD"}),"\n",(0,s.jsx)(n.p,{children:"Production Management"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Below you can find the list of the available guides:"}),"\n",(0,s.jsx)(o.A,{items:(0,l.$S)().items})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},99563:(e,n,t)=>{t.d(n,{A:()=>j});t(96540);var r=t(34164),s=t(93751),i=t(56289),o=t(81430),l=t(22887),c=t(50539),a=t(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(74848);function p(e){let{href:n,children:t}=e;return(0,u.jsx)(i.A,{href:n,className:(0,r.A)("card padding--lg",d.cardContainer),children:t})}function h(e){let{href:n,icon:t,title:s,description:i}=e;return(0,u.jsxs)(p,{href:n,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[t," ",s]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function f(e){let{item:n}=e;const t=(0,s.Nr)(n),r=function(){const{selectMessage:e}=(0,o.W)();return n=>e(n,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,u.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??r(n.items.length)}):null}function m(e){let{item:n}=e;const t=(0,l.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(n.docId??void 0);return(0,u.jsx)(h,{href:n.href,icon:t,title:n.label,description:n.description??r?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(m,{item:n});case"category":return(0,u.jsx)(f,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const t=(0,s.$S)();return(0,u.jsx)(j,{items:t.items,className:n})}function j(e){const{items:n,className:t}=e;if(!n)return(0,u.jsx)(x,{...e});const i=(0,s.d1)(n);return(0,u.jsx)("section",{className:(0,r.A)("row",t),children:i.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},n)))})}},89791:(e,n,t)=>{t.d(n,{$S:()=>r});t(40797);function r(){return t(56942).$S(...arguments)}},81430:(e,n,t)=>{t.d(n,{W:()=>a});var r=t(96540),s=t(40797);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((n=>e.includes(n)))}const l={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:o(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(n,t)=>function(e,n,t){const r=e.split("|");if(1===r.length)return r[0];r.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=t.select(n),i=t.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(t,n,e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);