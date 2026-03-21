# 📋 React Kanban Board

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

## 📖 Visão Geral

Um sistema de gerenciamento de tarefas no formato Kanban, construído com foco em performance, tipagem estática e arquitetura escalável. 

A aplicação foi desenvolvida aplicando rigorosamente a metodologia **Follow the Data Flow** (Seguindo o Fluxo dos Dados), garantindo que o ciclo de vida da informação seja previsível e limpo: desde a entrada no formulário, passando pelo gerenciamento de estado global (Context API), até a persistência no banco de dados (API REST) e a renderização final na tela.

## 🌩️ Arquitetura de Deploy e Resolução de Problemas

Durante a publicação do projeto, enfrentei o clássico desafio da separação de ambientes no desenvolvimento Full Stack. Inicialmente, ao subir a aplicação para o **Vercel**, as requisições para a API falharam com o erro `ERR_CONNECTION_REFUSED`.

**O Diagnóstico:** O Vercel é excelente para hospedar o Frontend (arquivos estáticos e React), mas não suporta a execução contínua de um servidor local como o `json-server` (que estava configurado para rodar em `localhost:3000`).

**A Solução Aplicada:**
Para restabelecer o fluxo de dados na nuvem, a infraestrutura foi dividida em dois serviços distintos:
1. **Backend Simulado no Render:** Isolei o `json-server` e o arquivo `db.json` hospedando-os como um Web Service no **Render**. Para contornar um comportamento nativo da versão v1 do JSON Server (que busca obrigatoriamente por arquivos estáticos e causa falhas de build), configurei o comando de inicialização customizado `mkdir -p public && npx json-server db.json --port $PORT`, garantindo a estabilidade do servidor.
2. **Frontend no Vercel:** Com a API ativa na internet, configurei a variável de ambiente `VITE_API_URL` no painel do Vercel apontando para a nova URL gerada pelo Render. Após um novo build, a comunicação entre o React e o banco de dados foi perfeitamente estabelecida.

## ✨ Funcionalidades

* **Gestão Completa de Tarefas (CRUD):** Criação, leitura, atualização de status e exclusão de cartões.
* **Transições Dinâmicas:** Movimentação de tarefas entre "Para Fazer", "Em Andamento" e "Concluída".
* **Consumo de API RESTful:** Integração robusta utilizando os métodos HTTP corretos (`POST`, `PATCH`, `DELETE`).
* **Tipagem Avançada:** Uso extensivo de TypeScript para prevenir erros em tempo de desenvolvimento.
* **Testes Automatizados:** Suíte de testes unitários configurada com Vitest e React Testing Library.

## 🛠️ Tecnologias Utilizadas

**Frontend:**
* React (Vite)
* TypeScript
* Radix UI
* HTML, CSS e JavaScript

**Gerenciamento de Estado & Contexto:**
* React Context API

**Backend & Infraestrutura:**
* JSON Server (v1)
* Render (Hospedagem da API)
* Vercel (Hospedagem do Frontend)

**Qualidade e Testes:**
* Vitest
* React Testing Library

## 🚀 Instalação Local

Para rodar este projeto em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone  https://lnkd.in/dninmiTt
   cd Kanban
