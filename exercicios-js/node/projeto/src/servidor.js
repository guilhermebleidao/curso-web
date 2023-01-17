const porta = '3003'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

// Fazendo passar por middleware:
// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware1...')
//     next()
// })

// app.use atende a todas as requisições
// app.use((req, res, next) => {
//     res.send({ nome: 'Notebook', preco: 123.45}) // já converte para json
// })

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // já converte para json
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`)
})