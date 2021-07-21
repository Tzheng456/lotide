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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  let counter = 0;
  for (let char of sentence) {
    if (char !== " "){
      if (!results[char]) {
        results[char] = [counter];
      } else {
        results[char].push(counter);
      }
    }
    counter++;
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
