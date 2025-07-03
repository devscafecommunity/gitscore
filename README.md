# 🚀 GitScore — Developer Leaderboard via GitHub  
[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)](#)  
🔗 https://gitscore.devscafe.org

---

**GitScore** é uma plataforma que avalia e classifica desenvolvedores do GitHub com base em métricas públicas do seu perfil, como commits, linguagens, estrelas, contribuições, e mais — criando um score único e badges automáticas. Ideal para devs que querem acompanhar seu desempenho ou se destacar no cenário open source.

---

## 🧠 Como Funciona

- Você digita o nome de usuário do GitHub  
- O GitScore coleta os dados públicos do perfil (via GitHub API)  
- Um score é calculado com base em vários critérios técnicos  
- O dev recebe badges e é posicionado em um ranking geral  
- Tudo é calculado em tempo real, sem banco de dados!

---

## 🏅 Funcionalidades

- 🔢 **GitScore**: pontuação geral do dev
- 🎖️ **Badges automáticas** com ranking (F → SS+)
- 📈 **Gráficos de radar** com perfil técnico (commits, PRs, stars, etc.)
- 🧩 **Detecção de tipo de dev** (frontend, backend, fullstack, etc.)
- 📊 **Comparação entre perfis**
- 🧪 **Simulador de score**
- 🌐 **Hall da fama**: devs mais bem colocados por linguagem e país
- 📝 Renderização do `README.md` do GitHub
- 📤 Exportação de perfil como JSON ou Markdown

---

## 🧩 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), [Chart.js](https://www.chartjs.org/)
- **APIs**: [GitHub REST API](https://docs.github.com/en/rest) e [GraphQL API](https://docs.github.com/en/graphql)
- **Hospedagem**: [Vercel](https://vercel.com/)
- **Armazenamento**: Nenhum — sem banco de dados!
- **Edge Cache**: Requisições inteligentes e cache via `localStorage` e edge runtime

---

## 🧪 Em breve

- Widget para embed do GitScore em portfólios
- Análise automática do README do usuário
- Badge de GitScore para colar no GitHub
- Ranking por país, linguagem, e tipo de dev

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas!

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'feat: nova feature'`
4. Push: `git push origin minha-feature`
5. Abra um Pull Request ✨

---

## 📫 Contato

Feito com 💙 por [Dev's Café](https://devscafe.org)  
Sinta-se à vontade para abrir issues, sugerir funcionalidades ou contribuir com código!

---

## 🔗 Acesse agora

👉 [https://gitscore.devscafe.org](https://gitscore.devscafe.org)