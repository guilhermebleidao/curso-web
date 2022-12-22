// 35
function juntarVetores(vetor1, vetor2) {
    vetor1.push(vetor2)
    console.log(`Vetor 1: ${vetor1}`)
    console.log(`Vetor 2: ${vetor2}`)
}


let vetorPilha =  [1, 2, 3, 4, 5]
let vetorAdiciona =  [6, 7, 8, 9, 10]
juntarVetores(vetorPilha, vetorAdiciona)