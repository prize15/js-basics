
//Adding and Removing Elements
push(): // Adds one or more elements to the end of an array.

let fruits = ["Apple", "Banana"];
fruits.push("Orange"); // ["Apple", "Banana", "Orange"]

pop(): // Removes the last element from an array.

let fruits = ["Apple", "Banana", "Orange"];
fruits.pop(); // ["Apple", "Banana"]


unshift():  //Adds one or more elements to the beginning of an array.


let fruits = ["Banana", "Orange"];
fruits.unshift("Apple"); // ["Apple", "Banana", "Orange"]

shift():  //Removes the first element from an array.


let fruits = ["Apple", "Banana", "Orange"];
fruits.shift(); // ["Banana", "Orange"]

//Accessing and Modifying Elements

at(): // Returns the element at a specific index.


let fruits = ["Apple", "Banana", "Orange"];
let fruit = fruits.at(1); // "Banana"

splice(): // Adds or removes elements from an array.

let fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1, "Grapes"); // ["Apple", "Grapes", "Orange"]

//Iterating Over Arrays
//forEach(): Executes a provided function once for each array element.


let fruits = ["Apple", "Banana", "Orange"];
fruits.forEach(fruit => console.log(fruit));

map(): //Creates a new array with the results of calling a provided function on every element.

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2); // [2, 4, 6]

//Searching and Filtering

filter(): //Creates a new array with all elements that pass the test implemented by the provided function.


let numbers = [1, 2, 3, 4];
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]

find(): //Returns the first element that satisfies the provided testing function.

let numbers = [1, 2, 3, 4];
let firstEven = numbers.find(num => num % 2 === 0); // 2

//Combining and Slicing

concat():  //Merges two or more arrays.


let fruits = ["Apple", "Banana"];
let moreFruits = ["Orange", "Grapes"];
let allFruits = fruits.concat(moreFruits); // ["Apple", "Banana", "Orange", "Grapes"]

slice(): // Returns a shallow copy of a portion of an array.


let fruits = ["Apple", "Banana", "Orange"];
let citrus = fruits.slice(1, 3); // ["Banana", "Orange"]
