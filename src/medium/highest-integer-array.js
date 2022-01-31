/**
 * https://edabit.com/challenge/szYmNqApJyQ3ePnKH
 * 
 * Create a function that finds the highest integer in the array using recursion.
 * 
 * findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99
 * findHighest([0, 12, 4, 87]) ➞ 87
 * findHighest([6,7,8]) ➞ 8
 * 
 * @param {Array} array 
 * @returns {int}
 */

function findHighest(array) {
  if (array.length < 1) return null;
  if (array.length === 1) return array[0];
  else {
    let number = array[0];
    let result = findHighest(array.slice(1, array.length));
    if (number > result) {
      return number;
    }
    else {
      return result;
    }
  }
}

module.exports = {
  findHighest
}