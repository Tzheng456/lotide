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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${passedEmoji + passedEmoji + passedEmoji} Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`${failedEmoji + failedEmoji + failedEmoji} Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const without = function(source, itemsToRemove) {
  let withoutArray = [];

  for (let i=0; i<source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
      withoutArray.push(source[i]);
    }
  }
  return withoutArray;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
