function despesasTotais(array) {
    const getPrecos = e => e.preco
    const somar = (acumulador, valor) => acumulador + valor
    return array.map(getPrecos).reduce(somar)
}

console.log(despesasTotais([
    {nome: 'Jornal online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'Entretenimento', preco: 150}
]))

console.log(despesasTotais([
    {nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99},
    {nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.90}
]))