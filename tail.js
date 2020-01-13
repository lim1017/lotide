const assertEqual = require('./assertEqual');


const tail = function(arr) {
  let x = arr.slice(1);
  return x;
};

let result = tail([1, 2, 3, 4]);
console.log(result);



module.exports = tail