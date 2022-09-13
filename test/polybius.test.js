// Write your tests here!
const polybius = require('../src/polybius.js').polybius;

const expect = require("chai").expect

describe("polybius", () => {
  it("should return decode message", () => {
    const result = polybius('thinkful', true);
    expect(result).to.equal('4432423352125413');
  });
  it("should return encode message", () => {
    const result = polybius('3251131343 2543241341', false);
    expect(result).to.equal('hello world');
  });
});
