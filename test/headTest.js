const head = require('../head')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;



describe("#head", () => {

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]),5);
  });

  it('returns Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]),'Hello');
  });

  it('returns Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]),'Hello');
  });


});




// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Helloss"]), "Helloss");
// assertEqual(head([]), "Helloss");

