// 37
function progressaoAritmetica(n, a1, r) {
    let soma = a1
    let elemento = a1

    process.stdout.write(a1.toString() + ' ')
    for (let i = 0; i < n - 1; i++) {
        elemento += r
        soma += elemento
        process.stdout.write(elemento.toString() + ' ')
    }
    console.log(`soma: ${soma}`)
}

function progressaoGeometrica(n, a1, r) {
    let soma = a1
    let elemento = a1

    process.stdout.write(a1.toString() + ' ')
    for (let i = 0; i < n - 1; i++) {
        elemento *= r
        soma += elemento
        process.stdout.write(elemento.toString() + ' ')
    }
    console.log(`soma: ${soma}`)
}

progressaoGeometrica(5, 1, 2)