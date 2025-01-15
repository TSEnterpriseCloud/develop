"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[43414],{87395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"stepbystep/quickstarts/excel-powerquery-quickstart","title":"Excel Power Query Quickstart","description":"Excel Power Query Quickstart for the TSE in Cloud APIs","source":"@site/versioned_docs/version-1.0.1/stepbystep/quickstarts/excel-powerquery-quickstart.md","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/powerquery-quickstart","permalink":"/develop/docs/stepbystep/quickstarts/powerquery-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/stepbystep/quickstarts/excel-powerquery-quickstart.md","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/docs/tags/code-example"},{"inline":true,"label":"power query","permalink":"/develop/docs/tags/power-query"},{"inline":true,"label":"excel","permalink":"/develop/docs/tags/excel"}],"version":"1.0.1","lastUpdatedAt":1736854011000,"sidebarPosition":12,"frontMatter":{"sidebar_position":12,"title":"Excel Power Query Quickstart","slug":"powerquery-quickstart","description":"Excel Power Query Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","power query","excel"]},"sidebar":"tutorialSidebar","previous":{"title":"Windows Form Quickstart","permalink":"/develop/docs/stepbystep/quickstarts/windows-form-quickstart"},"next":{"title":"Google Sheets Apps Script Quickstart","permalink":"/develop/docs/stepbystep/quickstarts/apps-script-quickstart"}}');var a=n(74848),o=n(28453);const i={sidebar_position:12,title:"Excel Power Query Quickstart",slug:"powerquery-quickstart",description:"Excel Power Query Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","power query","excel"]},r=void 0,c={},d=[{value:"\ud83d\udcd6\xa0 List Example",id:"open_book-list-example",level:2},{value:"1\ufe0f\u20e3\xa0 Step one: Setup the Data Source",id:"one-step-one-setup-the-data-source",level:3},{value:"2\ufe0f\u20e3\xa0 Step Two: Extract the data",id:"two-step-two-extract-the-data",level:3},{value:"3\ufe0f\u20e3\xa0 Step Three: Enable auto update",id:"three-step-three-enable-auto-update",level:3},{value:"4\ufe0f\u20e3\xa0 Step Four: What about pagination?",id:"four-step-four-what-about-pagination",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In this guide, we'll explain how to use ",(0,a.jsx)(t.em,{children:"Power Query"})," to load contents from our APIs into ",(0,a.jsx)(t.em,{children:"Microsoft Excel"}),"."]}),"\n",(0,a.jsxs)(t.h2,{id:"open_book-list-example",children:["\ud83d\udcd6","\xa0 List Example"]}),"\n",(0,a.jsxs)(t.p,{children:["In this example, we will load our invoices list using the ",(0,a.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/issued_documents",children:"List Issued Documents"})," method, but you can adapt this guide to using it with the API method you need."]}),"\n",(0,a.jsxs)(t.h3,{id:"one-step-one-setup-the-data-source",children:["1\ufe0f\u20e3","\xa0 Step one: Setup the Data Source"]}),"\n",(0,a.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,a.jsxs)(t.p,{children:["In this example, we'll suppose you have to manage just one Company, so we simply inserted its ID directly in the code. If instead, you need to be able to manage multiple companies, you'll need to retrieve the ID of the current company in some way.\nCheck the ",(0,a.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,a.jsxs)(t.p,{children:["First, we must select the ",(0,a.jsx)(t.a,{href:"https://support.microsoft.com/en-us/office/import-data-from-the-web-b13eed81-33fe-410d-9247-1747269c28e4#:~:text=Select%20Data%20%3E%20Get%20%26%20Transform%20%3E,View%20pane%20on%20the%20right.",children:"Import from Web"})," functionality as shown below:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Get Data From Web",src:n(92578).A+""})}),"\n",(0,a.jsxs)(t.p,{children:["Then we need to define the URL that will be contacted by Power Query. The ",(0,a.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/issued_documents",children:"List Issued Documents"})," method is accessible to the following URL:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"https://api-v2.fattureincloud.it/c/\\{company_id\\}/issued_documents\n"})}),"\n",(0,a.jsxs)(t.p,{children:["additionally, it requires to define some parameters as ",(0,a.jsx)(t.em,{children:"Query String"}),' (e.g. the "?type=invoice" part), but you can substitute it with the endpoint of the method you want. Please, make sure to replace the {company_id} placeholder with your company ID.']}),"\n",(0,a.jsxs)(t.p,{children:["Our APIs require authentication, so we also need to set the ",(0,a.jsx)(t.em,{children:"Authorization header"}),' as shown below. Remember to replace the "YOUR',(0,a.jsx)(t.em,{children:'ACCESS_TOKEN" placeholder with your actual _Access Token'}),"; you can obtain a valid one following ",(0,a.jsx)(t.a,{href:"/authentication/manual-authentication.mdx",children:"this procedure"}),"."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Set the source",src:n(72881).A+""})}),"\n",(0,a.jsxs)(t.h3,{id:"two-step-two-extract-the-data",children:["2\ufe0f\u20e3","\xa0 Step Two: Extract the data"]}),"\n",(0,a.jsx)(t.p,{children:"If you inserted the connection parameters correctly, Excel should already have retrieved the method response from our APIs."}),"\n",(0,a.jsx)(t.p,{children:"Now, we have to extract the list of invoices from the API response:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Extract invoices list",src:n(90426).A+""})}),"\n",(0,a.jsxs)(t.p,{children:["and then convert the result into a ",(0,a.jsx)(t.em,{children:"Table"})," like shown below:"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.img,{alt:"Convert results to table",src:n(89).A+""}),"\n",(0,a.jsx)(t.img,{alt:"Convert results to table",src:n(5728).A+""})]}),"\n",(0,a.jsxs)(t.p,{children:["Once obtained the table, we must extract the records of the invoices using the ",(0,a.jsx)(t.em,{children:"Record Extractor"}),":"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Extract the invoices",src:n(86270).A+""})}),"\n",(0,a.jsx)(t.p,{children:"then we must select the fields that we are interested in from the menu:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Field selection",src:n(15815).A+""})}),"\n",(0,a.jsx)(t.p,{children:"And finally we can export the records to your sheet:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Export",src:n(59457).A+""})}),"\n",(0,a.jsxs)(t.h3,{id:"three-step-three-enable-auto-update",children:["3\ufe0f\u20e3","\xa0 Step Three: Enable auto update"]}),"\n",(0,a.jsxs)(t.p,{children:["Using Power Query it is possible to activate periodic updates of the data, selecting the ",(0,a.jsx)(t.strong,{children:"query -> properties -> check the 'update every x minutes'"})," functionality as shown below."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Auto update",src:n(51e3).A+""})}),"\n",(0,a.jsxs)(t.h3,{id:"four-step-four-what-about-pagination",children:["4\ufe0f\u20e3","\xa0 Step Four: What about pagination?"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/issued_documents",children:"List Issued Documents"})," response is ",(0,a.jsx)(t.a,{href:"/basics/additional-capabilities/paginate-results.mdx",children:"paginated"}),", this means that the results will be split into different sets; each set will contain a certain number of records up to the maximum value as explained on the dedicated page. Until now we just fetched the first page from the API, and this means that to retrieve the whole result we need to ",(0,a.jsx)(t.em,{children:"manage pagination"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Unluckily it is not trivial, so you have to open advanced the Power Query editor and paste in the following code"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'let\n    Source = Json.Document(\n        Web.Contents(\n            url,\n            [\n                Timeout = #duration(0, 0, 1, 0),\n                Headers = [Authorization = "Bearer YOUR_ACCESS_TOKEN"]\n            ]\n        )\n    ),\n    iterations = Source[last_page],\n    url = "https://api-v2.fattureincloud.it/c/\\{company_id\\}/issued_documents" & "?" & "type=invoice",\n\n    FnGetOnePage =\n    (url) as record =>\n    let\n        Source = Json.Document(\n            Web.Contents(\n                url,\n                [\n                    Timeout = #duration(0, 0, 1, 0),\n                    Headers = [Authorization = "Bearer YOUR_ACCESS_TOKEN"]\n                ]\n            )\n        ),\n        data = try Source[data] otherwise null,\n        next = try Source[next_page_url] otherwise null,\n        res = [Data = data, Next = next]\nin\nres,\nGeneratedList =\n    List.Generate(\n        () => [i = 0, res = FnGetOnePage(url)],\n        each[i] < iterations and[res][Data] <> null,\n        each[i = [i] + 1, res = FnGetOnePage([res][Next])],\n        each[res][Data]),\n    #"Table conversion" = Table.FromList(GeneratedList, Splitter.SplitByNothing(), null, null, ExtraValues.Error),\n    #"Expanded list" = Table.ExpandListColumn(#"Table conversion", "Column1"),\n    #"Expanded Records" = Table.ExpandRecordColumn(#"Expanded list", "Column1", {\n        "id",\n        "type",\n        "numeration",\n        "subject",\n        "visible_subject",\n        "amount_net",\n        "amount_vat",\n        "amount_gross",\n        "date",\n        "number",\n        "next_due_date",\n        "url",\n        "entity"\n    }, {\n        "id",\n        "type",\n        "numeration",\n        "subject",\n        "visible_subject",\n        "amount_net",\n        "amount_vat",\n        "amount_gross",\n        "date",\n        "number",\n        "next_due_date",\n        "url",\n        "entity"\n    }),\n    #"Expanded Entity" = Table.ExpandRecordColumn(#"Expanded Records", "entity", {\n        "name",\n        "tax_code",\n        "vat_number"\n    }, {\n        "client.name",\n        "client.tax_code",\n        "client.vat_number"\n    })\nin\n#"Expanded Entity"\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Advanced query",src:n(15828).A+""})}),"\n",(0,a.jsx)(t.p,{children:"The code above loops all the pages of the response and aggregates the results; additionally, it extracts the entity field to show the client name, tax_code and vat_number.\nTo use this code you mustreplace the placeholders 'YOUR_ACCESS_TOKEN' and {company_id} as explained previously."}),"\n",(0,a.jsxs)(t.p,{children:["Please, notice that this will increment the number of API requests executed, so you must be sure to not hit the ",(0,a.jsx)(t.a,{href:"/basics/limits-and-quotas.mdx",children:"quota limits"})," to avoid the related errors."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},15828:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/advanced_query-73758f7fc818d6bb87da3b27cb0298df.png"},51e3:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/automatic_update-5f809dc6d6e779130f5afb4a15e0a0b1.png"},89:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/convert_to_table-caae72dc2a4d9f912a5af8cfac06bd41.png"},5728:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/convert_to_table_step2-3650e9e1f1234ec987bcd38b9c97494d.png"},59457:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/export-d4f284bf226f8c33a45f77ade1c5e1e2.png"},90426:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/extract_invoices_list-0a4297b9dcbae578af5f7aa3b618289e.png"},86270:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/extract_single_invoices-22fd789d43cf4087bb3ffb51caed851c.png"},92578:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/get_data_from_web-892a824b563128b392abcaca58cef3ae.png"},15815:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/select_fields-be4ccff4e7111e940c41227e8efa5ca4.png"},72881:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/set_source_url-ec0657bace400b1917ee04d1d57ee581.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);