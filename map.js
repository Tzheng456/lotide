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
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const map = function(array, callback) {
  const results = [];
  //using forEach
  array.forEach(e => results.push(callback(e)));
  // for (let item of array) {
  //   results.push(callback(item));
  // }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ['g','c','t','m','t']));
const results2 = map(words, word => word.length);
console.log(assertArraysEqual(results2, [6,7,2,5,3]));
const results3 = map(words, word => "a word");
console.log(assertArraysEqual(results3, ['a word','a word','a word','a word','a word','a word']));