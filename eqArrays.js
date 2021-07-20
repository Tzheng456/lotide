let emoji = require('node-emoji');

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  let passedEmoji = emoji.emojify(':white_check_mark:');
  let failedEmoji = emoji.emojify(':octagonal_sign:');
  return (actual === expected) ? console.log(`${passedEmoji + passedEmoji + passedEmoji} Assertion Passed: ${actual} === ${expected}`) :
    console.log(`${failedEmoji + failedEmoji + failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function (arr1, arr2) {
  let areEqual = false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      areEqual = true;
    } else {
      areEqual = false;
    }
  }
  return areEqual;
}

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => fal

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => fal