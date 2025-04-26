import React, { useState } from "react";

const furiaPlayers = [
  { name: "Fallen", k: 14, d: 5, a: 4, rating: 1.87 },
  { name: "yuurih", k: 13, d: 4, a: 9, rating: 2.01 },
  { name: "KSCERATO", k: 15, d: 6, a: 5, rating: 2.13 },
  { name: "YEKINDAR", k: 9, d: 7, a: 4, rating: 1.34 },
  { name: "molodoy", k: 8, d: 5, a: 2, rating: 1.03 },
];
const enemyPlayers = [
  { name: "insani", k: 3, d: 11, a: 3, rating: 0.31 },
  { name: "saffee", k: 6, d: 14, a: 0, rating: 0.36 },
  { name: "brnz4n", k: 6, d: 12, a: 1, rating: 0.42 },
  { name: "exit", k: 4, d: 12, a: 3, rating: 0.33 },
  { name: "Lucaozy", k: 7, d: 10, a: 5, rating: 0.71 },
];

const LiveMatchStatus = () => {
  const [selectedTeam, setSelectedTeam] = useState<'furia' | 'enemy'>('furia');
  const round = 14;
  const maxRounds = 30;
  const maxTimer = 105;
  const [timer, setTimer] = useState(maxTimer);
  React.useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setTimeout(() => setTimer(maxTimer), 1000);
    }
  }, [timer]);

  const furiaScore = 13;
  const enemyScore = 1;
  const enemyName = "MIBR";
  const enemyImg = "/images/mibr.webp";

  return (
    <section className="w-full max-w-4xl mx-auto mt-12 bg-[#18181b] rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">Status da Partida Ao Vivo</h2>
      <div className="flex justify-between items-center mb-2">
        <button
          className={`flex items-center gap-2 focus:outline-none ${selectedTeam === 'furia' ? '' : 'opacity-60 hover:opacity-80'}`}
          onClick={() => setSelectedTeam('furia')}
        >
          <img src="/images/furia-logo.png" alt="FURIA" className="w-10 h-10" />
          <span className="text-white font-bold text-lg">FURIA</span>
        </button>
        <div className="flex flex-col items-center gap-1">
          {/* Badge AO VIVO piscando */}
          <span className="flex items-center gap-2 mb-1">
            <span className="relative">
              <span className="animate-pulse bg-red-600 rounded-full w-4 h-4 inline-block shadow-lg"></span>
              <span className="absolute top-0 left-0 w-4 h-4 rounded-full animate-ping bg-red-500 opacity-70"></span>
            </span>
            <span className="uppercase text-xs font-semibold text-red-400 tracking-widest">AO VIVO</span>
          </span>
          <span className="text-gray-400 text-sm">Mapa: Mirage</span>
          <span className="text-gray-500 text-xs">Round {round}/{maxRounds}</span>
        </div>
        <button
          className={`flex items-center gap-2 focus:outline-none ${selectedTeam === 'enemy' ? '' : 'opacity-60 hover:opacity-80'}`}
          onClick={() => setSelectedTeam('enemy')}
        >
          <img src={enemyImg} alt={enemyName} className="w-10 h-10 rounded-full" />
          <span className="text-white font-bold text-lg">{enemyName}</span>
        </button>
      </div>
      <div className="flex justify-between items-center mb-4 mt-2">
        <span className="text-white text-5xl font-extrabold leading-none">{furiaScore}</span>
        <div className="flex flex-col items-center w-1/2">
          {/* Barra de progresso do round */}
          <div className="w-full h-2 bg-[#23232b] rounded-full mb-1 overflow-hidden">
            <div
              className="h-2 bg-[#bfc1c7] transition-all duration-100 linear"
              style={{ width: `${(timer / 105) * 100}%` }}
            ></div>
          </div>
          <span className="text-gray-300 text-lg font-mono">{timer}s</span>
        </div>
        <span className="text-white text-5xl font-extrabold leading-none">{enemyScore}</span>
      </div>
      <table className="w-full text-base text-gray-200 mb-2 table-fixed">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="text-left w-2/6 px-2">Jogador</th>
            <th className="w-1/6 text-center px-2">K</th>
            <th className="w-1/6 text-center px-2">D</th>
            <th className="w-1/6 text-center px-2">A</th>
            <th className="w-1/6 text-center px-2">RATING</th>
          </tr>
        </thead>
        <tbody>
          {(selectedTeam === 'furia' ? furiaPlayers : enemyPlayers).map((p, idx) => (
            <tr key={p.name} className={idx % 2 === 1 ? 'bg-[#1c1c20]' : ''}>
              <td className="py-1 px-2 font-semibold text-[#bfc1c7] truncate">{p.name}</td>
              <td className="text-center px-2">{p.k}</td>
              <td className="text-center px-2">{p.d}</td>
              <td className="text-center px-2">{p.a}</td>
              <td className="text-center px-2">{p.rating.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-xs text-gray-500 text-center">Clique no logo do time para alternar a tabela de jogadores</div>
    </section>
  );
};

export default LiveMatchStatus;
