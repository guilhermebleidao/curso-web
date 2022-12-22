// 07
function baskhara(a, b, c) {
    let delta = Math.pow(b, 2) - 4 * a * c
    if (delta < 0) {
        return 'Delta é negativo'
    } else {
        let raiz1 = (-1 * b + Math.sqrt(delta)) / (2 * a)
        let raiz2 = (-1 * b - Math.sqrt(delta)) / (2 * a)
        return [raiz1, raiz2]
    }
}

console.log(baskhara(2, -7, 3))
console.log(baskhara(3, 2, -8))