"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[27915],{98149:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scenario/finance/index","title":"Finance","description":"Scenari di utilizzo dei servizi relativi al modulo Finance","source":"@site/docs/scenario/finance/index.mdx","sourceDirName":"scenario/finance","slug":"/scenario/finance/","permalink":"/develop/docs/1.0.1/scenario/finance/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"guides","permalink":"/develop/docs/1.0.1/tags/guides"},{"inline":true,"label":"use cases","permalink":"/develop/docs/1.0.1/tags/use-cases"}],"version":"current","lastUpdatedAt":1737137870000,"frontMatter":{"title":"Finance","description":"Scenari di utilizzo dei servizi relativi al modulo Finance","tags":["guides","use cases"]},"sidebar":"tutorialSidebar","previous":{"title":"Documents MG","permalink":"/develop/docs/1.0.1/scenario/documents/"},"next":{"title":"Warehouse ","permalink":"/develop/docs/1.0.1/scenario/wharehouse/"}}');var i=n(74848),s=n(28453),o=n(99563),c=n(89791);const a={title:"Finance",description:"Scenari di utilizzo dei servizi relativi al modulo Finance",tags:["guides","use cases"]},l=void 0,u={},d=[];function m(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Elenco scenari di utilizzo supportati per i servizi comuni.:"}),"\n",(0,i.jsx)(o.A,{items:(0,c.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},99563:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var r=n(34164),i=n(93751),s=n(56289),o=n(81430),c=n(22887),a=n(50539),l=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),i=n(40797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);