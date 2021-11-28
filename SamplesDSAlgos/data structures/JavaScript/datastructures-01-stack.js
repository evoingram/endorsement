
/*
What is the difference between using an array vs. a linked list when 
    implementing a Stack?

    Major difference is, arrays are index-based data structure and 
        each element of the array is associated with an index.  

    With a linked list, it relies on pointers; each node has the data 
        and then pointers to both previous and next elements.  

    You use binary or linear searches to traverse arrays; linear to 
        traverse linked lists.  

    Arrays are directly or randomly accessed and you can access any 
        element in them; stacks are accessed via last or first 
        pointer only.
*/

// STACK
// A stack is a data structure whose primary purpose is to store and
// return elements in (Last In First Out)/FIFO order. 

// time complexity:   Avg   | Worst
// Access:       O(n)   |   O(n)
// Search:       O(n)   |   O(n)
// Insertion:    O(1)   |   O(1)
// Deletion:     O(1)   |   O(1)

// space complexity:  O(n)

class Stack1 {
    constructor() {
        this.size = 0;
        this.storage = [];
    }

    push = (valueToAdd) => {
        this.size++;
        this.storage.push(valueToAdd);
    }
    pop = () => {
        if (this.size === 0) return new Error("Stack Underflow");
        else {
            this.size--;
            return this.storage.pop();
        }
    }
    len = () => this.size;
    isEmpty = () => { return this.size === 0 }
    get last() {
        if (this.size === 0) return null;
        return this.storage[this.size - 1];
    }

    static isStack(testInstance) { return testInstance instanceof Stack }
}
class Stack2 {
    constructor() {
        this.size = 0;
        this.storage = [];
    }
    push = (value) => {
        this.size++;
        this.storage.push(value);
    }
    pop = () => {
        if (this.size === 0) return new Error("Empty Stack");
        this.size--;
        return this.storage.pop();
    }
    isEmpty = () => this.size === 0;
    len = () => this.size;
    get last() { return this.storage[this.size - 1] }
    static isStack(testInstance) { return testInstance instanceof Stack }
}
class Stack {
    constructor() {
        this.size = 0;
        this.storage = [];
    }
    push = (value) => {
        this.size++;
        this.storage.push(value);
    }
    pop = () => {
        if (this.size === 0) return new Error(`Stack Underflow`);
        this.size--;
        return this.storage.pop();
    }
    isEmpty = () => this.size === 0;
    len = () => this.size;
    get last() { return this.storage[this.size - 1] };
    static isStack(ti) { return ti instanceof Stack };
}

/*
class Stack {
    constructor() {}
    push = () => {}
    pop = () => {}
    isEmpty = () => {}
    len = () => {}
    get last() {}
    static isStack() {}
}
*/

const newStack = new Stack();
console.log(`Is it a Stack?  TRUE:  ${Stack.isStack(newStack)}`)
console.log(`Is stack empty?  TRUE:  ${newStack.isEmpty()}`)
newStack.push('Hello world')
newStack.push(42)
newStack.push({ a: 6, b: 7 })
console.log(`The length of stack is 3:  ${newStack.len()}`)
console.log(`Is stack empty?  FALSE:  ${newStack.isEmpty()}`)
console.log(`Give me the last one:  ${newStack.last}`)
console.log(`Pop the latest - { a: 6, b: 7 }:  ${newStack.pop()}`)
console.log(`Pop the latest - 42:  ${newStack.pop()}`)
console.log(`Pop the latest - Hello World:  ${newStack.pop()}`)
console.log(`Is stack empty?  TRUE:  ${newStack.isEmpty()} = ${JSON.stringify(newStack)}`);
