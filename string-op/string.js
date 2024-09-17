 //length: Returns the length of a string.

let text = "Hello, World!";
console.log(text.length); // 13

charAt(): // Returns the character at a specified index.


let text = "Hello, World!";
console.log(text.charAt(0)); // "H"

charCodeAt(): //Returns the Unicode of the character at a specified index.

let text = "Hello, World!";
console.log(text.charCodeAt(0)); // 72

at(): // Returns the character at a specified index, supporting negative indexing.


let text = "Hello, World!";
console.log(text.at(-1)); // "!"

//Extracting Parts of a String
slice():// Extracts a part of a string and returns it as a new string.

let text = "Hello, World!";
console.log(text.slice(0, 5)); // "Hello"

substring():  //Similar to slice(), but does not accept negative indices.

let text = "Hello, World!";
console.log(text.substring(0, 5)); // "Hello"


substr():  //Extracts a part of a string, starting at a specified index and extending for a given number of characters.


let text = "Hello, World!";
console.log(text.substr(0, 5)); // "Hello"

//Modifying Strings

toUpperCase():  //Converts a string to uppercase letters.

let text = "Hello, World!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"

toLowerCase(): //Converts a string to lowercase letters.

let text = "Hello, World!";
console.log(text.toLowerCase()); // "hello, world!"

replace():  //Replaces a specified value with another value in a string.

let text = "Hello, World!";
console.log(text.replace("World", "JavaScript")); // "Hello, JavaScript!"

replaceAll(): //Replaces all occurrences of a specified value with another value in a string.

let text = "Hello, World! World!";
console.log(text.replaceAll("World", "JavaScript")); // "Hello, JavaScript! JavaScript!"

//Searching and Splitting Strings

indexOf(): //Returns the index of the first occurrence of a specified value.

let text = "Hello, World!";
console.log(text.indexOf("World")); // 7

includes(): // Checks if a string contains a specified value.

let text = "Hello, World!";
console.log(text.includes("World")); // true

split():  //Splits a string into an array of substrings.

let text = "Hello, World!";
console.log(text.split(", ")); // ["Hello", "World!"]
