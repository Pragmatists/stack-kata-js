# stack-kata-js

Stack Kata in JavaScript inspired by
 ["Specifics and Generics" post on "The Clean Coder" blog]( http://thecleancoder.blogspot.com/2010/11/craftsman-63-specifics-and-generics.html )

## Task & rules

You have to write stack implementation. The initial code with tests is prepared in `src/stack.js` file.

Rules:

* Stack has three methods:
    * `push(element)` puts given `element` on the top of a stack and returns nothing,
    * `pop()` removes element from the top of a stack and returns it,
    * `size()` returns number of elements on a stack.
* Stack has given capacity which should be passed as a constructor parameter.
* You cannot `pop` value from empty stack: `underflow` error should be thrown. 
* You cannot `push` value to stack which reached its capacity: `overflow` error should be thrown. 

Remember to use Test-Driven Development cycle:
 
1. Write failing test.
1. Write implementation which makes test pass.
1. Refactor code.

## Commands

* `npm install` to download dependencies
* `npm test` to run tests
