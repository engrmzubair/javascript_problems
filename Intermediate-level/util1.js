// 1. Problem: Find the Average
// Description: Write a function that takes an array of numbers and returns the average.
// Sample Input: [1, 2, 3, 4, 5]
// Sample Output: 3

module.exports.findAverage = (numberArray) => {
    const sum = numberArray.reduce((a, c) => a + c)
    const average = sum / numberArray.length
    return average
}

// 2. Problem: Capitalize Words
// Description: Write a function that takes a string and capitalizes the first letter of each word.
// Sample Input: "hello world"
// Sample Output: "Hello World"

module.exports.capitalizedFirstLetter = (string) => {

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

module.exports.isPalindrome = (string) => {

    const reverseString = string.split("").reverse().join('')

    return reverseString === string

}

// Problem: Unique Elements
// Description: Write a function that takes an array and returns a new array with only the unique elements.
// Sample Input: [1, 2, 3, 2, 4, 1, 5]
// Sample Output: [1, 2, 3, 4, 5]

module.exports.findUniqueElements = (array) => {

    // const unique = new Set(array);
    // return [...unique]

    let unique = [];

    array.forEach((e) => {

        const isInclude = unique.includes(e);
        if (!isInclude)
            unique.push(e)

    })

    return unique


}










