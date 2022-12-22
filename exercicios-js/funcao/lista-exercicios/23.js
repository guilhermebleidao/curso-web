// 23
function avaliarAluno(codigo, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3].sort().reverse()
    let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 12
    console.log(`Aluno ${codigo}`)
    console.log(`Notas ${notas[0]}, ${notas[1]} e ${notas[2]}`)
    console.log(`Média ${media}`)
    console.log(`${media >= 5 ? 'APROVADO' : 'REPROVADO'}`)

}

avaliarAluno('20202bsi0098', 8, 7, 9)
avaliarAluno('20202bsi0099', 3, 5, 4)