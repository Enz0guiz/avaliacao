const { application } = require("express");
const express = require("express");
const app = express ();
const port = process.env.PORT || 3001;

app.get ('/', (req, res) => {
    res.send("Atividade antes da avaliação !!");
})

application. listen(port, () => {
    console.log("Servidor rodando na porta 3001");
})
