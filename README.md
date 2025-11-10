<h1 align="center">GS | Futuro do Trabalho</h1>
<p align="center">Projeto Global Solution - 2º Semestre/2025 - Front-End Design & Web Development</p>

<p align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue.svg" alt="React">
  <img src="https://img.shields.io/badge/Linguagem-JavaScript-yellow.svg" alt="JavaScript">
  <img src="https://img.shields.io/badge/Build_Tool-Vite-purple.svg" alt="Vite">
  <img src="https://img.shields.io/badge/Framework-Tailwind_CSS-06B6D4.svg" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Library-Framer_Motion-purple.svg" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Icons-Heroicons-06B6D4.svg" alt="Heroicons">
</p>

> `GS | Futuro do Trabalho` é uma Single Page Application (SPA) moderna e responsiva, desenvolvida para a Global Solution do 2º Semestre. A aplicação simula uma plataforma web colaborativa, no estilo LinkedIn, focada em conectar profissionais e suas competências. O projeto exibe uma listagem de 60 perfis fictícios a partir de um JSON local, com uma interface limpa construída em React e Tailwind CSS, e animações fluidas com Framer Motion.

---

### 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🔧 Como Executar](#-como-executar)
- [👥 Autores](#-autores)

---

### 📖 Sobre o Projeto

O projeto **GS | Futuro do Trabalho** nasceu do desafio proposto para a Global Solution, com o objetivo de refletir sobre como a tecnologia pode transformar as relações profissionais. A aplicação foi desenvolvida como uma SPA (Single Page Application) para simular uma rede profissional.

O foco principal foi criar uma interface interativa e moderna utilizando **Tailwind CSS** para um design responsivo e agradável, que se adaptasse a qualquer dispositivo. A aplicação consome dados de um arquivo `perfis.json` local, contendo 60 perfis simulados, e usa o estado do React para gerenciar a filtragem e a busca em tempo real.

O uso de **Framer Motion** adiciona um toque de profissionalismo às interações, como a abertura de modais e a exibição dos cards, enquanto os **Heroicons** complementam o design minimalista e profissional.

---

### ✨ Funcionalidades

- **Listagem de Perfis:** Exibe 60 perfis profissionais a partir de um JSON local.
- **Cards de Perfil:** Apresenta dados básicos como nome, foto, cargo e skills.
- **Modal Interativo:** Abre um modal ao clicar no card, exibindo informações detalhadas como experiências, formação e soft skills.
- **Busca e Filtros:** Sistema de busca e filtros funcionais (por área, cidade e tecnologia).
- **Dark Mode:** Botão para alternar entre os modos claro e escuro.
- **Botões de Ação:** Botões "Recomendar" e "Enviar Mensagem" funcionais dentro do modal.
- **Design Responsivo e Moderno:** Interface 100% responsiva construída com Tailwind CSS.
- **Animações Fluidas:** Animações sutis na listagem e nos modais com **Framer Motion**.

---

### 🚀 Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Front-end** | **React** | Biblioteca principal para a construção da interface do usuário. |
| | **JavaScript**| Linguagem de programação para a lógica da aplicação. |
| | **Tailwind CSS** | Framework de CSS utility-first para estilização moderna e responsiva. |
| | **Framer Motion**| Biblioteca para animações e transições fluidas. |
| | **@heroicons/react** | Biblioteca de ícones SVG de alta qualidade, dos mesmos criadores do Tailwind. |
| **Build Tool**| **Vite** | Ferramenta de build moderna e ultrarrápida para o desenvolvimento. |
| **Dados**| **JSON Local** | Arquivo estático contendo os 60 perfis simulados. |

---

### 📁 Estrutura do Projeto

```
gs-futuro-trabalho/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── ProfileModal.jsx
│   │   └── SearchBar.jsx
│   ├── data/
│   │   └── perfis.json
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

### 🔧 Como Executar

Para rodar o projeto localmente, siga os passos abaixo.

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO_GIT]
    cd gs-futuro-trabalho
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    *(Este comando instalará o React, Vite, Tailwind, Framer Motion e Heroicons)*

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O projeto estará disponível em `http://localhost:5173` (ou a porta indicada no terminal).

---

### 👥 Autores

| Nome | RM | GitHub |
| :--- | :--- | :--- |
| Leandro Afonso Silva Santos Júnior | 561344 | [TLean07](https://github.com/TLean07) |
| Guilherme Barone Milani | 562114 | [GuilhermeBM3012](https://github.com/GuilhermeBM3012) |
| Luigi Escudero Grigoletto | 562505 | [Lueg2007](https://github.com/Lueg2007) |