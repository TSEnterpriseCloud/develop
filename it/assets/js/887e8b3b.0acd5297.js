"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[53770],{88835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scenario/wharehouse/index","title":"Warehouse ","description":"Scenari di utilizzo dei servizi relativi al modulo Warehouse","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/scenario/wharehouse/index.mdx","sourceDirName":"scenario/wharehouse","slug":"/scenario/wharehouse/","permalink":"/develop/it/docs/1.0.1/scenario/wharehouse/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/scenario/wharehouse/index.mdx","tags":[{"inline":true,"label":"guides","permalink":"/develop/it/docs/1.0.1/tags/guides"},{"inline":true,"label":"use cases","permalink":"/develop/it/docs/1.0.1/tags/use-cases"}],"version":"current","lastUpdatedAt":1736854011000,"frontMatter":{"title":"Warehouse ","description":"Scenari di utilizzo dei servizi relativi al modulo Warehouse","tags":["guides","use cases"]},"sidebar":"tutorialSidebar","previous":{"title":"Finance","permalink":"/develop/it/docs/1.0.1/scenario/finance/"},"next":{"title":"Operazioni base","permalink":"/develop/it/docs/1.0.1/basics/"}}');var s=n(74848),i=n(28453),o=n(99563),c=n(89791);const a={title:"Warehouse ",description:"Scenari di utilizzo dei servizi relativi al modulo Warehouse",tags:["guides","use cases"]},l=void 0,u={},d=[];function m(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Elenco scenari di utilizzo supportati per i servizi comuni.:"}),"\n",(0,s.jsx)(o.A,{items:(0,c.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},99563:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var r=n(34164),s=n(93751),i=n(56289),o=n(81430),c=n(22887),a=n(50539),l=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),s=n(40797);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);