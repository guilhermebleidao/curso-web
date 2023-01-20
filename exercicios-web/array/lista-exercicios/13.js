function filtrarElementos(array) {
    const filtrarNumeros = e => typeof e == 'number' 
    return array.filter(filtrarNumeros)
}

console.log(filtrarElementos(['Javascript', 1, '3', 'Web', 20]))
console.log(filtrarElementos(['a', 'b']))