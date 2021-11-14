
// HASH TABLE
// array with elements indexed by hashed key
// associative arrays and dictionaries
// objects
// caches (memcached)
// dynamic programming, memoization
// send key through hashing function (MD5, SHA1, etc.), which converts to addressable space (index)
// powerful for maps because now our key points to where our object is being stored
// powerful for sets because we can check where if anything exists at that memory address and, if 
// so, then it exists; if not, then key is not in set
// no look-up cost when deleting or adding
// not useful for something with an order
// need sufficiently large amount of memory to store all objects without collisions
// can balloon quickly
// need good hashing algorithm that spits out viable table address
// needs several qualities:
// idempotent (critical), good distribution of values, performant

// key/value data storage & retrieval
// data stored as array
// key converted to integer via hash functino
// hashed key converted to array index via modulo function

// hash function:  one-way mapping from arbitrary data to fixed data size & type
// different hash functions with different attributes:
// deterministic
// uniform distribution
// non-invertible
// continuous versus non-continuous
// hash-table collision:  when two keys hash to same index
// collisions are unavoidable
// open addressing & linked-list chaining to avoid collisions
// linked-list chaining:  elements in hash table are stored as linked lists
// when retrieving a value, traverse down linked list until you find matching key
// hash-table resizing:  can occur when load factor passes certain threshhold
// create new hash table with double capacity
// copy elements from old to new one at a time
// resizing = O(n) & occurs at O(log (n)) frequency
// load factor:  number of entries / hash-table capacity

// time complexity:   Avg   |   Worst
// Access:       N/A    |   N/A
// Search:       O(1)   |   O(n)
// Insertion:    O(1)   |   O(n)
// Deletion:     O(1)   |   O(n)

// space complexity:  O(n)

class HashTable1 {
    constructor(size) {
        this.numberOfValues = 0;
        this.size = size;
        this.values = {};
    }
    add = (key, value) => {
        let hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.numberOfValues++;
        }
        this.values[hash][key] = value;
    }
    remove = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) &&
            this.values[hash].hasOwnProperty(key)
        ) {
            delete this.values[hash][key];
            this.numberOfValues--;
        }
    }
    calculateHash = (key) => {
        if (!this.head) return 17 % this.size;
        return key.toString().length % this.size;
    }
    search = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) &&
            this.values[hash].hasOwnProperty(key)
        ) return this.values[hash][key];
        return null;
    }
    getValues = () => {
        let values = [];
        for (const value in this.values) {
            for (const key in this.values[value]) {
                values.push(this.values[value][key]);
            }
        }
        return values;
    }
    keys = () => {
        let keys = [];
        for (const value in this.values) {
            for (const key in this.values[value]) {
                keys.push(key);
            }
        }
        return keys;
    }
    length = () => { return this.size }
    print = () => {
        let string = '{ ';
        for (const value in this.values) {
            for (const key in this.values[value]) {
                string += `${key}: ${this.values[value][key]}, `;
            }
        }
        string = `${string.trim()} }`;
        return string;
    }
} class HashTable2 {
    constructor(size) {
        this.values = {};
        this.size = size;
        this.numberOfValues = 0;
    }
    add = (key, value) => {
        let hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.numberOfValues++;
        }
        this.values[hash][key] = value;
    }
    remove = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(key) &&
            this.values[hash].hasOwnProperty(key)
        ) {
            delete this.values[hash][key];
            this.numberOfValues--;
        }
    }
    calculateHash = (key) => {
        if (!key) return 17 % this.size;
        return key.toString().length % this.size;
    }
    search = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) &&
            this.values[hash].hasOwnProperty(key)
        ) return this.values[hash][key];
        return null;
    }
    getValues = () => {
        let values = [];
        for (const value in this.values) {
            for (const key in this.values[value]) {
                values.push(this.values[value][key]);
            }
        }
        return values;
    }
    keys = () => {
        let keys = [];
        for (const value in this.values) {
            for (const key in this.values[value]) {
                keys.push(key);
            }
        }
        return keys;
    }
    length = () => this.size;
    print = () => {
        let string = `{ }`;
        for (const value in this.values) {
            for (const key in this.values[value]) {
                string += `${key}: ${this.values[value][key]}`;
            }
        }
        string = `${string.trim()} }`;
    }
} class HashTable3 {
    constructor(size) {
        this.values = {};
        this.size = size;
        this.numberOfValues = 0;
    }
    add = (key, value) => {
        let hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.numberOfValues++;
        }
        this.values[hash][key] = value;
    }
    remove = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) &&
            this.values[hash].hasOwnProperty(key)
        ) {
            delete this.values[hash][key];
            this.numberOfValues--;
        }
    }
    calculateHash = (key) => {
        if (!key) return 17 % this.size;
        return key.toString().length % this.size;
    }
    search = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) &&
            this.values[hash].hasOwnProperty(key)
        ) return this.values[hash][key];
        return null;
    }
    getValues = () => {
        let values = [];
        for (const value in this.values) {
            for (const key in this.values[value]) {
                values.push(this.values[value][key]);
            }
        }
        return values;
    }
    keys = () => {
        let keys = [];
        for (const value in this.values) {
            for (const key in this.values[value]) {
                keys.push(key);
            }
        }
        return keys;
    }
    length = () => this.size;
    print = () => {
        let string = `{ `;
        for (const value in this.values) {
            for (const key in this.values[value]) {
                string += `${key}:  ${this.values[value][key]}, `;
            }
        }
        string = `${string.trim()} }`;
        return string;
    }
}
class HashTable {
    constructor(size) {
        this.numberOfValues = 0;
        this.size = size;
        this.values = {};
    }
    add = (key, value) => {
        let hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.numberOfValues++;
        }
        this.values[hash][key] = value;
    }
    remove = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) &&
            this.values[hash].hasOwnProperty(key)
        ) {
            delete this.values[hash][key];
            this.numberOfValues--;
        }
    }
    calculateHash = (key) => {
        if (!key) return 17 % this.size;
        return key.toString().length % this.size;
    }
    search = (key) => {
        let hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) && 
            this.values[hash].hasOwnProperty(key)
        ) return this.values[hash][key];
        return null;
    }
    getValues = () => {
        let values = [];
        for (const value in this.values) {
            for (const key in this.values[value]) {
                values.push(this.values[value][key]);
            }
        }
        return values;
    }
    keys = () => {
        let keys = [];
        for (const value in this.values) {
            for (const key in this.values[value]) {
                keys.push(key);
            }
        }
        return keys;
    }
    length = () => this.size;
    print = () => { 
        let string = `{ `;
        for (const value in this.values) {
            for (const key in this.values[value]) {
                string += `${key}:  ${this.values[value][key]}`;
            }
        }
        string = `${string.trim()} }`;
    }
}
/*
class HashTable {
    constructor() {}
    add = () => {}
    remove = () => {}
    calculateHash = () => {}
    search = () => {}
    getValues = () => {}
    keys = () => {}
    length = () => {}
    print = () => {}
}
*/
const hashTable1 = new HashTable(3);
hashTable1.add('first', "hi");
hashTable1.add('second', 2);
hashTable1.add('third', 3);
hashTable1.add('fourth', 4);
hashTable1.add('fifth', 5);
console.log(`print = ${hashTable1.print()}`); // => 2 4 1 3 5
console.log('length gives 5:', hashTable1.length()); // => 5
console.log('search second gives 2:', hashTable1.search('second')); // => 2
hashTable1.remove('fourth');
hashTable1.remove('first');
console.log(`print = ${hashTable1.print()}`); // => 2 3 5
console.log('length gives 3:', hashTable1.length()); // => 3
console.log(`keys = ${hashTable1.keys()}`);
console.log(`getValues = ${hashTable1.getValues()}`);

let ht = new HashTable(4);
ht.add("Canada", 300);
ht.add("Germany", 100);
ht.add("Italy", 50);
console.log(ht.search("Italy"));
console.log(`keys = ${ht.keys()}`);
console.log(`getValues = ${ht.getValues()}`);

ht = new HashTable(17);
ht.add("line_1", "'Twas brillig, and the slithy toves")
ht.add("line_2", "Did gyre and gimble in the wabe:")
ht.add("line_3", "All mimsy were the borogoves,")
ht.add("line_4", "And the mome raths outgrabe.")
ht.add("line_5", '"Beware the Jabberwock, my son!')
ht.add("line_6", "The jaws that bite, the claws that catch!")
ht.add("line_7", "Beware the Jubjub bird, and shun")
ht.add("line_8", 'The frumious Bandersnatch!"')
ht.add("line_9", "He took his vorpal sword in hand;")
ht.add("line_10", "Long time the manxome foe he sought--")
ht.add("line_11", "So rested he by the Tumtum tree")
ht.add("line_12", "And stood awhile in thought.")

console.log("-------------------------")
for (let x = 0; x < ht.size; x++) console.log(`searching for line_${x}:  ${ht.search(`line_${x}`)}`)
console.log(`keys = ${ht.keys()}`);
console.log(`getValues = ${ht.getValues()}`);
console.log(`print = ${ht.print()}`);
console.log("")

let hashTable = new HashTable();
hashTable.add(null, 0);
hashTable.add("Apple", 1);
hashTable.add("Banana", 3);
hashTable.add("Carrot", 3);
hashTable.add("Apple", null);
hashTable.add("Date", 5);
// console.log(hashTable);
console.log(`Searching for carrot = ${hashTable.search("Carrot")}`);
console.log(`keys = ${hashTable.keys()}`);
console.log(`getValues = ${hashTable.getValues()}`);