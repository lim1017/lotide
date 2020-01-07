// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log(`❌❌Do not match ${actual} !===  ${expected}`);
};


const eqArrays = function(arr1, arr2){

  for(let i=0; i<arr1.length; i++){
    if(arr1[i]!==arr2[i]){
      return false
    }
  }
  return true
}


assertArrayEqual([1, 2, 3], [1, 2, 3]) // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]) // => false

assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArrayEqual(["1", "2", "3"], ["1", 2, 3]) // => false