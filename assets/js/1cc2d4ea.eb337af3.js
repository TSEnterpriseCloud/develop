"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[87374],{51871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"scenario/wharehouse/index","title":"Warehouse ","description":"Scenari di utilizzo dei servizi relativi al modulo Warehouse","source":"@site/docs/scenario/wharehouse/index.mdx","sourceDirName":"scenario/wharehouse","slug":"/scenario/wharehouse/","permalink":"/docs/1.0.1/scenario/wharehouse/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"guides","permalink":"/docs/1.0.1/tags/guides"},{"inline":true,"label":"use cases","permalink":"/docs/1.0.1/tags/use-cases"}],"version":"current","lastUpdatedAt":1740732256000,"frontMatter":{"title":"Warehouse ","description":"Scenari di utilizzo dei servizi relativi al modulo Warehouse","tags":["guides","use cases"]},"sidebar":"tutorialSidebar","previous":{"title":"Finance","permalink":"/docs/1.0.1/scenario/finance/"},"next":{"title":"Operazioni base","permalink":"/docs/1.0.1/basics/"}}');var i=n(74848),s=n(28453),o=n(94420),c=n(89791);const a={title:"Warehouse ",description:"Scenari di utilizzo dei servizi relativi al modulo Warehouse",tags:["guides","use cases"]},l=void 0,u={},d=[];function h(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Elenco scenari di utilizzo supportati per i servizi comuni.:"}),"\n",(0,i.jsx)(o.A,{items:(0,c.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94420:(e,t,n)=>{n.d(t,{A:()=>w});n(96540);var r=n(34164),i=n(93751),s=n(56289),o=n(81430),c=n(22887),a=n(50539),l=n(9303);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=n(74848);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:(0,d.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#0D6C80"}),(0,d.jsx)("path",{d:"M25 28.625C25.3125 28.625 25.625 28.3516 25.625 28V16.75H22.5C21.7969 16.75 21.25 16.2031 21.25 15.5V12.375H15C14.6484 12.375 14.375 12.6875 14.375 13V28C14.375 28.3516 14.6484 28.625 15 28.625H25ZM12.5 13C12.5 11.6328 13.5938 10.5 15 10.5H21.4453C22.1094 10.5 22.7344 10.7734 23.2031 11.2422L26.7578 14.7969C27.2266 15.2656 27.5 15.8906 27.5 16.5547V28C27.5 29.4062 26.3672 30.5 25 30.5H15C13.5938 30.5 12.5 29.4062 12.5 28V13Z",fill:"white"})]}),title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?(0,d.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#C53090"}),(0,d.jsx)("path",{d:"M25 28.625C25.3125 28.625 25.625 28.3516 25.625 28V16.75H22.5C21.7969 16.75 21.25 16.2031 21.25 15.5V12.375H15C14.6484 12.375 14.375 12.6875 14.375 13V28C14.375 28.3516 14.6484 28.625 15 28.625H25ZM12.5 13C12.5 11.6328 13.5938 10.5 15 10.5H21.4453C22.1094 10.5 22.7344 10.7734 23.2031 11.2422L26.7578 14.7969C27.2266 15.2656 27.5 15.8906 27.5 16.5547V28C27.5 29.4062 26.3672 30.5 25 30.5H15C13.5938 30.5 12.5 29.4062 12.5 28V13Z",fill:"white"})]}):"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),i=n(40797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(96540);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);