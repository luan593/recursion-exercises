const { multiSum } = require('./../../very-easy/sum-of-multiplication');

describe('Sum of Multiplication', () => {

  it('multiSum(1) ➞ 55', () => {
    expect(multiSum(1)).toBe(55);
  });

  it('multiSum(6) ➞ 330', () => {
    expect(multiSum(6)).toBe(330);
  });

  it('multiSum(10) ➞ 550', () => {
    expect(multiSum(10)).toBe(550);
  });

  it('multiSum(8) ➞ 440', () => {
    expect(multiSum(8)).toBe(440);
  });

  it('multiSum(2) ➞ 110', () => {
    expect(multiSum(2)).toBe(110);
  });

});