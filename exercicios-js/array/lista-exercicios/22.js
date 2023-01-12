function funcaoDaSorte(n) {
    const numero = (Math.random() * 10).toFixed(0)
    return (n == numero ? 'Parabéns!' : 'Que pena!') + ` O número sorteado foi o ${numero}`
}

console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))