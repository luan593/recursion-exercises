'use strict';

/**
 * Escribí una función llamada power que reciba dos parámetros: 
 * base y exponente. La función deberá retornar la potenciación 
 * correspondiente - es decir, la base elevada al exponente.
 * 
 * Nota: recuerden contemplar el caso de las potenciaciones con exponente 0 
 * 
 * Ejemplos:
 * power(2,0) debería retornar 1
 * power(2,2) debería retornar 4
 * power(2,4) debería retornar 16
 * 
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */

function power(base, exponent) {
  if (exponent == 0) return 1;
  else {
    let signo;
    if (exponent > 0) {
      signo = 1;
      exponent--;
    }
    else {
      signo = -1;
      exponent++;
    }
    return signo * base * power(base, exponent);
  }
}

module.exports = {
  power
}