// import dllQueue from 'Queue';
// import dllStack from 'Stack';


// BINARY SEARCH TREE
// Binary search trees are a data structure that enforce an ordering over the data they store. 
// That ordering in turn makes it a lot more efficient at searching for a particular piece of 
// data in the tree. 
// extremely efficient data structure with searching
// consists entirely of nodes holding values, with each node referencing other nodes
// in trees in general, each node is not constrained to just referencing a single other node
// tree data structures where each node can reference 0-2 other nodes, left & right
// maintain inletiant/rule that if a node has a left child node it points to, that left node's 
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

// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
class Node1 {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree1 {
    constructor() {
        this.root = null;
        this.tMethod = 'preorder';
    }
    insert = (value) => {
        let addThisNode = new Node(value);
        if (this.root === null) this.root = addThisNode;
        else this.insertNode(this.root, addThisNode);
    }
    insertNode = (cNode, nNode) => {
        if (nNode.data < cNode.data) {
            if (cNode.left === null) cNode.left = nNode
            else this.insertNode(cNode.left, nNode);
        }
        else {
            if (cNode.right === null) cNode.right = nNode
            else this.insertNode(cNode.right, nNode);
        }
    }
    contains = (valueToSearch) => {
        let current = this.root;
        while (current) {
            if (current.data === valueToSearch) return true
            else if (current.data > valueToSearch) current = current.left
            else current = current.right;
        }
        return false;
    }
    getMin = (node) => {
        if (node.left === null) return node;
        return this.getMin(node.left);
    }
    getMax = (node) => {
        if (node.right === null) return node;
        return this.getMax(node.right);
    }
    getRoot = () => this.root;
    remove = (data) => this.root = this.removeNode(this.root, data);
    removeNode = (node, key) => {
        if (node === null) return null
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }
            let minNode = this.getMin(node.right);
            node.data = minNode.data;
            node.right = this.removeNode(node.right, minNode.data);
            return node;
        }
    }
    setTraverseMethod = (tMethod) => this.tMethod = tMethod;
    getTraverseMethod = () => this.tMethod;
    traverse = (value) => {
        switch (this.tMethod) {
            case 'preorder':
                this.preOrderDFT(value);
                break;
            case 'inorder':
                this.inOrderPrint(value);
                break;
            case 'postorder':
                this.postOrderDFT(value);
            case 'breadth':
                this.bfs(value);
                break;
            default:
                console.error('Please select a valid traversal method:  breadth, inorder, preorder, or postorder.');
                return new Error("Invalid traverse method.");
        }
    }
    inOrderPrint = (node) => {
        if (node !== null) {
            this.inOrderPrint(node.left);
            console.log(node.data);
            this.inOrderPrint(node.right);
        }
    }
    preOrderDFT = (node) => {
        if (node !== null) {
            console.log(node.data);
            this.preOrderDFT(node.left);
            this.preOrderDFT(node.right);
        }

    }
    postOrderDFT = (node) => {
        if (node !== null) {
            this.postOrderDFT(node.left);
            this.postOrderDFT(node.right);
            console.log(node.data);
        }
    }
    bfs = (root) => {
        let currentNode = root;
        let queue = [currentNode];
        while (queue.length > 0) {
            currentNode = queue.pop();
            console.log(currentNode.data);
            if (currentNode.left !== null) queue.unshift(currentNode.left);
            if (currentNode.right !== null) queue.unshift(currentNode.right);
        }
    }
}
class Node2 {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree2 {
    constructor() {
        this.root = null;
        this.tm = 'preorder';
    }
    insert = (value) => {
        let node = new Node(value);
        if (this.root === null) this.root = node
        else this.insertNode(this.root, node);
    }
    insertNode = (cNode, nNode) => {
        if (nNode.data < cNode.data) {
            if (cNode.left === null) cNode.left = nNode
            else this.insertNode(cNode.left, nNode);
        } else {
            if (cNode.right === null) cNode.right = nNode
            else this.insertNode(cNode.right, nNode);
        }
    }
    contains = (value) => {
        let current = this.root;
        while (current) {
            if (current.data === value) return true
            else if (current.data > value) current = current.left;
            else current = current.right;
        }
        return false;
    }
    getMin = (node) => {
        if (node.left === null) return node;
        return this.getMin(node.left);
    }
    getMax = (node) => {
        if (node.right === null) return node;
        return this.getMax(node.right);
    }
    getRoot = () => this.root;
    remove = (data) => this.root = this.removeNode(this.root, data);
    removeNode = (node, key) => {
        if (node === null) return null;
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } 
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            };
            let minNode = this.getMin(node.right);
            node.data = minNode.data;
            node.right = this.removeNode(node.right, minNode.data);
            return node;
        }
    }
    setTraverseMethod = (tm) => this.tm = tm;
    getTraverseMethod = () => this.tm;
    traverse = (value) => {
        switch (this.tm) {
            case 'preorder':
                this.preOrderDFT(value);
                break;
            case 'inorder':
                this.inOrderPrint(value);
                break;
            case 'postorder':
                this.postOrderDFT(value);
                break;
            case 'breadth':
                this.bfs(value);
                break;
            default:
                console.error('Please select a valid traversal method:  breadth, inorder, preorder, or postorder.');
                return new Error("Invalid traverse method.");
        }
    }
    inOrderPrint = (node) => {
        if (node !== null) {
            this.inOrderPrint(node.left);
            console.log(node.data);
            this.inOrderPrint(node.right);
        }
    }
    preOrderDFT = (node) => {
        if (node !== null) {
            console.log(node.data);
            this.preOrderDFT(node.left);
            this.preOrderDFT(node.right);
        }
    }
    postOrderDFT = (node) => {
        if (node !== null) {
            this.postOrderDFT(node.left);
            this.postOrderDFT(node.right);
            console.log(node.data);
        }
    }
    bfs = (root) => {
        let currentNode = root;
        let queue = [currentNode];
        while (queue.length > 0) {
            currentNode = queue.pop();
            console.log(currentNode.data);
            if (currentNode.left !== null) queue.unshift(currentNode.left);
            if (currentNode.right !== null) queue.unshift(currentNode.right);
        }
    }
}

/*
class Node {
    constructor() {}
}
class BinarySearchTree {
    constructor() {}
    insert = () => {}
    insertNode = () => {}
    contains = () => {}
    getMin = () => {}
    getMax = () => {}
    getRoot = () => {}
    remove = () => {}
    removeNode = () => {}
    setTraverseMethod = () => {}
    getTraverseMethod = () => {}
    traverse = () => {}
    inOrderPrint = () => {}
    preOrderDFT = () => {}
    postOrderDFT = () => {}
    bfs = () => {}
}
*/

let BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

let root = BST.getRoot();
console.log(`contains 17 true = ${BST.contains(17)}`);
console.log(`contains 35 false = ${BST.contains(35)}`);
console.log(`-----------inorder traversal 1-------------`);
// prints 5 7 9 10 13 15 17 22 25 27
BST.setTraverseMethod('inorder');
BST.traverse(root);
BST.remove(5);


//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17
root = BST.getRoot();
console.log(`-----------inorder traversal 2-------------`);
// prints 7 9 10 13 15 17 22 25 27
BST.setTraverseMethod('inorder');
BST.traverse(root);
BST.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17
root = BST.getRoot();
console.log(`-----------inorder traversal 3-------------`);
// prints 9 10 13 15 17 22 25 27
BST.setTraverseMethod('inorder');
BST.traverse(root);
BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

root = BST.getRoot();
console.log(`-----------inorder traversal 4-------------`);
// prints 9 10 13 17 22 25 27
BST.setTraverseMethod('inorder');
BST.traverse(root);
console.log(`-----------postorder traversal-------------`);
// prints 9 13 10 22 27 25 17
BST.setTraverseMethod('postorder');
BST.traverse(root);
// prints 17 10 9 13 25 22 27
console.log(`-----------preorder traversal-------------`);
BST.setTraverseMethod('preorder');
BST.traverse(root);
console.log(`-----------breadth traversal-------------`);
BST.setTraverseMethod('breadth');
BST.traverse(root);
console.log("---------------");