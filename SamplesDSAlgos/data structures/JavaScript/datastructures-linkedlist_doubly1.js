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

function Node2(nodeData) {
  this.data = nodeData;
  this.previous = null;
  this.next = null;
}

class DoublyLinkedList2 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.llLength = 0;
  }
  addToHead = (newValue) => {
    console.log('addToHead');
    let nodeNew = new Node(newValue);
    this.llLength++;
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
  addToTail = (nodeData) => {
    const newNode = new Node(nodeData);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.llLength++;
  }
  remove = (nodeData) => {
    let current = this.head;
    while (current) {
      if (current.data = nodeData) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        }
        else if (current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        }
        else if (current === this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        }
        else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.llLength--;
      }
      current = current.next;
    }
  }
  insertAfter = (nodeData, toNodeData) => { 
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const newNode = new Node(nodeData);
        if (current === this.tail)this.addToTail(nodeData);
        else {
          current.next.previous = newNode;
          newNode.previous = current;
          newNode.next = current.next;
          current.next = newNode;
          this.llLength++;
        }
      }
      current = current.next;
    }
  }
  traverse = (fn) => { 
    let current = this.head;
    while (current) {
      if (fn) fn(current);
      current = current.next;
    }
  }
  traverseReverse = (fn) => { 
    let current = this.tail;
    while (current) {
      if (fn) fn(current);
      current = current.previous;
    }
  }
  getLength = () => this.llLength;
  printNodes = () => { 
    let string = '';
    let current = this.head;
    while (current) {
      string += `${current.data} `;
      current = current.next;
    }
    console.log(string.trim());
  }
}


function Node1(data) {
  this.data = data;
  this.previous = null;
  this.next = null;
}
class DoublyLinkedList1 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.numberOfValues = 0;
  }
  add = (data) => {
    const node = new Node1(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfValues++;
  }
  remove = (data) => {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head && current === this.tail) {
          this.head = null;
          this.tail = null;
        } else if (current === this.head) {
          this.head = this.head.next;
          this.head.previous = null;
        } else if (current === this.tail) {
          this.tail = this.tail.previous;
          this.tail.next = null;
        } else {
          current.previous.next = current.next;
          current.next.previous = current.previous;
        }
        this.numberOfValues--;
      }
      current = current.next;
    }
  }
  insertAfter = (data, toNodeData) => {
    let current = this.head;
    while (current) {
      if (current.data === toNodeData) {
        const node = new Node1(data);
        if (current === this.tail) this.addToTail(data);
        else {
          current.next.previous = node;
          node.previous = current;
          node.next = current.next;
          current.next = node;
          this.numberOfValues++;
        }
      }
      current = current.next;
    }
  }
  traverse = (fn) => {
    let current = this.head;
    while (current) {
      if (fn) fn(current);
      current = current.next;
    }
  }
  traverseReverse = (fn) => {
    let current = this.tail;
    while (current) {
      if (fn) fn(current);
      current = current.previous;
    }
  }
  llLength = () => this.numberOfValues;
  print = () => {
    let string = '';
    let current = this.head;
    while (current) {
      string += `${current.data} `;
      current = current.next;
    }
    console.log(string.trim());
  }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.printNodes(); // => ''
doublyLinkedList.addToTail(1);
doublyLinkedList.addToTail(2);
doublyLinkedList.addToTail(3);
doublyLinkedList.addToTail(4);
doublyLinkedList.printNodes(); // => 1 2 3 4
console.log('length is 4:', doublyLinkedList.getLength()); // => 4
doublyLinkedList.remove(3); // remove value
doublyLinkedList.printNodes(); // => 1 2 4
doublyLinkedList.remove(9); // remove non existing value
doublyLinkedList.printNodes(); // => 1 2 4
doublyLinkedList.remove(1); // remove head
doublyLinkedList.printNodes(); // => 2 4
doublyLinkedList.remove(4); // remove tail
doublyLinkedList.printNodes(); // => 2
console.log('length is 1:', doublyLinkedList.getLength()); // => 1
doublyLinkedList.remove(2); // remove tail, the list should be empty
doublyLinkedList.printNodes(); // => ''
console.log('length is 0:', doublyLinkedList.getLength()); // => 0
doublyLinkedList.addToTail(2);
doublyLinkedList.addToHead(6);
doublyLinkedList.printNodes(); // => 2 6
doublyLinkedList.insertAfter(3, 2);
doublyLinkedList.printNodes(); // => 2 3 6
doublyLinkedList.traverseReverse(node => {
  console.log(node.data);
});
doublyLinkedList.insertAfter(4, 3);
doublyLinkedList.printNodes(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
doublyLinkedList.printNodes(); // => 2 3 4 6
doublyLinkedList.insertAfter(5, 4);
doublyLinkedList.insertAfter(7, 6); // insertAfter the tail
doublyLinkedList.printNodes(); // => 2 3 4 5 6 7
doublyLinkedList.addToHead(8); // add node with normal method
doublyLinkedList.printNodes(); // => 2 3 4 5 6 7 8
console.log('length is 7:', doublyLinkedList.getLength()); // => 7
doublyLinkedList.traverse(node => {
  node.data = node.data + 10;
});
doublyLinkedList.printNodes(); // => 12 13 14 15 16 17 18
doublyLinkedList.traverse(node => {
  console.log(node.data);
}); // => 12 13 14 15 16 17 18
console.log('length is 7:', doublyLinkedList.getLength()); // => 7
doublyLinkedList.traverseReverse(node => {
  console.log(node.data);
}); // => 18 17 16 15 14 13 12
doublyLinkedList.printNodes(); // => 12 13 14 15 16 17 18
console.log('length is 7:', doublyLinkedList.getLength()); // => 7