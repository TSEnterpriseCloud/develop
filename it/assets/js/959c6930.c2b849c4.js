"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[98847],{59757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"basics/limits-and-quotas","title":"Limits and Quotas","description":"APIs usage and rate limits","source":"@site/docs/basics/limits-and-quotas.mdx","sourceDirName":"basics","slug":"/basics/limits-and-quotas","permalink":"/develop/it/docs/basics/limits-and-quotas","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/basics/limits-and-quotas.mdx","tags":[{"inline":true,"label":"basics","permalink":"/develop/it/docs/tags/basics"},{"inline":true,"label":"limits","permalink":"/develop/it/docs/tags/limits"},{"inline":true,"label":"quotas","permalink":"/develop/it/docs/tags/quotas"},{"inline":true,"label":"rate","permalink":"/develop/it/docs/tags/rate"},{"inline":true,"label":"retry","permalink":"/develop/it/docs/tags/retry"},{"inline":true,"label":"exponential backoff","permalink":"/develop/it/docs/tags/exponential-backoff"},{"inline":true,"label":"delay","permalink":"/develop/it/docs/tags/delay"},{"inline":true,"label":"code example","permalink":"/develop/it/docs/tags/code-example"},{"inline":true,"label":"c#","permalink":"/develop/it/docs/tags/c"},{"inline":true,"label":"java","permalink":"/develop/it/docs/tags/java"},{"inline":true,"label":"javascript","permalink":"/develop/it/docs/tags/javascript"},{"inline":true,"label":"php","permalink":"/develop/it/docs/tags/php"},{"inline":true,"label":"python","permalink":"/develop/it/docs/tags/python"},{"inline":true,"label":"ruby","permalink":"/develop/it/docs/tags/ruby"},{"inline":true,"label":"typescript","permalink":"/develop/it/docs/tags/typescript"},{"inline":true,"label":"forbidden","permalink":"/develop/it/docs/tags/forbidden"},{"inline":true,"label":"too many requests","permalink":"/develop/it/docs/tags/too-many-requests"},{"inline":true,"label":"403","permalink":"/develop/it/docs/tags/403"},{"inline":true,"label":"429","permalink":"/develop/it/docs/tags/429"}],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Limits and Quotas","slug":"limits-and-quotas","description":"APIs usage and rate limits","tags":["basics","limits","quotas","rate","retry","exponential backoff","delay","code example","c#","java","javascript","php","python","ruby","typescript","forbidden","too many requests","403","429"]},"sidebar":"tutorialSidebar","previous":{"title":"Errors","permalink":"/develop/it/docs/basics/errors"},"next":{"title":"Additional Capabilities","permalink":"/develop/it/docs/basics/additional-capabilities/"}}');var r=n(74848),a=n(28453),s=n(11470),o=n(19365);const l={sidebar_position:7,title:"Limits and Quotas",slug:"limits-and-quotas",description:"APIs usage and rate limits",tags:["basics","limits","quotas","rate","retry","exponential backoff","delay","code example","c#","java","javascript","php","python","ruby","typescript","forbidden","too many requests",403,429]},c=void 0,u={},d=[{value:"\ud83d\udcc6\xa0 Long-term usage limits",id:"calendar-long-term-usage-limits",level:2},{value:"\u23f1\xa0 Short-term rate limits",id:"stopwatch-short-term-rate-limits",level:2},{value:"\ud83d\udcd1\xa0 HTTP Headers and response codes",id:"bookmark_tabs-http-headers-and-response-codes",level:2},{value:"\ud83c\udf0a\xa0 Is it still not enough?",id:"ocean-is-it-still-not-enough",level:2},{value:"\ud83d\udc86\u200d\u2642\ufe0f\xa0 Keep calm and deal with quotas!",id:"massage_man-keep-calm-and-deal-with-quotas",level:2},{value:"\ud83d\udcda\xa0 Additional Resources",id:"books-additional-resources",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To prevent abuse, avoid slowdowns, and ensure that all users make responsible use of our APIs, we enforce ",(0,r.jsx)(t.strong,{children:"quota limits"}),". If you perform too many requests you may exceed your quota; in this case, you will receive an ",(0,r.jsx)(t.a,{href:"/develop/it/docs/basics/errors",children:"error"})," as a response until when your quota will be restored."]}),"\n",(0,r.jsx)(t.p,{children:"We enforce two different kinds of limits, based on the time range that they apply to."}),"\n",(0,r.jsxs)(t.h2,{id:"calendar-long-term-usage-limits",children:["\ud83d\udcc6","\xa0 Long-term usage limits"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Long-term usage limits"})," are meant to avoid improper usage of the APIs, by setting a limit on the maximum amount of requests in a certain period."]}),"\n",(0,r.jsx)(t.admonition,{title:"Long-term Usage quotas are different based on the app visibility!",type:"note",children:(0,r.jsx)(t.p,{children:"If the app is public every user that has access to a specific company through a specific app shares (and consumes) the same quotas as other users that have access to the same company through the same app, if the app is private the quotas are no more related to the app but only to the company, this means that creating a new private app won't increase your quotas."})}),"\n",(0,r.jsx)(t.p,{children:"The quota limits are the following:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"API limit type"}),(0,r.jsx)(t.th,{children:"Limit"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Requests per hour"}),(0,r.jsx)(t.td,{children:"1.000 requests per hour on a company-app couple"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Requests per month"}),(0,r.jsx)(t.td,{children:"40.000 requests per month on a company-app couple for public apps"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Requests per month"}),(0,r.jsx)(t.td,{children:"40.000 requests per month per company for private apps"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["Long-term limits use ",(0,r.jsx)(t.strong,{children:"fixed time windows"}),": these quotas are reset at the beginning of a new hour or month."]}),"\n",(0,r.jsxs)(t.p,{children:["If the limit is exceeded, the API returns a ",(0,r.jsx)(t.strong,{children:"403 Forbidden"})," HTTP status code; the response also includes a ",(0,r.jsx)(t.em,{children:"Retry-After"})," header, indicating how long you should wait before retrying the request (in seconds)."]}),"\n",(0,r.jsxs)(t.h2,{id:"stopwatch-short-term-rate-limits",children:["\u23f1","\xa0 Short-term rate limits"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Short-term rate limits"})," are meant to avoid usage spikes that could affect the system availability, by preventing applications from sending too many requests in a short-time interval."]}),"\n",(0,r.jsx)(t.admonition,{title:"Short-term Usage quotas are company-related!!!",type:"note",children:(0,r.jsx)(t.p,{children:"This means that every app and user that has access to a specific company shares (and consumes) the same quotas with other apps and users that have access to the same company."})}),"\n",(0,r.jsx)(t.p,{children:"The quota limit is the following:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"API limit type"}),(0,r.jsx)(t.th,{children:"Limit"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Requests every 5 minutes"}),(0,r.jsx)(t.td,{children:"300 requests every 5 minutes"})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["Short-term usage limits use a ",(0,r.jsx)(t.strong,{children:"sliding-window algorithm"}),", check the additional resources for further info."]}),"\n",(0,r.jsxs)(t.p,{children:["If the limit is exceeded, the API returns a ",(0,r.jsx)(t.strong,{children:"429 Too Many Requests"})," HTTP status code. The response also includes a ",(0,r.jsx)(t.em,{children:"Retry-After"})," header, indicating how long you should wait before the request (in seconds)."]}),"\n",(0,r.jsxs)(t.h2,{id:"bookmark_tabs-http-headers-and-response-codes",children:["\ud83d\udcd1","\xa0 HTTP Headers and response codes"]}),"\n",(0,r.jsx)(t.p,{children:"Every response contains several HTTP headers containing info about long-term usage limits."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Header"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RateLimit-HourlyRemaining"}),(0,r.jsx)(t.td,{children:"The number of requests remaining for the current hour."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RateLimit-HourlyLimit"}),(0,r.jsx)(t.td,{children:"The maximum number of requests you are permitted to make per hour."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RateLimit-MonthlyRemaining"}),(0,r.jsx)(t.td,{children:"The number of requests remaining for the current month."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RateLimit-MonthlyLimit"}),(0,r.jsx)(t.td,{children:"The maximum number of requests you are permitted to make per month."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Here you can find an example of the HTTP response:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:"HTTP/1.1 200 OK\nDate: Tue, 05 May 2020 17:27:06 GMT\nStatus: 200 OK\nRateLimit-HourlyRemaining: 840\nRateLimit-HourlyLimit: 1000\nRateLimit-MonthlyRemaining: 1430\nRateLimit-MonthlyLimit: 20000\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"ocean-is-it-still-not-enough",children:["\ud83c\udf0a","\xa0 Is it still not enough?"]}),"\n",(0,r.jsx)(t.p,{children:"We designed our quotas to be able to satisfy the needs of the majority of the use cases. Nevertheless, in some cases, the default quotas could prove to be scarce, and in this situation, the only way is to increment the quota limit."}),"\n",(0,r.jsxs)(t.p,{children:["If you think that your use case requires a higher quota, you can try to request us additional quota. ",(0,r.jsx)(t.strong,{children:"It isn't automatic though"}),", you'll have to explain your use case in detail to our team and demonstrate why our quotas are not sufficient to resolve it."]}),"\n",(0,r.jsxs)(t.p,{children:["We can increment only the ",(0,r.jsx)(t.a,{href:"#-long-term-usage-limits",children:"long-term usage limits"}),"."]}),"\n",(0,r.jsx)(t.admonition,{title:"Short-term rate quotas can't be incremented!",type:"danger",children:(0,r.jsxs)(t.p,{children:["If you're facing an issue with short-term rate quota, e.g. you're obtaining a ",(0,r.jsx)(t.strong,{children:"429 Too Many Requests"})," error response, it means that ",(0,r.jsx)(t.em,{children:"you're not managing our APIs correctly"}),".\nIf that's the case, we'll reject every additional quota request we'll receive, and you should instead read the ",(0,r.jsx)(t.a,{href:"#%EF%B8%8F-keep-calm-and-deal-with-quotas",children:"next section"}),"."]})}),"\n",(0,r.jsxs)(t.h2,{id:"massage_man-keep-calm-and-deal-with-quotas",children:["\ud83d\udc86\u200d\u2642\ufe0f","\xa0 Keep calm and deal with quotas!"]}),"\n",(0,r.jsxs)(t.p,{children:["As explained above, if the rate limit will be exceeded you'll receive a ",(0,r.jsx)(t.em,{children:"429 response"})," to your requests. ",(0,r.jsx)(t.strong,{children:"This is not a fatal error"})," and we expect you to retry the request after a short interval; if the requests will keep arriving too quickly, your requests will result in another error result, and so on."]}),"\n",(0,r.jsxs)(t.p,{children:["It is then important to gradually ",(0,r.jsx)(t.em,{children:"increase the delay between requests"})," to overcome this issue, this is usually done by applying ",(0,r.jsx)(t.strong,{children:"exponential back-off"})," to your requests."]}),"\n",(0,r.jsx)(t.p,{children:"Here you can find some code examples that you can use to introduce exponential back-off on your code:"}),"\n",(0,r.jsxs)(s.A,{groupId:"languages",children:[(0,r.jsx)(o.A,{value:"cs",label:"C#",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-cs",children:'// We apply exponential backoff to our C# SDK\n// https://github.com/fattureincloud/fattureincloud-csharp-sdk/\n\n// We suppose to use the http://www.thepollyproject.org\n// and the https://github.com/Polly-Contrib/Polly.Contrib.WaitAndRetry libraries\n// to implement the exponential back-off\n// to install them using the .Net cli:\n// dotnet add package Polly\n// dotnet add package Polly.Contrib.WaitAndRetry\n\nusing System;\nusing Polly;\nusing It.FattureInCloud.Sdk.Api;\nusing It.FattureInCloud.Sdk.Model;\nusing It.FattureInCloud.Sdk.Client;\nusing Polly.Contrib.WaitAndRetry;\n\nnamespace Backoff\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Configuration config = new Configuration();\n            config.AccessToken = "YOUR_ACCESS_TOKEN";\n\n            var apiInstance = new ProductsApi(config);\n            var companyId = 11;\n\n            var maxRetryAttempts = 5;\n            var pauseBetweenFailures = Backoff.ExponentialBackoff(TimeSpan.FromSeconds(2), retryCount: maxRetryAttempts);\n\n            var retryPolicy = Policy\n                .Handle<ApiException>()\n                .WaitAndRetry(pauseBetweenFailures);\n\n            retryPolicy.Execute(() =>\n            {\n                ListProductsResponse result = apiInstance.ListProducts(companyId);\n                Console.Write("\\n successful");\n                Console.Write(result);\n            });\n        }\n    }\n}\n'})})}),(0,r.jsx)(o.A,{value:"go",label:"Go",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-go",children:'// We apply exponential backoff to our Go SDK\n// https://github.com/fattureincloud/fattureincloud-go-sdk/\n\n// We suppose to use the https://pkg.go.dev/github.com/cenkalti/backoff/v4 library\n// to implement the exponential back-off\n// to install it:\n// go get github.com/cenkalti/backoff/v4\n\npackage main\n\nimport (\n\t"context"\n\t"encoding/json"\n\t"fmt"\n\t"os"\n\n\tbackoff "github.com/cenkalti/backoff/v4"\n\tfattureincloudapi "github.com/fattureincloud/fattureincloud-go-sdk/v2/api"\n)\n\nvar (\n\tcompanyId     = int32(2)\n\tauth          = context.WithValue(context.Background(), fattureincloudapi.ContextAccessToken, "YOUR_ACCESS_TOKEN")\n\tconfiguration = fattureincloudapi.NewConfiguration()\n\tapiClient     = fattureincloudapi.NewAPIClient(configuration)\n)\n\nfunc main() {\n\toperation := func() error {\n\t\tresp, _, err := apiClient.ProductsAPI.ListProducts(auth, companyId).Execute()\n\t\tif resp != nil {\n\t\t\tjson.NewEncoder(os.Stdout).Encode(resp)\n\t\t} else {\n\t\t\tfmt.Println(err)\n\t\t}\n\t\treturn err\n\t}\n\terr := backoff.Retry(operation, backoff.NewExponentialBackOff())\n\tif err != nil {\n\t\tfmt.Fprintf(os.Stderr, "Error %v\\n", err)\n\t\treturn\n\t}\n}\n'})})}),(0,r.jsx)(o.A,{value:"java",label:"Java",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'// We apply exponential backoff to our Java SDK\n// https://github.com/fattureincloud/fattureincloud-java-sdk/\n\n// We suppose to use the https://resilience4j.readme.io library to implement the exponential back-off\n// to install it see: https://search.maven.org/artifact/io.github.resilience4j/resilience4j-retry/1.7.1/jar\n\nimport io.github.resilience4j.core.IntervalFunction;\nimport io.github.resilience4j.retry.Retry;\nimport io.github.resilience4j.retry.RetryConfig;\nimport io.github.resilience4j.retry.RetryRegistry;\nimport io.vavr.CheckedFunction0;\nimport it.fattureincloud.sdk.ApiClient;\nimport it.fattureincloud.sdk.ApiException;\nimport it.fattureincloud.sdk.Configuration;\nimport it.fattureincloud.sdk.api.ProductsApi;\nimport it.fattureincloud.sdk.auth.OAuth;\nimport it.fattureincloud.sdk.model.ListProductsResponse;\n\npublic class Application {\n\n    public static void main(String[] args) throws Throwable {\n        ApiClient defaultClient = Configuration.getDefaultApiClient();\n        defaultClient.setBasePath("https://api-v2.fattureincloud.it");\n\n        OAuth OAuth2AuthenticationCodeFlow = (OAuth) defaultClient.getAuthentication("OAuth2AuthenticationCodeFlow");\n        OAuth2AuthenticationCodeFlow.setAccessToken("a/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWYiOiJoMWJVQWJiVmpDT3ZqWmliYXlhOGMzcEQ2aEVEeENPcSIsImV4cCI6MTY0MjA4NDgzNH0.mBOAhimqtRV6WurlfVWNj9Sq7zOBZvGqSzV1swG0AN4");\n\n        RetryConfig config = RetryConfig.custom()\n                .maxAttempts(10)\n                .retryExceptions(ApiException.class)\n                .intervalFunction(IntervalFunction.ofExponentialBackoff(1000, 2))\n                .build();\n\n        RetryRegistry registry = RetryRegistry.of(config);\n        Retry retry = registry.retry("listProducts", config);\n\n        Retry.EventPublisher publisher = retry.getEventPublisher();\n        publisher.onRetry(event -> System.out.println(event.toString()));\n\n        ProductsApi apiInstance = new ProductsApi(defaultClient);\n\n        CheckedFunction0<ListProductsResponse> retryingListSuppliers =\n           Retry.decorateCheckedSupplier(retry,\n               () -> apiInstance.listProducts(2, null, null, null, null, null));\n\n        System.out.println(retryingListSuppliers.apply().getData());\n    }\n}\n'})})}),(0,r.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'// We apply exponential backoff to our JavaScript SDK\n// https://github.com/fattureincloud/fattureincloud-js-sdk/\n\nlet defaultClient = fattureInCloudSdk.ApiClient.instance;\nlet OAuth2AuthenticationCodeFlow =\n  defaultClient.authentications["OAuth2AuthenticationCodeFlow"];\nOAuth2AuthenticationCodeFlow.accessToken = "YOUR_ACCESS_TOKEN";\n\nlet productsApiInstance = new fattureInCloudSdk.ProductsApi();\n\nvar companyId = 16;\nvar opts = {};\n\nconst delay = (retryCount) =>\n  new Promise((resolve) => setTimeout(resolve, 2 ** retryCount * 1000));\nconst getProd = async (retryCount = 0, lastError = null) => {\n  if (retryCount > 20) throw new Error(lastError);\n  try {\n    return await productsApiInstance.listProducts(companyId, opts);\n  } catch (e) {\n    await delay(retryCount);\n    return getProd(retryCount + 1, e);\n  }\n};\n\nconsole.log(await getProd());\n'})})}),(0,r.jsx)(o.A,{value:"php",label:"PHP",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-php",children:"// We apply exponential backoff to our PHP SDK\n// https://github.com/fattureincloud/fattureincloud-php-sdk/\n\n// We suppose to use the https://github.com/stechstudio/backoff library\n// to implement the exponential back-off\n// to install: composer require stechstudio/backoff\n\n$backoff = new Backoff(10, 'exponential', 10000, true);\n\n$accessToken = \"YOUR_ACCESS_TOKEN\";\n$config = Configuration::getDefaultConfiguration()->setAccessToken($accessToken);\n$service = new UserApi(new Client(), $config);\n\n$result = $backoff->run(function() {\n  return $this->service->listUserCompanies();\n});\nreturn $result; // it contains the result of the closure\n"})})}),(0,r.jsx)(o.A,{value:"py",label:"Python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-py",children:'# We apply exponential backoff to our Python SDK\n# https://github.com/fattureincloud/fattureincloud-python-sdk/\n\n# We suppose to use the https://github.com/litl/backoff library to implement the exponential back-off\n# to install: pip install backoff\n\nimport fattureincloud_python_sdk\nfrom fattureincloud_python_sdk.api import products_api\nfrom fattureincloud_python_sdk.exceptions import ApiException\nimport backoff\nimport collections\ncollections.Callable = collections.abc.Callable # needed if you are using python > 3.10\n\n@backoff.on_exception(backoff.expo, ApiException, max_tries=10)\ndef get_products(configuration, company_id):\n        with fattureincloud_python_sdk.ApiClient(configuration) as api_client:\n            products_api_instance = products_api.ProductsApi(api_client)\n            products_api_instance.list_products(company_id)\n        return\n\n\nconfiguration = fattureincloud_python_sdk.Configuration()\nconfiguration.access_token = "YOUR_ACCESS_TOKEN"\nconfiguration.retries = 0 # needed to implement custom backoff\n\ncompany_id = 11\nget_products(configuration, company_id)\n'})})}),(0,r.jsx)(o.A,{value:"rb",label:"Ruby",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rb",children:'# We apply exponential backoff to our Ruby SDK\n# https://github.com/fattureincloud/fattureincloud-ruby-sdk/\nrequire \'fattureincloud_ruby_sdk\'\n\nFattureInCloud_Ruby_Sdk.configure do |config|\n# Configure OAuth2 access token for authorization: OAuth2AuthenticationCodeFlow\nconfig.access_token = "YOUR_TOKEN"\nend\nsuppliers_api_instance = FattureInCloud_Ruby_Sdk::SuppliersApi.new\n\nretries = 0\nmax_retries = 20\ncompany_id = 2\n\nbegin\n    company_suppliers = suppliers_api_instance.list_suppliers(company_id)\n    puts company_suppliers\nrescue FattureInCloud_Ruby_Sdk::ApiError => e\n  if retries <= max_retries\n    retries += 1\n    sleep 2 ** retries\n    retry\n  else\n    raise "Giving up on the server after #{retries} retries. Got error: #{e.message}"\n  end\nend\n'})})}),(0,r.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'// We apply exponential backoff to our TypeScript SDK\n// https://github.com/fattureincloud/fattureincloud-ts-sdk/\n\nimport {\n  Configuration,\n  ProductsApi,\n} from "@fattureincloud/fattureincloud-ts-sdk";\n\nconst apiConfig = new Configuration({\n  accessToken: "YOUR_ACCESS_TOKEN",\n});\n\nlet productsApiInstance = new ProductsApi(apiConfig);\n\nvar companyId = 2;\nvar opts = {};\n\nconst delay = (retryCount: number) =>\n  new Promise((resolve) => setTimeout(resolve, 2 ** retryCount * 1000));\nconst getProd: any = async (retryCount = 0, lastError?: string) => {\n  if (retryCount > 20) throw new Error(lastError);\n  try {\n    return await productsApiInstance.listProducts(companyId);\n  } catch (e: any) {\n    await delay(retryCount);\n    return getProd(++retryCount, e.message);\n  }\n};\n\nconsole.log(await getProd());\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Alternatively, you can use the ",(0,r.jsx)(t.em,{children:"Retry-After"})," header to wait the right amount of time before sending your request again."]}),"\n",(0,r.jsxs)(t.h2,{id:"books-additional-resources",children:["\ud83d\udcda","\xa0 Additional Resources"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://dev.to/satrobit/rate-limiting-using-the-fixed-window-algorithm-2hgm",children:"Rate limiting using the Fixed Window algorithm"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://dev.to/satrobit/rate-limiting-using-the-sliding-window-algorithm-5fjn",children:"Rate limiting using the Sliding Window algorithm"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Exponential_backoff",children:"Exponential Backoff"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://aws.amazon.com/it/blogs/architecture/exponential-backoff-and-jitter/",children:"Exponential Backoff And Jitter"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.baeldung.com/resilience4j-backoff-jitter",children:"Better Retries with Exponential Backoff and Jitter for Java"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After",children:"Retry-After Header"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403",children:"403 Forbidden"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429",children:"429 Too Many Requests"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://beam.apache.org/documentation/programming-guide/#windowing",children:"Windowing examples in the Apache Beam documentation"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://reflectoring.io/retry-with-resilience4j/",children:"Retry with resilience4j"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var i=n(34164);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var i=n(96540),r=n(34164),a=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(70679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:r}}=e;return{value:t,label:n,attributes:i,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),y=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function x(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==i&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,b.jsx)(x,{...t,...e}),(0,b.jsx)(j,{...t,...e})]})}function k(e){const t=(0,g.A)();return(0,b.jsx)(v,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var i=n(96540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);