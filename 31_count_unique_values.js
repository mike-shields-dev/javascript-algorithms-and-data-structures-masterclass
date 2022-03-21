/* 
Implement a function called countUniqueValues,
which accepts a sorted array of numbers in ascending order,
and returns the total number or unique numbers in the array.
The numbers can be both positive and negative.
*/

// My Solution

// function countUniqueValues(sortedNumsArr) {
//   if (sortedNumsArr.length === 0) {
//     return 0
//   }

//   let pointer1 = 0
//   let pointer2 = pointer1 + 1

//   while (pointer2 < sortedNumsArr.length) {
//     if (sortedNumsArr[pointer1] === sortedNumsArr[pointer2]) {
//       pointer2++
//     } else {
//       pointer1++
//       sortedNumsArr[pointer1] = sortedNumsArr[pointer2]
//     }
//   }
//   const totalUniqueNumbers = pointer1 + 1
//   return totalUniqueNumbers
// }

// Tutor's Solution

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0
  }
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

module.exports = countUniqueValues