
//Array.prototype.flat() and Array.prototype.flatMap():
//flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//flatMap() first maps each element using a mapping function, then flattens the result into a new array.

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]

const arr2 = [1, 2, 3];
console.log(arr2.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6]

//Object.fromEntries():
//This method transforms a list of key-value pairs into an object.

const entries = [['name', 'Alice'], ['age', 25]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: 'Alice', age: 25 }

//String.prototype.trimStart() and String.prototype.trimEnd():
//These methods remove whitespace from the beginning and end of a string, respectively.

const str = '   Hello World!   ';
console.log(str.trimStart()); // 'Hello World!   '
console.log(str.trimEnd()); // '   Hello World!'

//Symbol.prototype.description:
//This property allows you to access the description of a symbol.

const sym = Symbol('description');
console.log(sym.description); // 'description'

//Optional Catch Binding:
//You can now omit the error parameter in catch blocks if you don’t need it.


try {
    // code that may throw an error
} catch {
    // handle the error
}

//BigInt: A new primitive type for representing integers with arbitrary precision.


const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // 1234567890123456789012345678901234567890n

//Dynamic Import: Allows you to import modules dynamically at runtime.

import('module-name').then(module => {
    // use the module
});

//Well-formed JSON.stringify(): Ensures that JSON.stringify() returns well-formed Unicode strings.


const object = { key: 'value' };
console.log(JSON.stringify(object)); // '{"key":"value"}'
