// Write a function to count the number of nodes in a given singly linked list.


// time complexity:  mostly O(1), O(n) at worst for loop
// space complexity:  O(1)

// Node class 
class Node {
    // Function to initialise the node object 
    constructor(data) {
        this.data = data // Assign data 
        this.next = null // Initialize next as null 
    }
}

// Linked List class contains a Node object 
class LinkedList {

    // Function to initialize head 
    constructor() {
        this.head = null
    }

    // This function is in LinkedList class. It inserts 
    // a new node at the beginning of Linked List. 
    pushToLL = (newData) => {

        // 1 & 2: Allocate the Node & 
        //     Put in the data 
        let newNode = new Node(newData)

        // 3. Make next of new Node as head 
        newNode.next = this.head

        // 4. Move the head to point to new Node 
        this.head = newNode
    }

    // This function counts number of nodes in Linked List 
    // iteratively, given 'node' as starting node. 
    getCount = () => {
        let currentNode = this.head // Initialise temp 
        let count = 0 // Initialise count 

        // Loop while end of linked list is not reached 
        while (currentNode) {
            count += 1
            currentNode = currentNode.next
        }
        return count
    }
}

// testing
let llist = new LinkedList()
llist.pushToLL(1)
llist.pushToLL(3)
llist.pushToLL(1)
llist.pushToLL(2)
llist.pushToLL(1)
console.log("Count of nodes is :", llist.getCount())


// Recursive

// A complete working Python program to find length of a 
// Linked List recursively 

// Linked List class contains a Node object 
class LinkedListR {

    // Function to initialize head 
    constructor() {
        this.head = null
    }

    // This function is in LinkedList class. It inserts 
    // a new node at the beginning of Linked List. 
    pushToLL = (newData) => {

        // 1 & 2: Allocate the Node & 
        //        Put in the data 
        let newNode = new Node(newData)

        // 3. Make next of new Node as head 
        newNode.next = this.head

        // 4. Move the head to point to new Node 
        this.head = newNode
    }
    // This function counts number of nodes in Linked List 
    // recursively, given 'node' as starting node. 
    getCountRec = (node) => {
        // Base case 
        if (!node) return 0
        else return 1 + this.getCountRec(node.next)
    }

    // A wrapper over getCountRec() 
    getCount = () => this.getCountRec(this.head)
}

// testing
llist = new LinkedListR()
llist.pushToLL(1)
llist.pushToLL(3)
llist.pushToLL(1)
llist.pushToLL(2)
llist.pushToLL(1)
console.log('Count of nodes is :', llist.getCount())
