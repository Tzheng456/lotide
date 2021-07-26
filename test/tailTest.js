const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it(`returns ["Lighthouse", "Labs"] for tail(["Hello", "Lighthouse", "Labs"])`, () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it(`returns 3 for let words = ["Hello", "Lighthouse", "Labs"]; tail(words); words.length`, () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});
