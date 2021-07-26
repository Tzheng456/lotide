const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require("chai").assert;

describe("#head", () => {
  it("returns [] for (middle([1]), [])", () => {
    assert.deepEqual((middle([1]), []), []);
  });

  it("returns [] for (middle([1, 2]), [])", () => {
    assert.deepEqual((middle([1, 2]), []), []);
  });

  it("returns [2] for (middle([1, 2, 3]), [2])", () => {
    assert.deepEqual((middle([1, 2, 3]), [2]), [2]);
  });

  it("returns [3] for (middle([1, 2, 3, 4, 5]), [3])", () => {
    assert.deepEqual((middle([1, 2, 3, 4, 5]), [3]), [3]);
  });

  it("returns [2, 3] for (middle([1, 2, 3, 4, 5]), [2, 3])", () => {
    assert.deepEqual((middle([1, 2, 3, 4]), [2, 3]), [2, 3]);
  });

  it("returns [3, 4] for (middle([1, 2, 3, 4, 5, 6]), [3, 4])", () => {
    assert.deepEqual((middle([1, 2, 3, 4, 5, 6]), [3, 4]), [3, 4]);
  });
});
