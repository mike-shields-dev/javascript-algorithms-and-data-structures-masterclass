const same = require("./27_frequency_counter")

// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false (2**2 not present)
// same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

describe(`
function same:
returns true if
every value in the the first array has it's
corresponding value squared in the 
second array. The frequency of values
must be the same.
`, () => {
  test(`expect same([1, 2, 3], [1, 4, 9]) === true `, () => {
    expect(same([1, 2, 3], [1, 4, 9])).toBe(true)
  })

  test(`expect(same([1, 2, 3], [1, 9])) === false`, () => {
    expect(same([1, 2, 3], [1, 9])).toBe(false)
  })

  test(`expect(same([1, 2, 1], [4, 4, 1])) === false`, () => {
    expect(same([1, 2, 1], [4, 4, 1])).toBe(false)
  })

  test(`expect(same([], [4, 4, 1])) === false`, () => {
    expect(same([], [4, 4, 1])).toBe(false)
  })

  test(`expect(same([1, 2, 1], [])) === false`, () => {
    expect(same([1, 2, 1], [4, 4, 1])).toBe(false)
  })

  test(`expect(same()) === false`, () => {
    expect(same()).toBe(false)
  })

  test(`expect(same([1, 2, 3])) === false`, () => {
    expect(same([1, 2, 3])).toBe(false)
  })
})
