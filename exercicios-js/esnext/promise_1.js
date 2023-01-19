let a = 1
console.log(a)

let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(arrayOuString) {
    return arrayOuString[0]
}

p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letra => letra.toLowerCase())
    .then(console.log)