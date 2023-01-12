function removerPropriedade(objeto, propriedade) {
    const copia = { ...objeto }
    delete copia[propriedade]
    return copia
}

const objeto = {a: '1', b: '2'}
const copia = removerPropriedade(objeto, 'a')
console.log(copia, Object.is(copia, objeto))

console.log(removerPropriedade({
    id: 20,
    nome: 'caneta',
    descricao: 'Não preenchido'
}, 'descricao'))