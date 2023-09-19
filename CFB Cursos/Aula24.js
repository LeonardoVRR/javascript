//Funções Anonimas

//ex1: armazenar a função anonima em uma variável
var greet = function () {
    console.log("Ex1: Welcome to Jungle");
};
  
greet();

//ex1: função anonima com parametros
var greet = function (platform) {
    console.log("Ex2: Welcome to", platform);
};
  
greet("classroom");

//ex3: executar uma função anonima imediatamente após a inicialização, isso também é conhecido como Função de Autoexecução
//Obs: para fazer isso basta colocar a função dentro de ()

(function () {
    console.log("Ex3: Welcome to Internet");
})();

//ex4: função anonima dentro de um metodo
setTimeout(function () {
    console.log("Ex4: Welcome to GeeksforGeeks!");
}, 2000); //essa função sera executada 2.000 ms depois