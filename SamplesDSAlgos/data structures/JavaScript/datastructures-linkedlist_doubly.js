/*
    Each ListNode holds a reference to its previous node
        as well as its next node in the List.
*/

/*
What is the difference between an array and a linked list?
    Arrays use memory differently.
    Arrays store and index elements contiguously.
    Each element of linked list is stored in a node.
        Each node has reference or pointer to next node.
    Linked lists describe lists of things in recursive fashion.
    Arrays describe lists of things in iterative fashion.
    LLs are easier to insert into & delete from middle of LL than array.
    LLs are not as cache friendly since caches are typically 
        optimized for contiguous memory accesses.
    LLs don't need to be allocated with a static amount of memory up front.
    You can keep adding elements to linked lists as much as you want; 
        can't with arrays.

What is the difference between singly and doubly linked lists?
    A singly linked list is a set of nodes where each node has two fields ‘data’ 
        and ‘link’. 
        The ‘data’ field stores actual piece of information and ‘link’ field is used 
            to point to next node. 
        Basically ‘link’ field is nothing but address only.
    A doubly linked list contains an extra pointer, typically called previous 
        pointer, together with next pointer and data which are there in singly 
        linked list.
*/

// DOUBLY LINKED LIST
// made of bunch of nodes that point to next one in list
// every node has two properties: 
// value of whatever is being stored
// pointer to next node in list
// adding and removing is easy; change next pointer on previous node (O(n)))
// similar to arrays
// commonly used for holding lists of data
// certain cases when better than array

// time complexity:   Avg   | Worst
// Access:       O(n)   |   O(n)
// Search:       O(n)   |   O(n)
// Insertion:    O(1)   |   O(1)
// Deletion:     O(1)   |   O(1)

// space complexity:  O(n)


/*
class ListNode {
    constructor() {}
    insertAfter = () => {}
    insertBefore = () => {}
    delete = () => {}
}

class DoublyLinkedList {
    constructor() {}
    addToHead = () => {}
    addToTail = () => {}
    removeFromHead = () => {}
    removeFromTail = () => {}
    moveToFront = () => {}
    moveToEnd = () => {}
    delete = () => {}
    isPresent = () => {}
    get getMax() {}
    get len() {}
}
*/

// not working
class ListNode {
    constructor(value, previous = null, next = null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }

    insertAfter = (newValue) => {
        console.log('insertAfter');
        let currentNext = this.next;
        this.next = new ListNode(newValue, this, currentNext);
        if (currentNext) currentNext.previous = this.next;
    }

    insertBefore = (newValue) => {
        console.log('insertBefore');
        let currentPrevious = this.previous;
        this.previous = new ListNode(newValue, currentPrevious, this);
        if (currentPrevious) currentPrevious.next = this.previous;
    }

    deleteListNode = () => {
        console.log('deleteListNode');
        if (this.previous) this.previous.next = this.next;
        if (this.next) this.next.previous = this.previous;
    }
}

class DoublyLinkedList {
    constructor(node = null) {
        this.head = node;
        this.tail = node;
        this.length = node != null ? 1 : 0;
    }
    addToHead = (newValue) => {
        console.log('addToHead');
        let nodeNew = new ListNode(newValue);
        this.length++;
        if (!this.head && !this.tail) {
            this.head = nodeNew;
            this.tail = nodeNew;
        }
        else {
            nodeNew.next = this.head;
            this.head.previous = nodeNew;
            this.head = nodeNew;
        }
        this.printNodes();
    }
    addToTail = (newValue) => {
        console.log('addToTail');
        let nodeNew = new ListNode(newValue);
        this.length++;
        // inserts it as the new tail of the list
        if (!this.head && !this.tail) {
            // make it head and tail
            this.head = nodeNew;
            this.tail = nodeNew;
        }
        // handle the old tail node's next pointer accordingly
        else {
            // assign tail to new next variable
            nodeNew.previous = this.tail;
            // make next tail new next var
            this.tail.next = nodeNew;
            // make tail new next var
            this.tail = nodeNew;
        }
        this.printNodes();
    }
    deleteNode = (head, x) => {
        // if list is empty
        if (head == null) return null;
        var current = head;
        var next;
        /* traverse the list up to the end */
        while (current != null) {
            // if node found with the value 'x'
            if (current.data == x) {
                // save current's next node in the pointer 'next'
                next = current.next;
                // delete the node pointed to by 'current'
                head = deleteNode(head, current);
                /* update current */
                current = next;
            }
            /* else simply move to the next node */
            else current = current.next;
        }
        return head;
    }
    removeFromHead = () => {
        console.log('removeFromHead');
        let currentHead = this.head.value;
        // if (this.head.previous) this.head.previous.next = this.head.next;
        // if (this.head.next) this.head.next.previous = this.head.previous;
        this.head.deleteNode(this.head, this.head.value);
        return currentHead;
    }
    removeFromTail = () => {
        console.log('removeFromTail');
        let currentTail = this.tail.value;
        // if (this.tail.previous) this.tail.previous.next = this.tail.next;
        // if (this.tail.next) this.tail.next.previous = this.tail.previous;
        this.deleteNode(this.head, this.tail.value);
        return currentTail;
    }
    moveToFront = (nodeToMove) => {
        console.log('moveToFront');
        let wrappedNode = new ListNode(nodeToMove);
        if (wrappedNode === this.head) return null;
        let nodeValue = wrappedNode.value;
        if (wrappedNode === this.tail) this.removeFromTail();
        else {
            this.deleteNode(this.head, nodeValue);
            this.length--;
        }
        this.addToHead(nodeValue);
    }
    moveToEnd = (nodeToMove) => {
        console.log('moveToEnd');
        let wrappedNode = new ListNode(nodeToMove);
        // if node is tail do nothing 
        if (wrappedNode === this.tail) return null;
        let nodeValue = wrappedNode.value;
        // Removes the input node from its current spot in the List
        // if node is head 
        if (wrappedNode === this.head) this.removeFromHead();
        else {
            this.deleteNode(this.tail, this.tail.value);
            this.length--;
        }
        // inserts it as the new tail node of the List
        this.addToTail(nodeValue);
    }

    deleteNode2(position = 0) {
        console.log('deleteNode');
        if (this.length === 0) {
            console.log("List is already empty");
            return;
        }
        this.length--;
        let currNode = this.head;
        if (position <= 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if (position >= this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let iter = 0;
            while (iter < position) {
                currNode = currNode.next;
                iter++;
            }
            currNode.next = currNode.next.next;
            currNode.next.prev = currNode;
        }
        return currNode;
    }
    deleteNode1 = (nodeToDelete) => {
        console.log('deleteNode');
        console.log(`checking nodeToDelete type`);
        if (!(nodeToDelete instanceof ListNode)) {
            this.printNodes();
            console.log(`Not a Linked List node!`);
            return new Error("Not a Linked List node!");
        }
        // let wrappedNode = new ListNode(nodeToDelete);
        if (!this.head && !this.tail) {
            console.log(`no nodes in list`);
            return null;
        }
        this.length--;
        if (this.head === this.tail) {
            console.log(`one node in list`);
            this.head = null;
            this.tail = null;
        } else if (this.head === nodeToDelete) {
            console.log(`else if head matches`);
            this.head = this.head.next;
            // if (this.head.previous) this.head.previous.next = this.head.next;
            // if (this.head.next) this.head.next.previous = this.head.previous;
            this.head.deleteListNode();
        } else if (this.tail === nodeToDelete) {
            console.log(`else if tail matches`);
            this.tail = nodeToDelete.previous;
            // if (this.tail.previous) this.tail.previous.next = this.tail.next;
            // if (this.tail.next) this.tail.next.previous = this.tail.previous;
            this.tail.deleteListNode();
        } else {
            console.log(`else`);
            // if (nodeToDelete.previous) nodeToDelete.previous.next = nodeToDelete.next;
            // if (nodeToDelete.next) nodeToDelete.next.previous = nodeToDelete.previous;
            nodeToDelete.deleteListNode();
        };
        this.printNodes();
    }
    isPresent = (nodeToCheck) => {
        let wrappedNode = new ListNode(nodeToCheck);
        let current = this.head;
        while (current) {
            if (current.value === wrappedNode.value) return true;
            current = current.next;
        }
        return false;
    }
    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.value}`);
            current = current.next;
        }
    }
    get getMax() {
        if (!this.head) return null
        let headValue = this.head.value;
        let currentHead = this.head;
        while (currentHead) {
            if (currentHead.value > headValue) headValue = currentHead.value;
            currentHead = currentHead.next;
        }
        return headValue;
    }
    get len() { return this.length }
}
class ListNode1 {
    constructor(value, prev = null, next = null) {
        this.value = value
        this.prev = prev
        this.next = next
    }

    /*Wrap the given value in a ListNode and insert it
    after this node. Note that this node could already
    have a next node it is point to.*/
    insertAfter = (value) => {
        let currentNext = this.next
        this.next = new ListNode(value, self, currentNext)
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

// Our doubly-linked list class
class DoublyLinkedList1 {
    constructor(node = null) {
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
        headValue = this.head.value
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
        if (!this.head && !this.tail) {
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

    isPresent = (value) => this.indexOf(value) !== -1

    printNodes = () => {
        let current = this.head;
        while (current) {
            console.log(`current value = ${current.value}`);
            current = current.next;
        }
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

    get len() { return this.length }
}

const newDoubleLinkedList = new DoublyLinkedList()
newDoubleLinkedList.addToHead(1);
newDoubleLinkedList.addToHead(2);
newDoubleLinkedList.addToTail(3);
console.log(`Testing:  Length = ${newDoubleLinkedList.len} (returns 3)`); // returns 3
console.log(`Testing:  is 2 present?  ${newDoubleLinkedList.isPresent(2)} (returns true)`); // returns true
console.log(`Testing:  what's the max?  ${newDoubleLinkedList.getMax} (returns 3)`); // returns 3
// newDoubleLinkedList.deleteNode(2);
// newDoubleLinkedList.deleteNode(3);
// console.log(`Testing:  is 2 present?  ${newDoubleLinkedList.isPresent(2)} (returns false)`); // returns false
// console.log(`Testing:  what's the new max? ${newDoubleLinkedList.getMax} (returns 1)`); // returns 1
// console.log(`Testing:  list length = ${newDoubleLinkedList.len} (returns 1)`); // returns 1
newDoubleLinkedList.addToTail(4);
newDoubleLinkedList.addToHead(5);
console.log(`Testing:  what's the tail? ${newDoubleLinkedList.tail.value} (returns 4)`); // returns 4
console.log(`Testing:  what's the head? ${newDoubleLinkedList.head.value} (returns 5)`); // returns 5
console.log(`Testing:  what's the new max? ${newDoubleLinkedList.getMax} (returns 5)`); // returns 5
console.log(`-------------------moving two nodes-----------------`);
newDoubleLinkedList.moveToFront(4);
newDoubleLinkedList.moveToEnd(5);
console.log(`Testing:  what's the tail? ${newDoubleLinkedList.tail.value} (returns 5)`); // returns 5
console.log(`Testing:  what's the head? ${newDoubleLinkedList.head.value} (returns 4)`); // returns 4
console.log(`-------------------removing head & tail-----------------`);
newDoubleLinkedList.removeFromHead();
newDoubleLinkedList.removeFromTail();
console.log(`Testing:  what's the tail? ${newDoubleLinkedList.tail.value} (returns 1)`); // returns 1 ?
console.log(`Testing:  what's the head? ${newDoubleLinkedList.head.value} (returns 1)`); // returns 1 ?
console.log(`Testing:  current length = ${newDoubleLinkedList.len} (returns 1)`); // returns 1 ?
console.log(`-------------------printing nodes-----------------`);
newDoubleLinkedList.printNodes();