const present = require('present') // imports the present obj

// Add1: Uses looping to produce the factorial of n (the sum of all numbers 1 -> n)

function factorialWithLoop(n) {
  let total = 0
  for(let i = 1; i <= n; i++) {
    total += i
  }
  return total
}

// Add2: Uses a maths equation to achieve the same thing

function factorialWithMath(n) {
  return n * (n + 1) / 2
}

// Let's test them....

console.log("factorialWithLoop(10)", factorialWithLoop(10))
console.log("factorialWithMath(10)", factorialWithMath(10))

/*
  Both approaches solve the fundamental task, 
  producing the factorial of a number,
  but which one is better
  Well, it depends on several factors, such as
  
  1. Which is more readable?
  2. Which is more concise?
  3. Which one has the smallest space complexity (uses the most memory)?
  4. Which one hast the smallest time complexity (is the fastest)
  
  Points 1 & 2 are often subjective,
  but points 3 & 4 can be measured and tested to determine
  which algorithm is more performant in terms of computation.
  
  We can time how long an algorithm takes:
*/

const bigNum = 10000000000
let t1, t2, t3, t4

t1 = performance.now()
factorialWithLoop(bigNum)
t2 = performance.now()

t3 = performance.now()
factorialWithMath(bigNum)
t4 = performance.now()

console.log(`factorialWithLoop took ${(t2 - t1)} ms`)
console.log(`factorialWithMath took ${(t4 - t3)} ms`)

/* 
  This crude test clearly shows that the looping algorithm 
  does not perform well when given larger numbers.

  We can say that the looping algorithm has a greater time complexity,
  that the maths algorithm.

  Also notice how the looping algorithm, 
  postponed any further code execution, 
  until it had completed.

  Testing algorithms by timing them this way is not practical or accurate.
  An algorithm will perform differently depending on the context in which it is executed,
  and will be impacted by factors such as:

  - Programming Language
  - Context of Execution
  - Memory and CPU resources
  - Browser Implementations
  - System Architecture
*/