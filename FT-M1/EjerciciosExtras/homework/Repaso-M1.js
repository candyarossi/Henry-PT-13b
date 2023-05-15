const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array) {
  // Tu código aca:
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    Array.isArray(array[i])
      ? (count += countArray(array[i]))
      : (count += array[i]);
  }
  return count;
};

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  let count = 0;
  for (let prop in obj) {
    count++;
    if (typeof obj[prop] === "object" && !Array.isArray(obj[prop]))
      count += countProps(obj[prop]);
  }
  return count;
};

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  var cambios = 0,
    current = this.head;
  while (current) {
    if (isNaN(current.value)) {
      current.value = "Kiricocho";
      cambios++;
    }
    current = current.next;
  }
  return cambios;
};

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

// Opción 1

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  let queueOrderer = new Queue();
  while (queueOne.size() || queueTwo.size()) {
    if (queueOne.size()) queueOrderer.enqueue(queueOne.dequeue());
    if (queueTwo.size()) queueOrderer.enqueue(queueTwo.dequeue());
  }
  return queueOrderer;
};

// Opción 2

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  const newQueue = new Queue();
  while (queueOne.size() || queueTwo.size()) {
    const valueOne = queueOne.dequeue();
    const valueTwo = queueTwo.dequeue();
    if (valueOne) newQueue.enqueue(valueOne);
    if (valueTwo) newQueue.enqueue(valueTwo);
  }
  return newQueue;
};

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  // Tu código aca:
  return function (num) {
    return num * multiplier;
  };
};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol

// Opción 1

BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  if (this.value === null) return 0;
  if (this.left === null && this.right === null) return this.value;
  if (this.left === null) return this.value + this.right.sum();
  if (this.right === null) return this.value + this.left.sum();
  return this.value + this.left.sum() + this.right.sum();
};

// Opción 2

BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  let sum = 0;
  if (this.left) sum += this.left.sum();
  if (this.right) sum += this.right.sum();
  return sum + this.value;
};

module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};
