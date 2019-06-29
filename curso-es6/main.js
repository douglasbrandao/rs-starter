// REST

// objeto

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}

const { nome, ...resto } = usuario

/*console.log(nome);
console.log(resto);*/

// array

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

/*console.log(a);
console.log(b);
console.log(c);*/

// functions

function soma(...params){
    return params.reduce((total, next) => total + next); // utilizando arrow functions
}

// console.log(soma(1, 2, 3, 4));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

// console.log(arr3);

const usuario1 = {
    nome: 'Diego', 
    idade: 24
};

console.log(usuario1);

const usuario2 = { ...usuario1, empresa: 'Rocketseat'};

console.log(usuario2);