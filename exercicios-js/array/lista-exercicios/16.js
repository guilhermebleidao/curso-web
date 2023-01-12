function checarAnoBissexto(ano) {
    const multiplo4 = ano % 4 == 0
    const multiplo100 = ano % 100 == 0
    const multiplo400 = ano % 400 == 0
    return (multiplo4 && !multiplo100) || multiplo400
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))