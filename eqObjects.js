// FUNCTION IMPLEMENTATION

//check primitive values equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log("❌❌Do not match");
};

//Check array equal
const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log(`❌❌Do not match ${actual} !===  ${expected}`);
};
const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//Check Obj equal
const eqObjects = function(obj1, obj2) {
  // console.log(Object.keys(obj1))
  // console.log(Object.keys(obj2))

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let obj1Key of Object.keys(obj1)) {
    // console.log(obj1[obj1Key], 'obj1 key')
    // console.log(obj2[obj1Key], "obj2 key")

    //console.log(Array.isArray(obj1[obj1Key]), "is array?");
    if (Array.isArray(obj1[obj1Key])) {
      // console.log(obj1[obj1Key], 'obj one key')
      // console.log(obj2[obj1Key], 'obj two key')
      // console.log(eqArrays(obj1[obj1Key], obj2[obj1Key]))
      if (!eqArrays(obj1[obj1Key], obj2[obj1Key])) {
        return false
      }
    } else if (obj1[obj1Key] !== obj2[obj1Key]) {
      return false;
    }
  }

  return true;
};

const ab = { a: "1", b: "2", c: 5 };
const ba = { b: "2", a: "1", c: 5 };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, ba), true)
assertEqual(eqObjects(ab, abc), false)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
