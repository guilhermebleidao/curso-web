// 28
function calcularParesEImpares(vetor) {
    let pares = 0
    let impares = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`Pares: ${pares}`)
    console.log(`Ímpares: ${impares}`)
}
calcularParesEImpares([1, 2, 3, 4, 5])
calcularParesEImpares([0, 2])
calcularParesEImpares([3, 13])