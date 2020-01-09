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

/////////////////////////////////////////////////////

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  let finalOP=[]

  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    finalOP.push(callback(item))
  }

  return finalOP
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArrayEqual(results1,[ 'g', 'c', 't', 'm', 't' ])