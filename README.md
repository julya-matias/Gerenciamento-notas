*Passo a Passo para Rodar o Projeto*

Este projeto tem duas partes principais: o backend (feito com Flask) e o frontend (feito com React). Você vai precisar rodar cada uma delas separadamente, mas ambas se comunicam para que o sistema funcione corretamente.

*Pré-requisitos*

Python: Necessário para rodar o backend (Flask).

Node.js: Necessário para rodar o frontend (React).


*Passo 1:* Rodando o Backend (Flask + SQLite)
_1.1. Instalar o Python_
Primeiro, verifique se você tem o Python instalado no seu computador.

_1.2. Instalar as Dependências do Backend_
 No terminal, execute o seguinte comando dentro da pasta do backend do projeto:

       pip install -r requirements.txt

_1.3. Rodar o Backend_
Agora, para rodar o servidor do Flask, execute o comando:

       python app.py

O backend estará disponível em http://127.0.0.1:5000.



*Passo 2:* Rodando o Frontend (React)
_2.1. Instalar o Node.js_
O Node.js é necessário para rodar o frontend em React.

_2.2. Instalar as Dependências do Frontend_
Agora, vamos instalar as dependências do frontend. No terminal, dentro da pasta do frontend do projeto, execute o seguinte comando:

     npm install

Isso instalará todas as bibliotecas necessárias para o React.

_2.3. Rodar o Frontend_
Para iniciar o servidor do React, execute o seguinte comando:

     npm start

Isso abrirá automaticamente o navegador com a aplicação React rodando em http://localhost:3000.

*Passo 3:* Testando o Sistema
Agora que tanto o backend quanto o frontend estão rodando, você pode testar o sistema!

No frontend, preencha o formulário com o nome, notas e frequência e clique em "Registrar". O backend irá salvar esses dados no banco de dados. Para visualizar todos os dados registrados, basta acessar a página "Resultados", onde você poderá vê-los.
