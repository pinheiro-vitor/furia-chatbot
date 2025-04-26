import React from "react";

const HomeBanner = ({ onChatClick, onGamesClick }: { onChatClick: () => void; onGamesClick: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
    <img src="/images/furia-logo.png" alt="FURIA Logo" className="w-28 mb-4" />
    <h1 className="text-5xl font-bold text-white mb-2">
      FURIA <span className="text-gray-400">NATION</span>
    </h1>
    <p className="text-lg text-gray-200 mb-6 max-w-xl">
      Conecte-se com a comunidade FURIA e acompanhe seu time favorito de CS:GO em tempo real
    </p>
    <div className="flex gap-4 justify-center mt-2">
      <button
        onClick={onChatClick}
        className="flex items-center gap-2 px-6 py-2 rounded bg-gray-800 text-white font-semibold hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[#bfc1c7] transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bfc1c7" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        Acessar Chat
      </button>
      <button
        onClick={onGamesClick}
        className="flex items-center gap-2 px-6 py-2 rounded bg-gray-700 text-gray-300 font-semibold hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-[#bfc1c7] transition"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#bfc1c7" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        Próximos Jogos
      </button>
    </div>
  </div>
);

export default HomeBanner;
