// Módulo responsável por configurar as rotas da API
const express = require('express');
const { ConsultarUsers } = require('./query_banco/consulta_cadastro');

const app = express();

const PORT = 8000;

app.get('/consulta-users', async (req, res) => {
    //Endpoint responsável por consultar users
    try {
        const users = await ConsultarUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error("Erro ao consultar a tabela users:", error);
        res.status(500).send("Erro ao consultar a tabela users.");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
