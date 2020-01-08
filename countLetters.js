// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log("❌❌Do not match");
};

const countLetters = function(countThisString) {
  let finalOP = {};
  revisedString = countThisString.toLowerCase();
  nospace = revisedString.replace(/ /g, "");

  for (let letter of nospace) {
    if (finalOP[letter]) {
      finalOP[letter] += 1;
    } else {
      finalOP[letter] = 1;
    }
  }

  return finalOP;
};

console.log(countLetters("lighthouse in the house"));

assertEqual(countLetters("lighthouse in the house").h, 4)
