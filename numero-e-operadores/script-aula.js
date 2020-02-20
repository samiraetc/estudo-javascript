var idade = 2e2;
console.log(idade);

idade = 2e10;
console.log(idade);

var exSoma = 100 + 50; //150
var exSubtracao = 100 - 50; //50
var exMultiplicacao = 100 * 2; //20
var exDivisao = 100 / 2; //4
var exExpoente = 2 ** 4; //16
var modulo = 14 % 5;


var exSoma2 = '100' + 50; //10050
var exSubtracao2 = '100' - 50; //50
var exMultiplicacao2 = '100'  * '2'; //200
var exDivisao2 = 'Comprei 10' / 2; //NaN (Not a Number)

//Nan - NOT A NUMBER
var  exNumero = 80;
var exUnidade = 'kg';
var exPeso = exNumero  + exUnidade;  //80kg;
var pesoPorDois = exPeso / 2; //NaN

// A ORDEM IMPORTA;
//parenteses para priorizar uma expressão.

var total1 = 20 + 50 * 2; //30
var total2 = (20 + 5) * 5; //50
var total3 = 20 / 2 * 5; //50
var total4 = 10 + 10 * 2 + 20 / 2; //40

//OPERADORES ARITMETICOS UNÁRIOS

var x = 5;
console.log (--x);
console.log (++x);

