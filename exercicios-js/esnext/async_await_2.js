function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) { [min, max] = [max, min] }
    
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qntNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qntNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros // retornar chama o "resolve"
    } catch(e) {
        if (tentativas > 10) {
            throw 'Caiu no catch' // lançar o erro chama o "reject"
        } else {
            return gerarMegaSena(qntNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)