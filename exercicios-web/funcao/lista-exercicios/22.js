// 22
function calcularAnuidade(mes, valor) {
    let mesesAtrasados = mes - 1
    return valor * Math.pow(1.05, mesesAtrasados)
}

console.log(calcularAnuidade(1, 10))
console.log(calcularAnuidade(2, 10))
console.log(calcularAnuidade(3, 10))
console.log(calcularAnuidade(12, 10))