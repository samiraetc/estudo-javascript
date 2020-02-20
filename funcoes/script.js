//Crie uma função para verificar se um valor é truthy

function teste (valor) {

  return !!valor;
}

console.log(teste(23));
// Crie uma função matemática que retorne o perimetro de um quadrado
//lembrando: perimetro é a soma dos quatro lados do quadrado

function quadrado (valor) {
  return valor * 4;
}

console.log(quadrado(4));

//Crie uma função que receba seu nome completo
//Ela deve possuir os parametros: nome e sobrenome

function nomeCompleto (nome, sobrenome) {
  return `Meu nome é ${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Samira','Costa'));

//Crie uma fução que verifica se um numero é par 

function numeroPar (numero) {
  var modulo = numero % 2;
  if(modulo === 0) {
    console.log('Esse numero é par');
  } else {
    console.log('Esse numero é ímpar');
  }

}

console.log(numeroPar(7));

//Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)

function verificacao (dado) {

  return console.log(typeof dado);
}

console.log(verificacao(23));

//addEventListener é uma funçao nativa do JavaScript
//o primeiro parametro é o evento que ocorre e o seguinto é o callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evento 'scroll' ocorrer;

addEventListener('click', function (){
  console.log('Samira Costa');
})


//Corrija o erro abaxio
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;

}

function jaVisitei (paisesVisitados) {
  
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));