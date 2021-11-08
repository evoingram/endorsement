/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. 
    For example, 121 is palindrome while 123 is not.

Example 1:
    Input: x = 121
    Output: true

Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:
    Input: x = -101
    Output: false

Constraints:
    -231 <= x <= 231 - 1
*/

// check first and last are the same
    // go inwards until 0 or 1 char left
    // if all matching except for possible middle char, return true
    // else return false

let isPalindrome = (numberToCheck) => {
    let toCheck = numberToCheck.toString(), letter1, letter2, lastIndex;
    if (toCheck.length === 1) return true;
    let x = 0;
    while (toCheck !== '') {
        console.log(`toCheck at top of loop is '${toCheck}'`);
        if (toCheck[x] === '-') {
            console.log(`first letter is a -`);
            letter1 = toCheck[x] + toCheck[x + 1];
            x = x + 1;
            toCheck = toCheck.slice(2);
        }
        else {
            letter1 = toCheck[x];
            console.log(`first letter is '${letter1}', x = ${x}`);
            toCheck = toCheck.slice(1);
        }
        console.log(`toCheck after first cut is '${toCheck}'`);
        lastIndex = toCheck.length - 1;
        if (toCheck[lastIndex-1] === '-') {
            console.log(`second to last letter is a -`);
            letter2  = toCheck[lastIndex-1] + toCheck[lastIndex];
            lastIndex = lastIndex - 1;
            toCheck = toCheck.slice(0, -2);
        }
        else {
            letter2 = toCheck[lastIndex];
            toCheck = toCheck.slice(0, -1);
        }
        console.log(`toCheck after second cut is '${toCheck}'`);
        console.log(`toCheck.length is '${toCheck.length}'`);
        console.log(`first letter is '${letter1}'`);
        console.log(`last letter is '${letter2}'`);
        console.log(`Does letter1 === letter2?  ${letter1 === letter2}`);
        if (letter1 != letter2) return false;
        console.log(`toCheck.length (post letter check) is '${toCheck.length}'`);
        console.log(`toCheck (post letter check) is '${toCheck}'`);
        if (toCheck.length === 0 || toCheck.length === 1) return true;
        x = 0;
        lastIndex--;
        console.log(`================================`);
    }
    return true;
};

console.log(`------`);
console.log(`true = ${isPalindrome(121)}`);
console.log(`------`);
console.log(`false = ${isPalindrome(-121)}`);
console.log(`------`);
console.log(`false = ${isPalindrome(10)}`);
console.log(`------`);
console.log(`false = ${isPalindrome(-101)}`);
console.log(`------`);
console.log(`false = ${isPalindrome(-1)}`);
console.log(`------`);
console.log(`true = ${isPalindrome(0)}`);
console.log(`------`);
console.log(`true = ${isPalindrome(1000000001)}`);
console.log(`------`); 