"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[540],{72214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"sdks/go-sdk","title":"Go SDK","description":"The official TSE in Cloud Go SDK","source":"@site/docs/sdks/go-sdk.mdx","sourceDirName":"sdks","slug":"/sdks/go-sdk","permalink":"/develop/it/docs/sdks/go-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/sdks/go-sdk.mdx","tags":[{"inline":true,"label":"sdk","permalink":"/develop/it/docs/tags/sdk"},{"inline":true,"label":"code example","permalink":"/develop/it/docs/tags/code-example"},{"inline":true,"label":"go","permalink":"/develop/it/docs/tags/go"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Go SDK","slug":"go-sdk","description":"The official TSE in Cloud Go SDK","tags":["sdk","code example","go"]},"sidebar":"tutorialSidebar","previous":{"title":".NET SDK","permalink":"/develop/it/docs/sdks/net-sdk"},"next":{"title":"JavaScript SDK","permalink":"/develop/it/docs/sdks/javascript-sdk"}}');var s=n(74848),o=n(28453);n(11470),n(19365);const r={sidebar_position:2,title:"Go SDK",slug:"go-sdk",description:"The official TSE in Cloud Go SDK",tags:["sdk","code example","go"]},a=void 0,l={},d=[{value:"\u2611\ufe0f\xa0 Requirements and Dependencies",id:"ballot_box_with_check-requirements-and-dependencies",level:2},{value:"\u2b07\ufe0f\xa0 Download and Installation",id:"arrow_down-download-and-installation",level:2},{value:"\ud83d\udc77\xa0 SDK Structure",id:"construction_worker_man-sdk-structure",level:2},{value:"\ud83d\udce2\xa0 API calls",id:"loudspeaker-api-calls",level:2},{value:"\ud83c\udfa9\xa0 Response customization",id:"tophat-response-customization",level:3},{value:"\ud83d\udd03\xa0 Sorting",id:"arrows_clockwise-sorting",level:3},{value:"\ud83d\udcc3\xa0 Pagination",id:"page_with_curl-pagination",level:3},{value:"\ud83c\udff7\xa0 Filtering",id:"label-filtering",level:3},{value:"\ud83d\udd11\xa0 Authentication &amp; Authorization",id:"key-authentication--authorization",level:2},{value:"\ud83d\udc24\xa0 Getting started",id:"baby_chick-getting-started",level:2},{value:"\ud83d\uddd2\xa0 Retrieve the JSON request body",id:"spiral_notepad-retrieve-the-json-request-body",level:2},{value:"\ud83e\udd65\xa0 Use raw JSON as request body",id:"coconut-use-raw-json-as-request-body",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2},{value:"\ud83d\udcda\xa0 Additional resources",id:"books-additional-resources",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"TSE in Cloud Go SDK"})," is a ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Go_(programming_language)",children:"Go"})," library that offers models and methods to interact with the ",(0,s.jsx)(t.strong,{children:"TSE in Cloud v2 REST API"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Do you need a generic intro?",type:"info",children:(0,s.jsxs)(t.p,{children:["If you want to know more generic information about our SDKs, please check the ",(0,s.jsx)(t.a,{href:"/develop/it/docs/sdks/",children:"SDK Overview"})," page."]})}),"\n",(0,s.jsxs)(t.h2,{id:"ballot_box_with_check-requirements-and-dependencies",children:["\u2611\ufe0f","\xa0 Requirements and Dependencies"]}),"\n",(0,s.jsxs)(t.p,{children:["This SDK can be used in ",(0,s.jsx)(t.a,{href:"https://go.dev",children:"Go"})," applications."]}),"\n",(0,s.jsxs)(t.h2,{id:"arrow_down-download-and-installation",children:["\u2b07\ufe0f","\xa0 Download and Installation"]}),"\n",(0,s.jsxs)(t.p,{children:["The SDK code and detailed documentation can be found in the ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk",children:"GitHub repository"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Important!",type:"danger",children:(0,s.jsxs)(t.p,{children:["Make sure you always import the newest version of our SDK, you can check which version is the latest on ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk/tags",children:"GitHub"})]})}),"\n",(0,s.jsx)(t.p,{children:"The SDK can be installed running the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"go get github.com/fattureincloud/fattureincloud-go-sdk\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"construction_worker_man-sdk-structure",children:["\ud83d\udc77","\xa0 SDK Structure"]}),"\n",(0,s.jsx)(t.p,{children:"Our SDK is mainly split into two different packages:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"api"}),": Here you can find the implementation of our API methods, you will need to initialize one of those APIs to start."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"model"}),": This package contains all the representations of our API requests and responses; when using one of the methods above, you'll have to manage some of those models."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"There are some models with a special role:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The models with a name ending for ",(0,s.jsx)(t.em,{children:"Request"})," can be used as request body for one of our methods."]}),"\n",(0,s.jsxs)(t.li,{children:["The models with a name ending for ",(0,s.jsx)(t.em,{children:"Response"})," will be returned after the execution of one of the methods.\nThe other models will be used to compose the content of the requests or responses for our methods."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["You can think about Request and Response as wrappers: each one of them is dedicated to a single method of the API, and they will most of the time contain a single attribute called ",(0,s.jsx)(t.em,{children:"data"}),", that contains the real body of the request or the response represented through a composition of the other models. Each method will accept at most one Request model and will return at most one Response model."]}),"\n",(0,s.jsxs)(t.p,{children:["Let's take for example the ",(0,s.jsx)(t.a,{href:"/api-reference#put-/c/-company_id-/entities/suppliers/-supplier_id-",children:"Modify Supplier"})," method."]}),"\n",(0,s.jsxs)(t.p,{children:["It is included in the ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk/blob/master/docs/SuppliersAPI.md#modifySupplier",children:"SuppliersApi"}),", it accepts one ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk/blob/master/docs/ModifySupplierRequest.md",children:"ModifySupplierRequest"})," and it returns a ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk/blob/master/docs/ModifySupplierResponse.md",children:"ModifySupplierResponse"}),". In both cases, the ",(0,s.jsx)(t.em,{children:"data"})," parameter will contain a ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk/blob/master/docs/Supplier.md",children:"Supplier"}),", that represents the modifies to apply to the supplier (for the request) and the final status of the supplier (for the response)."]}),"\n",(0,s.jsxs)(t.p,{children:["In contrast, the ",(0,s.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/entities/suppliers",children:"List Suppliers"})," method is still contained in the ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk/blob/master/docs/SuppliersAPI.md#listSuppliers",children:"SuppliersApi"}),", but it doesn't need any request body and returns a single ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk/blob/master/docs/ListSuppliersResponse.md",children:"ListSuppliersResponse"}),", where the ",(0,s.jsx)(t.em,{children:"data"})," parameter will contain an array of Suppliers."]}),"\n",(0,s.jsxs)(t.h2,{id:"loudspeaker-api-calls",children:["\ud83d\udce2","\xa0 API calls"]}),"\n",(0,s.jsx)(t.p,{children:"The API methods can be categorized as follows:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Category (prefix)"}),(0,s.jsx)(t.th,{children:"Request Body"}),(0,s.jsx)(t.th,{children:"Response Body"}),(0,s.jsx)(t.th,{children:"Notes"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"List (list)"}),(0,s.jsx)(t.td,{children:"\u274c"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"#-response-customization",children:"\ud83c\udfa9"}),"\xa0 + ",(0,s.jsx)(t.a,{href:"#-sorting",children:"\ud83d\udd03"}),"\xa0 + ",(0,s.jsx)(t.a,{href:"#-pagination",children:"\ud83d\udcc3"})," + ",(0,s.jsx)(t.a,{href:"#%EF%B8%8F-filtering",children:"\ud83c\udff7"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Create (create)"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Get (get)"}),(0,s.jsx)(t.td,{children:"\u274c"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"#-response-customization",children:"\ud83c\udfa9"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Modify (modify)"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{children:"\u2705"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Delete (delete)"}),(0,s.jsx)(t.td,{children:"\u274c"}),(0,s.jsx)(t.td,{children:"\u274c"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"In addition to the Request, every method could require some additional parameters like the IDs of the company and the resource."}),"\n",(0,s.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,s.jsxs)(t.p,{children:["In this example, we'll suppose you have to manage just one Company, so we simply inserted its ID directly in the code. If instead, you need to be able to manage multiple companies, you'll need to retrieve the ID of the current company in some way.\nCheck the ",(0,s.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info. Additionally, the ",(0,s.jsx)(t.a,{href:"/quickstarts/go-sdk-quickstart.mdx",children:"Go Quickstart"})," contains an example of Company ID retrieval using the SDK."]})}),"\n",(0,s.jsxs)(t.h3,{id:"tophat-response-customization",children:["\ud83c\udfa9","\xa0 Response customization"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"List"})," and ",(0,s.jsx)(t.strong,{children:"Post"})," methods include some parameters dedicated to the ",(0,s.jsx)(t.a,{href:"/develop/it/docs/basics/additional-capabilities/customize-response",children:"response customization"}),". These parameters are passed as method arguments."]}),"\n",(0,s.jsxs)(t.h3,{id:"arrows_clockwise-sorting",children:["\ud83d\udd03","\xa0 Sorting"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"List"})," methods are a particular case because they are related to a set of resources instead of a single one; this means that the API will need to assign an order to the resources that will be returned. If needed, you can explicitly define a ",(0,s.jsx)(t.a,{href:"/develop/it/docs/basics/additional-capabilities/sort-results",children:"sorting"})," rule by adding the ",(0,s.jsx)(t.strong,{children:"scope"})," parameter."]}),"\n",(0,s.jsxs)(t.h3,{id:"page_with_curl-pagination",children:["\ud83d\udcc3","\xa0 Pagination"]}),"\n",(0,s.jsxs)(t.p,{children:["Strictly related to the Sorting functionality is the Pagination. The ",(0,s.jsx)(t.strong,{children:"List"})," methods return a potentially huge set of resources, making it necessary to ",(0,s.jsx)(t.a,{href:"/develop/it/docs/basics/additional-capabilities/paginate-results",children:"paginate the results"})," to make the responses manageable; each method will then accept an additional set of ",(0,s.jsx)(t.strong,{children:"pagination parameters"}),", and the Response classes will contain some pagination details along with the ",(0,s.jsx)(t.em,{children:"data"})," parameter."]}),"\n",(0,s.jsxs)(t.h3,{id:"label-filtering",children:["\ud83c\udff7","\xa0 Filtering"]}),"\n",(0,s.jsxs)(t.p,{children:["By default, the ",(0,s.jsx)(t.strong,{children:"List"})," methods will return the whole set of available resources for a certain method. If you instead want to focus on a particular subset of resources, you can apply specific ",(0,s.jsx)(t.a,{href:"/develop/it/docs/basics/additional-capabilities/filter-results",children:"filters"})," to reduce the size of the result and retrieve only what you need."]}),"\n",(0,s.jsxs)(t.h2,{id:"key-authentication--authorization",children:["\ud83d\udd11","\xa0 Authentication & Authorization"]}),"\n",(0,s.jsxs)(t.p,{children:["This SDK allows you to retrieve and refresh the access token with the integrated OAuth Helper, you can find a complete guide about it ",(0,s.jsx)(t.a,{href:"/authentication/code-flow/sdk-oauth-helper.mdx",children:"here"}),", in case you are using the manual auth you can always set the token manually."]}),"\n",(0,s.jsxs)(t.h2,{id:"baby_chick-getting-started",children:["\ud83d\udc24","\xa0 Getting started"]}),"\n",(0,s.jsx)(t.p,{children:"After you followed the installation procedure and retrieve a valid Access Token (see above), you can start using our APIs."}),"\n",(0,s.jsx)(t.p,{children:"First, you need to import the SDK and initialize the authentication using the token:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t"encoding/json"\n\t"os"\n\n\tfattureincloudapi "github.com/fattureincloud/fattureincloud-go-sdk/v2/api"\n\tfattureincloud "github.com/fattureincloud/fattureincloud-go-sdk/v2/model"\n)\n\nfunc main() {\n\t// Configure OAuth2 access token for authorization:\n\tauth := context.WithValue(context.Background(), fattureincloudapi.ContextAccessToken, "YOUR_ACCESS_TOKEN")\n\tconfiguration := fattureincloudapi.NewConfiguration()\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"You can then retrieve one or more of the APIs, for example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"suppliersApi := fattureincloudapi.NewAPIClient(configuration).SuppliersApi\n"})}),"\n",(0,s.jsx)(t.p,{children:"Once you obtained the needed API, you can start using the methods it provides."}),"\n",(0,s.jsx)(t.admonition,{title:"Select the correct APIs!",type:"warning",children:(0,s.jsx)(t.p,{children:"If you want to use a method declared in two different APIs, you'll not be able to use the same instance. Instead, you'll need two different instances, one for each of the needed APIs."})}),"\n",(0,s.jsxs)(t.p,{children:["Let's implement the ",(0,s.jsx)(t.em,{children:"ListSuppliers"})," and ",(0,s.jsx)(t.em,{children:"ModifySupplier"})," methods explained above:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'// NOTE: this is a complete request, but please customize it!!!\n// In the next step we\'ll explain how to perform the request to the API.\n\n// in this example we are using our Go SDK\n// https://github.com/fattureincloud/fattureincloud-go-sdk\npackage main\n\nimport (\n\t"context"\n\t"encoding/json"\n\t"fmt"\n\t"os"\n\n\tfattureincloudapi "github.com/fattureincloud/fattureincloud-go-sdk/v2/api"\n\tfattureincloud "github.com/fattureincloud/fattureincloud-go-sdk/v2/model"\n)\n\nfunc main() {\n\tcompanyId := int32(12345) // int32 | The ID of the company.\n    fields := "" // string | List of comma-separated fields. (optional)\n    fieldset := "detailed" // string | Name of the fieldset. (optional)\n    sort := "-id" // string | List of comma-separated fields for result sorting (minus for desc sorting). (optional)\n    page := int32(2) // int32 | The page to retrieve. (optional) (default to 1)\n    perPage := int32(8) // int32 | The size of the page. (optional) (default to 5)\n\n\t// Configure OAuth2 access token for authorization:\n\tauth := context.WithValue(context.Background(), fattureincloudapi.ContextAccessToken, "YOUR_ACCESS_TOKEN")\n\tconfiguration := fattureincloudapi.NewConfiguration()\n\tsuppliersApi := fattureincloudapi.NewAPIClient(configuration).SuppliersApi\n    companySuppliers, r, err := suppliersAPI.ListSuppliers(auth, companyId).Fields(fields).Fieldset(fieldset).Sort(sort).Page(page).PerPage(perPage).Execute()\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error when calling `SuppliersAPI.ListSuppliers``: %v\\n", err)\n        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n    }\n\n\tfirstSupplier := companySuppliers.GetData()[0]\n\n\tmodifySupplierRequest := *firstSupplier.SetName("nuovo nome").SetPhone("03561234312")\n\n\tresp, r, err := suppliersAPI.ModifySupplier(auth, companyId, firstSupplier.GetId()).ModifySupplierRequest(modifySupplierRequest).Execute()\n    if err != nil {\n        fmt.Fprintf(os.Stderr, "Error when calling `SuppliersAPI.ModifySupplier``: %v\\n", err)\n        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n    }\n\n    // response from `ModifySupplier`: ModifySupplierResponse\n    json.NewEncoder(os.Stdout).Encode(resp)\n\n}\n'})}),"\n",(0,s.jsx)(t.admonition,{title:"We're done!",type:"tip",children:(0,s.jsx)(t.p,{children:"You can finally start interacting with the TSE in Cloud API!"})}),"\n",(0,s.jsxs)(t.h2,{id:"spiral_notepad-retrieve-the-json-request-body",children:["\ud83d\uddd2","\xa0 Retrieve the JSON request body"]}),"\n",(0,s.jsxs)(t.p,{children:["If you are experiencing some kind of issue and you want to check the raw JSON sent as the body for your request (and maybe send it to our ",(0,s.jsx)(t.a,{href:"/support.md",children:"customer support"}),") you can do it as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:"json.NewEncoder(os.Stdout).Encode(modifySupplierRequest)\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"coconut-use-raw-json-as-request-body",children:["\ud83e\udd65","\xa0 Use raw JSON as request body"]}),"\n",(0,s.jsx)(t.p,{children:"If you already have a complete json that you want to use to call our APIs with the SDK without having to build the request object you can do it as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'modifySupplierRequest := *fattureincloud.NewModifySupplierRequest()\nerr := json.Unmarshal([]byte("{\\"data\\":{\\"name\\":\\"nuovo nome\\", \\"phone\\":\\"03561234312\\"}}"), &modifySupplierRequest)\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,s.jsxs)(t.p,{children:["If you need a more detailed example, you can check our ",(0,s.jsx)(t.a,{href:"/quickstarts/ts-sdk-quickstart.mdx",children:"Go SDK Quickstart"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Here you can find the full documentation of the available methods and models:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk",children:"Go SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional resources"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://restfulapi.net/",children:"REST APIs"})}),"\n",(0,s.jsxs)(t.li,{children:["[Go](",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Go_(programming_language)",children:"https://en.wikipedia.org/wiki/Go_(programming_language)"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(34164);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var i=n(96540),s=n(34164),o=n(23104),r=n(56347),a=n(205),l=n(57485),d=n(31682),c=n(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[d,u]=f({queryString:n,groupId:s}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),x=(()=>{const e=d??m;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var g=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function b(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==i&&(d(t),r(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...o,className:(0,s.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function v(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...t,...e}),(0,j.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);