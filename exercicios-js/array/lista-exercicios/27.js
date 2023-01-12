function inverter(objeto) {
    const resultado = {}
    Object.entries(objeto).forEach(entry => {
        resultado[entry[1]] = entry[0]
    })
    return resultado
}

console.log(inverter({a: 1, b: 2, c: 3}))