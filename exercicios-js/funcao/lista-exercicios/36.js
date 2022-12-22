// 36
function multiplicar(vetor, multiplicador) {
    vetor.forEach(function (elemento, indice) {
        vetor[indice] = elemento *= 5
    });
    return vetor
}

function multiplicarSeMaiorQue5(vetor, multiplicador) {
    vetor.forEach(function (elemento, indice) {
        if (elemento > 5) vetor[indice] = elemento *= 5
    });
    return vetor
}

console.log(multiplicar([1, 2, 3], 5))
console.log(multiplicarSeMaiorQue5([4, 5, 6], 5))