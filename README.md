# Javascript Algorithms and Data Structures Masterclass

# WTF is Big O Notation? 

Big O notation is a way to classify an algorithm based either of 2 things:  

- **time complexity** (execution time)
- **space complexity** (memory usage) 

## Time Complexity

In order to determine the **Time Complexity** of an algorithm, you might intuitively think it would be as simple as timing how long the algorithm takes to complete. Although this might give you some idea of how performant the algorithm is, this approach is flawed. 

There are many external factors that can influence the execution time of an algorithm such as:

  - Programming Language
  - Context of Execution
  - Memory and Processing resources
  - Browser Implementations
  - System Architecture

Establishing a general idea of the number of [operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators) that an algorithm needs to perform, 
enables us to make comparisons between different algorithms, 
without having to consider the factors like the ones above, 
which are often difficult or impossible to control.

Let's take the 2 examples from [Lesson 5](https://github.com/mike-shields-dev/javascript-algorithms-and-data-structures-masterclass/blob/master/5_timing_our_code.js) below: 

```js
function factorialWithLoop(n) {
  let total = 0
  for(let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

function factorialWithMath(n) {
  return n * (n + 1) / 2
}
```

Both functions produce the factorial of a number (the sum of all from numbers `1` through to `n`).

Carrying out a crude time based test showed that `factorialWithLoop` becomes 
much slower when passed larger numbers, but `factorialWithMath` doesn't suffer as badly. 

The main reason for this is that the number of operations `factorialWithLoop` has to perform is determined by `n`. As `n` increases, so does the number of loop iterations. 

In the case of `factorialWithMath` the number of operations remains the same.

### Time Complexity Notation

#### O(1) - Constant Time

Number of operations remains **constant** as in the case of `factorialWithMath` 

#### O(n) - Linear Time

Number of operations is a ratio of `n` as in the case of `factorialWithLoop` this is a **linear** relationship. 


#### O(n<sup>2</sup>) - Quadratic Time

Number of operations is a **squared** relationship. See the example below: 

```js
function printAllPairs(n) {
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; i++) {
      console.log(i, j)
    }
  }
}
```
We have a loop nested inside the other. We can think of it like this: 

O(n) * O(n) ==> O(n*n) ==> O(n<sup>2</sup>)

## Space Complexity

Space complexity is a way to classify how much space in memory an algorithm uses. The term covers both the space complexity of any input data and the space complexity of the algorithm implementation itself. 

The term **Auxiliary Space Complexity** is concerned only with the memory used by the algorithm itself. In general, it is Auxiliary Space Complexity that is the main focus when classifying algorithms.

### Rules of Thumb for Input Data Types

#### O(1) - Constant Space

Most primitives (boolean, number, undefined, null) are classified as having **constant** space complexity as they "point" to a single value within memory. 

- `boolean`
- `number`
- `undefined`
- `null`

#### O(n) - Linear Space

Non primitive data types are classified as having **linear** space complexity where `n` represents the number of elements in an `array` or keys in an `object`.