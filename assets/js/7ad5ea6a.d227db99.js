"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[54743],{92689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>m});const r=JSON.parse('{"id":"scenario/common/index","title":"Common","description":"Common Master Data Usage Scenarios","source":"@site/versioned_docs/version-1.0.1/scenario/common/index.mdx","sourceDirName":"scenario/common","slug":"/scenario/common/","permalink":"/docs/scenario/common/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"guides","permalink":"/docs/tags/guides"},{"inline":true,"label":"use cases","permalink":"/docs/tags/use-cases"},{"inline":true,"label":"masterdata","permalink":"/docs/tags/masterdata"},{"inline":true,"label":"customer","permalink":"/docs/tags/customer"},{"inline":true,"label":"supplier","permalink":"/docs/tags/supplier"},{"inline":true,"label":"item","permalink":"/docs/tags/item"}],"version":"1.0.1","lastUpdatedAt":1740656035000,"frontMatter":{"title":"Common","description":"Common Master Data Usage Scenarios","tags":["guides","use cases","masterdata","customer","supplier","item"]},"sidebar":"tutorialSidebar","previous":{"title":"Scenario","permalink":"/docs/scenario/"},"next":{"title":"General Master Data *","permalink":"/docs/scenario/common/general-master-data"}}');var s=n(74848),i=n(28453),o=n(94420),a=n(89791);const c={title:"Common",description:"Common Master Data Usage Scenarios",tags:["guides","use cases","masterdata","customer","supplier","item"]},l=void 0,u={},m=[];function d(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Scenari di utilizzo dei servizi comuni:"}),"\n",(0,s.jsx)(o.A,{items:(0,a.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},94420:(e,t,n)=>{n.d(t,{A:()=>C});n(96540);var r=n(34164),s=n(93751),i=n(56289),o=n(81430),a=n(22887),c=n(50539),l=n(9303);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};var m=n(74848);function d(e){let{href:t,children:n}=e;return(0,m.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:i}=e;return(0,m.jsxs)(d,{href:t,children:[(0,m.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,m.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,m.jsx)(p,{href:n,icon:(0,m.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#0D6C80"}),(0,m.jsx)("path",{d:"M25 28.625C25.3125 28.625 25.625 28.3516 25.625 28V16.75H22.5C21.7969 16.75 21.25 16.2031 21.25 15.5V12.375H15C14.6484 12.375 14.375 12.6875 14.375 13V28C14.375 28.3516 14.6484 28.625 15 28.625H25ZM12.5 13C12.5 11.6328 13.5938 10.5 15 10.5H21.4453C22.1094 10.5 22.7344 10.7734 23.2031 11.2422L26.7578 14.7969C27.2266 15.2656 27.5 15.8906 27.5 16.5547V28C27.5 29.4062 26.3672 30.5 25 30.5H15C13.5938 30.5 12.5 29.4062 12.5 28V13Z",fill:"white"})]}),title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?(0,m.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("rect",{width:"40",height:"40",rx:"20",fill:"#C53090"}),(0,m.jsx)("path",{d:"M25 28.625C25.3125 28.625 25.625 28.3516 25.625 28V16.75H22.5C21.7969 16.75 21.25 16.2031 21.25 15.5V12.375H15C14.6484 12.375 14.375 12.6875 14.375 13V28C14.375 28.3516 14.6484 28.625 15 28.625H25ZM12.5 13C12.5 11.6328 13.5938 10.5 15 10.5H21.4453C22.1094 10.5 22.7344 10.7734 23.2031 11.2422L26.7578 14.7969C27.2266 15.2656 27.5 15.8906 27.5 16.5547V28C27.5 29.4062 26.3672 30.5 25 30.5H15C13.5938 30.5 12.5 29.4062 12.5 28V13Z",fill:"white"})]}):"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,m.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(f,{item:t});case"category":return(0,m.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,m.jsx)(C,{items:n.items,className:t})}function C(e){const{items:t,className:n}=e;if(!t)return(0,m.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,m.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(g,{item:e})},t)))})}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},81430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),s=n(40797);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);