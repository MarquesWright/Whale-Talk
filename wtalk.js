// a variable containing phrase to be translated
const input = "turpentine and turtles";

// an array to hold vowels spoken by a whale
const vowels = ["a", "e", "i", "o", "u"];

// an empty array for storing the vowels from the input string
const resultArray = [];

// a for loop to iterate through "vowels" array
for (let i = 0; i < input.length; i++) {
  // if-else statement to add an extra 'e' or 'u' to the whale language
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  } else if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  // nested loop to compare letters in "input" array to "vowel" array
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) { 
      resultArray.push(input[i]);
    }
  }
}

// variable to join array into a single, capitalized string
let resultString = resultArray.join('').toUpperCase();

// display the result array
console.log(resultString);

