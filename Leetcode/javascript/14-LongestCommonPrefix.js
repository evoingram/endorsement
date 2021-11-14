/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"

Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.

Constraints:
    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lower-case English letters.
*/

// use stack or queue to solve this, or a heap


let longestCommonPrefix = (strs) => {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((previous, next) => {
        let x = 0;
        console.log(`previous[x] = ${previous}`);
        console.log(`next[x] = ${next}`);
        while (previous[x] && next[x] && previous[x] === next[x]) x++;
        return previous.slice(0, x);
    });
};
