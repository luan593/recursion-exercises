const { addUp } = require('./../../easy/add-up');

describe('add up', () => {

  it('addUp(4) ➞ 10', () => {
    expect(addUp(4)).toBe(10);
  });

  it('addUp(13) ➞ 91', () => {
    expect(addUp(13) ).toBe(91);
  });

  it('addUp(600) ➞ 180300', () => {
    expect(addUp(600)).toBe(180300);
  });

  it('addUp(1) ➞ 1', () => {
    expect(addUp(1)).toBe(1);
  });

  it('addUp(0) ➞ 0', () => {
    expect(addUp(0)).toBe(0);
  });

});