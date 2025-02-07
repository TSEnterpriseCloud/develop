"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[32917],{8426:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"stepbystep/quickstarts/powershell-quickstart","title":"Power Shell Quickstart","description":"Powershell Quickstart for the TSE in Cloud APIs","source":"@site/versioned_docs/version-1.0.1/stepbystep/quickstarts/powershell-quickstart.md","sourceDirName":"stepbystep/quickstarts","slug":"/stepbystep/quickstarts/powershell-collection","permalink":"/develop/docs/stepbystep/quickstarts/powershell-collection","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"quickstarts","permalink":"/develop/docs/tags/quickstarts"},{"inline":true,"label":"postman","permalink":"/develop/docs/tags/postman"},{"inline":true,"label":"code example","permalink":"/develop/docs/tags/code-example"},{"inline":true,"label":"powershell","permalink":"/develop/docs/tags/powershell"}],"version":"1.0.1","lastUpdatedAt":1738918158000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Power Shell Quickstart","slug":"powershell-collection","description":"Powershell Quickstart for the TSE in Cloud APIs","tags":["quickstarts","postman","code example","powershell"]},"sidebar":"tutorialSidebar","previous":{"title":"Postman Collection *","permalink":"/develop/docs/stepbystep/quickstarts/postman-collection"},"next":{"title":"C# SDK Quickstart","permalink":"/develop/docs/stepbystep/quickstarts/back/csharp-sdk-quickstart"}}');var s=t(74848),o=t(28453);const l={sidebar_position:2,title:"Power Shell Quickstart",slug:"powershell-collection",description:"Powershell Quickstart for the TSE in Cloud APIs",tags:["quickstarts","postman","code example","powershell"]},r=void 0,a={},c=[{value:"1 - PowerShell in a nutshell",id:"1---powershell-in-a-nutshell",level:2},{value:"Key features of PowerShell:",id:"key-features-of-powershell",level:3},{value:"What is PowerShell used for:",id:"what-is-powershell-used-for",level:3},{value:"Where can I install and use PowerShell?",id:"where-can-i-install-and-use-powershell",level:3},{value:"2 - How to use PowerShell to use our web services",id:"2---how-to-use-powershell-to-use-our-web-services",level:2},{value:"Create a configuration file",id:"create-a-configuration-file",level:3},{value:"Create a .ps1 file",id:"create-a-ps1-file",level:3},{value:"Additional resources",id:"additional-resources",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1---powershell-in-a-nutshell",children:"1 - PowerShell in a nutshell"}),"\n",(0,s.jsx)(n.p,{children:"PowerShell is a command-line shell and scripting language developed by Microsoft. It is designed for automating system administration tasks and configuration management. PowerShell combines the power of Unix command-line with the flexibility of a modern scripting language."}),"\n",(0,s.jsx)(n.h3,{id:"key-features-of-powershell",children:"Key features of PowerShell:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cmdlets: PowerShell uses special commands called cmdlets, which are small scripts designed to perform specific tasks."}),"\n",(0,s.jsx)(n.li,{children:"Pipeline: Allows passing the output of one cmdlet as input to another cmdlet, facilitating data manipulation."}),"\n",(0,s.jsx)(n.li,{children:"Access to .NET: PowerShell is built on the .NET framework, which means it can access all .NET classes and methods."}),"\n",(0,s.jsx)(n.li,{children:"Automation: It is widely used to automate repetitive tasks, such as user and group management, server configuration, and software deployment."}),"\n",(0,s.jsx)(n.li,{children:"Remote management: Supports remote system management, allowing administrators to execute commands on remote computers."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"what-is-powershell-used-for",children:"What is PowerShell used for:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"System administration: Managing users, groups, permissions, processes, and services."}),"\n",(0,s.jsx)(n.li,{children:"Configuration management: Configuring and managing servers and applications."}),"\n",(0,s.jsx)(n.li,{children:"Task automation: Creating scripts to automate repetitive and complex tasks."}),"\n",(0,s.jsx)(n.li,{children:"Cloud environment management: Interacting with cloud services like Azure for resource management."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Developing custom scripts"}),": Creating scripts for specific organizational needs."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"where-can-i-install-and-use-powershell",children:"Where can I install and use PowerShell?"}),"\n",(0,s.jsx)(n.p,{children:"PowerShell is available on multiple platforms and can be installed and used in various environments:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Windows"}),': PowerShell is pre-installed on Windows 10 and Windows Server 2016 and later versions. It can be launched by searching for "PowerShell" in the Start menu.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"macOS"}),": PowerShell can be installed on macOS using Homebrew. Run the command ",(0,s.jsx)(n.code,{children:"brew install --cask powershell"})," in the terminal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Linux"}),": PowerShell is available for various Linux distributions, including Ubuntu, CentOS, and Red Hat. It can be installed by following the specific instructions for the distribution on the official PowerShell site."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Azure Cloud Shell"}),": PowerShell is also available in Azure Cloud Shell, a browser-based shell environment that can be used directly from the Azure portal."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Docker"}),": PowerShell can be run in a Docker container. You can use an official PowerShell Docker image to create and manage containers with PowerShell pre-installed."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Regardless of the platform, PowerShell offers a consistent and powerful experience for system automation and management."}),"\n",(0,s.jsx)(n.p,{children:"PowerShell is a powerful and versatile tool that can greatly simplify system management and automation."}),"\n",(0,s.jsx)(n.h2,{id:"2---how-to-use-powershell-to-use-our-web-services",children:"2 - How to use PowerShell to use our web services"}),"\n",(0,s.jsx)(n.h3,{id:"create-a-configuration-file",children:"Create a configuration file"}),"\n",(0,s.jsx)(n.p,{children:"Create a configuration file and insert the following content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="/src/components/config.js"',children:'{\n  "username": "admin_xxxxx",\n  "grant_type": "token",\n  "scope": "csdemo_xxxxxxxx",\n  "token": "xxxxxxxxxxJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ3ZWJhcGlhZG1pbiIsIndlYmFwaTphdXRoZW50aWNhdGlvbjpzY29wZSI6Imh1Yl9hZG1pbixjc2RlbW9fYWx5Y3NkZW1vIiwianRpIjoiNTRlOTJlY2MtN2I1OS00YWVjLThiOTMtYWVjYmQwNTk1ZmUzIiwiaWF0IjoxNjk0MDkwMzc5LCJpc3MiOiJBbHlDRVNydjJTcnZJc3N1ZXIiLCJhdWQiOiJBbHlDRVNydjJTcnZBdWRpZW5jZSJ9.QyQdBWnULnM9TF1eCuY7x8JIXxPuOUiyg1_YnxbjaCE",\n  "filePath": "",\n  "webapi_base_url": "https://xxxxxxxxxx.teamsystem.io",\n  "company": "1"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"This allows us to insert our access data."}),"\n",(0,s.jsx)(n.h3,{id:"create-a-ps1-file",children:"Create a .ps1 file"}),"\n",(0,s.jsx)(n.p,{children:"Next, create our PowerShell file with a .ps1 extension"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",metastring:'title="/src/components/run.ps1"',children:'# Read the configuration file\n$config = Get-Content -Path "config.json" | ConvertFrom-Json\n\n# Verify that the configuration parameters are set\nif (-not $config.webapi_base_url) {\n    Write-Output "Error: \'webapi_base_url\' is not set in the configuration file."\n    exit\n}\nif (-not $config.username) {\n    Write-Output "Error: \'username\' is not set in the configuration file."\n    exit\n}\nif (-not $config.token) {\n    Write-Output "Error: \'token\' is not set in the configuration file."\n    exit\n}\nif (-not $config.scope) {\n    Write-Output "Error: \'scope\' is not set in the configuration file."\n    exit\n}\nif (-not $config.grant_type) {\n    Write-Output "Error: \'grant_type\' is not set in the configuration file."\n    exit\n}\nif (-not $config.company) {\n    Write-Output "Error: \'company\' is not set in the configuration file."\n    exit\n}\nif (-not $config.file_path) {\n    Write-Output "Alert: \'file_path\' is not set in the configuration file. The file will be saved in the current directory."\n}\n\n# Construct the token URL\n$tokenUrl = $config.webapi_base_url + "/api/auth/token"\n\n# Obtain the OAuth2 access token\n$tokenResponse = Invoke-RestMethod -Method Post -Uri $tokenUrl -Body @{\n    username = $config.username\n    token = "Bearer " + $config.token\n    scope = $config.scope\n    grant_type = $config.grant_type\n} -Headers @{\n    "Content-Type" = "application/x-www-form-urlencoded"\n    "Access-Control-Allow-Origin" = "http://localhost:3000"\n}\n\n$accessToken = $tokenResponse.access_token\n\nWrite-Output "Access token received"\n\n# Construct the web URL for the print document\n$docnumber = "202400000010"\n$filename = "document.pdf"  # Default filename\n$outputFilePath = $filename\nif ($config.file_path) {\n    $outputFilePath = $config.file_path + "/" + $filename \n}\n$webUrl = $config.webapi_base_url + "/api/v1/"+$config.scope+"/MG/Documento/"+ $docnumber +"/print?Company=" + $config.company\n\n# Send the file via a RESTful call\nWrite-Output "Sending request to $webUrl"\n$response =  Invoke-WebRequest -Method Get -Uri $webUrl -Headers @{\n    "Authorization-Scope" = $config.scope\n    "Content-Type" = "application/pdf"\n    "Authorization" = "Bearer $accessToken"\n} \n\nWrite-Output "Response received!"\n\n# Check if the response contains the streamPDF field\nif ($response.Content -match \'"streamPDF":\\s*"([^"]+)"\') {\n    $base64String = $matches[1]\n    Write-Output "Base64 content found!"\n\n    # Decode the base64 content and save as a PDF file\n    $outputFilePath =  "document.pdf"\n    $decodedBytes = [System.Convert]::FromBase64String($base64String)\n    [System.IO.File]::WriteAllBytes($outputFilePath, $decodedBytes)\n\n    Write-Output "Response saved to file:  $outputFilePath"\n} else {\n    Write-Output "Error: The streamPDF field is not present in the response."\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"In this example, we can authenticate via token and download a PDF print of a document."}),"\n",(0,s.jsx)(n.h2,{id:"additional-resources",children:"Additional resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/powershell/",children:"PowerShell Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/PowerShell/PowerShell/releases",children:"Download PowerShell"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(96540);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);