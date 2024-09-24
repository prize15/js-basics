 /*The call, apply, and bind methods in JavaScript are used to control the context (this value) within functions.
 Here’s a brief overview of each:

call
The call method invokes a function with a specified this value and arguments provided individually.
Syntax:

functionName.call(thisArg, arg1, arg2, ...)

Example: */


function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Prize' };
greet.call(person, 'Hello', '!');

/*In this example, this inside greet refers to person.

apply
The apply method is similar to call, but it takes arguments as an array.

Syntax:


functionName.apply(thisArg, [argsArray])

Example: */


function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const sir = { name: 'Prize' };
greet.apply(sir, ['Hello', '!']);

/*Here, this inside greet also refers to person.

bind
The bind method creates a new function that, when called, has its this value set to the provided value,
 with a given sequence of arguments preceding any provided when the new function is called.

Syntax:

const boundFunction = functionName.bind(thisArg, arg1, arg2, ...)

Example:
 */

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const per = { name: 'Prize' };
const greetPerson = greet.bind(per, 'Hello');
greetPerson('!');

//In this case, greetPerson is a new function with this bound to person.
