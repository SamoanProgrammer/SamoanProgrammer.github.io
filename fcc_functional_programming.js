/*
Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope.
INPUT -> PROCESS -> OUTPUT
Functional programming is about:
1) Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
2) Pure functions - the same input always gives the same output
3) Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

Terminology:
Callbacks: Are the functions that are slipped or passed into another function to decide the invocation of that function. 
You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

First class functions: Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value. 
In JavaScript, all functions are first class functions.

Higher order functions: The functions that take a function as an argument, or return a function as a return value.

Lambda: When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned.

In functional programming, changing or altering things is called mutation, and the outcome is called a side effect. 
A function, ideally, should be a pure function, meaning that it does not cause any side effects.

Always declare your dependencies explicitly. 
This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
This makes the function easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.

1) Don't alter a variable or object - create new variables and objects and return them if need be from a function.
2) Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
*/

// An implementation of the map method
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  for (let i = 0; i < this.length; i++)
    newArray.push(callback(this[i]));

    return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});

// Every method
function checkPositive(arr) {
  return arr.every(x => x > 0); // checks if every element in an array passes a particular test
}
checkPositive([1, 2, 3, -4, 5]);

// Some method
function checkPositive(arr) {
  return arr.some(x => x > 0); // checks if any element in an array passes a particular test
}
checkPositive([1, 2, 3, -4, 5]);

/*
Currying and Partial Application
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.
*/
// Here's an example:

// Un-curried function
function unCurried(x, y) {
  return x + y;
}

// Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
// Alternative using ES6
const curried = x => y => x + y

curried(1)(2) // Returns 3
// This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, 
// which will hold the returned function reference that takes the next argument when it's available. 
// Here's an example using the curried function in the example above:

// Call a curried function in parts:
var funcForY = curried(1);
console.log(funcForY(2)); // Prints 3
// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. 
// Here's an example:

//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13