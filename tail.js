let emoji = require('node-emoji');

// TAIL FUNCTION IMPLEMENTATION
const tail = function(arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  let passedEmoji = emoji.emojify(':white_check_mark:');
  let failedEmoji = emoji.emojify(':octagonal_sign:');
  return (actual === expected) ? console.log(`${passedEmoji + passedEmoji + passedEmoji} Assertion Passed: ${actual} === ${expected}`) :
    console.log(`${failedEmoji + failedEmoji + failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!