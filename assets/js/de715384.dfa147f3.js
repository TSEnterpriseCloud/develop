"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[75746],{47921:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"reference/examples","title":"Examples APIs","description":"Examples use","source":"@site/docs/reference/examples.md","sourceDirName":"reference","slug":"/reference/examples-apis","permalink":"/develop/docs/1.0.1/reference/examples-apis","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/examples.md","tags":[{"inline":true,"label":"general knowledge","permalink":"/develop/docs/1.0.1/tags/general-knowledge"},{"inline":true,"label":"beginner","permalink":"/develop/docs/1.0.1/tags/beginner"},{"inline":true,"label":"concepts","permalink":"/develop/docs/1.0.1/tags/concepts"},{"inline":true,"label":"rest","permalink":"/develop/docs/1.0.1/tags/rest"}],"version":"current","lastUpdatedAt":1734604377000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Examples APIs","slug":"examples-apis","description":"Examples use","tags":["general knowledge","beginner","concepts","rest"]},"sidebar":"tutorialSidebar","previous":{"title":"Use the API Reference","permalink":"/develop/docs/1.0.1/reference/api-reference"},"next":{"title":"Introduction","permalink":"/develop/docs/1.0.1/reference/Common/reference-co"}}');var l=i(74848),r=i(28453);const a={sidebar_position:6,title:"Examples APIs",slug:"examples-apis",description:"Examples use",tags:["general knowledge","beginner","concepts","rest"]},d="Documentation to support usage scenarios",s={},c=[{value:"Integration examples Postman",id:"integration-examples-postman",level:2},{value:"Integration Examples for Master Data",id:"integration-examples-for-master-data",level:2},{value:"Integration Examples for Orders",id:"integration-examples-for-orders",level:2},{value:"Example_A:",id:"example_a",level:3},{value:"Example_B:",id:"example_b",level:3},{value:"Example_C:",id:"example_c",level:3},{value:"Example_D:",id:"example_d",level:3},{value:"Example_E:",id:"example_e",level:3},{value:"Example_F:",id:"example_f",level:3},{value:"Example_G:",id:"example_g",level:3},{value:"Example_H:",id:"example_h",level:3},{value:"Example_I:",id:"example_i",level:3},{value:"Example_L:",id:"example_l",level:3},{value:"Example_M:",id:"example_m",level:3},{value:"Example_N:",id:"example_n",level:3},{value:"Example_O:",id:"example_o",level:3},{value:"Price: price search from priority price lists through new PricePriorityLI service",id:"price-price-search-from-priority-price-lists-through-new-pricepriorityli-service",level:2},{value:"Parameters",id:"parameters",level:3},{value:"JSON Example",id:"json-example",level:3}];function o(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"documentation-to-support-usage-scenarios",children:"Documentation to support usage scenarios"})}),"\n",(0,l.jsx)(n.h2,{id:"integration-examples-postman",children:"Integration examples Postman"}),"\n",(0,l.jsx)(n.p,{children:"Within the various scenarios, JSON collections (Integration examples) containing usage examples of what is referred to in the Authentication Model section are made available. Specifically, it will be necessary to proceed with the execution of the authentication request in order to retrieve the JWT token (available in each example)."}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Auth Token"}),": requests the JWT token. Note that both the technical key assigned to the system and any verification."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Test Token"}),": performs an application call that uses the JWT token."]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{title:"Environment Usage",type:"info",children:(0,l.jsxs)(n.p,{children:["The collections require the use of variables defined in the ",(0,l.jsx)(n.code,{children:"ENV_TSE.postman_environment"})," environment, available at the following link."]})}),"\n",(0,l.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,l.jsx)(n.p,{children:"Although the use of services allows for implementations different from those specified, please note that the supported functionalities are those described in the examples and in the API Reference."})}),"\n",(0,l.jsx)(n.h2,{id:"integration-examples-for-master-data",children:"Integration Examples for Master Data"}),"\n",(0,l.jsx)(n.p,{children:"The collection contains examples of GET/SEARCH/CREATE methods for the exposed resources."}),"\n",(0,l.jsx)(n.h2,{id:"integration-examples-for-orders",children:"Integration Examples for Orders"}),"\n",(0,l.jsx)(n.p,{children:"Examples of using services to create Orders with different characteristics. For the construction of these examples, additional variables have been defined at the collection level compared to those defined in the above-mentioned Environment."}),"\n",(0,l.jsx)(n.p,{children:"It is important to note that the writing of orders can only be successfully completed if all the tables referenced by the fields passed in the body of the call are somehow referenced in the document wizard being inserted. The presence of the fields in the document wizard is indeed a necessary condition for the business logic overseeing the order writing to prepare for the management of the related tables."}),"\n",(0,l.jsx)(n.h3,{id:"example_a",children:"Example_A:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_b",children:"Example_B:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_c",children:"Example_C:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_d",children:"Example_D:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Header document references (table DO12_DOCTESTARIF)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_e",children:"Example_E:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Header document references (table DO12_DOCTESTARIF)"}),"\n",(0,l.jsx)(n.li,{children:"Currency, exchange date, and exchange rate in the header (document in a currency other than EURO)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_f",children:"Example_F:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Header document references (table DO12_DOCTESTARIF)"}),"\n",(0,l.jsx)(n.li,{children:"Line delivery date (table DO31_DOCCORPOORD)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_g",children:"Example_G:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Header document references (table DO12_DOCTESTARIF)"}),"\n",(0,l.jsx)(n.li,{children:"Line delivery date (table DO31_DOCCORPOORD)"}),"\n",(0,l.jsx)(n.li,{children:"Header agents (table DO29_DOCTESAGENTI); the agents passed are added to those retrieved from the customer master data"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_h",children:"Example_H:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Header document references (table DO12_DOCTESTARIF)"}),"\n",(0,l.jsx)(n.li,{children:"Line delivery date (table DO31_DOCCORPOORD)"}),"\n",(0,l.jsx)(n.li,{children:"Header agents (table DO29_DOCTESAGENTI); the agents passed are added to those retrieved from the customer master data"}),"\n",(0,l.jsx)(n.li,{children:'"ExcludeMultipleAgents" set to 1 and header agents (table DO29_DOCTESAGENTI); the agents passed replace those retrieved from the customer master data'}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_i",children:"Example_I:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node in the header (on the header project data table DO24_DOCTESTAPROGE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node on the body (on the line project data table DO41_DOCCORPOPROGE)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_l",children:"Example_L:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node in the header (on the header project data table DO24_DOCTESTAPROGE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node on the body (on the line project data table DO41_DOCCORPOPROGE)"}),"\n",(0,l.jsx)(n.li,{children:"Start and end of competence in the header (DO23_DOCTESTARATEI)"}),"\n",(0,l.jsx)(n.li,{children:"Start and end of competence in the line (DO42_DOCCORPORATEI)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 custom extension data in the header (DO17_DOCTESTAPERS)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 standard extension data in the header (DO20_DOCTESTAEST)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 custom extension data in the line (DO35_DOCCORPOPERS)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 standard extension data in the line (DO36_DOCCORPOEST)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_m",children:"Example_M:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node in the header (on the header project data table DO24_DOCTESTAPROGE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node on the body (on the line project data table DO41_DOCCORPOPROGE)"}),"\n",(0,l.jsx)(n.li,{children:"Start and end of competence in the header (DO23_DOCTESTARATEI)"}),"\n",(0,l.jsx)(n.li,{children:"Start and end of competence in the line (DO42_DOCCORPORATEI)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 custom extension data in the header (DO17_DOCTESTAPERS)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 standard extension data in the header (DO20_DOCTESTAEST)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 custom extension data in the line (DO35_DOCCORPOPERS)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 standard extension data in the line (DO36_DOCCORPOEST)"}),"\n",(0,l.jsx)(n.li,{children:"Accompanying data fields (DO14_DOCDATIACC)"}),"\n",(0,l.jsx)(n.li,{children:"Destination account fields and destination VDS of analytical accounting data (DO53_DOCCORPOCOIN)"}),"\n",(0,l.jsx)(n.li,{children:"Line with lot details (DO52_DOCCORPOLOT)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_n",children:"Example_N:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code and quantity (price retrieved from the price list in the BO)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node in the header (on the header project data table DO24_DOCTESTAPROGE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node on the body (on the line project data table DO41_DOCCORPOPROGE)"}),"\n",(0,l.jsx)(n.li,{children:"Start and end of competence in the header (DO23_DOCTESTARATEI)"}),"\n",(0,l.jsx)(n.li,{children:"Start and end of competence in the line (DO42_DOCCORPORATEI)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 custom extension data in the header (DO17_DOCTESTAPERS)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 standard extension data in the header (DO20_DOCTESTAEST)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 custom extension data in the line (DO35_DOCCORPOPERS)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 standard extension data in the line (DO36_DOCCORPOEST)"}),"\n",(0,l.jsx)(n.li,{children:"Accompanying data fields (DO14_DOCDATIACC)"}),"\n",(0,l.jsx)(n.li,{children:"Destination account fields and destination VDS of analytical accounting data (DO53_DOCCORPOCOIN)"}),"\n",(0,l.jsx)(n.li,{children:"Line with lot details (DO52_DOCCORPOLOT)"}),"\n",(0,l.jsxs)(n.li,{children:["callOptions:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"flgSpbolliSpecified (default false): set to true if you want to force the value = 0 of the stamp duty expenses flag;"}),"\n",(0,l.jsx)(n.li,{children:"flgSpincasSpecified (default false): set to true if you want to force the value = 0 of the collection expenses flag;"}),"\n",(0,l.jsx)(n.li,{children:"excludeMultipleAgents (default false): set to true to exclude the loading of multiple agents in the header;"}),"\n",(0,l.jsx)(n.li,{children:"excludeHeaderVAT (default false): set to true to force Null the VAT code of the document header;"}),"\n",(0,l.jsx)(n.li,{children:"flgLockOnDocExist (default false): set to true to block the insertion of an already existing document;"}),"\n",(0,l.jsx)(n.li,{children:"disableLetterOfIntent (default false): set to true to disable letters of intent;"}),"\n",(0,l.jsx)(n.li,{children:"excludeClientSupplierHeaderExpenses: (default false) Excludes client/supplier header expenses;"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example_o",children:"Example_O:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Minimal mandatory header information"}),"\n",(0,l.jsx)(n.li,{children:"Line of type article, with article code, quantity (price retrieved from the price list in the BO), and package details (table DO39_DOCCORPOCONF)"}),"\n",(0,l.jsx)(n.li,{children:"Line of type expense"}),"\n",(0,l.jsx)(n.li,{children:"Manual article line and descriptive line"}),"\n",(0,l.jsx)(n.li,{children:"Order delivery date in the document header (table DO18_DOCTESORDINE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node in the header (on the header project data table DO24_DOCTESTAPROGE)"}),"\n",(0,l.jsx)(n.li,{children:"Project code and reference node on the body (on the line project data table DO41_DOCCORPOPROGE)"}),"\n",(0,l.jsx)(n.li,{children:"Start and end of competence in the header (DO23_DOCTESTARATEI)"}),"\n",(0,l.jsx)(n.li,{children:"Start and end of competence in the line (DO42_DOCCORPORATEI)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 custom extension data in the header (DO17_DOCTESTAPERS)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 standard extension data in the header (DO20_DOCTESTAEST)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 custom extension data in the line (DO35_DOCCORPOPERS)"}),"\n",(0,l.jsx)(n.li,{children:"Alphanumeric field 1 standard extension data in the line (DO36_DOCCORPOEST)"}),"\n",(0,l.jsx)(n.li,{children:"Accompanying data fields (DO14_DOCDATIACC)"}),"\n",(0,l.jsx)(n.li,{children:"Line with lot details (DO52_DOCCORPOLOT)"}),"\n",(0,l.jsxs)(n.li,{children:["callOptions:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"flgSpbolliSpecified (default false): set to true if you want to force the value = 0 of the stamp duty expenses flag;"}),"\n",(0,l.jsx)(n.li,{children:"flgSpincasSpecified (default false): set to true if you want to force the value = 0 of the collection expenses flag;"}),"\n",(0,l.jsx)(n.li,{children:"excludeMultipleAgents (default false): set to true to exclude the loading of multiple agents in the header;"}),"\n",(0,l.jsx)(n.li,{children:"excludeHeaderVAT (default false): set to true to force Null the VAT code of the document header;"}),"\n",(0,l.jsx)(n.li,{children:"flgLockOnDocExist (default false): set to true to block the insertion of an already existing document;"}),"\n",(0,l.jsx)(n.li,{children:"disableLetterOfIntent (default false): set to true to disable letters of intent;"}),"\n",(0,l.jsx)(n.li,{children:"excludeClientSupplierHeaderExpenses: (default false) Excludes client/supplier header expenses;"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"price-price-search-from-priority-price-lists-through-new-pricepriorityli-service",children:"Price: price search from priority price lists through new PricePriorityLI service"}),"\n",(0,l.jsx)(n.p,{children:'The attached example shows the price of priority price lists processed based on the set priority table, used to generate the PricePriorityLI and displayed in the Result ("RowElaboratePriceList"), if the parameter "ResultElaboratePriceList" = true is set.'}),"\n",(0,l.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Price Type (typeSalePurchaseProd)"}),": ",(0,l.jsx)(n.code,{children:"Decimal"})," (DO11_TIPOCF_CG44/2)",(0,l.jsx)(n.br,{}),"\n","0 = Sales (default)",(0,l.jsx)(n.br,{}),"\n","1 = Purchases",(0,l.jsx)(n.br,{}),"\n","2 = Production"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Article Code (CodartMg66)"}),": ",(0,l.jsx)(n.code,{children:"String"})," (DO30_CODART_MG66) \u2014 mandatory"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Customer/Supplier Code"}),": ",(0,l.jsx)(n.code,{children:"Decimal"})," (DO11_CLIFOR_CG44)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Registration Date"}),": ",(0,l.jsx)(n.code,{children:"Datetime"})," (DateElab) \u2014 mandatory"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Quantity 1 (line) (qty1)"}),": ",(0,l.jsx)(n.code,{children:"Decimal"})," (DO30_QTA1)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Price List Number (numPriceList)"}),": ",(0,l.jsx)(n.code,{children:"Decimal"})," (DO11_LISTMAG)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Warehouse Code (codDepMg58)"}),": ",(0,l.jsx)(n.code,{children:"String"})," (DO30_CODDEP_MG58)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Enable display of processed prices list (resultElaboratePriceList)"}),": if set = ",(0,l.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"json-example",children:"JSON Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "typeSalePurchaseProd": 0,\n  "codArtMg66": "ART_LI",\n  "cliforCg44": 1,\n  "dateElab": "2024-06-14 00:00:00",\n  "qty1": 0,\n  "numPriceList": 1,\n  "codDepMg58": "00",\n  "resultElaboratePriceList": true\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(96540);const l={},r=t.createContext(l);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);