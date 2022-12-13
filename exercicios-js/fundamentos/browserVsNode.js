/* Contexto do browser:
 * Objeto de contexto global -> Windows (acessável pelo "this")
 * - variável var e funcoes globais vão parar no contexto global (ex.: window.a, this.a, windows.f1(), this.f1())
 * - variável global let e const não vão
 * 
 * Contexto do Node:
 * Objeto de contexto global -> global
 * Cada arquivo é um módulo diferente
 * - this === module.exports (local)
 * -
*/

let a = 3
console.log(this.a) // undefined
console.log(global.a) // undefined
console.log(a)

global.b = 123
console.log(global.b)

this.c = 456
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

this.d = false
this.e = 'texto'
console.log(module.exports)

// criando uma variavel sem var e let, ela vai para o global. NÃO FAÇA!
abc = 3
console.log(global.abc)