
/*
What is the difference between an array and a linked list?
    Arrays use memory differently.
    Arrays store and index elements contiguously.
    Each element of linked list is stored in a node.
        Each node has reference or pointer to next node.
    Linked lists describe lists of things in recursive fashion.
    Arrays describe lists of things in iterative fashion.
    LLs are easier to insert into & delete from middle of LL than array.
    LLs are not as cache friendly since caches are typically 
        optimized for contiguous memory accesses.
    LLs don't need to be allocated with a static amount of memory up front.
    You can keep adding elements to linked lists as much as you want; 
        can't with arrays.
        
What is the difference between singly and doubly linked lists?
    A singly linked list is a set of nodes where each node has two fields ‘data’ 
        and ‘link’. 
        The ‘data’ field stores actual piece of information and ‘link’ field is used 
            to point to next node. 
        Basically ‘link’ field is nothing but address only.
    A doubly linked list contains an extra pointer, typically called previous 
        pointer, together with next pointer and data which are there in singly 
        linked list.
*/
// SINGLY LINKED LIST
// made of bunch of nodes that point to next one in list
// every node has two properties: 
    // value of whatever is being stored
    // pointer to next node in list
// adding and removing is easy; change next pointer on previous node (O(n)))
    // similar to arrays
// commonly used for holding lists of data
    // certain cases when better than array

// time complexity:   Avg   | Worst
    // Access:       O(n)   |   O(n)
    // Search:       O(n)   |   O(n)
    // Insertion:    O(1)   |   O(1)
    // Deletion:     O(1)   |   O(1)
// space complexity:  O(n)


class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext = (nodeToAdd) => this.next = nodeToAdd;

    get getNext() { return this.next; }
    get getValue() { return this.value; }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (nodeToAdd) => {
        let newNode = new Node(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            newNode.setNext(this.head);
            this.head = newNode;
        }
    }
    addToTail = (nodeToAdd) => {
        let newNode = new Node(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }

    }
    removeFromHead = () => {
        if (!this.head) return null
        else {
            let value = this.head;
            this.head = this.head.getValue;
            return value;
        }
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.value}`);
            current = current.getNext;
        }
    }
}

class Node10 {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext = (nodeToAdd) => this.next = nodeToAdd;

    get getNext() { return this.next; }
    get getValue() { return this.value; }
}
class LinkedList10 {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (nodeToAdd) => {
        let newNode = new Node(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            newNode.setNext(this.head)
            this.head = newNode;
        }
    }

    addToTail = (nodeToAdd) => {
        let newNode = new Node(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
    }

    removeFromHead = () => {
        if (!this.head) return null
        else {
            let value = this.head;
            this.head = this.head.getValue;
            return value;
        }
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.value}`);
            current = current.getNext;
        }
    }
}
class Node9 {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext = (nodeToAdd) => this.next = nodeToAdd;

    get getNext() { return this.next; }
    get getValue() { return this.value; }
}

class LinkedList9 {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (nodeToAdd) => {
        let newNode = new Node(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.setNext(this.head)
            this.head = newNode;
        }
    }
    addToTail = (nodeToAdd) => {
        let newNode = new Node(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
    }
    removeFromHead = () => {
        if (!this.head) return null
        else {
            let value = this.head.getNext;
            this.head = this.head.getValue;
            return value;
        }
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.value}`);
            current = current.getNext;
        }
    }
}
class Node8 {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext = (nodeToAdd) => this.next = nodeToAdd;

    get getNext() { return this.next; }
    get getValue() { return this.value; }
}

class LinkedList8 {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (nodeToAdd) => {
        let newNode = new Node(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.setNext(this.head)
            this.head = newNode
        }
    }
    addToTail = (nodeToAdd) => {
        let newNode = newNode(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
    }
    removeFromHead = () => {
        if (!this.head) return null
        else {
            let value = this.head.getNext;
            this.head = this.head.getValue;
            return value;
        }
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.value}`);
            current = current.getNext
        }
    }
}
class Node7 {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext = (nodeToAdd) => this.next = nodeToAdd;

    get getNext() { return this.next }
    get getValue() { return this.value }
}

class LinkedList7 {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (nodeToAdd) => {
        let newNode = new Node7(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNext(this.head);
            this.head = newNode;
        }

    }

    addToTail = (nodeToAdd) => {
        let newNode = new Node7(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
    }

    removeFromHead = () => {
        if (!this.head) return null
        else {
            let value = this.head.getValue;
            this.head = this.head.getNext;
            return value;
        }

    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.value}`);
            current = current.getNext;
        }
    }
}
class Node6 {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext = (newValue) => this.next = newValue;

    get getNext() { return this.next }
    get getValue() { return this.value }
}
class LinkedList6 {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (nodeToAdd) => {
        let newNode = new Node6(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNext(this.head);
            this.head = newNode;
        }

    }

    addToTail = (nodeToAdd) => {
        let newNode = new Node6(nodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
    }

    removeFromHead = () => {
        if (!this.head) return null
        else {
            let currentHeadValue = this.head.getValue;
            this.head = this.head.getNext;
            return currentHeadValue;
        }
    }

    printNodes = () => {
        let current = this.head;
        while (current != null) {
            console.log(`current value = ${current.value}`);
            current = current.getNext;
        }
    }
}
class Node5 {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext = (newNext) => this.next = newNext;

    get getNext() { return this.next };
    get getValue() { return this.value };
}
class LinkedList5 {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (newNodeToAdd) => {
        let newNode = new Node(newNodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNext(this.head);
            this.head = newNode;
        }
    }

    addToTail = (newNodeToAdd) => {
        let newNode = new Node(newNodeToAdd);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
    }

    removeFromHead = () => {
        if (!this.head) return null
        else {
            let value = this.head.getValue;
            this.head = this.head.getNext;
            return value;
        }
    }

    printNodes = () => {
        let current = this.head;
        while (current != null) {
            console.log(`current value = ${current.value}`);
            current = current.getNext;
        }
    }
}
class Node4 {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext = (newNext) => this.next = newNext;

    get getNext() { return this.next }
    get getValue() { return this.value }
}
class LinkedList4 {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (node) => {
        let newNode = new Node(node);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // set head as next on new node
            newNode.setNext(this.head);
            // set newNode as head
            this.head = newNode;
        }
    }
    addToTail = (node) => {
        let newNode = new Node(node);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
    }

    removeFromHead = () => {
        if (!this.head) return null
        else {
            let value = this.head.getValue;
            this.head = this.head.getNext;
            return value;
        }
    }
    
    printNodes = () => {
        let current = this.head;
        while (current != null) {
            console.log(`current value = ${current.value}`);
            current = current.getNext;
        }
    }
}
class Node3 {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.next = nextNode;
    }

    setNext = (newNext) => this.next = newNext;

    get getValue() { return this.value; }

    get getNext() { return this.next; }
}
class LinkedList3 {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (newNodeValue) => {
        let newNode = new Node3(newNodeValue);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNext(this.head);
            this.head = newNode;
        }
    }
    addToTail = (newNodeValue) => {
        let newNode = new Node3(newNodeValue);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
    }
    removeFromHead = () => {
        if (!this.head) return null
        else {
            let currentHeadValue = this.head.getValue;
            this.head = this.head.getNext;
            return currentHeadValue;
        };
    }
    printNodes = () => {
        let current = this.head;
        while (current != null) {
            console.log(`current node's value = ${current.value}`);
            current = current.getNext;
        }
    }
}
class Node2 {
    constructor(value = null, nextNode = null) {
        this.currentLLNodeValue = value;
        this.nextNode = nextNode;
    }

    setNext = (newNext) => this.nextNode = newNext;

    get getValue() { return this.currentLLNodeValue };

    get getNext() { return this.nextNode };
}
class LinkedList2 {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (value) => {
        let newNode = new Node2(value);
        if(!this.head && !this.tail) { // if the list is empty
            // set both head and tail to the new node 
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            // set new node's next to current head
            newNode.setNext(this.head);
            // set current head as new node
            this.head = newNode;

        }
    }

    addToTail = (value) => {
        // wrap the value in a Node 
        let newNode = new Node2(value);
        if(!this.head && !this.tail) { // if the list is empty
            // set both head and tail to the new node 
            this.head = newNode;
            this.tail = newNode;
        } else { // if the list isn't empty?
            // set the current tail's next to the new node 
            this.tail.setNext(newNode);
            // set this.tail to the new node 
            this.tail = newNode;
            }
    }

    removeFromHead = () => {
        if (!this.head) return null
        else {
            // we want to return the value at the current head 
            let currentHeadValue = this.head.getValue
            // remove the value at the head & update this.head 
            this.head = this.head.getNext
            return currentHeadValue
        }
    }

    printNodes = () => {
        let current = this.head;
        while (current != null) {
            console.log(`current node's value = ${current.currentLLNodeValue}`);
            current = current.getNext;
        }
    }
}
class Node1 {
    constructor(value = null, nextNode = null) {
        // the value at this linked list node
        this.value = value
        // reference to next node in list
        this.nextNode = nextNode
    }

    // set this node's nextNode reference to the passed-in node
    setNext = (newNext) => this.nextNode = newNext

    // return value of current node
    get getValue() { return this.value }

    // return next node
    get getNext() { return this.nextNode }
}
class LinkedList1 {
    constructor() {
        this.head = null
        this.tail = null
    }
    // O(1)
    addToHead = (value) => {
        let newNode = new Node1(value)
        if(!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNext(this.head);
            this.head = newNode;
        }
    }
    // we have access to the end of the list, so we can directly add new nodes to it 
    // O(1)
    addToTail = (value) => {
        // regardless of if the list is empty or not, we need to wrap the value in a Node 
        let newNode = Node1(value)
        // what if the list is empty? 
        if(!this.head && !this.tail) {
            // set both head and tail to the new node 
            this.head = newNode
            this.tail = newNode
        } else {
            // what if the list isn't empty?
            // set the current tail's next to the new node 
            this.tail.setNext(newNode)
            // set self.tail to the new node 
            this.tail = newNode
            }
    }
    // we already have access to the head of the linked list, 
        // so we can directly remove from it 
    // O(1)
    removeFromHead = () => {
        // what if the list is empty?
        if (!this.head) return null
        else {
        // what if it isn't empty?
            // we want to return the value at the current head 
            let value = this.head.getValue
            // remove the value at the head 
            // update self.head 
            this.head = this.head.getNext
            return value
        }
    }
    // iterate over our linked list and print out each value in it 
    printNodes = () => {
        let current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.getNext;
        }
    }
}
         
const linkedList = new LinkedList();
linkedList.addToHead(3);
linkedList.addToHead(5);
linkedList.addToHead(9);
linkedList.addToHead(11);
linkedList.printNodes();