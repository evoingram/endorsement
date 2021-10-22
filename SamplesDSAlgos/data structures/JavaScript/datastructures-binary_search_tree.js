import dllQueue from 'Queue';
import dllStack from 'Stack';


// BINARY SEARCH TREE
// Binary search trees are a data structure that enforce an ordering over the data they store. 
// That ordering in turn makes it a lot more efficient at searching for a particular piece of 
    // data in the tree. 
// extremely efficient data structure with searching
// consists entirely of nodes holding values, with each node referencing other nodes
// in trees in general, each node is not constrained to just referencing a single other node
// tree data structures where each node can reference 0-2 other nodes, left & right
// maintain invariant/rule that if a node has a left child node it points to, that left node's 
    // value is strictly less than parent node value and, respectively, right child is greater
// trees can be thought of as linked lists, but without constraint that each node only points to 
    // one other node; can point to multiple nodes in tree
// linked lists themselves count as trees
// a common trees classification is to talk about them in terms of the max number of nodes that
    // a single node can point to
// more efficient than array or linked list
// inefficient to insert into a BST
// performance of BST depends quite a lot on whether tree is balanced or not
// useful structure for middle ground between linked lists and arraylists
// bst makes it very easy and simple to add & find new elements
    // just change pointer to add new elements like linked lists
// performs well if you stay away from edge cases

// RELATED TERMS
    // root:      topmost node in tree
    // child:     node directly connected to another node when moving away from root node
    // parent:    node directly connected to another node when moving towards root node
    // siblings:  nodes sharing same parent
    // leaf:      node with no children
    
// time complexity:     Avg      |   Worst
    // Access:       O(log(n))   |   O(n)
    // Search:       O(log(n))   |   O(n)
    // Insertion:    O(log(n))   |   O(n)
    // Deletion:     O(log(n))   |   O(n)

// space complexity:  O(n)

class BinarySearchTree {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    // insert given value into tree
    insert = (value) => {
        // if value < current value, go left
        if (value < this.value) {
            if (!this.left) this.left = new BinarySearchTree(value)
            else this.left.insert(value)
        }
        // if value is greater than/equal to current value, go right
        else if (value >= this.value) {
            if (!this.right) this.right = new BinarySearchTree(value)
            else this.right.insert(value)
        }
    }

    // return true if tree contains value; else false
    contains = (target) => {
        // if node value is target, return true
        if (this.value == target) return true
        // if binary trees are empty, return false
        else if (this.left == null && this.right == null) return false
        // if left exists and target < current node value, check left
        else if (this.left && target < this.value) return this.left.contains(target)
        // if right exists and target > current node value, check right
        else if (this.right && target > this.value) this.right.contains(target)
    }

    // Call the function `cb` on the value of each node
    // You may use a recursive or iterative approach
    forEachCB = (cb) => {
        // callback function on node value
        cb(this.value)
        // if left tree exists, run callback function on each node
        if (this.right) this.left.forEachCB(cb)
        // if right tree exists, run callback function on each node
        if (this.right) this.right.forEachCB(cb)
    }

    // Print all the values in order from low to high
    // recursive, depth first traversal
    inOrderPrint = (node) => {
        if (this.left) this.left.inOrderconsole.log(node)
        console.log(this.value)
        if (this.right) this.right.inOrderconsole.log(node)
    }

    // Print the value of every node, starting with the given node 
    // iterative breadth first traversal
    bftPrint = (node) => {
        // get current queue 
        let currentQueue = new Queue()

        // add node to current queue
        currentQueue.enqueue(node)

        // if current queue is not empty
        while (currentQueue.length > 0) {
            // set current as next queue
            let nextQueue = new Queue()

            while (currentQueue.length > 0) {
                // dequeue current node and save it 
                let currentNode = currentQueue.dequeue()

                // if left tree exists on current node, add to left 
                if (currentQueue.left) nextQueue.enqueue(currentNode.left)
                // if right tree exists on current node, add to right
                if (currentQueue.right) nextQueue.enqueue(currentNode.right)

                // print current node value
                console.log(currentNode.value)
            }
            // set next queue as current queue
            currentQueue = nextQueue
        }

    }

    // Print the value of every node, starting with the given node 
    // iterative depth first traversal
    dftPrint = (node) => {
        // set stack as current stack 
        let currentStack = Stack()

        // add node to current stack 
        currentStack.push(node)

        // while current stack is NOT empty
        while (currentStack.len() > 0) {
            // remove entry from stack and save in currentNode
            let currentNode = currentStack.pop()

            // print value of current_node
            console.log(currentNode.value)
            // if current node's left tree exists, add to it
            if (currentNode.left) currentStack.push(currentNode.left)
            // if current node's right tree exists, add to it
            if (currentNode.right) currentStack.push(currentNode.right)
        }
        
    }

    // Print Pre-order recursive DFT
    preOrderDFT = (node) => {
        // print node value 
        console.log(node.value)

        // if left tree of node exists, run again on it
        if (node.left) this.preOrderDft(node.left)

        // if right tree of node exists, run again on it
        if (node.right) this.preOrderDFT(node.right)
        
    }

    // Print Post-order recursive DFT
    postOrderDFT = (node) => {
        // if left tree of node exists, run again on it
        if (node.left) this.post_order_dft(node.left)

        // if right tree of node exists, run again on it
        if (node.right) this.post_order_dft(node.right)

        // print node value
        console.log(node.value)
        
    }

    // Return the maximum value found in the tree
    get getMax () {
        // if right exists, check right
        // else it's in left and return node value
        return this.right ? this.right.getMax : this.value
    }


}