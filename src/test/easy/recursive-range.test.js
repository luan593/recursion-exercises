const { recursiveRange } = require('./../../easy/recursive-range');

describe('recursive range', () => {
  it('recursiveRange(6) ➞ 21', () => {
    expect(recursiveRange(6)).toBe(21);
  });

  it('recursiveRange(10) ➞ 55', () => {
    expect(recursiveRange(10)).toBe(55);
  });

  it('recursiveRange(0) ➞ 0', () => {
    expect(recursiveRange(0)).toBe(0);
  });

  it('recursiveRange(-5) ➞ -15', () => {
    expect(recursiveRange(-15)).toBe(-15);
  });
});