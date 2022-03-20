const validAnagram = require("./28_validAnagram.js")

describe(`validAnagram return true stringA is an Anagram of StringB`, () => {
  test(`'derailed' and 'deadlier' equals true `, () => {
    expect(validAnagram('derailed', 'deadlier')).toBe(true)
  })
  test(`'' and '' equals true`, () => {
    expect(validAnagram('', '')).toBe(true)
  })
  test(`'racer' and 'acres' equal false`, () => {
    expect(validAnagram('racer', 'acres')).toBe(false)
  })
})
