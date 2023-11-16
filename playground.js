//Write a JavaScript function to filter and return even numbers from a given list
//Create a list of numbers from 1 to 10
//Filter the list to only include even numbers
//Print the filtered list to the console

function filterEvenNumbers(numbers) {
    return numbers.filter(function (number) {
      return number % 2 === 0;
    });
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filteredNumbers = filterEvenNumbers(numbers);
  console.log(filteredNumbers);