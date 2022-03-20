/* 
  Given two strings, write a function to determine if the 
  second string is an anagram of the first.
  An anagram is a word, phrase, or name formed by rearranging
  the letters of another, such as cinema, formed from iceman.
*/

// My Solution

/*
function tally(array) {
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

function validAnagram(anagramA, anagramB) {
  if (arguments.length !== 2) {
    return false
  } else if (anagramA.length !== anagramB.length) {
    return false
  }

  const anagramATally = tally([...anagramA])
  const anagramBTally = tally([...anagramB])

  console.log(anagramATally, anagramBTally)

  const areTalliesMatched = Object.entries(anagramATally).every(
    ([char, count]) => {
      return anagramBTally[char] === count
    }
  )
  return areTalliesMatched
}
*/
// Tutor's solution

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false
  }
  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

module.exports = validAnagram
