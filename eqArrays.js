// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected)){
    console.log("match")
  }else console.log('no match')
};


const eqArrays = function(arr1, arr2){

  for(let i=0; i<arr1.length; i++){
    if(arr1[i]!==arr2[i]){
      return false
    }
  }
  return true
}




// TEST CODE
assertEqual([1, 2, 3], [1, 2, 3]) // => true
assertEqual([1, 2, 3], [3, 2, 1]) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
