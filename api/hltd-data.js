// API Express simulando o endpoint HLTV Data
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

import { mockData } from './mockData.js';

app.get('/api/hltd-data', (req, res) => {
  res.json(mockData);
});

app.post('/api/hltd-data', (req, res) => {
  const { data_type } = req.body;
  let response = {};
  const now = new Date();

  switch (data_type) {
    case 'nextMatch':
      response = { nextMatch: mockData.nextMatch };
      break;
    case 'recentResults':
      response = { recentResults: mockData.recentResults };
      break;
    case 'players':
      response = { players: mockData.players };
      break;
    case 'news':
      response = { news: mockData.news };
      break;
    case 'store':
      response = { storeMessage: mockData.storeMessage };
      break;
    default:
      response = { error: 'Tipo de dado não suportado.' };
  }

  res.json(response);
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`API HLTV Data mock rodando em http://localhost:${PORT}/api/hltd-data`);
});
