"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[25701],{94025:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"stepbystep/quickstarts/vanilla-code","title":"Vanilla Code Examples","description":"How to generate Vanilla Code examples for the TSE in Cloud APIs","source":"@site/docs/stepbystep/quickstarts/vanilla-code.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/vanilla-code","permalink":"/docs/1.0.1/stepbystep/quickstarts/vanilla-code","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"quickstarts","permalink":"/docs/1.0.1/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/docs/1.0.1/tags/code-example"},{"inline":true,"label":"vanilla","permalink":"/docs/1.0.1/tags/vanilla"},{"inline":true,"label":"snippet","permalink":"/docs/1.0.1/tags/snippet"},{"inline":true,"label":"example","permalink":"/docs/1.0.1/tags/example"},{"inline":true,"label":"generation","permalink":"/docs/1.0.1/tags/generation"},{"inline":true,"label":"openapi","permalink":"/docs/1.0.1/tags/openapi"},{"inline":true,"label":"postman","permalink":"/docs/1.0.1/tags/postman"},{"inline":true,"label":"rest","permalink":"/docs/1.0.1/tags/rest"},{"inline":true,"label":"http","permalink":"/docs/1.0.1/tags/http"}],"version":"current","lastUpdatedAt":1740656035000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Vanilla Code Examples","slug":"vanilla-code","description":"How to generate Vanilla Code examples for the TSE in Cloud APIs","tags":["quickstarts","code example","vanilla","snippet","example","generation","openapi","postman","rest","http"]},"sidebar":"tutorialSidebar","previous":{"title":"TypeScript SDK Quickstart","permalink":"/docs/1.0.1/stepbystep/quickstarts/ts-sdk-quickstart"},"next":{"title":"Windows Form Quickstart","permalink":"/docs/1.0.1/stepbystep/quickstarts/windows-form-quickstart"}}');var n=s(74848),o=s(28453);const r={sidebar_position:10,title:"Vanilla Code Examples",slug:"vanilla-code",description:"How to generate Vanilla Code examples for the TSE in Cloud APIs",tags:["quickstarts","code example","vanilla","snippet","example","generation","openapi","postman","rest","http"]},a=void 0,l={},d=[{value:"\ud83c\udfce\xa0 Wanna be faster?",id:"racing_car-wanna-be-faster",level:2},{value:"\ud83d\udd27\xa0 Can I modify your libraries?",id:"wrench-can-i-modify-your-libraries",level:2},{value:"\ud83e\udd26\u200d\u2642\ufe0f\xa0 Can you do it for us?",id:"man_facepalming-can-you-do-it-for-us",level:3},{value:"\ud83d\udd29\xa0 The implementation details",id:"nut_and_bolt-the-implementation-details",level:2},{value:"\ud83d\udc87\u200d\u2642\ufe0f\xa0 HTTP Method",id:"haircut_man-http-method",level:3},{value:"\ud83c\udff9\xa0 Request Target (the URL)",id:"bow_and_arrow-request-target-the-url",level:3},{value:"\ud83d\udd11\xa0 HTTP Request Headers",id:"key-http-request-headers",level:3},{value:"\ud83d\udc84\xa0 Query string parameters",id:"lipstick-query-string-parameters",level:3},{value:"\ud83d\udccb\xa0 Request Body",id:"clipboard-request-body",level:3},{value:"\u2705\xa0 Status Code",id:"white_check_mark-status-code",level:3},{value:"\ud83d\udcdc\xa0 Response Body",id:"scroll-response-body",level:3},{value:"\ud83c\udff7\xa0 HTTP Response Headers",id:"label-http-response-headers",level:3},{value:"\ud83d\ude4f\xa0 Please, give me some examples!",id:"pray-please-give-me-some-examples",level:2}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(t.a,{href:"/quickstarts/index.mdx",children:"this section"})," of the Developer Hub, we provide a set of useful guides to use our ",(0,n.jsx)(t.a,{href:"/docs/1.0.1/sdks/",children:"SDKs"})," to interact with the ",(0,n.jsx)(t.em,{children:"TSE in Cloud APIs"}),". We strongly suggest using our SDKs whenever possible, but some use cases make it impossible to use them."]}),"\n",(0,n.jsx)(t.p,{children:"For example, you could be in one of the following situations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We don't (currently) provide an SDK for your programming language"}),"\n",(0,n.jsx)(t.li,{children:"The SDK for your language doesn't support your version (for example, you're using an obsolete version of PHP)"}),"\n",(0,n.jsx)(t.li,{children:"You're having some version conflict while installing our SDK"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In these cases, it could be impossible to use one of our SDKs, or the effort required to use them could be unacceptable. On the other hand, some users could still decide to avoid our SDKs for various reasons, even if it would be technically possible to install them."}),"\n",(0,n.jsxs)(t.p,{children:["Whatever the case, it is still possible to use our APIs by using ",(0,n.jsx)(t.strong,{children:"Vanilla Code"}),", by implementing our SDKs' behavior on your own."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Follow this path at your own risk!",type:"danger",children:[(0,n.jsx)(t.p,{children:"We strongly suggest using our SDKs because:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The SDKs abstract your code, making it possible to ignore the implementation details"}),"\n",(0,n.jsx)(t.li,{children:"Our guides are mostly based on our SDKs, so it will be faster to develop a functioning integration"}),"\n",(0,n.jsx)(t.li,{children:"Our SDKs provide models containing all the fields that represent the API resources"}),"\n",(0,n.jsx)(t.li,{children:"Our SDKs code is tested and used by many other users"}),"\n",(0,n.jsxs)(t.li,{children:["We offer ",(0,n.jsx)(t.a,{href:"/support.md",children:"support for our SDKs"}),", so if a bug is detected we can fix it with the next release"]}),"\n",(0,n.jsx)(t.li,{children:"We won't debug your custom code (even if you send us the code snippet)"}),"\n"]})]}),"\n",(0,n.jsx)(t.p,{children:"Since it is impossible to create vanilla code guides for every existing programming language, and since each language has a possibly huge set of similar libraries that could be used to implement the integration, we decided to not provide vanilla code examples.\nInstead, we decided to provide you with enough information to help you implement the code on your own."}),"\n",(0,n.jsxs)(t.h2,{id:"racing_car-wanna-be-faster",children:["\ud83c\udfce","\xa0 Wanna be faster?"]}),"\n",(0,n.jsxs)(t.p,{children:["If your environment is incompatible with our SDKs, but you would still like to use something similar, you could try to ",(0,n.jsx)(t.strong,{children:"generate your own library"})," thanks to our ",(0,n.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI specification"}),".\nIt is the same procedure we use to create our SDKs, so you could give it a try too."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, you could try to check if the ",(0,n.jsx)(t.a,{href:"https://openapi-generator.tech/",children:"OpenAPI Generator"})," provides a generator compatible with your environment: the generator offers more languages than the ones we currently support, and some generator options could make the generated code compatible with your environment (targeting a language version or selecting a different library).\nAlso, it is possible to find alternative code generators, or you can decide to use a ",(0,n.jsx)(t.em,{children:"self-generating library"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you don't want to include our SDKs because you just need a subset of our methods, you could also download and modify our ",(0,n.jsx)(t.em,{children:"OpenAPI file"}),", removing all the parts that are unuseful for your use case; if you use this file as input for the generator, you'll obtain a smaller library than the official one."]}),"\n",(0,n.jsxs)(t.p,{children:["For additional information, you can check the resources linked to the ",(0,n.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI specification"})," page."]}),"\n",(0,n.jsxs)(t.h2,{id:"wrench-can-i-modify-your-libraries",children:["\ud83d\udd27","\xa0 Can I modify your libraries?"]}),"\n",(0,n.jsxs)(t.p,{children:["Sure! Our ",(0,n.jsx)(t.a,{href:"/docs/1.0.1/sdks/",children:"SDKs"})," and our ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/prestashop",children:"Prestashop module"})," are released under ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/MIT_License",children:"MIT License"}),", so feel free to modify them to meet your requirements. The code is freely available on ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud",children:"GitHub"}),", so feel free to customize it accordingly to your needs."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Do you want to help other customers?",type:"info",children:[(0,n.jsxs)(t.p,{children:["If you think that the modifications you developed could be useful for the rest of the Community, then we invite you to open a ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/creating-an-issue-or-pull-request#creating-a-pull-request",children:"Pull Request"})," on our GitHub repositories!"]}),(0,n.jsxs)(t.p,{children:["Please, notice that to open a PR the first step is to ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",children:"create a public Fork"})," and publish your modifications to a branch in your repo; we won't accept or review code passed through any other mode. See also: ",(0,n.jsx)(t.a,{href:"https://docs.github.com/en/get-started/quickstart/contributing-to-projects",children:"Contributing to projects"})]})]}),"\n",(0,n.jsxs)(t.admonition,{title:"Our SDKs are generated!",type:"warning",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Our SDKs are in large part generated!!!"})," This means that your modifications could be overwritten while generating a new version, so we will most probably reject your PRs on the generated code. The OAuth and Filter helpers are not generated, so we could accept your PRs involving that part."]}),(0,n.jsxs)(t.p,{children:["If you want to propose an improvement to the generated code, you could try to modify the OpenAPI specification or the templates we use to generate the code. Please, notice that not all templates are added to ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/openapi-fattureincloud",children:"our repository"}),": we include only the ones that we must customize, the other templates are the standard ones provided by the generator.\nAs an alternative, you can try to open an issue on the SDK repo and wait for our support."]}),(0,n.jsx)(t.p,{children:"If you decide to do it on your own, you can check:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI specification"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://openapi-generator.tech/docs/customization",children:"OpenAPI Generator - Customization"})}),"\n"]})]}),"\n",(0,n.jsxs)(t.admonition,{title:"Can you support me with my modified library?",type:"danger",children:[(0,n.jsxs)(t.p,{children:["If you're having a problem with a customized library, we can still try to support you to solve the issue, but first, you should publish a PR containing your modifications. ",(0,n.jsx)(t.strong,{children:"We won't review code provided in any other way."})]}),(0,n.jsx)(t.p,{children:"If you publish a PR it will be easier for us to check the modifications you applied to our code, and we could additionally decide to adopt your changes into our library if the new features could be useful to the rest of the community."})]}),"\n",(0,n.jsxs)(t.h3,{id:"man_facepalming-can-you-do-it-for-us",children:["\ud83e\udd26\u200d\u2642\ufe0f","\xa0 Can you do it for us?"]}),"\n",(0,n.jsxs)(t.p,{children:["We usually don't accept custom modification requests, but if you have an idea for a new functionality you can try to open a new discussion in our ",(0,n.jsx)(t.a,{href:"https://github.com/fattureincloud/api",children:"Community"}),": if we think that the request could be useful also for other developers we might decide to develop it for you."]}),"\n",(0,n.jsx)(t.p,{children:"If, instead, your request is useful only for your use case, or if you don't want to wait for our intervention, you can proceed and develop the modifies on your own."}),"\n",(0,n.jsxs)(t.h2,{id:"nut_and_bolt-the-implementation-details",children:["\ud83d\udd29","\xa0 The implementation details"]}),"\n",(0,n.jsx)(t.p,{children:"If you prefer to implement the integration on your own (e.g. without a generator), you will still need a few libraries to make your life easier. In some cases, your language could provide them directly without external imports, while in other cases it is mandatory to select and install additional libraries."}),"\n",(0,n.jsx)(t.p,{children:"This is an indicative set of libraries that you could need:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"An HTTP Client"}),"\n",(0,n.jsx)(t.li,{children:"A JSON marshaller/unmarshaller"}),"\n",(0,n.jsx)(t.li,{children:"An OAuth2 client (optional)"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["This set could change based on the libraries that you select: for example, the HTTP Client could require a JSON string as request, so you'll need to perform the JSON conversion on your own; in some other cases the JSON conversion is managed directly by the client, so you'll be able to avoid to install the JSON library.\nAlso, the OAuth2 client will be unuseful if you decide to use the ",(0,n.jsx)(t.a,{href:"/authentication/manual-authentication.mdx",children:"Manual Authentication"}),", or you could decide to implement the ",(0,n.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth2 process"})," on your own using the HTTP client."]}),"\n",(0,n.jsxs)(t.p,{children:["The HTTP Client must be used to implement the REST Requests. The request will take advantage of ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages",children:"the structure of HTTP Requests"}),", in particular of the following parts:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"HTTP Method"}),"\n",(0,n.jsx)(t.li,{children:"Request Target (the URL)"}),"\n",(0,n.jsx)(t.li,{children:"HTTP Request Headers"}),"\n",(0,n.jsx)(t.li,{children:"Querystring parameters"}),"\n",(0,n.jsx)(t.li,{children:"Request Body"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The HTTP Response will contain the result of the request. The ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#http_responses",children:"HTTP Response"})," is structured as follows:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Status Code"}),"\n",(0,n.jsx)(t.li,{children:"Response Body"}),"\n",(0,n.jsx)(t.li,{children:"HTTP Response Headers"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Below you can find the description of the various parts. You can check the actual values that must be used by checking the ",(0,n.jsx)(t.a,{href:"/api-reference",children:"API Reference"})," or by using the ",(0,n.jsx)(t.a,{href:"/quickstarts/postman-collection.md",children:"Postman Collection"}),"."]}),"\n",(0,n.jsxs)(t.h3,{id:"haircut_man-http-method",children:["\ud83d\udc87\u200d\u2642\ufe0f","\xa0 HTTP Method"]}),"\n",(0,n.jsxs)(t.p,{children:["Each HTTP request must contain an ",(0,n.jsx)(t.strong,{children:"HTTP Method"}),", that defines the kind of action that you want to perform.\nIn the following table you can find the relationship between HTTP methods and actions:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"HTTP Method"}),(0,n.jsx)(t.th,{children:"Performed Action"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GET"}),(0,n.jsx)(t.td,{children:"Read opetations (Get or List actions)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"POST"}),(0,n.jsx)(t.td,{children:"Create operations"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"PUT"}),(0,n.jsx)(t.td,{children:"Modify operations"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"DELETE"}),(0,n.jsx)(t.td,{children:"Delete operations"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"The Get or List operations are distinguished by the structure of the URL (see below)."}),"\n",(0,n.jsxs)(t.h3,{id:"bow_and_arrow-request-target-the-url",children:["\ud83c\udff9","\xa0 Request Target (the URL)"]}),"\n",(0,n.jsx)(t.p,{children:"The request target is an URL that identifies the resource on which the action should be performed. It could contain some Path Parameters, usually one of the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company ID"})}),"\n",(0,n.jsx)(t.li,{children:"The ID of the resource to manipulate"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can usually distinguish between List and Get methods because the Get URLs additionally include the ID of the resource to retrieve."}),"\n",(0,n.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,n.jsxs)(t.p,{children:["The Company ID is mandatory if you want to use Company-scoped Methods. If you plan to manage only one company, you can insert it directly into your code as a string; if, instead, you will manage multiple companies (and you don't know them at compile time), you must retrieve their IDs programmatically.\nCheck the ",(0,n.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,n.jsxs)(t.h3,{id:"key-http-request-headers",children:["\ud83d\udd11","\xa0 HTTP Request Headers"]}),"\n",(0,n.jsx)(t.p,{children:"The Headers usually contain metadata that apply to the request."}),"\n",(0,n.jsxs)(t.p,{children:["In particular, our APIs use the ",(0,n.jsx)(t.strong,{children:"Authorization Header"})," to include the Access Token. If this header is missing or it isn't in the correct format, the request will be immediately discarded.\nSince the OAuth2 procedure can be complicated for inexperienced programmers, we provided a dedicated ",(0,n.jsx)(t.a,{href:"/authentication/code-flow/vanilla-code.mdx",children:"vanilla code guide"})," to show some additional examples."]}),"\n",(0,n.jsxs)(t.h3,{id:"lipstick-query-string-parameters",children:["\ud83d\udc84","\xa0 Query string parameters"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Query_string",children:"Query string"})," is used by our APIs to add the parameters required to use the additional functionalities of the Read operations (e.g. Get and List); it can usually be omitted if you don't need to use those functionalities.\nThis string is used as a suffix to the URL, and it can be used to ",(0,n.jsx)(t.a,{href:"/basics/additional-capabilities/sort-results.mdx",children:"sort"}),", ",(0,n.jsx)(t.a,{href:"/basics/additional-capabilities/paginate-results.mdx",children:"paginate"}),", ",(0,n.jsx)(t.a,{href:"/basics/additional-capabilities/customize-response.mdx",children:"customize"})," or ",(0,n.jsx)(t.a,{href:"/basics/additional-capabilities/filter-results.mdx",children:"filter"})," the response."]}),"\n",(0,n.jsxs)(t.h3,{id:"clipboard-request-body",children:["\ud83d\udccb","\xa0 Request Body"]}),"\n",(0,n.jsx)(t.p,{children:"The Request Body is used in Create and Modify requests to describe the new status of the resource after the action has been applied.\nOur APIs use solely JSON to represent the request, so you could need a JSON marshaller to create the body string."}),"\n",(0,n.jsxs)(t.h3,{id:"white_check_mark-status-code",children:["\u2705","\xa0 Status Code"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",children:"Status Code"})," is used to define if an operation was concluded with a success (2xx codes), with a client error (4xx codes), or with a server error (5xx codes)."]}),"\n",(0,n.jsxs)(t.h3,{id:"scroll-response-body",children:["\ud83d\udcdc","\xa0 Response Body"]}),"\n",(0,n.jsx)(t.p,{children:"The response body will contain the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Get requests: it contains the current state of the selected resource"}),"\n",(0,n.jsx)(t.li,{children:"List requests: it contains a set of resources with their current state"}),"\n",(0,n.jsx)(t.li,{children:"Create request: it contains the state of the created resource, including also the ID of the resource generated by the server"}),"\n",(0,n.jsx)(t.li,{children:"Modify Request: it contains the state of the modified resource"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Our APIs always return a JSON response, so it must be managed accordingly."}),"\n",(0,n.jsxs)(t.h3,{id:"label-http-response-headers",children:["\ud83c\udff7","\xa0 HTTP Response Headers"]}),"\n",(0,n.jsxs)(t.p,{children:["The response headers are usually used to provide additional info, such as information related to ",(0,n.jsx)(t.a,{href:"/basics/limits-and-quotas.mdx",children:"limits and quotas"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"pray-please-give-me-some-examples",children:["\ud83d\ude4f","\xa0 Please, give me some examples!"]}),"\n",(0,n.jsx)(t.p,{children:"You can obtain some examples automatically, by using our OpenAPI file or Postman Collection."}),"\n",(0,n.jsxs)(t.p,{children:["For example, if you download our ",(0,n.jsx)(t.a,{href:"/quickstarts/postman-collection.md",children:"Postman Collection"})," you can automatically generate some useful vanilla code examples by following this guide: ",(0,n.jsx)(t.a,{href:"https://learning.postman.com/docs/sending-requests/generate-code-snippets/",children:"Generating Client Code"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["As an alternative, you can use a code snippet generator to generate vanilla code snippets automatically for a huge variety of languages.\nYou can obtain the info required to launch the generation by using our ",(0,n.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI specification"})," as a source."]}),"\n",(0,n.jsx)(t.p,{children:"Here you can find some snippet generators:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ErikWittern/openapi-snippet",children:"OpenAPI Snippet"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/richardkabiling/openapi-snippet-cli",children:"OpenAPI Snippet CLI"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/readmeio/httpsnippet",children:"ReadmeIO/httpsnippet"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/Kong/httpsnippet",children:"Kong/httpsnippet"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["As a last chance, you can also check our ",(0,n.jsx)(t.a,{href:"/docs/1.0.1/sdks/",children:"SDK repositories"})," to copy our code. The SDK internally uses the same procedure described above, so you could try to read the code and adapt it to your needs."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(96540);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);