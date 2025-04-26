import React from "react";

const players = [
  {
    name: "Fallen",
    role: "IGL",
    img: "/images/fallen.png",
    rating: 1.05,
    dpr: 0.61,
    kast: "71.6%",
    impact: 1.07,
    adr: 70.5,
    kpr: 0.68,
  },
  {
    name: "KSCERATO",
    role: "Lurker",
    img: "/images/kscerato.png",
    rating: 1.19,
    dpr: 0.58,
    kast: "75.0%",
    impact: 1.12,
    adr: 79.9,
    kpr: 0.73,
  },
  {
    name: "yuurih",
    role: "Rifler",
    img: "/images/yuurih.png",
    rating: 1.16,
    dpr: 0.64,
    kast: "73.3%",
    impact: 1.13,
    adr: 82.8,
    kpr: 0.74,
  },
  {
    name: "molodoy",
    role: "AWPer",
    img: "/images/molodoy.png",
    rating: 1.21,
    dpr: 0.60,
    kast: "73.4%",
    impact: 1.24,
    adr: 81.0,
    kpr: 0.81,
  },
  {
    name: "YEKINDAR",
    role: "Entry",
    img: "/images/yekindar.png",
    rating: 1.12,
    dpr: 0.69,
    kast: "69.0%",
    impact: 1.28,
    adr: 81.4,
    kpr: 0.73,
  },
];

const TeamHighlights = () => (
  <section className="w-full max-w-6xl mx-auto mt-16">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Destaques do Time</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
      {players.map((player, idx) => (
        <div key={idx} className="bg-[#18181b] rounded-xl p-4 flex flex-col items-center">
          <img src={player.img} alt={player.name} className="w-20 h-20 object-cover rounded-full mb-2 border-2 border-gray-600" />
          <div className="text-white font-bold text-lg mb-1">{player.name}</div>
          <span className="text-xs text-gray-400 mb-2 px-2 py-1 bg-gray-700 rounded">{player.role}</span>
          <div className="flex flex-col w-full text-xs text-gray-300 mt-2">
            <div className="flex justify-between"><span>Rating</span><span>{player.rating}</span></div>
            <div className="flex justify-between"><span>DPR</span><span>{player.dpr}</span></div>
            <div className="flex justify-between"><span>KAST</span><span>{player.kast}</span></div>
            <div className="flex justify-between"><span>Impact</span><span>{player.impact}</span></div>
            <div className="flex justify-between"><span>ADR</span><span>{player.adr}</span></div>
            <div className="flex justify-between"><span>KPR</span><span>{player.kpr}</span></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamHighlights;
