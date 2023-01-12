function simboloMais(vezes) {
    let string = ''
    for (let i = 0; i < vezes; i++) {
        string += '+'
    }
    return string
}

console.log(simboloMais(2))
console.log(simboloMais(4))