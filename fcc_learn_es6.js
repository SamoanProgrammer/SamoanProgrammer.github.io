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
