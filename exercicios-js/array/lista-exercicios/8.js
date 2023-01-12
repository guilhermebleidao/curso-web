function multiplicar(num1, num2) {
    let soma = 0
    for (let i = 1; i <= num1; i++) {
        soma += num2
    }
    return soma
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))