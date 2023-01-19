function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('errado')
            if (Math.random() < chanceDeErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}
 
funcionarOuNao('teste', 0.5)
    .then(valor => `Valor: ${valor}`)
    .then(
        valor => consol.log(valor),
        // err => console.log(`Erro específico: ${err}`) // Tratamento específico
    )
    .catch(erro => console.log(`Erro geral: ${erro}`))
    .then(_ => console.log('Fim'))