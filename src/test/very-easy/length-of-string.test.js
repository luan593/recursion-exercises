const { length } = require('./../../easy/length-of-string');

describe('Length of a String', () => {

  it('length("apple") ➞ 5', () => {
    expect(length("apple")).toBe(5);
  });

  it('length("make") ➞ 4', () => {
    expect(length("make")).toBe(4);
  });

  it('length("a") ➞ 1', () => {
    expect(length("a")).toBe(1);
  });

  it('length("") ➞ 0', () => {
    expect(length("")).toBe(0);
  });

});