//JavaScript Array metodo Map()

//exemplo usando array
const cursos = ["HTML", "CSS", "JS", "Python", "React"];
cursos.map((c, i) => {
    console.log("Curso: " + c + " Posição: " + i);
});

console.log('\n')

//exemplo usando array com objetos dentro
const vencedores = [
  {
    nome: "Equipe Super",
    pais: "Brasil",
  },
  {
    nome: "Time Maximo",
    pais: "EUA",
  },
  {
    nome: "Mega Grupo",
    pais: "Canadá",
  },
];

var podioPorPais = vencedores.map(function (item) {
  return console.log("Pais: " + item.pais);
});
