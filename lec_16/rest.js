// Prior to the rest operator, extracting specific elements from an array while preserving the rest required manual manipulation or looping.

// Consider a scenario where we want to extract the first element from an array and collect the rest into a separate array. Before the introduction of the rest operator, achieving this task involved more verbose code:

const arr = [1, 2, 3, 4, 5];
console.log(typeof arr  + " line 6");  

const first = arr[0]; // Extracting the first element
const r = arr.slice(1); // Collecting the rest of the elements
// const rest = arr.slice(1); // Collecting the rest of the elements

console.log("First element:", first); // 1
console.log("Rest of the elements:", r); // [2, 3, 4, 5]
console.log(...arr,...r); //[1,2,3,4,5]
console.log(typeof r + " line 14");

const combarr = [first, ...r]
// console.log(combarr);


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// console.log("Sum:", sum(1, 2, 3, 4, 5,6)); // Sum: 15
// console.log("Sum:", sum(10, 20)); // Sum: 30


