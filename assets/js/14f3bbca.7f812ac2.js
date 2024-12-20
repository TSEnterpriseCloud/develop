"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[73521],{58907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"stepbystep/quickstarts/php-sdk-quickstart","title":"PHP SDK Quickstart","description":"PHP Quickstart for the TSE in Cloud APIs","source":"@site/versioned_docs/version-1.0.1/stepbystep/quickstarts/php-sdk-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/php-sdk-quickstart","permalink":"/develop/docs/stepbystep/quickstarts/php-sdk-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/stepbystep/quickstarts/php-sdk-quickstart.mdx","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/docs/tags/code-example"},{"inline":true,"label":"php","permalink":"/develop/docs/tags/php"},{"inline":true,"label":"sdk","permalink":"/develop/docs/tags/sdk"}],"version":"1.0.1","lastUpdatedAt":1734604377000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"PHP SDK Quickstart","slug":"php-sdk-quickstart","description":"PHP Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","php","sdk"]},"sidebar":"tutorialSidebar","previous":{"title":"JavaScript SDK Quickstart","permalink":"/develop/docs/stepbystep/quickstarts/js-sdk-quickstart"},"next":{"title":"Python SDK Quickstart","permalink":"/develop/docs/stepbystep/quickstarts/python-sdk-quickstart"}}');var r=n(74848),a=n(28453);n(11470),n(19365);const o={sidebar_position:6,title:"PHP SDK Quickstart",slug:"php-sdk-quickstart",description:"PHP Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","php","sdk"]},i=void 0,l={},u=[{value:"0\ufe0f\u20e3\xa0 Prerequisites",id:"zero-prerequisites",level:2},{value:"1\ufe0f\u20e3\xa0 Step One: Install the TSE in Cloud SDK",id:"one-step-one-install-the-tse-in-cloud-sdk",level:2},{value:"2\ufe0f\u20e3\xa0 Step Two: Set up the OAuth access token retrieval",id:"two-step-two-set-up-the-oauth-access-token-retrieval",level:2},{value:"3\ufe0f\u20e3\xa0 Step Three: Set up the sample",id:"three-step-three-set-up-the-sample",level:2},{value:"4\ufe0f\u20e3\xa0 Step Four: Run the sample",id:"four-step-four-run-the-sample",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Following the steps described on this page, you'll create a simple PHP command-line application that interacts with the TSE in Cloud API."}),"\n",(0,r.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/sdk/php",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"zero-prerequisites",children:["0\ufe0f\u20e3","\xa0 Prerequisites"]}),"\n",(0,r.jsx)(t.p,{children:"In this guide, we assume that these prerequisites are met:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"PHP 7.1 or greater"}),"\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsx)(t.a,{href:"https://getcomposer.org/",children:"Composer"})," dependency management tool"]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"/basics/create-an-app.mdx",children:"private app"})," using the ",(0,r.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})]}),"\n",(0,r.jsx)(t.li,{children:"A TSE in Cloud account."}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"one-step-one-install-the-tse-in-cloud-sdk",children:["1\ufe0f\u20e3","\xa0 Step One: Install the TSE in Cloud SDK"]}),"\n",(0,r.jsxs)(t.p,{children:["In this quickstart, we'll use the ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk",children:"TSE in Cloud SDK"}),", published to ",(0,r.jsx)(t.a,{href:"https://packagist.org/packages/fattureincloud/fattureincloud-php-sdk",children:"Packagist"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"To install it using Composer:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"composer require fattureincloud/fattureincloud-php-sdk\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"two-step-two-set-up-the-oauth-access-token-retrieval",children:["2\ufe0f\u20e3","\xa0 Step Two: Set up the OAuth access token retrieval"]}),"\n",(0,r.jsxs)(t.p,{children:["Create the file ",(0,r.jsx)(t.strong,{children:"oauth.php"})," and copy in the following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:'title="oauth.php"',children:"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\nuse FattureInCloud\\OAuth2\\OAuth2AuthorizationCodeManager;\nuse FattureInCloud\\OAuth2\\Scope;\n\nsession_set_cookie_params(86400);\nsession_start();\n\n$oauth = new OAuth2AuthorizationCodeManager(\"CLIENT_ID\", \"CLIENT_SECRET\", \"http://localhost:8000/oauth.php\");\n\nif(isset($_SESSION['token'])) die('You already have an access token');\n\nif(!isset($_GET['code'])) {\n  $url = $oauth->getAuthorizationUrl([Scope::ENTITY_SUPPLIERS_READ], \"EXAMPLE_STATE\");\n  header('location: '.$url);\n} else {\n    $code = $_GET['code'];\n    $obj = $oauth->fetchToken($code);\n    if(!isset($obj->error)) {\n      $_SESSION['token'] = $obj->getAccessToken(); //saving the oAuth access token in a session variable\n      $_SESSION['refresh'] = $obj->getRefreshToken();\n    }\n\n    echo 'Token saved correctly in the session variable';\n}\n\n?>\n"})}),"\n",(0,r.jsx)(t.p,{children:"To make this code work properly the only thing you need to set your client id, client secret and eventually the redirect uri at line 10."}),"\n",(0,r.jsx)(t.admonition,{title:"Check the Redirect URL",type:"warning",children:(0,r.jsxs)(t.p,{children:["Make sure your FattureInCloud app redirect URL points to your just created ",(0,r.jsx)(t.strong,{children:"oauth.php"})," file."]})}),"\n",(0,r.jsx)(t.admonition,{title:"Keep your Client Secret safe!",type:"danger",children:(0,r.jsx)(t.p,{children:"Never share your Client Secret with third-party actors, or publish it to your frontend! If you did, then we suggest to delete your TSE in Cloud app and to recreate it."})}),"\n",(0,r.jsxs)(t.h2,{id:"three-step-three-set-up-the-sample",children:["3\ufe0f\u20e3","\xa0 Step Three: Set up the sample"]}),"\n",(0,r.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,r.jsxs)(t.p,{children:["In this example, we'll show how to retrieve your Company ID using the PHP SDK. If you plan to manage only one company, you can insert it directly into your code as a variable.\nCheck the ",(0,r.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,r.jsxs)(t.p,{children:["Create a file called ",(0,r.jsx)(t.strong,{children:"quickstart.php"})," in your working directory and copy in the following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",metastring:'title="quickstart.php"',children:"<?php\n\nuse FattureInCloud\\Api\\SuppliersApi;\nuse FattureInCloud\\Api\\UserApi;\nuse FattureInCloud\\Configuration;\nuse GuzzleHttp\\Client;\n\nrequire __DIR__ . '/vendor/autoload.php';\nsession_start();\n\n// Retrieve the access token from the session variable\n$accessToken = $_SESSION['token'];\n\n// Get the API config and construct the service object.\n$config = FattureInCloud\\Configuration::getDefaultConfiguration()->setAccessToken($accessToken);\n\n$userApi = new FattureInCloud\\Api\\UserApi(\n    new GuzzleHttp\\Client(),\n    $config\n);\n$suppliersApi = new FattureInCloud\\Api\\SuppliersApi(\n    new GuzzleHttp\\Client(),\n    $config\n);\n\ntry {\n    // Retrieve the first company id\n    $companies = $userApi->listUserCompanies();\n    $firstCompanyId = $companies->getData()->getCompanies()[0]->getId();\n\n    // Retrieve the list of first 10 Suppliers for the selected company\n    $suppliers = $suppliersApi->listSuppliers($firstCompanyId, null, null, null, 1, 10);\n    foreach ($suppliers->getData() as $supplier) {\n        $name = $supplier->getName();\n        echo(\"$name </br>n\");\n    }\n\n} catch (Exception $e) {\n    echo 'Exception when calling the API: ', $e->getMessage(), PHP_EOL;\n}\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"four-step-four-run-the-sample",children:["4\ufe0f\u20e3","\xa0 Step Four: Run the sample"]}),"\n",(0,r.jsx)(t.p,{children:"Now start the webserver using the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"php -S localhost:8000\n"})}),"\n",(0,r.jsxs)(t.p,{children:["and go to ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://localhost:8000/oauth.php",children:"http://localhost:8000/oauth.php"})})," (or whatever your URL is), you will be redirected to the TSE in Cloud login page where you will be asked to grant some permissions, according to what scopes you specified previously.\nFinally, you will see the success message, the access token will be stored in the session variable ready to be used."]}),"\n",(0,r.jsxs)(t.p,{children:["You can now visit ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://localhost:8000/quickstart.php",children:"http://localhost:8000/quickstart.php"})})," (or whatever your URL is) to test the application."]}),"\n",(0,r.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,r.jsx)(t.p,{children:"In this example, we used a limited set of the available API methods to show how to use our SDK."}),"\n",(0,r.jsx)(t.p,{children:"If you want to access the full documentation of the available methods and models, you can check the following resources:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-php-sdk",children:"PHP SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://packagist.org/packages/fattureincloud/fattureincloud-php-sdk",children:"Packagist page"}),": The main package page on Packagist"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var s=n(96540),r=n(34164),a=n(23104),o=n(56347),i=n(205),l=n(57485),u=n(31682),c=n(70679);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=d(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,p]=f({queryString:n,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),k=(()=>{const e=u??m;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{k&&l(k)}),[k]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),g(e)}),[p,g,a]),tabValues:a}}var g=n(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function v(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==s&&(u(t),o(r))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:p,onClick:c,...a,className:(0,r.A)("tabs__item",k.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",k.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function j(e){const t=(0,g.A)();return(0,b.jsx)(y,{...e,children:p(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);