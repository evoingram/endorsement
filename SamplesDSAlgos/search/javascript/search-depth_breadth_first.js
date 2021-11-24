import Queue from '../../data structures/JavaScript/datastructures-queue'
import stack from '../../data structures/JavaScript/datastructures-stack'

// A traversal is completed when every node has been explored.
// A search is completed when the search target is found.

// DEPTH & BREADTH FIRST SEARCHES
// Depth First:    Algorithm explores as far as possible along each branch before backtracking
    // for each node, process node, process left subtree, then right subtree, then add, copy, etc.
    // ---------------------------
    // one that continues traveling forward on each branch until a dead end is reached
    // search then retreats to first unexplored path and follows next unexplored path until that 
        // one, too, reaches a dead end
    // continues until all nodes have been visited
    // recursive or iterative --> makes use of stack

// Breadth First:  Algorithm explores all neighbor nodes at present depth prior to moving on to next level
    // can be resolved iteratively (preferred) or recursively
    // useful when what you're seeking is closer to root node
    // process one layer/level at a time
    // process node, add left child to queue, then right child
    // dequeue them off queue and call function on that node
    // repeat until null left
    // ---------------------------
    // opposite of depth-first
    // explore layer by layer, moving outward from starting point
    // at each node, we discover to list of nodes to explore
    // then explore nodes in order we encounter them
        // use queue for this
    // will jump around a bit because next node we visit might not be connected to current

// time complexity:   O(Vertices + Edges) (Worst)
// space complexity:  O(Vertices) (Worst)

// IN-ORDER, PRE-ORDER, AND POST-ORDER TRAVERSALS
    // for depth-first traversals only
// In-Order:  recursively call method on left tree, process node, call method on right tree
    // use for sorted list out of BST
// Pre-Order:  process node, recursively call method on left tree, call method on right tree
    // use for deep copy of tree
// Post-Order: recursively call method on left tree, call method on right tree, process node 
    // use for deleting tree

// time complexity:     O(n) 
// space complexity:  O(1)

/*
DEPTH-FIRST SEARCH RECURSIVE PSEUDOCODE
procedure DFS(G, v) is
    label v as discovered
    for all directed edges from v to w that are in G.adjacentEdges(v) do
        if vertex w is not labeled as discovered then
            recursively call DFS(G, w)

DEPTH-FIRST SEARCH ITERATIVE PSEUDOCODE
procedure DFS_iterative(G, v) is
    let S be a stack
    S.push(v)
    while S is not empty do
        v = S.pop()
        if v is not labeled as discovered then
            label v as discovered
            for all edges from v to w in G.adjacentEdges(v) do 
                S.push(w)

BREADTH-FIRST SEARCH PSEUDOCODE
1  procedure BFS(G, root) is
2      let Q be a queue
3      label root as discovered
4      Q.enqueue(root)
5      while Q is not empty do
6          v := Q.dequeue()
7          if v is the goal then
8              return v
9          for all edges from v to w in G.adjacentEdges(v) do
10             if w is not labeled as discovered then
11                 label w as discovered
12                 w.parent := v
13                 Q.enqueue(w)
*/


class BinarySearchTree {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    // Insert the given value into the tree
    insert = (value) => {
        // if value is less than current value, go left
        if (value < this.value) {
            if (!this.left) this.left = BinarySearchTree(value)
            else this.left.insert(value)
        }
        // if value is greater than/equal to current value, go right
        else if (value >= this.value) {
            if (!this.right) this.right = BinarySearchTree(value)
            else this.right.insert(value)
}

    // Return true if the tree contains the value
    // false if it does not
    contains = (target) => {
        // if node value is target, return true
        if (this.value == target) return true
        // if binary trees are empty, return false 
        else if (this.left == null && this.right == null) return false
        // if left exists and target less than current node value, check left
        else if (this.left && target < this.value) return this.left.contains(target)
        // if right exists and target greater than current node value, check right
        else if (target > this.value && this.right) return this.right.contains(target)


    // Return the maximum value found in the tree
    getMax = () => {
        // if right exists, check right 
        if (this.right) return this.right.getMax()
        // else it's in left and return node value
        else return this.value
    }

    // Call the function `cb` on the value of each node
    // You may use a recursive or iterative approach
    forEach = (cb) => {
        // callback function on node value  
        cb(this.value)

        // if left tree exists, run callback function on each node
        if (this.left) this.left.forEach(cb)

        // if right tree exists, run callback function on each node
        if (this.right) this.right.forEach(cb)
}

    // Print all the values in order from low to high
    // Hint:  Use a recursive, depth first traversal
    // left, node, right
    inOrderPrint = (node) => {
        // if left tree exists, recursively run this function to print its node values
        if (this.left) this.left.inOrderPrint(node)
        console.log(this.value)
        // if right tree exists, recursively run this function to print its node values
        if (this.right) this.right.inOrderPrint(node)
}

    // Print the value of every node, starting with the given node 
    // iterative breadth first traversal
    bftPrint = (node) => {
        // get current queue 
        let currentQueue = new Queue()
        // add node to current queue
        currentQueue.enqueue(node)
        // if current queue is not empty
        while (currentQueue.len() > 0) {
            // set current as next queue
            let nextQueue = new Queue()
            while (currentQueue.length > 0) {
                // dequeue current node and save it 
                let currentNode = currentQueue.dequeue()
                // if left tree exists on current node, add to left 
                if (currentNode.left) nextQueue.enqueue(currentNode.left)
                // if right tree exists on current node, add to right
                if (currentNode.right) nextQueue.enqueue(currentNode.right)
                // print current node value
                console.log(currentNode.value)
            // set next queue as current queue
            currentQueue = nextQueue
}

    // Print the value of every node, starting with the given node 
    // iterative depth first traversal
    dftPrint = (node) => {
        // set stack as current stack 
        let currentStack = new Stack()
        // add node to current stack 
        currentStack.push(node)
        // while current stack is NOT empty
        while (currentStack.length > 0) {
            // remove entry from stack and save in currentNode
            let currentNode = currentStack.pop()
            // print value of currentNode
            console.log(currentNode.value)
            // if current node's left tree exists, add to it
            if (currentNode.left) currentStack.push(currentNode.left)
            // if current node's right tree exists, add to it
            if (currentNode.right) currentStack.push(currentNode.right)
}

    // Print Pre-order recursive DFT
    // node, left, right
    preOrderDFT = (node) => {
        // print node value 
        console.log(node.value)
        // if left tree of node exists, run again on it
        if (node.left) this.preOrderDFT(node.left)
        // if right tree of node exists, run again on it
        if (node.right) this.preOrderDFT(node.right)
    }

    // Print Post-order recursive DFT
    // left, right, node
    postOrderDFT = (node) => {
        // if left tree of node exists, run again on it
        if (node.left) this.postOrderDFT(node.left)
        // if right tree of node exists, run again on it
        if (node.right) this.postOrderDFT(node.right)
        // print node value
        console.log(node.value)
    }
}