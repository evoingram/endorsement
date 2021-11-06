
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
}

class LRUCache1 {
    constructor(limit = 10) {
        // Our LRUCache class keeps track of:

        // the max number of nodes it can hold
        this.max = limit;
        // a doubly-linked list that holds the key-value entries in the correct order
        this.nodeList = new DoublyLinkedList()
        // a storage dict that provides fast access to every node stored in the cache
        this.storage = {};
    }
    get = (key) => {
        if (!key in this.storage) return null
        let listValue = this.storage[key]
        if (listValue != null) {
            let lrucNode = this.nodeList.find(key)
            this.nodeList.moveToFront(lrucNode)
            return listValue
        }

        // needs to move the key-value pair to the end of the order such that 
        // the pair is considered most-recently used
        if (key in this.keys) {
            // Retrieves the value associated with the given key
            index = this.keys.index(key)
            this.keys.pop(index)
            this.keys.push(key)
            // Returns the value associated with the key
            return this.storage[key]
        }
        // Returns null if the key-value pair doesn't exist in the cache.
        else return null
    }
    set = (key, value) => {
        // Adds the given key-value pair to the cache. 
        // The newly- added pair should be considered the most-recently used entry in the cache.
        if (!key in this.storage) {
            this.storage[key] = value;
            this.node_list.add_to_head(key);
        }
        // Additionally, in the case that the key already exists in the cache, we simply want to overwrite the old value associated with the key with the newly-specified value.
        else {
            this.storage[key] = value;
            lruc_node = this.node_list.find(key)
            this.node_list.move_to_front(lruc_node)
        }
        // If the cache is already at max capacity before this entry is added, then the oldest entry in the cache needs to be removed to make room.
        if (this.node_list.length > this.max) {
            delete this.storage[this.node_list.tail.value]
            this.node_list.remove_from_tail()
        }
    }
}

class LRUCache {
    constructor(limit = 10) {
        this.max = limit;
        this.nodeList = new DoublyLinkedList(); // holds the key-value entries in the correct order
        this.storage = {};
    }
    get = (key) => {
        if (!key in this.storage) return null;
        let listValue = this.storage[key];
        if (listValue !== null) {
            
        }
    }
    get = (key) => {
        if (!key in this.storage) return null
        let listValue = this.storage[key]
        if (listValue != null) {
            let lrucNode = this.nodeList.find(key)
            this.nodeList.moveToFront(lrucNode)
            return listValue
        }
        // needs to move the key-value pair to the end of the order such that 
        // the pair is considered most-recently used
        if (key in this.keys) {
            // Retrieves the value associated with the given key
            index = this.keys.index(key)
            this.keys.pop(index)
            this.keys.push(key)
            // Returns the value associated with the key
            return this.storage[key]
        }
        // Returns null if the key-value pair doesn't exist in the cache.
        else return null
    }
    set = (key, value) => {
        // Adds the given key-value pair to the cache. 
        // The newly- added pair should be considered the most-recently used entry in the cache.
        if (!key in this.storage) {
            this.storage[key] = value;
            this.node_list.addToHead(key);
        }
        // Additionally, in the case that the key already exists in the cache, we simply want to overwrite the old value associated with the key with the newly-specified value.
        else {
            this.storage[key] = value;
            lruc_node = this.node_list.find(key)
            this.node_list.move_to_front(lruc_node)
        }
        // If the cache is already at max capacity before this entry is added, then the oldest entry in the cache needs to be removed to make room.
        if (this.node_list.length > this.max) {
            delete this.storage[this.node_list.tail.value]
            this.node_list.remove_from_tail()
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
console.log(`${lruc.get(1)}`);
console.log(`${lruc.get(2)}`);
console.log(`${lruc.get(3)}`);
lruc.set(4, "Huburbs");
console.log(`${lruc.get(4)}`);
console.log(`${lruc.get(3)}`);
// console.log(`${}`);