// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log("❌❌Do not match");
};

// allItemsArr: an array of strings that we need to look through
// itemsToCountObj: an object specifying what to count


const countOnly = function(allItemsArr, itemsToCountObj) {
  let results = {};

  for (let names of allItemsArr) {
    // console.log(names)

    if (itemsToCountObj[names]) {
      // console.log(itemsToCountObj[names])

      if (results[names]) {
        results[names] += 1;
      } else {
        results[names] = 1;
      }

    }
  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true
});

console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
