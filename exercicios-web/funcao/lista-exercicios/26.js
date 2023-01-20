// 26
function contarPares(inicio, fim) {
    let contador = 0
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 0) contador++
    }
    return contador
}

console.log(contarPares(1, 100))