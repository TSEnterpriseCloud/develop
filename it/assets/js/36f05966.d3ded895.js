"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[5256],{92144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"basics/additional-capabilities/sort-results","title":"Sort Results","description":"Sort the results returned by our APIs","source":"@site/docs/basics/additional-capabilities/sort-results.mdx","sourceDirName":"basics/additional-capabilities","slug":"/basics/additional-capabilities/sort-results","permalink":"/develop/it/docs/basics/additional-capabilities/sort-results","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/additional-capabilities/sort-results.mdx","tags":[{"inline":true,"label":"basics","permalink":"/develop/it/docs/tags/basics"},{"inline":true,"label":"additional capabilities","permalink":"/develop/it/docs/tags/additional-capabilities"},{"inline":true,"label":"customize","permalink":"/develop/it/docs/tags/customize"},{"inline":true,"label":"optional","permalink":"/develop/it/docs/tags/optional"},{"inline":true,"label":"sort","permalink":"/develop/it/docs/tags/sort"},{"inline":true,"label":"list","permalink":"/develop/it/docs/tags/list"},{"inline":true,"label":"code example","permalink":"/develop/it/docs/tags/code-example"},{"inline":true,"label":"c#","permalink":"/develop/it/docs/tags/c"},{"inline":true,"label":"java","permalink":"/develop/it/docs/tags/java"},{"inline":true,"label":"javascript","permalink":"/develop/it/docs/tags/javascript"},{"inline":true,"label":"php","permalink":"/develop/it/docs/tags/php"},{"inline":true,"label":"python","permalink":"/develop/it/docs/tags/python"},{"inline":true,"label":"ruby","permalink":"/develop/it/docs/tags/ruby"},{"inline":true,"label":"typescript","permalink":"/develop/it/docs/tags/typescript"}],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Sort Results","slug":"sort-results","sidebar_position":1,"description":"Sort the results returned by our APIs","tags":["basics","additional capabilities","customize","optional","sort","list","code example","c#","java","javascript","php","python","ruby","typescript"]},"sidebar":"tutorialSidebar","previous":{"title":"Additional Capabilities","permalink":"/develop/it/docs/basics/additional-capabilities/"},"next":{"title":"Paginate results","permalink":"/develop/it/docs/basics/additional-capabilities/paginate-results"}}');var a=n(74848),s=n(28453),i=n(11470),o=n(19365);const l={title:"Sort Results",slug:"sort-results",sidebar_position:1,description:"Sort the results returned by our APIs",tags:["basics","additional capabilities","customize","optional","sort","list","code example","c#","java","javascript","php","python","ruby","typescript"]},d=void 0,c={},u=[{value:"\ud83d\udcd4\xa0 Sortable fields",id:"notebook_with_decorative_cover-sortable-fields",level:2},{value:"\ud83d\udcda\xa0 Additional Resources",id:"books-additional-resources",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Some of our APIs (e.g. the ",(0,a.jsx)(t.em,{children:"LIST"})," methods) return a set of resources instead of a single one. This means that a certain order is established between them and that your application could take advantage of a certain order."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Sorting"})," lets you choose the rule that must be used to order the returned resources, delegating this task to our APIs."]}),"\n",(0,a.jsx)(t.admonition,{title:"Check the fields!",type:"warning",children:(0,a.jsx)(t.p,{children:"Our APIs let you apply an ordering rule only on a certain set of fields. Please check the table below for the available fields for each method."})}),"\n",(0,a.jsxs)(t.p,{children:["To order the returned resources, all you have to do is to add the ",(0,a.jsx)(t.strong,{children:"sort"})," parameter to the query string, containing a comma-separated set of the fields that define the sorting rule. The default order for each field is the ",(0,a.jsx)(t.strong,{children:"ascending order"}),", which doesn't require any prefix, while the ",(0,a.jsx)(t.strong,{children:"descending order"}),' can be selected by adding the prefix "-" to the field name.']}),"\n",(0,a.jsx)(t.p,{children:'For example, this request will sort all the expenses first by the "date" field in descending order and then by the "amount_net" field in ascending order.'}),"\n",(0,a.jsxs)(i.A,{groupId:"cmd",children:[(0,a.jsx)(o.A,{value:"curl",label:"cURL",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"curl --request GET \\\n     --url 'https://api-v2.fattureincloud.it/c/company_id/received_documents?sort=-date,amount_net&type=expense' \\\n     --header 'Accept: application/json'\n     --header 'Authorization: Bearer YOUR_ACCESS_TOKEN'\n"})})}),(0,a.jsx)(o.A,{value:"http",label:"HTTP",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-http",children:"GET https://api-v2.fattureincloud.it/c/{companyId}/received_documents?sort=-date,amount_net&type=expense\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"The corresponding code examples:"}),"\n",(0,a.jsxs)(i.A,{groupId:"languages",children:[(0,a.jsx)(o.A,{value:"cs",label:"C#",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cs",children:'// this code uses RestSharp Client: https://restsharp.dev\n// you can install it with the following command:\n// dotnet add package RestSharp\n\nusing System;\nusing RestSharp;\n\nnamespace restclient\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            // for this example we define the token as a string, but you should have obtained it in the previous steps\n            // the token is valid for the "received_documents:r" scope needed to perform this operation\n            var token = "YOUR_ACCESS_TOKEN";\n\n            // these parameters are usually retrieved through our APIs or stored in a DB\n            var companyId = 17;\n\n            var query = System.Web.HttpUtility.ParseQueryString(string.Empty);\n            query.Add("sort", "-date,amount_net");\n            query.Add("type", "expense");\n\n            var url = "https://api-v2.fattureincloud.it/c/" + companyId  + "/received_documents" + "?" + query;\n\n            var client = new RestClient(url);\n            var request = new RestRequest(Method.GET);\n\n            request.AddHeader("authorization", "Bearer " + token);\n            IRestResponse response = client.Execute(request);\n            Console.Write(response.Content.ToString());\n        }\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"go",label:"Go",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-go",children:'// NOTE: this is a complete request, but please customize it!!!\n// In the next step we\'ll explain how to perform the request to the API.\n\n// in this example we are using our Go SDK\n// https://github.com/fattureincloud/fattureincloud-go-sdk\npackage main\n\nimport (\n\t"io/ioutil"\n\t"log"\n\t"net/http"\n\t"net/url"\n)\n\nfunc main() {\n\n\tvar bearer = "Bearer " + "a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJtUm80MXlpSVFTbHN0bXRadG5jNEZhYk5QaW41ejJmdiIsImV4cCI6MTY2MjU1NDg5NX0.bvYHc9et0p9lsaTIWGX8vGqE6uHKiwBPyQlXwZqIH3o"\n\n\tvalues := url.Values{}\n\tvalues.Add("sort", "-date,amount_net")\n\tvalues.Add("type", "expense")\n\tquery := values.Encode()\n\n\tcompanyId := "2"\n\turi := "http://api-v2.local.fattureincloud.it/c/" + companyId + "/received_documents?" + query\n\n\treq, _ := http.NewRequest("GET", uri, nil)\n\treq.Header.Add("Authorization", bearer)\n\n\tclient := &http.Client{}\n\tresp, err := client.Do(req)\n\tif err != nil {\n\t\tlog.Println("Error on response.\\n[ERROR] -", err)\n\t}\n\tdefer resp.Body.Close()\n\n\tbody, err := ioutil.ReadAll(resp.Body)\n\tif err != nil {\n\t\tlog.Println("Error while reading the response bytes:", err)\n\t}\n\tlog.Println(string([]byte(body)))\n\n}\n'})})}),(0,a.jsx)(o.A,{value:"java",label:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'import okhttp3.HttpUrl;\nimport okhttp3.OkHttpClient;\nimport okhttp3.Request;\nimport okhttp3.Response;\nimport java.io.IOException;\nimport java.net.URL;\n\npublic class Application {\n    public static void main(String[] args) throws IOException {\n\n        // for this example we define the token as a string, but you should have obtained it in the previous steps\n        // the token is valid for the "received_documents:r" scope needed to perform this operation\n        String token = "YOUR_ACCESS_TOKEN";\n\n        // these parameters are usually retrieved through our APIs or stored in a DB\n        Integer companyId = 16;\n\n        URL url = new HttpUrl.Builder()\n                .scheme("https")\n                .host("api-v2.fattureincloud.it")\n                .addPathSegments("c/" + companyId  + "/received_documents")\n                .addQueryParameter("sort", "-date,net_amount")\n                .addQueryParameter("type", "expense")\n                .build().url();\n\n        OkHttpClient client = new OkHttpClient();\n        Request request = new Request.Builder()\n                .header("Authorization", "Bearer " + token)\n                .url(url)\n                .build();\n        Response response = client.newCall(request).execute();\n        System.out.println(response.body().string());\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'var http = require("https");\n\n// for this example we define the token as a string, but you should have obtained it in the previous steps\n// the token is valid for the "received_documents:r" scope needed to perform this operation\nvar token = "YOUR_ACCESS_TOKEN";\n\n// these parameters are usually retrieved through our APIs or stored in a DB\nvar companyId = 16;\n\nvar params = {\n  sort: "-date,net_amount",\n  type: "expense",\n};\n\nvar query = new URLSearchParams(params).toString(); // url-encoded query string\n\nvar options = {\n  method: "GET",\n  hostname: "api-v2.fattureincloud.it",\n  port: null,\n  path: "/c/" + companyId + "/received_documents" + query,\n  headers: {\n    authorization: "Bearer " + token,\n  },\n};\n\nvar req = http.request(options, function (res) {\n  var chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'})})}),(0,a.jsx)(o.A,{value:"php",label:"PHP",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"// this code uses Guzzle HTTP Client: https://docs.guzzlephp.org/en/stable/\n// and also ext-json\n// you can install them with the following command:\n// composer require guzzlehttp/guzzle ext-json\nrequire 'vendor/autoload.php';\nuse GuzzleHttp\\Client;\nuse GuzzleHttp\\Exception\\ClientException;\nuse GuzzleHttp\\Psr7;\n\n\n// for this example we define the token as a string, but you should have obtained it in the previous steps\n// the token is valid for the \"received_documents:r\" scope needed to perform this operation\n$token = 'YOUR_ACCESS_TOKEN';\n\n// these parameters are usually retrieved through our APIs or stored in a DB\n$companyId = 17;\n\n$client = new Client();\n\n$params = array(\n  'sort' => '-date,amount_net',\n  'type' => 'expense'\n);\n\n$query = http_build_query($params); // url-encoded query string\n\n$url = \"https://api-v2.fattureincloud.it/c/$companyId/received_documents\". '?' . $query;\n\ntry {\n  $response = $client->request('GET', $url, [\n    'headers' => [\n      'Accept' => 'application/json',\n      'Authorization' => 'Bearer ' . $token,\n    ],\n  ]);\n\n    echo $response->getBody();\n} catch (ClientException $e) {\n    echo Psr7\\Message::toString($e->getRequest());\n    echo Psr7\\Message::toString($e->getResponse());\n}\n"})})}),(0,a.jsx)(o.A,{value:"py",label:"Python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:"# pip install requests\nimport requests\n\n# for this example we define the token as a string, but you should have obtained it in the previous steps\n# the token is valid for the \"received_documents:r\" scope needed to perform this operation\ntoken = \"YOUR_ACCESS_TOKEN\"\n\n# these parameters are usually retrieved through our APIs or stored in a DB\ncompany_id = 2\n\nparams = {\n    'sort': '-date,net_amount',\n    'type': 'expense'\n}\nheaders = { 'authorization': \"Bearer \" + token }\nresponse = requests.get(f\"https://api-v2.fattureincloud.it/c/\\{company_id\\}/received_documents\", params=params, headers=headers)\n\nprint(response.json())\n"})})}),(0,a.jsx)(o.A,{value:"rb",label:"Ruby",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rb",children:"require 'uri'\nrequire 'net/http'\n\n# for this example we define the token as a string, but you should have obtained it in the previous steps\n# the token is valid for the \"received_documents:r\" scope needed to perform this operation\ntoken = \"YOUR_ACCESS_TOKEN\"\n\n# these parameters are usually retrieved through our APIs or stored in a DB\ncompany_id = 16\n\nparams = {\n    'sort': '-date,net_amount',\n    'type': 'expense'\n}\n\nuri = URI(\"https://api-v2.fattureincloud.it/c/#\\{company_id\\}/received_documents\")\nuri.query = URI.encode_www_form(params)\nheaders = { authorization: \"Bearer \" + token}\nres = Net::HTTP.get_response(uri, headers)\n\nputs res.body\n"})})}),(0,a.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'// in this example we are using the node-fetch library to make the request\nimport fetch, { Headers } from "node-fetch";\n\n// for this example we define the token as a string, but you should have obtained it in the previous steps\n// the token is valid for the "received_documents:r" scope needed to perform this operation\nvar token = "YOUR_ACCESS_TOKEN";\n\n// these parameters are usually retrieved through our APIs or stored in a DB\nvar companyId = 16;\n\nvar params = {\n  sort: "-date,net_amount",\n  type: "expense",\n};\n\nvar query = new URLSearchParams(params).toString(); // url-encoded query string\n\nvar headers = new Headers({\n  "Content-Type": "application/json",\n  Authorization: "Bearer " + token,\n});\n\nvar options = {\n  method: "GET",\n  headers: headers,\n};\ntry {\n  var res = await fetch(\n    "https://api-v2.fattureincloud.it/c/" +\n      companyId +\n      "/received_documents?" +\n      query,\n    options\n  );\n  var json = await res.json();\n  console.log(json);\n} catch (err) {\n  console.log(err);\n}\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["Here you can find an example response, please note that sorting is strictly related to the ",(0,a.jsx)(t.a,{href:"/develop/it/docs/basics/additional-capabilities/paginate-results",children:"Pagination functionality"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "data": [\n    {\n      "id": 251,\n      "type": "expense",\n      "description": "Catene auto",\n      "amount_net": 68.03,\n      "amount_vat": 14.97,\n      "is_marked": false,\n      "entity": {\n        "id": 109,\n        "name": "Catene e catenacci S.r.l."\n      },\n      "date": "2021-12-23",\n      "next_due_date": "2013-12-23",\n      "amount_gross": 83\n    },\n    {\n      "id": 104328,\n      "type": "expense",\n      "description": "Ricarica Telefonica",\n      "amount_net": 20,\n      "amount_vat": 0,\n      "is_marked": false,\n      "entity": {\n        "id": 35,\n        "name": "Maracaibo Mobile S.p.a."\n      },\n      "date": "2021-08-01",\n      "next_due_date": "1970-01-01",\n      "amount_gross": 20\n    },\n    {\n      "id": 134828,\n      "type": "expense",\n      "description": "Soggiorno di lavoro",\n      "amount_net": 592,\n      "amount_vat": 0,\n      "is_marked": false,\n      "entity": {\n        "id": -1,\n        "name": "Hotel Paradiso"\n      },\n      "date": "2014-10-29",\n      "next_due_date": "2020-10-29",\n      "amount_gross": 592\n    },\n    {\n      "id": 134830,\n      "type": "expense",\n      "description": "SmartPhone Y",\n      "amount_net": 130,\n      "amount_vat": 0,\n      "is_marked": false,\n      "entity": {\n        "id": 14542,\n        "name": "Pear Inc."\n      },\n      "date": "2014-04-16",\n      "next_due_date": "2020-09-01",\n      "amount_gross": 130\n    },\n    {\n      "id": 134832,\n      "type": "expense",\n      "description": "BestBook Pro 2020",\n      "amount_net": 430,\n      "amount_vat": 0,\n      "is_marked": false,\n      "entity": {\n        "id": 14542,\n        "name": "Pear Inc."\n      },\n      "date": "2014-04-16",\n      "next_due_date": "2020-05-29",\n      "amount_gross": 430\n    }\n  ],\n  "current_page": 2,\n  "last_page": 67,\n  "per_page": "5",\n  "from": 6,\n  "to": 10,\n  "total": 335,\n  "path": "https://api-v2.fattureincloud.it/received_documents",\n  "first_page_url": "https://api-v2.fattureincloud.it/received_documents?per_page=5&type=expense&fieldset=basic&page=1",\n  "last_page_url": "https://api-v2.fattureincloud.it/received_documents?per_page=5&type=expense&fieldset=basic&page=67",\n  "next_page_url": "https://api-v2.fattureincloud.it/received_documents?per_page=5&type=expense&fieldset=basic&page=3",\n  "prev_page_url": "https://api-v2.fattureincloud.it/received_documents?per_page=5&type=expense&fieldset=basic&page=1"\n}\n'})}),"\n",(0,a.jsxs)(t.h2,{id:"notebook_with_decorative_cover-sortable-fields",children:["\ud83d\udcd4","\xa0 Sortable fields"]}),"\n",(0,a.jsxs)(t.p,{children:["Here you can find the list of fields that can be used to order the result for each ",(0,a.jsx)(t.em,{children:"List method"}),"; for every field, it is possible to use the ascending or descending order."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Method"}),(0,a.jsx)(t.th,{children:"Fields"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"listClients"}),(0,a.jsx)(t.td,{children:"code, name, type, vat_number, tax_code, address_street, address_postal_code, address_city, address_province, country, email, certified_email, phone, fax, notes, e_invoice, ei_code, created_at, updated_at"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"listSuppliers"}),(0,a.jsx)(t.td,{children:"code, name, type, vat_number, tax_code, address_street, address_postal_code, address_city, address_province, country, email, certified_email, phone, fax, notes, e_invoice, ei_code, created_at, updated_at"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"listProducts"}),(0,a.jsx)(t.td,{children:"name, code, net_price, gross_price, net_cost, description, category, notes, in_stock, created_at, updated_at"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"listIssuedDocuments"}),(0,a.jsx)(t.td,{children:"entity.id, entity.name, entity.vat_number, entity.tax_code, entity.city, entity.province, entity.country, date, number, numeration, amount_net, amount_vat, amount_gross, next_due_date, created_at, updated_at"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"listReceivedDocuments"}),(0,a.jsx)(t.td,{children:"id, category, entity.id, entity.name, date, next_due_date, amount_gross, amount_net, amount_vat, created_at, updated_at"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"listReceipts"}),(0,a.jsx)(t.td,{children:"date, rc_center, created_at, updated_at"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"listF24"}),(0,a.jsx)(t.td,{children:"due_date, status, amount, description"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"listArchiveDocuments"}),(0,a.jsx)(t.td,{children:"date, category, description"})]})]})]}),"\n",(0,a.jsxs)(t.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional Resources"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.freecodecamp.org/news/descending-order-vs-ascending-order-what-does-it-mean/",children:"Descending Order VS Ascending Order \u2013 What Does it Mean?"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://www.moesif.com/blog/technical/api-design/REST-API-Design-Filtering-Sorting-and-Pagination/#",children:"REST API Design: Filtering, Sorting, and Pagination"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),a=n(34164),s=n(23104),i=n(56347),o=n(205),l=n(57485),d=n(31682),c=n(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:n,groupId:a}),[v,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),b=(()=>{const e=d??v;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var g=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(d(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function _(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=v(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,f.jsx)(y,{...t,...e}),(0,f.jsx)(_,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,f.jsx)(x,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);