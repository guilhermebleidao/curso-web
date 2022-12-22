// 05
function formatarDinheiro(valor) {
    return `R$${valor.toFixed(2).replace(/\./g, ',')}`
}

console.log(formatarDinheiro(0.30000000000000004))