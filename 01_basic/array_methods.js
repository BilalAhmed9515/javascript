// Array methods in JavaScript
// Array methods are built-in functions that allow you to manipulate arrays in JavaScript. Here are some common array methods:

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);
console.log(array.length); // length of array

array.push(11); // add element at the end of array
console.log(array);
array.unshift(0); // add element at the beginning of array
console.log(array);
array.pop(); // remove last element of array
console.log(array);
array.shift(); // remove first element of array
console.log(array);
array.splice(2, 4); // remove 3 elements from index 2 including index 2
console.log(array);
array.splice(2, 0, 3, 4, 5); // add 3 elements at index 2
console.log(array);
