'use strict';

/**
 * Escribí una función llamada productOfArray que reciba un 
 * arreglo de números y retorne el producto de todos ellos.
 * 
 * Ejemplos:
 * productOfArray([1,2,3]) debería retornar 6
 * productOfArray([1,2,3,10]) debería retornar 60
 * 
 * @param {Array} array
 * @returns {number}
 */

function productOfArray(array) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  else {
    let x = array[0];
    let result = productOfArray(array.slice(1, array.length));
    return x * result;
  }
}

module.exports = {
  productOfArray
}