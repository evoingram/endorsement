// Given a non-negative integer num represented as a string, remove k digits from the number 
    // so that the new number is the smallest possible.

// NOTE:  The length of num is less than 10002 and will be ≥ k.
// NOTE:  The given num does not contain any leading zero.

/*
    Example 1:
    Input: num = "1432219", k = 3   |   Output: "1219"
    Explanation: Remove the three digits 4, 3, and 2 
        to form the new number 1219 which is the smallest.
*/
/*
    Example 2:
    Input: num = "10200", k = 1   |   Output: "200"
    Explanation: Remove the leading 1 and the number is 200. 
    Note that the output must not contain leading zeroes.
*/
/*
    Example 3:
    Input: num = "10", k = 2   |   Output: "0"
    Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/

// time complexity:  O(n^2) (2 nested loops)
// space complexity:  O(1)

removeKdigits = (number, k) => {
    if(k === 0) return number;
    if(number.length === k) return '0';
    
    let stack = [];

    for(let x = 0; x < number.length; x++){
        let currentCharacter = number.charAt(x);
        while(stack.length && k > 0 && stack[stack.length-1] > currentCharacter){
            stack.pop();
            k--;
        }
        stack.push(currentCharacter);
    }
    
    for(let y = 0; y < k; y++){
        stack.pop();
    }
    while(stack.length && stack[0] === '0'){
        stack.shift()
    }
    return stack.length ? stack.join('') : '0'
};