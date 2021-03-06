'use strict';

/**
 * https://edabit.com/challenge/4gzDuDkompAqujpRi
 * 
 * Create a function that takes a number as an argument. 
 * Add up all the numbers from 1 to the number you passed to the function. 
 * For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
 * 
 * addUp(4) ➞ 10
 * addUp(13) ➞ 91
 * addUp(600) ➞ 180300
 * 
 * @param {int} number
 * @returns {int}
 */

function addUp(number) {
  if (number < 1) return 0;
  else {
    return number + addUp(number - 1);
  }
}

module.exports = {
  addUp
}