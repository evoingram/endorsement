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
        this.traverseMethod = 'preorder';
    }

    insert = (data) => {
        let newNode = new Node(data);
        if (this.root === null) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }
    insertNode = (node, newNode) => {
        if (newNode.data < node.data) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }
    contains = (value) => {
        let current = this.root;
        while (current) {
            if (current.value == value) return true;
            else if (current.value > value) current = current.left;
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
            }
            let aux = this.getMin(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }
    setTraverseMethod = (traverseMethod) => {
        if (
            traverseMethod == 'preorder' ||
            traverseMethod == 'inorder' ||
            traverseMethod == 'postorder'
        ) {
            this.traverseMethod = traverseMethod;
        } else console.error('Not a valid search method, must be "preorder", "inorder", or "postorder".');
    }
    getTraverseMethod = () => this.traverseMethod;
    traverse = (value) => {
        switch (this.traverseMethod) {
            case 'preorder':
                this.preOrderDFT(value);
                break;
            case 'inorder':
                this.inOrderPrint(value);
                break;
            case 'postorder':
                this.postOrderDFT(value);
                break;
            default:
                console.error('invalid traverse method');
        }
    }
    // Print all the values in order from low to high
    // recursive, depth first traversal
    inOrderPrint = (node) => {
        if (node != null) {
            // if left tree exists, recursively run this function to print its node values
            this.inOrderPrint(node.left)
            console.log(node.data)
            // if right tree exists, recursively run this function to print its node values
            this.inOrderPrint(node.right)
        }
    }
    // Print Pre-order recursive DFT
    preOrderDFT = (node) => {
        if (node != null) {
            // print node value 
            console.log(node.data);
            // if left tree of node exists, run again on it
            this.preOrderDFT(node.left)
            // if right tree of node exists, run again on it
            this.preOrderDFT(node.right)
        }
    }
    // Print Post-order recursive DFT
    postOrderDFT = (node) => {
        if (node != null) {
            // if left tree of node exists, run again on it
            this.postOrderDFT(node.left)
            // if right tree of node exists, run again on it
            this.postOrderDFT(node.right)
            // print node value
            console.log(node.data)
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
        this.traverseMethod = 'preorder';
    }
    insert = (data) => { 
        let nodeToAdd = new Node(data);
        if (this.root === null) this.root = nodeToAdd;
        else this.insertNode(this.root, nodeToAdd);
    }
    insertNode = (node, newNode) => { 
        if (newNode.data < node.data) {
            if (node.left === null) node.left = newNode
            else this.insertNode(node.left, newNode);
        }
        else {
            if (node.right === null) node.right = newNode
            else this.insertNode(node.right, newNode);
        }
    }
    contains = (valueToSearch) => { 
        let current = this.root;
        while (current) {
            if (current.value = value) return true
            else if (current.value > value) current = current.left;
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
    setTraverseMethod = (traverseMethod) => {
        if (traverseMethod !== 'preorder' || traverseMethod !== 'postorder' || traverseMethod !== 'inorder' ) {
            this.traverseMethod = traverseMethod;
        }
        else return new Error('Not a valid search method, must be "preorder", "inorder", or "postorder".');
    }
    getTraverseMethod = () => this.traverseMethod;
    traverse = (value) => { 
        switch(this.traverseMethod) {
            case 'preorder':
                this.preOrderDFT(value);
                break;
            case 'postorder':
                this.postOrderDFT(value);
                break;
            case 'inorder':
                this.inOrderPrint(value);
                break;
            default:
                console.error('invalid traverse method');


        }
    }
    inOrderPrint = (node) => {
        if (node !== null) {
            this.postOrderDFT(node.left);
            console.log(node.data);
            this.postOrderDFT(node.right);
        }
    }
    preOrderDFT = (node) => {
        if (node !== null) {
            console.log(node.data);
            this.postOrderDFT(node.left);
            this.postOrderDFT(node.right);
        }
    }
    postOrderDFT = (node) => {
        if (node !== null) {
            this.postOrderDFT(node.left);
            this.postOrderDFT(node.right);
            console.log(node.data);
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
console.log("inorder traversal");
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
console.log("inorder traversal");
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
console.log("inorder traversal");
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
console.log("inorder traversal");
// prints 9 10 13 17 22 25 27
BST.setTraverseMethod('inorder');
BST.traverse(root);
console.log("postorder traversal");
// prints 9 13 10 22 27 25 17
BST.setTraverseMethod('postorder');
BST.traverse(root);
// prints 17 10 9 13 25 22 27
console.log("preorder traversal");
BST.setTraverseMethod('preorder');
BST.traverse(root);
console.log("---------------");

/*
let newBST = new BinarySearchTree();
newBST.insert(1);
newBST.insert(2);
newBST.insert(3);
console.log(`-----------BST bft print 3-------------`);
newBST.traverseMethod = 'bft';
newBST.traverse(3);
console.log(`-----------BST dft print 3-------------`);
newBST.traverseMethod = 'dft';
newBST.traverse(3);
console.log(`----------BST inorder 3--------------`);
newBST.traverseMethod = 'inorder';
newBST.traverse(3);
console.log(`----------newBST.contains(3)--------------`);
console.log(`does BST contain 3?  ${newBST.contains(3)}`);
console.log(`What's the current max? ${newBST.getMax()}`);
newBST.insert(4);
newBST.insert(5);
console.log(`----------BST preorder 4--------------`);
newBST.traverseMethod = 'preorder';
newBST.traverse(4);
console.log(`---------BST postorder 5---------------`);
newBST.traverseMethod = 'postorder';
newBST.traverse(5);
console.log(`------------------------`);
console.log(`What's the current max? ${newBST.getMax()}`);
console.log(`------------------------`);
*/