"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[11400],{81570:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"sdks/additional-capabilities/index","title":"SDKs: Additional capabilities","description":"Additional capabilities for our SDKs","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/sdks/additional-capabilities/index.mdx","sourceDirName":"sdks/additional-capabilities","slug":"/sdks/additional-capabilities/","permalink":"/develop/it/docs/1.0.1/sdks/additional-capabilities/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdks/additional-capabilities/index.mdx","tags":[{"inline":true,"label":"sdk","permalink":"/develop/it/docs/1.0.1/tags/sdk"},{"inline":true,"label":"additional capabilities","permalink":"/develop/it/docs/1.0.1/tags/additional-capabilities"},{"inline":true,"label":"code example","permalink":"/develop/it/docs/1.0.1/tags/code-example"},{"inline":true,"label":"c#","permalink":"/develop/it/docs/1.0.1/tags/c"},{"inline":true,"label":"java","permalink":"/develop/it/docs/1.0.1/tags/java"},{"inline":true,"label":"javascript","permalink":"/develop/it/docs/1.0.1/tags/javascript"},{"inline":true,"label":"php","permalink":"/develop/it/docs/1.0.1/tags/php"},{"inline":true,"label":"python","permalink":"/develop/it/docs/1.0.1/tags/python"},{"inline":true,"label":"ruby","permalink":"/develop/it/docs/1.0.1/tags/ruby"},{"inline":true,"label":"typescript","permalink":"/develop/it/docs/1.0.1/tags/typescript"}],"version":"current","lastUpdatedAt":1736953387000,"frontMatter":{"title":"SDKs: Additional capabilities","description":"Additional capabilities for our SDKs","tags":["sdk","additional capabilities","code example","c#","java","javascript","php","python","ruby","typescript"]},"sidebar":"tutorialSidebar","previous":{"title":"TypeScript SDK","permalink":"/develop/it/docs/1.0.1/sdks/typescript-sdk"},"next":{"title":"Filter Results","permalink":"/develop/it/docs/1.0.1/sdks/additional-capabilities/filter-results"}}');var s=i(74848),a=i(28453),r=i(99563),l=i(89791);const o={title:"SDKs: Additional capabilities",description:"Additional capabilities for our SDKs",tags:["sdk","additional capabilities","code example","c#","java","javascript","php","python","ruby","typescript"]},c=void 0,d={},p=[];function u(e){const t={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Our SDKs are designed to help you using our ",(0,s.jsx)(t.a,{href:"/basics/additional-capabilities/index.mdx",children:"Additional Capabilities"}),"."]}),"\n",(0,s.jsx)(r.A,{items:(0,l.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},99563:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var n=i(34164),s=i(93751),a=i(56289),r=i(81430),l=i(22887),o=i(50539),c=i(9303);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=i(74848);function u(e){let{href:t,children:i}=e;return(0,p.jsx)(a.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:s,description:a}=e;return(0,p.jsxs)(u,{href:t,children:[(0,p.jsxs)(c.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:s,children:[i," ",s]}),a&&(0,p.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e;const i=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,p.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const i=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,p.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,p.jsx)(h,{item:t});case"category":return(0,p.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,s.$S)();return(0,p.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,p.jsx)(g,{...e});const a=(0,s.d1)(t);return(0,p.jsx)("section",{className:(0,n.A)("row",i),children:a.map(((e,t)=>(0,p.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,p.jsx)(b,{item:e})},t)))})}},89791:(e,t,i)=>{i.d(t,{$S:()=>n});i(40797);function n(){return i(56942).$S(...arguments)}},81430:(e,t,i)=>{i.d(t,{W:()=>c});var n=i(96540),s=i(40797);const a=["zero","one","two","few","many","other"];function r(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:r(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,i)=>function(e,t,i){const n=e.split("|");if(1===n.length)return n[0];n.length>i.pluralForms.length&&console.error(`For locale=${i.locale}, a maximum of ${i.pluralForms.length} plural forms are expected (${i.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=i.select(t),a=i.pluralForms.indexOf(s);return n[Math.min(a,n.length-1)]}(i,t,e)}}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);