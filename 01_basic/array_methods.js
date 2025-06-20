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

array.reverse(); // reverse the array
console.log(array);
array.sort((a, b) => a - b); // sort the array in ascending order
console.log(array);
array.sort((a, b) => b - a); // sort the array in descending order
console.log(array);

let array2 = [11, 12, 13, 14, 15];
let mergedArray = [...array, ...array2]; // merge two arrays
console.log(mergedArray);

let array3 = [1, 2, 3, 4, 5];
let updateary = array3.map((num => {
    return num * 2; // multiply each element by 2
}))
console.log(updateary);

let array4 = [1, 2, 3, 4, 5];
let upary = array4.filter((num) => {
    return num % 2 === 0; // filter even numbers
});

console.log(upary);

let array5 = [1, 2, 3, 4, 5];
array5.forEach((num) => {
   return console.log(num * 5); // print each element multiplied by 2
});

