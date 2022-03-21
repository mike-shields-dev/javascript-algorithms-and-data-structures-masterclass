const countUniqueValues = require("./31_count_unique_values")

describe("return the total count of unique number values in an array numbers sorted in ascending order", () => {
  test("input of [1, 1, 1, 1, 1, 2] returns 2", () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2)
  })
  test("input of [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 12, 13] returns 7", () => {
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 12, 12, 13])).toBe(7)
  })
  test("input of [-2, -1, -1, 0, 1] returns 4", () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4)
  })
  test("input of [-5, -2, -2, -1, 0, 0, 1, 1, 3, 7, 7, 7, 10, 10, 8] returns 9", () => {
    expect(
      countUniqueValues([-5, -2, -2, -1, 0, 0, 1, 1, 3, 7, 7, 7, 10, 10, 8])
    ).toBe(9)
  })
  test("input of [] returns 0", () => {
    expect(countUniqueValues([])).toBe(0)
  })
  test("input of [6] returns 1", () => {
    expect(countUniqueValues([6])).toBe(1)
  })
})
