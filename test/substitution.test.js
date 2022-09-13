// Write your tests here!
const substitution = require('../src/substitution.js').substitution;

const expect = require("chai").expect

describe("subtitution", () => {
  it("should return decode message", () => {
    const result = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");;
    expect(result).to.equal('jrufscpw');
  });
  it("should return encode message", () => {
    const result = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    expect(result).to.equal('thinkful');
  });
});
