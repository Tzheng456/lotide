let emoji = require("node-emoji");
// const assertEqual = require("./")
// TAIL FUNCTION IMPLEMENTATION
const tail = function (arr) {
  let tailArr = [];
  for (let i = 1; i < arr.length; i++) {
    tailArr.push(arr[i]);
  }
  return tailArr;
};

module.exports = tail;
