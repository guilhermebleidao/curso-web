function nomeDoMes(mes) {
    switch (mes) {
        case 1:
            return 'janeiro'
            break;
        case 2:
            return 'fevereiro'
            break
        case 3:
            return 'março'
            break;
        case 4:
            return 'abril'
            break;
        case 5:
            return 'maio'
            break;
        case 6:
            return 'junho'
            break;
        case 7:
            return 'julho'
            break;
        case 8:
            return 'agosto'
            break;
        case 9:
            return 'setembro'
            break;
        case 10:
            return 'outubro'
            break;
        case 11:
            return 'novembro'
            break;
        case 12:
            return 'dezembro'
            break;
        default:
            return 'mês inválido'
            break;
    }
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))
console.log(nomeDoMes(13))