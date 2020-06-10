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
  