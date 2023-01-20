// 12
function fatorial(numero) {
    let soma = 1
    for (let i = 1; i <= numero; i++) {
        soma *= i
    }
    return soma
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
