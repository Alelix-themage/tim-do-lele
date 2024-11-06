const crypto = require('crypto');

const CRITPOGRAFAR = {
    algoritmo: 'aes-256-cbc',
    segredo: crypto.scryptSync('sua-chave-secreta', 'salt', 32), 
    iv: Buffer.from('0000000000000000', 'hex'), 
    tipo: 'hex'
};

async function CriptografarSenha(senha) {
    const cipher = crypto.createCipheriv(CRITPOGRAFAR.algoritmo, CRITPOGRAFAR.segredo, CRITPOGRAFAR.iv);
    let encrypted = cipher.update(senha, 'utf8', CRITPOGRAFAR.tipo);
    encrypted += cipher.final(CRITPOGRAFAR.tipo);
    return encrypted;
}

module.exports = { CriptografarSenha };
