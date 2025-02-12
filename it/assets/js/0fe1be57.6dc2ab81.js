"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[76020],{89111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"stepbystep/company-scoped-methods","title":"Company methods","description":"Why do I need the company ID?","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/stepbystep/company-scoped-methods.mdx","sourceDirName":"stepbystep","slug":"/stepbystep/company-methods","permalink":"/develop/it/docs/1.0.1/stepbystep/company-methods","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"basics","permalink":"/develop/it/docs/1.0.1/tags/basics"},{"inline":true,"label":"terms","permalink":"/develop/it/docs/1.0.1/tags/terms"},{"inline":true,"label":"concepts","permalink":"/develop/it/docs/1.0.1/tags/concepts"},{"inline":true,"label":"company","permalink":"/develop/it/docs/1.0.1/tags/company"},{"inline":true,"label":"company id","permalink":"/develop/it/docs/1.0.1/tags/company-id"},{"inline":true,"label":"scopes","permalink":"/develop/it/docs/1.0.1/tags/scopes"},{"inline":true,"label":"unauthorized","permalink":"/develop/it/docs/1.0.1/tags/unauthorized"},{"inline":true,"label":"401","permalink":"/develop/it/docs/1.0.1/tags/401"}],"version":"current","lastUpdatedAt":1739273683000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Company methods","slug":"company-methods","description":"Why do I need the company ID?","tags":["basics","terms","concepts","company","company id","scopes","unauthorized","401"]},"sidebar":"tutorialSidebar","previous":{"title":"Common Terms","permalink":"/develop/it/docs/1.0.1/stepbystep/common-terms"},"next":{"title":"Authentication Mode","permalink":"/develop/it/docs/1.0.1/stepbystep/manual-authentication"}}');var i=t(74848),s=t(28453),a=t(65537),r=t(79329);const c={sidebar_position:3,title:"Company methods",slug:"company-methods",description:"Why do I need the company ID?",tags:["basics","terms","concepts","company","company id","scopes","unauthorized",401]},l=void 0,u={},d=[{value:"\ud83d\udd2c\xa0 Where can I find my company_id?",id:"microscope-where-can-i-find-my-company_id",level:2},{value:"\ud83d\ude4b\u200d\u2642\ufe0f\xa0 How can I know if a method is company-scoped?",id:"raising_hand_man-how-can-i-know-if-a-method-is-company-scoped",level:2},{value:"\ud83c\udf0d\xa0 Check on the API Reference",id:"earth_africa-check-on-the-api-reference",level:3},{value:"\ud83d\udcbc\xa0 Check on your SDK documentation",id:"briefcase-check-on-your-sdk-documentation",level:3},{value:"\ud83d\udcec\xa0 Check our Postman Collection",id:"mailbox_with_mail-check-our-postman-collection",level:3},{value:"\ud83d\udcdd\xa0 Check our OpenAPI file",id:"memo-check-our-openapi-file",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Most of our API resources are not owned by the user, but by a company. This makes it possible for all the users who have access to a single company to interact with all the resources it owns (if the user has the related permissions, of course).\nThis is why most of our methods are ",(0,i.jsx)(n.strong,{children:"Company-scoped"}),": it means that you need to provide an additional ",(0,i.jsx)(n.strong,{children:"company_id"})," parameter to use the method correctly."]}),"\n",(0,i.jsxs)(n.h2,{id:"microscope-where-can-i-find-my-company_id",children:["\ud83d\udd2c","\xa0 Where can I find my company_id?"]}),"\n",(0,i.jsxs)(n.p,{children:["One of the questions that we receive more often is: ",(0,i.jsx)(n.em,{children:'"How can I find my company_id?"'})]}),"\n",(0,i.jsxs)(n.p,{children:["Don't worry, it is really easy. You can list all the companies accessible by the user using the ",(0,i.jsx)(n.a,{href:"/api-reference#get-/user/companies",children:"List User Companies"})," method, which will return you an array of companies. Of course, this method is not company-scoped! ","\ud83d\ude01","\xa0 You just need to select the right company from the returned list and extract its ID, and you're done!"]}),"\n",(0,i.jsxs)(n.p,{children:["If you're implementing a simple application for a single company, then you can use our ",(0,i.jsx)(n.a,{href:"/api-reference#get-/user/companies",children:"API Reference"})," or our ",(0,i.jsx)(n.a,{href:"/quickstarts/postman-collection.md",children:"Postman Collection"})," to retrieve the Company ID, and then insert it as a constant in your code; this way, you'll avoid writing code to retrieve a value that will never change.\nOtherwise, if you need to manage multiple company IDs that are unknown at developing time, then you can check the SDK examples below to retrieve the Company ID from your code."]}),"\n",(0,i.jsx)(n.p,{children:"Here you can find the steps to use the API Reference to retrieve the Company ID:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Obtain a valid Access Token using one of the available ",(0,i.jsx)(n.a,{href:"/basics/authentication.mdx",children:"methods"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["Open the ",(0,i.jsx)(n.a,{href:"/api-reference#auth",children:"Auth Section"}),' in the API Reference, and insert the copied access token in the "HTTP BEARER" Section (please, don\'t add "Bearer" to the token, the tool will take care of it!);']}),"\n",(0,i.jsxs)(n.li,{children:["Search the ",(0,i.jsx)(n.strong,{children:"List User Companies"}),' method and click the "Try" button, the Company ID will be included in the obtained response.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Here you can find a few examples using our SDKs:"}),"\n",(0,i.jsxs)(a.A,{groupId:"languages",children:[(0,i.jsx)(r.A,{value:"cs",label:"C#",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'using System.Collections.Generic;\nusing System.Diagnostics;\nusing It.FattureInCloud.Sdk.Api;\nusing It.FattureInCloud.Sdk.Client;\nusing It.FattureInCloud.Sdk.Model;\n\nConfiguration config = new Configuration();\nconfig.BasePath = "https://api-v2.fattureincloud.it";\n// Check out the Authentication section to retrieve the Access Token\nconfig.AccessToken = "YOUR_ACCESS_TOKEN";\n\nvar apiInstance = new UserApi(config);\n\ntry\n{\n    // List User Companies\n    ListUserCompaniesResponse result = apiInstance.ListUserCompanies();\n    // In the result you\'ll find a list of companies, you must use the "Id" field of one of those\n    Console.Write(result.Data.Companies[0].Id);\n}\ncatch (ApiException  e)\n{\n    Console.Write("Exception when calling UserApi.ListUserCompanies: " + e.Message);\n    Console.Write("Status Code: " + e.ErrorCode);\n    Console.Write(e.StackTrace);\n}\n'})})}),(0,i.jsx)(r.A,{value:"go",label:"Go",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "fmt"\n    "os"\n    fattureincloudapi "github.com/fattureincloud/fattureincloud-go-sdk/v2/api"\n    fattureincloud "github.com/fattureincloud/fattureincloud-go-sdk/v2/model"\n)\n\nfunc main() {\n  // Check out the Authentication section to retrieve the Access Token\n  auth := context.WithValue(context.Background(), fattureincloudapi.ContextAccessToken, "ACCESS_TOKEN")\n  configuration := fattureincloudapi.NewConfiguration()\n  apiClient := fattureincloudapi.NewAPIClient(configuration)\n  resp, r, err := apiClient.UserAPI.ListUserCompanies(auth).Execute()\n  if err != nil {\n      fmt.Fprintf(os.Stderr, "Error when calling `UserAPI.ListUserCompanies``: %v\\n", err)\n      fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n  }\n  // response from `ListUserCompanies`: ListUserCompaniesResponse\n  // In the result you\'ll find a list of companies, you must use the "Id" field of one of those\n  fmt.Printf("%d", resp.GetData().GetCompanies()[0].GetId())\n}\n'})})}),(0,i.jsx)(r.A,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import it.fattureincloud.sdk.ApiClient;\nimport it.fattureincloud.sdk.ApiException;\nimport it.fattureincloud.sdk.Configuration;\nimport it.fattureincloud.sdk.auth.*;\nimport it.fattureincloud.sdk.models.*;\nimport it.fattureincloud.sdk.api.UserApi;\n\nApiClient defaultClient = Configuration.getDefaultApiClient();\ndefaultClient.setBasePath("https://api-v2.fattureincloud.it");\n\n// Check out the Authentication section to retrieve the Access Token\nOAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");\nOAuth2AuthenticationCodeFlow.setAccessToken("YOUR ACCESS TOKEN");\n\nUserApi apiInstance = new UserApi(defaultClient);\ntry {\n  ListUserCompaniesResponse result = apiInstance.listUserCompanies();\n  // In the result you\'ll find a list of companies, you must use the "id" field of one of those\n  System.out.println(result.getData().getCompanies().get(0).getId());\n} catch (ApiException e) {\n  System.err.println("Exception when calling UserApi#listUserCompanies");\n  System.err.println("Status code: " + e.getCode());\n  System.err.println("Reason: " + e.getResponseBody());\n  System.err.println("Response headers: " + e.getResponseHeaders());\n  e.printStackTrace();\n}\n'})})}),(0,i.jsx)(r.A,{value:"js",label:"JavaScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import fattureInCloudSdk from "@fattureincloud/fattureincloud-js-sdk";\nlet defaultClient = fattureInCloudSdk.ApiClient.instance;\n\n// Check out the Authentication section to retrieve the Access Token\nlet OAuth2AuthenticationCodeFlow =\n  defaultClient.authentications["OAuth2AuthenticationCodeFlow"];\nOAuth2AuthenticationCodeFlow.accessToken = "YOUR ACCESS TOKEN";\n\nlet apiInstance = new fattureInCloudSdk.UserApi();\napiInstance.listUserCompanies().then(\n  (result) => {\n    // In the result you\'ll find a list of companies, you must use the "id" field of one of those\n    console.log(result.data.companies[0].id);\n  },\n  (error) => {\n    console.error(error);\n  }\n);\n'})})}),(0,i.jsx)(r.A,{value:"php",label:"PHP",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n// Check out the Authentication section to retrieve the Access Token\n$config = FattureInCloud\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new FattureInCloud\\Api\\UserApi(\n    // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n    // This is optional, `GuzzleHttp\\Client` will be used as default.\n    new GuzzleHttp\\Client(),\n    $config\n);\n\ntry {\n    $result = $apiInstance->listUserCompanies();\n    // In the result you'll find a list of companies, you must use the \"id\" field of one of those\n    print_r($result->getData()->getCompanies()[0]->getId());\n} catch (Exception $e) {\n    echo 'Exception when calling UserApi->listUserCompanies: ', $e->getMessage(), PHP_EOL;\n}\n"})})}),(0,i.jsx)(r.A,{value:"py",label:"Python",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:'from __future__ import print_function\nimport time\nimport os\nimport fattureincloud_python_sdk\nfrom fattureincloud_python_sdk.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api-v2.fattureincloud.it\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = fattureincloud_python_sdk.Configuration(\n    host = "https://api-v2.fattureincloud.it"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Check out the Authentication section to retrieve the Access Token\nconfiguration.access_token = os.environ["ACCESS_TOKEN"]\n\n# Enter a context with an instance of the API client\nwith fattureincloud_python_sdk.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = fattureincloud_python_sdk.UserApi(api_client)\n\n    try:\n        # List User Companies\n        api_response = api_instance.list_user_companies()\n        # In the result you\'ll find a list of companies, you must use the "id" field of one of those\n        print(api_response.data.companies[0].id)\n    except Exception as e:\n        print("Exception when calling UserApi->list_user_companies: %s\\n" % e)\n'})})}),(0,i.jsx)(r.A,{value:"rb",label:"Ruby",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rb",children:"require 'time'\nrequire 'fattureincloud_ruby_sdk'\n\n# setup authorization\nFattureInCloud_Ruby_Sdk.configure do |config|\n  # Check out the Authentication section to retrieve the Access Token\n  config.access_token = 'YOUR ACCESS TOKEN'\nend\n\napi_instance = FattureInCloud_Ruby_Sdk::UserApi.new\n\nbegin\n  # List User Companies\n  result = api_instance.list_user_companies\n  # In the result you'll find a list of companies, you must use the \"id\" field of one of those\n  p result.data.companies[0].id\nrescue FattureInCloud_Ruby_Sdk::ApiError => e\n  puts \"Error when calling UserApi->list_user_companies: #{e}\"\nend\n"})})}),(0,i.jsx)(r.A,{value:"ts",label:"TypeScript",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Configuration, UserApi } from "@fattureincloud/fattureincloud-ts-sdk";\n// Check out the Authentication section to retrieve the Access Token\nconst apiConfig = new Configuration({\n  accessToken: "YOUR ACCESS TOKEN",\n});\n\nlet apiInstance = new UserApi(apiConfig);\napiInstance.listUserCompanies().then(\n  (result) => {\n    // In the result you\'ll find a list of companies, you must use the "id" field of one of those\n    console.log(result.data.companies[0].id);\n  },\n  (error) => {\n    console.error(error);\n  }\n);\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["If you want more examples, you can find them in the ",(0,i.jsx)(n.em,{children:"Readme file"})," of each ",(0,i.jsx)(n.a,{href:"/develop/it/docs/1.0.1/sdks/",children:"SDK"})," or in the ",(0,i.jsx)(n.a,{href:"/quickstarts/index.mdx",children:"Quickstart"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to retrieve the details of a specific company, you can always use the ",(0,i.jsx)(n.a,{href:"/api-reference#get-/c/-company_id-/company/info",children:"Get Company Info"})," method, but in this case, this method is company-scoped, so you need an ID! ","\ud83d\ude09","\xa0"]}),"\n",(0,i.jsxs)(n.h2,{id:"raising_hand_man-how-can-i-know-if-a-method-is-company-scoped",children:["\ud83d\ude4b\u200d\u2642\ufe0f","\xa0 How can I know if a method is company-scoped?"]}),"\n",(0,i.jsxs)(n.p,{children:["The majority of our methods are ",(0,i.jsx)(n.em,{children:"company-scoped"}),", so there's a high probability that the method you need to use is included in this group.\nIf you want to be sure if your API method is actually company-scoped, you just need to check if it requires a ",(0,i.jsx)(n.strong,{children:"company_id"})," parameter."]}),"\n",(0,i.jsx)(n.p,{children:"In order to do it, you have a few possibilities:"}),"\n",(0,i.jsxs)(n.h3,{id:"earth_africa-check-on-the-api-reference",children:["\ud83c\udf0d","\xa0 Check on the API Reference"]}),"\n",(0,i.jsxs)(n.p,{children:["This is the easier option, that only requires you to search the method on our ",(0,i.jsx)(n.a,{href:"/api-reference",children:"API Reference"})," section.\nFor example, let's check the ",(0,i.jsx)(n.a,{href:"/api-reference#get-/c/-company_id-/issued_documents",children:"List Issued Documents"})," method. Checking the URL on top of the page, you can notice that it contains the ",(0,i.jsx)(n.strong,{children:"/c/{company_id}"})," portion, indicating that it is a company-scoped URL that requires to substitute the placeholder to be executed correctly."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"API Reference Method URL",src:t(89040).A+"#gh-light-mode-only"}),"\n",(0,i.jsx)(n.img,{alt:"API Reference Method URL",src:t(87615).A+"#gh-dark-mode-only"})]}),"\n",(0,i.jsxs)(n.p,{children:["On the same page, you can also check if you have a ",(0,i.jsx)(n.strong,{children:"company_id"})," box in the ",(0,i.jsx)(n.strong,{children:"Path Params"})," section: here you must insert your company",(0,i.jsx)(n.em,{children:"id while trying to use the API method using the _Try"})," button."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"API Reference Method Path Params",src:t(39071).A+"#gh-light-mode-only"}),"\n",(0,i.jsx)(n.img,{alt:"API Reference Method Path Params",src:t(11200).A+"#gh-dark-mode-only"})]}),"\n",(0,i.jsxs)(n.h3,{id:"briefcase-check-on-your-sdk-documentation",children:["\ud83d\udcbc","\xa0 Check on your SDK documentation"]}),"\n",(0,i.jsxs)(n.p,{children:["If you're using a specific ",(0,i.jsx)(n.a,{href:"/develop/it/docs/1.0.1/sdks/",children:"SDK"}),", probably it will be easier for you to take advantage of it to check if a method is company-scoped: all the methods that are in this category require an integer ",(0,i.jsx)(n.strong,{children:"company_id"})," to be executed correctly.\nYou can check if the company_id parameter is required by checking the signature of your method (for example using your IDE's functionalities) or accessing your SDK's documentation. Read your SDK's page for further info."]}),"\n",(0,i.jsx)(n.p,{children:"For example, using our PHP SDK you have two alternatives:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Accessing the GitHub page of the ",(0,i.jsx)(n.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk/blob/master/docs/Api/IssuedDocumentsApi.md#listissueddocuments",children:"List Issued Documents"})," method and check if it requires the company_id parameter"]}),"\n",(0,i.jsx)(n.li,{children:"Use your favorite IDE to check if the method requires it, without having to access our documentation online"}),"\n",(0,i.jsxs)(n.li,{children:["Some of the SDKs provide standard documentation for the language they're based on; for example, Java's ",(0,i.jsx)(n.a,{href:"https://javadoc.io/doc/it.fattureincloud/fattureincloud-java-sdk/latest/index.html",children:"JavaDoc"})," or Ruby's ",(0,i.jsx)(n.a,{href:"https://www.rubydoc.info/gems/fattureincloud_ruby_sdk/",children:"RubyDoc"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"mailbox_with_mail-check-our-postman-collection",children:["\ud83d\udcec","\xa0 Check our Postman Collection"]}),"\n",(0,i.jsxs)(n.p,{children:["If you're testing our API using our ",(0,i.jsx)(n.a,{href:"../quickstarts/postman-collection",children:"Postman Collection"}),", you can check if the method needs the company",(0,i.jsxs)(n.em,{children:["id parameter.\nYou can check if the method's URL includes the ",(0,i.jsxs)(n.strong,{children:["/c/",":company_id"]})," portion, where ",(0,i.jsx)(n.em,{children:":company"}),"id"]})," is the placeholder that must be replaced with the actual numeric ID:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Postman url",src:t(34678).A+"#gh-light-mode-only"}),"\n",(0,i.jsx)(n.img,{alt:"Postman url",src:t(24491).A+"#gh-dark-mode-only"})]}),"\n",(0,i.jsxs)(n.p,{children:["Otherwise, similarly to what you can do in our API Reference section, you can just search for a company",(0,i.jsx)(n.em,{children:"id param in the _Path Variables"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Postman Path Variables",src:t(87744).A+"#gh-light-mode-only"}),"\n",(0,i.jsx)(n.img,{alt:"Postman Path Variables",src:t(71923).A+"#gh-dark-mode-only"})]}),"\n",(0,i.jsxs)(n.h3,{id:"memo-check-our-openapi-file",children:["\ud83d\udcdd","\xa0 Check our OpenAPI file"]}),"\n",(0,i.jsxs)(n.p,{children:["This is probably the most complicated method because it requires you to know how to read an OpenAPI file (or at least a YAML file) or to use an OpenAPI editor; at the same time, this is our source of truth: all the previous method derive from our OpenAPI specification, so this is where the company",(0,i.jsxs)(n.em,{children:["id param is defined.\nChecking our ",(0,i.jsx)(n.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),", you can find out if our method requires a company_id parameter by checking the _openapi.yaml"]})," file: below you can notice that the URL contains the ",(0,i.jsx)(n.strong,{children:"{company_id}"})," placeholder and that the company_id param is listed in the parameters section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="openapi.yaml"',children:'/c/\\{company_id\\}/issued_documents:\n  parameters:\n    - $ref: "#/components/parameters/company_id"\n  get:\n    summary: List Issued Documents\n    tags:\n      - Issued Documents\n    responses:\n      "200":\n        $ref: "#/components/responses/ListIssuedDocumentsResponse"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},79329:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var o=t(34164);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,a),hidden:t,children:n})}},65537:(e,n,t)=>{t.d(n,{A:()=>C});var o=t(96540),i=t(34164),s=t(65627),a=t(56347),r=t(50372),c=t(30604),l=t(11861),u=t(78749);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,l.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[a,c]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[l,d]=m({queryString:t,groupId:i}),[f,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,u.Dv)(t);return[i,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),g=(()=>{const e=l??f;return p({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{g&&c(g)}),[g]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function x(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=r[t].value;i!==o&&(l(n),a(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{c.push(e)},onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...n,...e}),(0,b.jsx)(A,{...n,...e})]})}function C(e){const n=(0,y.A)();return(0,b.jsx)(k,{...e,children:d(e.children)},String(n))}},39071:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/api-reference-method-path-params-30a666e4cfecce509e27ba50c905437e.png"},89040:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/api-reference-method-url-22389080b82efe418d3beb29b9531e41.png"},11200:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/dark-api-reference-method-path-params-9c58bb874ce30d4888cb43ecdbb02bd4.png"},87615:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/dark-api-reference-method-url-ec6225790c78812065b7b18d2991b9df.png"},71923:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/dark-postman-path-variables-8f0e8e9d05bdf9eca09702d889fe374a.png"},24491:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/dark-postman-url-e65c84f3cbc57fcdb1bf5effef2ed8ef.png"},87744:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/postman-path-variables-70024506c849e9ef8b8a6ed446513477.png"},34678:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/postman-url-4b4a3a8725f0428200c2af49a77aee03.png"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);