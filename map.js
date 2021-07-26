const map = function (array, callback) {
  const results = [];
  //using forEach
  array.forEach((e) => results.push(callback(e)));
  // for (let item of array) {
  //   results.push(callback(item));
  // }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, (word) => word[0]);
// console.log(assertArraysEqual(results1, ["g", "c", "t", "m", "t"]));
// const results2 = map(words, (word) => word.length);
// console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]));
// const results3 = map(words, (word) => "a word");
// console.log(
//   assertArraysEqual(results3, [
//     "a word",
//     "a word",
//     "a word",
//     "a word",
//     "a word",
//     "a word",
//   ])
// );
