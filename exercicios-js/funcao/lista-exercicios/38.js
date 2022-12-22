// 38
function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) [inicio, fim] = [fim, inicio]

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            process.stdout.write(i.toString() + ' ')
        }
    }
    console.log()
}

imprimirImpares()
imprimirImpares(10, 20)
imprimirImpares(20, 10)