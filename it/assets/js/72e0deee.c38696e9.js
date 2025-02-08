"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[10532],{87111:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"stepbystep/quickstarts/zapier-quickstart","title":"Zapier Quickstart","description":"Quickstart for the Zapier TSE in Cloud integration","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/stepbystep/quickstarts/zapier-quickstart.md","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/zapier-quickstart","permalink":"/develop/it/docs/1.0.1/stepbystep/quickstarts/zapier-quickstart","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"zapier","permalink":"/develop/it/docs/1.0.1/tags/zapier"},{"inline":true,"label":"no code","permalink":"/develop/it/docs/1.0.1/tags/no-code"},{"inline":true,"label":"shopify","permalink":"/develop/it/docs/1.0.1/tags/shopify"},{"inline":true,"label":"stripe","permalink":"/develop/it/docs/1.0.1/tags/stripe"}],"version":"current","lastUpdatedAt":1738925084000,"sidebarPosition":14,"frontMatter":{"sidebar_position":14,"title":"Zapier Quickstart","slug":"zapier-quickstart","description":"Quickstart for the Zapier TSE in Cloud integration","tags":["zapier","no code","shopify","stripe"]},"sidebar":"tutorialSidebar","previous":{"title":"Google Sheets Apps Script Quickstart","permalink":"/develop/it/docs/1.0.1/stepbystep/quickstarts/apps-script-quickstart"},"next":{"title":"Scenario","permalink":"/develop/it/docs/1.0.1/scenario/"}}');var s=i(74848),o=i(28453);const r={sidebar_position:14,title:"Zapier Quickstart",slug:"zapier-quickstart",description:"Quickstart for the Zapier TSE in Cloud integration",tags:["zapier","no code","shopify","stripe"]},a=void 0,l={},c=[{value:"\u2753\xa0 What is Zapier?",id:"question-what-is-zapier",level:2},{value:"\ud83d\udd0d\xa0 In which cases is it useful?",id:"mag-in-which-cases-is-it-useful",level:2},{value:"\ud83d\udcd6\xa0 Base concepts",id:"open_book-base-concepts",level:2},{value:"\ud83d\udd2b\xa0 Triggers",id:"gun-triggers",level:2},{value:"\ud83c\udfc3\xa0 Actions",id:"running_man-actions",level:2},{value:"\ud83d\udd25\xa0 Turn on the Zap",id:"fire-turn-on-the-zap",level:2},{value:"\ud83c\udf89\xa0 Have fun!",id:"tada-have-fun",level:2},{value:"\ud83d\udcda\xa0 Additional resources",id:"books-additional-resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In this guide, we'll explain how to use Zapier to integrate TSE in Cloud with thousands of other services."}),"\n",(0,s.jsx)(t.admonition,{title:"Open Beta",type:"danger",children:(0,s.jsx)(t.p,{children:"The Zapier integration is published but is still in the beta phase, please contact us if you experience some kind of issue using it."})}),"\n",(0,s.jsxs)(t.admonition,{title:"Do you feel lost?",type:"info",children:[(0,s.jsxs)(t.p,{children:["If you need help with the usage of the Zapier integration, feel free to open a new Discussion in our ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/api/discussions?discussions_q=",children:"Community"}),"!"]}),(0,s.jsxs)(t.p,{children:["If instead you are experiencing a malfunctioning or you think that you found a bug in our integration, please check the ",(0,s.jsx)(t.a,{href:"/docs/support.md",children:"Support Page"}),"!"]})]}),"\n",(0,s.jsxs)(t.h2,{id:"question-what-is-zapier",children:["\u2753","\xa0 What is Zapier?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.zapier.com/",children:"Zapier"})," is a platform made to create automated workflows without the need to write a single line of code, all you will see is an intuitive drag-and-drop editor, ",(0,s.jsx)(t.a,{href:"https://zapier.com/apps/fatture-in-cloud/integrations",children:"here"})," you can find the home page of the TSE in Cloud Zapier integration."]}),"\n",(0,s.jsxs)(t.h2,{id:"mag-in-which-cases-is-it-useful",children:["\ud83d\udd0d","\xa0 In which cases is it useful?"]}),"\n",(0,s.jsx)(t.p,{children:"Zapier is a no-code workflow builder, and its main objective is to make automation available to non-technical people. It can help you building a workflow rapidly, without having to learn a programming language to do it."}),"\n",(0,s.jsx)(t.p,{children:"If you are a developer you can still use Zapier to build simple workflows rapidly, without having to take care of tedious tasks such as authentication and implementation of the API methods."}),"\n",(0,s.jsxs)(t.h2,{id:"open_book-base-concepts",children:["\ud83d\udcd6","\xa0 Base concepts"]}),"\n",(0,s.jsxs)(t.p,{children:["A Zapier workflow is called a ",(0,s.jsx)(t.strong,{children:"Zap"}),". Each Zap consists of a trigger and one or more actions. When you turn on your Zap, it will run the action steps every time the trigger event occurs."]}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.strong,{children:"trigger"})," is an event that starts a Zap. For example, if you want to update an Excel file each time an invoice gets created, the trigger is \u2018new invoice created\u2019."]}),"\n",(0,s.jsxs)(t.p,{children:["An ",(0,s.jsx)(t.strong,{children:"action"})," is an event a Zap performs after it is triggered. For example, if you want to update an Excel file each time an invoice gets created, the action is 'Edit Excel Sheet\u2019."]}),"\n",(0,s.jsx)(t.p,{children:"Let's get more into the specific details of the TSE in Cloud Zapier Integration."}),"\n",(0,s.jsxs)(t.h2,{id:"gun-triggers",children:["\ud83d\udd2b","\xa0 Triggers"]}),"\n",(0,s.jsx)(t.p,{children:"If you try to set up a TSE in Cloud trigger you will see that 2 triggers are available:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Raw Trigger"}),": this trigger makes available to the following actions only the IDs of the interested resources"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Enriched Trigger"}),": this trigger makes available to the following actions the complete resource with all the fields"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["So if you need to set up a trigger that sends an email to the customer when an invoice gets created it is enough the raw trigger (as you need only the ID to use the ",(0,s.jsx)(t.a,{href:"/api-reference#post-/c/-company_id-/issued_documents/-document_id-/email",children:"Schedule Email method"}),"), but if you need to sync an Excel sheet when an invoice gets created then you will need the enriched trigger (as you need the complete invoice body)."]}),"\n",(0,s.jsx)(t.admonition,{title:"Watch the limits!",type:"warning",children:(0,s.jsxs)(t.p,{children:["Keep in mind that the enriched trigger makes a get request under the hood to retrieve the resource body, so it will erode your ",(0,s.jsx)(t.a,{href:"/docs/basics/limits-and-quotas",children:"API limits"}),"."]})}),"\n",(0,s.jsx)(t.admonition,{title:"How do triggers work?",type:"info",children:(0,s.jsxs)(t.p,{children:["The TSE in Cloud's Zapier Triggers are based on our Webhooks functionality. When you use a trigger, it creates a new subscription and starts listening to the notifications generated when something occurs on the resources.\nIf you want more detail or you are just curious, you can check the ",(0,s.jsx)(t.a,{href:"/docs/webhooks/index.mdx",children:"dedicated pages"})," (but you don't need to read them to use our triggers!)."]})}),"\n",(0,s.jsx)(t.p,{children:"Let's create a trigger then:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["create a new ",(0,s.jsx)(t.strong,{children:"Zap"})]}),"\n",(0,s.jsxs)(t.li,{children:["choose the ",(0,s.jsx)(t.strong,{children:"TSE in Cloud app"})]}),"\n",(0,s.jsxs)(t.li,{children:["choose the ",(0,s.jsx)(t.strong,{children:"Enriched Trigger"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"login"})," with TSE in Cloud if you haven't already"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"select the"})," type of ",(0,s.jsx)(t.strong,{children:"trigger"})," you need and select your company, in this example, we are setting up a trigger when a client gets created:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Zapier Trigger Example",src:i(40947).A+""})}),"\n",(0,s.jsx)(t.p,{children:"Now you can test the trigger, this test will retrieve a client (or a different type of resource, depending on the selected trigger type) directly from your TSE in Cloud account so you can test the following actions with real data, keep in mind that if you don't have any resource of the needed type in your account you will get an error."}),"\n",(0,s.jsx)(t.admonition,{title:"Trigger availability",type:"info",children:(0,s.jsxs)(t.p,{children:["Not every type of trigger is currently available, you can check ",(0,s.jsx)(t.a,{href:"/docs/webhooks/notification-types#-event-types",children:"here"})," to see if the notification type you need is currently active."]})}),"\n",(0,s.jsxs)(t.h2,{id:"running_man-actions",children:["\ud83c\udfc3","\xa0 Actions"]}),"\n",(0,s.jsx)(t.p,{children:"To understand what Zapier Actions can do for you, first, you must understand how our APIs work."}),"\n",(0,s.jsx)(t.p,{children:"The TSE in Cloud APIs provide a wide set of methods that let you interact with your account's resources giving you full control over them, by providing the following standard operations:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Get Methods"}),": to read the current status of the resource"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Create Methods"}),": to create a new resource"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Modify Methods"}),": to update an existing resource"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Delete Methods"}),": to delete an existing resource"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can check the list of all the methods provided by our APIs in our ",(0,s.jsx)(t.a,{href:"/docs/api-reference.md",children:"API Reference"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Every Zapier Action implements one of our API methods, making that method available to be used in your Zaps."}),"\n",(0,s.jsx)(t.p,{children:"In the following simple example, we'll show you how to modify a client's name using the Modify Client action."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"choose the event"}),' you need from the list of available methods, in this case, the "modifyClient" event']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"login"})," with TSE in Cloud if you haven't already"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"select your company"})," from the dropdown menu"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"fill in the client ID and the fields"})," you want to edit (in this case only the name):"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Zapier Trigger Example",src:i(473).A+""})}),"\n",(0,s.jsx)(t.p,{children:"Now you can test the action and see if it works as expected."}),"\n",(0,s.jsxs)(t.admonition,{title:"How can I know how to use an action?",type:"info",children:[(0,s.jsxs)(t.p,{children:["Since the Zapier Actions are just an implementation of our API Methods, they provide the same fields and perform the same behavior that you would obtain by using our APIs directly.\nSo we suggest you check our ",(0,s.jsx)(t.a,{href:"/docs/guides/index.mdx",children:"Guides"})," that illustrate how to use our APIs to perform the most common use cases. You just need to map the fields used in the guide to the related ones provided by the Zapier Action."]}),(0,s.jsxs)(t.p,{children:["If you still have some doubts, you can check our ",(0,s.jsx)(t.a,{href:"/docs/support.md",children:"Support Page"})," and ask for help."]})]}),"\n",(0,s.jsxs)(t.h2,{id:"fire-turn-on-the-zap",children:["\ud83d\udd25","\xa0 Turn on the Zap"]}),"\n",(0,s.jsx)(t.p,{children:'At this point we created a Zap that for each client created on TSE in Cloud edits the name by adding "- new name", you can turn it on with the button at the top of the page and test the Zap by creating a client on the TSE in Cloud web application to see if the name gets modified.'}),"\n",(0,s.jsxs)(t.h2,{id:"tada-have-fun",children:["\ud83c\udf89","\xa0 Have fun!"]}),"\n",(0,s.jsx)(t.p,{children:"Probably the newly created Zap won't be useful in a real environment, but with Zapier you can create lots of useful workflows, for example, you could use the Create Issued Document action to create an invoice when an order on your Shopify store gets created, or when you receive a payment in your Stripe account, the possibilities are endless as Zapier supports 6000+ services at the moment and it's always adding more."}),"\n",(0,s.jsxs)(t.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional resources"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.zapier.com/",children:"Zapier Platform"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zapier/",children:"Zapier key concepts"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://zapier.com/apps",children:"Zapier apps"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},473:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/action-249814ae6190a693fa8e2014e6f7967a.png"},40947:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/trigger-969b78bd8d43c2820a714c1d2bf79a1d.png"},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);