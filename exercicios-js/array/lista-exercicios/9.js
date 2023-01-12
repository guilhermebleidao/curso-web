function repetir(arg, vezes) {
    let array = []
    for (let i = 0; i < vezes; i++) {
        array.push(arg)
    }
    return array
}

console.log(repetir('código', 2))
console.log(repetir(7, 3))