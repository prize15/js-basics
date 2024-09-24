/*An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined.
	This pattern is also known as a self-executing anonymous function. Here’s a basic example: */


(function() {
    // IIFE code block
    var localVar = 'This is a local variable';
    console.log(localVar);  // Output: This is a local variable
})();

/*Key Features of IIFE:
Immediate Execution: The function is executed right after it is defined.
Local Scope: Variables declared inside an IIFE are not accessible outside of it,
 which helps in avoiding global namespace pollution.
Syntax: The function is wrapped in parentheses () to create a function expression,
 and then it is immediately invoked using ().
Use Cases:
Avoiding Global Namespace Pollution: By encapsulating variables and functions within an IIFE,
 you prevent them from affecting the global scope.
Creating Private Variables: IIFEs can be used to create private variables
 that cannot be accessed from outside the function.
Async Functions: IIFEs can be used to execute async functions, allowing the use of await
 even in environments that do not support top-level await.
Here’s an example of an IIFE that creates private variables: */


var counter = (function() {
    var count = 0;
    return {
        increment: function() { count++; },
        decrement: function() { count--; },
        getCount: function() { return count; }
    };
})();

counter.increment();
counter.increment();
console.log(counter.getCount());  // Output: 2
console.log(counter.count);  // Output: undefined (cannot access private variable)

//IIFEs are a powerful tool in JavaScript, especially for maintaining clean and modular code.

