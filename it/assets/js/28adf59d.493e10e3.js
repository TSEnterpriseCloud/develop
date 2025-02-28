"use strict";(self.webpackChunktse_dev_api=self.webpackChunktse_dev_api||[]).push([[42738],{55768:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"basics/status-code","title":"Codici di Stato *","description":"Codici stato http usati in TSE","source":"@site/i18n/it/docusaurus-plugin-content-docs/version-1.0.1/basics/status-code.md","sourceDirName":"basics","slug":"/basics/status-code","permalink":"/it/docs/basics/status-code","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"status","permalink":"/it/docs/tags/status"},{"inline":true,"label":"http","permalink":"/it/docs/tags/http"},{"inline":true,"label":"code","permalink":"/it/docs/tags/code"},{"inline":true,"label":"support","permalink":"/it/docs/tags/support"},{"inline":true,"label":"200","permalink":"/it/docs/tags/200"},{"inline":true,"label":"201","permalink":"/it/docs/tags/201"},{"inline":true,"label":"202","permalink":"/it/docs/tags/202"},{"inline":true,"label":"400","permalink":"/it/docs/tags/400"},{"inline":true,"label":"401","permalink":"/it/docs/tags/401"},{"inline":true,"label":"404","permalink":"/it/docs/tags/404"},{"inline":true,"label":"405","permalink":"/it/docs/tags/405"},{"inline":true,"label":"409","permalink":"/it/docs/tags/409"},{"inline":true,"label":"500","permalink":"/it/docs/tags/500"}],"version":"1.0.1","lastUpdatedAt":1740656035000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Codici di Stato *","slug":"status-code","description":"Codici stato http usati in TSE","tags":["status","http","code","support","200","201","202","400","401","404","405","409","500"]},"sidebar":"tutorialSidebar","previous":{"title":"[D]elete *","permalink":"/it/docs/basics/crud/delete"},"next":{"title":"Api Reference","permalink":"/it/docs/reference/api-root"}}');var n=t(74848),o=t(28453);const r={sidebar_position:2,title:"Codici di Stato *",slug:"status-code",description:"Codici stato http usati in TSE",tags:["status","http","code","support",200,201,202,400,401,404,405,409,500]},s="Codici di Stato HTTP",l={},c=[{value:"Le Cinque Principali Categorie di Codici di Stato",id:"le-cinque-principali-categorie-di-codici-di-stato",level:2},{value:"1xx: Informativo",id:"1xx-informativo",level:3},{value:"2xx: Successo",id:"2xx-successo",level:3},{value:"3xx: Reindirizzamento",id:"3xx-reindirizzamento",level:3},{value:"4xx: Errore del Client",id:"4xx-errore-del-client",level:3},{value:"5xx: Errore del Server",id:"5xx-errore-del-server",level:3},{value:"Codici di Stato della WebAPI di TeamSystem Enterprise",id:"codici-di-stato-della-webapi-di-teamsystem-enterprise",level:2},{value:"200: Successo",id:"200-successo",level:3},{value:"201: Creato",id:"201-creato",level:3},{value:"202: Accettato",id:"202-accettato",level:3},{value:"400: Richiesta Errata",id:"400-richiesta-errata",level:3},{value:"401: Non Autorizzato",id:"401-non-autorizzato",level:3},{value:"403: Vietato",id:"403-vietato",level:3},{value:"404: Non Trovato",id:"404-non-trovato",level:3},{value:"405: Metodo Non Consentito",id:"405-metodo-non-consentito",level:3},{value:"409: Conflitto",id:"409-conflitto",level:3},{value:"500: Errore Interno del Server",id:"500-errore-interno-del-server",level:3}];function d(e){const i={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"codici-di-stato-http",children:"Codici di Stato HTTP"})}),"\n",(0,n.jsx)(i.p,{children:"Oltre ai metodi HTTP, i codici di stato HTTP della risposta sono particolarmente importanti, poich\xe9 vengono utilizzati per identificare il successo o il fallimento di un'operazione."}),"\n",(0,n.jsx)(i.h2,{id:"le-cinque-principali-categorie-di-codici-di-stato",children:"Le Cinque Principali Categorie di Codici di Stato"}),"\n",(0,n.jsx)(i.p,{children:"Le cinque principali categorie di codici di stato, identificate dalla prima cifra del codice, sono:"}),"\n",(0,n.jsx)(i.h3,{id:"1xx-informativo",children:"1xx: Informativo"}),"\n",(0,n.jsx)(i.p,{children:"Il server informa il client che la richiesta \xe8 stata ricevuta e il processo \xe8 in corso."}),"\n",(0,n.jsx)(i.h3,{id:"2xx-successo",children:"2xx: Successo"}),"\n",(0,n.jsx)(i.p,{children:"L'operazione \xe8 stata completata con successo. Il server ha ricevuto, elaborato e accettato l'input del client, e l'utente vede tipicamente la pagina web o la risorsa richiesta."}),"\n",(0,n.jsx)(i.h3,{id:"3xx-reindirizzamento",children:"3xx: Reindirizzamento"}),"\n",(0,n.jsx)(i.p,{children:"Il server riceve la richiesta, ma sono necessarie ulteriori azioni e passaggi sul lato client per completarla correttamente, poich\xe9 ci sono inoltri e reindirizzamenti."}),"\n",(0,n.jsx)(i.h3,{id:"4xx-errore-del-client",children:"4xx: Errore del Client"}),"\n",(0,n.jsx)(i.p,{children:"Questa \xe8 la prima categoria di errori: la richiesta non pu\xf2 essere completata a causa di problemi lato client, come sintassi errata o una pagina rimossa. L'utente vede una pagina HTML automatica che indica l'errore."}),"\n",(0,n.jsx)(i.h3,{id:"5xx-errore-del-server",children:"5xx: Errore del Server"}),"\n",(0,n.jsx)(i.p,{children:"Questo tipo di codice indica problemi lato server che impediscono il completamento con successo di una richiesta apparentemente valida. L'errore del server pu\xf2 essere temporaneo o permanente, e l'utente riceve anche una pagina HTML che indica il problema."}),"\n",(0,n.jsx)(i.h2,{id:"codici-di-stato-della-webapi-di-teamsystem-enterprise",children:"Codici di Stato della WebAPI di TeamSystem Enterprise"}),"\n",(0,n.jsx)(i.p,{children:"I codici gestiti nelle operazioni standard nella WebAPI di TSEnterprise sono:"}),"\n",(0,n.jsx)(i.h3,{id:"200-successo",children:"200: Successo"}),"\n",(0,n.jsx)(i.p,{children:"Operazione riuscita; questa \xe8 la risposta standard e pi\xf9 comune nel caso di un'operazione eseguita correttamente"}),"\n",(0,n.jsx)(i.h3,{id:"201-creato",children:"201: Creato"}),"\n",(0,n.jsx)(i.p,{children:"Risorsa creata; utilizzato nel metodo POST per creare una NUOVA risorsa"}),"\n",(0,n.jsx)(i.h3,{id:"202-accettato",children:"202: Accettato"}),"\n",(0,n.jsx)(i.p,{children:"Richiesta accettata; utilizzato, ad esempio, quando si utilizzano servizi asincroni e indica che la richiesta \xe8 stata presa in carico"}),"\n",(0,n.jsx)(i.h3,{id:"400-richiesta-errata",children:"400: Richiesta Errata"}),"\n",(0,n.jsx)(i.p,{children:"Operazione fallita; questa \xe8 la risposta standard e pi\xf9 comune nel caso di errori durante l'esecuzione dell'operazione"}),"\n",(0,n.jsx)(i.h3,{id:"401-non-autorizzato",children:"401: Non Autorizzato"}),"\n",(0,n.jsx)(i.p,{children:"Utilizzato esclusivamente in caso di errori di autenticazione"}),"\n",(0,n.jsx)(i.h3,{id:"403-vietato",children:"403: Vietato"}),"\n",(0,n.jsx)(i.p,{children:"In caso di errori di permesso/autorizzazione"}),"\n",(0,n.jsx)(i.h3,{id:"404-non-trovato",children:"404: Non Trovato"}),"\n",(0,n.jsx)(i.p,{children:"Se la risorsa non viene trovata (ad esempio, se effettuo una GET su una risorsa specificando un id inesistente)"}),"\n",(0,n.jsx)(i.h3,{id:"405-metodo-non-consentito",children:"405: Metodo Non Consentito"}),"\n",(0,n.jsx)(i.p,{children:"In caso di metodi HTTP non supportati (ad esempio, un PUT su una risorsa che supporta solo operazioni di lettura)"}),"\n",(0,n.jsx)(i.h3,{id:"409-conflitto",children:"409: Conflitto"}),"\n",(0,n.jsx)(i.p,{children:"principalmente utilizzato in due casi:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"per indicare il fallimento di un'operazione di \u201cCreazione,\u201d \u201cAggiornamento,\u201d o \u201cEliminazione\u201d a causa della logica di business (ad esempio, errori di validazione dell'entit\xe0 o avvisi di business)"}),"\n",(0,n.jsx)(i.li,{children:"per indicare una risorsa NON VALIDA nelle operazioni di \u201cValidazione\u201d e \u201cValidazionePropriet\xe0\u201d"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"500-errore-interno-del-server",children:"500: Errore Interno del Server"}),"\n",(0,n.jsx)(i.p,{children:"In caso di errori non gestiti durante l'esecuzione della richiesta"})]})}function u(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>s});var a=t(96540);const n={},o=a.createContext(n);function r(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(o.Provider,{value:i},e.children)}}}]);