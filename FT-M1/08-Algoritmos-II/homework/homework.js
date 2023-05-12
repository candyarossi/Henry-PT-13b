"use strict";
// No cambies los nombres de las funciones.

//   Implementar el método conocido como quickSort para ordenar de menor a mayor
//   el array recibido como parámetro
//   Devolver el array ordenado resultante
//   Tu código:

// Opción 1

function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array[0],
    left = [],
    right = [];

  for (let i = 0; i < array.length; i++) {
    if (i === indice) {
      continue;
    } else {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

// Opción 2

function quickSort(array) {
  if (array.length <= 1) return array;

  let indice = Math.floor(Math.random() * array.length);
  let pivot = array[indice],
    left = [],
    right = [];

  for (let i = 0; i < array.length; i++) {
    if (i === indice) {
      continue;
    } else {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

//   Implementar el método conocido como mergeSort para ordenar de menor a mayor
//   el array recibido como parámetro
//   Devolver el array ordenado resultante
//   Tu código:

// Opción 1

function mergeSort(array) {
  if (array.length <= 1) return array;

  let half = Math.floor(array.length / 2);
  let left = array.slice(0, half);
  let right = array.slice(half);

  array = [];

  left = mergeSort(left);
  right = mergeSort(right);

  while (left.length && right.length) {
    left[0] < right[0] ? array.push(left.shift()) : array.push(right.shift());
  }

  return array.concat(left, right);
  // return [...left, ...right];
}

// Opción 2

function mergeSort(array) {
  if (array.length === 1) return array;

  let half = Math.floor(array.length / 2);
  let left = array.slice(0, half);
  let right = array.slice(half);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let iLeft = 0,
    iRight = 0;

  let array = [];

  while (iLeft < left.length && iRight < right.length) {
    if (left[iLeft] < right[iRight]) {
      array.push(left[iLeft]);
      iLeft++;
    } else {
      array.push(right[iRight]);
      iRight++;
    }
  }

  return array.concat(left.slice(iLeft)).concat(right.slice(iRight));
}

// Opción 3

function mergeSort(array) {
  if (array.length === 1) return array;

  let half = Math.floor(array.length / 2);
  let left = array.slice(0, half);
  let right = array.slice(half);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let array = [];

  while (left.length && right.length) {
    left[0] < right[0] ? array.push(left.shift()) : array.push(right.shift());
  }

  return [...array, ...left, ...right];
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
