"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

// Opción Clases

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.length = 1;
  }
  size() {
    return this.length;
  }
  insert(value) {
    if (value > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    } else if (value < this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
      return;
    }
    this.length++;
  }
  contains(value) {
    if (value === this.value) return true;
    if (value > this.value) {
      if (!this.right) {
        return false;
      } else {
        this.right.contains(value);
      }
    } else if (value < this.value) {
      if (!this.left) {
        return false;
      } else {
        this.left.contains(value);
      }
    }
  }
  depthFirstForEach(cb, order = "in-order") {
    // in-order
    // I -> R -> D
    if (order === "in-order") {
      this.left && this.left.depthFirstForEach(cb, order);
      cb(this.value);
      this.right && this.right.depthFirstForEach(cb, order);
    }
    // pre-order
    // R -> I -> D
    if (order === "pre-order") {
      cb(this.value);
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
    }
    // post-order
    // I -> D -> R
    if (order === "post-order") {
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
    }
  }
  breadthFirstForEach(cb, array = []) {
    cb(this.value);
    if (this.left) array.push(this.left);
    if (this.right) array.push(this.right);
    if (array.length > 0) array.shift().breadthFirstForEach(cb, array);
  }
}

// Opción Funciones

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.length = 1;
}

BinarySearchTree.prototype.size = function () {
  return this.length;
};

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    return;
  }
  this.length++;
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true;
  if (value > this.value) {
    if (!this.right) {
      return false;
    } else {
      this.right.contains(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      this.left.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (
  cb,
  order = "in-order"
) {
  // in-order
  // I -> R -> D
  if (order === "in-order") {
    this.left && this.left.depthFirstForEach(cb, order);
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb, order);
  }
  // pre-order
  // R -> I -> D
  if (order === "pre-order") {
    cb(this.value);
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
  }
  // post-order
  // I -> D -> R
  if (order === "post-order") {
    this.left && this.left.depthFirstForEach(cb, order);
    this.right && this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  cb(this.value);
  if (this.left) array.push(this.left);
  if (this.right) array.push(this.right);
  if (array.length > 0) array.shift().breadthFirstForEach(cb, array);
};

// depth = [8, 3, 10, 1, 6, 14, 4, 7, 13]
// array = []

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
