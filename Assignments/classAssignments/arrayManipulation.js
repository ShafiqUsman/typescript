// Task 2: Array Manipulation Program
let fruits = ['apple', 'banana', 'cherry', 'mango'];
console.log(fruits);
fruits.push("Orange"); // append Orange in the end of the array
console.log(fruits);
fruits.unshift('Grapes'); // append Grapes in the start of the array 
console.log(fruits);
fruits.splice(3, 1, "Water Mellon"); // remove Cherry from index 3 and replace it with Water-Mellon
console.log(fruits);
export {};
