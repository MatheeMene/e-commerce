const crypto = require("crypto");

//Algoritmo que faz a criptografia
const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    codificacao : "utf8",
    segredo : "chaves",
    tipo : "hex"
};

module.exports = cripto = password => {
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    cipher.update(password);
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};

// const descrip    = require('./cripto/Cripto');

// module.exports = descrip = password => {
//     const decipher = crypto.createDecipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
//     decipher.update(password, DADOS_CRIPTOGRAFAR.tipo);
//     return decipher.final('utf8');
// };