// 06
function jurosSimples(capitalInicial, juros, tempo) {
    return capitalInicial + (capitalInicial * juros * tempo)
}
function jurosCompostos(capitalInicial, juros, tempo) {
    return capitalInicial * Math.pow((1 + juros), tempo)
}

console.log(jurosSimples(10, 0.1, 5))
console.log(jurosCompostos(10, 0.1, 5))