let emoji = require('node-emoji');

// HEAD FUNCTION IMPLEMENTATION
const head = function(arr) {
  return arr[0];
}


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let passedEmoji = emoji.emojify(':white_check_mark:');
  let failedEmoji = emoji.emojify(':octagonal_sign:');
  return (actual === expected) ? console.log(`${passedEmoji+passedEmoji+passedEmoji} Assertion Passed: ${actual} === ${expected}`) : 
  console.log(`${failedEmoji+failedEmoji+failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");