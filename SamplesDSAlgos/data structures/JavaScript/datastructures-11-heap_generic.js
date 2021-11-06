
// GENERIC HEAP
// time complexity:   O()
// space complexity:  O()

class Heap {
    constructor(comparator = lambda(a), b = a > b) {
        this.storage = []
        this.comparator = comparator
    }

    // insert a node 
    insert = (x) => {
        // get length of storage array 
        length = this.storage.length
        // add value to end of array 
        this.storage.append(x)
        // bubble it up appropriately 
        this._bubble_up(length)
    }

    // delete last node  
    delete = () => {
        // if storage empty return null 
        if (this.storage.length == 0) return null
        // save max node value
        let maxNodeValue = this.storage[0]
        // set max node as last node 
        this.storage[0] = this.storage[-1]
        // delete last node 
        this.storage.splice(-1, 1)
        // shift down as appropriate 
        this._sift_down(0)
        // return original max node value 
        return maxNodeValue
    }

    // return max node unless empty 
    get_priority = () => {
        // if storage empty return null
        if (this.storage.length == 0) return null
        // else return max node 
        return this.storage[0]
        }

    // return size of storage array 
    getSize = () => {
        return this.storage.length
    }

    // shift node up as appropriate 
    _bubble_up = (index) => {
        
         // if node is first (0), return null 
        if (index == 0) return null

        // if node is second+ (1+), do the following
        while (index) {
            // save parent 
            p = parent(index)         
            current_index_value, current_parent_value = this.storage[index], this.storage[p]

            // if current value is greater than parent, swap
            if (this.comparator(current_index_value, current_parent_value)) {
                // assign current value to new parent and parent value to current index
                np, this.storage[index] = current_index_value, current_parent_value
                // set parent value as new parent 
                this.storage[p] = np
                // set index to parent index 
                index = p
            }
            // if complete
            else index = null
        }
    }

    // shift node down as appropriate 
    _sift_down = (index) => {
         // if submitted index does NOT exist, return null 
        if (index >= this.storage.length) return null
        // condition within loop to exit 
        while (True) {

            // get right child index & value if exist; else set as null
            index_child_right = right_child(index)
            if (index_child_right < this.storage.length) {
                value_child_right = this.storage[index_child_right] 
            } 
            else value_child_right = null

            // get left child index & value if exist; else set as null 
            index_child_left = left_child(index)
            if (index_child_left < this.storage.length) value_child_left = this.storage[index_child_left]
            else value_child_left = null

            // compare to each other
            max_value_index = null
            max_value = null

            // if right value and left value empty, break loop 
            if (value_child_right == null && value_child_left == null) break
            // if only right child empty, use left 
            else if (value_child_right == null) {
                max_value_index = index_child_left
                max_value = value_child_left
            }
            // if only left child empty, use right 
            else if (value_child_left == null) {
                max_value_index = index_child_right
                max_value = value_child_right
            }
            // if both are NOT empty, do this stuff
            else {
                // set max value & its index; use right if right is greater; else use left 
                if (this.comparator(value_child_right, value_child_left)) max_value_index = index_child_right
                else max_value_index = index_child_left
                if (this.comparator(value_child_right, value_child_left)) max_value = value_child_right 
                else max_value = value_child_left
            }

            current_value = this.storage[index]

            // if max value > current value, swap
            if (this.comparator(max_value, current_value)) {
                // swap values
                this.storage[max_value_index], this.storage[index] = current_value, max_value
                // set index as max value's index 
                index = max_value_index
            }
            // if no swaps, exit loop 
            else break
            }
    }

    // (left 2x+1 | right 2x+2) minus one for index number
    // get index of left child node
    left_child = (current_node) => 2*current_node+1

    // (left 2x+1 | right 2x+2) minus one for index number
    // get index of right child node
    right_child = (current_node) => 2*current_node+2
    
    // get index of parent node
    parent = (current_node) => (current_node-1)//2
}