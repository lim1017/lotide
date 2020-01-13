const tail = require('../tail')
const assertArrayEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


describe("#tail", () => {


  it("returns [2,3,4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]),[2,3,4]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

})


assertArrayEqual(tail([1, 2, 3, 4]),[2,3,4])

