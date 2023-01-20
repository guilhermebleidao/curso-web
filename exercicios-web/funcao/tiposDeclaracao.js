console.log(soma(3, 4))
// console.log(sub(3, 4)) // erro! funcao nao inicializada
// console.log(multi(3, 4)) // erro! funcao nao inicializada

/* function declaration
 * o interpretador carrega antes da execucao
*/
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const multi = function multi(x, y) { // em debug o nome aparece
    return x * y
}