// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log("❌❌Do not match");
};




const findKeyByValue = function(obj, value){

  console.log(Object.keys(obj), 'The keys')
  console.log(Object.values(obj), 'The values')

  let x=Object.values(obj).indexOf(value)
  console.log(x, 'is index of the value ' + value)


  return Object.keys(obj)[x]    //returning the same index in the keys array
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama')

module.exports=findKeyByValue