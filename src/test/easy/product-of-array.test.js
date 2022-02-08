const { productOfArray } = require('./../../easy/product-of-array');

describe('product of array', () => {

  it('productOfArray([]) ➞ 0', () => {
    expect(productOfArray([])).toBe(0);
  });

  it('productOfArray([99]) ➞ 99', () => {
    expect(productOfArray([99])).toBe(99);
  });

  it('productOfArray([1,2,-2]) ➞ -4', () => {
    expect(productOfArray([1,2,-2])).toBe(-4);
  });

  it('productOfArray([1,2,3]) ➞ 6', () => {
    expect(productOfArray([1,2,3])).toBe(6);
  });

  it('productOfArray([1,2,3,10]) ➞ 60', () => {
    expect(productOfArray([1,2,3,10])).toBe(60);
  });

});