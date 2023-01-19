const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname + '/dados.txt')

function abrirArquivo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (_, data) => {
            resolve(data)
        })
    })
}

abrirArquivo(caminho)
    .then(console.log)