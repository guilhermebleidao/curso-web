let valor // não inicializada
console.log(valor)

valor = null // não possui valor
console.log(valor)
// console.log(valor.toSting()) // erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined. use delete
console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)