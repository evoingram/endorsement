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

class Queue1 {
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
        else return this.storage[this.size-1];
    };
    get isEmpty() { return this.size === 0 };
    static isQueue(testInstance) { return testInstance instanceof Queue };
}
class ListNode1 {
    constructor(value, prev=null, next=null) {
        this.value = value
        this.prev = prev
        this.next = next
    }

    /*Wrap the given value in a ListNode and insert it
    after this node. Note that this node could already
    have a next node it is point to.*/
    insertAfter = (value) => {
        let currentNext = this.next
        this.next = new ListNode(value, currentNext)
        if (currentNext) currentNext.prev = this.next
    }
    /*Wrap the given value in a ListNode and insert it
    before this node. Note that this node could already
    have a previous node it is point to.*/
    insertBefore(value) {
        let currentPrev = this.prev
        this.prev = new ListNode(value, currentPrev)
        if (currentPrev) currentPrev.next = this.prev
    }
    /*Rearranges this ListNode's previous and next pointers
    accordingly, effectively deleting this ListNode.*/
    delete = () => {
        if (this.prev) this.prev.next = this.next
        if (this.next) this.next.prev = this.prev
    }
}
class ListNode {
    constructor(value, previous = null, next = null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }

    insertAfter = (value) => {
        let currentNext = this.next;
        this.next = new ListNode(value, currentNext)
        if (currentNext) currentNext.previous = this.next;
    }
    insertBefore = (value) => {
        let currentPrevious = this.previous;
        this.previous = new ListNode(value, currentPrevious);
        if (currentPrevious) currentPrevious.next = this.previous;
    }
    delete = () => {
        if (this.previous) this.previous.next = this.next;
        if (this.next) this.next.previous = this.previous;
    }
}
class Queue {
    constructor() {
        this.size = 0;
        this.storage = new DoublyLinkedList();
    }
    enqueue = (value) => {
        this.size++;
        this.storage.addToTail(value);
    }
    dequeue = () => {
        if (this.size === 0) return new Error("Queue Underflow");
        this.size--;
        return this.storage.removeFromHead();
    }
    get len() { return this.size }
    get last() {
        if (this.size === 0) return null;
        return this.storage[this.storage.getLength-1];
    }
    get isEmpty() { return this.size === 0 }

    static isQueue(testInstance) { return testInstance instanceof Queue }
}
// Our doubly-linked list class
class DoublyLinkedList {
    constructor(node=null) {
        // holds references to the list's head and tail nodes
        this.head = node
        this.tail = node
        this.length = node != null ? 1 : 0
    }


    addToHead = (value) => {
        // Wraps the given value in a ListNode
        let dllNodeNew = new ListNode(value)
        this.length += 1

        // inserts it as the new head of the list
        if (!this.head && !this.tail) {
            // make it head and tail
            this.head = dllNodeNew
            this.tail = dllNodeNew
        } else {
        // handle the old head node's previous pointer accordingly
            // assign head to new next variable
            dllNodeNew.next = this.head
            // make prev head new next var
            this.head.prev = dllNodeNew
            // make head new next var
            this.head = dllNodeNew
        }
}
    removeFromHead = () => {
        let headValue = this.head.value
        // Removes the List's current head node, 
            // making the current head's next node the new head of the List
        this.delete(this.head)
        // Returns the value of the removed Node
        return headValue
    }
    addToTail = (value) => {
        // Wraps the given value in a ListNode
        let dllNodeNew = new ListNode(value)
        this.length += 1
        // inserts it as the new tail of the list
        if (!this.head && !this.tail){
            // make it head and tail
            this.head = dllNodeNew
            this.tail = dllNodeNew
        } else {
        // handle the old tail node's next pointer accordingly
            // assign tail to new next variable
            dllNodeNew.prev = this.tail
            // make next tail new next var
            this.tail.next = dllNodeNew
            // make tail new next var
            this.tail = dllNodeNew
        }
}
    removeFromTail = () => {
        currentTail = this.tail.value
        // Removes the List's current tail node, 
            // making the current tail's previous node the new tail of the List
        this.delete(this.tail)

        // Returns the value of the removed Node
        return currentTail
}
    moveToFront = (node) => {
        // if already head do nothing 
        if (node == this.head) { return null }            
        nodeValue = node.value

        // Removes the input node from its current spot in the List
        // if node is tail
        if (node == this.tail) this.removeFromTail()
        else {
            node.delete()
            this.length -= 1
        }

        // inserts it as the new head node of the List
        this.addToHead(nodeValue)
}
    moveToEnd = (node) => {
        // if node is tail do nothing 
        if (node == this.tail) return null            
        nodeValue = node.value

        // Removes the input node from its current spot in the List
        // if node is head 
        if (node == this.head) this.removeFromHead()
        else {
            node.delete()
            this.length -= 1
        }

        // inserts it as the new tail node of the List
        this.addToTail(nodeValue)
}
    delete = (node) => {
        this.length -= 1

        // if neither head nor tail do nothing 
        if (!this.head && !this.tail) return null

        // Removes a node from the list
        // handles cases where the node was the head or the tail
        // if node = tail set to nothing (empty)
        if (this.head == this.tail) {
            this.head = null
            this.tail = null
        } else if (this.head == node) {
        // if head = node, set head to next node, then delete node
            this.head = node.next
            node.delete()
        } else if (this.tail == node) {
        // if tail = node, set tail to previous node, then delete node
            this.tail = node.prev
            node.delete()
        } else node.delete()
}
    get getMax() {
        // if no head  
        if (!this.head) return null
        
        // save value of head and current head into a variable
        headValue = this.head.value
        currentHead = this.head

        // Returns the highest value currently in the list
        while (currentHead) {
            // if current head value > saved head value 
                // save current head value as head value
            if (currentHead.value > headValue) headValue = currentHead.value
            // save next head as current head and loop 
            currentHead = currentHead.next
        }
        return headValue
}
        isPresent = (value) => this.indexOf(value) !== -1
        get len() { return this.length }
}

const newQueue = new Queue()
console.log(`Is it a Queue?  YES:  ${Queue.isQueue(newQueue)}`)
console.log(`Is queue empty?  YES:  ${newQueue.isEmpty}`)
newQueue.enqueue('Hello world')
newQueue.enqueue(42)
newQueue.enqueue({ a: 6, b: 7 })
console.log(`The length of queue is 3:  ${newQueue.len}`)
console.log(`Is queue empty?  NO:  ${newQueue.isEmpty}`)
console.log(`Give me the last one:  ${newQueue.last}`)
console.log(`Pop the latest - Hello world:  ${newQueue.dequeue()}`)
console.log(`Pop the latest - 42:  ${newQueue.dequeue()}`)
console.log(`Pop the latest - { a: 6, b: 7 }:  ${newQueue.dequeue()}`)
console.log(`Is queue empty?  YES:  ${newQueue.isEmpty} = ${JSON.stringify(newQueue)}`);