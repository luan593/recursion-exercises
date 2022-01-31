const { findHighest } = require('./../../medium/highest-integer-array');

describe('Find the Highest Integer in the Array Using Recursion', () => {

  it('findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99', () => {
    expect(findHighest([-1, 3, 5, 6, 99, 12, 2])).toBe(99);
  });

  it('findHighest([0, 12, 4, 87]) ➞ 87', () => {
    expect(findHighest([0, 12, 4, 87])).toBe(87);
  });

  it('findHighest([6,7,8]) ➞ 8', () => {
    expect(findHighest([6,7,8])).toBe(8);
  });

  it('findHighest([]) ➞ null', () => {
    expect(findHighest([])).toBe(null);
  });

  it('findHighest([19]) ➞ 19', () => {
    expect(findHighest([19])).toBe(19);
  });

});