function buscarPalavrasSemelhantes(palavra, array) {
    const acharPalavra = texto => texto.search(palavra) != -1
    return array.filter(acharPalavra)
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavrasSemelhantes('python', ['javascript', 'java', 'c++']))