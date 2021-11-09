/*

Given an integer num, return a string of its base 7 representation.

Example 1:
    Input: num = 100
    Output: "202"

Example 2:
    Input: num = -7
    Output: "-10"

Constraints:
    -107 <= num <= 107

*/


let convertToBase7 = (num) => {
    let sign = num < 0 && '-' || '';
    num = num * (sign + 1);
    let result = '';
    while (num) {
        result = num % 7 + result;
        num = num / 7 ^ 0;
    };
    return sign + result || "0";
};