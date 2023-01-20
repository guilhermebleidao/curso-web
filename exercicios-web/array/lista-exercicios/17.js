function somarNumeros(array) {
    const somar = (acumulado, n) => acumulado + n
    return array.reduce(somar)
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))