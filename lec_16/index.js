// console.log("hello");
const arr = [1, 2, 3];
//console.log("Original array:", arr); // [1, 2, 3]

//''''''''''''''''''''''''''''''''''''''''''
// Before the Spread Operator
//Traditionally, if we wanted to create a new array with existing 
//elements appended to it, we'd resort to cumbersome approaches 
//like this:
//''''''''''''''''''''''''''''''''''''''''''''''''

const newArr = [ 5, arr[0],  6, arr[1], arr[2]];
//console.log("New array (before spread operator):", newArr); // [5, 1, 6, 2, 3]


//'''''''''''''''''''''''''''''''''''''''''''''''''''
// After the Spread Operator
// Enter the spread operator, offering a concise and intuitive alternative:

const newArrs = [ 5, 6,...arr]; 
//console.log("New array (after spread operator):", newArrs); // [5, 6, 1, 2, 3]


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined array 27:", combined ); // [1, 2, 3, 4, 5, 6]



//Passing Arguments to Functions
// The spread operator simplifies the process of passing variable-length arguments to functions. Instead of specifying each argument individually, we can use the spread operator to unpack an array of values into function parameters.

function sum(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
const result = sum(...nums);
// console.log("Result of sum:", result); // 6


