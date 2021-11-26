
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
        this.height = 1
    }
}

class AVLTree {
    // insert a node
    insertNode = (root, key) => {
        // find correct location & insert node
        if (!root) return new Node(key)
        else if (key < root.key) root.left = this.insertNode(root.left, key)
        else root.right = this.insertNode(root.right, key)

        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right))

        // update balance factor & balance tree
        let balanceFactor = this.getBalance(root)
        if (balanceFactor > 1) {
            if (key < root.left.key) return this.rightRotate(root)
            else {
                root.left = this.leftRotate(root.left)
                return this.rightRotate(root)
            }
        }
        if (balanceFactor < -1) {
            if (key > root.right.key) return this.leftRotate(root)
            else {
                root.right = this.rightRotate(root.right)
                return this.leftRotate(root)
            }
        }

        return root
    }

    // delete a node
    delete = (root, key) => {
        let temp;
        // find the node to be deleted and remove it
        if (!root) return root
        else if (key < root.key) root.left = this.delete(root.left, key)
        else if (key > root.key) root.right = this.delete(root.right, key)
        else {
            if (root.left == null) {
                temp = root.right
                root = null
                return temp
            }
            else if (root.right == null) {
                temp = root.left
                root = null
                return temp
            }
            temp = this.getMinValueNode(root.right)
            root.key = temp.key
            root.right = this.delete(root.right, temp.key)
        }

        if (root == null) return root

        // update the balance factor of nodes
        root.height = 1 + Math.max(
            this.getHeight(root.left),
            this.getHeight(root.right)
        )
        let balanceFactor = this.getBalance(root)

        // balance tree
        if (balanceFactor > 1) {
            if (this.getBalance(root.left) >= 0) return this.rightRotate(root)
            else {
                root.left = this.leftRotate(root.left)
                return this.rightRotate(root)
            }
        }
        if (balanceFactor < -1) {
            if (this.getBalance(root.right) <= 0) return this.leftRotate(root)
            else {
                root.right = this.rightRotate(root.right)
                return this.leftRotate(root)
            }
        }
        return root
    }

    // perform left rotation
    leftRotate = (z) => {
        let y = z.right;
        let T2 = y.left;
        y.left = z;
        z.right = T2;
        z.height = 1 + Math.max(
            this.getHeight(z.left),
            this.getHeight(z.right)
        )
        y.height = 1 + Math.max(
            this.getHeight(y.left),
            this.getHeight(y.right)
        )
        return y
    }

    // perform right rotation
    rightRotate = (z) => {
        let y = z.left;
        let T3 = y.right;
        y.right = z;
        z.left = T3;
        z.height = 1 + Math.max(
            this.getHeight(z.left),
            this.getHeight(z.right)
        );
        y.height = 1 + Math.max(
            this.getHeight(y.left),
            this.getHeight(y.right)
        );

        return y
    }

    // get node height
    getHeight = (root) => {
        if (!root) return 0
        return root.height
    }

    // get node balance factor
    getBalance = (root) => {
        if (!root) return 0
        return this.getHeight(root.left) - this.getHeight(root.right)
    }

    getMinValueNode = (root) => {
        if (root == null || root.left == null) return root
        return this.getMinValueNode(root.left)
    }

    preOrder = (root) => {
        if (!root) return null
        console.log(`${root.key}`)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

    // print tree 
    printHelper = (currentPointer, indent, last) => {
        if (currentPointer != null) {
            console.log(indent)
            if (last) {
                console.log("R----")
                indent += "     "
            } else {
                console.log("L----")
                indent += "|    "
            }
            console.log(currentPointer.key)
            this.printHelper(currentPointer.left, indent, false)
            this.printHelper(currentPointer.right, indent, true)
        }
    }

}

myTree = new AVLTree()
let root = null
nums = [33, 13, 52, 9, 21, 61, 8, 11]

for (num in nums) root = myTree.insertNode(root, num)

myTree.printHelper(root, "", true)

key = 13
root = myTree.delete(root, key)

console.log("After Deletion: ")

myTree.printHelper(root, "", true)