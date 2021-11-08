/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes 
    in the sequence has an edge connecting them. 
A node can only appear in the sequence at most once. 
Note that the path does not need to pass through the root.
The path sum of a path is the sum of the node's values in the path.
Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:
    Input: root = [1,2,3]
    Output: 6
    Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2:
    Input: root = [-10,9,20,null,null,15,7]
    Output: 42
    Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


// when traversing, track sum of each path
// return max of all the sums

let maxPathSum = (root) => {
    let maxSum = -Infinity;

    const findSums = (node) => {
        if (!node) return 0;
        let left = findSums(node.left),
            right = findSums(node.right),
            allSum = left + right + node.val,
            leftNodeSum = left + node.val,
            rightNodeSum = right + node.val;

        maxSum = Math.max(node.val, maxSum, leftNodeSum, rightNodeSum, allSum);

        return Math.max(leftNodeSum, rightNodeSum, node.val);
    }

    findSums(root);
    return maxSum;
}
TreeNode = (val, left, right) => {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
let maxPathSum = (root) => {
    let maxSum = -Infinity;

    const findSums = (node) => {
        if (!node) return 0;

        console.log(`------------------`);
        let left = findSums(node.left),
            right = findSums(node.right),
            allSum = left + right + node.val,
            leftNodeSum = left + node.val,
            rightNodeSum = right + node.val;

        console.log(`left = ${left}`);
        console.log(`right = ${right}`);
        console.log(`------------------`);
        console.log(`maxSum = ${maxSum}`);
        console.log(`node.val = ${node.val}`);
        console.log(`allSum = ${allSum}`);
        console.log(`leftNodeSum = ${leftNodeSum}`);
        console.log(`rightNodeSum = ${rightNodeSum}`);
        console.log(`-----------------`);

        // max of all possible combinations
        maxSum = Math.max(maxSum, node.val, allSum, leftNodeSum, rightNodeSum);

        // return max path, either node.val, left + node.val, or right + node.val
        return Math.max(leftNodeSum, rightNodeSum, node.val);
    };
    findSums(root);
    console.log(`maxSum = ${maxSum}`);
    console.log(`-----------------------------------------`);
    return maxSum;
};
