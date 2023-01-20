// 29
function calcularIntervalo(vetor, intervaloMenor, intervaloMaior) {
    let contador = 0
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= intervaloMenor && vetor[i] <= intervaloMaior) contador++
    }
    console.log(`${contador} números dentro do intervalo`)
}

calcularIntervalo([9, 10, 20, 21], 10, 20)