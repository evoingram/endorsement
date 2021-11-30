
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
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
    setNext = (valueNext) => this.next = valueNext;
    get getNext() { return this.next }
    get getValue() { return this.value }
}
class LinkedList1 {
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
class Node2 {
    constructor(element = null, next = null) {
        this.element = element;
        this.next = next;
    };
    setNext = (value) => this.next = value;
    get getNext() { return this.next };
    get getValue() { return this.element };
}
class LinkedList2 {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addHead = (value) => {
        let node = new Node(value);
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            node.setNext(this.head);
            this.head = node;
        }
    }
    addTail = (value) => {
        let node = new Node(value);
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.setNext(node);
            this.tail = node;
        }
    }
    removeHead = () => {
        if (!this.head) return null;
        let value = this.head.getValue;
        this.head = this.head.getNext;
        return value;
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.element}`);
            current = current.next;
        }
    }
}
class Node {
    constructor(element = null, next = null) {
        this.element = element;
        this.next = next;
    }
    setNext = (value) => this.next = value;
    get getNext() { return this.next }
    get getValue() { return this.element }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addHead = (value) => {
        let node = new Node(value);
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            node.setNext(this.head);
            this.head = node;
        }
        this.size++;
        return this;
    }
    addTail = (value) => {
        let node = new Node(value);
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.setNext(node);
            this.tail = node;
        }
        this.size++;
        return this;
    }
    removeHead = () => {
        if (!this.head && !this.tail) return null;
        this.size--;
        let value = this.head.getValue;
        this.head = this.head.getNext;
        return value;
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.element}`);
            current = current.next;
        }
    }
}


/*
class Node {
    constructor() {}
    setNext = () => {}
    get getNext() {}
    get getValue() {}
}

class LinkedList {
    constructor() {}
    addHead = () => {}
    addTail = () => {}
    removeHead = () => {}
    printNodes = () => {}
}
*/

const linkedList = new LinkedList();
linkedList.addHead(3);
linkedList.addHead(5);
linkedList.addHead(9);
linkedList.addHead(11);
linkedList.addHead(13);
linkedList.addTail(13);
linkedList.removeHead();
linkedList.printNodes();