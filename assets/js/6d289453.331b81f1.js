"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[14796],{33118:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"stepbystep/quickstarts/windows-form-quickstart","title":"Windows Form Quickstart","description":"Windows Form Quickstart for the TSE in Cloud APIs","source":"@site/docs/stepbystep/quickstarts/windows-form-quickstart.mdx","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/windows-form-quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/windows-form-quickstart","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/1.0.1/tags/quickstarts"},{"inline":true,"label":"code example","permalink":"/develop/docs/1.0.1/tags/code-example"},{"inline":true,"label":"c#","permalink":"/develop/docs/1.0.1/tags/c"},{"inline":true,"label":"sdk","permalink":"/develop/docs/1.0.1/tags/sdk"},{"inline":true,"label":"windows form","permalink":"/develop/docs/1.0.1/tags/windows-form"}],"version":"current","lastUpdatedAt":1739966023000,"sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"Windows Form Quickstart","slug":"windows-form-quickstart","description":"Windows Form Quickstart for the TSE in Cloud APIs","tags":["quickstarts","code example","c#","sdk","windows form"]},"sidebar":"tutorialSidebar","previous":{"title":"Vanilla Code Examples","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/vanilla-code"},"next":{"title":"Excel Power Query Quickstart","permalink":"/develop/docs/1.0.1/stepbystep/quickstarts/powerquery-quickstart"}}');var i=n(74848),r=n(28453);n(65537),n(79329);const a={sidebar_position:11,title:"Windows Form Quickstart",slug:"windows-form-quickstart",description:"Windows Form Quickstart for the TSE in Cloud APIs",tags:["quickstarts","code example","c#","sdk","windows form"]},o=void 0,l={},c=[{value:"0\ufe0f\u20e3\xa0 Prerequisites",id:"zero-prerequisites",level:2},{value:"\u2139\ufe0f\xa0 Github repo!",id:"information_source-github-repo",level:2},{value:"1\ufe0f\u20e3\xa0 Step One: Create a Windows Form app",id:"one-step-one-create-a-windows-form-app",level:2},{value:"2\ufe0f\u20e3\xa0 Step Two: Put the components in the Form",id:"two-step-two-put-the-components-in-the-form",level:2},{value:"3\ufe0f\u20e3\xa0 The actual code",id:"three-the-actual-code",level:2},{value:"3\ufe0f\u20e3\xa0 Step Three: Run the sample",id:"three-step-three-run-the-sample",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Following the steps described on this page, you'll create a simple Windows Form App integrated with TSE in Cloud."}),"\n",(0,i.jsxs)(t.p,{children:["If you want to download the complete working example you can find it ",(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/other/WindowsForm",children:"here"}),"."]}),"\n",(0,i.jsxs)(t.h2,{id:"zero-prerequisites",children:["0\ufe0f\u20e3","\xa0 Prerequisites"]}),"\n",(0,i.jsx)(t.p,{children:"In this guide, we assume that these prerequisites are met:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:".NET SDK installed"}),"\n",(0,i.jsx)(t.li,{children:"A TSE in Cloud account."}),"\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.a,{href:"/basics/create-an-app.mdx",children:"private app"})," using the ",(0,i.jsx)(t.a,{href:"../authentication/manual-authentication.mdx",children:"Manual Authentication"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"information_source-github-repo",children:["\u2139\ufe0f","\xa0 Github repo!"]}),"\n",(0,i.jsxs)(t.p,{children:["If you want to download the complete project we have it ",(0,i.jsx)(t.a,{href:"https://github.com/fattureincloud/fattureincloud-quickstarts/tree/master/other/WindowsForm",children:"here"}),", we strongly suggest that you clone this project to follow this guide."]}),"\n",(0,i.jsxs)(t.h2,{id:"one-step-one-create-a-windows-form-app",children:["1\ufe0f\u20e3","\xa0 Step One: Create a Windows Form app"]}),"\n",(0,i.jsx)(t.p,{children:"The first step is to create a Windows Form project in Visual Studio, in this tutorial we are making a simple app that does two things:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-reference#get-/c/-company_id-/entities/clients",children:"lists all the clients"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/api-reference#post-/c/-company_id-/entities/clients",children:"creates a client"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"two-step-two-put-the-components-in-the-form",children:["2\ufe0f\u20e3","\xa0 Step Two: Put the components in the Form"]}),"\n",(0,i.jsx)(t.p,{children:"This form is pretty simple:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Form Designer",src:n(81054).A+""})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Form Designer",src:n(14926).A+""})}),"\n",(0,i.jsx)(t.p,{children:"Components list:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TabControl"})," tabControl1: we have a TabControl with 2 tabs, one for the list clients and one for the create client"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"inside the first tab we have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"DataGridView"})," dataGridView1: this shows all the clients linked to the company"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Button"})," syncButton: it calls the method that populates the data grid"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"inside the second tab we have:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TextBox"})," clientNameTextBox: input for the client name"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TextBox"})," clientTaxCodeTextBox: input for the client tax code"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TextBox"})," clientVatNumberTextBox: input for the client vat number"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"TextBox"})," clientEmailTextBox: input for the client email"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Button"})," saveClient: it calls the method that creates the client"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"three-the-actual-code",children:["3\ufe0f\u20e3","\xa0 The actual code"]}),"\n",(0,i.jsx)(t.admonition,{title:"Retrieve your Company ID!",type:"tip",children:(0,i.jsxs)(t.p,{children:["In this example, we'll suppose you have to manage just one Company, so we simply inserted its ID directly in the code. If instead, you need to be able to manage multiple companies, you'll need to retrieve the ID of the current company in some way.\nCheck the ",(0,i.jsx)(t.a,{href:"/basics/company-scoped-methods.mdx",children:"Company-scoped Methods"})," page for more info."]})}),"\n",(0,i.jsx)(t.p,{children:"The actual code behind the Form is very simple too:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:'using It.FattureInCloud.Sdk.Api;\nusing It.FattureInCloud.Sdk.Client;\nusing It.FattureInCloud.Sdk.Model;\nusing System;\nusing System.Windows.Forms;\n\nnamespace WinFormsQuickstart\n{\n    public partial class Form : System.Windows.Forms.Form\n    {\n        ClientsApi clientsApi;\n        int companyId = 12345;\n        public Form()\n        {\n            InitializeComponent();\n            Configuration config = new Configuration();\n            // IMPORTANT: the access token file must be saved in a secure environment\n            // like a db or the AppConfig\n            config.AccessToken = "YOUR_ACCESS_TOKEN";\n            clientsApi = new ClientsApi(config);\n        }\n\n        private void syncButton_Click(object sender, EventArgs e)\n        {\n            try\n            {\n                dataGridView1.Rows.Clear();\n                dataGridView1.Columns.Clear();\n                dataGridView1.Refresh();\n                dataGridView1.Columns.Add("Id", "Id");\n                dataGridView1.Columns.Add("Name", "Name");\n                dataGridView1.Columns.Add("VatNumber", "Vat Number");\n                dataGridView1.Columns.Add("TaxCode", "Tax Code");\n                dataGridView1.Columns.Add("Country", "Country");\n\n                retrieveAllClients();\n\n            }\n            catch (Exception ex)\n            {\n                MessageBox.Show(ex.Message);\n            }\n        }\n\n        private void retrieveAllClients(int page = 1)\n        {\n            var result = clientsApi.ListClientsWithHttpInfo(companyId, page: page);\n\n            result.Data.Data.ForEach(client =>\n            {\n                dataGridView1.Rows.Add(\n                    new string[] \n                    { \n                        client.Id.ToString(), \n                        client.Name, \n                        client.VatNumber, \n                        client.TaxCode, \n                        client.Country \n                    }\n                );\n            });\n\n            if (result.Data.NextPageUrl != null) retrieveAllClients(++page);\n        }\n\n        private void saveClient_Click(object sender, EventArgs e)\n        {\n            var newClient = new CreateClientRequest(\n                data: new ModelClient(\n                    name: clientNameTextBox.Text,\n                    taxCode: clientTaxCodeTextBox.Text,\n                    vatNumber: clientVatNumberTextBox.Text,\n                    email: clientEmailTextBox.Text\n                )\n            );\n\n            try\n            {\n                var result = clientsApi.CreateClient(companyId, newClient);\n                MessageBox.Show("Client save succesfully with id: " + result.Data.Id.ToString());\n                clientNameTextBox.Text = String.Empty;\n                clientTaxCodeTextBox.Text = String.Empty;\n                clientVatNumberTextBox.Text = String.Empty;\n                clientEmailTextBox.Text = String.Empty;\n            }\n            catch (Exception ex)\n            {\n                MessageBox.Show(ex.Message);\n            }\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(t.admonition,{title:"STORE YOUR TOKENS SAFELY!",type:"danger",children:(0,i.jsx)(t.p,{children:"In this QuickStart, as you can see the access token is hard coded, this is only for educational purposes, the OAuth access token and refresh token are sensitive data and should be saved securely on your database or in the AppConfig. Also, never share your Client Secret with third-party actors, or publish it on your frontend!"})}),"\n",(0,i.jsx)(t.p,{children:"The main methods are two:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"syncButton_Click"}),": retrieves all the clients looping thru the pages of the ",(0,i.jsx)(t.a,{href:"/basics/additional-capabilities/paginate-results.mdx",children:"paginated response"})," and shows them into the DataGrid"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"saveClient_Click"}),": creates the client with the params specified in the TexBoxes"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"three-step-three-run-the-sample",children:["3\ufe0f\u20e3","\xa0 Step Three: Run the sample"]}),"\n",(0,i.jsx)(t.p,{children:"Now your Form should work like a charm."}),"\n",(0,i.jsx)(t.p,{children:"Let's create a new client:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create a new client",src:n(11732).A+""})}),"\n",(0,i.jsx)(t.p,{children:"and now we are going to see it by syncing in the list clients tab:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Sync the clients",src:n(59024).A+""})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79329:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const i={tabItem:"tabItem_Ymn6"};var r=n(74848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,a),hidden:n,children:t})}},65537:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(96540),i=n(34164),r=n(65627),a=n(56347),o=n(50372),l=n(30604),c=n(11861),d=n(78749);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:i}}=e;return{value:t,label:n,attributes:s,default:i}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(i.location.search);t.set(r,e),i.replace({...i.location,search:t.toString()})}),[r,i])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,r=h(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[c,u]=m({queryString:n,groupId:i}),[x,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,r]=(0,d.Dv)(n);return[i,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),g=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function w(e){let{className:t,block:n,selectedValue:s,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==s&&(c(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...r,className:(0,i.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=x(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,b.jsx)(w,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function y(e){const t=(0,f.A)();return(0,b.jsx)(j,{...e,children:u(e.children)},String(t))}},11732:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/create_client-c3879deedef359e7abf33e9d5ae1fd56.png"},81054:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/form-97571dc0a281406b3c379c5b6113e369.png"},14926:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/form2-3fd88c29abf88dcd6bbc4c9ee319aec9.png"},59024:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/sync_clients-b3e44f574ad351935d4f81b34b96f21c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);