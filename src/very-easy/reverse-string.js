/**
 * https://edabit.com/challenge/TiAz6mfHTtkoqMszA
 * 
 * Write a function that reverses a string. Make your function recursive.
 * 
 * reverse("hello") ➞ "olleh"
 * reverse("world") ➞ "dlrow"
 * reverse("a") ➞ "a"
 * reverse("") ➞ ""
 * 
 * @param {String} string 
 * @returns {String}
 */


function reverse(string) {
  if (string.length === 0) {
    return '';
  }
  let lastLetter = string.slice(string.length - 1, string.length);
  let result = reverse(string.slice(0, string.length - 1));
  return lastLetter + result;
}

module.exports = {
  reverse
}