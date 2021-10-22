
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

class Stack {
    constructor() {
        this.size = 0
        this.storage = []
    }
    
    push = (newValue) => {
        // insert value on top of stack
        this.storage.push(newValue)
        this.size += 1
    }

    pop = () => {
        // if empty, can't remove anything
        if (this.storage == 0) throw new Error('Stack Underflow')
        // else, remove first item & return it
        else return this.storage.pop(0)
    }

    // get stack length/size
    get len() { return this.storage.length }

    // returns true if stack is empty
    get isEmpty() { return this.size === 0 }

    // return last item in stack w/o removing it
    get last () {
        if (this.size !== 0) return this.storage[this.storage.length - 1]
        else return null
    }

    static isStack(testInstance) { return testInstance instanceof Stack }
}
const newStack = new Stack()
console.log(`Is it a Stack?  ${Stack.isStack(newStack)}`)
console.log(`Is stack empty?  ${newStack.isEmpty}`)
newStack.push('Hello world')
newStack.push(42)
newStack.push({ a: 6, b: 7 })
console.log(`The length of stack is ${newStack.len}`)
console.log(`Is stack empty?  ${newStack.isEmpty}`)
console.log(`Give me the last one:  ${newStack.last}`)
console.log(`Pop the latest:  ${newStack.pop()}`)
console.log(`Pop the latest:  ${newStack.pop()}`)
console.log(`Pop the latest:  ${newStack.pop()}`)
console.log(`Is stack empty?  ${newStack.isEmpty}`)