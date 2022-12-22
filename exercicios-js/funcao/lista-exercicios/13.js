// 13
function eDiaUtil(dia) {
    switch (dia % 7) {
        case 0: case 1:
            return false
        default:
            return true
    }
}

console.log(eDiaUtil(1))
console.log(eDiaUtil(2))
console.log(eDiaUtil(6))
console.log(eDiaUtil(7))
console.log(eDiaUtil(8))
console.log(eDiaUtil(9))
console.log(eDiaUtil(14))
console.log(eDiaUtil(15))