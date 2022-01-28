/**
 * Write a function that returns the length of a string.
 * 
 * length("apple") ➞ 5
 * length("make") ➞ 4
 * length("a") ➞ 1
 * length("") ➞ 0
 * 
 * @param {String} string 
 * @returns {int}
 */

function length(string) {
  if (string.length === 0) {
    return 0;
  }
  string = string.slice(0, string.length - 1);
  return 1 + length(string);
}

module.exports = {
  length
}