// 08
function calcularDesempenho(pontuacoes) {
    pontuacoes = pontuacoes.split(' ').map(Number)
    let qntRecordesBatidos = 0
    let recorde = pontuacoes[0]
    let piorPontuacao = 0
    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > recorde) {
            qntRecordesBatidos++
            recorde = pontuacoes[i]
        } else if (pontuacoes[i] < pontuacoes[piorPontuacao]) {
            piorPontuacao = i
        }
    }
    return [qntRecordesBatidos, piorPontuacao + 1]
}

console.log(calcularDesempenho('10 20 20 8 25 3 0 30 1'))
console.log(calcularDesempenho('1 3 4 0 13'))
console.log(calcularDesempenho('1'))