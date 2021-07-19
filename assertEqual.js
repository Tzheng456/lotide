let emoji = require('node-emoji');

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let passedEmoji = emoji.emojify(':white_check_mark:');
  let failedEmoji = emoji.emojify(':octagonal_sign:');
  return (actual === expected) ? console.log(`${passedEmoji+passedEmoji+passedEmoji} Assertion Passed: ${actual} === ${expected}`) : 
  console.log(`${failedEmoji+failedEmoji+failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("test", "test");
assertEqual("test", "nottest");
assertEqual(5, 5);
assertEqual(5, 6);