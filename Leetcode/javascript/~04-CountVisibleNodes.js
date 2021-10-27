// Count Visible Nodes in Binary Tree
// In a binary tree, if in the path from root to the node A there is 
// no node with greater value than As, this node A is visible. 
// We need to count the number of visible nodes in a binary tree.

/*
Example 1:

Input:
        5
     /     \
   3        10
  /  \     /
20   21   1

Output: 4
Explanation: There are 4 visible nodes: 5, 20, 21, and 10.
*/

/*
Example 2:

Input:
  -10
	\
	-15
	   \
	   -1

Output: 2
Explanation: Visible nodes are -10 and -1.
*/

// time complexity: O(n^2) ???? because it is calling itself twice for each call of itself
// space complexity: O(1)

countVisibleNodes = (root) => {
    // if no root, return 0
    if (!root) return 0
    // return value of traverse(root, negative infinity)
    return traverse(root, -Infinity)
}

traverse = (node, maxValue) => {
    // if no node, return 0
    if (!node) return 0
    // get current node value
    let currentNodeValue = node.val
    // if current node value >= max value, visible = 1
    if (currentNodeValue >= maxValue) visible = 1 
    // else visible = 0
    else visible = 0
    // set max value to max of max value or current node value
	maxValue = Math.max(maxValue, currentNodeValue)
    // traverse left node, add visible, traverse right node, add them all together
    // set total visible nodes as the sum of:
        // traverse function with left node as node and new max value as max value
        // visible
        // traverse function with right node as node and new max value as max value
    let totalVisibleNodes = traverse(node.left, maxValue) + visible + traverse(node.right, maxValue)
    // return total visible nodes
    return totalVisibleNodes
}

goodNodes = (root) => depthFirstSearch(root);

depthFirstSearch = (root) => {
    // initialize visited nodes list
    let visitedNodes = [];
    
    traverse = (currentNode, maxValue) => {
        // if no node, return 0
        if(!currentNode) return;
        // if current node's value larger than max, add to visited nodes
        if(currentNode.val >= maxValue) visitedNodes.push(currentNode.val);
        // if current node's left node exists, recursively run w/ it & max of max value or current node
        if(currentNode.left) traverse(currentNode.left, Math.max(maxValue, currentNode.val));
        // if current node's right node exists, recursively run w/ it & max of max value or current node
        if(currentNode.right) traverse(currentNode.right, Math.max(maxValue, currentNode.val));   
    }    
        
    if(root) traverse(root, root.val);
    return visitedNodes.length;
}

console.log(goodNodes([3,3,null,4,2]))
console.log(goodNodes([3,1,4,3,null,1,5]))