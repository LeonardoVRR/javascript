// // Funções Geradoras
// function* generatorFunction() {
//   yield "Neo";
//   yield "Morpheus";
//   yield "Trinity";

//   return "The Oracle";
// }

// const generator = generatorFunction();

// // next(): usado p/ interar manualmente sobre um objeto generator
// // value: usado p/ mostrar somente o valor de um objeto generator
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next());
// console.log(generator.next());

// // interando sobre um objeto generator com for...of
// const gerador = ["vermelho", "azul", "verde"];

// for (const value of gerador) {
//   console.log(value);
// }

// Fechando um gerador

// Usando o return()
// function* generatorFunction() {
//   yield "Neo";
//   yield "Morpheus";
//   yield "Trinity";
// }

// const generator = generatorFunction();

// console.log(generator.next());
// console.log(generator.return("There is no spoon!"));
// console.log(generator.next());

// Usando o throw()
// Define a generator function with a try...catch
// function* generatorFunction() {
//   try {
//     yield "Neo";
//     yield "Morpheus";
//   } catch (error) {
//     console.log(error);
//   }
// }

// // Invoke the generator and throw an error
// const generator = generatorFunction();

// console.log(generator.next())
// console.log(generator.throw(new Error('Amo Pudim')))

//Como passar valores a um gerador
function* generatorFunction() {
  console.log(yield);
  console.log(yield);

  return "The end";
}

const generator = generatorFunction();

generator.next();
generator.next(100);
generator.next(200);