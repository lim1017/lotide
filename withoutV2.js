const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log(`❌❌Do not match ${actual} !===  ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  let newArr = [];

  for (let i = 0; i < source.length; i++) {
    let pushOrNot = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        pushOrNot = false;
      }
    }
    if (pushOrNot) {
      newArr.push(source[i]);
    }
  }

  return newArr;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

assertArrayEqual(without([1, 2, 3, 4],[1,2]),[3, 4])
