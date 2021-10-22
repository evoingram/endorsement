/*
Node class to keep track of the data internal to individual nodes
A tree class to keep track of things like the balance factor 
    and the rebalancing logic
*/

// AVL TREE
    // trees stay as flat as possible
    // initials of authors, specialized BSTs
    // valid AVL always valid BST, not vice versa
    // add value same as BST
    // difference is, on way up your recursive calls, you check if
        // node is balanced after adding new node
    // tree out of balance if subtree's height differences > 1
    // benefit is, we can guarantee no worst cases (O(n))
        // worst case = O(log(n))

// rebalance:  if one side of tree gets too heavy, then we need to
    // perform a rotation to get the tree back in balance
// "too heavy":  max height of 1 child = 2+ than max height of other
    // child
// double rotation:  when opposite child is heavy during rotation

// time complexity:   Avg   | Worst
    // Access:       O(log(n))   |   O(log(n))
    // Search:       O(log(n))   |   O(log(n))
    // Insertion:    O(log(n))   |   O(log(n))
    // Deletion:     O(log(n))   |   O(log(n))

// space complexity:  O(n)

class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}

class AVLTree {
    constructor(node = null) {
        this.node = node
        // init height to -1 because of 0-indexing
        this.height = -1
        this.balance = 0
    }

    // Display the whole tree. Uses recursive def.
    display = (level = 0, pref = '') => {
        // Update height before balancing
        this.update_height()
        this.updateBalance()

        if (this.node != null) {
            let part3String;
            this.height == 0 ? part3String = 'L' : part3String = ' ';

            console.log(`${'-' * level * 2} ` +
                `${pref} ${this.node.key} ` +
                `${this.height}:${this.balance} ${part3String}`
            )
            if (this.node.left != null) this.node.left.display(level + 1, '<')
            if (this.node.right != null) this.node.right.display(level + 1, '>')
        }
    }

    // Computes the maximum number of levels there are in the tree
    update_height = () => {
        nodeLeft, nodeRight = this.node.left, this.node.right
        heightLeft, heightRight = 0, 0

        // recursive run if left node exists
        if (nodeLeft) {
            nodeLeft.update_height()
            heightLeft = nodeLeft.height
        }

        // recursive run if right node exists
        if (nodeRight) {
            nodeRight.update_height()
            heightRight = nodeRight.height
        }

        // make height left height if left > right
        if (heightLeft > heightRight) this.height = heightLeft + 1

        // make height right height if left < right
        else this.height = heightRight + 1

        // returns maximum number of levels in the tree
        return this.height
    }

    // Updates the balance factor on the AVLTree class
    updateBalance = () => {
        if (this.node != null) {
            nodeLeft, nodeRight = this.node.left, this.node.right
            heightLeft, heightRight = 0, 0

            // recursive run if left node exists
            if (nodeLeft) {
                nodeLeft.updateBalance()
                heightLeft = nodeLeft.height
            }

            // recursive run if right node exists
            if (nodeRight) {
                nodeRight.updateBalance()
                heightRight = nodeRight.height
            }

            // get height difference into balance & return difference
            this.balance = heightLeft - heightRight
            return this.balance
        }
    }

    // Perform a left rotation, making the right child of this node 
    // the parent and making the old parent the left child of the 
    // new parent. 
    leftRotate = () => {
        // making the right child of this node the parent
        childRight = this.node.right
        this.node.right = null
        // making the old parent the left child of the new parent
        childRight.node.left = self
    }

    // Perform a right rotation, making the left child of this node the 
    // parent and making the old parent the right child of the 
    // new parent. 
    rightRotate = () => {
        // making the left child of this node the parent
        node_child = this.node.left
        this.node.left = null
        // making the old parent the right child of the new parent
        node_child.node.right = self
    }

    // Sets in motion the rebalancing logic to ensure the tree is balanced 
    // such that the balance factor is 1 or -1
    rebalance = () => {
        if (this.balance > 1) {

            // if balance > 1 & right balance > 0, rotate left
            if (this.node.right.balance > 0) this.leftRotate()

            // if balance <= 0 and right balance is negative, rotate right and 
            // recursively run
            else {
                this.node.right.rightRotate()
                this.rebalance()
            }
        }
        else if (this.balance < -1) {

            // if balance is -2+ & left balance > 0, rotate right
            if (this.node.left.balance > 0) this.rightRotate()

            // if balance is -2+ & left balance is negative, rotate left and 
            // recursively run
            else {
                this.node.left.leftRotate()
                this.rebalance()
            }
        }
        // Uses the same insertion logic as a binary search tree:
        // after the value is inserted, we need to check to see if we need to rebalance
        insert = (key) => {
            // if node isn't empty
            if (this.node != null) {
                // if current key > current node key
                if (key < this.node.key) {
                    // AND if left node exists, insert:
                    if (this.node.left) this.node.left.insert(key)

                    // AND if left node does NOT exist:
                    else {
                        // set key node as left node
                        this.node.left = AVLTree(Node(key))
                    }
                }
                // if current key < current node key
                else {
                    // AND if right node exists, insert:
                    if (this.node.right) this.node.right.insert(key)
                    // AND if right node does NOT exist:
                    else {
                        // set key node as right node
                        this.node.right = AVLTree(Node(key))
                    }
                }
            }
            // if node is empty, set key node as node
            else this.node = Node(key)

            // update balance
            this.updateBalance()

            // check for rebalancing if absolute value of balance > 1:
            if (abs(this.balance) > 1) this.rebalance()
        }

        check_height = (rootNode) => {
            if (!rootNode) return 0
            return rootNode.height
        }
    }
}