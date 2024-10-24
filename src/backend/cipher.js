const crypto = require('crypto');


const CRITPOGRAFAR = {
    algoritmo: 'aes-256-cbc', 
    segredo: crypto.randomBytes(32), 
    iv: crypto.randomBytes(16), 
    tipo: 'hex' 
};



async function CriptografarSenha(senha) {
    //Responsável pela criptografia da senha

    const cipher = crypto.createCipheriv(CRITPOGRAFAR.algoritmo, CRITPOGRAFAR.segredo, CRITPOGRAFAR.iv);

    // Criptografar a senha
    let encrypted = cipher.update(senha, 'utf8', CRITPOGRAFAR.tipo);
    encrypted = encrypted + cipher.final(CRITPOGRAFAR.tipo); // Concatena a parte final da criptografia

    return encrypted
}



module.exports = { CriptografarSenha };
