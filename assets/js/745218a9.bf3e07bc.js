"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[61570],{51377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"stepbystep/quickstarts/go-sdk-quickstart","title":"Go SDK Quickstart","description":"Go Quickstart for the TSE in Cloud APIs","source":"@site/docs/stepbystep/quickstarts/go-sdk-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/go-sdk-quickstart","permalink":"/docs/1.0.1/stepbystep/quickstarts/go-sdk-quickstart","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"quickstarts","permalink":"/docs/1.0.1/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/docs/1.0.1/tags/code-example"},{"inline":true,"label":"go","permalink":"/docs/1.0.1/tags/go"},{"inline":true,"label":"sdk","permalink":"/docs/1.0.1/tags/sdk"}],"version":"current","lastUpdatedAt":1740732256000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Go SDK Quickstart","slug":"go-sdk-quickstart","description":"Go Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","go","sdk"]},"sidebar":"tutorialSidebar","previous":{"title":"C# SDK Quickstart","permalink":"/docs/1.0.1/stepbystep/quickstarts/csharp-sdk-quickstart"},"next":{"title":"Java SDK Quickstart","permalink":"/docs/1.0.1/stepbystep/quickstarts/java-sdk-quickstart"}}');var s=n(74848),o=n(28453),a=n(65537),i=n(79329);const l={sidebar_position:3,title:"Go SDK Quickstart",slug:"go-sdk-quickstart",description:"Go Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","go","sdk"]},u=void 0,c={},d=[{value:"0\ufe0f\u20e3\xa0 Prerequisites",id:"zero-prerequisites",level:2},{value:"1\ufe0f\u20e3\xa0 Step One: Install the TSE in Cloud SDK",id:"one-step-one-install-the-tse-in-cloud-sdk",level:2},{value:"2\ufe0f\u20e3\xa0 Step Two: Set up the OAuth access token retrieval",id:"two-step-two-set-up-the-oauth-access-token-retrieval",level:2},{value:"4\ufe0f\u20e3\xa0 Step Four: Set up the sample",id:"four-step-four-set-up-the-sample",level:2},{value:"5\ufe0f\u20e3\xa0 Step Five: Run the sample",id:"five-step-five-run-the-sample",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Following the steps described on this page, you'll create a simple Go application that interacts with the TSE in Cloud API."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/sdk/go",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.h2,{id:"zero-prerequisites",children:["0\ufe0f\u20e3","\xa0 Prerequisites"]}),"\n",(0,s.jsx)(t.p,{children:"In this guide, we assume that these prerequisites are met:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Go installed"}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"/basics/create-an-app.mdx",children:"private app"})," using the ",(0,s.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})]}),"\n",(0,s.jsx)(t.li,{children:"A TSE in Cloud account."}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"one-step-one-install-the-tse-in-cloud-sdk",children:["1\ufe0f\u20e3","\xa0 Step One: Install the TSE in Cloud SDK"]}),"\n",(0,s.jsxs)(t.p,{children:["In this quickstart, we'll use the ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk",children:"TSE in Cloud SDK"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"To install it:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"go get github.com/fattureincloud/fattureincloud-go-sdk\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"two-step-two-set-up-the-oauth-access-token-retrieval",children:["2\ufe0f\u20e3","\xa0 Step Two: Set up the OAuth access token retrieval"]}),"\n",(0,s.jsxs)(t.p,{children:["Create the file ",(0,s.jsx)(t.strong,{children:"oauth.go"})," and copy in the following code:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="oauth.go"',children:'package main\n\nimport (\n\t"encoding/json"\n\t"fmt"\n\t"io/ioutil"\n\t"log"\n\t"net/http"\n\n\toauth "github.com/fattureincloud/fattureincloud-go-sdk/v2/oauth2"\n)\n\nfunc getOAuthAccessToken(w http.ResponseWriter, r *http.Request) {\n\tquery := r.URL.Query()\n\tauth := oauth.NewOAuth2AuthorizationCodeManager("CLIENT_ID", "CLIENT_SECRET", "http://localhost:8000/oauth")\n\n\tif query.Get("code") == "" {\n\t\thttp.Redirect(w, r, auth.GetAuthorizationUrl([]oauth.Scope{oauth.Scopes.ENTITY_SUPPLIERS_READ}, "EXAMPLE_STATE"), http.StatusFound)\n\t} else {\n\t\tcode := query.Get("code")\n\n\t\ttoken, err := auth.FetchToken(code)\n\t\tif err != nil {\n\t\t\tlog.Println("Error on response.\\n[ERROR] -", err)\n\t\t\thttp.Error(w, "500 internal server error.", http.StatusInternalServerError)\n\t\t\treturn\n\t\t}\n\t\tjsonObj, _ := json.Marshal(token)\n\t\t// saving the oAuth access token in the token.json file\n\t\terr = ioutil.WriteFile("token.json", jsonObj, 0644)\n\n\t\tif err != nil {\n\t\t\tlog.Println("Error on writing the file.\\n[ERROR] -", err)\n\t\t\thttp.Error(w, "500 internal server error.", http.StatusInternalServerError)\n\t\t\treturn\n\t\t}\n\n\t\tfmt.Fprintf(w, "Token succesfully retrived and stored in token.json")\n\n\t}\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"To make this code work properly the only thing you need to set your client id, client secret and eventually the redirect uri at line 15."}),"\n",(0,s.jsx)(t.admonition,{title:"Store the Token safely!",type:"danger",children:(0,s.jsx)(t.p,{children:"In this QuickStart the access token and refresh token are stored in a file. This is only for educational purposes, the OAuth access token and refresh token are sensitive data and should be saved securely on your database.\nAlso, never share your Client Secret with third-party actors, or publish it to your frontend!"})}),"\n",(0,s.jsxs)(t.h2,{id:"four-step-four-set-up-the-sample",children:["4\ufe0f\u20e3","\xa0 Step Four: Set up the sample"]}),"\n",(0,s.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,s.jsxs)(t.p,{children:["In this example, we'll show how to retrieve your Company ID using the Go SDK. If you plan to manage only one company, you can insert it directly into your code as a variable.\nCheck the ",(0,s.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,s.jsxs)(t.p,{children:["Create the files ",(0,s.jsx)(t.strong,{children:"main.go"})," and ",(0,s.jsx)(t.strong,{children:"quickstart.go"})," in your working directory and copy in the following code:"]}),"\n",(0,s.jsxs)(a.A,{children:[(0,s.jsx)(i.A,{value:"main",label:"main.go",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="main.go"',children:'package main\n\nimport (\n\t"fmt"\n\t"log"\n\t"net/http"\n)\n\nfunc main() {\n\thttp.HandleFunc("/oauth", getOAuthAccessToken)\n\thttp.HandleFunc("/quickstart", getFirstCompanySuppliers)\n\n\tfmt.Printf("Starting server at port 8000\\n")\n\tif err := http.ListenAndServe(":8000", nil); err != nil {\n\t\tlog.Fatal(err)\n\t}\n}\n'})})}),(0,s.jsx)(i.A,{value:"quickstart",label:"quickstart.go",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",metastring:'title="quickstart.go"',children:'package main\n\nimport (\n\t"context"\n\t"encoding/json"\n\t"fmt"\n\t"net/http"\n\t"os"\n\n\tfattureincloudapi "github.com/fattureincloud/fattureincloud-go-sdk/v2/api"\n\toauth "github.com/fattureincloud/fattureincloud-go-sdk/v2/oauth2"\n)\n\nfunc getFirstCompanySuppliers(w http.ResponseWriter, r *http.Request) {\n\trawData, err := os.ReadFile("token.json")\n\tif err != nil {\n\t\tfmt.Println(err)\n\t}\n\n\ttokenObj := oauth.OAuth2AuthorizationCodeTokenResponse{}\n\tjson.Unmarshal(rawData, &tokenObj)\n\taccessToken := tokenObj.AccessToken\n\n\t// Configure OAuth2 access token for authorization:\n\tauth := context.WithValue(context.Background(), fattureincloudapi.ContextAccessToken, accessToken)\n\tconfiguration := fattureincloudapi.NewConfiguration()\n\tapiClient := fattureincloudapi.NewAPIClient(configuration)\n\t// Retrieve the first company id\n\tuserCompaniesResponse, _, err := apiClient.UserAPI.ListUserCompanies(auth).Execute()\n\tif err != nil {\n\t\tfmt.Fprintf(os.Stderr, "Error when calling `UserAPI.ListUserCompanies``: %v\\n", err)\n\t\tfmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n\t\thttp.Error(w, "500 internal server error.", http.StatusInternalServerError)\n\t\treturn\n\t}\n\tfirstCompanyId := userCompaniesResponse.GetData().Companies[0].GetId()\n\t// Retrieve the list of the Suppliers\n\tcompanySuppliers, _, err := apiClient.SuppliersAPI.ListSuppliers(auth, firstCompanyId).Execute()\n\tif err != nil {\n\t\tfmt.Fprintf(os.Stderr, "Error when calling `UserAPI.ListSuppliers``: %v\\n", err)\n\t\tfmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n\t\thttp.Error(w, "500 internal server error.", http.StatusInternalServerError)\n\t\treturn\n\t}\n\tjson.NewEncoder(w).Encode(companySuppliers)\n\n}\n'})})})]}),"\n",(0,s.jsx)(t.admonition,{title:"Check the Redirect URL",type:"warning",children:(0,s.jsxs)(t.p,{children:["Make sure your FattureInCloud app redirect URL points at the just edited file (e.g. ",(0,s.jsx)(t.a,{href:"http://localhost:8000/oauth",children:"http://localhost:8000/oauth"}),")."]})}),"\n",(0,s.jsxs)(t.h2,{id:"five-step-five-run-the-sample",children:["5\ufe0f\u20e3","\xa0 Step Five: Run the sample"]}),"\n",(0,s.jsx)(t.p,{children:"From the command line, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"go run .\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now visit ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"http://localhost:8000/oauth",children:"http://localhost:8000/oauth"})})," (or whatever your URL is), you will be redirected to the TSE in Cloud login page where you will be asked to grant some permissions, according to what scopes you specified previously.\nFinally, you will see the success message and the access token will be stored in the token.json file."]}),"\n",(0,s.jsxs)(t.p,{children:["You can now visit ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"http://localhost:8000/quickstart",children:"http://localhost:8000/quickstart"})})," (or whatever your URL is) to test the application."]}),"\n",(0,s.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,s.jsx)(t.p,{children:"In this example, we used a limited set of the available API methods to show how to use our SDK."}),"\n",(0,s.jsx)(t.p,{children:"If you want to access the full documentation of the available methods and models, you can check the following resources:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-go-sdk",children:"Go SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://pkg.go.dev/github.com/fattureincloud/fattureincloud-go-sdk",children:"Go pkg page"}),": The main package page on GoPkg"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(34164),o=n(65627),a=n(56347),i=n(50372),l=n(30604),u=n(11861),c=n(78749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=f({queryString:n,groupId:s}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),k=(()=>{const e=u??m;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{k&&l(k)}),[k]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(9136);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(u(t),a(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",k.tabList),children:[(0,v.jsx)(b,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function y(e){const t=(0,g.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);