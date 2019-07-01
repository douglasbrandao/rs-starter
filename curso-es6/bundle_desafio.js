/*

// Resolução do desafio número 1 do módulo 1 do curso de ecmascript 6

class Usuario{

    constructor(email, senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }

    // método para retornar se o usuário é admin ou não
    
    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(email, senha){
        super(email, senha);
        this.admin = true;
    }
}

const User1 = new Usuario('douglasfrb@gmail.com', '123456');
const Adm1 = new Admin('douglasfrbrandao@gmail.com', '123456');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());
*/
// desafio 2

/* 
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat'},
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat'},
    { nome: 'Lucas', idade: 30, empresa: 'Facebook'}
]
*/

/* desafio 2.1
const usuario_map = usuarios.map(elem => elem.idade);

console.log(usuario_map);
*/

/* desafio 2.2
const usuario_filter = usuarios.filter(elem => elem.idade >= 18 && elem.empresa === 'Rocketseat');

console.log(usuario_filter);
*/

/* desafio 2.3
const usuario_find = usuarios.find(elem => elem.empresa === 'Google');

console.log(usuario_find);
*/

/* desafio 2.4
const usuario_uo = usuarios.map(elem => ({ ...elem, idade: elem.idade * 2 })).filter(elem => elem.idade <= 50);

console.log(usuario_uo);
*/
// desafio 3

/* desafio 3.1
const arr = [1, 2, 3, 4, 5]; ;

console.log(arr.map(item => item + 10));
*/

/* desafio 3.2 
const usuario = { nome: 'Diego', idade: 23};

const mostraIdade = (user) => user.idade;

console.log(mostraIdade(usuario));
*/

/* desafio 3.3 
const nome = 'Douglas';
const idade = 23;

const mostraUsuario = (nome='Diego', idade=27) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
*/

/* desafio 3.4
const promise = () => new Promise((resolve, reject) => resolve());

console.log(promise);
*/

/* desafio 4.1
const empresa = {  
    nome: 'Rocketseat',  
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    } 
};

const { nome, endereco: { cidade, estado }} = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);
*/

/* desafio 4.2
const usuario = {
    nome: 'Douglas',
    idade: 27,
}

const mostraInfo = ({nome, idade}) => `${nome} tem ${idade} anos`;

console.log(mostraInfo(usuario));
*/

/* desafio 5.1.1

const arr = [1, 2, 3, 4, 5, 6];

const [ primeiro, ...resto ] = arr;

console.log(primeiro);
console.log(resto);
*/

/* desafio 5.1.2
const soma = (...numeros) => numeros.reduce((total, next) => total + next);

console.log(soma(1, 2, 3, 4, 5, 6));
*/

/* desafio 5.2

const usuario = {  
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };

const usuario3 = { ...usuario, endereco: {...usuario.endereco, cidade: 'Lontras'}};

console.log(usuario3);
*/

/* desafio 6

const usuario = 'Diego';
const idade = 23;

console.log(`O usuário ${usuario} possui ${idade} anos`);
*/

/* desafio 7

const nome = 'Diego';
const idade = 23;

const usuario = {
    nome, 
    idade,
    cidade: 'Rio do Sul'
}

console.log(usuario);
*/
"use strict";
