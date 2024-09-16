
//A promise is created using the Promise constructor, which takes a function with two arguments: resolve and reject.


let myPromise = new Promise((resolve, reject) => {
  let success = true; // Simulate an operation

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

myPromise
  .then((message) => {
    console.log(message); // Output: Operation was successful!
  })
  .catch((error) => {
    console.error(error);
  });


/*The myPromise object is created with a function that simulates an operation.
 If the operation is successful, it calls resolve with a success message.
  If it fails, it calls reject with an error message.
The then method is used to handle the resolved value,
 and the catch method is used to handle any errors. */

// Asynchronous Example:
//Promises are particularly useful for handling asynchronous operations like fetching data from an API.



function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = "Fetched data";
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Output: Fetched data
  })
  .catch((error) => {
    console.error("Error:", error);
  });


/* The fetchData function returns a promise that simulates fetching data with a setTimeout.
 The then method is used to handle the fetched data, and the catch method is used to handle any errors.
Promises help manage asynchronous operations more effectively, making your code cleaner and easier to understand*/
