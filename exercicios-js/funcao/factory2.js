function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.10
    }
}

console.log(criarProduto('teste', 123))