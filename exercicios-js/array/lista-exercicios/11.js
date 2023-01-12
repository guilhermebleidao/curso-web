function receberPrimeiroEUltimoelemento(array) {
    return [array[0], array[array.length - 1]]
}

console.log(receberPrimeiroEUltimoelemento([7, 14, 'olá']))
console.log(receberPrimeiroEUltimoelemento([-100, 'aplicativo', 16]))