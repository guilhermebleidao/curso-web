function calcularMedia(array) {
    const somar = (acumulado, valor) => acumulado + valor
    return array.reduce(somar) / array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))