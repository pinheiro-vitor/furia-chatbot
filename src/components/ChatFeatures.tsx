import React from "react";

const features = [
  {
    title: "Atualizações em Tempo Real",
    desc: "Receba atualizações ao vivo sobre partidas, pontuações e eventos importantes.",
    icon: (
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#23232b] mb-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bfc1c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2v6M7 2v6"/><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M16 13h-4v-4"/></svg>
      </span>
    ),
  },
  {
    title: "Comunidade de Fãs",
    desc: "Conecte-se com outros fãs da FURIA e compartilhe sua paixão pelo time.",
    icon: (
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#23232b] mb-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bfc1c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </span>
    ),
  },
  {
    title: "Chat Inteligente",
    desc: "Faça perguntas sobre o time, jogadores e estatísticas para nosso assistente virtual.",
    icon: (
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#23232b] mb-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bfc1c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/></svg>
      </span>
    ),
  },
];

const ChatFeatures = () => (
  <section className="w-full max-w-6xl mx-auto mt-16">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Recursos do Chat FURIA</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((f, idx) => (
        <div key={idx} className="bg-[#18181b] rounded-xl p-8 flex flex-col items-center text-center">
          <div className="text-4xl mb-4">{f.icon}</div>
          <h3 className="text-xl font-bold text-gray-200 mb-2">{f.title}</h3>
          <p className="text-gray-400">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ChatFeatures;
