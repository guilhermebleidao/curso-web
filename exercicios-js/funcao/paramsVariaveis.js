function soma() {
    let soma = 0
    for (i in arguments) { // toda funcao tem o array "arguments"
        soma += arguments[i]
    }
    return soma
}

console.log(soma(0))
console.log(soma(1))
console.log(soma(1, 2, 3))
console.log(soma(1, 2, 'string'))
console.log(soma('a', 'b', 'c'))