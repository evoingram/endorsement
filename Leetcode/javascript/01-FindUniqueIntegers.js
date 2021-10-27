// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:  Input: n = 5   |   Output: [-7,-1,1,3,4]
    // Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:  Input: n = 3   |   Output: [-1,0,1]
// Example 3:  Input: n = 1   |   Output: [0]

// Constraints:  1 <= n <= 1000

// time complexity:  O(1 or n)
// space complexity:  O(1)


sumZero = (n) => {
    
    let finalArray = [];
    let negative = -1, positive = 1;

    while (n > 1) {
        finalArray.push(negative--);
        finalArray.push(positive++)
        n -= 2
    }

    if (n % 2 === 1) finalArray.push(0)

    return finalArray
}

console.log(sumZero(5));
console.log(sumZero(3));
console.log(sumZero(1));