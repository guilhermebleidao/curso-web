function novoElemento(tagName, className) {
    const elemento = document.createElement(tagName)
    elemento.classList.add(className)
    return elemento
}

function Cano(invertido = false) {
    this.elemento = novoElemento('div', 'cano')

    const tubo = novoElemento('div', 'tubo')
    const falange = novoElemento('div', 'falange')
    this.elemento.appendChild(invertido ? tubo : falange)
    this.elemento.appendChild(invertido ? falange : tubo)

    this.setAltura = altura => tubo.style.height = `${altura}px`
}

function Canos(altura, abertura, x) {
    this.elemento = novoElemento('div', 'canos')

    this.superior = new Cano(true)
    this.inferior = new Cano(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = _ => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`
    this.getLargura = _ => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)
}

function Passarinho(alturaJogo) {
    this.elemento = novoElemento('img', 'passarinho')
    this.elemento.src = './imgs/passaro.png'

    this.getY = _ => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = x => this.elemento.style.bottom = `${x}px`
    
    let voando = false
    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = _ => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo - this.elemento.clientHeight

        if (novoY < 0) {
            this.setY(0)
        } else if (novoY > alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }
    }

    this.setY(alturaJogo / 2)
}

function Barreiras(altura, largura, abertura, espaco, pontuar) {
    this.elementos = [
        new Canos(altura, abertura, largura),
        new Canos(altura, abertura, largura + espaco),
        new Canos(altura, abertura, largura + 2 * espaco),
        new Canos(altura, abertura, largura + 3 * espaco)
    ]

    const deslocamento = 3
    this.animar = _ => {
        this.elementos.forEach(barreira => {
            barreira.setX(barreira.getX() - deslocamento)

            if (barreira.getX() < -barreira.getLargura()) {
                barreira.setX(barreira.getX() + espaco * this.elementos.length)
                barreira.sortearAbertura()
            }

            const meio = largura / 2
            const cruzouMeio = barreira.getX() + deslocamento >= meio && barreira.getX() < meio
            cruzouMeio && pontuar()
        })
    }
}


function Contador() {
    this.elemento = novoElemento('div', 'contador')

    this.atualizarContagem = pontos => {
        this.elemento.innerHTML = pontos
    }

    this.atualizarContagem(0)
}

// remover
// const areaJogo = document.querySelector('[wm-flappy]')
// areaJogo.appendChild(new Passarinho().elemento)
// areaJogo.appendChild(new Canos(700, 200, 800).elemento)

// const contador = novoElemento('div', 'contador')
// contador.innerHTML = '100'

function FlappyBird() {
    let pontos = 0
    
    const areaJogavel = document.querySelector('[wm-flappy]')
    const altura = areaJogavel.clientHeight
    const largura = areaJogavel.clientWidth

    const contador = new Contador()
    const barreiras = new Barreiras(altura, largura, 200, 400, _ => contador.atualizarContagem(++pontos))
    const passarinho = new Passarinho(altura)

    areaJogavel.appendChild(passarinho.elemento)
    areaJogavel.appendChild(contador.elemento)
    barreiras.elementos.forEach(barreira => {
        areaJogavel.appendChild(barreira.elemento)
    })

    this.start = _ => {
        const temporizador = setInterval(() => {
            passarinho.animar()
            barreiras.animar()

            if (colidiu(passarinho, barreiras)) {
                clearInterval(temporizador)
            }
        }, 20);
    }
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
                        && b.left + b.width >= a.left

    const vertical = a.top + a.height >= b.top
                        && b.top + b.height >= a.top

    return horizontal && vertical
}

function colidiu(passarinho, barreiras) {
    let colidiu = false
    barreiras.elementos.forEach(canos => {
        if (!colidiu) {
            colidiu = estaoSobrepostos(passarinho.elemento, canos.superior.elemento)
                        || estaoSobrepostos(passarinho.elemento, canos.inferior.elemento)
        }
    })

    return colidiu
}


new FlappyBird().start()







