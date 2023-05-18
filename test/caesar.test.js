const { expect } = require('chai');
const {caesar} = require("../src/caesar")

describe("caesar()", () => {
  it("Should return a string", () => {
    const expected = "wklqnixo";
    const actual = caesar("Thinkful", 3);
    expect(actual).to.equal(expected);
  });

  it("Should return a string", () => {
    const expected = "qefkhcri";
    const actual = caesar("Thinkful", -3);
    expect(actual).to.equal(expected);
  });

  it("Should return a string", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });

  it("Should return a string", () => {
    const expected = "bpqa qa i amkzmb umaaiom!!";
    const actual = caesar("This is a secret message!!", 8);
    expect(actual).to.equal(expected);
  });

  it("Should return a string", () => {
    const expected = "this is a secret message!";
    const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    expect(actual).to.equal(expected);
  });

  it("Should return false", () => {
    const expected = false;
    const actual = caesar("thinkful");
    expect(actual).to.equal(expected);
  });

  it("Should return false", () => {
    const expected = false;
    const actual = caesar("thinkful", 99);
    expect(actual).to.equal(expected);
  });

  it("Should return false", () => {
    const expected = false;
    const actual = caesar("thinkful", -26);
    expect(actual).to.equal(expected);
  });
});