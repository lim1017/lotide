// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log("❌❌Do not match");
};

const tail = function (arr){
  let x = arr.slice(1)
  return x
}

let result = tail([1,2,3,4])
console.log(result)


assertEqual(result[0],2)
assertEqual(result[1],3)
assertEqual(result[2],4)