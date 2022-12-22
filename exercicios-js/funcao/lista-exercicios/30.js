// 30
function maiorEMenor(vetor) {
    let menor = vetor[0]
    let maior = vetor[0]
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < menor) menor = vetor[i]
        if (vetor[i] > maior) maior = vetor[i]
    }
    console.log(`Menor: ${menor}`)
    console.log(`Maior: ${maior}`)
}

maiorEMenor([5, 1, 10, 20, 0])