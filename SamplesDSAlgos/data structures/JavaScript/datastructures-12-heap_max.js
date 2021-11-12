
// MAX HEAP
// time complexity:   O()
// space complexity:  O()

class Heap {
    constructor() {
        this.storage = []
    }
    
    // insert node at end of array and shift item up if appropriate
    insert = (x) => {
        // add value to end of array 
        this.storage.append(x)
        // bubble it up appropriately 
        this.bubbleUp(this.storage.length-1)
    }

    // delete last node  
    delete = () => {
        let first = this.storage[0]

        // set first node as last node
        let nodeLast = this.storage[this.storage.length-1]
        this.storage[0] = nodeLast

        // delete last node 
        this.storage.splice(this.storage.length-1, 1)

        // shift down as appropriate 
        if (this.storage.length) this.siftDown(0)

        // return original first node 
        return first
    }

    // get first item of array, which is also max value
    get getMax() {
        return this.storage[0]
    }

    // return length of storage array 
    get getSize() {
        return this.storage.length
    }

    // if current index greater than parent index, swap them; recursively run

    bubbleUp = (currentIndex) => {
        // get parent index
        // check if current index greater than parent index
            // if it is, swap them
            // recursively run this
    }

    siftDown = (index) => {
        // assign to variables nodes converted to array/indexes:
        // (left 2x+1 | right 2x+2) minus one for index number 
        let ln = index * 2
        let rn = index * 2 + 1

        // shifting default to not done 
        let shiftingDone = false

        // running this while swapping not complete 
        while (!shiftingDone) {
            // try to swap this way first 
            try {
                // if current storage[index] less than storage[leftnode] OR current storage[index] less than storage[rightnode]
                if (this.storage[index] < this.storage[ln] || this.storage[index] < this.storage[rn]) {
                    // if storage[leftnode] > storage[rightnode]
                    if (this.storage[ln] > this.storage[rn]) {
                        // swap current node & left node
                        this.storage[index], this.storage[ln] = this.storage[ln], this.storage[index]
                        // set current index as leftnode
                        index = ln
                        // get new left node 
                        ln = ln * 2
                        // get new right node 
                        rn = ln * 2 + 1
                    }
                    // if storage[leftnode] < storage[rightnode]
                    else {
                        // swap current node & right node 
                        this.storage[index], this.storage[rn] = this.storage[rn], this.storage[index]
                        // set current index as rightnode
                        index = rn
                        // get new left node 
                        ln = rn * 2
                        // get new right node 
                        rn = rn * 2 + 1
                    }
                }
                // shifting complete
                else shiftingDone = true
            }
            // if it errors out, swap like this
            catch {
                try {
                    // if storage[index] less than storage[leftnode]
                    if (this.storage[index] < this.storage[ln]) {
                        // swap
                        self.storage[index], self.storage[ln] = self.storage[ln], self.storage[index]
                        // set current index as left node
                        index = ln
                        // shifting complete
                        shiftingDone = true
                    }
                    // shifting complete
                    else shiftingDone = true
                }
                // shifting complete
                catch {
                    shiftingDone = true
            }
            }
        }
    }
}

            
for (const [index, value] of this.storage.entries()) this.bubbleUp(index);
