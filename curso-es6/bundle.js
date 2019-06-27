"use strict";

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  // função normal
  return a + b;
}

var soma2 = function soma2() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}; // arrow function


console.log(soma(1));
console.log(soma());
console.log(soma2(1));
console.log(soma2());
