/*
Given a sorted array of distinct integers and a target value, return 
    the index if the target is found. 
    If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
    Input: nums = [1,3,5,6], target = 5
    Output: 2

Example 2:
    Input: nums = [1,3,5,6], target = 2
    Output: 1

Example 3:
    Input: nums = [1,3,5,6], target = 7
    Output: 4

Example 4:
    Input: nums = [1,3,5,6], target = 0
    Output: 0

Example 5:
    Input: nums = [1], target = 0
    Output: 0

Constraints:
    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums contains distinct values sorted in ascending order.
    -104 <= target <= 104
*/

let searchInsert = (nums, target) => {
    return binarySearch(nums, target, 0, nums.length - 1);
}

let binarySearch = (nums, target, start, end) => {
    // use binary search
    // if target > mid point, binary search second half
    // if target = mid point, return midpoint index
    // if target < mid point binary search first half
    // repeat until you find the spot or the number

    if (start > end) return start;

    let mid = Math.floor((start + end) / 2);
    
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) return binarySearch(nums, target, start, mid - 1);
    if (nums[mid] < target) return binarySearch(nums, target, mid + 1, end);
};

console.log(searchInsert(nums = [1,3,5,6], target = 5));
console.log(searchInsert(nums = [1,3,5,6], target = 2));
console.log(searchInsert(nums = [1,3,5,6], target = 7));
console.log(searchInsert(nums = [1,3,5,6], target = 0));
console.log(searchInsert(nums = [1], target = 0));
console.log(searchInsert(nums = [1, 3], target = 2));
console.log(searchInsert(nums = [1,2,3,4,5,10], target = 2));
// console.log(searchInsert());