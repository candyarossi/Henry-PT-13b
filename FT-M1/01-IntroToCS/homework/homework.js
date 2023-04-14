'use strict';

function BinarioADecimal(num) {
   // recibimos string
   // devolvemos número
   // var acc = 0;
   // var numberToString = num.toString();
   // //var numberToString = String(num);
   // for(var i=numberToString.length-1, j=0; i>=0; i--, j++){
   //    acc = acc + Math.pow(2, j) * numberToString[i];
   // }
   // return acc;

   // var aux = Array.from(num).reverse();
   // var dec = 0;
   // for (let i = 0; i < aux.length; i++) {
   //   dec += aux[i] * 2 ** i;
   // }
   // return dec;

   var array = num.split('').map(element => Number(element));
   return array.reduce((a, b) => ((a*2)+b));
}

function DecimalABinario(num) {
   // recibimos número
   // devolvemos string
   // var binary = '';
   // while(num > 0){
   //    binary = (num % 2) + binary;
   //    num = Math.floor(num / 2);
   // }
   // return binary;
   // var numBinary = '';
   // for (let i = num; i >= 1; i = Math.trunc(i / 2)) {
   //    numBinary = (i % 2) + numBinary;
   // }
   // return numBinary;
   let rta = [];
   while(num > 0){
      rta.push(num % 2);
      num = Math.floor(num / 2);
   }
   return rta.reverse().join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
