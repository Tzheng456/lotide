const flatten = function (arr) {
  let output = [];
  for (let e of arr) {
    if (Array.isArray(e)) {
      output = output.concat(flatten(e));
    } else {
      output.push(e);
    }
  }
  return output;
};

module.exports = flatten;
// console.log(flatten([1, [2, [3, [4, 5, 6, 7]]]])); // [1,2,3,4,5,6,7]
