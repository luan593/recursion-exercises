const { power } = require('./../../easy/power');

describe('power', () => {

  it('power(2,0) ➞ 1', () => {
    expect(power(2,0)).toBe(1);
  });

  it('power(2,0) ➞ 1', () => {
    expect(power(2,0)).toBe(1);
  });

  it('power(2,2) ➞ 4', () => {
    expect(power(2,2)).toBe(4);
  });

  it('power(2,4) ➞ 16', () => {
    expect(power(2,4)).toBe(16);
  });

  it('power(5,-2) ➞ 25', () => {
    expect(power(5,-2)).toBe(25);
  });

  it('power(10,-3) ➞ -1000', () => {
    expect(power(10,-3)).toBe(-1000);
  });

});