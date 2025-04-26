# FURIA Chatbot

Um chatbot moderno e responsivo para fãs de eSports, especialmente da equipe FURIA! Desenvolvido com foco em experiência do usuário, visual limpo e integração de dados em tempo real ou mockados.

## ✨ Visão Geral

O FURIA Chatbot simula um assistente virtual capaz de responder dúvidas, mostrar notícias, próximos jogos, resultados recentes e informações do elenco da FURIA. Possui animações, links clicáveis, integração com API local e design adaptado para desktop e mobile.

---

## 🚀 Instalação e Execução

### 1. Clone o repositório
```sh
git clone https://github.com/pinheiro-vitor/furia-chatbot.git
cd furia-chatbot
```

### 2. Instale as dependências
```sh
npm install
```

### 3. Rode o mock da API (opcional para testes locais)
```sh
node api/hltd-data.js
```
A API estará disponível em: [http://localhost:3333/api/hltd-data](http://localhost:3333/api/hltd-data)

### 4. Inicie o projeto
```sh
npm run dev
```
O app estará disponível em [http://localhost:5173](http://localhost:5173) (ou porta definida pelo Vite/Next).

---

## 🖥️ Estrutura do Projeto

```
furia-chatbot/
├── api/                # Mock API e dados simulados
├── public/
│   └── images/         # Logos, avatares e banners
├── src/
│   ├── components/     # Componentes React (Chat, UI, etc)
│   ├── pages/          # Páginas principais
│   ├── index.css       # Estilos globais
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

### Imagens Disponíveis
- `fallen.png`, `furia-adidas-banner.png`, `furia-adidas-header.png`, `furia-icon.png`, `furia-icon2.png`, `furia-logo.png`, `kscerato.png`, `molodoy.png`, `yekindar.png`, `yuurih.png`

---

## 💬 Funcionalidades

- Exibe mensagens do bot e do usuário em balões distintos
- Links de notícias clicáveis, com título e data
- Mostra próximos jogos, resultados e elenco
- Animações suaves e responsividade
- Botão para limpar o chat
- Modo simulação (mock data) e integração com API
- Design escuro, moderno, com bordas arredondadas e sem uso de verde
- Imagens locais para avatares, banners e logos

---

## ⚙️ Personalização

- **Cores:** Preto, branco e tons de cinza/prata
- **Imagens:** Use as do diretório `public/images` para banners, avatares e logos
- **Estilos:** Editáveis em `src/index.css` e nos componentes
- **Mock Data:** Editável em `api/mockData.js`

---

## 🛠️ Tecnologias Utilizadas
- React + Typescript
- Vite ou Next.js (dependendo do setup)
- TailwindCSS
- lucide-react (ícones SVG)
- Node.js (mock API)

---

## 🔗 Mock API
- Endpoint: `http://localhost:3333/api/hltd-data`
- Dados: notícias, elenco, próximos jogos, resultados
- Editável em `api/mockData.js`

---

## 🤝 Contribuindo
1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nome-feature`)
3. Commit suas alterações (`git commit -m 'feat: adiciona nova feature'`)
4. Push na branch (`git push origin feature/nome-feature`)
5. Abra um Pull Request

---

## 📄 Licença
Este projeto é open-source, sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 🙋‍♂️ Dúvidas ou Sugestões?
Abra uma issue ou envie um pull request!
