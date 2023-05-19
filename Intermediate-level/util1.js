// 1. Problem: Find the Average
// Description: Write a function that takes an array of numbers and returns the average.
// Sample Input: [1, 2, 3, 4, 5]
// Sample Output: 3

const findAverage = (numberArray) => {
    const sum = numberArray.reduce((a, c) => a + c)
    const average = sum / numberArray.length
    return average
}

// 2. Problem: Capitalize Words
// Description: Write a function that takes a string and capitalizes the first letter of each word.
// Sample Input: "hello world"
// Sample Output: "Hello World"

const capitalizedFirstLetter = (string) => {

    const capitalizeString = string
        .split(' ')
        .map((e, i) => e[0].toUpperCase() + e.substring(1)
        ).join(" ");

    return capitalizeString
}


// Problem: Palindrome Checker
// Description: Write a function that checks if a given string is a palindrome (reads the same forward and backward).
// Sample Input: "racecar"
// Sample Output: true

const palindromeChecker = (string) => {

    const reverseString = string.split("").reverse().join('')

    return reverseString === string

}













module.exports = { findAverage, capitalizedFirstLetter, palindromeChecker };