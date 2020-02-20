function areaQuadrado (lado) {
  return lado * lado;
}

areaQuadrado(4); //16
areaQuadrado(5); //25
areaQuadrado(2); //4

console.log(areaQuadrado(0))


//----------------------------------------------------------------\\


function soma (valor, valor1) {
  return valor + valor1
}

soma(1,2); //3
soma(15,5); //20

console.log(soma(15,5))

//----------------------------------------------------------------\\


function pi() {
  return 3.14;
}

var total = 5 * pi(); //15,7
console.log(total);

//----------------------------------------------------------------\\

function imc (peso, altura) {
  const imc = peso / (altura ** 2); // parametros
  return imc;
}


console.log(imc(80,1.80));  //argumentos

//----------------------------------------------------------------\\

function corFavorita (cor) {
  
  if (cor === 'Azul') {
    return 'Eu gosto de Azul';
  } else if (cor === 'Verde') {
    return 'Eu gosto de Verde';
  } else {
    return 'Eu não gosto de nada';
  }
}

console.log(corFavorita('Amarelo'))

//----------------------------------------------------------------\\


function mostraConsole() {
  console.log('Clique');
}

addEventListener('click', mostraConsole);

//----------------------------------------------------------------\\


function imc2 (peso, altura) {
  const imc = peso / (altura ** 2); // parametros
  console.log(imc);
}

imc2(80,1.80);  //argumentos


//----------------------------------------------------------------\\

function terceiraIdade(idade) {

  if (typeof idade !=='number') {
    console.log ('Preencha com um numero')
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }

}

console.log(terceiraIdade(65));

//----------------------------------------------------------------\\


function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;

  return `Faltam visitar ${totalPaises - paisesVisitados}, que tal iniciar uma nova jornada agora?`;

}

console.log(faltaVisitar(4));

//----------------------------------------------------------------\\

var profissao = 'Web Designer'
function dados () {
  var nome = 'Samira';
  var idade = 22;

  function outrosDados () {
    var endereco = 'Campinas';
    var idade = 21;

    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }

  return outrosDados()
}

console.log(dados());

//----------------------------------------------------------------\\


