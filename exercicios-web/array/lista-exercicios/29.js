function segundoMaior(array) {
    let indiceMaior = 0
    let segundoMaior = 0

    array.forEach( (e, i) => {
        if (e > array[indiceMaior]) {
            indiceMaior = i 
        }
    })

    array.forEach( (e, i) => {
        if (e > segundoMaior && i != indiceMaior) {
            segundoMaior = e
        }
    })

    return segundoMaior
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))