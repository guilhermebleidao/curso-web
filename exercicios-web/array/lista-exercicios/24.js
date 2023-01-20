function contarCaractere(c, string) {
    const getChars = char => char == c
    return [...string].filter(getChars).length
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))