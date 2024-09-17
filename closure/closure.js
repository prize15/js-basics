/*Closures in JavaScript are a powerful feature that allows a function to access variables from its outer
 (enclosing) scope, even after the outer function has finished executing. 
 This is possible because functions in JavaScript form closures over their lexical environment. */



function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // Accesses the outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Logs: 'I am outside!'

/*outerFunction creates a local variable outerVariable and an inner function innerFunction.
innerFunction has access to outerVariable even after outerFunction has returned.
When myClosure is called, it still remembers the outerVariable from its lexical scope.
Closures are useful for:

Data Privacy: Encapsulating variables so they can’t be accessed from outside the function.
Function Factories: Creating functions with preset configurations.
Maintaining State: Keeping track of state across function calls.*/
