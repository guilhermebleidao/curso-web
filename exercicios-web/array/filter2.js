Array.prototype.filter2 = function (callback) {
    const novoArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) { novoArray.push(this[i]) }
    }
    return novoArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const caro = e => e.preco >= 500
const fragil = e => e.fragil

console.log(produtos.filter2(caro).filter2(fragil))