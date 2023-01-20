// 20
function calcularNotas(valor) {
    let qntNotas
    let notas = [100, 50, 10, 5, 1]
    notas.forEach(function (nota) {
        qntNotas = Math.floor(valor / nota)
        if (qntNotas != 0) {
            valor -= qntNotas * nota
            console.log(`${qntNotas} nota(s) de R${nota}`)
        }
    })
}

calcularNotas(135)
calcularNotas(22)