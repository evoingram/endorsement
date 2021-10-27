/*
Design a stack that supports push, pop, top, and 
    retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
*/

// Example 1, Input:
    // ["MinStack","push","push","push","getMin","pop","top","getMin"]
    // [[],[-2],[0],[-3],[],[],[],[]]
    // Output = [null,null,null,null,-3,null,0,-2]

// Explanation
    // MinStack minStack = new MinStack();
    // minStack.push(-2);
    // minStack.push(0);
    // minStack.push(-3);
    // minStack.getMin(); // return -3
    // minStack.pop();
    // minStack.top();    // return 0
    // minStack.getMin(); // return -2


/*
Constraints:

    -231 <= val <= 231 - 1
    Methods pop, top and getMin operations will always be called on non-empty stacks.
    At most 3 * 104 calls will be made to push, pop, top, and getMin.
*/

// leetcode doesn't count this as answer because it includes error handling
// this solution works as is w/o the error/size 0 handling
class MinStack { 
    constructor(){
        this.size = 0
        this.storage = []
    }
    
    push = (newValue) => {
        this.storage.push(newValue);
        this.size += 1;
    };
    
    pop = () => {
        if (this.size == 0) throw new error ("Stack Underflow")
        else {
            this.size -= 1 
            return this.storage.pop(0)
        }
    };
    
    top = () => {
        if (this.size != 0) return this.storage[this.storage.length - 1]
        else return null
    };
    
    getMin = () => {
        if (this.size == 0) return null
        return Math.min(...this.storage)
    };
}
minStack = new MinStack();
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin()); // return -3
console.log(minStack.pop());
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2 MinStack minStack = new MinStack();
console.log(minStack.push(-2));
console.log(minStack.push(0));
console.log(minStack.push(-3));
console.log(minStack.getMin()); // return -3
console.log(minStack.pop());
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2
