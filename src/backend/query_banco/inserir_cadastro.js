//módulo responsável por inserir cadastros no banco de dados
const {ConfigBanco} = require('./config_banco.js')


async function InserirUser(email, usuario, senha){
    //Função Responsável por Inserir os dados de acesso do usuário na tabela
    const db = ConfigBanco();

    sqlInsert = `INSERT INTO users (EMAIL, USUARIO, SENHA) VALUES (?, ?, ?)`;
    db.run(sqlInsert, [email, usuario, senha], function(err) {
        if (err) {
            console.error('Erro ao inserir dados: ' + err.message);
        } else {
            console.log(`Um registro inserido com ID ${this.lastID}`);
        }
    });

    //Fechar o banco
    db.close(() =>{
        try {
            console.log("Banco fechado com sucesso!")
        }
        catch(error){
            console.log("Erro ao fechar o banco!", error)
        }
    }) 
}
    
module.exports = { InserirUser }

