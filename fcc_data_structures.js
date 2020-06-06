// Removing consecutive items from an array using splice
let array = ['today', 'was', 'not', 'so', 'great'];
let newArray = array.splice(2, 2); // remove 2 elements beginning with the 3rd element i.e. newArray equals ['not', 'so']
// array now equals ['today', 'was', 'great']

// Add Items using splice
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14); // the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers); // returns [ 10, 11, 12, 13, 14, 15 ]

// Copy Arrays using slice
// slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3); // todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

// Check For The Presence of an Element With indexOf()
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); // returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1, the first index at which the element exists

// Check if Object has a Property
let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
users.hasOwnProperty('Alan');
'Alan' in users; // both return true and do the same thing

// Iterate through the keys of an object
for (let user in users) {
    console.log(user);
}
// Alan
// Jeff ... etc

// Generate an Array of All Object Keys with Object.keys()
Object.keys(obusersj); // returns [ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]