/**
 * Create a function that searches for the index of a given item in an array. 
 * If the item is present, it should return the index, otherwise, it should return -1.
 * 
 * search([1, 2, 3, 4], 3) ➞ 2
 * search([2, 4, 6, 8, 10], 8) ➞ 3
 * search([1, 3, 5, 7, 9], 11) ➞ -1
 * search([], 99) ➞ -1
 * 
 * @param {Array} array
 * @param {int} item
 * @param {int} currentIndex
 * @returns {int}
 */

function search(array, item, currentIndex=0) {
  if (currentIndex === array.length) {
    return -1;
  }
  if (array[currentIndex] === item) {
    return currentIndex;
  }
  currentIndex ++;
  return search(array, item, currentIndex);
}

module.exports = {
  search
}