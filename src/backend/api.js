// Módulo responsável por configurar as rotas da API
const express = require('express');
const { ConsultarUsers } = require('./query_banco/consulta_cadastro.js');
const {InserirUser} = require('./query_banco/inserir_cadastro.js')

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

// app.get('/pedidos', async (req, res)=>{
//     try {
//         const pedidos;
//         res.status(200).json(users);
//     }
//     catch(erro){

//     }
// })

app.post('/inserir-users', async (req, res) => {
    try {
        data = req.body
        InserirUser(data[0], data[1], data[2])
        res.status(200).send("Dados enviados com sucesso.") 
    }
    catch(erro){
        res.status(500).send("Falha ao enviar os dados.")
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
