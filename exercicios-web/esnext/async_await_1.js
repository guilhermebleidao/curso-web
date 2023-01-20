function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), tempo);
    })
}

// esperarPor(2000)
//     .then(_ => console.log('Executando promise 1'))
//     .then(esperarPor)
//     .then(_ => console.log('Executando promise 2'))
//     .then(esperarPor)
//     .then(_ => console.log('Executando promise 3'))
//     .then(esperarPor)

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000);
    })
}

// Retorna uma promise:
// await function retornaValorRapido() {
//     return 10
// }

async function executar() {
    let valor = await retornarValor() 

    await esperarPor(2000)
    console.log(`Async/Await ${valor}`)
    
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 1}`)
    
    await esperarPor(2000)
    console.log(`Async/Await ${valor + 2}`)

    return valor + 3
}


// let resultado = await executar() // node não permite await no modulo

async function executarDeVerdade() {
    let resultado = executar()
    console.log(resultado)
}