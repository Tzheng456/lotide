const assertEqual = function(actual, expected) {
  return (actual === expected) ? console.log(`✅✅✅  Assertion Passed: ${actual} === ${expected}`) : 
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  string = string.replace(/\s/g, "");
  let result = {};

  for (let char of string) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  }
  return result;
}


console.log(countLetters("aabcdd"));
console.log(countLetters("Aabc"));
console.log(countLetters("lighthouse in the house"));

