// Difference between var and let keywords
// One of the biggest problems with declaring variables with the var keyword is that you can overwrite variable declarations without an error.
var camper1 = 'James';
var camper1 = 'David';
console.log(camper); // logs 'David'
// A new keyword called let was introduced in ES6 to solve this potential issue with the var keyword. 
// If you were to replace var with let in the variable declarations of the code above, the result would be an error.
let camper2 = 'James';
let camper2 = 'David'; // throws an error

// When declare a variable with var keyword, it is declared globally or locally if declared inside a function
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // returns [0, 1, 2]
console.log(i); // returns 3
// With the var keyword, i is declared globally. So when i++ is executed, it updates the global variable. This code is similar to the following:
var numArray = [];
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // returns [0, 1, 2]
console.log(i); // returns 3

// When declare a variable with let keyword, it is limited to the block, statement, or expression it is declared
'use strict';
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 2, if we declared printNumTwo with var keyword, this would return 3 (the global value of i)
console.log(i); // returns "i is not defined", if we declared i with var keyword, this would return 3 as well

// Declare a Read-Only variable with the const keyword
"use strict";
const FAV_PET = "Cats"; // common to use all uppercase letters, with words separated by an underscore when naming a const
FAV_PET = "Dogs"; // returns error because cannot reassign const variable once it has been assigned

// Mutate an Array declared with const
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]

// Prevent object mutation with Object.freeze
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); // { name: "FreeCodeCamp", review:"Awesome"}

// Use Arrow Functions to write concise Anonymous Functions
// In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. 
// Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.
// To achieve this, we often use the following syntax:
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
// ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. 
// This helps simplify smaller functions into one-line statements:
const myFunc = () => "value"; // This code will still return value by default.

// Arrow Functions with Parameters
const doubler = (item) => item * 2; // doubles parameter value i.e. item and returns it
const doubler = item => item * 2; // If single parameter, the parentheses enclosing the parameter maybe omitted
const multiplier = (item, multi) => item * multi; // can pass multiple parameters

// Set default parameters for Functions
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous

// Use the Rest Parameter with Function Parameters
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
  console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

  const sum = (...args) => { // Takes a number of arguments and returns the sum of those numbers
    return args.reduce((a, b) => a + b, 0);
  }
  
// Use the Spread operator to evaluate the arrays in place
// ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
// The spread operator unpacks all contents of an array into a comma-separated list
// The ES5 code below uses apply() to compute the maximum value in an array:

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89
// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. 

// The spread operator makes this syntax much better to read and maintain.
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
// ...arr returns an unpacked array. In other words, it spreads the array. 
// However, the spread operator only works in-place, like in an argument to a function or in an array literal. The following code will not work:
const spreaded = ...arr; // will throw a syntax error

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Copy all contents of arr1 into arr2
console.log(arr2);

// Destructing Assignment to Extract Values from Objects
const user = { name: 'John Doe', age: 34 };
const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34
//Here's an equivalent assignment statement using the ES6 destructuring syntax:
const { name, age } = user; // name = 'John Doe', age = 34

// Destructing Assignment to Assign Variables from Objects
//Here's how you can give new variable names in the assignment:
const { name: userName, age: userAge } = user; // userName = 'John Doe', userAge = 34

// Destructing Assignment to Assign Variables from Nested Objects
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
// Here's how to extract the values of object properties and assign them to variables with the same name:
const { johnDoe: { age, email }} = user;
// And here's how you can assign an object properties' values to variables with different names:
const { johnDoe: { age: userAge, email: userEmail }} = user;

// Destructuring an array lets us pick and choose which elements you want to assign variables to:
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
// The variable a is assigned the first value of the array, and b is assigned the second value of the array. 
// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
let d = 8, e = 6;
// You can use destructing assignment to swap the values 
[d,e] = [e,d]; // d = 6, e = 8;

// Destructing Assignment with the Rest parameter to Reassign Array Elements
// This is similar to Array.prototype.slice()
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

// Destructing Assignment to Pass an Object as a Function's Parameters
// In some cases, you can destructure the object in a function argument itself.
// Consider the code below:
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
// This effectively destructures the object sent into the function. This can also be done in-place:
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
// This removes some extra lines and makes our code look neat.
// This has the added benefit of not having to manipulate an entire object in a function — only the fields that are needed are copied inside the function.
// Use destructuring assignment within the argument to the function half to send only max and min inside the function.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => (max + min) / 2.0; 

// Create Strings using Template Literals
// Template literals allow you to create multi-line strings and to use string interpolation features to create strings.
// Consider the code below:
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.

// Write concise Object Literal Declarations using Object property short-hand
// ES6 adds some nice support for easily defining object literals.
// Consider the following code:
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
// getMousePosition is a simple function that returns an object containing two properties. 
// ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x. 
// You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. 
// Here is the same function from above rewritten to use this new syntax:
const getMousePosition = (x, y) => ({ x, y });

// Write Concise Declarative Functions with ES6
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
// With ES6, You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

// ES6 provides a new syntax to create objects, using the class keyword.
// It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm,
// unlike in languages such as Java, Python, Ruby, etc.
// In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
// The class syntax simply replaces the constructor function creation:
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

// Use getters and setters to Control Access to an Object
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
// Notice the syntax used to invoke the getter and setter. They do not even look like functions. 
// Getters and setters are important because they hide internal implementation details. 
// Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.

// Create a Module Script
// ES6 introduced a way to easily share code amoung JavaScript files.
// This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. 
// In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module
<script type="module" src="filename.js"></script>

// Use export to share a code block (aka named export)
// Image a file called math_functions.js contains several functions like add below:
export const add = (x, y) => {
  return x + y;
}
// The above is a common way to export a single function, but you can achieve the same thing like this:
const add = (x, y) => {
  return x + y;
}
export { add }; // You can do multiple exports by separating with a comma e.g. export { add, subtract ... etc } or have export at the front of const for each function

// Reuse Javascript code using Import
// You can import add function to use in another file like this:
import { add } from './math_functions.js';
import { add, subtract } from './math_functions.js'; // You can add multiple items like this

// Use * to import everything from a file
import * as myMathModule from "./math_functions.js";
// The above import statement will create an object called myMathModule. 
// This is just a variable name, you can name it anything. 
// The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. 
// Here's how you can use the add and subtract functions that were imported:
myMathModule.add(2,3);
myMathModule.subtract(5,3);

// Create an Export fallback with export default
// Usually you will use this syntax if only one value is being exported from a file
// It is also used to create a fallback value for a file or module
// Below are examples using export default:
export default function add(x, y) { // named function
  return x + y;
}
export default function(x, y) { // anonymous function
  return x + y;
}   
// You cannot use export default with keywords var, let, or const

// Import a Default Export
// In the following example, add is the default export of the math_functions.js file
import add from "./math_functions.js";
// The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). 
// add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

// Create a JavaScript Promise
// Used to make a promise to do something, usually asynchronously
// When the task completes, you either fulfill your promise or fail to do so
const myPromise = new Promise((resolve, reject) => { // takes a function as its argument with two parameters i.e. resolve, reject used to determine outcome of promise

});

// Complete a Promise with resolve and reject
// A promise has three states: pending, fulfilled, and rejected. 
// The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. 
// The resolve and reject parameters given to the promise argument are used to do this. resolve is used when you want your promise to succeed, 
// and reject is used when you want it to fail. These are methods that take an argument, as seen below.
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
// The example above uses strings for the argument of these functions, but it can really be anything.
// Often, it might be an object, that you would use data from, to put on your website or elsewhere.

// Handle a fulfilled Promise with then
// The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:
myPromise.then(result => { // result comes from the argument given to the resolve method
  console.log(result); // do something with the result.
});

// Handle a rejected Promise with catch
// catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:
myPromise.catch(error => { // error is the argument passed into the reject method
  console.log(error); // do something with the error.
});
// NOTE: the then and catch methods can be chained to the promise declaration if you choose.