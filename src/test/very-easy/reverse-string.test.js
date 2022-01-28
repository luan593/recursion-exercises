const { reverse } = require('./../../very-easy/reverse-string');

describe('', () => {

  it('reverse("hello") ➞ "olleh"', () => {
    expect(reverse("hello")).toBe("olleh");
  });

  it('reverse("world") ➞ "dlrow"', () => {
    expect(reverse("world")).toBe("dlrow");
  });

  it('reverse("a") ➞ "a"', () => {
    expect(reverse("a")).toBe("a");
  });

  it('reverse("") ➞ ""', () => {
    expect(reverse("")).toBe("");
  });

});