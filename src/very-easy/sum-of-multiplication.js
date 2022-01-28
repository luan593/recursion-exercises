/**
 * https://edabit.com/challenge/W8R9CPBThreBBXYLS
 * 
 * Given a number, return the total sum of that number 
 * multiplied by every number between 1 and 10.
 * 
 * multiSum(1) ➞ 55
 * 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55
 * 
 * multiSum(6) ➞ 330
 * 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330
 * 
 * multiSum(10) ➞ 550
 * 
 * multiSum(8) ➞ 440
 * 
 * multiSum(2) ➞ 110
 * 
 * @param {int} num
 * @param {int} multiplier
 * @returns {int}
 */

function multiSum(num, multiplier=10) {
  if (multiplier === 0) {
    return 0;
  }
  let result = num * multiplier;
  return result + multiSum(num, --multiplier);
}

module.exports = {
  multiSum
}