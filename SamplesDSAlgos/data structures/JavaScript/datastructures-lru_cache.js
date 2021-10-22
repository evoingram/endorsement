
// LRU CACHE
// Use two data structures to implement an LRU Cache:

    // Queue which is implemented using a doubly linked list. 
        // The maximum size of the queue will be equal to the total number of frames available (cache size). 
        // The most recently used pages will be near front endpygame.examples.aliens.main()
        // The least recently pages will be near the rear end.
    // A Hash with page number as key and address of the corresponding queue node as value.

// When a page is referenced, the required page may be in the memory. 
// If it is in the memory, we need to detach the node of the list and bring it to the front of the queue.
// If the required page is not in memory, we bring that in memory. 
// In simple words, we add a new node to the front of the queue and update the corresponding node address in the hash. 
// If the queue is full, i.e. all the frames are full, we remove a node from the rear of the queue, and 
    // add the new node to the front of the queue.

// QUEUE PORTION:

    // time complexity:   Avg   | Worst
        // Access:       O(n)   |   O(n)
        // Search:       O(n)   |   O(n)
        // Insertion:    O(1)   |   O(1)
        // Deletion:     O(1)   |   O(1)

    // space complexity:  O(n)

// HASH TABLE PORTION: 

    // time complexity:   Avg   |   Worst
        // Access:       N/A    |   N/A
        // Search:       O(1)   |   O(n)
        // Insertion:    O(1)   |   O(n)
        // Deletion:     O(1)   |   O(n)

    // space complexity:  O(n)

class LRUCache {

    constructor(limit=10) {
        // Our LRUCache class keeps track of:

        // the max number of nodes it can hold
        this.max = limit
        // a doubly-linked list that holds the key-value entries in the correct order
        this.nodeList = new DoublyLinkedList()
        // a storage dict that provides fast access to every node stored in the cache
        this.storage = {};
    }
    get = (key) => {
        if (!key in this.storage) return null
        let listValue = this.storage[key]
        if (listValue != null) {
            let lrucNode = this.nodeList.find(key)
            this.nodeList.move_to_front(lrucNode)
            return listValue
        }

        // needs to move the key-value pair to the end of the order such that 
            // the pair is considered most-recently used
        if (key in this.keys) {
            // Retrieves the value associated with the given key
            index = this.keys.index(key)
            this.keys.pop(index)
            this.keys.push(key)
            // Returns the value associated with the key
            return this.storage[key]
        }
        // Returns null if the key-value pair doesn't exist in the cache.
        else return null
    }
    set = (key, value) => {
        // Adds the given key-value pair to the cache. 
        // The newly- added pair should be considered the most-recently used entry in the cache.
        if (!key in this.storage) {
            this.storage[key] = value;
            this.node_list.add_to_head(key);
        }
        // Additionally, in the case that the key already exists in the cache, we simply want to overwrite the old value associated with the key with the newly-specified value.
        else {
            this.storage[key] = value;
            lruc_node = this.node_list.find(key)
            this.node_list.move_to_front(lruc_node)
        }
        // If the cache is already at max capacity before this entry is added, then the oldest entry in the cache needs to be removed to make room.
        if (this.node_list.length > this.max) {
            delete this.storage[this.node_list.tail.value]
            this.node_list.remove_from_tail()
        }
    }
}
