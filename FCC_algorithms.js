// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.
function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++)
    {
      if ( func(arr[i]) )
        return arr[i];
    }
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  
  // Return difference between two arrays
  function diffArray(arr1, arr2) {
    let newArr = [];
    let checkArray = function(a1, a2)
    {
        let newArr = [];
        for (let i = 0; i < a1.length; i++)
        {
          if (!a2.includes(a1[i]))
            newArr.push(a1[i]);
        }
        return newArr;
    }
    newArr = checkArray(arr1, arr2).concat(checkArray(arr2, arr1));
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  
  // Seek and Destroy
  // You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
  // Remove all elements from the initial array that are of the same value as these arguments.
  function destroyer(...arr) { // Rest parameter ...arr
    let [initial, ...args] = arr;
    let retArr = [];
    for (let i = 0; i < initial.length; i++)
    {
      if (!args.includes(initial[i]))
        retArr.push(initial[i]);
    }
    console.log(retArr);
    return retArr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
  // Return all objects that have a matching name and value pairs
  function whatIsInAName(collection, source) {
    var arr = [];
  
    let doesntExist = false;
    for (let i = 0; i < collection.length; i++)
    {
      let collectObj = collection[i];
      doesntExist = false;
      for (let s in source)
      {
        if (source[s] !== collectObj[s])
        {
          doesntExist = true;
          break;
        }
      }
      
      if (doesntExist)
        continue;
      else
        arr.push(collectObj);
    }
  
    return arr;
  }
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  // You can re-write my answer above like so:
  function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    var srcKeys = Object.keys(source);
  
    return collection.filter(function(obj) {
      return srcKeys.every(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });
  }
// Code Explanation
// We filter through the collection using .filter().
// Next, we return a Boolean value for the .filter() method.
// Finally, we reduce to Boolean value to be returned for the .every() method.

// Spinal Tap CasePassed
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;
  console.log(str);
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  console.log(str);
  // Replace space and underscore with -
  let retStr = str.replace(regex, "-").toLowerCase();
  console.log(retStr);
  return retStr;
}

// test here
spinalCase("This Is Spinal Tap");
spinalCase("Teletubbies say Eh-oh");