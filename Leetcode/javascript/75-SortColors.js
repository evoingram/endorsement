
// Given an array nums with n objects colored red, white, or blue, 
    // sort them in-place so that objects of the same color are adjacent, 
    // with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color 
    // red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 
/*
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

Example 3:
Input: nums = [0]
Output: [0]

Example 4:
Input: nums = [1]
Output: [1]
*/

/*
    Constraints:

        n == nums.length
        1 <= n <= 300
        nums[i] is 0, 1, or 2.
*/
 

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?

var sortColors = (nums) => {
    if (nums.length == 0) return [];
    else if (nums.length == 1) return nums;
    // insertion sort should solve this
    else {
        let arrayLength = nums.length;
        let currentPosition, currentItem;
        // loop from 1 since first element is sorted through end of array
        for (let index = 1; index < arrayLength; index++) {
            // set current item as value in array[index]
            currentItem = nums[index]
            // set current position as current index
            currentPosition = index
            // while current position is at least 1 and
                // previous item's value is larger than current item
            while (currentPosition > 0 && nums[currentPosition - 1] > currentItem) {
                // set value at current position as previous position
                nums[currentPosition] = nums[currentPosition - 1]
                // set current position as previous position
                currentPosition = currentPosition - 1 
            }
            // set value of current position as current item
            nums[currentPosition] = currentItem
        }
        return nums;
    }
};

console.log(sortColors([2,0,2,1,1,0]));
console.log(sortColors([2,0,1]));
console.log(sortColors([0]));
console.log(sortColors([1]));
console.log(sortColors([]));
