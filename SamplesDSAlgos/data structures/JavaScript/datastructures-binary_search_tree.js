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

class Queue {
    constructor() {
        this.size = 0;
        this.storage = new DoublyLinkedList();
    }

    enqueue = (newValue) => {
        this.size++;
        this.storage.addToTail(newValue);
    }

    dequeue = () => {
        if (this.size === 0) return new Error("Queue Underflow")
        else {
            this.size--;
            return this.storage.removeFromHead();
    }
    }
    get len() { return this.storage.length; }

    get last() { 
        if (this.size === 0) return null
        else return this.storage.tail;
     }
    get isEmpty() { return this.size === 0; }
    
    static isQueue(testInstance) { return testInstance instanceof Queue }
}
class Stack {
    constructor() {
        this.size = 0;
        this.storage = [];
    }

    push = (newValue) => {
        this.size++;
        this.storage.push(newValue);
    }

    pop = () => {
        if (this.size === 0) throw new Error("Stack Underflow")
        else {
            this.size--;
            return this.storage.pop();
        }
    }

    len = () => { return this.size }

    last = () => { return this.storage[this.storage.length - 1]}

    isEmpty = () => { return this.size === 0 }

    static isStack = (testInstance) => { return testInstance instanceof Stack }
}
class ListNode {
    constructor(value, previous = null, next = null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }

    insertAfter = (newValue) => {
        console.log('insertAfter');
        let currentNext = this.next;
        this.next = new ListNode(newValue, this, currentNext);
        if (currentNext) currentNext.previous = this.next;
    }

    insertBefore = (newValue) => {
        console.log('insertBefore');
        let currentPrevious = this.previous;
        this.previous = new ListNode(newValue, currentPrevious, this);
        if (currentPrevious) currentPrevious.next = this.previous;
    }

    deleteListNode = () => {
        console.log('deleteListNode');
        if (this.previous) this.previous.next = this.next;
        if (this.next) this.next.previous = this.previous;
    }
}
class DoublyLinkedList {
    constructor(node = null) {
        this.head = node;
        this.tail = node;
        this.length = node != null ? 1 : 0;
    }
    addToHead = (newValue) => {
        console.log('addToHead');
        let nodeNew = new ListNode(newValue);
        this.length++;
        if (!this.head && !this.tail) {
            this.head = nodeNew;
            this.tail = nodeNew;
        }
        else {
            nodeNew.next = this.head;
            this.head.previous = nodeNew;
            this.head = nodeNew;
        }
        this.printNodes();
    }
    addToTail = (newValue) => {
        console.log('addToTail');
        let nodeNew = new ListNode(newValue);
        this.length++;
        // inserts it as the new tail of the list
        if (!this.head && !this.tail) {
            // make it head and tail
            this.head = nodeNew;
            this.tail = nodeNew;
        }
        // handle the old tail node's next pointer accordingly
        else {
            // assign tail to new next variable
            nodeNew.previous = this.tail;
            // make next tail new next var
            this.tail.next = nodeNew;
            // make tail new next var
            this.tail = nodeNew;
        }
        this.printNodes();
    }
    removeFromHead = () => {
        console.log('removeFromHead');
        let currentHead = this.head.value;
        // if (this.head.previous) this.head.previous.next = this.head.next;
        // if (this.head.next) this.head.next.previous = this.head.previous;
        this.deleteNode(this.head);
        return currentHead;
    }
    removeFromTail = () => {
        console.log('removeFromTail');
        let currentTail = this.tail.value;
        // if (this.tail.previous) this.tail.previous.next = this.tail.next;
        // if (this.tail.next) this.tail.next.previous = this.tail.previous;
        this.deleteNode(this.tail);
        return currentTail;
    }
    moveToFront = (nodeToMove) => {
        console.log('moveToFront');
        let wrappedNode = new ListNode(nodeToMove);
        if (wrappedNode === this.head) return null;
        let nodeValue = wrappedNode.value;
        if (wrappedNode === this.tail) this.removeFromTail();
        else {
            wrappedNode.deleteNode();
            this.length--;
        }
        this.addToHead(nodeValue);
    }
    moveToEnd = (nodeToMove) => {
        console.log('moveToEnd');
        let wrappedNode = new ListNode(nodeToMove);
        // if node is tail do nothing 
        if (wrappedNode === this.tail) return null;
        let nodeValue = wrappedNode.value;
        // Removes the input node from its current spot in the List
        // if node is head 
        if (wrappedNode === this.head) this.removeFromHead();
        else {
            wrappedNode.deleteNode(this.tail);
            this.length--;
        }
        // inserts it as the new tail node of the List
        this.addToTail(nodeValue);
    }
    deleteNode(position = 0) {
        console.log('deleteNode');
        if (this.length === 0) {
           console.log("List is already empty");
           return;
        }
        this.length--;
        let currNode = this.head;
        if (position <= 0) {
           this.head = this.head.next;
           this.head.prev = null;
        } else if (position >= this.length - 1) {
           this.tail = this.tail.prev;
           this.tail.next = null;
        } else {
           let iter = 0;
           while (iter < position) {
              currNode = currNode.next;
              iter++;
           }
           currNode.next = currNode.next.next;
           currNode.next.prev = currNode;
        }
        return currNode;
     }
    deleteNode1 = (nodeToDelete) => {
        console.log('deleteNode');
        console.log(`checking nodeToDelete type`);
        if (!(nodeToDelete instanceof ListNode)) {
            this.printNodes();
            console.log(`Not a Linked List node!`);
            return new Error("Not a Linked List node!");
        }
        // let wrappedNode = new ListNode(nodeToDelete);
        if (!this.head && !this.tail) {
            console.log(`no nodes in list`);
            return null;
        }
        this.length--;
        if (this.head === this.tail) {
            console.log(`one node in list`);
            this.head = null;
            this.tail = null;
        } else if (this.head === nodeToDelete) {
            console.log(`else if head matches`);
            this.head = this.head.next;
            // if (this.head.previous) this.head.previous.next = this.head.next;
            // if (this.head.next) this.head.next.previous = this.head.previous;
            this.head.deleteListNode();
        } else if (this.tail === nodeToDelete) {
            console.log(`else if tail matches`);
            this.tail = nodeToDelete.previous;
            // if (this.tail.previous) this.tail.previous.next = this.tail.next;
            // if (this.tail.next) this.tail.next.previous = this.tail.previous;
            this.tail.deleteListNode();
        } else {
            console.log(`else`);
            // if (nodeToDelete.previous) nodeToDelete.previous.next = nodeToDelete.next;
            // if (nodeToDelete.next) nodeToDelete.next.previous = nodeToDelete.previous;
            nodeToDelete.deleteListNode();
        };
        this.printNodes();
    }
    isPresent = (nodeToCheck) => {
        let wrappedNode = new ListNode(nodeToCheck);
        let current = this.head;
        while (current) {
            if (current.value === wrappedNode.value) return true;
            current = current.next;
        }
        return false;
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.value}`);
            current = current.next;
        }
    }
    get getMax() {
        if (!this.head) return null
        let headValue = this.head.value;
        let currentHead = this.head;
        while (currentHead) {
            if (currentHead.value > headValue) headValue = currentHead.value;
            currentHead = currentHead.next;
        }
        return headValue;
    }
    get len() { return this.length }
}



class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insert = (value) => {
        if (value < this.value) {
            if (!thisleft) this.left = new BinarySearchTree(value);
            else this.left.insert(value);
        } else {
            if (!this.right) this.right = new BinarySearchTree(value);
            else this.right.insert(value);
        }
    }
    contains = (target) => {
        if (this.value == target) return true
        else if (!this.left && !this.right) return false
        else if (this.left && target < this.value) return this.left.contains(target)
        else if (this.right && target > this.value) return this.right.contains(target);
    }
    forEachCB = (cb) => {
        cb(this.value);
        if (this.left) this.left.forEachCB(cb);
        if (this.right) this.right.forEachCB(cb);
    }
    inOrderPrint = (node) => {
        if (this.left) this.left.inOrderPrint(node);
        console.log(this.value);
        if (this.right) this.right.inOrderPrint(node);
    }
    bftPrint = (node) => {
        let currentQueue = new Queue();
        currentQueue.enqueue(node);
        while (currentQueue.length > 0) {
            let nextQueue = new Queue();
            while (currentQueue.length > 0) {
                // dequeue current node and save it 
                let currentNode = currentQueue.dequeue();
                // if left tree exists on current node, add to left 
                if (currentQueue.left) nextQueue.enqueue(currentNode.left);
                if (currentQueue.right) nextQueue.enqueue(currentNode.right);
                console.log(currentNode.value);
            }
            // set next queue as current queue
            currentQueue = nextQueue;
        }

    }
    dftPrint = (node) => {
        let currentStack = new Stack();
        currentStack.push(node);
        // while current stack is NOT empty
        while (currentStack.length > 0) {
            // remove entry from stack and save in currentNode
            let currentNode = currentStack.pop();
            console.log(currentNode.value);
            // if current node's left tree exists, add to it
            if (currentNode.left) currentStack.push(currentNode.left);
            if (currentNode.right) currentStack.push(currentNode.right);
        }
    }
    preOrderDFT = (node) => {
        console.log(node.value);
        // if left tree of node exists, run again on it
        if (node.left) this.preOrderDft(node.left);
        if (node.right) this.preOrderDFT(node.right);        
    }
    postOrderDFT = (node) => {
        // if left tree of node exists, run again on it
        if (node.left) this.post_order_dft(node.left);
        if (node.right) this.post_order_dft(node.right);
        console.log(node.value)
        
    }
    get getMax () {
        return this.right ? this.right.getMax : this.value
    }
}

let newBST = new BinarySearchTree();
newBST.insert(1);
newBST.insert(2);8
newBST.insert(3);
console.log(`-----------BST bft print 3-------------`);
newBST.bftPrint(3);
console.log(`-----------BST dft print 3-------------`);
newBST.dftPrint(3);
console.log(`----------BST inorder 3--------------`);
newBST.inOrderPrint(3);
console.log(`----------newBST.contains(3)--------------`);
console.log(`does BST contain 3?  ${newBST.contains(3)}`);
console.log(`What's the current max? ${newBST.getMax}`);
newBST.insert(4);
newBST.insert(5);
console.log(`----------BST preorder 4--------------`);
newBST.preOrderDFT(4);
console.log(`---------BST postorder 5---------------`);
newBST.postOrderDFT(5);
console.log(`------------------------`);
console.log(`What's the current max? ${newBST.getMax}`);
console.log(`------------------------`);

class BinarySearchTree1 {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    // insert given value into tree
    insert = (value) => {
        // if value < current value, go left
        if (value < this.value) {
            if (!this.left) this.left = new BinarySearchTree1(value)
            else this.left.insert(value)
        }
        // if value is greater than/equal to current value, go right
        else if (value >= this.value) {
            if (!this.right) this.right = new BinarySearchTree1(value)
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
        if (this.left) this.left.inOrderPrint(node)
        console.log(this.value)
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
