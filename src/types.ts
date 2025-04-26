// Tipos compartilhados para o projeto Furia Chatbot

export interface PlayerStats {
  name: string;
  image: string;
  kd: number;
  rating: number;
  maps: number;
}

export interface HLTDData {
  nextMatch: {
    team1: string;
    team2: string;
    event: string;
    date: string;
  };
  recentResults: Array<{
    team1: string;
    team2: string;
    score: string;
    event: string;
    date: string;
    vodLink: string;
  }>;
  players: PlayerStats[];
  news: Array<{
    title: string;
    date: string;
  }>;
  storeMessage: string;
}
