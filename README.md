# 📋 React Kanban Board

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

## 📖 Visão Geral

Um sistema de gerenciamento de tarefas no formato Kanban, construído com foco em performance, tipagem estática e arquitetura escalável. 

A aplicação foi desenvolvida aplicando rigorosamente a metodologia **Follow the Data Flow** (Seguindo o Fluxo dos Dados), garantindo que o ciclo de vida da informação — desde a entrada no formulário, passando pelo gerenciamento de estado global (Context API), até a persistência no banco de dados (API REST) e a renderização na tela — seja previsível, limpo e à prova de falhas estruturais.

## ✨ Funcionalidades

* **Gestão Completa de Tarefas (CRUD):** Criação, leitura, atualização de status (transição entre colunas) e exclusão de cartões.
* **Transições Dinâmicas:** Movimentação fluida de tarefas entre as etapas "Para Fazer", "Em Andamento" e "Concluída".
* **Consumo de API RESTful:** Integração robusta com backend simulado, utilizando os métodos HTTP corretos (`POST`, `PATCH`, `DELETE`) para preservar a integridade dos dados.
* **Sistema de Identificação v1:** Compatibilidade total com as novas regras de geração de IDs em formato de string.
* **Tipagem Avançada:** Uso extensivo de TypeScript (Interfaces, Omit, Partial) para prevenir erros em tempo de desenvolvimento.
* **Testes Automatizados:** Suíte de testes unitários configurada e funcional utilizando Vitest e React Testing Library para garantir a renderização fiel dos componentes críticos da interface.

## 🛠️ Tecnologias Utilizadas

**Frontend:**
* React (via Vite)
* TypeScript
* Radix UI (Componentização e Estilização acessível)
* HTML, CSS e JavaScript avançado

**Gerenciamento de Estado & Contexto:**
* React Context API
* Hooks (`useState`, `useEffect`, `useContext`)

**Backend Simulado (Mock API):**
* JSON Server (v1)

**Qualidade e Testes:**
* Vitest
* React Testing Library (`jest-dom`, `jsdom`)

## 🚀 Instalação

Para rodar este projeto localmente, é necessário ter o Node.js instalado em sua máquina. O ecossistema exige a execução simultânea da interface e da API simulada.

1. **Clone o repositório e acesse a pasta:**
  ```bash
      cd Kanban