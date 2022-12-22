// 31
function contarNegativos(vetor) {
    let qntNegativos = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) qntNegativos++
    }
    console.log(`${qntNegativos} negativo(s)`)
}

contarNegativos([-1, 0, 1, -3, 5])