function receberSomenteOsParesDeIndicesPares(array) {
    const filtrarPares = (elemento, indice) => elemento % 2 == 0 && indice % 2 == 0 
    return array.filter(filtrarPares)
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))