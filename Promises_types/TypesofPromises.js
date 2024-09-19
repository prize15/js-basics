/* In JavaScript, Promises are used to handle asynchronous operations.
 A `Promise` represents the eventual completion (or failure) of an asynchronous operation
  and its resulting value. There are several types of methods associated with promises for different purposes,
   including creating, resolving, chaining, and handling errors in promises. */

 /* 1. **Creating a Promise**
   - A promise can be created using the `Promise` constructor, which takes a function (executor)
    that has two parameters: `resolve` and `reject`. */

   const myPromise = new Promise((resolve, reject) => {
       // Perform some asynchronous operation, then:
       if (success) {
           resolve("Operation successful");
       } else {
           reject("Operation failed");
       }
   });


/* 2. **Basic Promise Methods**
   - `then()`
     - Invoked when the promise is successfully resolved.
     - It returns a new promise, enabling chaining. */

     myPromise.then((value) => {
         console.log(value);
     });

   /* - `catch()`
     - Invoked when the promise is rejected (an error occurs). */

     myPromise.catch((error) => {
         console.log(error);
     });


/*   - `finally()`
     - Invoked once the promise is either resolved or rejected. It does not receive any value or reason,
      but it executes after the `then` or `catch`. */

     myPromise.finally(() => {
         console.log("Promise completed");
     });
    
/* 3. **Static Methods**
   - `Promise.resolve()`
     - Creates a promise that is resolved with a given value. */

    
     const resolvedPromise = Promise.resolve(42);
     resolvedPromise.then((value) => console.log(value)); // 42
    

/*   - `Promise.reject()`
     - Creates a promise that is rejected with a given reason. */

     
     const rejectedPromise = Promise.reject("Error occurred");
     rejectedPromise.catch((error) => console.log(error)); // Error occurred
    

/*   - `Promise.all()`
     - Accepts an array of promises and returns a single promise that resolves when all promises
      in the array resolve or rejects when one of them rejects.
     - The result will be an array of resolved values. */


     const promise1 = Promise.resolve(3);
     const promise2 = Promise.resolve(42);
     const promise3 = Promise.resolve("Hello");

     Promise.all([promise1, promise2, promise3]).then((values) => {
         console.log(values); // [3, 42, "Hello"]
     });


/*   - `Promise.allSettled()`
     - Similar to `Promise.all()`, but it waits for all promises to settle (either resolved or rejected)
      and returns an array of objects that describe the outcomes of each promise. */


     const promises = [
         Promise.resolve("Success"),
         Promise.reject("Error"),
         Promise.resolve("Another success")
     ];

     Promise.allSettled(promises).then((results) =>
         results.forEach((result) => console.log(result.status))
     );
     // Output: 
     // "fulfilled"
     // "rejected"
     // "fulfilled"
    

/*   - `Promise.race()`
     - Returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.*/

     const slowPromise = new Promise((resolve) => setTimeout(resolve, 1000, "slow"));
     const fastPromise = new Promise((resolve) => setTimeout(resolve, 500, "fast"));

     Promise.race([slowPromise, fastPromise]).then((value) => {
         console.log(value); // "fast"
     });


/*   - `Promise.any()`
     - Returns a promise that resolves as soon as any of the promises in the array resolves.
      If all the promises are rejected, it rejects with an `AggregateError`.*/

{
     const promises = [
         Promise.reject("Error 1"),
         Promise.resolve("First success"),
         Promise.resolve("Second success")
     ];

     Promise.any(promises).then((value) => {
         console.log(value); // "First success"
     }).catch((error) => {
         console.log(error.errors); // [Error 1]
     });

    }
/* 4. **Promise Chaining**
   - Promises can be chained to handle asynchronous operations in sequence. */

   const promise = new Promise((resolve) => {
       setTimeout(() => resolve(1), 1000);
   });

   promise
       .then((value) => {
           console.log(value); // 1
           return value * 2;
       })
       .then((value) => {
           console.log(value); // 2
           return value * 3;
       })
       .then((value) => {
           console.log(value); // 6
       });

 /* 5. **Async/Await Syntax (built on Promises)**
   - The `async` and `await` keywords make working with promises more readable and synchronous in appearance.*/

   async function fetchData() {
       try {
           const result = await myPromise;
           console.log(result);
       } catch (error) {
           console.error(error);
       } finally {
           console.log("Finished");
       }
   }
   fetchData();
   
/*
 Summary of Key Methods:
| Method                | Description                                                   |
|-----------------------|---------------------------------------------------------------|
| `then()`              | Handles resolved values                                       |
| `catch()`             | Handles rejected values                                       |
| `finally()`           | Runs after the promise is settled, regardless of outcome      |
| `Promise.resolve()`   | Creates a promise that resolves with a specified value        |
| `Promise.reject()`    | Creates a promise that rejects with a specified reason        |
| `Promise.all()`       | Resolves when all promises resolve                            |
| `Promise.allSettled()`| Waits for all promises to settle(either fulfilled or rejected)|
| `Promise.race()`      | Resolves or rejects as soon as one promise resolves or rejects|
| `Promise.any()`       | Resolves with the first fulfilled promise                     |

These promise methods make handling asynchronous code in JavaScript more efficient and flexible. */