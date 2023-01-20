// 21
function calcularPlanoDeSaude(idade) {
    let adicional
    if (idade < 10) {
        adicional = 80
    } else if (idade < 30) {
        adicional = 50
    } else if (idade < 60) {
        adicional = 95
    } else {
        adicional = 130
    }
    return 100 + adicional
}

console.log(calcularPlanoDeSaude(9))
console.log(calcularPlanoDeSaude(10))
console.log(calcularPlanoDeSaude(40))
console.log(calcularPlanoDeSaude(60))
console.log(calcularPlanoDeSaude(61))