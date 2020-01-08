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


const flatten = function(arr){
let flat=[]
  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      for(let j=0; j<arr[i].length; j++){
        flat.push(arr[i][j])
      }
    } else flat.push(arr[i])
  }

  return flat
}



console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
