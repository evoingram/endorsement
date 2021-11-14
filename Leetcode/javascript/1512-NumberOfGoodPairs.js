/*
Given an array of integers nums, return the number of good pairs.
A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

Example 1:
    Input: nums = [1,2,3,1,1,3]
    Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
    Input: nums = [1,1,1,1]
    Output: 6
    Explanation: Each pair in the array are good.

Example 3:
    Input: nums = [1,2,3]
    Output: 0

Constraints:
    1 <= nums.length <= 100
    1 <= nums[i] <= 100

*/

let numIdenticalPairs = (nums) => {
    let pairTracking = {
        goodPairs: 0,
        badPairs: 0
    };
    let firstHalf, secondHalf;
    console.log(`---------------`);
    console.log(`nums = ${nums}`);
    console.log(`---------------`);
    for(let x = 0; x < nums.length - 1; x++) {
        firstHalf = nums[x];
        console.log(`firstHalf = ${firstHalf} || x = ${x}`);
        console.log(`---------------`);
        for (let y = 0; y < nums.length; y++) {
            secondHalf = nums[y];
            console.log(`secondHalf = ${secondHalf} || y = ${y}`);
            if (x < y && firstHalf === secondHalf) {
                console.log(`good pair, x y = ${x} ${y}`);
                pairTracking.goodPairs += 1;
            }
            else {
                console.log(`bad pair, x y = ${x} ${y}, halves = ${firstHalf} ${secondHalf}`);
                pairTracking.badPairs += 1;
            }
        }
        console.log(`---------------`);
    }
    return pairTracking.goodPairs;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));
// console.log(numIdenticalPairs([1,2,3]));
// console.log(numIdenticalPairs());