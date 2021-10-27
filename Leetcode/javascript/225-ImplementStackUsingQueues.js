// Implement a last-in-first-out (LIFO) stack using only two queues. 
// The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

    // void push(int x) Pushes element x to the top of the stack.
    // int pop() Removes the element on the top of the stack and returns it.
    // int top() Returns the element on the top of the stack.
    // boolean empty() Returns true if the stack is empty, false otherwise.

// Notes:

// You must use only standard operations of a queue, which means that only: 
    // - push to back
    // - peek/pop from front
    // - size
    // - is empty operations 

// are valid.
// Depending on your language, the queue may not be supported natively. 
// You may simulate a queue using a list or deque (double-ended queue) as long as 
    // you use only a queue's standard operations.
 
/*
Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]
*/

// Constraints:

    // 1 <= x <= 9
    // At most 100 calls will be made to push, pop, top, and empty.
    // All the calls to pop and top are valid.


// Follow-up: Can you implement the stack using only one queue?

class MyStack {
    constructor() {
        this.size = 0
        this.storage = []
    }

    transfer = () => {
        for(let x = 1; x < this.size; x++) {
            this.storage.push(this.storage.shift());
        };
    }

    push = (newValue) => {
        this.size += 1;
        this.storage.push(newValue);
        this.transfer();
    }

    pop = () => {
        if (this.empty()) return null;
        this.size -= 1;
        return this.storage.shift();
    }

    top = () => {
        if (this.empty()) return null;
        return this.storage[0];
    }

    empty = () => this.size === 0;
}

// Explanation:
let myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.storage);
console.log(myStack.top()); // return 2
console.log(myStack.pop()); // return 2
console.log(myStack.empty()); // return False
