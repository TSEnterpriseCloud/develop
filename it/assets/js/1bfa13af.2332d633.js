"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[29960],{202:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"stepbystep/quickstarts/index","title":"Quickstarts Overview","description":"Code to get you started","source":"@site/versioned_docs/version-1.0.1/stepbystep/quickstarts/index.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/","permalink":"/develop/it/docs/stepbystep/quickstarts/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/stepbystep/quickstarts/index.mdx","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/it/docs/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/it/docs/tags/code-example"}],"version":"1.0.1","lastUpdatedAt":1735903727000,"frontMatter":{"title":"Quickstarts Overview","description":"Code to get you started","tags":["quickstarts","code example"]},"sidebar":"tutorialSidebar","previous":{"title":"Scope *","permalink":"/develop/it/docs/stepbystep/scope"},"next":{"title":"Postman Collection *","permalink":"/develop/it/docs/stepbystep/quickstarts/postman-collection"}}');var r=s(74848),o=s(28453),i=s(99563),a=s(89791);const c={title:"Quickstarts Overview",description:"Code to get you started",tags:["quickstarts","code example"]},l=void 0,u={},d=[];function p(e){const t={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Quickstarts are documents that explain how to configure and run a simple app that calls a TSE in Cloud v2 API. Following the quickstart, you'll be able to build minimal applications that you can use as a starting point to integrate your code with TSE in Cloud."}),"\n",(0,r.jsxs)(t.p,{children:["We also have a repo with all the working examples ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts",children:"here"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The following quickstarts are currently available:"}),"\n",(0,r.jsx)(i.A,{items:(0,a.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},99563:(e,t,s)=>{s.d(t,{A:()=>k});s(96540);var n=s(34164),r=s(93751),o=s(56289),i=s(81430),a=s(22887),c=s(50539),l=s(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=s(74848);function p(e){let{href:t,children:s}=e;return(0,d.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:r,description:o}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:r,children:[s," ",r]}),o&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const s=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,d.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const s=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const s=(0,r.$S)();return(0,d.jsx)(k,{items:s.items,className:t})}function k(e){const{items:t,className:s}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",s),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},89791:(e,t,s)=>{s.d(t,{$S:()=>n});s(40797);function n(){return s(56942).$S(...arguments)}},81430:(e,t,s)=>{s.d(t,{W:()=>l});var n=s(96540),r=s(40797);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,s)=>function(e,t,s){const n=e.split("|");if(1===n.length)return n[0];n.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=s.select(t),o=s.pluralForms.indexOf(r);return n[Math.min(o,n.length-1)]}(s,t,e)}}},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(96540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);