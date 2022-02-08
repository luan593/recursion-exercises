'use strict';

/**
 * https://edabit.com/challenge/evbaerriFzL6GBgSo
 * 
 * We define super digit of an integer x using the following rules:
 * 
 *  If x has only 1 digit, then its super digit is x.
 *  Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
 * 
 * For example, the super digit of x will be calculated as:
 * 
 * superDigit(9875)    9+8+7+5 = 29
 * superDigit(29)      2 + 9 = 11
 * superDigit(11)      1 + 1 = 2
 * superDigit(2) = 2
 * 
 * All of the digits of p sum to 116. The digits of 116 sum to 8. 8 is only one digit, so it's the super digit.
 * 
 * Complete the super_digit() method. It must return the calculated super digit as an integer.
 * 
 * superDigit has the following parameter(s):
 * 
 * n: a string representation of an integer.
 * k: an integer, the times to concatenate n to make p.
 * 
 * Examples
 * 
 * superDigit("148", 3) ➞ 3
 * superDigit("123", 3) ➞ 9
 * superDigit("99999999999999999999999999", 104500) ➞ 9
 * 
 * @param {string} n
 * @param {int} k
 * @returns {int}
 */


function superDigit(n, k) {
  n = n.repeat(k);
  let number = parseInt(n);
  if (number < 10 && number >= 0) return number;
  let total = number.toString().split('').reduce((a,b) => +a + +b, 0);
  return superDigit(total.toString(), 1);
}

module.exports = {
  superDigit
}
