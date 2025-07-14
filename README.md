# 🚀 Desafio Técnico – Desenvolvedor Front-end

**Empresa:** Rilix  
**Stack envolvida:** JavaScript, React, Node.js, TanStack, SQL, TestCafe, Docker

---

## 🧩 Contexto do Desafio

A Rilix está evoluindo sua Dashboard e precisa de uma nova funcionalidade: um sistema de **notícias** que mantenha os clientes informados sobre lançamentos, atualizações e novidades da empresa.

Você será responsável por criar essa funcionalidade do zero, implementando tanto a interface quanto a comunicação com uma API (simulada ou real, como preferir). O foco do desafio está na qualidade do código, organização da aplicação, boas práticas no desenvolvimento front-end e UI.

---

## 🎯 O que deve ser feito

Crie uma funcionalidade chamada **"Notícias"**, disponível no menu lateral da Dashboard da Rilix.
Pode criar um menu simples, com este item, para simular a dashboard.

- Ao clicar em “Notícias”, o usuário deve ser redirecionado para a rota `/news`.
- Nessa rota, todas as notícias ativas devem ser exibidas em cards, com imagem, título e resumo.
- Ao clicar em uma notícia, deve abrir um **modal** com a notícia completa (título, imagem e descrição).
- O layout é livre, mas sugerimos seguir a identidade visual da dashboard (imagem anexa).
- As notícias podem vir de uma **API REST** conectada a um banco SQL (PostgreSQL, MySQL, etc) ou serem mockadas.
- Deve existir um **CRUD completo** para que colaboradores possam:
  - Adicionar nova notícia
  - Editar uma notícia existente
  - Inativar (isActive: false) ou deletar uma notícia
  - Listar todas as notícias (ativas e inativas)
- Design **responsivo**: deve funcionar bem em telas desktop e mobile.

---

## 🗃️ Modelo de dados (news)

```json
[
  {
    "id": "xc90-recharge",
    "createdAt": "2025-06-09 17:53:10.13786+00",
    "isActive": true,
    "imageKey": "b3496682",
    "title": "Novo Rilix Coaster",
    "resume": "Rilix Coaster versão 4.0 chega ao mercado em janeiro de 2026.",
    "description": "Com novos cenários imersivos, tecnologia aprimorada e ainda mais emoção, a Rilix Coaster 4.0 será lançada oficialmente em janeiro de 2026. A nova versão promete elevar a experiência de realidade virtual a um novo patamar."
  }
]
```

![Dashboard Rilix](https://rilix-challenges.s3.us-east-1.amazonaws.com/frontend-challenge/print.png)

---

## ✅ Requisitos Obrigatórios

- Aplicação em **React** (JavaScript).
- Banco de dados SQL (PostgreSQL ).
- Back-end em **Node.js** 
- Implementação de **CRUD completo** para o recurso `news`.
- Layout responsivo.
- Ao menos 1 teste automatizado com **TestCafe** (ou outra biblioteca, se justificar).
- Código versionado em um repositório público no GitHub/GitLab.

---

## 🏆 Bônus (diferenciais que vamos considerar)

- **Mobile First**: estruturação da UI pensando primeiro na experiência em dispositivos móveis.
- Uso de **TanStack Query (React Query)** para gerenciamento de estado remoto.
- Código **modular, limpo e bem documentado**.
- Uso de **Docker** para facilitar a execução local do projeto.
- Uso de uma **API REST**.
- Validações no front-end e no back-end.
- Testes unitários com Jest ou outra lib de sua preferência.
- Deploy da aplicação (pode ser em plataformas como Vercel, Netlify, Render, Heroku, etc).

---

## 📦 Entrega e Prazo

Você deve enviar:
1. Link para o repositório com o código-fonte da aplicação.
2. Instruções claras de como executar o projeto (preferencialmente em um `README.md`).
3. (Opcional) Link de deploy da aplicação funcionando.
4. Prazo: 5 dias.