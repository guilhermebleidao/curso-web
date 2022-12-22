// 11
function eBissexto(ano) {
    let bissexto
    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        console.log('É bissexto')
        bissexto = true
    } else {
        console.log('Não é bissexto')
        bissexto = false
    }
    return bissexto
}

console.log(eBissexto(2000))
console.log(eBissexto(2013))