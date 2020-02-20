var contato ={
  nome: 'Samira',
  idade: 21,
  profissao: 'Web Designer',
  possuiFaculdade: false
}

console.log(contato)

//----------------------------------------------------------------\\


var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return lado * 4
  },
  evento: addEventListener('click', function() {
    console.log('Clicou');
  })
}


quadrado.lados
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))


//----------------------------------------------------------------\\

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
  
}

menu.backgroundColor = '#000';

menu.color = 'blue';

menu.esconder = function () {
  console.log('Escondi');
}


var bg = menu.backgroundColor;

//----------------------------------------------------------------\\


