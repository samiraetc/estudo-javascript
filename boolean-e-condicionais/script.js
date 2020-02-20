// Verifique se a sua idade é maior do que a de algum parente
var idade1 = 21;
var idade2 = 21;

// Dependendo do resultado coloque no console 'É maior', 'É igual
if (idade1 === idade2) {
  console.log('É igual');
} else if (idade1 > idade2) {
  console.log('É maior');
} else {
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);  //3
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';  //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo;  //false
var dinheiroNaConta = 0; //true

// Compare o total de habitantes do Brasil com China (valor em mi
var brasil = 207
var china = 1304

if (brasil === china) {
  console.log ('Os paises tem a mesma quantidade de habitantes')
} else if (brasil > china) {
    console.log('O brasil tem uma população maior')
} else {
  console.log ('China tem a população maior')
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
 } else {
  console.log('Falso');
 }
 // O que irá aparecer no console?
 if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
 } else {
  console.log('Falso');
 }