// 32
function calcularMedia(vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }
    return soma / vetor.length
}

console.log(calcularMedia([5, 5, 5]))
console.log(calcularMedia([5, 6, 7]))