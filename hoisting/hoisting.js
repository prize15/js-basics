/*Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top
 of their containing scope during the compilation phase. This means that you can use variables and functions
  before you declare them in your code.*/

/*Key Points about Hoisting:
Variable Hoisting:
var: Variables declared with var are hoisted to the top of their function or global scope.
 However, only the declaration is hoisted, not the initialization.
let and const: Variables declared with let and const are also hoisted, but they are not initialized.
 They remain in a “temporal dead zone” until the declaration is encountered in the code.*/

console.log(hoistedVar); // undefined
var hoistedVar = 'I am hoisted!';

console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 'I am not hoisted!';

/*Function Hoisting:
Function Declarations: Entire function declarations are hoisted,
 meaning you can call the function before its declaration in the code.
Function Expressions: Only the variable declaration is hoisted, not the function definition.*/

hoistedFunction(); // Works fine
function hoistedFunction() {
    console.log('I am a hoisted function!');
}

hoistedExpression(); // TypeError: hoistedExpression is not a function
var hoistedExpression = function() {
    console.log('I am not hoisted!');
};

/*Practical Implications:
Avoid Confusion: Always declare variables and functions at the top of their scope to avoid confusion and potential bugs.
Temporal Dead Zone: Be aware of the temporal dead zone when using let and const.*/