const assertArrayEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

const middle = function(arr) {
  let midArr = [];

  if (arr.length === 1 || arr.length === 2) {
    return [];
  }

  if (arr.length % 2 === 1) {
    let mid = Math.ceil(arr.length / 2) - 1;
    midArr.push(arr[mid]);
    return midArr;
  }

  if (arr.length % 2 === 0) {
    let mid = Math.ceil(arr.length / 2) - 1;
    midArr.push(mid + 1);
    midArr.push(mid + 2);

    return midArr;
  }
};

module.exports = middle;

// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
