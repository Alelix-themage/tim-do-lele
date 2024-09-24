
const { ConfigBanco } = require('./config_banco.js'); 

function ConsultarUsers() {
    //Função responsável por consultar a tabela users
    let users = [];//responsável por guardar os registros de user

    const db = ConfigBanco();
    
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM users', users, (error, rows) => {
            if (error) {
                console.error("Erro ao consultar a tabela users:", error.message);
                reject(error);
            } else {
                console.log("Elementos da tabela usuarios encontrados com sucesso!", rows);

                  // Imprime cada usuário encontrado
                rows.forEach(user => {
                    console.log(user);
                });
               

                resolve(rows);
                console.log("Registros encontrados:", rows);
            }
        });
    });
    
}

ConsultarUsers()
    .then(users => {
        console.log("Usuários encontrados:", users);
    })
    .catch(err => {
        console.error("Erro ao consultar usuários:", err);
    });


module.exports = { ConsultarUsers }