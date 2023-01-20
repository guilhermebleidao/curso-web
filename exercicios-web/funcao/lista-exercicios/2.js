// 02
function classificarTriangulos(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificarTriangulos(3, 3, 3))
console.log(classificarTriangulos(3, 4, 3))
console.log(classificarTriangulos(9, 3, 4))