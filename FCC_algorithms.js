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

// Pig Latin
function translatePigLatin(str) {
  let retStr = "";
  let regex = /^[AEIOUaeiou]/;
  let firstRegex = /[AEIOUaeiou]/;
  if (regex.test(str))
  {
    retStr = `${str}way`;
  }
  else
  {
    let firstLetter = str; 
    let lastLetters = "";
    if (firstRegex.test(str))
    {
      let index = str.match(firstRegex).index;
      firstLetter = str.substring(0,index);
      lastLetters = str.slice(index);
    }
    retStr = `${lastLetters}${firstLetter}ay`;
  }
  return retStr;
}

translatePigLatin("glove");

/*Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"*/
function myReplace(str, before, after) {
  let regex = /^[A-Z]/;
  if (regex.test(before) !== regex.test(after))
  {
    let afterStart = after[0];
    let afterEnd = after.slice(1);

    if (regex.test(before))
      afterStart = afterStart.toUpperCase();
    else
      afterStart = afterStart.toLowerCase();
    
    after = `${afterStart}${afterEnd}`;
  }
  let retStr = str.replace(before, after);
  return retStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/*DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]*/
function pairElement(str) {
  let retArr = [];
  for(let i = 0; i < str.length; i++)
  {
    if (str[i] == "A")
      retArr.push(["A","T"]);
    else if (str[i] == "T")
      retArr.push(["T","A"]);
    else if (str[i] == "C")
      retArr.push(["C","G"]);
    else if (str[i] == "G")
      retArr.push(["G","C"]);
  }
  return retArr;
}

pairElement("GCG");

/*Missing letters
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.*/
function fearNotLetter(str) {
  let entireAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let index = entireAlphabet.indexOf(str[0]);
  let alphabet = entireAlphabet.slice(index);
  for(let i = 0; i < alphabet.length; i++)
  {
    if (alphabet[i] !== str[i])
      return alphabet[i];
  }
}

fearNotLetter("abce"); // should return 'd'
fearNotLetter("abcdefghijklmnopqrstuvwxyz") // should return undefined.

/*Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.*/
function uniteUnique(...arr) {
  let retArr = [];
  for (let i = 0; i < arr.length; i++)
  {
    let subArray = arr[i];
    for (let j = 0; j < subArray.length; j++)
    {
      let value = subArray[j];
      if (!retArr.includes(value))
      {
        retArr.push(value);
      }
    }
  }
  console.log(retArr);
  return retArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. 
The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.*/
function sumFibs(num) {
  let fibArr = [1,1];
  let retNum = 0;
  for (let i = 1; fibArr[i] < num; i++)
  {
    let sum = fibArr[i-1] + fibArr[i];
    fibArr.push(sum);
    if (sum == 2 || (sum%2 != 0 && sum <= num))
    {
      retNum += sum;
      console.log(`${sum} Running Total: ${retNum}`);
    }
  }
  return retNum;
}

sumFibs(75025);

/*Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.*/
function IsPrime (num) {
  for (let i = 2; i <= num; i++)
  {
    if (num != i && num%i == 0)
      return false;
  }
  return true;
}

function sumPrimes(num) {
  let retNum = 0;
  for (let i = 2; i <= num; i++)
  {
    if (IsPrime(i))
      retNum += i;
  }
  return retNum;
}

console.log(sumPrimes(977)); // should return 73156.

/*Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.*/
const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // Initially the solution is assigned to the highest value of the array
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    // Each time the solution checks (i.e. sol%i===0) it won't be necessary
    // to increment 'max' to our solution and restart the loop
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

// test here
smallestCommons([1, 5]);

/*Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.*/
function dropElements(arr, func) {
  let retArr = [];
  let ok = false;
  for (let num of arr)
  {
    if (ok || func(num))
    {
      if (func(num))
        ok = true;
        
      retArr.push(num);
      continue;
    }
  }
  console.log(retArr);
  return retArr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});

/*Steamroller
Flatten a nested array. You must account for varying levels of nesting.*/
function steamrollArray(arr) {
  let retArr = [];
  for (let val of arr)
  {
    if (Array.isArray(val))
    {
      for (let i = 0; i < val.length; i++)
      {
        let retVal = retValue(val, i);
        retArr.push(retVal);
      }
    }
    else
    {
      retArr.push(val);
    }
  }
  return retArr;
}

function retValue(arr, index)
{
  if (Array.isArray(arr))
    return retValue(arr[index], 0);
  else
    return arr;
}

steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);

/*Binary Agents
Return an English translated sentence of the passed binary string.
The binary string will be space separated.*/
function binaryAgent(str) {
  let array = str.split(" ");
  let retValue = array.map(code => String.fromCharCode(parseInt(code, 2))).join("");
  return retValue;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/*Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. 
Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
Remember, you can access object properties through either dot notation or [] notation.*/
function truthCheck(collection, pre) {
  for (let obj of collection)
  {
    if (!obj.hasOwnProperty(pre) || !obj[pre])
      return false;
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");

/*Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.*/
function addTogether(...args) {
  if (args.length == 2)
  {
    let val1 = args[0];
    let val2 = args[1];
    
    if (typeof(val1) != "number" || typeof(val2) != "number")
      return;
    
    return val1 + val2;
  }
  else if (args.length == 1)
  {
    if (typeof(args[0]) != "number")
      return;

    return function sumTwo(y) {
      if (typeof(y)!= "number")
        return;

      return args[0] + y;
    }
  }
  return false;
}

addTogether(2)([3]);
addTogether(2,3);
addTogether(5)(7);
addTogether(2, "3")

// Palindrome Checker
function palindrome(str) {
  let regex = /\W+/g;
  let newStr = str.replace(regex, '')
                  .replace('_','')
                  .toLowerCase();
  let reverse = "";
  for (let i = newStr.length - 1; i >= 0; i--)
    reverse += newStr[i];
  return newStr == reverse;
}

palindrome("A man, a plan, a canal. Panama");
palindrome("eye**&*");
palindrome("0_0 (: /-\ :) 0-0");

/*Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/
function rot13(str) {
  let retValue = '';
  for (let s of str)
    retValue += decodeROT13(s);
  console.log(retValue);
  return retValue;
}

function decodeROT13(char)
{
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let regex = /[A-Z]/;
  if (regex.test(char))
  {
    let index = (alphabet.indexOf(char) + 13) % alphabet.length;
    return alphabet[index];
  }
  else
    return char;
}

rot13("SERR PBQR PNZC");