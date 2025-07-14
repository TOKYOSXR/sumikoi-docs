# 📚 Sistema de Controle de Presença por Turma

Este sistema foi desenvolvido com o objetivo de automatizar o registro de presença de alunos em instituições de ensino, utilizando ferramentas gratuitas e integradas do Google: **Forms**, **Sheets** e **Apps Script**.

---

## 🚀 Visão Geral

A proposta é permitir que professores ou responsáveis registrem a presença de alunos de diferentes turmas por meio de um **formulário único**, e que cada envio seja armazenado automaticamente em uma **planilha separada por turma**, organizada dentro de uma pasta no Google Drive.

---

## 🧩 Tecnologias Utilizadas

- [Google Forms](https://forms.google.com) — Formulário para entrada de dados (presença)
- [Google Sheets](https://sheets.google.com) — Armazenamento das respostas
- [Google Apps Script](https://script.google.com) — Automação e processamento das respostas
- [Google Drive](https://drive.google.com) — Organização das planilhas por turma

---

## 👥 Público-Alvo

Este sistema é ideal para:

- Professores que desejam controlar presença digitalmente;
- Coordenadores e gestores que precisam de relatórios organizados;
- Instituições de ensino com várias turmas ou turnos;
- Ambientes educacionais que usam o ecossistema Google Workspace.

---

## 📑 Funcionalidades

- Formulário com ramificação de perguntas por turma;
- Envio automático das respostas para planilhas específicas;
- Criação automática de planilhas por turma;
- Organização das planilhas em uma pasta central;
- Agrupamento de agentes por nível e missões por dificuldade (no backend);
- Sistema escalável e fácil de manter.

---

## 📘 Documentação Completa

Acesse a [Documentação do Sistema](https://seudominio.com ou link do Notion, Vercel, etc) para:

- Tutorial passo a passo de uso
- Explicação técnica do script
- Como adicionar novas turmas ou alunos
- Dúvidas frequentes (FAQ)

---

## 🛠️ Como usar

1. Acesse a planilha de respostas vinculada ao formulário.
2. Vá em `Extensões > Apps Script` e cole o script principal.
3. Configure o gatilho `onFormSubmit`.
4. Crie uma pasta no Google Drive para armazenar as planilhas.
5. Teste o envio do formulário e veja a resposta ir para a planilha correta.

---

## 🧪 Exemplo de uso

- [ ] Turma selecionada: **MI76**
- [ ] Aluno marcado: **João Silva**
- [x] Ao enviar: A planilha `Presenças - MI76` é criada (caso não exista) e a presença é registrada nela.

---

## 🧑‍💻 Contribuição

Sinta-se à vontade para sugerir melhorias ou abrir *issues* com dúvidas. O sistema pode ser adaptado para controle de atividades, provas, entrega de trabalhos, etc.

---

## 📄 Licença

Este projeto pode ser utilizado livremente para fins educacionais. Consulte os termos de uso das APIs e serviços do Google Workspace ao utilizar institucionalmente.

---
