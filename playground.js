// Create a sample list of numbers
// Create a list of even numbers from the sample list
// return the list of even numbers
// Example: [1, 2, 3, 4, 5, 6, 7, 8, 9] => [2, 4, 6, 8]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

