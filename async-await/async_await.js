
//async Function
//An async function is a function that returns a promise. It allows you to use the await keyword inside it.


async function fetchData() {
  return "Data fetched";
}

fetchData().then(data => console.log(data)); 
// Output: Data fetched

//await Keyword
// It makes JavaScript wait until the promise is resolved and returns the result.


async function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 2000);
  });

  let result = await promise; 
  // Wait until the promise resolves
  console.log(result); 
  // Output: Data fetched
}

fetchData();

//Combining async and await
//example involving fetching data from an API:


async function getUserData() {
  try {
    let response = await fetch('https://api.example.com/user');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getUserData();

/*The fetch function returns a promise.
await pauses the execution of getUserData until the promise is resolved.
If the promise is resolved, the result is assigned to data.
If the promise is rejected, the catch block handles the error.
Using async and await makes asynchronous code easier to read and maintain.*/
