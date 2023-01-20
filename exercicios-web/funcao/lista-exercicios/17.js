// 17
function calcularAumento(plano, salario) {
    switch (plano) {
        case 'A':
            console.log(`Novo salário: ${(salario * 1.1).toFixed(2)}`)
            break
        case 'B':
            console.log(`Novo salário: ${(salario * 1.15).toFixed(2)}`)
            break
        case 'C':
            console.log(`Novo salário: ${(salario * 1.2).toFixed(2)}`)
            break
        default:
            console.log('Plano inválido')
    }
}

calcularAumento('A', 100)
calcularAumento('B', 100)
calcularAumento('C', 100)
calcularAumento('D', 100)