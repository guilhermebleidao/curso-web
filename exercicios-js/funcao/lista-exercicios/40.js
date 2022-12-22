// 40
function conceituarNotas(notas) {
    let conceito
    notas.forEach(nota => {
        if (nota < 5) {
            conceito = 'D'
        } else if (nota < 7) {
            conceito = 'C'
        } else if (nota < 9) {
            conceito = 'B'
        } else (
            conceito = 'A'
        )
        console.log(`Nota ${nota}, conceito ${conceito}`)
    });
}

conceituarNotas([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])