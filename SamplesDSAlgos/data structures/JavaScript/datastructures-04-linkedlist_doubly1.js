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

class Node1 {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList1 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push = (valueToAdd) => {
    const newNode = new Node(valueToAdd);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }
  pop = () => {
    if (this.size === 0) return null;
    const temp = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.previous;
      this.tail.next = null;
      temp.previous = null;
    }
    this.size--;
    return temp;
  }
  shift = () => {
    if (this.size === 0) return null;
    const temp = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.previous = null;
      temp.next = null;
    }
    this.size--;
    return temp;
  }
  unshift = (valueToAdd) => {
    const newNode = new Node(valueToAdd);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.size++;
    return this;
  }
  indexOf = (element) => {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if (current.element === element) return count;
      count++;
      current = current.next;
    }
    return -1;
  }
  getLength = () => this.size;
  getLast = () => {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  printNodes = () => {
    let string = `{ \n`;
    let count = 0;
    let current = this.head;
    while (current) {
      string += `${count}: ${current.element}, \n`;
      count++;
      current = current.next;
    }
    string = `${string.trim()} }`;
    return string;
  }
  isEmpty = () => this.size === 0;
  traverse = (fn) => {
    let current = this.head;
    while (current) {
      if (fn) fn(current)
      current = current.next;
    }
  }
  traverseReverse = (fn) => {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    let count = this.size - 1;
    while (count > -1) {
      if (fn) fn(current)
      current = current.previous;
      count--;
    }
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push = (valueToAdd) => {
    const newNode = new Node(valueToAdd);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }
  pop = () => { 
    if (this.size === 0) return null; 
    let current = this.tail;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.previous;
      this.tail.next = null;
      current.previous = null;
    }
    this.size--;
    return current;
  }
  shift = () => {
    if (this.size === 0) return null; 
    let current = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
      this.head.previous = null;
      current.next = null;
    }
    this.size--;
    return current;
  }
  unshift = (valueToAdd) => {
    const newNode = new Node(valueToAdd);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
    }
    this.size++;
    return this;
  }
  indexOf = (element) => {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      if (current.element === element) return count;
      count++;
      current = current.next;
    }
    return -1;
  }
  getLength = () => this.size;
  getLast = () => {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  printNodes = () => {
    let count = 0;
    let string = `{ `;
    let current = this.head;
    while (current) {
      string += `${count}: ${current.element}, `;
      count++;
      current = current.next;
    }
    string = `${string.trim()} }`;
    return string;
  }
  isEmpty = () => this.size === 0;
  traverse = (fn) => {
    let current = this.head;
    while (current) {
      if (fn) fn(current);
      current = current.next;
    }
  }
  traverseReverse = (fn) => {
    let current = this.getLast();
    let count = this.size - 1;
    while (count > -1) {
      if (fn) fn(current);
      current = current.previous;
      count--;
    }
  }
}


/*
class Node {
  constructor() {}
}
class DoublyLinkedList {
  constructor() {}
  push = () => {}
  pop = () => {}
  shift = () => {}
  unshift = () => {}
  indexOf = () => {}
  getLength = () => {}
  getLast = () => {}
  printNodes = () => {}
  isEmpty = () => {}
  traverse = () => {}
  traverseReverse = () => {}
}
*/
const doublyLinkedList = new DoublyLinkedList();
console.log(`printNodes = ${doublyLinkedList.printNodes()}`); // => ''
doublyLinkedList.push(1);
doublyLinkedList.unshift(2);
doublyLinkedList.push(3);
doublyLinkedList.unshift(4);
doublyLinkedList.push(5);
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 4 2 1 3 5
console.log('length is 5:', doublyLinkedList.getLength()); // => 5
doublyLinkedList.pop();
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 4 2 1 3
doublyLinkedList.shift();
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 2 1 3
doublyLinkedList.pop();
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 2 1
doublyLinkedList.shift();
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 1
doublyLinkedList.pop(); // should be empty
console.log(`printNodes empty = ${doublyLinkedList.printNodes()}`);// => ''
console.log('length is 0:', doublyLinkedList.getLength()); // => 0
doublyLinkedList.push(2);
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 2
doublyLinkedList.unshift(3);
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 3 2
console.log(`-------------traverse-------------`);
doublyLinkedList.traverse(node => console.log(node.element)); // => 3 2
console.log(`-------------traverseReverse-------------`);
doublyLinkedList.traverseReverse(node => console.log(node.element)); // 2 3
doublyLinkedList.push(4);
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 3 2 4
doublyLinkedList.unshift(5);
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 5 3 2 4
doublyLinkedList.push(5);
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 5 3 2 4 5
doublyLinkedList.unshift(7);
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 7 5 3 2 4 5
doublyLinkedList.push(8);
console.log(`printNodes = ${doublyLinkedList.printNodes()}`); // 7 5 3 2 4 5 8
console.log(`-------------traverse-------------`);
doublyLinkedList.traverse(node => console.log(node.element));
console.log(`-------------traverseReverse-------------`);
doublyLinkedList.traverseReverse(node => console.log(node.element));
console.log(`printNodes = ${doublyLinkedList.printNodes()}`);// => 7 5 3 2 4 5 8
console.log('length is 7:', doublyLinkedList.getLength()); // => 7