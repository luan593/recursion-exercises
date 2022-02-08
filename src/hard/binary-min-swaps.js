'use strict';

/**
 * Write a function that returns the minimum number of swaps to 
 * convert the first binary string into the second.
 * 
 * Examples:
 * minSwaps("1100", "1001") ➞ 1
 * minSwaps("110011", "010111") ➞ 1
 * minSwaps("10011001", "01100110") ➞ 4
 * 
 * Notes:
 * Both binary strings will be of equal length.
 * Both binary strings will have an equal number of zeroes and ones.
 * A swap is switching two elements in a string 
 * (swaps do not have to be adjacent).
 * 
 * @param {string} x
 * @param {string} y
 * @returns {int}
 */

function minSwaps(x, y) {
  if (x.length < 1) return 0;
  else {
    let comparacion = x[0] !== y[0] ? 0.5 : 0;
    x = x.slice(1, x.length);
    y = y.slice(1, y.length);
    return comparacion + minSwaps(x, y);
  }
}

module.exports = {
  minSwaps
}