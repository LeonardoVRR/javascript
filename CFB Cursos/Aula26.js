// Função dentro de Função
const soma = (...valores) => {
    const somar = val => {
        let res = 0
        for (v of val) {
            res += v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(10,5,15))

// Função chamando outra Função
const somar = val => {
    let res = 0
    for (v of val) {
        res += v
    }
    return res
}

const Soma = (...valores) => {
    return somar(valores)
}

console.log(soma(10,5,15))