const { search } = require('./../../easy/find-the-index');

describe('Find the Index (Part #2)', () => {

  it('search([1, 2, 3, 4], 3) ➞ 2', () => {
    expect(search([1, 2, 3, 4], 3)).toBe(2);
  });

  it('search([2, 4, 6, 8, 10], 8) ➞ 3', () => {
    expect(search([2, 4, 6, 8, 10], 8)).toBe(3);
  });

  it('search([1, 3, 5, 7, 9], 11) ➞ -1', () => {
    expect(search([1, 3, 5, 7, 9], 11)).toBe(-1);
  });

  it('search([], 99) ➞ -1', () => {
    expect(search([], 99)).toBe(-1);
  });

});