const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// Object.defineProperty(aprovados, 'forEach2', {
//     value: function(callback) {
//         for (let i = 0; i < this.length; i++) {
//             callback(this[i], i, this)
//         }
//     }
// })

Array.prototype.forEach2 = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

aprovados.forEach2(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})