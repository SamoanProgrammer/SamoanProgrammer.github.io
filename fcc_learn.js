// Best Practice variable names in camelCase 
var someVariable;

// Escape with backslash \
var myStr = "This is a \"speech quote\"";
/*
    \'	single quote
    \"	double quote
    \\	backslash
    \n	newline
    \r	carriage return
    \t	tab
    \b	word boundary
    \f	form feed
*/

// Strings are immutable in javascript, have to change the whole string 
var myStr = "Bob"; 
myStr[0] = "J"; // won't work
console.log(myStr); // will return Bob
myStr = "Job"; // this will change the string
console.log(myStr); // will now return Job

// Arrays are mutable and can be changed freely
var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]

// Multi-Dimensional Arrays with Indexes
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
  ];
  arr[3]; // equals [[10,11,12], 13, 14]
  arr[3][0]; // equals [10,11,12]
  arr[3][0][1]; // equals 11

  // Manipulate Arrays
  var arr1 = [1,2,3];
arr1.push(4); // push a parameter to the end of the array
// arr1 is now [1,2,3,4]

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop(); // pop an element off of the end of an array and popped off value can be assigned to a variable
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

var ourArray = ["Stimpson", "J", ["cat"]]; // shift works like pop but removes first element instead of last element
var removedFromOurArray = ourArray.shift(); // removedFromOurArray now equals "Stimpson" 
// ourArray now equals ["J", ["cat"]]

var ourArray = ["Stimpson", "J", "cat"]; // unshift works like push but instead of adding element at the end of the array, it adds element to the beginning
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Equality and Strict Equality operators
3 == '3'  // Equality operator returns true because JavaScript performs type conversion from string to number
3 === '3' // Strict Equality operator returns false because the types are different and type conversion is not performed

// You can determine the type of a variable or a value with the typeof operator
typeof 3   // returns 'number'
typeof '3' // returns 'string'

/*
    Other operators
    !=      No Equal, will convert data type
    !==     Strictly Not Equal, will not convert data type
    >, >=   Will convert data types when comparing
    <, <=   Will convert data types when comparing
*/

/*
Counting Cards
Each card is assigned a value according to the table below. 
When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	            2, 3, 4, 5, 6
 0	            7, 8, 9
-1	            10, 'J', 'Q', 'K', 'A'
*/
var count = 0;

function cc(card) {
  if ([2,3,4,5,6].includes(card))
    count++;
  else if ([10,'J','Q','K','A'].includes(card))
    count--;
  
  if (count > 0)
    return count + " Bet";
  else
    return count + " Hold";
}

// Objects are similar to arrays but you access and modify their data using properties instead of indexes
var dog = {
    "name"      : "Cali",
    "legs"      : 4,
    "tails"     : 1,
    "friends"   : ["Knuckles", "Batman"]
};

// Accessing properties with dot notation and bracket notation
var prop1Val = dog.name;    // Cali, dot notation
var prop2Val = dog["legs"]; // 4, bracket notation
var param = "tails";
var prop3Val = dog[param];  // 1, bracket notation with variable

// Add new properties with either dot or bracket notation
dog.enemies = ["Cats", "Other Dogs"];
dog['skin colour'] = "brown";

// Delete properties from a javascript object
delete dog.friends; // dog object will no longer have the friends property

// Test objects for properties
dog.hasOwnProperty("name");     // true
dog.hasOwnProperty("surname");  // false

// JavaScript Object Notation (JSON) is related ata interchange form used to store data.
var ourMusic = [
    {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [ 
        "CD", 
        "Cassette", 
        "LP"
      ],
      "gold": true
    }
  ];

  // Accessing Nested Objects
  // The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
  var ourStorage = {
    "desk": {
      "drawer": "stapler"
    },
    "cabinet": {
      "top drawer": { 
        "folder1": "a file",
        "folder2": "secrets"
      },
      "bottom drawer": "soda"
    }
  };
  ourStorage.cabinet["top drawer"].folder2;  // "secrets"
  ourStorage.desk.drawer; // "stapler"

  // Accessing Nested Arrays
  // Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.
  var ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  ourPets[0].names[1]; // "Fluffy"
  ourPets[1].names[0]; // "Spot"

// Loops
// While Loop
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

// For Loop
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Iterate through an array with For Loop
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Nesting For Loops
var arr = [
    [1,2], [3,4], [5,6]
  ];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }

// Do...While Loops
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);

// Recursion
// This loop can be written as a recursive function
function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
// This recursive function could be used to replace the loop in multiply above
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

// Math functions
Math.random(); // function generates a decimal number between 0 (inclusive) and 1 (exclusive) i.e. 0 - 0.99999999999 recurring
Math.floor(); // round to the nearest whole number
Math.floor(Math.random() * 20); // range of numbers between 0 and 19
Math.floor(Math.random() * (max - min + 1)) + min; // generates random whole numbers within a range i.e. between min - max
var a = parseInt("007"); // parses a string to an int. If cannot parse, then will return NaN
var b = parseInt("11", 2); // results to an integer 3 because second parameter is radix, which specifies the base. radix can be between 2-36

// Conditional (Ternary) operator
//condition ? statement-if-true : statement-if-false;
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater";
}

// Multiple Conditional (Ternary) operators
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
}

// Use Recursion to Create a Range of Numbers
// rangeOfNumbers(1, 5) should return [1, 2, 3, 4, 5].
// rangeOfNumbers(6, 9) should return [6, 7, 8, 9].
// rangeOfNumbers(4, 4) should return [4].
function rangeOfNumbers(startNum, endNum) {
    if (endNum <= startNum)
      return [startNum];
    else
    {
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      return countArray;
    }
  };
  