"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[61587],{29577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"sdks/index","title":"SDKs Overview","description":"Be smart! Use our SDKs!","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/sdks/index.mdx","sourceDirName":"sdks","slug":"/sdks/","permalink":"/develop/it/docs/1.0.1/sdks/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sdk","permalink":"/develop/it/docs/1.0.1/tags/sdk"},{"inline":true,"label":"code example","permalink":"/develop/it/docs/1.0.1/tags/code-example"}],"version":"current","lastUpdatedAt":1739273683000,"frontMatter":{"title":"SDKs Overview","description":"Be smart! Use our SDKs!","tags":["sdk","code example"]},"sidebar":"tutorialSidebar","previous":{"title":"Examples APIs","permalink":"/develop/it/docs/1.0.1/reference/examples-apis"},"next":{"title":".NET SDK","permalink":"/develop/it/docs/1.0.1/sdks/net-sdk"}}');var i=t(74848),o=t(28453),r=t(99563),a=t(89791);const l={title:"SDKs Overview",description:"Be smart! Use our SDKs!",tags:["sdk","code example"]},d=void 0,c={},u=[{value:"\ud83d\udc83\xa0 I&#39;m ready to dance! What is on the SDK playlist?",id:"dancer-im-ready-to-dance-what-is-on-the-sdk-playlist",level:2},{value:"\ud83d\ude4b\u200d\u2642\ufe0f\xa0 Do I really need to use an SDK?",id:"raising_hand_man-do-i-really-need-to-use-an-sdk",level:2},{value:"\ud83d\ude1f\xa0 My favorite language is not supported! What can I do?",id:"worried-my-favorite-language-is-not-supported-what-can-i-do",level:2},{value:"\ud83d\udc1b\xa0 I found a bug on your SDKs, what can I do?",id:"bug-i-found-a-bug-on-your-sdks-what-can-i-do",level:2},{value:"\ud83d\udcda\xa0 Additional Resources",id:"books-additional-resources",level:2}];function h(e){const n={a:"a",admonition:"admonition",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["To help you interact with our APIs we decided to create a set of ",(0,i.jsx)(n.strong,{children:"dedicated SDKs"})," (Software Developer Kits) in a certain number of programming languages, that can be useful to speed up the integration process.\nThese SDKs provide updated ",(0,i.jsx)(n.strong,{children:"models and methods"})," to contact our APIs with minimal configuration, making it possible to start interacting with TSE in Cloud within minutes: in most cases, you just need to ",(0,i.jsx)(n.a,{href:"/basics/authentication.mdx",children:"retrieve the Access Token"})," and you're ready to go!"]}),"\n",(0,i.jsx)(n.admonition,{title:"Confused?",type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://youtu.be/kG-fLp9BTRo",children:"Here"})," you can find a really interesting video that explains the relationship between APIs and SDKs, and we suggest watching it if you still have some doubts."]})}),"\n",(0,i.jsxs)(n.h2,{id:"dancer-im-ready-to-dance-what-is-on-the-sdk-playlist",children:["\ud83d\udc83","\xa0 I'm ready to dance! What is on the SDK playlist?"]}),"\n",(0,i.jsx)(n.p,{children:"Here you can find the list of the currently supported SDKs:"}),"\n",(0,i.jsx)(r.A,{items:(0,a.$S)().items}),"\n",(0,i.jsx)(n.p,{children:"Our SDKs are released with MIT license."}),"\n",(0,i.jsxs)(n.h2,{id:"raising_hand_man-do-i-really-need-to-use-an-sdk",children:["\ud83d\ude4b\u200d\u2642\ufe0f","\xa0 Do I really need to use an SDK?"]}),"\n",(0,i.jsxs)(n.p,{children:["Actually, no. TSE in Cloud provides simple ",(0,i.jsx)(n.a,{href:"/general-knowledge/rest-apis.md",children:"REST APIs"}),", and if you want you are free to write your own code to contact them; you'll find useful info in the ",(0,i.jsx)(n.em,{children:"API reference"})," section of this documentation."]}),"\n",(0,i.jsx)(n.p,{children:"We strongly suggest using our SDKs, here you can find some good reasons to decide to use them:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It simplifies the integration task, providing useful models and methods out-of-the-box;"}),"\n",(0,i.jsx)(n.li,{children:"We'll take care of it for you, updating the models and the dependencies when needed;"}),"\n",(0,i.jsx)(n.li,{children:"We'll test and fix bugs that will eventually arise on our APIs."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"There are some possible reasons why you could prefer to write custom code instead:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Your programming language is not yet supported;"}),"\n",(0,i.jsx)(n.li,{children:"You're using an unsupported version of a supported programming language (for example PHP 5);"}),"\n",(0,i.jsx)(n.li,{children:"You have some dependency conflict;"}),"\n",(0,i.jsx)(n.li,{children:"You are using a small subset of our APIs and don't want to install the whole SDK;"}),"\n",(0,i.jsx)(n.li,{children:"You are already using a different set of libraries (for example, a different HTTP client) and don't want to introduce another dependency;"}),"\n",(0,i.jsx)(n.li,{children:"You just want to stay as vanilla as possible."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"worried-my-favorite-language-is-not-supported-what-can-i-do",children:["\ud83d\ude1f","\xa0 My favorite language is not supported! What can I do?"]}),"\n",(0,i.jsx)(n.p,{children:"Don't worry. We're planning to provide SDKs for the most popular programming languages, so your favorite one could be the next!"}),"\n",(0,i.jsx)(n.p,{children:"In the meanwhile, you can:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Send suggestions"}),": If we receive a lot of requests for a particular language, it will be more likely to be the next in line!"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Go Vanilla"}),": If you check the ",(0,i.jsx)(n.a,{href:"/quickstarts/vanilla-code.mdx",children:"Vanilla code"})," section of our documentation you can find all the information required to write vanilla code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Generate your own SDK"}),": We provide an ",(0,i.jsx)(n.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"})," for the TSE in Cloud API, so you can use it to generate your home-made SDK! :cook:"]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"bug-i-found-a-bug-on-your-sdks-what-can-i-do",children:["\ud83d\udc1b","\xa0 I found a bug on your SDKs, what can I do?"]}),"\n",(0,i.jsx)(n.p,{children:"Any help is always welcome!"}),"\n",(0,i.jsxs)(n.p,{children:["Feel free to ",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue",children:"open an issue"})," on the repository of the specific SDK (check the dedicated pages), describing the issue, sharing example code to replicate the error, and eventually proposing a possible solution."]}),"\n",(0,i.jsxs)(n.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional Resources"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Software_development_kit",children:"SDK on Wikipedia"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},99563:(e,n,t)=>{t.d(n,{A:()=>y});t(96540);var s=t(34164),i=t(93751),o=t(56289),r=t(81430),a=t(22887),l=t(50539),d=t(9303);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=t(74848);function h(e){let{href:n,children:t}=e;return(0,u.jsx)(o.A,{href:n,className:(0,s.A)("card padding--lg",c.cardContainer),children:t})}function p(e){let{href:n,icon:t,title:i,description:o}=e;return(0,u.jsxs)(h,{href:n,children:[(0,u.jsxs)(d.A,{as:"h2",className:(0,s.A)("text--truncate",c.cardTitle),title:i,children:[t," ",i]}),o&&(0,u.jsx)("p",{className:(0,s.A)("text--truncate",c.cardDescription),title:o,children:o})]})}function m(e){let{item:n}=e;const t=(0,i.Nr)(n),s=function(){const{selectMessage:e}=(0,r.W)();return n=>e(n,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return t?(0,u.jsx)(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??s(n.items.length)}):null}function f(e){let{item:n}=e;const t=(0,a.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.cC)(n.docId??void 0);return(0,u.jsx)(p,{href:n.href,icon:t,title:n.label,description:n.description??s?.description})}function g(e){let{item:n}=e;switch(n.type){case"link":return(0,u.jsx)(f,{item:n});case"category":return(0,u.jsx)(m,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function x(e){let{className:n}=e;const t=(0,i.$S)();return(0,u.jsx)(y,{items:t.items,className:n})}function y(e){const{items:n,className:t}=e;if(!n)return(0,u.jsx)(x,{...e});const o=(0,i.d1)(n);return(0,u.jsx)("section",{className:(0,s.A)("row",t),children:o.map(((e,n)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},n)))})}},89791:(e,n,t)=>{t.d(n,{$S:()=>s});t(40797);function s(){return t(56942).$S(...arguments)}},81430:(e,n,t)=>{t.d(n,{W:()=>d});var s=t(96540),i=t(40797);const o=["zero","one","two","few","many","other"];function r(e){return o.filter((n=>e.includes(n)))}const a={locale:"en",pluralForms:r(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,s.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:r(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),a}}),[e])}function d(){const e=l();return{selectMessage:(n,t)=>function(e,n,t){const s=e.split("|");if(1===s.length)return s[0];s.length>t.pluralForms.length&&console.error(`For locale=${t.locale}, a maximum of ${t.pluralForms.length} plural forms are expected (${t.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const i=t.select(n),o=t.pluralForms.indexOf(i);return s[Math.min(o,s.length-1)]}(t,n,e)}}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);