// Funcao em JS é First-Class Object (Citizens)

// criando de forma literal
function func1() {}

// armazenando em uma variavel
const func2 = function () {}

// armazenando em um array
const array = [function (a, b) { return a + b }, func1, func2]
console.log(array)

// armazenando em um atributo de um objeto
const obj = {}
obj.falar = function () { return 'oi' }
console.log(obj.falar())

// passando como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando') })

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)