"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[38600],{91620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"support/general-knowledge/index","title":"General Knowledge","description":"Facultative documentation for beginners","source":"@site/docs/support/general-knowledge/index.mdx","sourceDirName":"support/general-knowledge","slug":"/support/general-knowledge/","permalink":"/develop/docs/1.0.1/support/general-knowledge/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"general knowledge","permalink":"/develop/docs/1.0.1/tags/general-knowledge"},{"inline":true,"label":"beginner","permalink":"/develop/docs/1.0.1/tags/beginner"},{"inline":true,"label":"concepts","permalink":"/develop/docs/1.0.1/tags/concepts"}],"version":"current","lastUpdatedAt":1739225591000,"frontMatter":{"title":"General Knowledge","description":"Facultative documentation for beginners","tags":["general knowledge","beginner","concepts"]},"sidebar":"tutorialSidebar","previous":{"title":"Change Log","permalink":"/develop/docs/1.0.1/support/change-log"},"next":{"title":"OAuth 2.0","permalink":"/develop/docs/1.0.1/support/general-knowledge/oauth2"}}');var o=n(74848),s=n(28453),l=n(99563),i=n(89791);const c={title:"General Knowledge",description:"Facultative documentation for beginners",tags:["general knowledge","beginner","concepts"]},a=void 0,u={},d=[];function p(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"If you need to brush up your knowledge of the general concepts described in this documentation, we wrote some pages for you."}),"\n",(0,o.jsx)(l.A,{items:(0,i.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},99563:(e,t,n)=>{n.d(t,{A:()=>w});n(96540);var r=n(34164),o=n(93751),s=n(56289),l=n(81430),i=n(22887),c=n(50539),a=n(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:o,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function g(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},89791:(e,t,n)=>{n.d(t,{$S:()=>r});n(40797);function r(){return n(56942).$S(...arguments)}},81430:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(96540),o=n(40797);const s=["zero","one","two","few","many","other"];function l(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);