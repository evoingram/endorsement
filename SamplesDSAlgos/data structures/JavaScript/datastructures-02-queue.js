// import LinkedList from './datastructures-linkedlist_doubly'

/*

What is the difference between using an array vs. a linked list when 
    implementing a Queue?
        Major difference is, arrays are index-based data structure and each 
            element of the array is associated with an index.  
        With a linked list, it relies on pointers; each node has the data 
            and then pointers to both previous and next elements.  
        You use binary or linear searches to traverse arrays; 
            linear to traverse linked lists.  
        Arrays are directly or randomly accessed and you can access any 
            element in them; queues are accessed via first pointer only.

What if you could only use instances of your Stack class to implement the Queue?  
What would that look like? 
    You'd need one for one direction and one for the opposite direction.
How many Stacks would you need? 
    Two
Try it!
    doubly linked list?
*/

// QUEUE
// A queue is a data structure whose primary purpose is to store and
// return elements in First In First Out order. 

// time complexity:   Avg   | Worst
// Access:       O(n)   |   O(n)
// Search:       O(n)   |   O(n)
// Insertion:    O(1)   |   O(1)
// Deletion:     O(1)   |   O(1)

// space complexity:  O(n)

class QueueLL {
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
        };
    }
    get len() { return this.size };
    get last() {
        if (this.size === 0) return null
        else return this.storage[this.size - 1];
    };
    get isEmpty() { return this.size === 0 };
    static isQueue(testInstance) { return testInstance instanceof Queue };
}
class Queue1 {
    constructor() {
        this.items = [];
    }

    enqueue = (element) => this.items.push(element);
    dequeue = () => {
        if (this.isEmpty()) return new Error("Queue Underflow");
        return this.items.shift();
    }
    front = () => {
        if (this.isEmpty()) return new Error("Queue Underflow");
        return this.items[0];
    }
    last = () => {
        if (this.isEmpty()) return new Error("Queue Underflow");
        this.items[this.items.length-1];
    }
    printQueue = () => {
        if (this.isEmpty()) return new Error("Queue Underflow");
        let string = `{ `;
        for (let x = 0; x < this.items.length; x++) {
            string += `${x}: ${this.items[x]}, `
        }
        string = `${string.trim()} }`;
        return string;
    }
    isEmpty = () => this.items.length === 0;
    len = () => this.items.length;
    static isQueue(testInstance) { testInstance instanceof Queue }
}
class Queue2 {
    constructor() {
        this.items = [];
    }
    enqueue = (element) => this.items.push(element);
    dequeue = () => {
        if (this.isEmpty()) return new Error("Queue Underflow");
        return this.items.shift();
    };
    isEmpty = () => this.items.length === 0;
    get len() { return this.items.length };
    printQueue = () => {
        let string = `{ `;
        for (let x = 0; x < this.items.length; x++) {
            string += `${x}: ${this.items[x]}, `;
        }
        string = `${string.trim()} }`;
        return string;
    };
    front = () => {
        if (this.isEmpty()) return new Error("Queue Underflow");
        return this.items[0];
    };
    back = () => {
        if (this.isEmpty()) return new Error("Queue Underflow");
        return this.items[this.items.length - 1];
    };
    static isQueue(testInstance) { return testInstance instanceof Queue };
}
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue = (value) => this.items.push(value);
    dequeue = () => {
        if (this.items.length === 0) return new Error("Queue Underflow");
        return this.items.shift();
    }
    isEmpty = () => this.items.length === 0;
    get len() { return this.items.length }
    printQueue = () => {
        let string = `{ `;
        for (let x = 0; x < this.items.length; x++) {
            string += `${x}: ${this.items[x]}, `;
        }
        string = `${string.trim()} }`;
        return string;
    }
    front = () => this.items[0]
    back = () => this.items[this.items.length - 1]
    static isQueue(testInstance) { return testInstance instanceof Queue }
}

/*
class Queue {
    constructor() {}
    enqueue = () => {}
    dequeue = () => {}
    isEmpty = () => {}
    get len() {}
    printQueue = () => {}
    front = () => {}
    back = () => {}
    static isQueue() {}
}
*/

const newQueue = new Queue()
console.log(`Is queue empty?  YES:  ${newQueue.isEmpty()}`)
newQueue.enqueue('Hello world')
newQueue.enqueue(42)
newQueue.enqueue({ a: 6, b: 7 })
console.log(`The length of queue is 3:  ${newQueue.len}`)
console.log(`Is queue empty?  NO:  ${newQueue.isEmpty()}`)
console.log(`Print Queue:  ${newQueue.printQueue()}`)
console.log(`front = ${newQueue.front()}`);
console.log(`back = ${newQueue.back()}`);
console.log(`Pop the first - Hello world:  ${newQueue.dequeue()}`)
console.log(`Pop the first - 42:  ${newQueue.dequeue()}`)
console.log(`Pop the first - { a: 6, b: 7 }:  ${newQueue.dequeue()}`)
console.log(`Is queue empty?  YES:  ${newQueue.isEmpty()}`);