const { minSwaps } = require('./../../hard/binary-min-swaps');

describe('Converting One Binary String to Another', () => {

  it('minSwaps("1100", "1001") ➞ 1', () => {
    expect(minSwaps("1100", "1001")).toBe(1);
  });

  it('minSwaps("110011", "010111") ➞ 1', () => {
    expect(minSwaps("110011", "010111")).toBe(1);
  });

  it('minSwaps("10011001", "01100110") ➞ 4', () => {
    expect(minSwaps("10011001", "01100110")).toBe(4);
  });

});