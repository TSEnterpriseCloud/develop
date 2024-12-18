"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[9829],{85216:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"support/faq","title":"FAQs","description":"FAQs","source":"@site/versioned_docs/version-1.0.1/support/faq.mdx","sourceDirName":"support","slug":"/support/FAQs","permalink":"/develop/it/docs/support/FAQs","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/support/faq.mdx","tags":[{"inline":true,"label":"faqs","permalink":"/develop/it/docs/tags/faqs"},{"inline":true,"label":"questions","permalink":"/develop/it/docs/tags/questions"},{"inline":true,"label":"help","permalink":"/develop/it/docs/tags/help"},{"inline":true,"label":"support","permalink":"/develop/it/docs/tags/support"}],"version":"1.0.1","lastUpdatedAt":1733089972000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"FAQs","slug":"FAQs","description":"FAQs","tags":["faqs","questions","help","support"]},"sidebar":"tutorialSidebar","previous":{"title":"Support & Feature Request","permalink":"/develop/it/docs/support/support"},"next":{"title":"Support link","permalink":"/develop/it/docs/support/support-link"}}');var i=t(74848),o=t(28453),r=t(18815);const a={sidebar_position:1,title:"FAQs",slug:"FAQs",description:"FAQs",tags:["faqs","questions","help","support"]},c=void 0,d={},l=[];function h(e){const s={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.A,{question:"I have an Invoice XML, can I import it using TSE in Cloud APIs?",children:[(0,i.jsxs)(s.p,{children:["No, currently our APIs don't support the upload of XML, you can use the"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/api-reference#post-/c/-company_id-/issued_documents",children:(0,i.jsx)(s.p,{children:"Create Issued Document"})})," ",(0,i.jsxs)(s.p,{children:["request with ",(0,i.jsx)("b",{children:"only"})," JSON format. You can check"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/guides/externally-generated-xml",children:(0,i.jsx)(s.p,{children:"this guide"})})," ",(0,i.jsx)(s.p,{children:"for a more detailed explanation."})]}),"\n",(0,i.jsx)(r.A,{question:"Which authentication method should I use?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["To start working with our APIs in a development environment, you can just\nuse a Manual Token. We created a more extensive"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/basics/authentication",children:(0,i.jsx)(s.p,{children:"guide to the authentication method selection"})})," ",(0,i.jsx)(s.p,{children:"to help you choose the one that you'll use when going live."})]})}),"\n",(0,i.jsx)(r.A,{question:"Where can I find my Company ID?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The Company ID is a really important parameter for the TSE in Cloud APIs\nbecause it enables the user to use"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/basics/company-scoped-methods",children:(0,i.jsx)(s.p,{children:"Company-scoped methods."})}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:["To retrieve your Client ID, you can use the"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/api-reference#get-/user/companies",children:(0,i.jsx)(s.p,{children:"List User Companies"})})," ",(0,i.jsxs)(s.p,{children:["method, and retrieve the ",(0,i.jsx)("i",{children:"id"})," field for the desired company. The ID is fixed,\nso you can retrieve it once and store it if needed. To check if the ID is correct,\nyou can try to use the "," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/api-reference#get-/c/-company_id-/company/info",children:(0,i.jsx)(s.p,{children:"Get Company Info"})}),(0,i.jsx)(s.p,{children:"method to see if the correct result is returned."})]})}),"\n",(0,i.jsx)(r.A,{question:"I just need to create an invoice, how can I do it?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"This is our most common use case, so we prepared a dedicated"}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/guides/invoice-creation",children:(0,i.jsx)(s.p,{children:"guide"})}),(0,i.jsx)(s.p,{children:"to explain how to create an invoice step by step."})]})}),"\n",(0,i.jsx)(r.A,{question:"How can I show the client's mail, fax, etc. in the document?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)("i",{children:"Issued Document"})," model contains an ",(0,i.jsx)("i",{children:"entity"})," field, that will\ncontain the details of the client or the supplier, depending on the kind of\ndocument."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:["When the client is not inserted in the clients list, only some of the details\nare stored and thus shown in the resulting document. The only way to show the\nadditional fields is to create the client using the ",(0,i.jsxs)("a",{href:"https://developers.fattureincloud.it/api-reference#post-/c/-company_id-/entities/clients",children:["\nCreate Client"," ","\n"]})," method (if it doesn't exist yet) and insert the client's ",(0,i.jsx)("i",{children:"id"})," in the"," ","\n",(0,i.jsx)("i",{children:"entity"})," object. Since we don't autocomplete the entity object, you should\nalso insert all the client's details that must be shown in the document while\ncreating the ",(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/api-reference#post-/c/-company_id-/issued_documents",children:"\nCreate Issued Document\n"})," request."]})]})}),"\n",(0,i.jsx)(r.A,{question:"Why am I receiving a Document Totals Error? (Il totale dei pagamenti non corrisponde al totale da pagare)",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["The TSE in Cloud software makes some calculations, that could differ\nfrom yours because of the applied rounding. We prepared a"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/guides/invoice-totals",children:(0,i.jsx)(s.p,{children:"guide"})})," ",(0,i.jsx)(s.p,{children:"to explain all the possible solutions to this issue."})]})}),"\n",(0,i.jsx)(r.A,{question:"Why are the List methods returning just a subset of the available elements?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Every account has a potentially huge number of entities and documents, so we\nneed to preserve the functionality of our system by ",(0,i.jsx)("i",{children:"paginating"})," the\nresults; to safeguard our systems it is not possible to deactivate\npagination, so it is important to manage it properly."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:["We explained how to do it in this ",(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/basics/additional-capabilities/paginate-results",children:"\nguide\n"}),"."]})]})}),"\n",(0,i.jsx)(r.A,{question:"Why are the APIs returning more empty fields than expected?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["To avoid generating huge responses containing a lot of unnecessary data, we\nimplemented a ",(0,i.jsx)("i",{children:"customization"})," functionality that makes it possible to\ndefine which fields must be returned. If you want to know more, you should\ncheck this"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/basics/additional-capabilities/customize-response",children:(0,i.jsx)(s.p,{children:"guide"})}),(0,i.jsx)(s.p,{children:"describing the functionality in detail."})]})}),"\n",(0,i.jsx)(r.A,{question:"Do you have a test sandbox to test e-invoices?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Yes, we have a special parameter to avoid sending the e-invoice to the SDI\nwhile performing all the checks, you can find more info"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/guides/e-invoice-management/#%EF%B8%8F-the-dry-run-flag",children:(0,i.jsx)(s.p,{children:"here."})})]})}),"\n",(0,i.jsx)(r.A,{question:"Can I use your APIs with a private app?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Sure, a ",(0,i.jsx)("i",{children:"public app"})," is required only in a small subset of use cases,\nand it requires manual approval by our API Team. The ",(0,i.jsx)("i",{children:"private app"})," is\nthe best way to start using our APIs, and in most cases is more than\nsufficient even in production. Check the"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/basics/create-an-app#-app-visibility",children:(0,i.jsx)(s.p,{children:"App Visibility Guide"})})," ",(0,i.jsx)(s.p,{children:"for more information."})]})}),"\n",(0,i.jsx)(r.A,{question:"Do I need to use one of your SDKs?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"No, you just need an HTTP Client. This makes it possible to use our APIs\neven if your programming language isn't currently supported, or if the SDK\nfor your language doesn't support the version you're using."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.p,{children:"Of course, we strongly suggest using our SDKs when possible because they speed\nup your development process."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:["If you still don't think our SDKs are the best solutions for you, you can\ncheck the"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/quickstarts/vanilla-code",children:(0,i.jsx)(s.p,{children:"Vanilla Code Quickstart"})})," ",(0,i.jsx)(s.p,{children:"to help you getting started with some code examples."})]})}),"\n",(0,i.jsx)(r.A,{question:"The invoice net_price is for a single item or all items?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"It refers to a single item."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(s.p,{children:"Let's suppose to have a 'Red Funnel' item."}),(0,i.jsx)("br",{}),(0,i.jsx)(s.p,{children:"If we create an invoice containing the Red Funnel with:"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("br",{}),(0,i.jsx)("li",{children:"net_price = 10\u20ac"}),(0,i.jsx)("li",{children:"quantity = 3"})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:["The total will be ",(0,i.jsx)("code",{children:"10*3=30"}),"."]})]})}),"\n",(0,i.jsx)(r.A,{question:"How do I generate a delivery note (ddt)?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["To create a ddt you have to use the"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/api-reference#get-/c/-company_id-/issued_documents",children:(0,i.jsx)(s.p,{children:"Create Issued Document method"})}),(0,i.jsxs)(s.p,{children:[", passing the ",(0,i.jsx)("code",{children:"type"})," field set to ",(0,i.jsx)("code",{children:"delivery_note"}),"."]}),(0,i.jsx)("br",{}),(0,i.jsxs)(s.p,{children:["You may also find useful the guide: ",(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/guides/invoice-creation",children:"\ncreate an issued document\n"}),"."]})]})}),"\n",(0,i.jsx)(r.A,{question:"How can I avoid giving my developer permission to access my company's data?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["We suggest creating a new TSE in Cloud account and company for your\ndevelopment team. Check the following link for more info:"," "]}),(0,i.jsx)("a",{href:"https://developers.fattureincloud.it/docs/developer-account#%EF%B8%8F-keep-your-own-data-safe",children:(0,i.jsx)(s.p,{children:"Developer Account"})})]})}),"\n",(0,i.jsx)(r.A,{question:"How can I create a self invoice?",children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["A self invoice (autofattura) is a special type of issued document, there are 2 types of\nthem:"," "]}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("b",{children:"self_own_invoice"}),": you are only the client"]})}),(0,i.jsx)("li",{children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("b",{children:"self_supplier_invoice"}),": you are both the client and the supplier"]})})]}),(0,i.jsx)(s.p,{children:"You will also need to set the ei_raw according to the type of autofattura\nthat you want to create, below you can find an example."}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n    "ei_raw": {\n        "FatturaElettronicaBody": {\n            "DatiGenerali": {\n                "DatiGeneraliDocumento": {\n                    "TipoDocumento": "TD18"\n                }\n            }\n        },\n        "FatturaElettronicaHeader": {\n            "CedentePrestatore": {\n                "DatiAnagrafici": {\n                    "RegimeFiscale": "RF01"\n                }\n            }\n        }\n    }\n}\n'})})})]})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},18815:(e,s,t)=>{t.d(s,{A:()=>a});var n=t(96540),i=t(21122),o=(t(92303),t(56347)),r=t(74848);const a=function(e){const s=(0,o.zy)(),t=e.question.split("?")[0].replaceAll(" ","-").toLowerCase(),[a,c]=n.useState(s.hash=="#"+t);return(0,r.jsxs)("div",{className:"faq",id:t,children:[(0,r.jsxs)("div",{className:"question",onClick:()=>c(!a),children:[(0,r.jsxs)("div",{className:"text",children:[e.question,(0,r.jsx)("a",{href:"#"+t,className:"hash-link"})]}),(0,r.jsx)("div",{className:"arrow",children:(0,r.jsx)(i.A,{className:"arrowImg",style:{transform:a&&"rotate(180deg)"},width:"15",alt:"Arrow Image",sources:{light:"/img/arrow.png",dark:"/img/dark-arrow.png"}})})]}),(0,r.jsx)("div",{className:a?"answerExpanded":"answer",children:(0,r.jsx)("div",{className:"content",children:e.children})})]})}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var n=t(96540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);