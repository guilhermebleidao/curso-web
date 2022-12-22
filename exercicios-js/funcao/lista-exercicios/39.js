// 39
function swapVetores(vetorA, vetorB) {
    [vetorA, vetorB] = [vetorB, vetorA]
    console.log(`Vetor A: ${vetorA}`)
    console.log(`Vetor B: ${vetorB}`)
}

swapVetores([1, 2, 3], ['a', 'b', 'c'])