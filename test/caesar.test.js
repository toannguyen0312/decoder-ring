// Write your tests here!
const caesar = require('../src/caesar.js').caesar;

const expect = require("chai").expect

describe("caesar", () => {
  it("should return false if shift is greater than 25", () => {
    const result = caesar('', 26);
    expect(result).to.equal(false);
  });
  it("should return false if shift is less than -25", () => {
    const result = caesar('', -26);
    expect(result).to.equal(false);
  });
  it("should return false if shift is equal to 0", () => {
    const result = caesar('', 0);
    expect(result).to.equal(false);
  });
  it("should encode thinkful message with shift 3", () => {
    const result = caesar('thinkful', 3);
    expect(result).to.equal('wklqnixo');
  });
   it("should encode thinkful message with shift -3", () => {
    const result = caesar('thinkful', -3);
    expect(result).to.equal('qefkhcri');
  });
   it("should decode wklqnixo message with shift 3", () => {
    const result = caesar('wklqnixo', 3, false);
    expect(result).to.equal('thinkful');
  });
})
