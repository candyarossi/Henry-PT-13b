/* -----------------------------------SCOPE-&-HOISTING----------------------------------- */

/*
Investiga cuál es la diferencia entre declarar una variable con var y directamente 
asignarle un valor. 

Asignar un valor a una variable no declarada implica crearla como variable global
(se convierte en una propiedad del objeto global) cuando la asignación es ejecutada.
*/

/* Ejercicio 1 */

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function (a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  };
  f(a, b, c);
  console.log(b);
};
c(8, 9, 10);
console.log(b);
console.log(x);

/* Luego del Hoisting: */

var x;
var a;
var b;
var c;
x = 1;
a = 5;
b = 10;
c = function (a, b, c) {
  var f;
  var x;
  x = 10;
  console.log(x); // 10
  console.log(a); // 8
  f = function (a, b, c) {
    var x;
    b = a;
    console.log(b); // 8
    b = c;
    x = 5;
  };
  f(a, b, c);
  console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1

/*
Imprime: 
10
8
8
9
10
1
*/

/* -------------------------------------------------------------------------------------- */

/* Ejercicio 2 */

console.log(bar);
console.log(baz);
foo();
function foo() {
  console.log("Hola!");
}
var bar = 1;
baz = 2;

/* Luego del Hoisting: */

var bar;
function foo() {
  console.log("Hola!");
}
console.log(bar);
console.log(baz);
foo();
bar = 1;
baz = 2;

/*
Imprime: 
Error -> baz is not declared.
*/

/* -------------------------------------------------------------------------------------- */

/* Ejercicio 3 */

var instructor = "Tony";
if (true) {
  var instructor = "Franco";
}
console.log(instructor);

/* Luego del Hoisting: */

var instructor;
instructor = "Tony";
if (true) {
  instructor = "Franco";
}
console.log(instructor);

/*
Imprime: 
Franco
*/

/* -------------------------------------------------------------------------------------- */

/* Ejercicio 4 */

var instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor = "Franco";
    console.log(instructor);
  }
})();
console.log(instructor);

/* Luego del Hoisting: */

var instructor;
instructor = "Tony";
console.log(instructor);
(function () {
  if (true) {
    var instructor;
    instructor = "Franco";
    console.log(instructor);
  }
})(); // IIFE
console.log(instructor);

/*
Imprime: 
Tony
Franco
Tony
*/

/* -------------------------------------------------------------------------------------- */

/* Ejercicio 5 */

/*
Aclaraciones con respecto a variables VAR, LET y CONST:

- Las declaraciones var tienen un ámbito global o un ámbito función/local, 
  mientras que let y const tienen un ámbito de bloque.
- Las variables var pueden ser modificadas y re-declaradas dentro de su 
  ámbito; las variables let pueden ser modificadas, pero no re-declaradas; 
  las variables const no pueden ser modificadas ni re-declaradas.
- Todas ellas se elevan a la parte superior de su ámbito. Pero mientras 
  que las variables var se inicializan con undefined, let y const no se 
  inicializan.
- Mientras que var y let pueden ser declaradas sin ser inicializadas, 
  const debe ser inicializada durante la declaración. 
*/

var instructor = "Tony";
let pm = "Franco";
if (true) {
  var instructor = "The Flash";
  let pm = "Reverse Flash";
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm);

/* Luego del Hoisting: */

var instructor;
let pm;
instructor = "Tony";
pm = "Franco";
if (true) {
  let pm;
  instructor = "The Flash";
  pm = "Reverse Flash";
  console.log(instructor);
  console.log(pm);
}
console.log(instructor);
console.log(pm);

/*
Imprime: 
The Flash
Reverse Flash
The Flash
Franco
*/

/* ----------------------------------COERCIÓN-DE-DATOS----------------------------------- */

/*
El intérprete de JS hace la conversión de tipos para adaptarse a las operaciones que se 
definen en el código. 
*/

// Operación matemática -> Intentará convertir los extremos en números
6 / "3"  => 2
"2" * "3"  => 6

// Operación matemática, pero luego del primer + detecta una nueva 'suma' con una string, 
// por lo cual convierte a string el primer valor (9) y lo concatena con 'px'
4 + 5 + "px"  => '9px'

// Detecta una string en primer lugar y concatena, lo mismo con el segundo +
"$" + 4 + 5  => '$45'

// Operación matemática -> Intentará convertir los extremos en números
"4" - 2  => 2

// Operación matemática -> Intentará convertir los extremos en números pero no puede 
// convertir el '4px' por lo cual el resultado es 'Not a Number'
"4px" - 2  => NaN

// Para JS la división por 0 da Infinity
7 / 0  => Infinity

// Estamos intentando acceder a la propiedad 0 de un objeto vacío
{}[0]  => undefined

// Método que parsea a Integer
parseInt("09")  => 9

// El operador AND devuelve siempre el último valor TRUE
5 && 2  => 2
2 && 5  => 5

// El operador OR devuelve siempre el primer valor TRUE
5 || 0  => 5
0 || 5  => 5

// Los arrays son convertidos a strings, se concatenan los dos primeros '3'+'3' = '33' 
// y luego se encuentra un operador - por lo que se convierte a número y resta el '10'
[3]+[3]-[10]  => 23

// Primero 3>2 = true y luego hacemos true>1 = false, ya que para JS 1 = true y 0 = false
3>2>1  => false

/* 
Todo tiene que ver con el tipo de dato al que será convertido para hacer la comparación:
typeof([]) -> object
typeof(![]) -> boolean

El [] es un objeto/array vacío, el cual si es convertido a una string es igual a '',
o si se convierte en un número es igual a 0. -> FALSE
En ![], [] es convertido a un booleano, lo debe hacer para negar el objeto. Se evalúa 
como falso porque la referencia a [] es verdadera y la niega. -> FALSE
*/
[] == ![]  => true

/* --------------------------------------HOISTING---------------------------------------- */

/* Ejercicio 1 */

function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();

/* Luego del Hoisting: */

function test() {
  var a;
  function foo() {
    return 2;
  }
  console.log(a);
  console.log(foo());
  a = 1;
}
test();

/*
Imprime: 
undefined
2
*/

/* -------------------------------------------------------------------------------------- */

/* Ejercicio 2 */

var snack = "Meow Mix";
function getFood(food) {
  if (food) {
    var snack = "Friskies";
    return snack;
  }
  return snack;
}
getFood(false);

/* Luego del Hoisting: */

var snack;
snack = "Meow Mix";
function getFood(food) {
  var snack;
  if (food) {
    snack = "Friskies";
    return snack;
  }
  return snack;
}
console.log(getFood(false));

/*
Imprime: 
undefined
*/

/* -------------------------------------------THIS--------------------------------------- */

var fullname = "Juan Perez";
var obj = {
  fullname: "Natalia Nerea",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};
console.log(obj.prop.getFullname());
var test = function () {
  return this.fullname;
};
console.log(test());

/*
Imprime: 

VSCode (Node):
Aurelio De Rosa
undefined

Consola browser:
Aurelio De Rosa
Juan Perez
*/

/* 
¿Por qué en el/la navegador/terminal imprime otra cosa?

El comportamiento se debe a que en el browser las variables que quedan por fuera de los 
contextos que nosotros creamos, son guardadas en el objeto global 'window' automáticamente.
En Node no sucede lo mismo, si quisieramos que se guardaran en el objeto global, debemos 
asignarle esa propiedad y valor a dicho objeto. El objeto global de Node se llama 'global'.
*/

/* ----------------------------------------EVENT-LOOP------------------------------------ */

function printing() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}
printing();

/*
Imprime: 
1
4
3
2

Pueden probarlo acá:
http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRpbmcoKSB7DQogIGNvbnNvbGUubG9nKDEpOw0KICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsNCiAgICBjb25zb2xlLmxvZygyKTsNCiAgfSwgMTAwMCk7DQogIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgew0KICAgIGNvbnNvbGUubG9nKDMpOw0KICB9LCAwKTsNCiAgY29uc29sZS5sb2coNCk7DQp9DQpwcmludGluZygpOw0K!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
*/