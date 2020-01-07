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

const middle = function(arr) {
  let midArr = [];

  if (arr.length === 1 || arr.length === 2) {
    return [];
  }

  if (arr.length % 2 === 1) {
    let mid = Math.ceil(arr.length / 2) - 1;
    midArr.push(arr[mid])
    return midArr
  }

  if (arr.length % 2 === 0) {
    let mid = Math.ceil(arr.length / 2) - 1;
    midArr.push(mid + 1);
    midArr.push(mid + 2);

    return midArr;
  }
};
 console.log(middle([1])) // => []
 console.log(middle([1, 2])) // => []
  console.log(middle([1, 2, 3])) // => [2]
  console.log(middle([1, 2, 3, 4, 5])) // => [3]
 console.log(middle([1, 2, 3, 4])) // => [2, 3]
 console.log(middle([1, 2, 3, 4, 5, 6]) )// => [3, 4]

 assertArrayEqual(middle([1, 2, 3, 4, 5]),[3])
 