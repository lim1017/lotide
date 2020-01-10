const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log("❌❌Do not match");
};

/////////////////

const findKey = function(obj, callback) {
  let finalOP = "";
  let keyzz = Object.keys(obj);
  //console.log(keyzz,'   name')
  //console.log(obj.noma.stars, ' nomas star')

  for (name of keyzz) {
    console.log(obj[name].stars)
    //console.log(callback(obj[name]))
    if (callback(obj[name])) {
      console.log("The first person with 2 stars is:")
      return name 
    }
  }
};

console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 }
    },
    x => x.stars === 2
  )
); // => "noma"


assertEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 }
  },
  x => x.stars === 2
), 'noma')