const {
    findAverage,
    capitalizedFirstLetter,
    isPalindrome,
    findUniqueElements,

} = require("./util1")

// intermediate-level JavaScript problems

// Problem: Find the Average
// Description: Write a function that takes an array of numbers and returns the average.
// Sample Input: [1, 2, 3, 4, 5]
// Sample Output: 3

console.log("Average => ", findAverage([1, 2, 3, 4, 5]))


// Problem: Capitalize Words
// Description: Write a function that takes a string and capitalizes the first letter of each word.
// Sample Input: "hello world"
// Sample Output: "Hello World"

console.log("capitalize => ", capitalizedFirstLetter("hello word"))

// Problem: Palindrome Checker
// Description: Write a function that checks if a given string is a palindrome (reads the same forward and backward).
// Sample Input: "racecar"
// Sample Output: true

console.log("palindrome => ", isPalindrome("racecar"))

// Problem: Unique Elements
// Description: Write a function that takes an array and returns a new array with only the unique elements.
// Sample Input: [1, 2, 3, 2, 4, 1, 5]
// Sample Output: [1, 2, 3, 4, 5]

console.log("unique => ", findUniqueElements([1, 2, 3, 2, 4, 1, 5]))

// Problem: Fibonacci Sequence
// Description: Write a function that generates the Fibonacci sequence up to a given number of terms.
// Sample Input: 8
// Sample Output: [0, 1, 1, 2, 3, 5, 8, 13]

// Problem: Title Case
// Description: Write a function that takes a string and converts it to title case (first letter of each word capitalized, rest lowercase).
// Sample Input: "the quick brown fox"
// Sample Output: "The Quick Brown Fox"

// Problem: Object Keys and Values
// Description: Write a function that takes an object and returns an array of its keys and values as subarrays.
// Sample Input: {name: "John", age: 25, city: "New York"}
// Sample Output: [["name", "John"], ["age", 25], ["city", "New York"]]

// Problem: Array Chunking
// Description: Write a function that splits an array into smaller arrays of a specified size.
// Sample Input: [1, 2, 3, 4, 5], 2
// Sample Output: [[1, 2], [3, 4], [5]]

// Problem: Prime Number Checker
// Description: Write a function that checks if a given number is prime (only divisible by 1 and itself).
// Sample Input: 7
// Sample Output: true

// Problem: Flatten Array
// Description: Write a function that flattens a nested array into a single-level array.
// Sample Input: [1, [2, [3, 4], 5], 6]
// Sample Output: [1, 2, 3, 4, 5, 6]
