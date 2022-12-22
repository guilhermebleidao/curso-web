// 09
function avaliarAluno(nota) {
    let decisao = 'Aprovado'
    if (nota < 38) {
        decisao = 'Reprovado'
    } else if (nota % 5 > 2) {
        nota += 5 - nota % 5
        decisao = 'Aprovado'
    }
    console.log(`${decisao} com nota ${nota}`)
}

avaliarAluno(84)
avaliarAluno(29)
avaliarAluno(38)