// Write a function called "same",
// which accepts two arrays.
// The function should return true if
// every value in the array has it's
// corresponding value squared in the
// second array. The frequency of values
// must be the same.

// First Attempt
/*
function same(numbers, squares) {
  if (!numbers || !squares) {
    return false
  } else if (numbers.length === 0 || squares.length === 0) {
    return false
  } else if (numbers.length !== squares.length) {
    return false
  }

  const squaresCopy = [...squares]

  for (const number of numbers) {
    const numberSquared = number ** 2
    const indexOfFoundSquare = squaresCopy.indexOf(numberSquared)

    if (indexOfFoundSquare === -1) {
      return false
    } else {
      squaresCopy.splice(indexOfFoundSquare, 1) // remove
    }
  }
  return true
}
*/

// My rework of tutors solution

function tallyUp(array) {
  const finalTally = array.reduce((tally, arrayValue) => {
    if (arrayValue in tally) {
      tally[arrayValue]++
    } else {
      tally[arrayValue] = 1
    }
    return tally
  }, {})

  return finalTally
}

function same(numbers, squares) {
  // if (!(numbers && squares)) {
  //   return false
  // } else if (numbers.length === 0 || squares.length === 0) {
  //   return false
  // } else if (numbers.length !== squares.length) {
  //   return false
  // }

  const numberTally = tallyUp(numbers)
  const squaresTally = tallyUp(squares)

  return Object.entries(numberTally).every(([number, count]) => {
    const numberSquared = number ** 2
    return squaresTally[numberSquared] === count
  })
}

module.exports = same
