// 27
function compararAlturas(altura1, taxaCrescimento1, altura2, taxaCrescimento2) {
    if (altura1 > altura2) {
        if (taxaCrescimento2 > taxaCrescimento1) {
            console.log(`A criança 2 ultrapassará a criança 1 em ${calcularUltrapassagem(altura1, taxaCrescimento1, altura2, taxaCrescimento2)} anos!`)
        }
    } else if (altura1 < altura2) {
        if (taxaCrescimento1 > taxaCrescimento2) {
            console.log(`A criança 1 ultrapassará a criança 2 em ${calcularUltrapassagem(altura2, taxaCrescimento2, altura1, taxaCrescimento1)} anos!`)
        }
    } else {
        if (taxaCrescimento1 > taxaCrescimento2) {
            console.log('A criança 1 ultrapassará a criança 2 em 1 ano')
        } else if (taxaCrescimento1 < taxaCrescimento2) {
            console.log('A criança 2 ultrapassará a criança 1 em 1 ano')
        } else {
            console.log(`Ninguém vai ultrapassar ninguém!`)
        }
    }
}

function calcularUltrapassagem(maior, taxaMenor, menor, taxaMaior) {
    let tempo = 0
    while (maior > menor) {
        maior += taxaMenor
        menor += taxaMaior
        tempo++
    }
    return tempo
}

compararAlturas(120, 5, 130, 4);
compararAlturas(130, 4, 120, 5);
compararAlturas(150, 4, 150, 5);
compararAlturas(150, 5, 150, 4);
compararAlturas(150, 5, 150, 5);