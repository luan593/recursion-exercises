const { sum } = require('./../../very-easy/array-sum');

describe('Array Sum', () => {

  it('sum([1, 2, 3, 4]) ➞ 10', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
  });

  it('sum([1, 2]) ➞ 3', () => {
    expect(sum([1, 2])).toBe(3);
  });

  it('sum([1]) ➞ 1', () => {
    expect(sum([1])).toBe(1);
  });

  it('sum([]) ➞ 0', () => {
    expect(sum([])).toBe(0);
  });

});