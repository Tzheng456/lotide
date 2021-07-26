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
