'use strict';

/**
 * Escribí una función llamada recursiveRange que reciba como 
 * único argumento un número, y retorne la suma de todos los 
 * números enteros desde 0 hasta dicho número.
 * 
 * Ejemplos:
 * 
 * recursiveRange(6) debería retornar 21
 * recursiveRange(10) debería retornar 55
 * 
 * @param {int} num
 * @return {int}
 */

function recursiveRange(num) {
  if (num === 0) return num;
  else {
    let factor = num > 0 ? -1 : 1;
    return num + recursiveRange(num + factor);
  }
}

module.exports = {
  recursiveRange
}