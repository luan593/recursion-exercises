const { superDigit } = require('./../../easy/recursive-digit');

describe('recursive digits', () => {

  it('superDigit("148", 3) ➞ 3', () => {
    expect(superDigit("148", 3)).toBe(3);
  });

  it('superDigit("123", 3) ➞ 9', () => {
    expect(superDigit("123", 3)).toBe(9);
  });

  it('superDigit("9875", 1) ➞ 2', () => {
    expect(superDigit("9875", 1)).toBe(2);
  });

  xit('superDigit("99999999999999999999999999", 104500) ➞ 9', () => {
    expect(superDigit("99999999999999999999999999", 104500)).toBe(9);
  }); 

});