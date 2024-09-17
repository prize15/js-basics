
//Asynchronous Iteration: This allows you to use for await...of loops to iterate over asynchronous data sources, 
//making it easier to work with streams of data.


async function* asyncGenerator() {
    yield new Promise(resolve => setTimeout(() => resolve('done this ✅'), 2000));
    yield new Promise(resolve => setTimeout(() => resolve('done that ✅'), 3000));
}

for await (const value of asyncGenerator()) {
    console.log(value);
}


//Promise.prototype.finally:  This method allows you to specify a final action to be performed
// after a promise is settled, regardless of its outcome.


fetch('https://api.example.com/data')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .finally(() => console.log('Fetch attempt finished.'));


//Rest/Spread Properties: Enhancements to the rest and spread operators make it easier
// to work with objects and arrays.


const user = { name: 'Alice', age: 25, location: 'Wonderland' };
const { location, ...rest } = user;
console.log(rest); // { name: 'Alice', age: 25 }

const newUser = { ...user, age: 26 };
console.log(newUser); // { name: 'Alice', age: 26, location: 'Wonderland' }

//RegExp Improvements: Several improvements were made to regular expressions, 
//including the addition of the s (dotAll) flag, named capture groups, and lookbehind assertions.

const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const result = re.exec('2024-09-17');
console.log(result.groups); // { year: '2024', month: '09', day: '17' }

