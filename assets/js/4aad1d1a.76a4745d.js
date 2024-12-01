"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[26884],{70343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"stepbystep/quickstarts/index","title":"Quickstarts Overview","description":"Code to get you started","source":"@site/docs/stepbystep/quickstarts/index.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/","permalink":"/develop/docs/next/stepbystep/quickstarts/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stepbystep/quickstarts/index.mdx","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/next/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/docs/next/tags/code-example"}],"version":"current","frontMatter":{"title":"Quickstarts Overview","description":"Code to get you started","tags":["quickstarts","code example"]},"sidebar":"tutorialSidebar","previous":{"title":"Authentication Mode","permalink":"/develop/docs/next/stepbystep/manual-authentication"},"next":{"title":"Postman Collection","permalink":"/develop/docs/next/stepbystep/quickstarts/postman-collection"}}');var r=n(74848),o=n(28453),i=n(3514),a=n(95068);const c={title:"Quickstarts Overview",description:"Code to get you started",tags:["quickstarts","code example"]},l=void 0,u={},d=[];function p(e){const t={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Quickstarts are documents that explain how to configure and run a simple app that calls a TSE in Cloud v2 API. Following the quickstart, you'll be able to build minimal applications that you can use as a starting point to integrate your code with TSE in Cloud."}),"\n",(0,r.jsxs)(t.p,{children:["We also have a repo with all the working examples ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts",children:"here"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The following quickstarts are currently available:"}),"\n",(0,r.jsx)(i.A,{items:(0,a.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>k});n(96540);var s=n(34164),r=n(26972),o=n(28774),i=n(53465),a=n(16654),c=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:o}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,s.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),o&&(0,d.jsx)("p",{className:(0,s.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),s=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const o=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,s.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},95068:(e,t,n)=>{n.d(t,{$S:()=>s});n(44586);function s(){return n(44070).$S(...arguments)}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var s=n(96540),r=n(44586);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return s[Math.min(o,s.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);