// Given the root of a binary tree, 
    // return the inorder traversal of its nodes' values.

// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Input: root = []
// Output: []

// Input: root = [1]
// Output: [1]

class BinarySearchTree {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    insert = (value) => {
        if (value < this.value) {
            if (!this.left) this.left = new BinarySearchTree(value)
            else this.left.insert(value)
        }
        else if (value >= this.value) {
            if (!this.right) this.right = new BinarySearchTree(value)
            else this.right.insert(value)
        }
    }

    preOrderTraversal = (node) => {
        if (!node) return [];
        return [
            node.value,
            ...preOrderTraversal(node.left),
            ...preOrderTraversal(node.right)
        ];
    }

    inOrderTraversal = (node) => {
        if (!node) return [];
        return [
            ...inOrderTraversal(node.left),
            node.value,
            ...inOrderTraversal(node.right)
        ];
    }

    postOrderTraversal = (node) => {
        if (!node) return [];
        return [
            ...postOrderTraversal(node.left),
            ...postOrderTraversal(node.right),
            node.value,
        ];
    }
}

