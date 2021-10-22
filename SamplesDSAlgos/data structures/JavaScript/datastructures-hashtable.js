
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

class HashTable {
    constructor() {
      this.values = {};
      this.length =  0;
      this.size =  0;
    }

    hashIndex = (key) => this.calculateHash(key) % this.size;
    
    // return number of slots in hash table 
    getNumSlots = () => {

        this.length = this.values.length
        return this.length
    }

    // return the load factor for this hash table.
    getLoadFactor = () => {
        this.getNumSlots()
        return this.length / this.size
    }

    // adjust this hash table's load factor
    adjustLoadFactor = () => {

        loadFactor = this.getLoadFactor()

        // automatically rehash the table to double its previous size.
        if (loadFactor > 0.7) this.resize(this.size * 2)
        
        // automatically rehash the table to half its previous size, down to a minimum of 8 slots.
        else if (loadFactor < 0.2) this.resize(this.size/2)
    }
  
    calculateHash(key) {
      return key.toString().length % this.size;
    }
  
    // add value w/ key to hash table
    add(key, value) {
        /*
        Store the value with the given key.
        Hash collisions should be handled with Linked List Chaining.
        */
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
        /*
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        */

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
        let nextStorage = [null] * newCapacity
        let currentNode;
        // for each node in storage right now
        for (let x = 0; x < this.values.length; x++)  {
            if (currentNode == values[x]) {
                // if the current one exists 
                if (currentNode) {
                    // get hashed index of current node[0]
                    keyHashed = this.hashIndex(currentNode[0])
                    // use hashed key as index in next storage & set as current node
                    nextStorage[keyHashed] = currentNode
                }
            }
        }
        // set current storage to next storage  
        this.values = nextStorage
    }
    
    // get value w/ key to hash table
    get = (key) => {
        // Retrieve the value stored with the given key.
        // Returns None if the key is not found.

        // get tree head 
        currentNode = this.head

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
  
  //create object of type hash table
  let ht = new HashTable();
  //add data to the hash table ht
  ht.add("Canada", "300");
  ht.add("Germany", "100");
  ht.add("Italy", "50");
  
  //search
  console.log(ht.search("Italy"));

ht = new HashTable();

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

console.log("")

// Test storing beyond capacity
for (let x = 0; x < 13; x++) console.log(ht.search(`line_${x}`))

// Test resizing
let oldCapacity = ht.getNumSlots()
ht.resize(ht.size * 2)
let newCapacity = ht.getNumSlots()

console.log(`Resized from ${oldCapacity} to ${newCapacity}.\n`)

// Test if data intact after resizing
for (let y = 0; y < 13; y++) console.log(ht.search(`line_${y}`))

console.log("")