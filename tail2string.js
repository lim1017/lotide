// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log("❌❌Do not match");
};

const tail = function (arr){
  let x = arr.slice(1)
  return x.toString()
}

assertEqual(tail([1,2,3,4]),[2,3,4]);