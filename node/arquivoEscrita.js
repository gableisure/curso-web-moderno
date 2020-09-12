const fs = require('fs')

const pessoa = {
    nome: 'Julieta das Graças',
    idade: 74,
    sexo: 'F'
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(pessoa), err => {
    console.log(err || 'Arquivo Salvo!')
})