"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[22898],{49274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"stepbystep/quickstarts/ruby-sdk-quickstart","title":"Ruby SDK Quickstart","description":"Ruby Quickstart for the TSE in Cloud APIs","source":"@site/docs/stepbystep/quickstarts/ruby-sdk-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/ruby-sdk-quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/ruby-sdk-quickstart","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/stepbystep/quickstarts/ruby-sdk-quickstart.mdx","tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/1.0.1/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/docs/1.0.1/tags/code-example"},{"inline":true,"label":"ruby","permalink":"/develop/docs/1.0.1/tags/ruby"},{"inline":true,"label":"sdk","permalink":"/develop/docs/1.0.1/tags/sdk"}],"version":"current","lastUpdatedAt":1734533964000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"Ruby SDK Quickstart","slug":"ruby-sdk-quickstart","description":"Ruby Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","ruby","sdk"]},"sidebar":"tutorialSidebar","previous":{"title":"Python SDK Quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/python-sdk-quickstart"},"next":{"title":"TypeScript SDK Quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/ts-sdk-quickstart"}}');var s=n(74848),a=n(28453),i=n(11470),o=n(19365);const l={sidebar_position:8,title:"Ruby SDK Quickstart",slug:"ruby-sdk-quickstart",description:"Ruby Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","ruby","sdk"]},u=void 0,c={},d=[{value:"0\ufe0f\u20e3\xa0 Prerequisites",id:"zero-prerequisites",level:2},{value:"1\ufe0f\u20e3\xa0 Step One: Install the TSE in Cloud SDK",id:"one-step-one-install-the-tse-in-cloud-sdk",level:2},{value:"2\ufe0f\u20e3\xa0 Step Two: Set up the OAuth access token retrieval",id:"two-step-two-set-up-the-oauth-access-token-retrieval",level:2},{value:"3\ufe0f\u20e3\xa0 Step Three: Set up the sample",id:"three-step-three-set-up-the-sample",level:2},{value:"4\ufe0f\u20e3\xa0 Step Four: Run the sample",id:"four-step-four-run-the-sample",level:2},{value:"\u2753\xa0 What now?",id:"question-what-now",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Following the steps described on this page, you'll create a simple Ruby application that interacts with the TSE in Cloud API."}),"\n",(0,s.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/sdk/ruby",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.h2,{id:"zero-prerequisites",children:["0\ufe0f\u20e3","\xa0 Prerequisites"]}),"\n",(0,s.jsx)(t.p,{children:"In this guide, we assume that these prerequisites are met:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Ruby installed"}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"/basics/create-an-app.mdx",children:"private app"})," using the ",(0,s.jsx)(t.a,{href:"/authentication/code-flow/index.mdx",children:"OAuth 2.0 Authorization Code Flow"})]}),"\n",(0,s.jsx)(t.li,{children:"A TSE in Cloud account."}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"one-step-one-install-the-tse-in-cloud-sdk",children:["1\ufe0f\u20e3","\xa0 Step One: Install the TSE in Cloud SDK"]}),"\n",(0,s.jsxs)(t.p,{children:["In this quickstart, we'll use the ",(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ruby-sdk",children:"TSE in Cloud SDK"}),", published to ",(0,s.jsx)(t.a,{href:"https://rubygems.org/gems/fattureincloud_ruby_sdk",children:"RubyGems"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"To install it:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"gem install fattureincloud_ruby_sdk\n"})}),"\n",(0,s.jsxs)(t.h2,{id:"two-step-two-set-up-the-oauth-access-token-retrieval",children:["2\ufe0f\u20e3","\xa0 Step Two: Set up the OAuth access token retrieval"]}),"\n",(0,s.jsxs)(t.p,{children:["Create the file ",(0,s.jsx)(t.strong,{children:"oauth.rb"})," and copy in the following code:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rb",metastring:'title="oauth.rb"',children:"require 'rubygems'\nrequire 'webrick'\nrequire 'json'\nrequire 'fattureincloud_ruby_sdk'\n\nclass Oauth < WEBrick::HTTPServlet::AbstractServlet\n  def do_GET(request, response)\n    oauth = FattureInCloud_Ruby_Sdk::OAuth2AuthorizationCodeManager.new('CLIENT_ID', 'CLIENT_SECRET', 'http://localhost:8000/oauth')\n    if !request.request_uri.query.nil?\n      url_obj = URI.decode_www_form(request.request_uri.query).to_h\n      if !url_obj['code'].nil?\n        token = oauth.fetch_token(url_obj['code'])\n        File.open('./token.json', 'w') do |file|\n          file.write({\"access_token\" => token.access_token}.to_json) # saving the oAuth access token in the token.json file\n        end\n        body = 'Token saved succesfully in ./token.json'\n      else\n        redirect(response, oauth)\n      end\n    else redirect(response, oauth)\n    end\n\n    response.status = 200\n    response['Content-Type'] = 'text/html'\n    response.body = body\n  end\n\n  def redirect(response, oauth)\n    url = oauth.get_authorization_url([FattureInCloud_Ruby_Sdk::Scope::ENTITY_SUPPLIERS_READ], 'EXAMPLE_STATE')\n    response.set_redirect(WEBrick::HTTPStatus::TemporaryRedirect, url)\n  end\nend\n\nif $PROGRAM_NAME == __FILE__\n  server = WEBrick::HTTPServer.new(Port: 8000)\n  server.mount '/oauth', Oauth\n  trap 'INT' do server.shutdown end\n  server.start\nend\n"})}),"\n",(0,s.jsx)(t.p,{children:"To make this code work properly the only thing you need to set your client id, client secret and eventually the redirect uri at line 8."}),"\n",(0,s.jsx)(t.admonition,{title:"Store the Token safely!",type:"danger",children:(0,s.jsx)(t.p,{children:"In this QuickStart the access token and refresh token are stored in a file, this is only for educational purposes, the OAuth access token and refresh token are sensitive data and should be saved securely on your database.\nAlso, never share your Client Secret with third-party actors, or publish it to your frontend!"})}),"\n",(0,s.jsxs)(t.h2,{id:"three-step-three-set-up-the-sample",children:["3\ufe0f\u20e3","\xa0 Step Three: Set up the sample"]}),"\n",(0,s.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,s.jsxs)(t.p,{children:["In this example, we'll show how to retrieve your Company ID using the Ruby SDK. If you plan to manage only one company, you can insert it directly into your code as a variable.\nCheck the ",(0,s.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,s.jsxs)(t.p,{children:["Create the files ",(0,s.jsx)(t.strong,{children:"index.rb"})," and ",(0,s.jsx)(t.strong,{children:"quickstart.rb"})," in your working directory and copy in the following code:"]}),"\n",(0,s.jsxs)(i.A,{children:[(0,s.jsx)(o.A,{value:"index",label:"index.rb",default:!0,children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rb",metastring:'title="index.rb"',children:"require 'rubygems'\nrequire 'webrick'\n\nrequire './oauth' # importing the class created in the next tab\nrequire './quickstart' # importing the class created in the previous steps\n\nif $0 == __FILE__ then\n  server = WEBrick::HTTPServer.new(:Port => 8000)\n  server.mount \"/quickstart\", QuickStart # route that refers to the QuickStary class in the imported quickstart.rb file\n  server.mount \"/oauth\", Oauth  # route that refers to the Oauth class in the imported oauth.rb file\n  trap \"INT\" do server.shutdown end\n  server.start\nend\n"})})}),(0,s.jsx)(o.A,{value:"quickstart",label:"quickstart.rb",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rb",metastring:'title="quickstart.rb"',children:'require \'fattureincloud_ruby_sdk\'\n\nclass QuickStart < WEBrick::HTTPServlet::AbstractServlet\n\n  def do_GET(request, response)\n\n    # setup authorization\n    FattureInCloud_Ruby_Sdk.configure do |config|\n    # Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow\n    config.access_token = retrieve_token_from_file()\n    end\n\n    # Retrieve the first company id\n    user_api_instance = FattureInCloud_Ruby_Sdk::UserApi.new\n    user_companies_response = user_api_instance.list_user_companies\n    first_company_id = user_companies_response.data.companies[0].id\n\n    # Retrieve the list of the Suppliers\n    suppliers_api_instance = FattureInCloud_Ruby_Sdk::SuppliersApi.new\n    company_suppliers = suppliers_api_instance.list_suppliers(first_company_id)\n    response.body = company_suppliers.to_s\n \n  end\n\n  def retrieve_token_from_file()\n    obj = JSON.parse(File.read("./token.json"))\n    return obj["access_token"].to_s\n  end\n\nend\n'})})})]}),"\n",(0,s.jsx)(t.admonition,{title:"Check the Redirect URL",type:"danger",children:(0,s.jsxs)(t.p,{children:["Make sure your FattureInCloud app redirect URL points to the just defined /oauth endpoint (e.g. ",(0,s.jsx)(t.a,{href:"http://localhost:8000/oauth",children:"http://localhost:8000/oauth"}),")."]})}),"\n",(0,s.jsxs)(t.h2,{id:"four-step-four-run-the-sample",children:["4\ufe0f\u20e3","\xa0 Step Four: Run the sample"]}),"\n",(0,s.jsx)(t.p,{children:"From the command line, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-console",children:"ruby index.rb\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now visit ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"http://localhost:8000/oauth",children:"http://localhost:8000/oauth"})})," (or whatever your URL is), you will be redirected to the TSE in Cloud login page where you will be asked to grant some permissions, according to what scopes you specified previously.\nFinally, you will see the success message and the access token will be stored in the token.json file."]}),"\n",(0,s.jsxs)(t.p,{children:["You can now visit ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"http://localhost:8000/quickstart",children:"http://localhost:8000/quickstart"})})," (or whatever your URL is) to test the application."]}),"\n",(0,s.jsxs)(t.h2,{id:"question-what-now",children:["\u2753","\xa0 What now?"]}),"\n",(0,s.jsx)(t.p,{children:"In this example, we used a limited set of the available API methods to show how to use our SDK."}),"\n",(0,s.jsx)(t.p,{children:"If you want to access the full documentation of the available methods and models, you can check the following resources:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-ruby-sdk",children:"Ruby SDK GitHub Repository"}),": the Readme file contains the full list of the available methods and models"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/api-reference",children:"API Reference"}),": it contains the list of methods and models"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/openapi-specification.md",children:"OpenAPI Specification"}),": Our OpenAPI Specification contains the full description of the available methods and models"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://www.rubydoc.info/gems/fattureincloud_ruby_sdk/",children:"RubyDoc page"}),": The package documentation"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://rubygems.org/gems/fattureincloud_ruby_sdk",children:"RubyGems page"}),": The main package page on RubyGems"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>_});var r=n(96540),s=n(34164),a=n(23104),i=n(56347),o=n(205),l=n(57485),u=n(31682),c=n(70679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),k=(()=>{const e=u??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(74848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(u(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",k.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",k.tabList),children:[(0,y.jsx)(v,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function _(e){const t=(0,b.A)();return(0,y.jsx)(g,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);