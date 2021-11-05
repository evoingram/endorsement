
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
        this.next = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add = (element) => {
        let node = new Node(element);
        let current;
        if (this.head == null) this.head = node;
        else {
            current = this.head;
            while (current.next) current = current.next;
            current.next = node;
        }
        this.size++;
    }
    insertAt = (element, index) => {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            let node = new Node(element);
            let current, previous;
            current = this.head;
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                current = this.head;
                let counter = 0;
                while (counter < index) {
                    counter++;
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }
    removeFrom = (index) => {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            let current, previous, counter = 0;
            current = this.head;
            previous = current;
            if (index === 0) {
                this.head = current.next;
            } else {
                while (counter < index) {
                    counter++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.size--;
            return current.element;
        }
    }
    removeElement = (element) => {
        let current = this.head;
        let previous = null;
        while (current != null) {
            if (current.element === element) {
                if (previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return current.element;
            }
            previous = current;
            current = current.next;
        }
        return -1;
    }
    indexOf = (element) => {
        let count = 0;
        let current = this.head;
        while (current != null) {
            if (current.element === element) return count;
            count++;
            current = current.next;
        }
        return -1;
    }
    isEmpty = () => this.size === 0;
    getLength = () => this.size;
    printNodes = () => {
        let current = this.head;
        let string = ``;
        while (current) {
            string += `${current.element} `;
            current = current.next;
        }
        return string;
    }
    traverse = (fn) => {
        let current = this.head;
        while (current) {
            if (fn) fn(current);
            current = current.next;
        }
    }
    traverseReverse = (fn) => {
        let count = Number(this.size - 1);
        let loopCount = 0;
        let current = this.head;
        console.log(`this.size-1:  ${this.size - 1}   |   starting count:  ${count}`);
        while (count > -1) {
            loopCount++;
            console.log(`loop count = ${loopCount}`);
            console.log(`count:  ${count}`);
            console.log(`current element:  ${current.element}  |  index:  ${this.indexOf(current.element)}`);
            if (this.indexOf(current.element) === count) {
                if (fn) fn(current);
                count = Number(this.size - 1);
                console.log(`setting current to current.previous`);
            }
            else count--;
            current = current.next;
            console.log(`count after:  ${count}`);
        }
    }
    reverseList = (headRef) => {
        if (headRef == null || headRef.next == null) return null;

        let newHead = null;
        let current = headRef, next;

        while (current) {
            next = current.next;
            newHead = push(newHead, current);
            current = next;
        }
        headRef = newHead;

        return headRef;
    }
}

class LRUCache {

    constructor(limit = 10) {
        // the max number of nodes it can hold
        this.max = limit;
        this.nodeList = new DoublyLinkedList()
        // provides fast access to every node stored in the cache
        this.storage = {};
    }
    get = (key) => {
        if (!key in this.storage) return null;
        let lrucNode;
        let listValue = this.storage[key];
        if (listValue != null) {
            lrucNode = this.nodeList.indexOf(key);
            this.nodeList.removeElement(key);
            this.nodeList.insertAt(key, 0);
            return listValue;
        }
        // needs to move the key-value pair to the end of the order such that 
        // the pair is considered most-recently used
        if (key in this.keys) {
            // Retrieves the value associated with the given key
            index = this.keys.index(key);
            this.keys.pop(index);
            this.keys.push(key);
            // Returns the value associated with the key
            return this.storage[key];
        }
        // Returns null if the key-value pair doesn't exist in the cache.
        else return null;
    }
    set = (key, value) => {
        // Adds the given key-value pair to the cache. 
        // The newly- added pair should be considered the most-recently used entry in the cache.
        if (!key in this.storage) {
            this.storage[key] = value;
            this.nodeList.addToHead(key);
        }
        // Additionally, in the case that the key already exists in the cache, 
            // we simply want to overwrite the old value associated with the key with the newly-specified value.
        else {
            this.storage[key] = value;
            this.nodeList.removeElement(value);
            this.nodeList.insertAt(key, 0);
        }
        // If the cache is already at max capacity before this entry is added, 
            // then the oldest entry in the cache needs to be removed to make room.
        if (this.nodeList.length > this.max) {
            delete this.storage[this.nodeList.tail.value]
            this.nodeList.removeFrom(this.size-1);
        }
    }
}

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