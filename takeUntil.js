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




const takeUntil = function(array, callback) {
  let finalOP = [];
  for (item of array) {
    
    
    if (callback(item)) {
      return finalOP
    }
    finalOP.push(item);
  }

  return finalOP;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);


assertArrayEqual(takeUntil(data1, x => x < 0),[ 1, 2, 5, 7, 2 ])
assertArrayEqual(takeUntil(data2, x => x === ","),[ 'I\'ve', 'been', 'to', 'Hollywood' ]
)