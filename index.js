// ========== Part 1: Stack Overflow ==========

// Declare a global counter variable.
/*let counter = 0;

// Create a simple function that increments the variable, and then calls itself recursively.
function increment() {
// Surround the initial function call in a try/catch block.
try {
    counter++;
    increment();
  } catch (e) {
// Within the catch, log the error and the value of the counter variable.
console.log(counter);
      console.error(e);
    }
  }
  
  increment();*/
// Got 9659.

 /*  ========== Part 1 wihout comments ==========
  let counter = 0;
  function increment() {
    try {
    counter++;
    increment();
} catch (e) {
    console.log(counter);
      console.error(e);
    }
  }
  
  increment(); */

// ========== Part 2: Trampolines ==========

// Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.

function flatten (arguments) {
    // Create a variable to hold the flattened array.
    const arr = [];
    // Write a for loop that iterates over the array.
    for (let i = 0; i < arguments.length; i++) {
        let item = arguments[i];
      // Write an if statement that checks if the current element is an array.
      if (Array.isArray(item)) {
        // If the current element is an array, recursively call the function on the current element.
        flatten(item);
      } else {
        // If the current element is not an array, push the current element into the flattened array.
        arr.push(item);
      }
    }
    // Return the flattened array.
    return arr;
}

/**
 * Step One: write the recursive function.
 * 
 * Here, we create a function that calculates
 * the factorial of a number, n. A factorial
 * is the product of all positive integers
 * less than or equal to the number, n.
 */
const factorial = (n) => {
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
  }

/**
 * If we were to call the above with a number as
 * high as, say, 50,000, it would result in a stack
 * overflow.
 */

// console.log(factorial(50000));


 /**
  * Step Two: modify the recursive function.
  * 
  * In order to trampoline the function, we must
  * return another function instead of calling
  * the recursive function itself. 
  * 
  * This prevents the function from being added 
  * directly to the call stack.
  */
  
  const facto = (n, a = 1) => {
    if (n === 0) return a;
    return () => facto(n - 1, n * a);
  }

// Once your recursive function is complete, trampoline it.

/**
  * Step Three: create a trampoline function.
  * 
  * This function takes another function and a list
  * of arguments, and uses a linear loop rather than
  * traditional recursion to handle the function calls.
  * 
  * This prevents the stack overflow, while still
  * maintaining the declarative approach provided by
  * recursive functions.
  */
  const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }

  console.log(trampoline(facto(50)));
  console.log(trampoline(facto(50000)));


// ========== Part 3: Deferred Execution ==========

// Create a simple HTML element to hold text. Cache this HTML element into a JavaScript variable.
// const prime_no = document.getElementById('text');

// Write a function that takes a parameter n and adds a list of all prime numbers between one and n to your HTML element.
// function prime(n) {
//   let primeNoArray = [];

// Once complete, use the alert() method to alert the user that the calculation is finished.

// check if a number is a prime number.

function prime(number) { 
  for (let i = 2; i <= Math.sqrt(number); i++) { 
      if (number % i === 0) { 
          return false
      } 
  } 
  return true; 
} 

console.log(prime(17));
console.log(prime(20));

function primeNumbers(n) { 
  const prime_no = document.getElementById('text');
  let primeNoArray = [];
  for (let i = 2; i <= n; i++) { 
      if (prime(i)) { 
        primeNoArray.push(i);
          console.log(i); 
      } 
  } 

  setTimeout(() => {
    prime_no.textContent = primeNoArray.join(', ')
    alert('Calculation is finished!')
  }, 0)

} 
primeNumbers(200);