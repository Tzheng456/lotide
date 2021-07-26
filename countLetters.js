const countLetters = function (string) {
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
};

module.exports = countLetters;
// console.log(countLetters("aabcdd"));
// console.log(countLetters("Aabc"));
// console.log(countLetters("lighthouse in the house"));
