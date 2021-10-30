/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the 
    square brackets is being repeated exactly k times. 
    Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; 
    No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and 
    that digits are only for those repeat numbers, k. 
    For example, there won't be input like 3a or 2[4].

Example 1:
    Input: s = "3[a]2[bc]"
    Output: "aaabcbc"

Example 2:
    Input: s = "3[a2[c]]"
    Output: "accaccacc"

Example 3:
    Input: s = "2[abc]3[cd]ef"
    Output: "abcabccdcdcdef"

Example 4:
    Input: s = "abc3[cd]xyz"
    Output: "abccdcdcdxyz"

Constraints:
    1 <= s.length <= 30
    s consists of lowercase English letters, digits, and square brackets '[]'.
    s is guaranteed to be a valid input.
    All the integers in s are in the range [1, 300].
*/

let decodeString = (s) => {
    // initialize decodedString
    let decodedString = "", currentSubstring = "";
    let mainString = s;
    let currentLetter, closingBracketIndex, openingBracketIndex, currentNumber;
    let x = 0;
    // loop through input string
    while (mainString != "") {
        console.log(`mainString 1 = ${mainString}`);
    // for (let x = 0; x < mainString.length; x++) {
        currentLetter = mainString[x];
        console.log(`currentLetter = ${currentLetter}`);
        // if current string[index] value == letter:
        if (currentLetter.match(/[a-z]/i)) {
            // add to decodedString
            // delete that letter from main string
            // go to next string[index]
            decodedString += currentLetter;
            console.log(`decodedString after adding one letter = ${decodedString}`);
            mainString = mainString.substring(1, mainString.length)
            console.log(`mainString if after adding one letter = ${mainString}`);
        }
        // if it's a number:
        else if (currentLetter.match(/^[0-9]+$/)) {
            // grab substring from number to ]
            // save number separately
            currentNumber = Number(currentLetter)
            openingBracketIndex = mainString.indexOf("[");
            closingBracketIndex = mainString.indexOf("]");
            // save substring within brackets [] separately
            currentSubstring = mainString.substring(openingBracketIndex+1, closingBracketIndex);
            console.log(`currentSubstring = ${currentSubstring}`);
            // for range 1 to number 
            for (let y = 0; y < currentNumber; y++) {
                // add previous substring w/i brackets to decodedString
                decodedString += currentSubstring;
            }
            console.log(`decodedString after loop = ${decodedString}`);
            // delete that portion (from number to ]) from main string
            console.log(`mainString else if before = ${mainString}`);
            mainString = mainString.substring(0, x) + mainString.substring(closingBracketIndex+1, mainString.length);
            console.log(`mainString else if after = ${mainString}`);
        }
        // go to next string[index]
        // return decodedString when main string = ""
        if (mainString == "") return decodedString
    }
};

// stack approach
let decodeString1 = (encodedString) => {
    const stack = [];
    // for each letter of string
    for (let letter of encodedString) {
        // if it's not a closing bracket, put it on stack
        if (letter != "]") stack.push(letter);
        else {
            // As we know that stack follows the Last In First Out (LIFO) Principle, 
                // the top of the stack would have the data we must decode.
            let substring = "";
            while (stack[stack.length - 1] != "[") substring = stack.pop() + substring;
            stack.pop();
            let numberToRepeatSubstring = "";
            while (stack.length && /^\d+$/.test(stack[stack.length - 1])) numberToRepeatSubstring = stack.pop() + numberToRepeatSubstring;

            stack.push(substring.repeat(Number(numberToRepeatSubstring)))  
        }
    }
    return stack.join("");
};

console.log(decodeString1("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString1("3[a2[c]]")); // "accaccacc"
console.log(decodeString1("2[abc]3[cd]ef")); // "abcabccdcdcdef"
console.log(decodeString1("abc3[cd]xyz")); // "abccdcdcdxyz"
// console.log(decodeString()); 
