import React from "react";

const matches = [
  {
    event: "PGL Bucharest 2025",
    teamA: "FURIA",
    teamB: "Complexity",
    imgA: "/images/furia-icon.png",
    imgB: "https://img-cdn.hltv.org/teamlogo/HP3QlPseFLIDHNmZjeyA9A.png?ixlib=java-2.1.0&w=50&s=1501bcedcd47063f56d6611756d1b80a",
    date: "Amanhã",
    time: "19:00",
  },
  {
    event: "PGL Bucharest 2025",
    teamA: "FURIA",
    teamB: "Virtus.pro",
    imgA: "/images/furia-icon.png",
    imgB: "https://img-cdn.hltv.org/teamlogo/yZ6Bpuui1rW3jocXQ68XgZ.svg?ixlib=java-2.1.0&s=f39be1d3e7baf30a4e7f0b1216720875",
    date: "Sexta-feira",
    time: "15:30",
  },
  {
    event: "PGL Bucharest 2025",
    teamA: "FURIA",
    teamB: "The MongolZ",
    imgA: "/images/furia-icon.png",
    imgB: "https://img-cdn.hltv.org/teamlogo/bRk2sh_tSTO6fq1GLhgcal.png?ixlib=java-2.1.0&w=50&s=8b08e53858eb817852ae74b30a30151d",
    date: "Domingo",
    time: "13:00",
  },
];

const UpcomingMatches = () => (
  <section className="w-full max-w-6xl mx-auto mt-16">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Próximos Jogos</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {matches.map((match, idx) => (
        <div key={idx} className="bg-[#18181b] rounded-xl p-6 flex flex-col items-center">
          <div className="text-gray-300 font-semibold mb-2">{match.event}</div>
          <div className="flex items-center gap-2 mb-2">
            <img src={match.imgA} alt={match.teamA} className="w-8 h-8 object-cover rounded-full" />
            <span className="text-white font-bold">{match.teamA}</span>
            <span className="text-gray-400 mx-2">VS</span>
            <span className="text-white font-bold">{match.teamB}</span>
            <img src={match.imgB} alt={match.teamB} className="w-8 h-8 object-cover rounded-full" />
          </div>
          <div className="flex justify-between w-full text-sm text-gray-400 mt-2">
            <span className="flex items-center gap-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bfc1c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
              {match.date}
            </span>
            <span className="flex items-center gap-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#bfc1c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              {match.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default UpcomingMatches;
