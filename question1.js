// Question 1: Normalize an Input String (Easy)
// Problem Statement
// Write a program that normalizes a given input string. Normalization includes the
// following steps:
// 1. Remove any extra spaces from the beginning and end of the string.
// 2. Remove any special characters and punctuation, leaving only
// alphanumeric characters and spaces.
// 3. Replace multiple spaces between words with a single space.
// 4. Convert the cleaned string to camel case (i.e., the first letter of each word
// is capitalized, and all other letters are in lowercase).
// Input
// A single string that may contain uppercase letters, extra spaces, and special
// characters.
// Output
// A single normalized string in camel case.

function normalizeString (input) {
    let trimmed = input.trim();
    // console.log(trimmed, 'trimmed');
    
    let alphaNumeric = trimmed.replace(/[^a-zA-Z0-9\s]/g, '');
    // console.log(alphaNumeric, 'alphaNumeric');
    
    let clearSpace = alphaNumeric.replace(/\s+/g, ' ');
    // console.log(clearSpace, 'clearSpace');

    let camelCase = clearSpace
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return camelCase;
}

let input = " Hello!   World@   This is  a Test!. ";
let output = normalizeString(input);
console.log(output);