// Arrow functions
const frase = 'Eu curto a Jogar'

const sepFrases = (texto) => {
  return texto.split(' ')
}

console.log("Ex1:",sepFrases(frase))

// Quando há apenas um parâmetro na função não é necessário o uso de parênteses
const separaFrase = texto => texto.split(' ')

console.log("Ex2:",separaFrase(frase))

//ñ precisa usar "{}" e nem o "return" se tiver apenas uma expressão dentro da função
const soma = (a, b) => a + b
console.log("Ex3:",soma(5, 10))