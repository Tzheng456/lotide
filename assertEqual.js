// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  return actual === expected
    ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE

module.exports = assertEqual;
