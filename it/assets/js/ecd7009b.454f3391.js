"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[85985],{40392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"stepbystep/quickstarts/google-sheets-quickstart","title":"Google Sheets Apps Script Quickstart","description":"Google Sheets Apps Script Quickstart for the TSE in Cloud APIs","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/stepbystep/quickstarts/google-sheets-quickstart.md","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/apps-script-quickstart","permalink":"/it/docs/1.0.1/stepbystep/quickstarts/apps-script-quickstart","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"quickstarts","permalink":"/it/docs/1.0.1/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/it/docs/1.0.1/tags/code-example"},{"inline":true,"label":"apps script","permalink":"/it/docs/1.0.1/tags/apps-script"},{"inline":true,"label":"google sheets","permalink":"/it/docs/1.0.1/tags/google-sheets"}],"version":"current","lastUpdatedAt":1740663201000,"sidebarPosition":13,"frontMatter":{"sidebar_position":13,"title":"Google Sheets Apps Script Quickstart","slug":"apps-script-quickstart","description":"Google Sheets Apps Script Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","apps script","google sheets"]},"sidebar":"tutorialSidebar","previous":{"title":"Excel Power Query Quickstart","permalink":"/it/docs/1.0.1/stepbystep/quickstarts/powerquery-quickstart"},"next":{"title":"Zapier Quickstart","permalink":"/it/docs/1.0.1/stepbystep/quickstarts/zapier-quickstart"}}');var i=n(74848),a=n(28453),r=n(65537),o=n(79329);const c={sidebar_position:13,title:"Google Sheets Apps Script Quickstart",slug:"apps-script-quickstart",description:"Google Sheets Apps Script Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","apps script","google sheets"]},l=void 0,u={},p=[{value:"\ud83d\udcd6\xa0 List Example",id:"open_book-list-example",level:2},{value:"1\ufe0f\u20e3\xa0 Step one: Create the Apps Script function",id:"one-step-one-create-the-apps-script-function",level:3},{value:"2\ufe0f\u20e3\xa0 Step Two: Try it!",id:"two-step-two-try-it",level:3},{value:"\ud83d\udcd6\xa0 Create Example",id:"open_book-create-example",level:2},{value:"1\ufe0f\u20e3\xa0 Step one: Edit the Apps Script functions",id:"one-step-one-edit-the-apps-script-functions",level:3},{value:"2\ufe0f\u20e3\xa0 Step Two: Try it!",id:"two-step-two-try-it-1",level:3},{value:"\ud83d\udcda\xa0 Google Apps Script Documentation",id:"books-google-apps-script-documentation",level:2}];function d(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In this guide, we'll explain how to use ",(0,i.jsx)(t.em,{children:"Apps Script"})," to load and create resources with our APIs into ",(0,i.jsx)(t.em,{children:"Google Sheets"}),"."]}),"\n",(0,i.jsxs)(t.h2,{id:"open_book-list-example",children:["\ud83d\udcd6","\xa0 List Example"]}),"\n",(0,i.jsxs)(t.p,{children:["In this example, we will load our invoices list using the ",(0,i.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/issued_documents",children:"List Issued Documents"})," method, but you can adapt this guide to using it with the API method you need."]}),"\n",(0,i.jsxs)(t.h3,{id:"one-step-one-create-the-apps-script-function",children:["1\ufe0f\u20e3","\xa0 Step one: Create the Apps Script function"]}),"\n",(0,i.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,i.jsxs)(t.p,{children:["In this example, we'll suppose you have to manage just one Company, so we simply inserted its ID directly in the code. If instead, you need to be able to manage multiple companies, you'll need to retrieve the ID of the current company in some way.\nCheck the ",(0,i.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,i.jsxs)(t.p,{children:["First, we must select the ",(0,i.jsx)(t.strong,{children:"extensions -> App Script"})," to open the editor:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Open the editor",src:n(55632).A+""})}),"\n",(0,i.jsxs)(t.p,{children:["Then we need to create the ",(0,i.jsx)(t.em,{children:"listInvoice"})," method and define the menu we'll use to trigger it:"]}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(o.A,{value:"onOpen",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'// This function creates a menu tab to execute the listInvoices function\nfunction onOpen() {\n  var ui = SpreadsheetApp.getUi();\n  ui.createMenu("TSE in Cloud API")\n    .addItem("List invoices", "listInvoices")\n    .addToUi();\n}\n'})})}),(0,i.jsx)(o.A,{value:"listInvoices",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'// This function loops between all the pages of the response and pushes the results on the sheet\nfunction listInvoices() {\n  var sheet = SpreadsheetApp.getActiveSheet();\n  sheet.clear();\n  sheet.appendRow([\n    "id",\n    "type",\n    "numeration",\n    "subject",\n    "visible_subject",\n    "amount_net",\n    "amount_vat",\n    "date",\n    "next_due_date",\n    "url",\n    "client name",\n    "client tax_code",\n    "client vat_number",\n  ]);\n  var url = "https://api-v2.fattureincloud.it";\n  var endpoint = "/c/{company_id}/issued_documents";\n  var headers = {\n    "Content-Type": "application/json",\n    Authorization: "Bearer YOUR_ACCESS_TOKEN",\n  };\n\n  var options = {\n    method: "get",\n    headers: headers,\n  };\n\n  var queryParams = ["type=" + "invoice"];\n  var pageKey = "page";\n  var pageNum = 1;\n  var nextPageUrl;\n  var data = {},\n    output = [];\n  do {\n    var currentUrl = url + endpoint + "?" + queryParams.join("&");\n    currentUrl += "&" + pageKey + "=" + pageNum;\n\n    var response = UrlFetchApp.fetch(currentUrl, options);\n    data = JSON.parse(response.getContentText());\n    var invoices = data.data;\n    for (const index in invoices) {\n      sheet.appendRow([\n        invoices[index].id,\n        invoices[index].type,\n        invoices[index].numeration,\n        invoices[index].subject,\n        invoices[index].visible_subject,\n        invoices[index].amount_net,\n        invoices[index].amount_vat,\n        invoices[index].date,\n        invoices[index].next_due_date,\n        invoices[index].url,\n        invoices[index].entity.name,\n        invoices[index].entity.tax_code,\n        invoices[index].entity.vat_number,\n      ]);\n    }\n    pageNum++;\n    nextPageUrl = data.next_page_url;\n  } while (nextPageUrl);\n}\n'})})})]}),"\n",(0,i.jsxs)(t.p,{children:["As you can see we are calling the ",(0,i.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/issued_documents",children:"List Issued Documents"})," method, accessible to the following URL:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"https://api-v2.fattureincloud.it/c/\\{company_id\\}/issued_documents\n"})}),"\n",(0,i.jsxs)(t.p,{children:["additionally, it requires defining some parameters as ",(0,i.jsx)(t.em,{children:"Query String"}),' (e.g. the "?type=invoice" part), but you can substitute it with the endpoint of the method you want. Please, make sure to replace the {company_id} placeholder with your company ID.']}),"\n",(0,i.jsxs)(t.p,{children:["Our APIs also require authentication, so we need to set the ",(0,i.jsx)(t.em,{children:"Authorization header"}),'. You just need to replace the "YOUR',(0,i.jsx)(t.em,{children:'ACCESS_TOKEN" placeholder with your actual _Access Token'}),"; you can obtain a valid one following ",(0,i.jsx)(t.a,{href:"/authentication/manual-authentication.mdx",children:"this procedure"}),"."]}),"\n",(0,i.jsxs)(t.h3,{id:"two-step-two-try-it",children:["2\ufe0f\u20e3","\xa0 Step Two: Try it!"]}),"\n",(0,i.jsx)(t.p,{children:"If you inserted the connection parameters correctly, you can now click on the list invoices button that just appeared in your sheet's menu and see the results:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"list invoices",src:n(71263).A+""})}),"\n",(0,i.jsxs)(t.h2,{id:"open_book-create-example",children:["\ud83d\udcd6","\xa0 Create Example"]}),"\n",(0,i.jsxs)(t.p,{children:["In this example, we will create an invoice using the ",(0,i.jsx)(t.a,{href:"/api-reference#post-/c/-company_id-/issued_documents",children:"Create Issued Document"})," method."]}),"\n",(0,i.jsxs)(t.h3,{id:"one-step-one-edit-the-apps-script-functions",children:["1\ufe0f\u20e3","\xa0 Step one: Edit the Apps Script functions"]}),"\n",(0,i.jsxs)(t.p,{children:["If you followed the ",(0,i.jsx)(t.em,{children:"list"})," example you can now come back to your editor to implement also the invoice creation."]}),"\n",(0,i.jsxs)(t.p,{children:["First of all, we need to create a simple form for the inputs, so create the ",(0,i.jsx)(t.em,{children:"Page.html"})," file and paste in the following code:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n  <head>\n    <base target="_top" />\n  </head>\n  <body>\n    <center>\n      <input\n        type="text"\n        id="clientName"\n        placeholder="Client Name"\n        style="font-size:20px !important;"\n      />\n      <br /><br />\n      <input\n        type="text"\n        id="clientVatNumber"\n        placeholder="Client Vat Number"\n        style="font-size:20px !important;"\n      />\n      <br /><br />\n      <input\n        type="text"\n        id="amountNet"\n        placeholder="Amount Net"\n        style="font-size:20px !important;"\n      />\n      <br /><br />\n      <input\n        type="text"\n        id="visibleSubject"\n        placeholder="Subject"\n        style="font-size:20px !important;"\n      />\n      <br /><br />\n      <button\n        onclick="google.script.run.createInvoice(document.getElementById(\'clientName\').value, document.getElementById(\'clientVatNumber\').value, document.getElementById(\'amountNet\').value, document.getElementById(\'visibleSubject\').value)"\n        style="font-size:20px !important;"\n      >\n        Create\n      </button>\n    </center>\n  </body>\n</html>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["As you can see, we put only a few fields to exemplify the procedure; of course, you can add all the fields you need.",(0,i.jsx)(t.br,{}),"\n","The next step is to modify the menu and add some other functions (the ",(0,i.jsx)(t.em,{children:"showCreateInvoiceDialog"})," will open the creation form, while the ",(0,i.jsx)(t.em,{children:"createInvoice"})," will contact our APIs):"]}),"\n",(0,i.jsxs)(r.A,{children:[(0,i.jsx)(o.A,{value:"onOpen",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'// We edit this function to add the new Create invoice button\nfunction onOpen() {\n  var ui = SpreadsheetApp.getUi();\n  ui.createMenu("TSE in Cloud API")\n    .addItem("List invoices", "listInvoices")\n    .addItem("Create invoice", "showCreateInvoiceDialog")\n    .addToUi();\n}\n'})})}),(0,i.jsx)(o.A,{value:"showCreateInvoiceDialog",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'// This function prompts the html page previously created\nfunction showCreateInvoiceDialog() {\n  var html = HtmlService.createHtmlOutputFromFile("Page")\n    .setWidth(400)\n    .setHeight(300);\n  SpreadsheetApp.getUi().showModalDialog(html, "Create Invoice");\n}\n'})})}),(0,i.jsx)(o.A,{value:"createInvoice",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:'// This function makes the actual API call to create the invoice\nfunction createInvoice(clientName, clientVatNumber, amountNet, subject) {\n    var url = "https://api-v2.fattureincloud.it";\n    var endpoint = "/c/\\{company_id\\}/issued_documents";\n    var headers = {\n        "Content-Type": "application/json",\n        "Authorization": "Bearer YOUR_ACCESS_TOKEN"\n    };\n\n    var body = {\n        data: {\n            type: "invoice",\n            amount_net: amountNet,\n            visible_subject: subject,\n            entity: {\n                name: clientName,\n                vart_number: clientVatNumber\n            }\n        }\n    }\n    var options = {\n        "method": "post",\n        "headers": headers,\n        "payload": JSON.stringify(body)\n    };\n\n    try {\n        var response = UrlFetchApp.fetch(url + endpoint, options);\n        data = JSON.parse(response.getContentText());\n        SpreadsheetApp.getUi().alert("Invoice created succesfully with id: " + data.data.id)\n\n    } catch (e) {\n        SpreadsheetApp.getUi().alert(e.message)\n    }\n'})})})]}),"\n",(0,i.jsxs)(t.p,{children:["Remember to replace the placeholders as explained in the ",(0,i.jsx)(t.em,{children:"list"})," example."]}),"\n",(0,i.jsxs)(t.h3,{id:"two-step-two-try-it-1",children:["2\ufe0f\u20e3","\xa0 Step Two: Try it!"]}),"\n",(0,i.jsx)(t.p,{children:"Nou can now click on the create invoice button that just appeared in your sheet's menu:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"create invoice",src:n(22966).A+""})}),"\n",(0,i.jsx)(t.p,{children:"This will show you the HTML page we defined:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"create invoice",src:n(41270).A+""})}),"\n",(0,i.jsx)(t.p,{children:"If you click on the \"Create\" button you'll trigger the invoice creation. You'll be able to see the results using the List Invoices menu one more time."}),"\n",(0,i.jsxs)(t.h2,{id:"books-google-apps-script-documentation",children:["\ud83d\udcda","\xa0 Google Apps Script Documentation"]}),"\n",(0,i.jsx)(t.p,{children:"Here you can find some additional resources:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developers.google.com/apps-script/guides/bound",children:"Container-bound Scripts"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developers.google.com/apps-script/guides/services/external",children:"External APIs"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developers.google.com/apps-script/guides/menus",children:"Custom Menus in Google Workspace"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developers.google.com/apps-script/guides/dialogs",children:"Dialogs and Sidebars in Google Workspace Documents"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developers.google.com/apps-script/reference/base/ui",children:"Class Ui"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developers.google.com/apps-script/guides/html",children:"HTML Service: Create and Serve HTML"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developers.google.com/apps-script/guides/libraries",children:"Libraries"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(34164);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,r),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(96540),i=n(34164),a=n(65627),r=n(56347),o=n(50372),c=n(30604),l=n(11861),u=n(78749);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,l.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=d(e),[r,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[l,p]=m({queryString:n,groupId:i}),[g,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),x=(()=>{const e=l??g;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{x&&c(x)}),[x]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),v(e)}),[p,v,a]),tabValues:a}}var v=n(9136);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function b(e){let{className:t,block:n,selectedValue:s,selectValue:r,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),i=o[n].value;i!==s&&(l(t),r(i))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{c.push(e)},onKeyDown:p,onClick:u,...a,className:(0,i.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",x.tabList),children:[(0,f.jsx)(b,{...t,...e}),(0,f.jsx)(y,{...t,...e})]})}function w(e){const t=(0,v.A)();return(0,f.jsx)(j,{...e,children:p(e.children)},String(t))}},22966:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/create_invoice-ee63e83cb58fe3c10ea1b20cd69ddd8e.png"},41270:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/create_invoice2-fc77fd5db020570f7b63519b926d8110.png"},71263:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/list_invoices-b2c73c9972636a7bf1f3d662d520c508.png"},55632:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/open_editor-72caa8fe7f21ab60a9c4a4a12252dba0.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);