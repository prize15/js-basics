/* Generators in JavaScript are a powerful feature that allows functions to yield multiple values over time,
 pausing and resuming their execution as needed. Here’s a brief overview:

What Are Generators?
Generators are special types of functions that can be paused and resumed, allowing them to yield multiple values
 one at a time. They are defined using the function* syntax and the yield keyword.

Creating a Generator
To create a generator function, you use the function* syntax: */


function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}


/* Using Generators
When you call a generator function, it doesn’t execute its code immediately.
 Instead, it returns a generator object that can be used to control the execution of the function:
 */


let generator = generateSequence();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: true }
console.log(generator.next()); // { value: undefined, done: true }

/*Iterating with Generators
Generators are iterable, meaning you can use them with loops like for...of: */



for (let value of generateSequence()) {
  console.log(value); // 1, then 2
}


/*
Benefits of Generators :
Memory Efficiency: Generators are useful for handling large datasets or streams of data
 because they generate values on the fly.
Asynchronous Programming: They can be used with async functions to manage asynchronous code more effectively. */
