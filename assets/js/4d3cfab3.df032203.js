"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[7411],{37:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"stepbystep/quickstarts/python-sdk-quickstart","title":"Python SDK Quickstart","description":"Python Quickstart for the TSE in Cloud APIs","source":"@site/docs/stepbystep/quickstarts/python-sdk-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/python-sdk-quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/python-sdk-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stepbystep/quickstarts/python-sdk-quickstart.mdx","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/1.0.1/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/docs/1.0.1/tags/code-example"},{"inline":true,"label":"python","permalink":"/develop/docs/1.0.1/tags/python"},{"inline":true,"label":"sdk","permalink":"/develop/docs/1.0.1/tags/sdk"}],"version":"current","lastUpdatedAt":1734692556000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Python SDK Quickstart","slug":"python-sdk-quickstart","description":"Python Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","python","sdk"]},"sidebar":"tutorialSidebar","previous":{"title":"PHP SDK Quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/php-sdk-quickstart"},"next":{"title":"Ruby SDK Quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/ruby-sdk-quickstart"}}');var r=n(74848),o=n(28453),a=n(11470),i=n(19365);const l={sidebar_position:7,title:"Python SDK Quickstart",slug:"python-sdk-quickstart",description:"Python Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","python","sdk"]},u=void 0,c={},d=[{value:"0\ufe0f\u20e3\xa0 Prerequisites",id:"zero-prerequisites",level:2},{value:"1\ufe0f\u20e3\xa0 Step One: Install the TSE in Cloud SDK",id:"one-step-one-install-the-tse-in-cloud-sdk",level:2},{value:"2\ufe0f\u20e3\xa0 Step Two: Set up the OAuth access token retrieval",id:"two-step-two-set-up-the-oauth-access-token-retrieval",level:2},{value:"4\ufe0f\u20e3\xa0 Step Four: Set up the sample",id:"four-step-four-set-up-the-sample",level:2},{value:"5\ufe0f\u20e3\xa0 Step Five: Run the sample",id:"five-step-five-run-the-sample",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Following the steps described on this page, you'll create a simple Python application that interacts with the TSE in Cloud API."}),"\n",(0,r.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/sdk/python",children:"here"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"zero-prerequisites",children:["0\ufe0f\u20e3","\xa0 Prerequisites"]}),"\n",(0,r.jsx)(t.p,{children:"In this guide, we assume that these prerequisites are met:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Python >= 3.6 installed"}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.a,{href:"/basics/create-an-app.mdx",children:"private app"})," using the ",(0,r.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})]}),"\n",(0,r.jsx)(t.li,{children:"A TSE in Cloud account."}),"\n"]}),"\n",(0,r.jsxs)(t.h2,{id:"one-step-one-install-the-tse-in-cloud-sdk",children:["1\ufe0f\u20e3","\xa0 Step One: Install the TSE in Cloud SDK"]}),"\n",(0,r.jsxs)(t.p,{children:["In this quickstart, we'll use the ",(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-python-sdk",children:"TSE in Cloud SDK"}),", published to ",(0,r.jsx)(t.a,{href:"https://pypi.org/project/fattureincloud-python-sdk/",children:"PyPI"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"To install it using pip:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"pip install fattureincloud-python-sdk\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"two-step-two-set-up-the-oauth-access-token-retrieval",children:["2\ufe0f\u20e3","\xa0 Step Two: Set up the OAuth access token retrieval"]}),"\n",(0,r.jsxs)(t.p,{children:["Create the file ",(0,r.jsx)(t.strong,{children:"oauth.py"})," and copy in the following code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",metastring:'title="oauth.py"',children:"import json\nfrom urllib.parse import urlparse\nfrom urllib.parse import parse_qs\nfrom fattureincloud_python_sdk.oauth2.oauth2 import OAuth2AuthorizationCodeManager\nfrom fattureincloud_python_sdk.oauth2.oauth2 import Scope\n\nclass Oauth:\n    def get_oauth_access_token(self):\n        oauth = OAuth2AuthorizationCodeManager('CLIENT_ID', 'CLIENT_SECRET', 'http://localhost:8000/oauth')\n        query_components = parse_qs(urlparse(self.path).query)\n        if 'code' in query_components:\n            self.send_response(200)\n            self.send_header('Content-type','text/html')\n            self.end_headers()\n            code = query_components['code'][0]\n            token = oauth.fetch_token(code)\n            file = open('./token.json', 'w')\n            file.write(json.dumps({\"access_token\": token.access_token}))  #saving the oAuth access token in the token.json file\n            file.close()\n            self.wfile.write(bytes('Token saved succesfully in ./token.json', 'utf8'))\n        else:\n            url = oauth.get_authorization_url([Scope.ENTITY_SUPPLIERS_READ], 'EXAMPLE_STATE')\n            self.send_response(302)\n            self.send_header('Location', url)\n            self.end_headers()\n        return\n"})}),"\n",(0,r.jsx)(t.p,{children:"To make this code work properly the only thing you need to set your client id, client secret and eventually the redirect uri at line 9."}),"\n",(0,r.jsx)(t.admonition,{title:"Store the Token safely!",type:"danger",children:(0,r.jsx)(t.p,{children:"In this QuickStart the access token and refresh token are stored in a file, this is only for educational purposes, the OAuth access token and refresh token are sensitive data and should be saved securely on your database.\nAlso, never share your Client Secret with third-party actors, or publish it to your frontend!"})}),"\n",(0,r.jsxs)(t.h2,{id:"four-step-four-set-up-the-sample",children:["4\ufe0f\u20e3","\xa0 Step Four: Set up the sample"]}),"\n",(0,r.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,r.jsxs)(t.p,{children:["In this example, we'll show how to retrieve your Company ID using the Python SDK. If you plan to manage only one company, you can insert it directly into your code as a variable.\nCheck the ",(0,r.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,r.jsxs)(t.p,{children:["Create the files ",(0,r.jsx)(t.strong,{children:"index.py"})," and ",(0,r.jsx)(t.strong,{children:"quickstart.py"})," in your working directory and copy in the following code:"]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(i.A,{value:"index",label:"index.py",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",metastring:'title="index.py"',children:"from http.server import BaseHTTPRequestHandler, HTTPServer\nfrom oauth import Oauth #import the Oauth class\nfrom quickstart import Quickstart #import the Quickstart class\n\nclass testHTTPServer_RequestHandler(BaseHTTPRequestHandler):\n    def do_GET(self):\n        #url routing\n        if self.path.startswith('/oauth'): #oauth endpoint\n            Oauth.get_oauth_access_token(self)\n        elif self.path == '/quickstart': #quickstart endpoint\n            Quickstart.get_first_company_suppliers(self)\n        return\n\ndef run():\n    print('Avvio del server...')\n    server_address = ('127.0.0.1', 8000) #set your hostname and port\n    httpd = HTTPServer(server_address, testHTTPServer_RequestHandler)\n    print('Server in esecuzione...')\n    httpd.serve_forever()\nrun()\n"})})}),(0,r.jsx)(i.A,{value:"quickstart",label:"quickstart.py",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",metastring:'title="quickstart.py"',children:'import fattureincloud_python_sdk\nfrom fattureincloud_python_sdk.api import user_api\nfrom fattureincloud_python_sdk.api import suppliers_api\nfrom fattureincloud_python_sdk.models.list_user_companies_response import ListUserCompaniesResponse\nimport json\nimport collections\ncollections.Callable = collections.abc.Callable #needed if you are using python > 3.10\n\n\nclass Quickstart:\n    def get_first_company_suppliers(self):\n\n        token_file = open("./token.json")\n        json_file = json.load(token_file)\n        token_file.close()\n        configuration = fattureincloud_python_sdk.Configuration()\n        configuration.access_token = json_file["access_token"]\n        with fattureincloud_python_sdk.ApiClient(configuration) as api_client:\n\n            # Retrieve the first company id\n            user_api_instance = user_api.UserApi(api_client)\n            user_companies_response = user_api_instance.list_user_companies()\n            first_company_id = user_companies_response.data.companies[0].id\n\n            # Retrieve the list of the Suppliers\n            suppliers_api_instance = suppliers_api.SuppliersApi(api_client)\n            company_suppliers = suppliers_api_instance.list_suppliers(first_company_id)\n            self.send_response(200)\n            self.send_header(\'Content-type\',\'text/html\')\n            self.end_headers()\n            self.wfile.write(bytes(str(company_suppliers.data), "utf8"))\n        return\n'})})})]}),"\n",(0,r.jsx)(t.admonition,{title:"Check the Redirect URL",type:"warning",children:(0,r.jsxs)(t.p,{children:["Make sure your FattureInCloud app redirect URL points to the just defined /oauth endpoint (e.g. ",(0,r.jsx)(t.a,{href:"http://localhost:8000/oauth",children:"http://localhost:8000/oauth"}),")."]})}),"\n",(0,r.jsxs)(t.h2,{id:"five-step-five-run-the-sample",children:["5\ufe0f\u20e3","\xa0 Step Five: Run the sample"]}),"\n",(0,r.jsx)(t.p,{children:"From the command line, run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-console",children:"python3 index.py\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now visit ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://localhost:8000/oauth",children:"http://localhost:8000/oauth"})})," (or whatever your URL is), you will be redirected to the TSE in Cloud login page where you will be asked to grant some permissions, according to what scopes you specified previously.\nFinally, you will see the success message and the access token will be stored in the token.json file."]}),"\n",(0,r.jsxs)(t.p,{children:["You can now visit ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.a,{href:"http://localhost:8000/quickstart",children:"http://localhost:8000/quickstart"})})," (or whatever your URL is) to test the application."]}),"\n",(0,r.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,r.jsx)(t.p,{children:"In this example, we used a limited set of the available API methods to show how to use our SDK."}),"\n",(0,r.jsx)(t.p,{children:"If you want to access the full documentation of the available methods and models, you can check the following resources:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-python-sdk",children:"Python SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://pypi.org/project/fattureincloud-python-sdk/",children:"PyPI page"}),": The main package page on PyPI"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const r={tabItem:"tabItem_Ymn6"};var o=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>g});var s=n(96540),r=n(34164),o=n(23104),a=n(56347),i=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,a.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[u,d]=f({queryString:n,groupId:r}),[m,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),k=(()=>{const e=u??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{k&&l(k)}),[k]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),y(e)}),[d,y,o]),tabValues:o}}var y=n(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function b(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==s&&(u(t),a(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.A)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function _(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",k.tabList),children:[(0,v.jsx)(b,{...t,...e}),(0,v.jsx)(_,{...t,...e})]})}function g(e){const t=(0,y.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);