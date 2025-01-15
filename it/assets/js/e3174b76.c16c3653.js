"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[56242],{59378:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"basics/crud/read","title":"[R]ead *","description":"Read operations","source":"@site/versioned_docs/version-1.0.1/basics/crud/read.md","sourceDirName":"basics/crud","slug":"/basics/crud/read","permalink":"/develop/it/docs/basics/crud/read","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/basics/crud/read.md","tags":[{"inline":true,"label":"status","permalink":"/develop/it/docs/tags/status"},{"inline":true,"label":"http","permalink":"/develop/it/docs/tags/http"},{"inline":true,"label":"code","permalink":"/develop/it/docs/tags/code"},{"inline":true,"label":"support","permalink":"/develop/it/docs/tags/support"},{"inline":true,"label":"200","permalink":"/develop/it/docs/tags/200"},{"inline":true,"label":"404","permalink":"/develop/it/docs/tags/404"}],"version":"1.0.1","lastUpdatedAt":1736786694000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"[R]ead *","slug":"read","description":"Read operations","tags":["status","http","code","support","200","404"]},"sidebar":"tutorialSidebar","previous":{"title":"[C]reate *","permalink":"/develop/it/docs/basics/crud/status-code"},"next":{"title":"[U]pdate *","permalink":"/develop/it/docs/basics/crud/update"}}');var i=r(74848),o=r(28453);const t={sidebar_position:2,title:"[R]ead *",slug:"read",description:"Read operations",tags:["status","http","code","support",200,404]},l="Read",d={},a=[{value:"GET",id:"get",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Response Code",id:"response-code",level:3},{value:"SEARCH",id:"search",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Response Code",id:"response-code-1",level:3},{value:"VALIDATION",id:"validation",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Response Code",id:"response-code-2",level:3},{value:"PROPERTY VALIDATION",id:"property-validation",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Response Code",id:"response-code-3",level:3},{value:"LOOKUP",id:"lookup",level:2},{value:"Available Lookup List",id:"available-lookup-list",level:3},{value:"Response Code",id:"response-code-4",level:3},{value:"Retrieve Lookup Data",id:"retrieve-lookup-data",level:2},{value:"Parameters",id:"parameters-4",level:3}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"read",children:"Read"})}),"\n",(0,i.jsx)(s.h2,{id:"get",children:"GET"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"GET"}),": ",(0,i.jsx)(s.code,{children:"webapi_base_url/v1/{environment}/{module}/{resource}/{id}"})]}),"\n",(0,i.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"id"}),": identifier of the resource to be read"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"response-code",children:"Response Code"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"200"}),": the requested ",(0,i.jsx)(s.code,{children:"{resource}DTO"})," object"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"404"}),": if the object was not found"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"search",children:"SEARCH"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"POST"}),": ",(0,i.jsx)(s.code,{children:"webapi_base_url/v1/{environment}/{module}/{resource}/search"})]}),"\n",(0,i.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"body"}),": the search filter to apply (",(0,i.jsx)(s.code,{children:"SearchDTO"}),"), valid for all properties of the DTO, with the following structure:","\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "filters": {\n    "items": [{\n      "comparer": 0,\n      "operator": 0,\n      "propertyName": "prop1",\n      "value": "value1"\n    }, {\n      "comparer": 20,\n      "operator": 1,\n      "propertyName": "prop2",\n      "value": "value2"\n    }]\n  },\n  "pageSize": 5,\n  "pageNumber": 1\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"}),': See the "Resource Search" section for a detailed description of the structure to use in the search.']}),"\n",(0,i.jsx)(s.h3,{id:"response-code-1",children:"Response Code"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"200"}),": the list of ",(0,i.jsx)(s.code,{children:"{resource}DTO"})," objects corresponding to the search result"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"400"}),": if the search filter was not specified"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"validation",children:"VALIDATION"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"POST"}),": ",(0,i.jsx)(s.code,{children:"webapi_base_url/v1/{environment}/{module}/{resource}/validate"})]}),"\n",(0,i.jsx)(s.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"body"}),": the object of type ",(0,i.jsx)(s.code,{children:"{resource}DTO"})," to be validated"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"response-code-2",children:"Response Code"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"200"}),": if the specified object is VALID"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"400"}),": if the object to be validated is not specified"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"409"}),": if the specified object is INVALID; the response content contains the produced validation messages"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"property-validation",children:"PROPERTY VALIDATION"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"POST"}),": ",(0,i.jsx)(s.code,{children:"webapi_base_url/v1/{environment}/{module}/{resource}/validateproperties"})]}),"\n",(0,i.jsx)(s.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"id"}),": identifier of an existing object on which to validate the properties, or '' for the validation of properties against a new object"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"body"}),": one or more 'key=value' pairs, in x-www-form-urlencoded format, where the key is the name of the DTO property and the value is the value to assign before performing the validation itself"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"response-code-3",children:"Response Code"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"200"}),": if the specified properties of the object are VALID"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"400"}),": if the properties of the object to be validated are not specified"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"409"}),": if one or more specified properties of the object are INVALID; the response content contains the produced validation messages"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"lookup",children:"LOOKUP"}),"\n",(0,i.jsx)(s.h3,{id:"available-lookup-list",children:"Available Lookup List"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"GET"}),": ",(0,i.jsx)(s.code,{children:"webapi_base_url/v1/{environment}/FW/lookup/"})]}),"\n",(0,i.jsx)(s.h3,{id:"response-code-4",children:"Response Code"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"200"}),": an array of objects, with the following structure:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'    {\n    "description": "string",\n    "lookupName": "string",\n    "href": "string"\n    }\n'})}),"\n",(0,i.jsx)(s.h2,{id:"retrieve-lookup-data",children:"Retrieve Lookup Data"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"GET"}),": ",(0,i.jsx)(s.code,{children:"/api/v1/{environment}/{moduleAcron}/lookup/{lookupname}"})]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"POST"}),": ",(0,i.jsx)(s.code,{children:"/api/v1/{environment}/{moduleAcron}/lookup/{lookupname}"})]}),"\n",(0,i.jsx)(s.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"moduleAcron"}),": abbreviation of the module to which the lookup belongs (e.g., CO, MG, ...)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"lookupName"}),": the name of the lookup relative to the supported entities"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"metadata"}),": if ",(0,i.jsx)(s.code,{children:"true"}),", retrieves the metadata (the structure) of the lookup"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"_op"}),": must be set to 'search' to activate the search functionality"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"body"}),": the search filter to apply, in JSON format, with the following structure:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'    {\n    "filters": {\n      "items": [{\n        "comparer": 0,\n        "operator": 0,\n        "propertyName": "ItemWH_SubFamilyWH_CodFamMg53",\n        "value": "A"\n      }]\n    },\n    "pageNumber": 0,\n    "pagesize": 50,\n    "orderingproperties": {\n      "CustomerSupplierCO_Clifor": 0\n    }\n  }\n'})})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>l});var n=r(96540);const i={},o=n.createContext(i);function t(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);