"use strict";

// Comenten y descomenten las diferentes opciones de código para poder probarlas

function BinarioADecimal(num) {
  // Convertimos un número binario a decimal
  // Recibimos un string
  // Devolvemos un integer

  // Opción 1
  var acc = 0;
  //var numberToString = String(num);
  var numberToString = num.toString();
  for (var i = numberToString.length - 1, j = 0; i >= 0; i--, j++) {
    acc = acc + Math.pow(2, j) * numberToString[i];
  }
  return acc;

  // Opción 2
  var aux = Array.from(num).reverse();
  var dec = 0;
  for (let i = 0; i < aux.length; i++) {
    dec += aux[i] * 2 ** i;
  }
  return dec;

  // Opción 3
  var array = num.split("").map((element) => Number(element));
  return array.reduce((a, b) => a * 2 + b);
}

function DecimalABinario(num) {
  // Convertimos un número decimal a binario
  // Recibimos un string
  // Devolvemos un integer

  // Opción 1
  var binary = "";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;

  // Opción 2
  var numBinary = "";
  for (let i = num; i >= 1; i = Math.trunc(i / 2)) {
    numBinary = (i % 2) + numBinary;
  }
  return numBinary;

  // Opción 3
  let rta = [];
  while (num > 0) {
    rta.push(num % 2);
    num = Math.floor(num / 2);
  }
  return rta.reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
