
// LRU CACHE
// Use two data structures to implement an LRU Cache:

// Queue which is implemented using a doubly linked list. 
// The maximum size of the queue will be equal to the total number of frames available (cache size). 
// The most recently used pages will be near front endpygame.examples.aliens.main()
// The least recently pages will be near the rear end.
// A Hash with page number as key and address of the corresponding queue node as value.

// When a page is referenced, the required page may be in the memory. 
// If it is in the memory, we need to detach the node of the list and bring it to the front of the queue.
// If the required page is not in memory, we bring that in memory. 
// In simple words, we add a new node to the front of the queue and update the corresponding node address in the hash. 
// If the queue is full, i.e. all the frames are full, we remove a node from the rear of the queue, and 
// add the new node to the front of the queue.

// QUEUE PORTION:

// time complexity:   Avg   | Worst
// Access:       O(n)   |   O(n)
// Search:       O(n)   |   O(n)
// Insertion:    O(1)   |   O(1)
// Deletion:     O(1)   |   O(1)

// space complexity:  O(n)

// HASH TABLE PORTION: 

// time complexity:   Avg   |   Worst
// Access:       N/A    |   N/A
// Search:       O(1)   |   O(n)
// Insertion:    O(1)   |   O(n)
// Deletion:     O(1)   |   O(n)

// space complexity:  O(n)

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // add node to end
    push = (valueToAdd) => {
        const newNode = new Node(valueToAdd);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.size++;
        return this;
    }
    // remove node from end
    pop = () => {
        if (this.size === 0) return null;
        let current = this.tail;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = current.previous;
            this.tail.next = null;
            current.previous = null;
        }
        this.size--;
        return current;
    }
    // remove node from beginning
    shift = () => {
        if (this.size === 0) return null;
        let current = this.head;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = current.next;
            this.head.previous = null;
            current.next = null;
        }
        this.size--;
        return current;
    }
    // add node to beginning
    unshift = (valueToAdd) => {
        const newNode = new Node(valueToAdd);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.size++;
        return this;
    }
    indexOf = (element) => {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if (current.element === element) return count;
            count++;
            current = current.next;
        }
        return -1;
    }
    find = (value) => {
        let current = this.head;
        if (current === null) return null;
        if (current.element == value) return current;
        while (this.tail !== current) {
            current = current.next;
            if (current.value == value) return current;
        };
        return null;
    }
    getLength = () => this.size;
    getLast = () => {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        return current;
    }
    printNodes = () => {
        let count = 0;
        let string = `{ `;
        let current = this.head;
        while (current) {
            string += `${count}: ${current.element}, `;
            count++;
            current = current.next;
        }
        string = `${string.trim()} }`;
        return string;
    }
    isEmpty = () => this.size === 0;
    traverse = (fn) => {
        let current = this.head;
        while (current) {
            if (fn) fn(current);
            current = current.next;
        }
    }
    traverseReverse = (fn) => {
        let current = this.getLast();
        let count = this.size - 1;
        while (count > -1) {
            if (fn) fn(current);
            current = current.previous;
            count--;
        }
    }
    delete = () => {
        if (this.previous) {
            this.previous.next = this.next;
            this.size -= 1;
        }
        if (this.next) {
            this.next.previous = this.previous;
            this.size -= 1;
        }
    }
    moveToFront = (node) => {
        if (node == this.head) return;
        let nodeValue = node.element;
        if (node == this.tail) this.pop();
        else node.delete();
        this.unshift(nodeValue);
    }
}
class LRUCache1 {
    constructor(limit) {
        this.max = limit;
        this.storage = {};
        this.nodeList = new DoublyLinkedList();
    }
    get = (key) => {
        if (!key in this.storage) return null;
        let listValue = this.storage[key];
        let lrucNode = this.nodeList.find(key);
        this.nodeList.moveToFront(lrucNode);
        return listValue;
    }
    set = (key, value) => {
        this.storage[key] = value;
        let lrucNode = this.nodeList.find(key);
        this.nodeList.moveToFront(lrucNode);
        if (this.nodeList.length > this.max) {
            delete this.storage[this.nodeList.tail.element];
            this.nodeList.pop();
        }
    }
}
class LRUCache2 {
    constructor(limit = 10) {
        this.max = limit;
        this.storage = {};
        this.list = new DoublyLinkedList();
    }
    get = (key) => {
        if (!key in this.storage === null) return null;
        let listValue = this.storage[key];
        let lrucNode = this.list.find(key);
        this.list.moveToFront(lrucNode);
        return listValue;
    }
    set = (key, value) => {
        this.storage[key] = value;
        let lrucNode = this.list.find(key);
        this.list.moveToFront(lrucNode);
        if (this.list.length > this.max) {
            delete this.storage[this.list.tail.element];
            this.list.pop();
        }
    }
}
class LRUCache3 {
    constructor(limit = 10) {
        this.max = limit;
        this.storage = {};
        this.list = new DoublyLinkedList();
    }
    get = (key) => {
        if (!key in this.storage === null) return null;
        let listValue = this.storage[key];
        let lrucNode = this.list.find(key);
        this.list.moveToFront(lrucNode);
        return listValue;
    }
    set = (key, value) => {
        this.storage[key] = value;
        let lrucNode = this.list.find(key);
        this.list.moveToFront(lrucNode);
        if (this.list.length > this.max) {
            delete this.storage[this.list.tail.element];
            this.list.pop();
        }
    }
}
class LRUCache4 {
    constructor(limit = 10) {
        this.storage = {};
        this.max = limit;
        this.list = new DoublyLinkedList();
    }
    get = (key) => {
        if (!key in this.storage === null) return null;
        let listValue = this.storage[key];
        let lrucNode = this.list.find(key);
        this.list.moveToFront(lrucNode);
        return listValue;
    }
    set = (key, value) => {
        this.storage[key] = value;
        let lrucNode = this.list.find(key);
        this.list.moveToFront(lrucNode);
        if (this.list.length > this.max) {
            delete this.storage[this.list.tail.element];
            this.list.pop();
        }
    }
}

class LRUCache {
    constructor(limit = 10) {
        this.storage = {};
        this.max = limit;
        this.list = new DoublyLinkedList();
    }
    get = (key) => {
        if (!key in this.storage === null) return null;
        let listValue = this.storage[key];
        let lrucNode = this.list.find(key);
        this.list.moveToFront(lrucNode);
        return listValue;
    }
    set = (key, value) => {
        this.storage[key] = value;
        let lnode = this.list.find(key);
        this.list.moveToFront(lnode);
        if (this.list.length > this.max) {
            delete this.storage[this.list.tail.element];
            this.list.pop();
        }
    }
}

/*
class LRUCache {
    constructor() {}
    get = (key) => {}
    set = (key, value) => {}
}
*/
let lruc = new LRUCache();
lruc.set(1, "Erica");
lruc.set(2, "Adam");
lruc.set(3, "Muffin Man");
console.log(`Erica = ${lruc.get(1)}`);
console.log(`Adam = ${lruc.get(2)}`);
console.log(`Muffin Man = ${lruc.get(3)}`);
lruc.set(4, "Huburbs");
console.log(`Huburbs = ${lruc.get(4)}`);
lruc.set(3, "Hubbymon");
console.log(`Hubbymon = ${lruc.get(3)}`);
console.log(`${JSON.stringify(lruc.storage)}`);
console.log(`undefined = ${lruc.get(5)}`);
// console.log(`${}`);