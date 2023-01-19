// setTimeout(() => {
//     console.log('Executando a callback')

//     setTimeout(() => {
//         console.log('Executando a callback')
    
//         setTimeout(() => {
//             console.log('Executando a callback')
//         }, 2000);
//     }, 2000);
// }, 2000);

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando a promise')
            resolve()
        }, tempo);
    })
}

esperarPor(2000)
    .then(_ => esperarPor(2000))
    .then(_ => esperarPor(2000))
    .then(_ => esperarPor(2000))