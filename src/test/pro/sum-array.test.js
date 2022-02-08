const { sumArray } = require('./../../pro/sum-array');

describe('Sum of the items in an Array', () => {

  it('sumArray([1, 2, 3]) ➞ 6', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  it('sumArray([1, [2, [1]], 3]) ➞ 7', () => {
    expect(sumArray([1, [2, [1]], 3])).toBe(7);
  });

  it('sumArray([[[12]], 10]) ➞ 22', () => {
    expect(sumArray([[[12]], 10])).toBe(22);
  });

});