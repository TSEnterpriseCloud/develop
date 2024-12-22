"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[38398],{26116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"stepbystep/quickstarts/java-sdk-quickstart","title":"Java SDK Quickstart","description":"Java Quickstart for the TSE in Cloud APIs","source":"@site/docs/stepbystep/quickstarts/java-sdk-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/java-sdk-quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/java-sdk-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stepbystep/quickstarts/java-sdk-quickstart.mdx","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/1.0.1/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/docs/1.0.1/tags/code-example"},{"inline":true,"label":"java","permalink":"/develop/docs/1.0.1/tags/java"},{"inline":true,"label":"sdk","permalink":"/develop/docs/1.0.1/tags/sdk"}],"version":"current","lastUpdatedAt":1734692556000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"Java SDK Quickstart","slug":"java-sdk-quickstart","description":"Java Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","java","sdk"]},"sidebar":"tutorialSidebar","previous":{"title":"Go SDK Quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/go-sdk-quickstart"},"next":{"title":"JavaScript SDK Quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/js-sdk-quickstart"}}');var a=n(74848),s=n(28453),o=n(11470),i=n(19365);const l={sidebar_position:4,title:"Java SDK Quickstart",slug:"java-sdk-quickstart",description:"Java Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","java","sdk"]},u=void 0,c={},d=[{value:"0\ufe0f\u20e3\xa0  Prerequisites",id:"zero--prerequisites",level:2},{value:"1\ufe0f\u20e3\xa0 Step One: Add the dependencies",id:"one-step-one-add-the-dependencies",level:2},{value:"2\ufe0f\u20e3\xa0 Step Two: Set up the OAuth access token retrieval",id:"two-step-two-set-up-the-oauth-access-token-retrieval",level:2},{value:"3\ufe0f\u20e3\xa0 Step Three: Set up the sample",id:"three-step-three-set-up-the-sample",level:2},{value:"4\ufe0f\u20e3\xa0 Step Four: Run the sample",id:"four-step-four-run-the-sample",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Following the steps described on this page, you'll create a simple Java application that interacts with the TSE in Cloud API."}),"\n",(0,a.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,a.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/sdk/java",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.h2,{id:"zero--prerequisites",children:["0\ufe0f\u20e3","\xa0  Prerequisites"]}),"\n",(0,a.jsx)(t.p,{children:"In this guide, we assume that these prerequisites are met:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Your JDK is configured correctly"}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.a,{href:"/basics/create-an-app.mdx",children:"private app"})," using the ",(0,a.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})]}),"\n",(0,a.jsx)(t.li,{children:"A TSE in Cloud account."}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"one-step-one-add-the-dependencies",children:["1\ufe0f\u20e3","\xa0 Step One: Add the dependencies"]}),"\n",(0,a.jsxs)(t.p,{children:["In this Quickstart we are going to need some dependencies, OkHttpClient to make the API calls for the OAuth access token retrieval, JSON-java to parse the JSON, and our Java SDK, you can simply add them to your ",(0,a.jsx)(t.em,{children:"pom.xml"})," or ",(0,a.jsx)(t.em,{children:"build.gradle"})," file, as shown below:"]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(i.A,{value:"maven",label:"Maven",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",metastring:'title="pom.xml"',children:"<dependency>\n  <groupId>it.fattureincloud</groupId>\n  <artifactId>fattureincloud-java-sdk</artifactId>\n  <version>VERSION</version>\n</dependency>\n<dependency>\n  <groupId>com.squareup.okhttp3</groupId>\n  <artifactId>okhttp</artifactId>\n  <version>4.9.3</version>\n</dependency>\n<dependency>\n    <groupId>com.google.code.gson</groupId>\n    <artifactId>gson</artifactId>\n    <version>2.9.0</version>\n</dependency>\n<dependency>\n    <groupId>io.vavr</groupId>\n    <artifactId>vavr</artifactId>\n    <version>0.10.4</version>\n</dependency>\n"})})}),(0,a.jsx)(i.A,{value:"gradle",label:"Gradle",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-groovy",metastring:'title="build.gradle"',children:"implementation 'it.fattureincloud:fattureincloud-java-sdk:VERSION'\nimplementation 'com.squareup.okhttp3:okhttp:4.9.3'\nimplementation 'com.google.code.gson:gson:2.9.0'\nimplementation \"io.vavr:vavr:0.10.4\"\n"})})})]}),"\n",(0,a.jsxs)(t.p,{children:["You can check the last version of our SDK on ",(0,a.jsx)(t.a,{href:"https://search.maven.org/artifact/it.fattureincloud/fattureincloud-java-sdk",children:"Maven Central"}),"."]}),"\n",(0,a.jsxs)(t.h2,{id:"two-step-two-set-up-the-oauth-access-token-retrieval",children:["2\ufe0f\u20e3","\xa0 Step Two: Set up the OAuth access token retrieval"]}),"\n",(0,a.jsxs)(t.p,{children:["First of all create a java project, create the file ",(0,a.jsx)(t.strong,{children:"Application.java"})," in your ",(0,a.jsx)(t.strong,{children:"src/main/java/"})," directory, and copy in the following code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:'title="Application.java"',children:'import com.google.gson.Gson;\nimport com.sun.net.httpserver.HttpServer;\nimport it.fattureincloud.sdk.auth.OAuth2AuthorizationCodeManager;\nimport it.fattureincloud.sdk.auth.OAuth2AuthorizationCodeResponse;\nimport it.fattureincloud.sdk.auth.Scope;\n\nimport java.io.*;\nimport java.net.InetSocketAddress;\nimport java.util.Arrays;\nimport java.util.List;\n\nclass Application {\n\n    public static void main(String[] args) throws IOException {\n        int serverPort = 8000;\n        HttpServer server = HttpServer.create(new InetSocketAddress(serverPort), 0);\n        server.createContext("/oauth", (exchange -> {\n            OAuth2AuthorizationCodeManager oauth = new OAuth2AuthorizationCodeManager("CLIENT_ID", "CLIENT_SECRET", "http://localhost:8000/oauth");\n            List<Scope> scopes = Arrays.asList(Scope.ENTITY_SUPPLIERS_READ);\n            String redirectUrl = oauth.getAuthorizationUrl(scopes, "EXAMPLE_STATE");\n            String query = exchange.getRequestURI().getQuery();\n            if(query == null) query = "";\n            if(query.contains("code")){\n                int start = query.indexOf("code=") + 5;\n                int finish = query.indexOf("&");\n                String code = query.substring(start, finish);\n                Gson gson = new Gson();\n                OAuth2AuthorizationCodeResponse tokenObj = oauth.fetchToken(code).get();\n                String token = gson.toJson(tokenObj);\n\n                saveToken(token);\n                String respText = "token salvato correttamente";\n                exchange.sendResponseHeaders(200, respText.getBytes().length);\n                OutputStream output = exchange.getResponseBody();\n                output.write(respText.getBytes());\n                output.flush();\n                exchange.close();\n            }else{\n                exchange.getResponseHeaders().set("Location", redirectUrl);\n                exchange.sendResponseHeaders(302, 0);\n                exchange.close();\n            }\n\n        }));\n        server.createContext("/quickstart", (exchange -> {\n            String token = retrieveToken();\n\n            //the following method is defined in the next step\n            String respText = Quickstart.getFirstCompanySuppliers(token);\n\n            exchange.sendResponseHeaders(200, respText.getBytes().length);\n            OutputStream output = exchange.getResponseBody();\n            output.write(respText.getBytes());\n            output.flush();\n            exchange.close();\n        }));\n        server.setExecutor(null);\n        server.start();\n    }\n\n    public static void saveToken(String token) throws IOException {\n        BufferedWriter writer = new BufferedWriter(new FileWriter("token.json"));\n        writer.write(token); //saving the oAuth access token in the token.json file\n\n        writer.close();\n    }\n\n    public static String retrieveToken() throws IOException {\n        BufferedReader reader = new BufferedReader(new FileReader("token.json"));\n        String json = reader.readLine();\n        Gson gson = new Gson();\n        OAuth2AuthorizationCodeResponse obj = gson.fromJson(json, OAuth2AuthorizationCodeResponse.class);\n        String token = obj.getAccessToken();\n        return token;\n    }\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"To make this code work properly the only thing you need to set your client id, client secret and eventually the redirect uri at line 18."}),"\n",(0,a.jsx)(t.admonition,{title:"Store the Token safely!",type:"danger",children:(0,a.jsx)(t.p,{children:"In this QuickStart the access token and refresh token are stored in a file. This is only for educational purposes, the OAuth access token and refresh token are sensitive data and should be saved securely on your database.\nAlso, never share your Client Secret with third-party actors, or publish it to your frontend!"})}),"\n",(0,a.jsxs)(t.h2,{id:"three-step-three-set-up-the-sample",children:["3\ufe0f\u20e3","\xa0 Step Three: Set up the sample"]}),"\n",(0,a.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,a.jsxs)(t.p,{children:["In this example, we'll show how to retrieve your Company ID using the Java SDK. If you plan to manage only one company, you can insert it directly into your code as a variable.\nCheck the ",(0,a.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,a.jsxs)(t.p,{children:["Create a file called ",(0,a.jsx)(t.strong,{children:"Quickstart.java"})," in your working directory and copy in the following code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",metastring:'title="Quickstart.java"',children:'import it.fattureincloud.sdk.ApiClient;\nimport it.fattureincloud.sdk.ApiException;\nimport it.fattureincloud.sdk.Configuration;\nimport it.fattureincloud.sdk.api.SuppliersApi;\nimport it.fattureincloud.sdk.api.UserApi;\nimport it.fattureincloud.sdk.auth.OAuth;\nimport it.fattureincloud.sdk.model.ListSuppliersResponse;\nimport it.fattureincloud.sdk.model.ListUserCompaniesResponse;\n\npublic class Quickstart {\n    public static String getFirstCompanySuppliers(String token) {\n        ApiClient defaultClient = Configuration.getDefaultApiClient();\n        defaultClient.setBasePath("https://api-v2.fattureincloud.it");\n\n        // Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow\n        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");\n        OAuth2AuthenticationCodeFlow.setAccessToken(token);\n\n        UserApi userApiInstance = new UserApi(defaultClient);\n        SuppliersApi suppliersApiInstance = new SuppliersApi(defaultClient);\n\n        try {\n            // Retrieve the first company id\n            ListUserCompaniesResponse userCompanies = userApiInstance.listUserCompanies();\n            int firstCompanyId = userCompanies.getData().getCompanies().get(0).getId();\n\n            // Retrieve the list of first 10 Suppliers for the selected company\n            Integer companyId = 12345; // Integer | The ID of the company.\n            Integer page = 1; // Integer | The page to retrieve.\n            Integer perPage = 10; // Integer | The size of the page.\n\n            ListSuppliersResponse result = suppliersApiInstance.listSuppliers(companyId, null, null, null, page, perPage, null);\n            return result.getData().toString();\n\n        } catch (ApiException e) {\n            System.err.println("Status code: " + e.getCode());\n            System.err.println("Reason: " + e.getResponseBody());\n            System.err.println("Response headers: " + e.getResponseHeaders());\n            e.printStackTrace();\n            return e.getResponseBody();\n        }\n    }\n}\n'})}),"\n",(0,a.jsxs)(t.h2,{id:"four-step-four-run-the-sample",children:["4\ufe0f\u20e3","\xa0 Step Four: Run the sample"]}),"\n",(0,a.jsxs)(t.p,{children:["Now run your project and visit ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"http://localhost:8000/oauth",children:"http://localhost:8000/oauth"})})," (or whatever your URL is), you will be redirected to the TSE in Cloud login page where you will be asked to grant some permissions, according to what scopes you specified previously.\nFinally, you will see the success message, the access token will be stored in the token.json file ready to be used."]}),"\n",(0,a.jsxs)(t.p,{children:["You can now visit ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"http://localhost:8000/quickstart",children:"http://localhost:8000/quickstart"})})," (or whatever your URL is) to test the application."]}),"\n",(0,a.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,a.jsx)(t.p,{children:"In this example, we used a limited set of the available API methods to show how to use our SDK."}),"\n",(0,a.jsx)(t.p,{children:"If you want to access the full documentation of the available methods and models, you can check the following resources:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-java-sdk",children:"Java SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://javadoc.io/doc/it.fattureincloud/fattureincloud-java-sdk",children:"SDK Javadoc"}),": The standard Java documentation"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://search.maven.org/artifact/it.fattureincloud/fattureincloud-java-sdk",children:"Maven Central"}),": The main package page"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var r=n(34164);const a={tabItem:"tabItem_Ymn6"};var s=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(96540),a=n(34164),s=n(23104),o=n(56347),i=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(74848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,k.jsx)(x,{...t,...e}),(0,k.jsx)(y,{...t,...e})]})}function b(e){const t=(0,g.A)();return(0,k.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);