const { ConfigBanco } = require('./config_banco.js');

function  ConsultarPedidos() {
    // Função responsável por consultar os pedidos
    const db = ConfigBanco();
    
    return new Promise((resolve, reject) => {
        db.all(`
                SELECT
                    P.ID AS PedidoID,
                    U.NOME AS NomeUsuario,
                    P.DATA AS DataPedido,
                    P.HORARIO_RESERVA AS HorarioReserva,
                    P.STATUS AS StatusPedido,
                    CASE
                        WHEN PI.TIPO = 'Lanche' THEN L.NOME
                        WHEN PI.TIPO = 'Bebida' THEN B.NOME
                        ELSE NULL
                    END AS NomeItem,
                    PI.QUANTIDADE AS Quantidade,
                    GROUP_CONCAT(M.NOME, ', ') AS Molhos
                FROM
                    PEDIDOS P
                    JOIN USERS U ON P.USER_ID = U.ID
                    JOIN PEDIDOS_ITENS PI ON P.ID = PI.PEDIDO_ID
                    LEFT JOIN LANCHES L ON PI.ITEM_ID = L.ID AND PI.TIPO = 'Lanche'
                    LEFT JOIN BEBIDAS B ON PI.ITEM_ID = B.ID AND PI.TIPO = 'Bebida'
                    LEFT JOIN PEDIDOS_ITENS MPI ON P.ID = MPI.PEDIDO_ID AND MPI.TIPO = 'Molho'
                    LEFT JOIN MOLHOS M ON MPI.ITEM_ID = M.ID
                GROUP BY
                    P.ID, U.NOME, P.DATA, P.HORARIO_RESERVA, P.STATUS, PI.ID
                ORDER BY
                    P.ID, PI.ID;
            
            `, (error, rows) => {  
            if (error) {
                console.error("Erro ao consultar a tabela users:", error.message);
                reject(error);
            } else {
                console.log("Elementos da tabela usuarios encontrados com sucesso!", rows);

                // Imprime cada usuário encontrado
                // rows.forEach(user => {
                //     console.log(user);
                // });

                resolve(rows);  // Resolve a promise com as linhas da tabela
                console.log("Pedidos encontrados:", rows);
            }
        });
    });
}

ConsultarPedidos()

module.exports = { ConsultarPedidos };
