// Dados mockados compartilhados para uso no backend Express
export const mockData = {
  nextMatch: {
    team1: "FURIA",
    team2: "Complexity",
    event: "PGL Bucharest 2025",
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString()
  },
  recentResults: [
    {
      team1: "FURIA",
      team2: "MIBR",
      score: "2-1",
      event: "ESL Pro League Season 21",
      date: "09/03/2025",
      vodLink: "https://www.youtube.com/watch?v=JH08tTLGRd4"
    }
  ],
  players: [
    {
      name: "Fallen",
      image: "/images/fallen.png",
      kd: 1.15,
      rating: 1.18,
      maps: 156
    },
    {
      name: "yuurih",
      image: "/images/yuurih.png",
      kd: 1.25,
      rating: 1.24,
      maps: 158
    },
    {
      name: "YEKINDAR",
      image: "/images/yekindar.png",
      kd: 1.28,
      rating: 1.27,
      maps: 157
    },
    {
      name: "KSCERATO",
      image: "/images/kscerato.png",
      kd: 1.12,
      rating: 1.15,
      maps: 155
    },
    {
      name: "molodoy",
      image: "/images/molodoy.png",
      kd: 1.10,
      rating: 1.14,
      maps: 154
    }
  ],
  news: [
    {
      title: "FURIA banca skullz, adicionado YEKINDAR como substituto!",
      date: new Date().toISOString().split('T')[0],
      link: "https://www.hltv.org/news/41512/furia-bench-skullz-add-yekindar-as-stand-in"
    },
    {
      title: "FURIA assina com AWPer: molodoy.",
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      link: "https://www.hltv.org/news/41426/furia-sign-molodoy"
    }
  ],
  storeMessage: "Visite nossa loja oficial: www.furia.gg para conferir a nova coleção 2025!"
};
