"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[29287],{49716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"sdks/typescript-sdk","title":"TypeScript SDK","description":"The official TSE in Cloud TypeScript SDK","source":"@site/docs/sdks/typescript-sdk.mdx","sourceDirName":"sdks","slug":"/sdks/typescript-sdk","permalink":"/docs/1.0.1/sdks/typescript-sdk","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sdk","permalink":"/docs/1.0.1/tags/sdk"},{"inline":true,"label":"code example","permalink":"/docs/1.0.1/tags/code-example"},{"inline":true,"label":"typescript","permalink":"/docs/1.0.1/tags/typescript"}],"version":"current","lastUpdatedAt":1740755324000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"TypeScript SDK","slug":"typescript-sdk","description":"The official TSE in Cloud TypeScript SDK","tags":["sdk","code example","typescript"]},"sidebar":"tutorialSidebar","previous":{"title":"JavaScript SDK","permalink":"/docs/1.0.1/sdks/javascript-sdk"},"next":{"title":"SDKs: Additional capabilities","permalink":"/docs/1.0.1/sdks/additional-capabilities/"}}');var i=n(74848),r=n(28453),a=n(65537),o=n(79329);const l={sidebar_position:8,title:"TypeScript SDK",slug:"typescript-sdk",description:"The official TSE in Cloud TypeScript SDK",tags:["sdk","code example","typescript"]},d=void 0,c={},u=[{value:"\u2611\ufe0f\xa0 Requirements and Dependencies",id:"ballot_box_with_check-requirements-and-dependencies",level:2},{value:"\u2b07\ufe0f\xa0 Download and Installation",id:"arrow_down-download-and-installation",level:2},{value:"\ud83d\udc77\xa0 SDK Structure",id:"construction_worker_man-sdk-structure",level:2},{value:"\ud83d\udce2\xa0 API calls",id:"loudspeaker-api-calls",level:2},{value:"\ud83c\udfa9\xa0 Response customization",id:"tophat-response-customization",level:3},{value:"\ud83d\udd03\xa0 Sorting",id:"arrows_clockwise-sorting",level:3},{value:"\ud83d\udcc3\xa0 Pagination",id:"page_with_curl-pagination",level:3},{value:"\ud83c\udff7\xa0 Filtering",id:"label-filtering",level:3},{value:"\ud83d\udd11\xa0 Authentication &amp; Authorization",id:"key-authentication--authorization",level:2},{value:"\ud83d\udc24\xa0 Getting started",id:"baby_chick-getting-started",level:2},{value:"\ud83d\uddd2\xa0 Retrieve the JSON request body",id:"spiral_notepad-retrieve-the-json-request-body",level:2},{value:"\ud83e\udd65\xa0 Use raw JSON as request body",id:"coconut-use-raw-json-as-request-body",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2},{value:"\ud83d\udcda\xa0 Additional resources",id:"books-additional-resources",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"TSE in Cloud TypeScript SDK"})," is a ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/TypeScript",children:"TypeScript"})," library that offers models and methods to interact with the ",(0,i.jsx)(t.strong,{children:"TSE in Cloud v2 REST API"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"Do you need a generic intro?",type:"info",children:(0,i.jsxs)(t.p,{children:["If you want to know more generic information about our SDKs, please check the ",(0,i.jsx)(t.a,{href:"/docs/1.0.1/sdks/",children:"SDK Overview"})," page."]})}),"\n",(0,i.jsxs)(t.h2,{id:"ballot_box_with_check-requirements-and-dependencies",children:["\u2611\ufe0f","\xa0 Requirements and Dependencies"]}),"\n",(0,i.jsxs)(t.p,{children:["This SDK can be used in ",(0,i.jsx)(t.a,{href:"https://nodejs.org/it/",children:"Node.js"})," applications. It is mainly based on the ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/axios",children:"Axios HTTP Client"}),"."]}),"\n",(0,i.jsxs)(t.h2,{id:"arrow_down-download-and-installation",children:["\u2b07\ufe0f","\xa0 Download and Installation"]}),"\n",(0,i.jsxs)(t.p,{children:["The SDK code and detailed documentation can be found in the ",(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk",children:"GitHub repository"}),"."]}),"\n",(0,i.jsx)(t.admonition,{title:"Important!",type:"danger",children:(0,i.jsxs)(t.p,{children:["Make sure you always import the newest version of our SDK, you can check which version is the latest on ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/@fattureincloud/fattureincloud-ts-sdk",children:"NPM"})," or ",(0,i.jsx)(t.a,{href:"https://yarnpkg.com/package/@fattureincloud/fattureincloud-ts-sdk",children:"Yarn"})]})}),"\n",(0,i.jsxs)(t.p,{children:["The SDK can be installed using ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/@fattureincloud/fattureincloud-ts-sdk",children:"NPM"})," and ",(0,i.jsx)(t.a,{href:"https://yarnpkg.com/package/@fattureincloud/fattureincloud-ts-sdk",children:"Yarn"}),":"]}),"\n",(0,i.jsxs)(a.A,{groupId:"package-manager",children:[(0,i.jsx)(o.A,{value:"npm",label:"NPM",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"npm install @fattureincloud/fattureincloud-ts-sdk\n"})})}),(0,i.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-console",children:"yarn add @fattureincloud/fattureincloud-ts-sdk\n"})})})]}),"\n",(0,i.jsxs)(t.h2,{id:"construction_worker_man-sdk-structure",children:["\ud83d\udc77","\xa0 SDK Structure"]}),"\n",(0,i.jsx)(t.p,{children:"Our SDK is mainly split into two different packages:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"api"}),": Here you can find the implementation of our API methods, you will need to initialize one of those APIs to start."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"model"}),": This package contains all the representations of our API requests and responses; when using one of the methods above, you'll have to manage some of those models."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"There are some models with a special role:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The models with a name ending for ",(0,i.jsx)(t.em,{children:"Request"})," can be used as request body for one of our methods."]}),"\n",(0,i.jsxs)(t.li,{children:["The models with a name ending for ",(0,i.jsx)(t.em,{children:"Response"})," will be returned after the execution of one of the methods.\nThe other models will be used to compose the content of the requests or responses for our methods."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You can think about Request and Response as wrappers: each one of them is dedicated to a single method of the API, and they will most of the time contain a single attribute called ",(0,i.jsx)(t.em,{children:"data"}),", that contains the real body of the request or the response represented through a composition of the other models. Each method will accept at most one Request model and will return at most one Response model."]}),"\n",(0,i.jsxs)(t.p,{children:["Let's take for example the ",(0,i.jsx)(t.a,{href:"/api-reference#put-/c/-company_id-/entities/suppliers/-supplier_id-",children:"Modify Supplier"})," method."]}),"\n",(0,i.jsxs)(t.p,{children:["It is included in the ",(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk/blob/master/docs/SuppliersApi.md#modifySupplier",children:"SuppliersApi"}),", it accepts one ",(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk/blob/master/docs/ModifySupplierRequest.md",children:"ModifySupplierRequest"})," and it returns a ",(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk/blob/master/docs/ModifySupplierResponse.md",children:"ModifySupplierResponse"}),". In both cases, the ",(0,i.jsx)(t.em,{children:"data"})," parameter will contain a ",(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk/blob/master/docs/Supplier.md",children:"Supplier"}),", that represents the modifies to apply to the supplier (for the request) and the final status of the supplier (for the response)."]}),"\n",(0,i.jsxs)(t.p,{children:["In contrast, the ",(0,i.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/entities/suppliers",children:"List Suppliers"})," method is still contained in the ",(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk/blob/master/docs/SuppliersApi.md#listSuppliers",children:"SuppliersApi"}),", but it doesn't need any request body and returns a single ",(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk/blob/master/docs/ListSuppliersResponse.md",children:"ListSuppliersResponse"}),", where the ",(0,i.jsx)(t.em,{children:"data"})," parameter will contain an array of Suppliers."]}),"\n",(0,i.jsxs)(t.h2,{id:"loudspeaker-api-calls",children:["\ud83d\udce2","\xa0 API calls"]}),"\n",(0,i.jsx)(t.p,{children:"The API methods can be categorized as follows:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Category (prefix)"}),(0,i.jsx)(t.th,{children:"Request Body"}),(0,i.jsx)(t.th,{children:"Response Body"}),(0,i.jsx)(t.th,{children:"Notes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"List (list)"}),(0,i.jsx)(t.td,{children:"\u274c"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"#-response-customization",children:"\ud83c\udfa9"}),"\xa0 + ",(0,i.jsx)(t.a,{href:"#-sorting",children:"\ud83d\udd03"}),"\xa0 + ",(0,i.jsx)(t.a,{href:"#-pagination",children:"\ud83d\udcc3"})," + ",(0,i.jsx)(t.a,{href:"#%EF%B8%8F-filtering",children:"\ud83c\udff7"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Create (create)"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Get (get)"}),(0,i.jsx)(t.td,{children:"\u274c"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"#-response-customization",children:"\ud83c\udfa9"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Modify (modify)"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{children:"\u2705"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Delete (delete)"}),(0,i.jsx)(t.td,{children:"\u274c"}),(0,i.jsx)(t.td,{children:"\u274c"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"In addition to the Request, every method could require some additional parameters like the IDs of the company and the resource."}),"\n",(0,i.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,i.jsxs)(t.p,{children:["In this example, we'll suppose you have to manage just one Company, so we simply inserted its ID directly in the code. If instead, you need to be able to manage multiple companies, you'll need to retrieve the ID of the current company in some way.\nCheck the ",(0,i.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info. Additionally, the ",(0,i.jsx)(t.a,{href:"/quickstarts/ts-sdk-quickstart.mdx",children:"TypeScript Quickstart"})," contains an example of Company ID retrieval using the SDK."]})}),"\n",(0,i.jsxs)(t.h3,{id:"tophat-response-customization",children:["\ud83c\udfa9","\xa0 Response customization"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"List"})," and ",(0,i.jsx)(t.strong,{children:"Post"})," methods include some parameters dedicated to the ",(0,i.jsx)(t.a,{href:"/basics/additional-capabilities/customize-response.mdx",children:"response customization"}),". These parameters are passed as method arguments."]}),"\n",(0,i.jsxs)(t.h3,{id:"arrows_clockwise-sorting",children:["\ud83d\udd03","\xa0 Sorting"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"List"})," methods are a particular case because they are related to a set of resources instead of a single one; this means that the API will need to assign an order to the resources that will be returned. If needed, you can explicitly define a ",(0,i.jsx)(t.a,{href:"/basics/additional-capabilities/sort-results.mdx",children:"sorting"})," rule by adding the ",(0,i.jsx)(t.strong,{children:"scope"})," parameter."]}),"\n",(0,i.jsxs)(t.h3,{id:"page_with_curl-pagination",children:["\ud83d\udcc3","\xa0 Pagination"]}),"\n",(0,i.jsxs)(t.p,{children:["Strictly related to the Sorting functionality is the Pagination. The ",(0,i.jsx)(t.strong,{children:"List"})," methods return a potentially huge set of resources, making it necessary to ",(0,i.jsx)(t.a,{href:"/basics/additional-capabilities/paginate-results.mdx",children:"paginate the results"})," to make the responses manageable; each method will then accept an additional set of ",(0,i.jsx)(t.strong,{children:"pagination parameters"}),", and the Response classes will contain some pagination details along with the ",(0,i.jsx)(t.em,{children:"data"})," parameter."]}),"\n",(0,i.jsxs)(t.h3,{id:"label-filtering",children:["\ud83c\udff7","\xa0 Filtering"]}),"\n",(0,i.jsxs)(t.p,{children:["By default, the ",(0,i.jsx)(t.strong,{children:"List"})," methods will return the whole set of available resources for a certain method. If you instead want to focus on a particular subset of resources, you can apply specific ",(0,i.jsx)(t.a,{href:"/basics/additional-capabilities/filter-results.mdx",children:"filters"})," to reduce the size of the result and retrieve only what you need."]}),"\n",(0,i.jsxs)(t.h2,{id:"key-authentication--authorization",children:["\ud83d\udd11","\xa0 Authentication & Authorization"]}),"\n",(0,i.jsxs)(t.p,{children:["This SDK allows you to retrieve and refresh the access token with the integrated OAuth Helper, you can find a complete guide about it ",(0,i.jsx)(t.a,{href:"/authentication/code-flow/sdk-oauth-helper.mdx",children:"here"}),", in case you are using the manual auth you can always set the token manually."]}),"\n",(0,i.jsxs)(t.h2,{id:"baby_chick-getting-started",children:["\ud83d\udc24","\xa0 Getting started"]}),"\n",(0,i.jsx)(t.p,{children:"After you followed the installation procedure and retrieve a valid Access Token (see above), you can start using our APIs."}),"\n",(0,i.jsx)(t.p,{children:"First, you need to import the SDK and initialize the authentication using the token:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'import {\n  Configuration,\n  SuppliersApi,\n  ModifySupplierRequest,\n} from "@fattureincloud/fattureincloud-ts-sdk";\n\n// Configure OAuth2 access token for authorization:\nconst apiConfig = new Configuration({\n  accessToken: "YOUR ACCESS TOKEN",\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"You can then retrieve one or more of the APIs, for example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"let suppliersApi = new SuppliersApi(apiConfig);\n"})}),"\n",(0,i.jsx)(t.p,{children:"Once you obtained the needed API, you can start using the methods it provides."}),"\n",(0,i.jsx)(t.admonition,{title:"Select the correct APIs!",type:"warning",children:(0,i.jsx)(t.p,{children:"If you want to use a method declared in two different APIs, you'll not be able to use the same instance. Instead, you'll need two different instances, one for each of the needed APIs."})}),"\n",(0,i.jsxs)(t.p,{children:["Let's implement the ",(0,i.jsx)(t.em,{children:"listSuppliers"})," and ",(0,i.jsx)(t.em,{children:"modifySupplier"})," methods explained above:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'let companyId = 12345; // Number | The ID of the company.\nsuppliersApi.listSuppliers(companyId).then(\n  (result) => {\n    console.log(\n      "API called successfully. Returned result: " + JSON.stringify(result)\n    );\n  },\n  (error) => {\n    console.error(error);\n  }\n);\n\nlet supplierId = 56; // Number | The ID of the supplier.\nlet modifySupplierRequest: ModifySupplierRequest = {\n  // ModifySupplierRequest | The modified Supplier.\n  data: {\n    name: "nuovo nome",\n    phone: "03561234312",\n  },\n};\n\nsuppliersApi.modifySupplier(companyId, supplierId, modifySupplierRequest).then(\n  (result) => {\n    console.log(\n      "API called successfully. Returned result: " + JSON.stringify(result)\n    );\n  },\n  (error) => {\n    console.error(error);\n  }\n);\n'})}),"\n",(0,i.jsx)(t.admonition,{title:"We're done!",type:"tip",children:(0,i.jsx)(t.p,{children:"You can finally start interacting with the TSE in Cloud API!"})}),"\n",(0,i.jsxs)(t.h2,{id:"spiral_notepad-retrieve-the-json-request-body",children:["\ud83d\uddd2","\xa0 Retrieve the JSON request body"]}),"\n",(0,i.jsxs)(t.p,{children:["If you are experiencing some kind of issue and you want to check the raw JSON sent as the body for your request (and maybe send it to our ",(0,i.jsx)(t.a,{href:"/support.md",children:"customer support"}),") you can do it as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"console.log(JSON.stringify(modifySupplierRequest));\n"})}),"\n",(0,i.jsxs)(t.h2,{id:"coconut-use-raw-json-as-request-body",children:["\ud83e\udd65","\xa0 Use raw JSON as request body"]}),"\n",(0,i.jsx)(t.p,{children:"If you already have a complete json that you want to use to call our APIs with the SDK without having to build the request object you can do it as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:'let modifySupplierRequest: ModifySupplierRequest = JSON.parse(\n  \'{"data":{"name":"nuovo nome", "phone":"03561234312"}}\'\n);\n'})}),"\n",(0,i.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,i.jsxs)(t.p,{children:["If you need a more detailed example, you can check our ",(0,i.jsx)(t.a,{href:"/quickstarts/ts-sdk-quickstart.mdx",children:"TypeScript SDK Quickstart"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Here you can find the full documentation of the available methods and models:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ts-sdk",children:"TypeScript SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/@fattureincloud/fattureincloud-ts-sdk",children:"NPM page"}),": The main package page on NPM"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://yarnpkg.com/package/@fattureincloud/fattureincloud-ts-sdk",children:"YarnPkg page"}),": The main package page on Yarn"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional resources"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://restfulapi.net/",children:"REST APIs"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/TypeScript",children:"TypeScript"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Node.js",children:"Node.js on Wikipedia"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://nodejs.org/en/about/releases/",children:"Node.js releases"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.npmjs.com/",children:"NPM"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://yarnpkg.com/",children:"Yarn"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/axios",children:"Axios HTTP Client"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const i={tabItem:"tabItem_Ymn6"};var r=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>k});var s=n(96540),i=n(34164),r=n(65627),a=n(56347),o=n(50372),l=n(30604),d=n(11861),c=n(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[d,u]=m({queryString:n,groupId:i}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,c.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),j=(()=>{const e=d??f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=n(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function g(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==s&&(d(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{l.push(e)},onKeyDown:u,onClick:c,...r,className:(0,i.A)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",j.tabList),children:[(0,y.jsx)(g,{...t,...e}),(0,y.jsx)(b,{...t,...e})]})}function k(e){const t=(0,x.A)();return(0,y.jsx)(w,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);