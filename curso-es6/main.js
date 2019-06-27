function soma(a = 3, b = 6){ // função normal
    return a + b;
}

const soma2 = (a = 3, b = 6) => a + b; // arrow function

console.log(soma(1));
console.log(soma());

console.log(soma2(1));
console.log(soma2());