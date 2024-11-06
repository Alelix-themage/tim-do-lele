// Módulo responsável por configurar as rotas da API
const express = require('express');
const cors = require('cors')
const { ConsultarUsers } = require('./query_banco/consulta_cadastro.js');
const {InserirUser} = require('./query_banco/inserir_cadastro.js')
const {ConsultarLanches} = require('./query_banco/consulta_lanches.js')

//criptografia da senha
const {CriptografarSenha} = require('./cipher.js')

//validação de login
const passport = require('./passport-config.js')

const app = express();

const PORT = 8000;


app.use(cors({
    // Cors serve para conectar portas diferentes
    origin: 'http://localhost:4200', 
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));
  
// Middleware para interpretar JSON
app.use(express.json());


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

app.get('/lanches', async (req, res)=>{
    try {
        const lanches = await ConsultarLanches();
        res.status(200).json(lanches);
    }
    catch(erro){

    }
})

app.post('/autenticar-login', async (req, res) =>{
    try {
        const data = req.body;
 
        res.status(200).send('Credenciais de acesso recebidas com sucesso.')


        console.log(`Credenciais de acesso
                Login: ${data.email}}
                Senha: ${data.password}
            `)
    }
    catch(erro){
        console.error("Erro ao logar na conta!")
        res.status(400).send({message: "Erro ao realizar validação de login."})
    }
})

app.post('/enviar-cadastro', async (req, res) => {
    try {
        data = req.body;
        senha = await CriptografarSenha(data.senha)
        InserirUser(data.email, data.nome, senha, data.telefone)
        res.status(200).json({message: "Dados enviados com sucesso."}) 
    }
    catch(erro){
        res.status(400).send({message: "Falha ao enviar os dados."})
    }
})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);

});
