// Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(Hello, my name is ${this.name});
    }
}

const john = new Person("John", 30);
john.greet(); // Output: "Hello, my name is John"

//---------------------------------------------------

//Modules

//Example: Export

// file: math.js
export function add(a, b) {
    return a + b;
}
//Example: Import
// file: app.js
import { add } from './math.js';
console.log(add(2, 3)); // Output: 5

//----------------------------------------------------------

//Default parameters

function greet(name = "Guest") {
    return Hello, ${name};
}
console.log(greet()); // Output: "Hello, Guest"

//-----------------------------------------------------

//Spread
// Spread (...): Expands an array or object into individual elements.
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr); // Output: [1, 2, 3, 4, 5]
