"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[96240],{71768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"stepbystep/manual-authentication","title":"Authentication Mode","description":"Retrieve a token manually","source":"@site/docs/stepbystep/manual-authentication.mdx","sourceDirName":"stepbystep","slug":"/stepbystep/manual-authentication","permalink":"/docs/1.0.1/stepbystep/manual-authentication","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"authentication","permalink":"/docs/1.0.1/tags/authentication"},{"inline":true,"label":"authorization","permalink":"/docs/1.0.1/tags/authorization"},{"inline":true,"label":"app","permalink":"/docs/1.0.1/tags/app"},{"inline":true,"label":"manual authentication","permalink":"/docs/1.0.1/tags/manual-authentication"},{"inline":true,"label":"scopes","permalink":"/docs/1.0.1/tags/scopes"},{"inline":true,"label":"code example","permalink":"/docs/1.0.1/tags/code-example"},{"inline":true,"label":"c#","permalink":"/docs/1.0.1/tags/c"},{"inline":true,"label":"java","permalink":"/docs/1.0.1/tags/java"},{"inline":true,"label":"javascript","permalink":"/docs/1.0.1/tags/javascript"},{"inline":true,"label":"php","permalink":"/docs/1.0.1/tags/php"},{"inline":true,"label":"python","permalink":"/docs/1.0.1/tags/python"},{"inline":true,"label":"ruby","permalink":"/docs/1.0.1/tags/ruby"},{"inline":true,"label":"typescript","permalink":"/docs/1.0.1/tags/typescript"}],"version":"current","lastUpdatedAt":1740755324000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Authentication Mode","slug":"manual-authentication","description":"Retrieve a token manually","tags":["authentication","authorization","app","manual authentication","scopes","code example","c#","java","javascript","php","python","ruby","typescript"]},"sidebar":"tutorialSidebar","previous":{"title":"Company methods","permalink":"/docs/1.0.1/stepbystep/company-methods"},"next":{"title":"Quickstarts Overview","permalink":"/docs/1.0.1/stepbystep/quickstarts/"}}');var s=n(74848),a=n(28453),r=n(65537),o=n(79329);const l={sidebar_position:3,title:"Authentication Mode",slug:"manual-authentication",description:"Retrieve a token manually",tags:["authentication","authorization","app","manual authentication","scopes","code example","c#","java","javascript","php","python","ruby","typescript"]},c=void 0,u={},p=[{value:"\u270b\xa0 Token generation",id:"raised_hand-token-generation",level:2},{value:"\ud83d\udcbc\xa0 Find your Company ID",id:"briefcase-find-your-company-id",level:2},{value:"\u2705\xa0 Perform an API request",id:"white_check_mark-perform-an-api-request",level:2},{value:"\ud83d\udcdd\xa0 Change token permissions",id:"memo-change-token-permissions",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Is this the right authentication method for you?",type:"note",children:(0,s.jsxs)(t.p,{children:["Before starting to read this page, we invite you to check if this is the best authentication method for you. Please check the flowchart you can find on the ",(0,s.jsx)(t.a,{href:"/basics/authentication.mdx",children:"Authentication"})," page before proceeding."]})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Manual Authentication"}),' is an authentication method that lets the user retrieve the token "manually", e.g. using the TSE in Cloud WebApp. It requires active user collaboration to be applied: specifically, the user needs to generate correctly the Access Token selecting the correct scopes, and then insert it into the application.']}),"\n",(0,s.jsx)(t.admonition,{title:"Are you sure?",type:"danger",children:(0,s.jsx)(t.p,{children:"This authentication method is suggested only for very specific use cases. Please think carefully if you want to use it."})}),"\n",(0,s.jsxs)(t.p,{children:["This implies some ",(0,s.jsx)(t.strong,{children:"drawbacks"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The User Experience is worse than the other authorization methods."}),"\n",(0,s.jsx)(t.li,{children:"The Error Ratio is higher because the user needs to select the scopes needed by the application; in contrast, in the other flows is the application that's indicating the scopes required to work properly."}),"\n",(0,s.jsx)(t.li,{children:"The generated token will never expire (but it can be manually revoked by the user)."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The use cases suggested for this method are the following:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:"Temporary"})," authentication to start testing our APIs fast without implementing more complex flows. For example, manual authentication can be useful while testing with ",(0,s.jsx)(t.a,{href:"/quickstarts/postman-collection.md",children:"Postman"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Simple scripts that will be used by a single TSE in Cloud User (usually the programmer himself) to manage his account (for example for one-time exports or imports of resources)."}),"\n",(0,s.jsxs)(t.li,{children:["When the ",(0,s.jsx)(t.a,{href:"/basics/authentication.mdx",children:"other flows"})," are not applicable."]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"raised_hand-token-generation",children:["\u270b","\xa0 Token generation"]}),"\n",(0,s.jsxs)(t.p,{children:["Technically speaking, to implement this method you need to do nothing to create a new Access Token: this responsibility lies entirely on the User's shoulders ","\ud83d\ude2b",". Even so, if your app needs to manage different users you will need to:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Provide your Client ID to the User (you can find it on your Application page, in the Sviluppatore section).\n",(0,s.jsx)(t.img,{alt:"Client ID",src:n(28672).A+""})]}),"\n",(0,s.jsx)(t.li,{children:"Explain how to generate the Access Token correctly, also indicating the scopes set needed by your app."}),"\n",(0,s.jsx)(t.li,{children:"Explain how to insert the Access Token in your app (so you'll need to implement some mechanism to collect and eventually store a string)."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The steps that the user must perform are the following:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Access the TSE in Cloud web app."}),"\n",(0,s.jsxs)(t.li,{children:["Access the ",(0,s.jsx)(t.a,{href:"https://secure.fattureincloud.it/settings-apps",children:"Settings -> Connected Applications"})," (Impostazioni -> Applicazioni collegate) page."]}),"\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.em,{children:"Connect a new application"})," (Collega una nuova applicazione) button.\n",(0,s.jsx)(t.img,{alt:"Connect a new application",src:n(85270).A+""})]}),"\n",(0,s.jsx)(t.li,{children:"Insert the Client ID of your application."}),"\n",(0,s.jsxs)(t.li,{children:["Select the companies that the application will be able to access from the list.\n",(0,s.jsx)(t.img,{alt:"Chose the company",src:n(58858).A+""})]}),"\n",(0,s.jsxs)(t.li,{children:["Select the permissions (e.g. the scope) that will be granted to the application from the list.\n",(0,s.jsx)(t.img,{alt:"Select the permissions",src:n(4154).A+""})]}),"\n",(0,s.jsx)(t.li,{children:"Copy the Access Token and insert it into the application."}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{title:"Forbidden!",type:"warning",children:(0,s.jsx)(t.p,{children:'Since the User will have the possibility to select the permissions he wants to grant to the application, it is likely that some "Forbidden" error will happen. Also, if a new version of your app needs additional scopes, all your users will need to update the permissions on the Connected Applications page. You should be aware of that and your code should be able to manage this situation correctly.'})}),"\n",(0,s.jsxs)(t.h2,{id:"briefcase-find-your-company-id",children:["\ud83d\udcbc","\xa0 Find your Company ID"]}),"\n",(0,s.jsxs)(t.p,{children:["Even if this step is not strictly part of the Authentication process, it is required to be able to use the Company-scoped Methods.\nOnce you obtain the Access Token, you can use the ",(0,s.jsx)(t.a,{href:"/api-reference#get-/user/companies",children:"List User Companies"})," method to retrieve the ID of the related Company; please check the ",(0,s.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for further info."]}),"\n",(0,s.jsxs)(t.h2,{id:"white_check_mark-perform-an-api-request",children:["\u2705","\xa0 Perform an API request"]}),"\n",(0,s.jsxs)(t.p,{children:["A valid ",(0,s.jsx)(t.strong,{children:"Access Token"})," can be used to authorize requests included in the scopes authorized by the user; to obtain a valid response it is necessary to include the Access Token in your request as an HTTP header."]}),"\n",(0,s.jsxs)(t.p,{children:["In the following example, we'll simulate a ",(0,s.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/entities/suppliers/-supplier_id-",children:"Get Supplier"})," call. We choose this method because it is relatively easy to understand and it requires the ",(0,s.jsx)(t.em,{children:"entity.suppliers:r"})," scope to be authorized correctly."]}),"\n",(0,s.jsx)(t.p,{children:"Please, notice that for the purposes of this example we will assume that we already know the parameters required by the request and that we have previously collected a valid Access Token."}),"\n",(0,s.jsxs)(r.A,{groupId:"cmd",children:[(0,s.jsx)(o.A,{value:"curl",label:"cURL",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"curl --request GET \\\n     --url https://api-v2.fattureincloud.it/c/17/entities/suppliers/16 \\\n     --header 'Accept: application/json'\n     --header 'Authorization: Bearer a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJZMElqc1pVWEpUZkxCSkZ3aG5iZmpSYTRJRktYTDk3ayIsImV4cCI6MTU4OTY0MjAzMX0.qn869ICUSS3_hx84ZTToMsB5slWQZjGZXGklSIiBkB4'\n"})})}),(0,s.jsx)(o.A,{value:"http",label:"HTTP",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-http",children:"GET /c/17/entities/suppliers/16 HTTP/1.1\nHost: api-v2.fattureincloud.it\nAccept: application/json\nAuthorization: Bearer a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJZMElqc1pVWEpUZkxCSkZ3aG5iZmpSYTRJRktYTDk3ayIsImV4cCI6MTU4OTY0MjAzMX0.qn869ICUSS3_hx84ZTToMsB5slWQZjGZXGklSIiBkB4\n"})})})]}),"\n",(0,s.jsx)(t.p,{children:"Below you can find some vanilla code examples implementing the same command."}),"\n",(0,s.jsxs)(r.A,{groupId:"languages",children:[(0,s.jsx)(o.A,{value:"cs",label:"C#",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-cs",children:'// this code uses RestSharp Client: https://restsharp.dev\n// you can install it with the following command:\n// dotnet add package RestSharp\n\nusing System;\nusing RestSharp;\n\nnamespace restclient\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            // for this example we define the token as string, but you should have obtained it in the previous steps\n            var token = "a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJZMElqc1pVWEpUZkxCSkZ3aG5iZmpSYTRJRktYTDk3ayIsImV4cCI6MTU4OTY0MjAzMX0.qn869ICUSS3_hx84ZTToMsB5slWQZjGZXGklSIiBkB4";\n\n            // these parameters are usually retrieved through our APIs or stored in a DB\n            var companyId = 16;\n            var supplierId = 17;\n\n            var url = "https://api-v2.fattureincloud.it/c/" + companyId  + "/entities/suppliers/" + supplierId,;\n\n            var client = new RestClient(url);\n            var request = new RestRequest(Method.GET);\n\n            request.AddHeader("authorization", "Bearer " + token);\n            IRestResponse response = client.Execute(request);\n            Console.Write(response.Content.ToString());\n        }\n    }\n}\n'})})}),(0,s.jsx)(o.A,{value:"go",label:"Go",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'package main\n\nimport (\n\t"io/ioutil"\n\t"log"\n\t"net/http"\n)\n\nfunc main() {\n\n\t// for this example we define the token as string, but you should have obtained it in the previous steps\n\ttoken := "Bearer " + "a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJZMElqc1pVWEpUZkxCSkZ3aG5iZmpSYTRJRktYTDk3ayIsImV4cCI6MTU4OTY0MjAzMX0.qn869ICUSS3_hx84ZTToMsB5slWQZjGZXGklSIiBkB4"\n\n\t// these parameters are usually retrieved through our APIs or stored in a DB\n\tcompanyId := "16"\n\tsupplierId := "17"\n\turi := "http://api-v2.local.fattureincloud.it/c/" + companyId + "/entities/suppliers/" + supplierId\n\n\treq, _ := http.NewRequest("GET", uri, nil)\n\treq.Header.Add("Authorization", token)\n\n\tclient := &http.Client{}\n\tresp, err := client.Do(req)\n\tif err != nil {\n\t\tlog.Println("Error on response.\\n[ERROR] -", err)\n\t}\n\tdefer resp.Body.Close()\n\n\tbody, err := ioutil.ReadAll(resp.Body)\n\tif err != nil {\n\t\tlog.Println("Error while reading the response bytes:", err)\n\t}\n\tlog.Println(string([]byte(body)))\n\n}\n'})})}),(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-java",children:'import okhttp3.HttpUrl;\nimport okhttp3.OkHttpClient;\nimport okhttp3.Request;\nimport okhttp3.Response;\nimport java.io.IOException;\nimport java.net.URL;\n\npublic class Application {\n    public static void main(String[] args) throws IOException {\n\n        // for this example we define the token as string, but you should have obtained it in the previous steps\n        String token = "a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJZMElqc1pVWEpUZkxCSkZ3aG5iZmpSYTRJRktYTDk3ayIsImV4cCI6MTU4OTY0MjAzMX0.qn869ICUSS3_hx84ZTToMsB5slWQZjGZXGklSIiBkB4";\n\n        // these parameters are usually retrieved through our APIs or stored in a DB\n        Integer companyId = 16;\n        Integer supplierId = 17;\n\n        URL url = new HttpUrl.Builder()\n                .scheme("https")\n                .host("api-v2.fattureincloud.it")\n                .addPathSegments("c/" + companyId  + "/entities/suppliers/" + supplierId)\n                .build().url();\n\n        OkHttpClient client = new OkHttpClient();\n        Request request = new Request.Builder()\n                .header("Authorization", "Bearer " + token)\n                .url(url)\n                .build();\n        Response response = client.newCall(request).execute();\n        System.out.println(response.body().string());\n    }\n}\n'})})}),(0,s.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'var http = require("https");\n\n// for this example we define the token as string, but you should have obtained it in the previous steps\nvar token =\n  "a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJZMElqc1pVWEpUZkxCSkZ3aG5iZmpSYTRJRktYTDk3ayIsImV4cCI6MTU4OTY0MjAzMX0.qn869ICUSS3_hx84ZTToMsB5slWQZjGZXGklSIiBkB4";\n\n// these parameters are usually retrieved through our APIs or stored in a DB\nvar companyId = 16;\nvar supplierId = 17;\n\nvar options = {\n  method: "GET",\n  hostname: "api-v2.fattureincloud.it",\n  port: null,\n  path: "/c/" + companyId + "/entities/suppliers/" + supplierId,\n  headers: {\n    authorization: "Bearer " + token,\n  },\n};\n\nvar req = http.request(options, function (res) {\n  var chunks = [];\n\n  res.on("data", function (chunk) {\n    chunks.push(chunk);\n  });\n\n  res.on("end", function () {\n    var body = Buffer.concat(chunks);\n    console.log(body.toString());\n  });\n});\n\nreq.end();\n'})})}),(0,s.jsx)(o.A,{value:"php",label:"PHP",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"// this code uses Guzzle HTTP Client: https://docs.guzzlephp.org/en/stable/\n// and also ext-json\n// you can install them with the following command:\n// composer require guzzlehttp/guzzle ext-json\nuse GuzzleHttp\\Client;\nuse GuzzleHttp\\Exception\\ClientException;\nuse GuzzleHttp\\Psr7;\n\n\n// for this example we define the token as string, but you should have obtained it in the previous steps\n$token = 'a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJZMElqc1pVWEpUZkxCSkZ3aG5iZmpSYTRJRktYTDk3ayIsImV4cCI6MTU4OTY0MjAzMX0.qn869ICUSS3_hx84ZTToMsB5slWQZjGZXGklSIiBkB4';\n\n// these parameters are usually retrieved through our APIs or stored in a DB\n$companyId = 17;\n$supplierId = 16;\n\n$client = new Client();\n\n$url = \"https://api-v2.fattureincloud.it/c/$companyId/entities/suppliers/$supplierId\";\n\ntry {\n  $response = $client->request('GET', $url, [\n    'headers' => [\n      'Accept' => 'application/json',\n      'Authorization' => 'Bearer ' . $token,\n    ],\n  ]);\n\n    return json_decode((string) $response->getBody());\n} catch (ClientException $e) {\n    echo Psr7\\Message::toString($e->getRequest());\n    echo Psr7\\Message::toString($e->getResponse());\n}\n"})})}),(0,s.jsx)(o.A,{value:"py",label:"Python",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-py",children:'import requests\n\n# for this example we define the token as string, but you should have obtained it in the previous steps\ntoken = "a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJYOGxDaFR4dHVsQkx0cXVVSjNCQlZEME1KOVY0NTl3QiIsImV4cCI6MTYzOTcyODAzM30.A-uMzLDpaEzGRqzUodJfdJPKo8SWMCytWUElQdOEP0c"\n\n# these parameters are usually retrieved through our APIs or stored in a DB\ncompany_id = 16\nsupplier_id = 17\n\nheaders = { \'authorization\': "Bearer " + token}\nresponse = requests.get(f"https://api-v2.fattureincloud.it/c/\\{company_id\\}/entities/suppliers/{supplier_id}", headers=headers)\n\nprint(response.json())\n'})})}),(0,s.jsx)(o.A,{value:"rb",label:"Ruby",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rb",children:'require \'uri\'\nrequire \'net/http\'\n\n# for this example we define the token as string, but you should have obtained it in the previous steps\ntoken = "a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJYOGxDaFR4dHVsQkx0cXVVSjNCQlZEME1KOVY0NTl3QiIsImV4cCI6MTYzOTcyODAzM30.A-uMzLDpaEzGRqzUodJfdJPKo8SWMCytWUElQdOEP0c"\n\n# these parameters are usually retrieved through our APIs or stored in a DB\ncompany_id = 16\nsupplier_id = 17\n\nuri = URI("https://api-v2.fattureincloud.it/c/#\\{company_id\\}/entities/suppliers/#{supplier_id}")\nheaders = { authorization: "Bearer " + token}\nres = Net::HTTP.get_response(uri, headers)\n\nputs res.body\n'})})}),(0,s.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:'// in this example we are using the node-fetch library to make the request\nimport fetch, { Headers } from "node-fetch";\n\n// for this example we define the token as a string, but you should have obtained it in the previous steps\nvar token =\n  "a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJYOGxDaFR4dHVsQkx0cXVVSjNCQlZEME1KOVY0NTl3QiIsImV4cCI6MTYzOTcyODAzM30.A-uMzLDpaEzGRqzUodJfdJPKo8SWMCytWUElQdOEP0c";\n\n// these parameters are usually retrieved through our APIs or stored in a DB\nvar companyId = 16;\nvar supplierId = 17;\n\nvar headers = new Headers({\n  "Content-Type": "application/json",\n  Authorization: "Bearer " + token,\n});\n\nvar options = {\n  method: "GET",\n  headers: headers,\n};\n\ntry {\n  var res = await fetch(\n    "https://api-v2.fattureincloud.it/c/" +\n      companyId +\n      "/entities/suppliers" +\n      supplierId,\n    options\n  );\n  var json = await res.json();\n  console.log(json);\n} catch (err) {\n  console.log(err);\n}\n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["If the Access Token is valid and provided correctly in the header, the response will be a 200 OK.\nTo check the possible error responses, please check the ",(0,s.jsx)(t.a,{href:"/basics/errors.md",children:"dedicated page"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Easy switch!",type:"info",children:(0,s.jsx)(t.p,{children:'Please, note that this is exactly the same step applied for the OAuth 2.0 flows. If you want to switch from this method to another, you can reuse this code without having to modify it. You "just" need to add the code to retrieve the access token.'})}),"\n",(0,s.jsxs)(t.h2,{id:"memo-change-token-permissions",children:["\ud83d\udcdd","\xa0 Change token permissions"]}),"\n",(0,s.jsx)(t.p,{children:"If you need to change the set of scopes currently associated with your token, you must ask your app users to perform the following simple steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Access the TSE in Cloud web app."}),"\n",(0,s.jsxs)(t.li,{children:["Access the ",(0,s.jsx)(t.a,{href:"https://secure.fattureincloud.it/settings-apps",children:"Settings -> Connected Applications"})," (Impostazioni -> Applicazioni collegate) page."]}),"\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.em,{children:"Manage"})," (Gestisci) button next to your App."]}),"\n",(0,s.jsxs)(t.li,{children:["Click the ",(0,s.jsx)(t.em,{children:"Edit"})," (Modifica) button next to the scopes section."]}),"\n",(0,s.jsx)(t.li,{children:"Select the new permissions (e.g. the scopes) that must be granted to the application from the list."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"At this point, in a short time, the list of scopes associated with your token will be updated; the token itself isn't regenerated, so it isn't necessary to require the user to reload the token to the application."}),"\n",(0,s.jsxs)(t.p,{children:["Please, note that this isn't a step that you can perform automatically. ",(0,s.jsx)(t.strong,{children:"Your user must perform it manually"}),", selecting the required scopes, so the operation is prone to errors in the scopes selection: the user could select the wrong scopes and also remove some previously assigned ones. This means that you must be ready to manage permissions errors, not only related to the new scopes but also the old ones."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,r),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>j});var i=n(96540),s=n(34164),a=n(65627),r=n(56347),o=n(50372),l=n(30604),c=n(11861),u=n(78749);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,p]=m({queryString:n,groupId:s}),[y,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),f=(()=>{const e=c??y;return d({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,a]),tabValues:a}}var g=n(9136);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==i&&(c(t),r(s))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>{l.push(e)},onKeyDown:p,onClick:u,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function k(e){const t=y(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,b.jsx)(k,{...e,children:p(e.children)},String(t))}},58858:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/company-list-2b007ef1fe5497bd502196469329c82c.png"},85270:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/connect-app-687befffb9cd759c711d4c2c46b68cf5.png"},28672:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/manual-client-id-d3db47d4fdc010abe1244843ed95b2e1.png"},4154:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/permissions-9b38788417393dedab3800b5ec2bf445.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);