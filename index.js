"use strict";

//Declarar as dependências do arquivo
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Primeira aplicação com NodeJs</h1>');
});

//Definir que o servidor vai escutar
const port = 1234;

//Configurando o servidor para escutar a porta definida
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
