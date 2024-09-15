//synchronous programming, tasks are executed one after the other.


console.log("Start");
console.log("Middle");
console.log("End");

/*Output:
Start
Middle
End */

//statement is executed in order

//async:  tasks can be initiated and then continue running in the background, allowing other tasks to execute without waiting for the previous ones to complete.


console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 2000);

console.log("End");


/*Output:

Start
End
Middle */

 //setTimeout is an asynchronous function that schedules the console.log("Middle") to run after 2 seconds.

//Asynchronous programming is crucial for tasks like fetching data from a server, where waiting for the response would block the execution of other code.
