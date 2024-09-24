/*In JavaScript, prototypes are a fundamental concept that allows objects to inherit properties
 and methods from other objects. Here’s a concise overview:

What is a Prototype?
A prototype is an object from which other objects inherit properties.
 Every JavaScript object has a prototype, which is another object from which it inherits properties and methods.

Prototype Chain
When you try to access a property of an object, JavaScript first looks at the object itself.
 If the property is not found, it then looks at the object’s prototype, and so on,
  up the prototype chain until it either finds the property or reaches the end of the chain (which is null).

Example
Here’s a simple example to illustrate prototypes: */


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

const person1 = new Person("Prize", "Aseeja");
console.log(person1.fullName()); // Output: Prize Aseeja

/*In this example:

Person is a constructor function.
Person.prototype.fullName adds a method to the prototype of Person.
person1 is an instance of Person and can access the fullName method through the prototype.*/


