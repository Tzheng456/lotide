let emoji = require('node-emoji');
let passedEmoji = emoji.emojify(':white_check_mark:');
let failedEmoji = emoji.emojify(':octagonal_sign:');

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${passedEmoji+passedEmoji+passedEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${failedEmoji+failedEmoji+failedEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
  }
}


const flatten = function(arr) {
  let output = [];
  for (let e of arr) {
    if (Array.isArray(e)) {
      output = output.concat(flatten(e));
    }
    else {
      output.push(e);
    }
  }
  return output;
}

console.log(flatten([1,[2,[3]]])); // [1,2]