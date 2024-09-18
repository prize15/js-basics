/*In JavaScript, higher-order functions are functions that do one of the following:

Take one or more functions as arguments (also called callbacks).
Return a function as a result.
Higher-order functions are useful for creating more abstract, reusable, and modular code.
 They allow us to manipulate functions like data, passing them around and combining them in flexible ways.*/

/*Example 1: Function as an Argument
One common example is using the higher-order function map().
 It takes a function as an argument to apply to each element in an array: */


const numbers = [1, 2, 3, 4];

// Higher-order function: map()
const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6, 8]

//In this case, map() takes a function (an anonymous function in this case) that doubles each number in the array.

//Example 2: Returning a Function
//A higher-order function can also return a new function. This is often used for function factories:


function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

/*Here, createMultiplier() is a higher-order function that returns a new function
 that multiplies its argument by the multiplier value.*/

/*Common Higher-Order Functions in JavaScript:
map() – Iterates over an array and applies a function to each element.
filter() – Iterates over an array and returns a new array with elements that pass a test.
reduce() – Combines all elements of an array into a single value by applying a function.
forEach() – Executes a provided function once for each array element.
Example with filter(): */

const number = [1, 2, 3, 4, 5, 6];

// Higher-order function: filter()
const evenNumbers = number.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]

/*In this case, filter() is a higher-order function that takes a function as an argument and
 uses it to test each element in the array.

Higher-order functions allow for more concise and expressive code,
 making it easier to work with functional programming patterns in JavaScript.*/
