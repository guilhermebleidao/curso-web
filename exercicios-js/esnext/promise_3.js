function gerarNumerosEntre(min, max) {
    if (min > max) { [min, max] = [max, min] }
    
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min

        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(n => n * 10)
    .then(nX10 => `Número gerado x 10 = ${nX10}`)
    .then(console.log)