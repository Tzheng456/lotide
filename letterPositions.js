const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  let counter = 0;
  for (let char of sentence) {
    if (char !== " ") {
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

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").e, [1]);
