
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

class Node2 {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }

    setNext = (newNext) => this.next = newNext;

    get getValue() { return this.value }
    get getNext() { return this.next }
}
class LinkedList2 {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead = (newValue) => {
        let newNode = new Node(newValue);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.setNext(this.head);
            this.head = newNode;
        }
    }
    addToTail = (newValue) => {
        let newNode = new Node(newValue);
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
        if (!this.head) return null;
        let value = this.head.getValue;
        this.head = this.head.getNext;
        return value;
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current's value = ${current.value}`);
            current = current.getNext;
        }
    }
}

class Node3 {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
    setNext = (nextValue) => this.next = nextValue;
    get getValue() { return this.value }
    get getNext() { return this.next }
}

class LinkedList3 {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToHead = (headNew) => {
        let newNode = new Node(headNew);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.setNext(this.head);
            this.head = newNode;
        }
    }
    addToTail = (tailNew) => {
        let newNode = new Node(tailNew);
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.setNext(newNode);
            this.tail = newNode;
        }
    }
    removeFromHead = () => {
        if (!this.head) return null;
        let value = this.head.getValue;
        this.head = this.head.getNext;
        return value;
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current's value = ${current.value}`);
            current = current.next;
        }
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
    setNext = (valueNext) => this.next = valueNext;
    get getNext() { return this.next }
    get getValue() { return this.value }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead = (valueToAdd) => {
        let nodeToAdd = new Node(valueToAdd);
        if (!this.head && !this.tail) {
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        } else {
            nodeToAdd.setNext(this.head);
            this.head = nodeToAdd;
        }
    }
    addToTail = (valueToAdd) => {
        let nodeToAdd = new Node(valueToAdd);
        if (!this.head && !this.tail) {
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        } else {
            this.tail.setNext(nodeToAdd);
            this.tail = nodeToAdd;
        }
    }
    removeFromHead = () => {
        if (!this.head) return null;
        let value = this.head.getValue;
        this.head = this.head.getNext;
        return value;
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.value}`);
            current = current.next;
        }
    }
}



const linkedList = new LinkedList();
linkedList.addToHead(3);
linkedList.addToHead(5);
linkedList.addToHead(9);
linkedList.addToHead(11);
linkedList.addToHead(13);
linkedList.removeFromHead();
linkedList.printNodes();