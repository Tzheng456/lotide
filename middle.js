// const eqArrays = function (arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };

const middle = function (array) {
  let midIdx = Math.floor((array.length - 1) / 2);
  let output = [];
  if (array && array.length <= 2) {
    return [];
  }
  if (!even(array)) {
    output.push(array[midIdx]);
    return output;
  } else {
    output.push(array[midIdx], array[midIdx + 1]);
    return output;
  }
};

const even = function (array) {
  return array.length % 2 === 0;
};
// one or two elements -> []

module.exports = middle;
