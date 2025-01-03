"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[31120],{62277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"stepbystep/quickstarts/csharp-sdk-quickstart","title":"C# SDK Quickstart","description":"C# Quickstart for the TSE in Cloud APIs","source":"@site/i18n/it/docusaurus-plugin-content-docs/current/stepbystep/quickstarts/csharp-sdk-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/csharp-sdk-quickstart","permalink":"/develop/it/docs/1.0.1/stepbystep/quickstarts/csharp-sdk-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stepbystep/quickstarts/csharp-sdk-quickstart.mdx","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/it/docs/1.0.1/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/it/docs/1.0.1/tags/code-example"},{"inline":true,"label":"c#","permalink":"/develop/it/docs/1.0.1/tags/c"},{"inline":true,"label":"sdk","permalink":"/develop/it/docs/1.0.1/tags/sdk"}],"version":"current","lastUpdatedAt":1734978152000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"C# SDK Quickstart","slug":"csharp-sdk-quickstart","description":"C# Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","c#","sdk"]},"sidebar":"tutorialSidebar","previous":{"title":"Postman Collection","permalink":"/develop/it/docs/1.0.1/stepbystep/quickstarts/postman-collection"},"next":{"title":"Go SDK Quickstart","permalink":"/develop/it/docs/1.0.1/stepbystep/quickstarts/go-sdk-quickstart"}}');var a=n(74848),i=n(28453),r=n(11470),o=n(19365);const l={sidebar_position:2,title:"C# SDK Quickstart",slug:"csharp-sdk-quickstart",description:"C# Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","c#","sdk"]},c=void 0,u={},d=[{value:"0\ufe0f\u20e3\xa0 Prerequisites",id:"zero-prerequisites",level:2},{value:"1\ufe0f\u20e3\xa0 Step One: Create an Asp.Net web app",id:"one-step-one-create-an-aspnet-web-app",level:2},{value:"2\ufe0f\u20e3\xa0 Step Two: Set up the OAuth access token retrieval",id:"two-step-two-set-up-the-oauth-access-token-retrieval",level:2},{value:"4\ufe0f\u20e3\xa0 Step Four: Setup the sample",id:"four-step-four-setup-the-sample",level:2},{value:"5\ufe0f\u20e3\xa0 Step Five: Test the sample",id:"five-step-five-test-the-sample",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Following the steps described on this page you'll create a simple Asp.Net project"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,a.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/sdk/csharp",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.h2,{id:"zero-prerequisites",children:["0\ufe0f\u20e3","\xa0 Prerequisites"]}),"\n",(0,a.jsx)(t.p,{children:"In this guide, we assume that these prerequisites are met:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:".NET SDK installed"}),"\n",(0,a.jsxs)(t.li,{children:["A ",(0,a.jsx)(t.a,{href:"/basics/create-an-app.mdx",children:"private app"})," using the ",(0,a.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})]}),"\n",(0,a.jsx)(t.li,{children:"A TSE in Cloud account."}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"one-step-one-create-an-aspnet-web-app",children:["1\ufe0f\u20e3","\xa0 Step One: Create an Asp.Net web app"]}),"\n",(0,a.jsx)(t.p,{children:"The first step is to create an Asp.Net web application:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"dotnet new webapp -o Quickstart --no-https\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now open the directory created by the above command, in this case, **Quickstart/ ** and proceed to install the ",(0,a.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-csharp-sdk",children:"TSE in Cloud SDK"}),", published to ",(0,a.jsx)(t.a,{href:"https://www.nuget.org/packages/It.FattureInCloud.Sdk/",children:"Nuget"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"To install it using the .NET CLI:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"dotnet add package It.FattureInCloud.Sdk\n"})}),"\n",(0,a.jsxs)(t.h2,{id:"two-step-two-set-up-the-oauth-access-token-retrieval",children:["2\ufe0f\u20e3","\xa0 Step Two: Set up the OAuth access token retrieval"]}),"\n",(0,a.jsxs)(t.p,{children:["Edit the files ",(0,a.jsx)(t.strong,{children:"Pages/Index.cshtml.cs"})," and ",(0,a.jsx)(t.strong,{children:"Pages/Index.cs.cshtml"}),", delete the existing content and paste into them the following snippets:"]}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(o.A,{value:"Index.cshtml.cs",label:"Index.cshtml.cs",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cs",metastring:'title="Index.cshtml.cs"',children:'using System;\nusing System.IO;\nusing Microsoft.AspNetCore.Mvc.RazorPages;\nusing Microsoft.Extensions.Logging;\nusing It.FattureInCloud.Sdk.OauthHelper;\nusing System.Collections.Generic;\nusing Newtonsoft.Json;\n\nnamespace Quickstart.Pages\n{\n    public class IndexModel : PageModel\n    {\n        private readonly ILogger<IndexModel> _logger;\n\n        public IndexModel(ILogger<IndexModel> logger)\n        {\n            _logger = logger;\n        }\n\n        public void OnGet()\n        {\n            string code = HttpContext.Request.Query["code"];\n            var oauth = new OAuth2AuthorizationCodeManager("CLIENT_ID", "CLIENT_SECRET", "http://localhost:5000/oauth");\n\n            if (code is null)\n            {\n                var scopes = new List<Scope> { Scope.ENTITY_SUPPLIERS_READ };\n                var url = oauth.GetAuthorizationUrl(scopes, "EXAMPLE_STATE");\n                Response.Redirect(url);\n            }\n            else\n            {\n                var token = oauth.FetchToken(code);\n                using StreamWriter file = new("token.json");\n\n                file.Write(JsonConvert.SerializeObject(token)); //saving the oAuth access token in the file token.json in the bin folder\n                file.Close();\n\n                ViewData["Content"] = "Token saved succesfully in token.json in your bin folder";\n            }\n        }\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"Index.cshtml",label:"Index.cshtml",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-aspnet",metastring:'title="Index.cshtml"',children:'@page\n@model IndexModel\n@{\n    ViewData["Title"] = "OAuth QuickStart";\n}\n\n<div>\n    @ViewData["Content"]\n</div>\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["To make this code work properly the only thing you need to set your client id, client secret and eventually the redirect uri in the ",(0,a.jsx)(t.strong,{children:"Index.cshtml.cs"})," file at line 23."]}),"\n",(0,a.jsx)(t.admonition,{title:"Check the Redirect URL",type:"warning",children:(0,a.jsxs)(t.p,{children:["Make sure your FattureInCloud app redirect URL points at the just edited file (e.g. ",(0,a.jsx)(t.a,{href:"http://localhost:5000/Index",children:"http://localhost:5000/Index"}),")."]})}),"\n",(0,a.jsx)(t.admonition,{title:"Store your Tokens safely!",type:"danger",children:(0,a.jsx)(t.p,{children:"In this QuickStart the access token and refresh token are stored in a file. This is only for educational purposes, the OAuth access token and refresh token are sensitive data and should be saved securely on your database.\nAlso, never share your Client Secret with third-party actors, or publish it to your frontend!"})}),"\n",(0,a.jsxs)(t.h2,{id:"four-step-four-setup-the-sample",children:["4\ufe0f\u20e3","\xa0 Step Four: Setup the sample"]}),"\n",(0,a.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,a.jsxs)(t.p,{children:["In this example, we'll show how to retrieve your Company ID using the C# SDK. If you plan to manage only one company, you can insert it directly into your code as a variable.\nCheck the ",(0,a.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,a.jsxs)(t.p,{children:["Create the files ",(0,a.jsx)(t.strong,{children:"Pages/Quickstart.cs.cshtml"})," and ",(0,a.jsx)(t.strong,{children:"Pages/Quickstart.cshtml"})," and copy the following code:"]}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(o.A,{value:"Quickstart.cshtml.cs",label:"Quickstart.cshtml.cs",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cs",metastring:'title="Quickstart.cshtml.cs"',children:'using System;\nusing System.IO;\n\nusing Microsoft.AspNetCore.Mvc.RazorPages;\nusing Microsoft.Extensions.Logging;\nusing It.FattureInCloud.Sdk.Api;\nusing It.FattureInCloud.Sdk.Model;\nusing It.FattureInCloud.Sdk.Client;\nusing Newtonsoft.Json;\n\nnamespace OauthQuickstart.Pages\n{\n    public class QuickstartModel : PageModel\n    {\n        private readonly ILogger<QuickstartModel> _logger;\n\n        public QuickstartModel(ILogger<QuickstartModel> logger)\n        {\n            _logger = logger;\n        }\n\n        public void OnGet()\n        {\n            using StreamReader file = new("token.json");\n\n            //retrieve the oAuth access token in the file token.json in the bin folder\n            var line = file.ReadLine();\n            file.Close();\n            dynamic json = JsonConvert.DeserializeObject<dynamic>(line);\n            string accessToken = json.access_token;\n\n            Configuration config = new Configuration();\n            config.AccessToken = accessToken.Replace(@"\\", "" );\n\n            // Modify the selected supplier\n            ModifySupplierRequest modifySupplierRequest = new ModifySupplierRequest();\n            modifySupplierRequest.Data = new Supplier();\n            modifySupplierRequest.Data.Name = "nuovo nome";\n            modifySupplierRequest.Data.Phone = "03561234312";\n\n            var result = modifyFirstSupplier(config, modifySupplierRequest);\n\n            ViewData["Content"] = result;\n        }\n\n        public static string modifyFirstSupplier(Configuration config, ModifySupplierRequest modifySupplierRequest)\n        {\n            try\n            {\n                var userApiInstance = new UserApi(config);\n                var suppliersApiInstance = new SuppliersApi(config);\n\n                // Retrieve User Companies\n                var userCompaniesResponse = userApiInstance.ListUserCompanies();\n                var firstCompanyId = userCompaniesResponse.Data.Companies[0].Id;\n\n                // Retrieve the list of the Suppliers for the selected company\n                var fields = "";  // string | List of comma-separated fields. (optional)\n                var fieldset = "detailed";  // string | Name of the fieldset. (optional)\n                var sort = "-id";  // string | List of comma-separated fields for result sorting (minus for desc sorting). (optional)\n                var page = 2;  // int? | The page to retrieve. (optional)  (default to 1)\n                var perPage = 8;  // int? | The size of the page. (optional)  (default to 5)\n                var companySuppliers = suppliersApiInstance.ListSuppliers(firstCompanyId, null, fieldset, sort, page, perPage);\n                var firstSupplierId = companySuppliers.Data[0].Id;\n\n                ModifySupplierResponse modifySupplierResponse = suppliersApiInstance.ModifySupplier(firstCompanyId, firstSupplierId, modifySupplierRequest);\n\n                return("Supplier modificato correttamente\\n" + modifySupplierResponse.Data.ToJson());\n            }\n            catch (Exception e)\n            {\n                Console.Write(e);\n                return e.ToString();\n            }\n        }\n    }\n}\n'})})}),(0,a.jsx)(o.A,{value:"Quickstart.cshtml",label:"Quickstart.cshtml",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-aspnet",metastring:'title="Quickstart.cshtml"',children:'@page\n@model QuickstartModel\n@{ ViewData["Title"] = "OAuth QuickStart"; }\n\n<div>\n    @ViewData["Content"]\n</div>\n'})})})]}),"\n",(0,a.jsxs)(t.p,{children:["It's also needed to edit the ",(0,a.jsx)(t.strong,{children:"Pages/Shared/_Layout.cshtml"}),", delete the already existing content and paste the following code:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",metastring:'title="_Layout.cshtml"',children:'<!DOCTYPE html>\n<html lang="it">\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>OauthQuickstart</title>\n  </head>\n  <body>\n    <div class="container">\n      <main role="main" class="pb-3">@RenderBody()</main>\n    </div>\n  </body>\n</html>\n'})}),"\n",(0,a.jsxs)(t.h2,{id:"five-step-five-test-the-sample",children:["5\ufe0f\u20e3","\xa0 Step Five: Test the sample"]}),"\n",(0,a.jsx)(t.p,{children:"Now you can start a web server running the following command in your shell:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-console",children:"dotnet watch run\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Now visit ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"http://localhost:5000/",children:"http://localhost:5000/"})})," (or whatever your URL is), you will be redirected to the TSE in Cloud login page where you will be asked to grant some permissions, according to what scopes you specified previously.\nFinally, you will see the success message and the access token will be stored in the token.json file."]}),"\n",(0,a.jsxs)(t.p,{children:["You can now visit ",(0,a.jsx)(t.em,{children:(0,a.jsx)(t.a,{href:"http://localhost:5000/Quickstart",children:"http://localhost:5000/Quickstart"})})," (or whatever your URL is) to test the application."]}),"\n",(0,a.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,a.jsx)(t.p,{children:"In this example, we used a limited set of the available API methods to show how to use our SDK."}),"\n",(0,a.jsx)(t.p,{children:"If you want to access the full documentation of the available methods and models, you can check the following resources:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-csharp-sdk",children:"C# SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://www.nuget.org/packages/It.FattureInCloud.Sdk/",children:"NuGet page"}),": The main package page"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(34164);const a={tabItem:"tabItem_Ymn6"};var i=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(96540),a=n(34164),i=n(23104),r=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,d]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(n);return[a,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=c??f;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function k(e){let{className:t,block:n,selectedValue:s,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==s&&(c(t),r(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(k,{...t,...e}),(0,x.jsx)(b,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);