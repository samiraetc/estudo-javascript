var possuiGraducao = false;
var possuiDoutorado = false;

if(possuiGraducao) {
  console.log('Possui Graduação')
} else if (possuiDoutorado) {
  console.log('Possui Doutorado')
}  else {
  console.log ('Não possui nada')
}

var nome = '';

if (nome) {

  console.log(nome);
} else {
  console.log ('Nome não existe')
}


if(!possuiGraducao) {
  console.log('Não possui graduação')
}




var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul': console.log('Olhe para o céu');
    break;
  case 'Amarelo': console.log('Olhe para os girassois');
    break;
  case 'Verde': console.log('Olhe para as arvores');
    break;
  default:
    console.log('Feche os olhos')


}