// Write your tests here!
const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius()", () => {
  it("Should return a string of numbers when encoding", () => {
    const expected = "4432423352125413";
    const actual = polybius.polybius("thinkful");

    expect(actual).to.equal(expected);
  });

  it("Should return a string of numbers", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius.polybius("Hello World");

    expect(actual).to.equal(expected);
  })
  it("Should return a string", () => {
    const expected = "hello world";
    const actual = polybius.polybius("3251131343 2543241341", false);

    expect(actual).to.equal(expected);
  });

  it("Should return false", () => {
    const expected = false;
    const actual = polybius.polybius("44324233521254134", false);

    expect(actual).to.equal(expected);
    })
   it("Should return string", () => {
    const expected = "th(i/j)nkful"
    const actual = polybius.polybius("4432423352125413", false)

    expect(actual).to.equal(expected)
   })
});
