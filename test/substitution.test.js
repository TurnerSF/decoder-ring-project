// Write your tests here!
const {expect} = require("chai")
const substitution = require("../src/substitution")

describe("substitution()", () => {
    it("Should return a substituted string", ()=>{
        const expected = "jrufscpw"
        const actual = substitution.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")

        expect(actual).to.equal(expected)
    })
    it("Should return a substituted string", () => {
        const expected = "elp xhm xf mbymwwmfj dne"
        const actual = substitution.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")

        expect(actual).to.equal(expected)
    })
    it("should return a decoded string", () => {
        const expected = "thinkful"
        const actual = substitution.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)

        expect(actual).to.equal(expected)
    })
    it("should return a substituted string", () => {
        const expected = "y&ii$r&"
        const actual = substitution.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")

        expect(actual).to.equal(expected)
    })
    it("should return a decoded string", () => {
        const expected = "message"
        const actual = substitution.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);

        expect(actual).to.equal(expected)
    })
    it("should return false", () => {
        const expected = false
        const actual = substitution.substitution("thinkful", "short");

        expect(actual).to.equal(expected)
    })
    it("should return false", () => {
        const expected = false
        const actual = substitution.substitution("thinkful", "abcabcabcabcabcabcabcabcyz")

        expect(actual).to.equal(expected)
    })
});