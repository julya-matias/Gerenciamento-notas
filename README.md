# Gerenciamento de Notas Acadêmicas

Este projeto é uma aplicação web para gerenciamento de notas e frequência de alunos, permitindo calcular médias e analisar o desempenho da turma. Ele utiliza **React** para o frontend, **Flask** para o backend e **SQLite** como banco de dados.

---

## 🎯 Objetivo

Facilitar a visualização e análise de notas e frequência de alunos, oferecendo métricas como média geral da turma, médias individuais e detecção de alunos com baixa frequência.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Flask
- **Banco de Dados:** SQLite
- **Bibliotecas Adicionais:** Axios (para chamadas à API) e Flask-CORS (para lidar com CORS no backend)

---

## 📌 Premissas Assumidas

1. **Os alunos possuem cinco disciplinas**, e cada uma tem uma nota associada.
2. **A frequência dos alunos é expressa em porcentagem.**
3. **Os dados dos alunos são inseridos e armazenados no banco de dados SQLite.**
4. **O backend Flask expõe endpoints para que o frontend possa buscar e manipular os dados.**
5. **A média geral dos alunos é calculada considerando todas as disciplinas e todo o histórico de notas.**
6. **Alunos com frequência abaixo de 75% são considerados em risco de reprovação.**

---

## 💡 Decisões de Projeto

1. **Uso de React para o frontend** → Facilita a criação de uma interface dinâmica e responsiva.
2. **Uso de Flask para o backend** → Leve e eficiente para fornecer APIs REST.
3. **Uso de SQLite como banco de dados** → Simples de configurar e ideal para aplicações menores.
4. **Estruturação do backend com endpoints bem definidos** → Facilita a comunicação com o frontend.
5. **Exibição de estatísticas claras na interface** → Permite que os usuários interpretem rapidamente o desempenho dos alunos.

---

## 🏗️ Como Rodar o Projeto

### 📥 1. Clonar o Repositório
```sh
  git clone https://github.com/julya-matias/Gerenciamento-notas.git
  cd gerenciamento-notas
```

### ▶️ 2. Rodar o Backend (Flask)

#### Instalar dependências
```sh
  cd backend
  pip install -r requirements.txt
```

#### Executar o servidor Flask
```sh
  python app.py
```


### 💻 3. Rodar o Frontend (React)

#### Instalar dependências
```sh
  cd frontend
  npm install
```

#### Iniciar o frontend
```sh
  npm start
```

O frontend rodará em `http://localhost:3000`


---
## 📌 Testando o Sistema

Agora que tanto o backend quanto o frontend estão rodando, você pode testar o sistema!

No frontend, preencha o formulário com o nome, notas e frequência e clique em "Registrar". O backend irá salvar esses dados no banco de dados. Para visualizar todos os dados registrados, basta acessar a página "Resultados", onde você poderá vê-los.

---

## 🎨 Interface do Usuário
- Registro de alunos com notas e frequência.
- Permite apenas notas e frequência com números inteiros; em caso de decimal, o valor é arredondado para cima.
- Exibe lista de alunos com notas e frequência.
- Calcula automaticamente as médias de cada aluno.
- Cálculo de média por disciplina e média geral da turma.
- Destaca alunos acima da média e alunos com frequência baixa (abaixo de 75%).
- Botão para apagar todos os registros.

---
