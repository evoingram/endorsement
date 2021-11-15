/*
Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.

Example 1:
    Input: root = [1,2,3,4,null,2,4,null,null,4]
    Output: [[2,4],[4]]

Example 2:
    Input: root = [2,1,1]
    Output: [[1]]

Example 3:
    Input: root = [2,2,2,3,null,3,null]
    Output: [[2,3],[3]]

Constraints:
    The number of the nodes in the tree will be in the range [1, 10^4]
    -200 <= Node.val <= 200
*/

let findDuplicateSubtrees1 = (root) => {
    // could use hash table
    // as you traverse subtrees, add each subtree to hash table as key & +1 to the value
    // then return all hash table keys w/ 2+ values
};

class HashTable {
    constructor(size) {
        this.size = size;
        this.numberOfValues = 0;
        this.values = {};
    }
    calculateHash = (key) => {
        if (!key) return 17 % this.size;
        return key.toString().length % this.size;
    }
    add = (key, value) => {
        let hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) this.values[hash] = {};
        if (!this.values[hash].hasOwnProperty(key)) this.numberOfValues++;
        this.values[hash][key] = value;
    }
    searchByKey = (key) => {
        let hash = this.calculateHash(key);
        for (const value in this.values) {
            for (const currentKey in this.values[value]) {
                if (currentKey === hash) {
                    return this.values[hash][key];
                }
            }
        }
    }
    searchByValue = (value) => {
        for (const currentValue in this.values) {
            for (const key in this.values[currentValue]) {
                if (this.values[currentValue][key] === value) {
                    return key;
                }
            }
        }
    }
    twoValueKeys = () => {
        let values = [];
        for (const value in this.values) {
            for (const key in this.values[value]) {
                if (this.values[value][key] >= 2) {
                    values.push(key);
                }
            }
        }
        return values;
    }

    getDuplicateSubtrees = () => {
        let ht = new HashTable(this.numberOfValues);
        for (const value in this.values) {
            for (const key in this.values[value]) {
                ht.add()
            }
        }
    }
}

class Node {
    constructor(element) {
        this.element = element;
        this.previous = null;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push = (element) => {
        const node = new Node(element);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.size++;
        return this;
    }
    unshift = (element) => {
        const node = new Node(element);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        this.size++;
        return this;
    }
}

const findDuplicateSubtrees = root => {
    const dfs = node => {
        if (!node) return '#';
        const key = node.val + "/"+ dfs(node.left) + "/" + dfs(node.right);
        seen[key] ? seen[key]++ : seen[key] = 1;
        if (seen[key] === 2) result.push(node);
        return key;
    }
    const result = [], seen = {};
    dfs(root);
    return result;
};

console.log(`Output: [[2,4],[4]] = ${findDuplicateSubtrees([1,2,3,4,null,2,4,null,null,4])}`);
console.log(`Output: [[1]] = ${findDuplicateSubtrees([2,1,1])}`);
console.log(`Output: [[2,3],[3]] = ${findDuplicateSubtrees([2,2,2,3,null,3,null])}`);
// console.log(findDuplicateSubtrees());