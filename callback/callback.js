
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Brother", sayGoodbye);


/*Output:
Hello, Brother
Goodbye! */

 //Callbacks are especially useful for asynchronous operations like fetching data from a server:



function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 2000);
}

function processData() {
  console.log("Processing data");
}

fetchData(processData);

/*Output:
Data fetched
Processing data*/

//Here, fetchData simulates an asynchronous operation using setTimeout.
// After 2 seconds, it logs “Data fetched” and then calls the processData function.
