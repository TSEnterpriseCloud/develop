"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[23917],{18408:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"scenario/production/index","title":"Production","description":"Scenari di utilizzo dei servizi legati alla Produzione","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/scenario/production/index.mdx","sourceDirName":"scenario/production","slug":"/scenario/production/","permalink":"/it/docs/scenario/production/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"guides","permalink":"/it/docs/tags/guides"},{"inline":true,"label":"use cases","permalink":"/it/docs/tags/use-cases"}],"version":"1.0.1","lastUpdatedAt":1740656035000,"frontMatter":{"title":"Production","description":"Scenari di utilizzo dei servizi legati alla Produzione","tags":["guides","use cases"]},"sidebar":"tutorialSidebar","previous":{"title":"Acquisizione listini dall\'esterno *","permalink":"/it/docs/scenario/import-export-services/price-list"},"next":{"title":"Scenario legato alla Produzione","permalink":"/it/docs/scenario/production/production"}}');var r=i(74848),s=i(28453),o=i(94420),c=i(89791);const l={title:"Production",description:"Scenari di utilizzo dei servizi legati alla Produzione",tags:["guides","use cases"]},a=void 0,u={},d=[];function p(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Elenco degli scenari di utilizzo supportati per i servizi di Produzione"}),"\n",(0,r.jsx)(o.A,{items:(0,c.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},94420:(e,t,i)=>{i.d(t,{A:()=>C});i(96540);var n=i(34164),r=i(93751),s=i(56289),o=i(81430),c=i(22887),l=i(50539),a=i(9303);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var d=i(74848);function p(e){let{href:t,children:i}=e;return(0,d.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:r,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:r,children:[i," ",r]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const i=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,d.jsx)(m,{href:i,icon:(0,d.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#0D6C80"}),(0,d.jsx)("path",{d:"M25 28.625C25.3125 28.625 25.625 28.3516 25.625 28V16.75H22.5C21.7969 16.75 21.25 16.2031 21.25 15.5V12.375H15C14.6484 12.375 14.375 12.6875 14.375 13V28C14.375 28.3516 14.6484 28.625 15 28.625H25ZM12.5 13C12.5 11.6328 13.5938 10.5 15 10.5H21.4453C22.1094 10.5 22.7344 10.7734 23.2031 11.2422L26.7578 14.7969C27.2266 15.2656 27.5 15.8906 27.5 16.5547V28C27.5 29.4062 26.3672 30.5 25 30.5H15C13.5938 30.5 12.5 29.4062 12.5 28V13Z",fill:"white"})]}),title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const i=(0,c.A)(t.href)?(0,d.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#C53090"}),(0,d.jsx)("path",{d:"M25 28.625C25.3125 28.625 25.625 28.3516 25.625 28V16.75H22.5C21.7969 16.75 21.25 16.2031 21.25 15.5V12.375H15C14.6484 12.375 14.375 12.6875 14.375 13V28C14.375 28.3516 14.6484 28.625 15 28.625H25ZM12.5 13C12.5 11.6328 13.5938 10.5 15 10.5H21.4453C22.1094 10.5 22.7344 10.7734 23.2031 11.2422L26.7578 14.7969C27.2266 15.2656 27.5 15.8906 27.5 16.5547V28C27.5 29.4062 26.3672 30.5 25 30.5H15C13.5938 30.5 12.5 29.4062 12.5 28V13Z",fill:"white"})]}):"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,r.$S)();return(0,d.jsx)(C,{items:i.items,className:t})}function C(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},89791:(e,t,i)=>{i.d(t,{$S:()=>n});i(40797);function n(){return i(56942).$S(...arguments)}},81430:(e,t,i)=>{i.d(t,{W:()=>a});var n=i(96540),r=i(40797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,i)=>function(e,t,i){const n=e.split("|");if(1===n.length)return n[0];n.length>i.pluralForms.length&&console.error(`For locale=${i.locale}, a maximum of ${i.pluralForms.length} plural forms are expected (${i.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=i.select(t),s=i.pluralForms.indexOf(r);return n[Math.min(s,n.length-1)]}(i,t,e)}}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var n=i(96540);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);