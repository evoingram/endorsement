
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
        this.values = {};
        this.numberOfValues = 0;
        this.size = size;
    }
    add = (key, value) => {
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.numberOfValues++;
        }
        this.values[hash][key] = value;
    }
    remove = (key) => {
        const hash = this.calculateHash(key);
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
        console.log(`search function is searching for ${key}`);
        const hash = this.calculateHash(key);
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
    length = () => this.numberOfValues;
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
}
class HashTable2 {
    constructor(size) {
        this.size = size;
        this.numberOfValues = 0;
        this.values = {};
    }
    add = (key, value) => {
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) {
            this.values[hash] = {};
        }
        if (!this.values[hash].hasOwnProperty(key)) {
            this.numberOfValues++;
        }
        this.values[hash][key] = value;
    }
    remove = (key) => {
        const hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty[hash] && 
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
        const hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty(hash) && 
            this.values[hash].hasOwnProperty(key)
        ) return this.values[hash][key];
        return null;
    }
    getValues = () => {
        let values = [];
        for (const value in this.values){
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
    length = () => this.numberOfValues;
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
}
class HashTable {
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
        const hash = this.calculateHash(key);
        if (
            this.values.hasOwnProperty[hash] && 
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
    length = () => this.numberOfValues;
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
/*
class HashTable3 {
    constructor(size = 17) { // Default: 17, prime number
        this.storage = Array.from({ length: size }, () => []); //In JS an empty array takes 32 bytes, depends on engine. If `size` is not large we can initialize seperate chaining by default 
        this.size = size;
        this.capacity = 17;
    }

    // A simple hash function.  Works only for String input.
    // Use well researched hash functions algorithms like FNV Hash, MurmurHash, SDBM or 
    // create your own if you need to handle billions of keys.
    hash = (str) => {
        let finalHash = 0;
        let capacityLimit = this.capacity;
        for (let i = 0; i < Math.min(str && str.length || 0, this.size); i++) { //O(K)
            const charCode = str.charCodeAt(i) - 96;
            finalHash = 31 * finalHash + charCode;
        }
        if (this.size / capacityLimit <= 0.25) this.resize(capacityLimit / 2);
        if (this.size / capacityLimit >= 0.75) this.resize(capacityLimit * 2);
        return finalHash;
    }

    // Adds a Key-Value pair into the HashTable
    // Uses Seperate Chaining to handle Collision. 
    // In case of duplicate key, corressponding value gets updated
    put = (key, val) => {
        let hash = this.hash(key);
        let index = hash & (this.size - 1);
        // if(!this.storage[index]) this.storage[index] = [];
        // Takes, O(k), where k=number of entries in a bucket. Chain should not be too long if hash() distribution works fine. 
        // But for keys, like "A", "B",.. they might get clustered and chain can be long
        for (let entry of this.storage[index]) {
            if (entry[0] === key) { entry[1] = val; return; }
        }
        this.storage[index].push([key, val]);
    }

    // Returns the value stored against the provided key `key`, in the HashTable
    get = (key) => {
        let hash = this.hash(key);
        let index = hash & (this.size - 1);
        let bucket = this.storage[index];
        if (!bucket || bucket.length === 0) return undefined;
        for (let entry of bucket) {
            if (entry[0] === key) return entry[1];
        }
        return undefined;
    }

    // Returns an array of keys in the HashTable. Keys are unique by design.
    keys = () => {
        let keys = [];
        for (let bucket of this.storage) {
            if (bucket && bucket.length > 0) {
                for (let entry of bucket) {
                    keys.push(entry[0]);
                }
            }
        }
        return keys;
    }

    // Returns an array of values present in the HashTable.
    values = () => {
        let values = [];
        for (let bucket of this.storage) {
            if (bucket && bucket.length > 0) {
                for (let entry of bucket) {
                    values.push(entry[1]);
                }
            }
        }
        return values;
    }

    resize = (newCapacity) => {
        let oldStorage = this.storage;
        let storageLimit = newCapacity;
        this.storage = [];
        // Go thru each bucket in the storage
        for (var i = 0; i < oldStorage.length; i++) {
            var bucket = oldStorage[i];
            if (bucket) {
                // Reassign for each bucket
                for (var j = 0; j < bucket.length; j++) {
                    var index = getIndexBelowMaxForKey(bucket[j][0], storageLimit);
                    var newBucket = storage[index];
                    if (newBucket) {
                        newBucket.push([bucket[j][0], bucket[j][1]]);
                    } else {
                        newBucket = [];
                        newBucket.push([bucket[j][0], bucket[j][1]]);
                    }
                }
            }
        }
        return this.storage;
    }
}

class HashTable2 {
    constructor() {
        this.values = {};
        this.length = 0;
        this.capacity = 0;
    }
    hashIndex = (key) => this.calculateHash(key) % this.capacity;

    getNumSlots = () => {
        this.length = this.values.length;
        return this.length;
    }
    getLoadFactor = () => {
        this.getNumSlots();
        return this.length / this.capacity;
    }
    adjustLoadFactor = () => {
        let loadFactor = this.getLoadFactor();
        // automatically rehash the table to double its previous size.
        if (loadFactor > 0.7) this.resize(this.capacity * 2);
        // automatically rehash the table to half its previous size, down to a minimum of 8 slots.
        else if (loadFactor < 0.2) this.resize(this.capacity / 2);
    }
    calculateHash = (key) => { return key.toString().length % this.capacity };
    add = (key, value) => {
        // Store the value with the given key.
        // Hash collisions should be handled with Linked List Chaining.
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) this.values[hash] = {};
        if (!this.values[hash].hasOwnProperty(key)) this.length++;
        this.values[hash][key] = value;
    }
    search = (key) => {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) return this.values[hash][key]
        else return null;
    }
    delete = (key) => {
        let currentNode = this.head;
        if (currentNode) {
            while (currentNode) {
                if (currentNode.key == key) currentNode.key = null
                else currentNode = currentNode.next
            }
        }
        else console.log('No keys found for that value.')
        return null
    }
    resize = (newCapacity) => {
        // set next storage capacity 
        let nextStorage = [null] * newCapacity;
        let currentNode;
        // for each node in storage right now
        for (let x = 0; x < this.values.length; x++) {
            currentNode = this.values[x];
            // get hashed index of current node[0]
            keyHashed = this.hashIndex(currentNode[0]);
            // use hashed key as index in next storage & set as current node
            nextStorage[keyHashed] = currentNode;
        }
        // set current storage to next storage  
        this.values = nextStorage;
    }
    get = (key) => {
        let currentNode = this.head;
        if (currentNode) {
            while (currentNode) {
                if (currentNode.key == key) return currentNode.value
                else currentNode = currentNode.next;
            }
        }
        else console.log('No keys found for that value.');
        return null
    }
}
class HashTable1 {
    constructor() {
        this.values = {};
        this.length = 0;
        this.capacity = 0;
    }
    hashIndex = (key) => this.calculateHash(key) % this.capacity;
    // return number of slots in hash table 
    getNumSlots = () => {
        this.length = this.values.length
        return this.length
    }
    // return the load factor for this hash table.
    getLoadFactor = () => {
        this.getNumSlots();
        return this.length / this.capacity;
    }
    // adjust this hash table's load factor
    adjustLoadFactor = () => {
        loadFactor = this.getLoadFactor()
        // automatically rehash the table to double its previous size.
        if (loadFactor > 0.7) this.resize(this.capacity * 2)
        // automatically rehash the table to half its previous size, down to a minimum of 8 slots.
        else if (loadFactor < 0.2) this.resize(this.capacity / 2)
    }
    calculateHash(key) {
        return key.toString().length % this.capacity;
    }
    // add value w/ key to hash table
    add(key, value) {
        // Store the value with the given key.
        // Hash collisions should be handled with Linked List Chaining.
        const hash = this.calculateHash(key);
        if (!this.values.hasOwnProperty(hash)) this.values[hash] = {};
        if (!this.values[hash].hasOwnProperty(key)) this.length++;
        this.values[hash][key] = value;
    }
    search(key) {
        const hash = this.calculateHash(key);
        if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
            return this.values[hash][key];
        } else return null;
    }
    // delete value w/ key from hash table
    delete = (key) => {
        // Remove the value stored with the given key.
        // Print a warning if the key is not found.

        // get tree head
        let currentNode = this.head

        // if tree head exists 
        if (currentNode) {
            // while it exists change to none, else change to next 
            while (currentNode) {
                // if its key matches submitted key, change to none 
                if (currentNode.key == key) currentNode.key = null
                // else change to next node 
                else currentNode = currentNode.next
            }
        }
        // if tree head nonexistent, tell user 
        else console.log('No keys found for that value.')

        return null
    }
    // resize hash table 
    resize = (newCapacity) => {
        // set next storage capacity 
        let nextStorage = [null] * newCapacity;
        let currentNode;
        // for each node in storage right now
        for (let x = 0; x < this.values.length; x++) {
            currentNode = this.values[x];
            // get hashed index of current node[0]
            keyHashed = this.hashIndex(currentNode[0]);
            // use hashed key as index in next storage & set as current node
            nextStorage[keyHashed] = currentNode;
        }
        // set current storage to next storage  
        this.values = nextStorage;
    }

    // get value w/ key to hash table
    get = (key) => {
        currentNode = this.head;

        // if it exists 
        if (currentNode) {

            // while it exists return its value, else change to next
            while (currentNode) {
                if (currentNode.key == key) return currentNode.value
                else currentNode = currentNode.next
            }
        }
        // if tree head nonexistent, tell user
        else console.log('No keys found for that value.')

        return null
    }
}
*/

//create object of type hash table
let ht = new HashTable(4);
//add data to the hash table ht
ht.add("Canada", 300);
ht.add("Germany", 100);
ht.add("Italy", 50);

//search
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

// Test storing beyond capacity
for (let x = 0; x < ht.size; x++) console.log(`searching for line_${x}:  ${ht.search(`line_${x}`)}`)
console.log(`keys = ${ht.keys()}`);
console.log(`getValues = ${ht.getValues()}`);
console.log(`print = ${ht.print()}`);

// Test resizing
// let oldCapacity = ht.capacity;
// console.log(`${ht.size} * 2 = ${ht.size * 2}`);
// ht.resize(ht.size * 2)
// let newCapacity = ht.capacity;

// console.log(`Resized from ${oldCapacity} to ${newCapacity}.\n`)

// Test if data intact after resizing
// for (let y = 0; y < ht.size; y++) console.log(ht.search(`line_${y}`))

console.log("")

let hashTable = new HashTable();
hashTable.add(null, 0);
hashTable.add("Apple", 1);
hashTable.add("Banana", 3);
hashTable.add("Carrot", 3);
hashTable.add("Apple", null);
hashTable.add("Date", 5);
// console.log(hashTable);
console.log(`Searching for ${hashTable.search("Carrot")}`);
console.log(`keys = ${hashTable.keys()}`);
console.log(`getValues = ${hashTable.getValues()}`);