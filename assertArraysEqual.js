const eqArrays = require('./eqArrays')


// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log(`❌❌Do not match ${actual} !===  ${expected}`);
};


module.exports = assertArrayEqual


// assertArrayEqual([1, 2, 3], [1, 2, 3]) // => true
// assertArrayEqual([1, 2, 3], [3, 2, 1]) // => false

// assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
// assertArrayEqual(["1", "2", "3"], ["1", 2, 3]) // => false