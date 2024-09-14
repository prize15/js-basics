console.log("File holding different data types");
//this is a file holding different data types in javascript.

//Primitive Data Types:

let age = 24;    // integer
let price = 195.99;  //floating-point number

let name = "Prize Aseeja";  // storing a string

let isActive = true;  //boolean value

let x; 
console.log(x); //Undefined: a variable that has been declared but not assigned a value.

let y = null;  //Null: Represents the intentional absence of any object value.

let sym = Symbol("unique"); //Symbol: Represents a unique identifier.

let bigNumber = BigInt(123456789012345678901234567890); //BigInt: Represents integers with arbitrary precision.


//Non-Primitive Data Types:

//Object: Represents collections of key-value pairs:

let person = {
    firstName: "Prize",
    lastName: "Aseeja"
};

//Array: Represents ordered collections of values.

let numbers = [1, 2, 3, 4, 5];

//Function: Represents reusable blocks of code.

function greet() {
    console.log("RAM RAM JI");
}

//Map: Represents collections of key-value pairs where keys can be of any type.

let map = new Map();
map.set("name", "Prize");

//Set: Represents collections of unique values.

let set = new Set([1, 2, 3, 4, 5]);




//To define these in js we can use 3 types of variables: var , let and const.

var a = 5;
/*outdated mainly due to its function-scoped nature,
 which often led to unexpected behaviors and bugs.*/ 


let b = 7; // can be changed
b = 9;

const c = 10; // can't be changed