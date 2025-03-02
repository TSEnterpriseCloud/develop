"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[55671],{7986:(e,n,t)=>{t.r(n),t.d(n,{CenteredText:()=>c,assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"stepbystep/company","title":"Company ID *","description":"Perch\xe9 ho bisogno del company ID?","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/stepbystep/company.mdx","sourceDirName":"stepbystep","slug":"/stepbystep/company-methods","permalink":"/it/docs/stepbystep/company-methods","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"basics","permalink":"/it/docs/tags/basics"},{"inline":true,"label":"terms","permalink":"/it/docs/tags/terms"},{"inline":true,"label":"concepts","permalink":"/it/docs/tags/concepts"},{"inline":true,"label":"company","permalink":"/it/docs/tags/company"},{"inline":true,"label":"company id","permalink":"/it/docs/tags/company-id"},{"inline":true,"label":"scopes","permalink":"/it/docs/tags/scopes"},{"inline":true,"label":"unauthorized","permalink":"/it/docs/tags/unauthorized"},{"inline":true,"label":"401","permalink":"/it/docs/tags/401"}],"version":"1.0.1","lastUpdatedAt":1740753802000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Company ID *","slug":"company-methods","description":"Perch\xe9 ho bisogno del company ID?","tags":["basics","terms","concepts","company","company id","scopes","unauthorized","401"]},"sidebar":"tutorialSidebar","previous":{"title":"Autenticazione *","permalink":"/it/docs/stepbystep/authentication"},"next":{"title":"Scope *","permalink":"/it/docs/stepbystep/scope"}}');var r=t(74848),i=t(28453);t(65537),t(79329);const o={sidebar_position:3,title:"Company ID *",slug:"company-methods",description:"Perch\xe9 ho bisogno del company ID?",tags:["basics","terms","concepts","company","company id","scopes","unauthorized",401]},s=void 0,l={},c=({children:e})=>(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",color:"gray"},children:e}),u=[{value:"Use Company ID",id:"use-company-id",level:3},{value:"Perch\xe9 ho bisogno del company ID?",id:"perch\xe9-ho-bisogno-del-company-id",level:3},{value:"Come recuperare il company ID",id:"come-recuperare-il-company-id",level:3}];function d(e){const n={code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"use-company-id",children:"Use Company ID"}),"\n",(0,r.jsx)(n.p,{children:"Nelle richieste del servizio WebApi, \xe8 possibile specificare i seguenti parametri:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"user"})}),": nome utente dell\u2019applicazione"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"company"}),": company id (obbligatorio nelle chiamate funzionali)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Questi parametri devono essere aggiunti all\u2019URL utilizzando la sintassi standard:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"GET: http://{server}:{port}/api/v1/{scope}/{module}/{resource}/{id}?user=TeamSa&company=1\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": Se i parametri non sono specificati, verranno utilizzati quelli definiti dall\u2019utente durante la configurazione dell\u2019autenticazione del servizio."]}),"\n",(0,r.jsx)(n.h3,{id:"perch\xe9-ho-bisogno-del-company-id",children:"Perch\xe9 ho bisogno del company ID?"}),"\n",(0,r.jsx)(n.p,{children:"La propriet\xe0 'company' \xe8 fondamentale per le API di TSE in Cloud per capire a quale societ\xe0 ti riferisci quando fai una richiesta.\nPer questo motivo \xe8 necessario specificare l\u2019ID della company nell\u2019URL.\nFanno eccezione le chiamate che non richiedono un company_id, come la chiamata per ottenere il token di autenticazione"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dalla versione 202501000"})," \xe8 stata introdotta una logica di default per il campo 'ditta' nei Data Transfer Object (DTO).\nSe il valore del campo 'ditta' dell'entit\xe0 \"root\" non viene fornito o \xe8 nullo, viene automaticamente popolato con il codice ditta ricavato\ndalla sessione utente corrente (parametro 'company'). Questa operazione si propaga a tutte le entit\xe0 'external' ed 'internal' associate."]}),"\n",(0,r.jsx)(n.h3,{id:"come-recuperare-il-company-id",children:"Come recuperare il company ID"}),"\n",(0,r.jsx)(n.p,{children:"Il Company ID viene fornito dal TSE in Cloud API quando crei una nuova societ\xe0.\nIl Company ID \xe8 unico e viene assegnato alla societ\xe0 al momento della creazione.\nIl Company ID \xe8 visibile nella sezione Gestione Societ\xe0 nel modulo WebApp."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"API Gateway",src:t(22376).A+"",width:"1408",height:"435"})}),"\n",(0,r.jsx)(c,{children:(0,r.jsx)(n.p,{children:"Clicca qui per visualizzare l\u2019elenco delle company e dei relativi ID."})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(34164);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(96540),r=t(34164),i=t(65627),o=t(56347),s=t(50372),l=t(30604),c=t(11861),u=t(78749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=h({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),y=(()=>{const e=c??b;return m({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,i]),tabValues:i}}var f=t(9136);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function I(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(x,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(n))}},22376:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/company-list-35ec8d23bc13329b3655e196a2c25c61.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);