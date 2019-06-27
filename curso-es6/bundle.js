"use strict";

var usuario = {
  nome: 'Douglas',
  idade: 27,
  endereco: {
    cidade: 'Cuiabá',
    estado: 'MT'
  }
};
/*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/
//console.log(nome, idade, cidade);
// Desestruturação

/*
const { nome, idade, endereco: { cidade } } = usuario;

console.log(nome, idade, cidade);
*/

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  // desestruturação por parâmetros em funções
  console.log(nome, idade);
}

mostraNome(usuario);
