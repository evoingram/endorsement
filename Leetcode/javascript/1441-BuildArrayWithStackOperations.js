/*
Given an array target and an integer n, in each iteration, 
    you will read a number from  list = {1,2,3..., n}.

Build the target array using the following operations:
    Push: Read a new element from the beginning list, and push it in the array.
    Pop: delete the last element of the array.

If the target array is already built, stop reading more elements.
Return the operations to build the target array. 
You are guaranteed that the answer is unique.

Example 1:
    Input: target = [1,3], n = 3
    Output: ["Push","Push","Pop","Push"]
    Explanation: 
        Read number 1 and automatically push in the array -> [1]
        Read number 2 and automatically push in the array then Pop it -> [1]
        Read number 3 and automatically push in the array -> [1,3]

Example 2:
    Input: target = [1,2,3], n = 3
    Output: ["Push","Push","Push"]

Example 3:
    Input: target = [1,2], n = 4
    Output: ["Push","Push"]
    Explanation: You only need to read the first 2 numbers and stop.

Example 4:
    Input: target = [2,3,4], n = 4
    Output: ["Push","Pop","Push","Push","Push"] 

Constraints:
    1 <= target.length <= 100
    1 <= target[i] <= n
    1 <= n <= 100
    target is strictly increasing.
*/

let buildArray = (target, n) => {
    // loop through numbers 1 to n
        // track current index of target
        // if number matches target[currentIndex], push
        // if it doesn't, push then pop it
    let currentTargetIndex = 0;
    let commands = [];
    if (target.length == 1) return ["Push"];
    if (target.length == 2 && target[1] === target[0]+1) return ["Push", "Push"];
    for (let x = 1; x <= n; x++) {
        if (target[currentTargetIndex] == x) {
            commands.push("Push")
            currentTargetIndex += 1;
        }
        else {
            commands.push("Push");
            commands.push("Pop");
        }
        if (currentTargetIndex >= target.length) break;
    }
    return commands;
};

console.log(buildArray([1,3], 3)); // ["Push","Push","Pop","Push"]
console.log(buildArray([1,2,3], 3)); // [ 'Push', 'Push', 'Push' ]
console.log(buildArray([1,2], 4)); // [ 'Push', 'Push' ]
console.log(buildArray([2,3,4], 4)); // [ 'Push', 'Pop', 'Push', 'Push', 'Push' ]
console.log(buildArray([1,2,3,4,5], 6)); // ["Push","Push","Push","Push","Push"]
// console.log(buildArray());