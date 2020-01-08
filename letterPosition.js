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


const letterPositions = function(positionsInString) {
  let finalOP = {};
  revisedString = positionsInString.toLowerCase();
  //nospace = revisedString.replace(/ /g, "");

  for (let i=0; i<revisedString.length; i++) {
    //console.log(revisedString[i])
    if(revisedString[i]===' '){
      i++
    }

    if(!finalOP.hasOwnProperty(revisedString[i])){
      finalOP[revisedString[i]]=[]
      finalOP[revisedString[i]].push(revisedString.indexOf(revisedString[i]))
    }
    else {
      finalOP[revisedString[i]].push(i)
    }
  }

  return finalOP;
};

console.log(letterPositions("lighthouse in the house"));

assertArrayEqual(letterPositions("lighthouse in the house").e, [ 9, 16, 22 ])
