const soma = array => array.reduce((acumulado, nota) => acumulado + nota)
const media = array => soma(array) / array.length

function receberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {

        return { nome: estudante[0], media: media(estudante[1]) }
    })
    const estudantesOrdenados = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
    return estudantesOrdenados[0]
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))