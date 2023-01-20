// 16
function calcular(a, operacao, b) {
    switch (operacao) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            return 'Operação inválida'
    }
}

console.log(calcular(2, '+', 3))
console.log(calcular(2, '-', 3))
console.log(calcular(2, '*', 3))
console.log(calcular(2, '/', 3))
console.log(calcular(2, '%', 3))