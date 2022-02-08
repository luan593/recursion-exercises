'use strict';

/**
 * https://edabit.com/challenge/27Toh4rACcmRvRLrb
 * 
 * Create a function that takes an array and returns 
 * the sum of all items in the array.
 * 
 */

function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      total += sumArray(element);
    }
    else {
      total += element;
    }
  }
  return total;
}

module.exports = {
  sumArray
}