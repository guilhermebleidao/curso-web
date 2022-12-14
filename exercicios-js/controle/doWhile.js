function getInteiroAlatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

do {
    opcao = getInteiroAlatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')