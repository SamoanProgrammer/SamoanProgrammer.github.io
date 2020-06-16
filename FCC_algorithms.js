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

