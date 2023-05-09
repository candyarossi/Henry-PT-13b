"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  // 24 | 2
  // 12 | 2
  //  6 | 2
  //  3 | 3
  //  1 | 1

  // Opción 1
  const resultado = [1];
  for (let factor = 2; factor <= num; factor++) {
    while (num % factor === 0) {
      resultado.push(factor);
      num = num / factor;
    }
  }
  return resultado; // O(n^2)

  // Opción 2
  let factores = [1];
  let divisor = 2;
  while (num > 2) {
    if (num % divisor === 0) {
      factores.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  return factores; // O(n)

  // Opción 3
  function getPrime(num, p = []) {
    for (let i = 2; i <= num; i++)
      p.every((numP) => i % numP !== 0) && p.push(i);

    return p;
  }
  let arrFactor = [1];
  while (num > 1) {
    let prime = getPrime(num);
    let factor = prime.find((a) => num % a === 0);

    arrFactor.push(factor);
    num = num / factor;
  }
  return arrFactor;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var hadChange = true;
  while (hadChange) {
    hadChange = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
        swap(array, i, i + 1);
        hadChange = true;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    var j = i - 1;
    const current = array[i];
    while (j >= 0 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, min, i);
    }
  }
  return array;
}

// Complejidad de los ordenamientos: O(n^2)

// Modularizamos el swap!
function swap(array, a, b) {
  var aux = array[a];
  array[a] = array[b];
  array[b] = aux;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
