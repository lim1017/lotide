// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  console.log(actual)
  console.log(expected)
  for(let i=0; i<actual.length; i++){
    if(actual[i]!==expected[i]){
      console.log('no match')
      return false
    }
  }
  console.log('match')
  return true
};


const eqArrays = function(arr1, arr2){

  let x = assertEqual(arr1, arr2)

  return x
}




// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
