// 34
function checarCaracteres(string1, string2) {
    let maior = string1 > string2 ? string1 : string2
    let menor = string1 < string2 ? string1 : string2
    let contem
    for (let i = 0; i < maior.length; i++) {
        contem = false
        for (let j = 0; j < menor.length; j++) {
            if (maior.charAt(i).toLowerCase() == menor.charAt(j).toLowerCase()) contem = true
        }
        if (contem == false) return false
    }
    return true
}

console.log(checarCaracteres('abcd', 'abcd'))
console.log(checarCaracteres('abcd', 'abdc'))
console.log(checarCaracteres('abcd', 'abc'))
console.log(checarCaracteres('abc', 'abcd'))
console.log(checarCaracteres('abcd', 'ABCD'))