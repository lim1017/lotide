const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjEqual = require('./assertObjectEqual')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const findKey = require('./findKey')
const flatten = require('./flatten')
const findKeyByValue = require('./findKeyByValue')
const map = require('./map')

const letterPositions = require('./letterPosition')
const takeUntil = require('./takeUntil')
const without = require('./withoutV2')






module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  assertObjEqual: assertObjEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  letterPositions: letterPositions,
  takeUntil: takeUntil,
  without: without,
  flatten:flatten,
  findKeyByValue:findKeyByValue,
  map:map

};