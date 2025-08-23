<h1>🎲 Mega Sena React App</h1>

<p>Uma aplicação simples em **ReactJS + TypeScript + Vite** que sorteia **6 números aleatórios da Mega Sena**. 🤑💰</p>

---

<h2></h2>## ✨ Funcionalidades

<p>- 🎯 Sorteio de **6 números aleatórios**.</p>
<p>- 🔄 Repetir sorteio quantas vezes quiser.</p>
<p>- 🖥️ Rodando dentro de **Docker** para facilitar o setup.</p>
<p>- ⚡ Desenvolvimento rápido com **Vite**.</p>

---

<h2></h2>## 🛠️ Tecnologias Utilizadas

<p>- ⚛️ ReactJS</p> 
<p>- 💎 TypeScript</p>
<p>- 🚀 Vite</p>
<p>- 🐳 Docker</p>
<p>- 🎨 CSS (ou Tailwind, caso use)</p>

---

<h2>## 🚀 Como Rodar</h2>

<h3>### 🔹 Pré-requisitos</h3>

<p>- [Docker](https://www.docker.com/get-started) instalado</p>
<p>- [Node.js](https://nodejs.org/) (opcional para desenvolvimento local sem Docker)</p>

<h3>### 🔹 Rodando com Docker</h3>

<p><b>1. Clone o repositório:</b></p>
<p>git clone https://github.com/leonardomarcattidasilva/megaSena_ts.git</p>
<p>cd megaSena_ts</p>

<p><b>2. Construa a imagem Docker:</b></p>
<p></p>docker build -t mega-sena-app .</p>

<p><b>3. Rode o container</b></p>
<p></p>docker run -d -p 3000:3000 --name mega-sena mega-sena-app</p>

<p><b>4. Acesse no navegador</b></p>
<p></p>http://ip:3000</p>

<h3>🔹 Rodando em Desenvolvimento (Local)</h3>
<p>npm install</p>
<p>npm run dev -- --host 0.0.0.0 --port 3000</p>

<h3>🎨 Layout</h3>
<p>Uma interface simples e intuitiva.</p>
<p>Botão para gerar novos números.</p>
<p>Números sorteados exibidos com destaque.</p>

<h3>📦 Estrutura do Projeto</h3>

<p>src/</p>
<p> ├─ components/  # Componentes React</p>
<p> ├─ App.tsx      # Componente principal</p>
<p> ├─ main.tsx     # Entrada da aplicação</p>
<p> └─ styles/      # Arquivos CSS ou Tailwind</p>
<p>Dockerfile       # Configuração do container</p>
<p>package.json     # Dependências e scripts</p>
<p>vite.config.ts   # Configuração do Vite</p>

<h3>🤝 Contribuição</h3>
<p>Contribuições são bem-vindas!</p>
<p>Sinta-se à vontade para abrir issues ou enviar pull requests. 🙌</p>

<h3>📌 Autor</h3>
<p>👨‍💻 Leonardo Marcatti da Silva</p>
<p>🔗 GitHub</p>

