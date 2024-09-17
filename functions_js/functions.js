
//Regular Function: Basic function type.

function greet(name) {
    return `Hello, ${name}!`;
}

//Arrow Function: Compact and anonymous function syntax

const greet = (name) => `Hello, ${name}!`;

//Function Expression: Non-hoisted function syntax.

const greet = function(name) {
    return `Hello, ${name}!`;
};

//Async Function: Handles asynchronous operations.

async function fetchData() {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    return data;
}

//Generator Function: Pauses and resumes execution.

function* generatorFunction() {
    yield 'Hello';
    yield 'World';
}

//Method Definition: Function defined within an object or class.

const obj = {
    greet(name) {
        return `Hello, ${name}!`;
    }
};
