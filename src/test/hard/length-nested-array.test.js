const { getLength } = require('./../../hard/length-nested-array');

describe('Length of a Nested Array', () => {

  it('getLength([1, [2, 3]]) ➞ 3', () => {
    expect(getLength([1, [2, 3]])).toBe(3);
  });

  it('getLength([1, [2, [3, 4]]]) ➞ 4', () => {
    expect(getLength([1, [2, [3, 4]]])).toBe(4);
  });

  it('getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6', () => {
    expect(getLength([1, [2, [3, [4, [5, 6]]]]])).toBe(6);
  });

  it('getLength([1, [2], 1, [2], 1]) ➞ 5', () => {
    expect(getLength([1, [2], 1, [2], 1])).toBe(5);
  });

  it('getLength([[]]) ➞ 0', () => {
    expect(getLength([])).toBe(0);
  });

});