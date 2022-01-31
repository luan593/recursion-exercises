const { paths } = require('./../../medium/travelling-salesman-problem');

describe('Travelling Salesman Problem', () => {

  it('paths(4) ➞ 24', () => {
    expect(paths(4)).toBe(24);
  });

  it('paths(1) ➞ 1', () => {
    expect(paths(1)).toBe(1);
  });

  it('paths(9) ➞ 362880', () => {
    expect(paths(9)).toBe(362880);
  });

  it('paths(0) ➞ 0', () => {
    expect(paths(0)).toBe(0);
  });

  it('paths(-123) ➞ null', () => {
    expect(paths(-123)).toBe(null);
  });

});