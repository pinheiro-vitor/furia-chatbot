(()=>{var e={};e.id=276,e.ids=[276],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2916:(e,a,o)=>{"use strict";o.r(a),o.d(a,{patchFetch:()=>x,routeModule:()=>u,serverHooks:()=>g,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>p});var t={};o.r(t),o.d(t,{POST:()=>c});var s=o(6559),r=o(8088),n=o(7719);function i(e){try{let a=new Date(e);return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"}).format(a)}catch(e){return console.error("Erro ao formatar data:",e),"Data n\xe3o dispon\xedvel"}}let m={teamInfo:{id:8297,name:"FURIA",logo:"",ranking:{position:5,change:0},players:[{id:1,nickname:"arT",name:"Andrei Piovezan",image:""},{id:2,nickname:"KSCERATO",name:"Kaike Cerato",image:""},{id:3,nickname:"yuurih",name:"Yuri Santos",image:""},{id:4,nickname:"FalleN",name:"Gabriel Toledo",image:""},{id:5,nickname:"VINI",name:"Vinicius Figueiredo",image:""}]},upcomingMatches:[{id:"upcoming-1",date:Date.now()+864e5,team1:{id:8297,name:"FURIA",logo:""},team2:{id:0,name:"NAVI",logo:""},format:"BO3",event:{id:1,name:"IEM Cologne 2025"}}],recentResults:[{id:"result-1",date:Date.now()-864e5,team1:{id:8297,name:"FURIA",logo:""},team2:{id:0,name:"NAVI",logo:""},result:{team1:2,team2:0},event:{id:1,name:"IEM Cologne 2025"}}],playerStats:[{id:1,name:"Andrei Piovezan",nickname:"arT",maps:145,kdRatio:1.08,rating:1.15,headshots:49.2},{id:2,name:"Kaike Cerato",nickname:"KSCERATO",maps:152,kdRatio:1.28,rating:1.31,headshots:53.5},{id:3,name:"Yuri Santos",nickname:"yuurih",maps:148,kdRatio:1.21,rating:1.25,headshots:52.1},{id:4,name:"Gabriel Toledo",nickname:"FalleN",maps:138,kdRatio:1.12,rating:1.18,headshots:45.8},{id:5,name:"Vinicius Figueiredo",nickname:"VINI",maps:132,kdRatio:1.09,rating:1.14,headshots:48.3}]};async function d(e){let a=e.toLowerCase().trim();try{let e;console.log(`Processando comando: ${a}`);try{let a=await fetch("http://localhost:3000/api/hltv",{method:"GET",headers:{"Cache-Control":"no-cache"}});if(!a.ok)throw console.warn(`Resposta n\xe3o-OK do HLTV API: ${a.status}`),Error(`Falha ao buscar dados: ${a.status}`);e=await a.json(),console.log("Dados obtidos com sucesso do HLTV API")}catch(a){console.error("Erro ao buscar dados do HLTV:",a),console.log("Usando dados de fallback"),e=m}if("resultado"===a){console.log("Processando comando 'resultado'");let a=e?.recentResults||m.recentResults,o=a?.[0];if(!o)return"N\xe3o encontrei informa\xe7\xf5es sobre o \xfaltimo jogo da FURIA.";let t=o.team1||{id:8297,name:"FURIA"},s=o.team2||{id:0,name:"Advers\xe1rio"},r=o.result||{team1:0,team2:0},n=8297===t.id||"FURIA"===t.name,d=n?s:t,c=n?r.team1:r.team2,u=n?r.team2:r.team1;return`
**\xdaltimo Resultado da FURIA:**

🏆 **Evento:** ${o.event?.name||"Torneio"}
📅 **Data:** ${i(o.date)}
🆚 **Advers\xe1rio:** ${d?.name||"Advers\xe1rio"}
🔢 **Placar:** FURIA ${c||0} x ${u||0} ${d?.name||"Advers\xe1rio"}
📊 **Resultado:** ${(c>u?"vit\xf3ria":"derrota").toUpperCase()} para a FURIA!

${c>u?"Mais uma vit\xf3ria para nossa equipe! \uD83D\uDD25":"Infelizmente n\xe3o conseguimos a vit\xf3ria dessa vez, mas o time segue forte! \uD83D\uDCAA"}
`}if("agenda"===a){console.log("Processando comando 'agenda'");let a=e?.upcomingMatches||m.upcomingMatches;if(!a||0===a.length)return"N\xe3o h\xe1 jogos agendados para a FURIA no momento.";let o="**Pr\xf3ximos jogos da FURIA:**\n\n";return a.forEach((e,a)=>{if(!e)return;let t=e.team1||{id:8297,name:"FURIA"},s=e.team2||{id:0,name:"TBD"},r=8297===t.id||"FURIA"===t.name?s:t;o+=`**Jogo ${a+1}:**
🏆 **Evento:** ${e.event?.name||"Torneio"}
📅 **Data:** ${i(e.date)}
🆚 **Advers\xe1rio:** ${r?.name||"TBD"}
📝 **Formato:** ${e.format||"BO3"}

`}),o+="Vamos torcer juntos pela FURIA! \uD83D\uDD25"}if("estat\xedsticas"===a||"estatisticas"===a){console.log("Processando comando 'estat\xedsticas'");let a=e?.playerStats||m.playerStats;if(!a||0===a.length)return"N\xe3o encontrei estat\xedsticas dos jogadores da FURIA.";let o="**Estat\xedsticas dos jogadores da FURIA:**\n\n";return a.forEach(e=>{e&&(o+=`**${e.nickname||"Jogador"}** (${e.name||"Nome"}):
📊 **Rating:** ${e.rating?.toFixed(2)||"N/A"}
🔫 **K/D:** ${e.kdRatio?.toFixed(2)||"N/A"}
🎯 **HS%:** ${e.headshots?.toFixed(1)||"N/A"}%
🗺️ **Mapas jogados:** ${e.maps||0}

`)}),o}else if("ranking"===a){console.log("Processando comando 'ranking'");let a=e?.teamInfo||m.teamInfo,o=a?.ranking||{position:5,change:0},t=`**Ranking Mundial da FURIA:**

`;t+=`🏆 **Posi\xe7\xe3o atual:** #${o.position||"?"}
`,o.change>0?t+=`📈 **Varia\xe7\xe3o:** Subiu ${o.change} posi\xe7\xe3o(\xf5es)

`:o.change<0?t+=`📉 **Varia\xe7\xe3o:** Caiu ${Math.abs(o.change)} posi\xe7\xe3o(\xf5es)

`:t+=`📊 **Varia\xe7\xe3o:** Manteve a posi\xe7\xe3o

`;let s=e?.recentResults||m.recentResults,r=s?.length||0;if(r>0){let e=s.filter(e=>{if(!e||!e.result)return!1;let a=e.team1||{id:0,name:""};return 8297===a.id||"FURIA"===a.name?(e.result.team1||0)>(e.result.team2||0):(e.result.team2||0)>(e.result.team1||0)}).length;t+=`📈 **Win Rate:** ${(e/r*100).toFixed(1)}%
🗺️ **Mapas jogados:** ${r}
✅ **Vit\xf3rias:** ${e}
❌ **Derrotas:** ${r-e}

`}return t+="A FURIA est\xe1 sempre buscando subir no ranking! \uD83D\uDE80"}return""}catch(e){return console.error("Erro ao processar comando:",e),"Desculpe, ocorreu um erro ao processar seu comando. Tente novamente mais tarde."}}async function c(e){try{let{messages:a}=await e.json(),o=a[a.length-1];if(o&&"user"===o.role)try{let e=await d(o.content);if(e)return console.log("Comando processado com sucesso, enviando resposta"),streamText({model:openai("gpt-4o"),messages:[{role:"system",content:"Voc\xea \xe9 um assistente que apenas formata e transmite a mensagem fornecida sem alter\xe1-la."},{role:"user",content:e}]}).toDataStreamResponse()}catch(e){return console.error("Erro ao processar comando:",e),streamText({model:openai("gpt-4o"),messages:[{role:"system",content:"Voc\xea \xe9 um assistente que apenas transmite a mensagem de erro fornecida."},{role:"user",content:"Desculpe, tive um problema ao processar seu comando. Pode tentar novamente?"}]}).toDataStreamResponse()}let t="";try{let e=await fetch("http://localhost:3000/api/hltv",{method:"GET",headers:{"Cache-Control":"no-cache"}});if(e.ok){let a=await e.json();t=`Voc\xea tem acesso aos seguintes dados do time:
${JSON.stringify(a,null,2)}`}else t=`Voc\xea tem acesso aos seguintes dados do time:
${JSON.stringify(m,null,2)}`}catch(e){console.error("Erro ao buscar dados para o contexto do sistema:",e),t=`Voc\xea tem acesso aos seguintes dados do time:
${JSON.stringify(m,null,2)}`}return streamText({model:openai("gpt-4o"),system:`Voc\xea \xe9 o chatbot oficial da FURIA Esports, focado no time de CS. 
      Seja amig\xe1vel, entusiasmado e use uma linguagem informal, como um verdadeiro f\xe3 do time.
      Ocasionalmente use g\xedrias de CS como "clutch", "ace", "eco", etc.
      
      ${t}
      
      Lembre o usu\xe1rio que ele pode usar os seguintes comandos:
      - Digite "resultado" para obter informa\xe7\xf5es sobre o \xfaltimo jogo da FURIA
      - Digite "agenda" para ver os pr\xf3ximos jogos (data, advers\xe1rio, campeonato)
      - Digite "estat\xedsticas" para ver as estat\xedsticas dos jogadores
      - Digite "ranking" para saber a posi\xe7\xe3o atual da FURIA no ranking mundial
      
      Se perguntarem sobre dados que voc\xea n\xe3o tem, diga que vai verificar com a equipe e trazer essa informa\xe7\xe3o em breve.
      Sempre tente promover o time e falar positivamente sobre os jogadores.
      Use emojis ocasionalmente para tornar a conversa mais din\xe2mica.`,messages:a}).toDataStreamResponse()}catch(a){console.error("Erro na API de chat:",a);try{let{messages:a}=await e.json();return streamText({model:openai("gpt-4o"),system:`Voc\xea \xe9 o chatbot oficial da FURIA Esports, focado no time de CS.
        Seja amig\xe1vel, entusiasmado e use uma linguagem informal, como um verdadeiro f\xe3 do time.
        
        No momento estamos com dificuldades t\xe9cnicas para acessar os dados mais recentes do time.
        
        Lembre o usu\xe1rio que ele pode usar os seguintes comandos:
        - Digite "resultado" para obter informa\xe7\xf5es sobre o \xfaltimo jogo da FURIA
        - Digite "agenda" para ver os pr\xf3ximos jogos (data, advers\xe1rio, campeonato)
        - Digite "estat\xedsticas" para ver as estat\xedsticas dos jogadores
        - Digite "ranking" para saber a posi\xe7\xe3o atual da FURIA no ranking mundial
        
        Se perguntarem sobre estat\xedsticas espec\xedficas ou jogos recentes, explique que o sistema de dados est\xe1 em manuten\xe7\xe3o
        e que voc\xea ter\xe1 essas informa\xe7\xf5es em breve.
        
        Voc\xea ainda pode falar sobre a hist\xf3ria do time, jogadores conhecidos como arT, KSCERATO, yuurih, etc.
        Sempre tente promover o time e falar positivamente sobre os jogadores.
        Use emojis ocasionalmente para tornar a conversa mais din\xe2mica.`,messages:a||[]}).toDataStreamResponse()}catch(e){return console.error("Erro no fallback:",e),new Response(JSON.stringify({error:"Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente mais tarde."}),{status:500})}}}let u=new s.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"C:\\Users\\vitor\\OneDrive\\\xc1rea de Trabalho\\furia-chatbot\\app\\api\\chat\\route.ts",nextConfigOutput:"",userland:t}),{workAsyncStorage:l,workUnitAsyncStorage:p,serverHooks:g}=u;function x(){return(0,n.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:p})}},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},6487:()=>{},6559:(e,a,o)=>{"use strict";e.exports=o(4870)},8335:()=>{},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")}};var a=require("../../../webpack-runtime.js");a.C(e);var o=e=>a(a.s=e),t=a.X(0,[719],()=>o(2916));module.exports=t})();