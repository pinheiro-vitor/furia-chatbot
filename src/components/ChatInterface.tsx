import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, ShoppingCart, Users, BarChart2, AlertTriangle, ExternalLink, Video } from "lucide-react";
// import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { PlayerStats, HLTDData } from "@/types";

// Função auxiliar para formatar nomes de jogadores em HTML seguro
function formatPlayerInfo(players: PlayerStats[]): string {
  return players.map(player => {
    // Normaliza o nome para garantir que o data-player seja igual ao nome do mockData (sem tags, espaços extras, etc)
    const cleanName = player.name.trim();
    return `<span data-player="${cleanName}" tabindex="0" role="button" aria-label="Ver detalhes de ${player.name}" class="cursor-pointer underline hover:text-gray-400 text-gray-200 font-semibold transition-colors" style="outline:none;">${player.name}</span>`;
  }).join(', ');
}

// Função auxiliar para formatar respostas de acordo com o tipo
function formatHLTVResponse(data: any, type: string, playersOverride?: PlayerStats[]): string {
  switch(type) {
    case 'nextMatch':
      return `Próximo jogo: ${data.nextMatch.team1} vs ${data.nextMatch.team2} - ${data.nextMatch.event} - ${new Date(data.nextMatch.date).toLocaleString('pt-BR')}`;
    case 'recentResults':
      return data.recentResults.map((match: any) =>
        `${match.team1} ${match.score} ${match.team2} - ${match.event} - ${match.date} <a href="${match.vodLink}" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline ml-2">VOD <span aria-label='Assistir VOD' title='Assistir VOD'>🎬</span></a>`
      ).join('<br>');
    case 'players':
      // Usa o array playersOverride (do state) se fornecido, senão tenta data.players
      return `<div class='furia-bot-messages'>Jogadores: ${formatPlayerInfo(playersOverride ?? data.players ?? [])}</div>`;
    case 'news':
      return data.news.map((n: any) =>
        `${n.title} (${n.date})` +
        (n.link ? `<br><a href="${n.link}" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline">${n.link}</a>` : '')
      ).join('<br><br>');
    case 'store':
      return data.storeMessage;
    default:
      return "Desculpe, não entendi o pedido.";
  }
}

import { Trash2 } from "lucide-react";
import ChatBackButton from "./ChatBackButton";

const ChatInterface = () => {
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Array<{text: string, isBot: boolean, image?: string}>>([
    {
      text: `Olá! Eu sou o FuriaBot! Como posso ajudar você hoje?`,
      isBot: true
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [usingMockData, setUsingMockData] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerStats | null>(null);
  const [input, setInput] = useState("");
  const [players, setPlayers] = useState<PlayerStats[]>([]);

  // Carrega jogadores do backend ao montar. Se falhar, usa mockData local.
  useEffect(() => {
    fetch("http://localhost:3333/api/hltd-data")
      .then(res => res.ok ? res.json() : Promise.reject())
      .then((data: HLTDData) => {
        if (data && Array.isArray(data.players) && data.players.length > 0) {
          setPlayers(data.players);
        } else {
          setPlayers((mockData as HLTDData).players);
        }
      })
      .catch(() => {
        setPlayers((mockData as HLTDData).players);
      });
  }, []);

  // Memoiza as opções para evitar recriação a cada render
  const options = React.useMemo(() => [
    { text: "Próximos Jogos", icon: Calendar, type: 'nextMatch' },
    { text: "Resultados Recentes", icon: BarChart2, type: 'recentResults' },
    { text: "Jogadores", icon: Users, type: 'players' },
    { text: "Notícias", icon: MessageSquare, type: 'news' },
    { text: "Loja", icon: ShoppingCart, type: 'store', url: 'https://www.furia.gg' },
    { text: "Mais Informações", icon: ExternalLink, type: 'moreInfo', url: 'https://www.hltv.org/team/8297/furia' }
  ], []);

  const mockData = {
    nextMatch: {
      team1: "FURIA",
      team2: "NAVI",
      event: "IEM São Paulo 2025",
      date: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString()
    },
    recentResults: [
      {
        team1: "FURIA",
        team2: "G2",
        score: "2-1",
        event: "BLAST Premier Spring Finals 2025",
        date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
        vodLink: "https://www.youtube.com/watch?v=example1"
      }
    ],
    news: [
      {
        title: "FURIA classificada para o Major de Berlin 2025",
        date: new Date().toISOString().split('T')[0]
      }
    ],
    storeMessage: "Visite nossa loja oficial: www.furia.gg para conferir a nova coleção 2025!"
  };

  const handleOptionClick = async (option: string, type: string, url?: string, fromInput?: boolean) => {
    setLoading(true);
    if (!fromInput) {
      const userMessage = {
        text: option,
        isBot: false
      };
      setMessages(prev => [...prev, userMessage]);
    }
    
    try {
      if (type === 'store' || type === 'moreInfo') {
        toast(type === 'store' ? "Loja FURIA" : "HLTV FURIA", {
          description: type === 'store' 
            ? "Redirecionando para a loja oficial..." 
            : "Redirecionando para a página da FURIA no HLTV..."
        });
        
        setTimeout(() => {
          if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
          }
          
          setMessages(prev => [...prev, { 
            text: type === 'store' 
              ? "Visite nossa loja oficial: www.furia.gg"
              : "Mais informações sobre a FURIA no HLTV: hltv.org/team/8297/furia",
            isBot: true 
          }]);
          setLoading(false);
          setUsingMockData(false);
        }, 1500);
        return;
      }

      try {
        const response = await fetch('http://localhost:3333/api/hltd-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ data_type: type })
        });

        if (!response.ok) throw new Error('Erro na API HLTV Data');
        const data = await response.json();

        const botResponse = formatHLTVResponse(data, type, players);
        setUsingMockData(false);

        // Mostra placeholder de digitando antes de exibir resposta real
        setMessages(prev => [...prev, { text: '<span class="italic text-gray-400">FuriaBot está digitando...</span>', isBot: true }]);
        setTimeout(() => {
          setMessages(prev => {
            // Remove o placeholder
            const msgs = [...prev];
            msgs.pop();
            return [...msgs, { text: botResponse, isBot: true }];
          });
        }, 1000);
      } catch (error) {
        console.error('Error fetching HLTV data:', error);
        
        const mockResponse = formatHLTVResponse({ [type]: mockData[type] }, type, players);
        setMessages(prev => [...prev, { text: '<span class="italic text-gray-400">FuriaBot está digitando...</span>', isBot: true }]);
        setTimeout(() => {
          setMessages(prev => {
            const msgs = [...prev];
            msgs.pop();
            return [...msgs, { text: mockResponse, isBot: true }];
          });
        }, 1000);
        
        toast("Modo Simulação", {
          description: "Usando dados simulados da temporada 2025"
        });
        
        setUsingMockData(true);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      
      const fallbackResponse = formatHLTVResponse(mockData, type, players);
      setMessages(prev => [...prev, { text: '<span class="italic text-gray-400">FuriaBot está digitando...</span>', isBot: true }]);
      setTimeout(() => {
        setMessages(prev => {
          const msgs = [...prev];
          msgs.pop();
          return [...msgs, { text: fallbackResponse, isBot: true }];
        });
      }, 1000);
      setUsingMockData(true);
      
      toast("Modo Fallback", {
        description: "Usando dados simulados de emergência"
      });
    } finally {
      setLoading(false);
    }
  };

  function normalize(str: string) {
    return str.trim().toLowerCase().normalize('NFD').replace(/[‌​\u200B\u200C\u200D\u200E\u200F\u2028\u2029\uFEFF]/g, "");
  }

  const handlePlayerClick = (playerName: string) => {
    const normalized = normalize(playerName);
    const player = players.find(p => normalize(p.name) === normalized);
    if (player) {
      setSelectedPlayer(player);
    }
  };

  // Rola automaticamente para o final do chat ao adicionar uma nova mensagem
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Listener global para clicks em nomes de jogadores (pode ser melhorado usando delegation em escopos menores)
  // Delegação de evento apenas no container das mensagens do bot para evitar conflitos
  useEffect(() => {
    // Seleciona todos os containers de mensagens do bot
    const containers = document.querySelectorAll('.furia-bot-messages');
    if (!containers.length) return;
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.dataset.player) {
        handlePlayerClick(target.dataset.player);
      }
    };
    containers.forEach(container => {
      container.addEventListener('click', handleClick);
    });
    return () => {
      containers.forEach(container => {
        container.removeEventListener('click', handleClick);
      });
    };
  }, [players, messages]);

  return (
    <>
      {/* Fundo com imagem e overlay escuro */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: `linear-gradient(rgba(10,10,10,0.88), rgba(10,10,10,0.92)), url('/images/furia-adidas-header.png') center top/cover no-repeat`,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />
      <Card className="w-full max-w-4xl mx-auto h-[80vh] flex flex-col bg-[#131316] shadow-xl border border-[#23232b] relative">
        {/* Botão Voltar */}
        <div style={{ position: 'absolute', left: 0, top: 0, zIndex: 4 }}>
          <ChatBackButton />
        </div>
        {/* Botão Limpar Mensagens */}
        <button
          onClick={() => setMessages([
            {
              text: `Olá! Eu sou o FuriaBot! Como posso ajudar você hoje?`,
              isBot: true
            }
          ])}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-accent/80 hover:bg-accent/100 border border-accent text-background transition-colors shadow-md"
          title="Limpar mensagens"
          aria-label="Limpar mensagens"
          style={{zIndex: 2}}
        >
          <Trash2 className="w-4 h-4" />
        </button>
        <div className="p-4 border-b bg-black/90">
          <div className="flex justify-center items-center gap-2 mb-2">
            <img src="/images/furia-icon.png" alt="FURIA" className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-center tracking-wide text-white">FURIA Chat</h1>
          </div>
        </div>
        
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 pb-2 space-y-4">
          <div className="flex flex-col space-y-4">
            {usingMockData && (
              <Alert className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-700 dark:text-yellow-400">Modo Simulação</AlertTitle>
                <AlertDescription className="text-sm text-yellow-600">
                  Utilizando dados simulados da temporada 2025. Estes dados são fictícios e servem apenas para demonstração.
                </AlertDescription>
              </Alert>
            )}
            {messages.map((message, index) =>
  message.isBot ? (
    <div
      key={index}
      className="p-3 rounded-lg bg-muted text-foreground ml-0 mr-12"
      dangerouslySetInnerHTML={{ __html: message.text }}
    />
  ) : (
    <div
      key={index}
      className="p-3 rounded-lg bg-primary text-primary-foreground ml-12 mr-0 flex items-center gap-2"
    >

      <span>{message.text}</span>
    </div>
  )
)}
            {loading && (
              <div className="bg-muted text-foreground p-3 rounded-lg ml-0 mr-12 animate-pulse">
                Buscando informações...
              </div>
            )}
          </div>
        </div>

        {/* Campo de input para usuário dentro do Card */}
        <form
          className="flex gap-2 p-4 border-t bg-card"
          onSubmit={e => {
            e.preventDefault();
            if (!input.trim()) return;
            setMessages(prev => [...prev, { text: input, isBot: false, image: "/images/furia-icon2.png" }]);
            // Matching inteligente para acionar botões
            const normalized = input.trim().toLowerCase();
            // Palavras-chave para cada opção
            const keywords = [
              { type: 'nextMatch', words: ['próximos jogos', 'proximos jogos', 'jogo', 'partida', 'calendário', 'agenda', 'quando', 'match', 'upcoming'] },
              { type: 'recentResults', words: ['resultados', 'resultados recentes', 'placar', 'placares', 'score', 'últimos jogos', 'ultimos jogos', 'recentes', 'result', 'history'] },
              { type: 'players', words: ['jogadores', 'jogador', 'elenco', 'time', 'lineup', 'player', 'players', 'roster'] },
              { type: 'news', words: ['notícias', 'noticia', 'notícias', 'news', 'novidade', 'novidades', 'atualização', 'update'] },
              { type: 'store', words: ['loja', 'shop', 'comprar', 'store', 'merch', 'camisa', 'adidas'] },
              { type: 'moreInfo', words: ['informação', 'informações', 'info', 'site', 'hltv', 'mais', 'about', 'saiba'] },
            ];
            const match = keywords.find(k => k.words.some(w => normalized.includes(w)));
            if (match) {
              const opt = options.find(o => o.type === match.type);
              if (opt) {
                setTimeout(() => handleOptionClick(opt.text, opt.type, opt.url, true), 200);
              }
            } else {
              setTimeout(() => {
                setMessages(prev => [...prev, { text: "Mensagem recebida! (resposta simulada)", isBot: true }]);
              }, 800);
            }
            setInput("");
          }}
        >
          <input
            className="flex-1 rounded-lg border border-[#23232b] bg-[#19191d] px-3 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#6c6c7a] placeholder:text-gray-400 shadow-sm"
            type="text"
            placeholder="Envie uma mensagem..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.currentTarget.form?.requestSubmit();
              }
            }}
          />
          <Button type="submit" variant="ghost" className="px-4 py-2 text-white bg-[#23232b] hover:bg-[#23232b]/80 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </form>

        <div className="p-4 border-t bg-black/90">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {options.map((option) => (
              <Button
                key={option.text}
                variant="ghost"
                className="w-full min-w-[140px] max-w-full flex flex-col items-center gap-2 px-2 py-4 text-xs md:text-sm font-semibold rounded-xl whitespace-normal break-words bg-[#18181b] hover:bg-[#23232b] border border-[#23232b] shadow-sm"
                onClick={() => handleOptionClick(option.text, option.type, option.url)}
                disabled={loading}
                aria-label={option.text}
                title={option.text}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#23232b] mb-1">
                  <option.icon className="w-5 h-5 text-[#bfc1c7]" aria-hidden="true" />
                </span>
                <span>{option.text}</span>
              </Button>
            ))}
          </div>
        </div>
      </Card>

      <Dialog open={!!selectedPlayer} onOpenChange={() => setSelectedPlayer(null)}>
        <DialogContent className="sm:max-w-[425px]" aria-modal="true" role="dialog">
          <DialogHeader>
            <DialogTitle className="text-center">{selectedPlayer?.name}</DialogTitle>
          </DialogHeader>
          {selectedPlayer && (
            <div className="grid gap-4">
              <div className="flex justify-center">
                <img 
                  src={selectedPlayer.image}
                  alt={selectedPlayer.name}
                  className="w-40 h-40 object-cover rounded-lg"
                  tabIndex={0}
                  aria-label={`Foto do jogador ${selectedPlayer.name}`}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="font-semibold">K/D Ratio</p>
                  <p>{selectedPlayer.kd}</p>
                </div>
                <div>
                  <p className="font-semibold">Rating 2.0</p>
                  <p>{selectedPlayer.rating}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-semibold">Mapas Jogados</p>
                  <p>{selectedPlayer.maps}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatInterface;
