/*
binary heap:    binary tree, similar to BSTs
heap property:  states that, for any node in the heap, value of node = larger than values 
    of its children if they exist
heapify:        once heap constructed, removing item done in constant time because 
    you need to find next largest node to move to root process

heaps implemented using array
    visualize heap as binary tree
    start at top of tree
    root node = 1st element of array
    second-level 1st node = 2nd element
    goes left to right, then down

pseudocode:
    1. Store reference to first heap element.
    2. Set value of first heap element to value of last heap element.
    3. Pop from heap's storage array to remove last heap element.
    4. In a loop:
        A. Have first new heap element check its children using given 
            formulas.
        B. If either of element's children are larger, swap heap value
            of parent node with value of larger child's value via their
            respective indices.
    5. Continue this loop until element is in spot where neither of its 
        children are larger than it or it's reached a spot where it has
        no children.

how to access in O(1):
    if we know element index up front
    if we know key of value up front
    root off tree always (entry point of tree)

how heap sort works
    construct internal priority queue
    remove one item at a time and stick it at end
    find next largest item in priority queue

heap sort process
    make array max heap
    loop over array
        dequeue root node (gives you largest item)
        swap with last item in array
    after dequeueing each item, run heapify again to find next root node
    on next loop, dequeue root node & swap with second to last item in array
    run heapify again
    once items run out, you now have sorted array

binary tree represented as array
    for any index of an array x, its left child is stored @ 2x+1, right @ 2x+2
    root node always 0
    root node's left child always @ 1
    root node's right child always @ 2
    1's left @ 3, right @ 4
*/

// HEAP SORT:
// data structure optimized for retrieving either maximal or minimal values of a dataset
// all about maximizing priority
// binary tree data structure centered around the heap property
// always satisfies the heap property
// root element of heap is max value of all heap elements
// array representing the data structure
// has to be sorted in particular way to represent that tree priority queues often 
// represented as heaps
// often these terms used interchangeably
// priority queues are often heaps; easy to tell largest number
// none of other guaranteed, but once you dequeue, easy to find next item in queue
// combining of tree & array based approaches doesn't make heap a particularly intuitive
// data structure to understand & grasp
// maximally efficient at what they do
// very flexible since we can generalize idea of priority to many different contexts
// arrays well-suited to storing heaps not just because off constant-time access to any element,
// but also we can more easily swap elements in different positions throughout heap easily, 
// again due to array indexing
// can use queue 

// to fetch a node's parent, floor((x-1)/2)
// emulates a binary tree structure of a heap using an array, with added benefit of 
// now-constant-time access to any element in heap that comes with array indexing

// when using BST, problem is we only have direct access to node
// to construct max heap, run heapify starting @ array middle and work backwards to root.

// time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n log(n))
// space complexity:  O(1)

class MinHeap1 {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.heapSize = 0;
        this.heap = [];
        this.FRONT = 1;
        this.heap[0] = -1 * maxSize;
    }
    // return position of parent for node currently at pos
    parent = (pos) => Math.floor(pos / 2);
    // return position of left child for node currently at pos
    leftC = (pos) => 2 * pos;
    // return position of right child for node currently at pos
    rightC = (pos) => (2 * pos) + 1;
    // returns true if the passed node is a leaf node
    isLeaf = (node) => {
        if (node >= (Math.floor(this.heapSize / 2)) && node <= this.heapSize) return true;
        return false
    }
    // function to swap two nodes of the heap
    swap = (firstN, secondN) => {
        let temp = this.heap[firstN];
        this.heap[firstN] = this.heap[secondN];
        this.heap[secondN] = temp;
    }
    // function to heapify the node at pos
    minHeapify = (node) => {
        // if the node is a non-leaf node and greater than any of its child
        if (!this.isLeaf(node)) {
            if (this.heap[node] > this.heap[this.leftC(node)] ||
                this.heap[node] > this.heap[this.rightC(node)]) {
                // swap with and heapify left child
                if (this.heap[this.leftC(node)] < this.heap[this.rightC(node)]) {
                    this.swap(node, this.leftC(node));
                    this.minHeapify(this.leftC(node));
                }
                // swap with and heapify right child
                else {
                    this.swap(node, this.rightC(node));
                    this.minHeapify(this.rightC(node));
                }
            }
        }
    }
    // function to insert a node into the heap
    insert = (element) => {
        // if heap size >= max size, return nothing
        if (this.heapSize >= this.maxSize) return;
        // else add one to heap size
        this.heapSize += 1;
        // set newly added heap element as current element
        this.heap[this.heapSize] = element;
        // set current item index as new heap size
        let cIndex = this.heapSize;

        // while value @ current index < current index's parent
        while (this.heap[cIndex] < this.heap[this.parent(cIndex)]) {
            // swap value @ current index with value @ parent
            this.swap(cIndex, this.parent(cIndex))
            // set current index as parent
            cIndex = this.parent(cIndex)
        }
    }
    // function to print the contents of the heap
    printHeap = () => {
        let floor = (Math.floor(this.heapSize / 2)) + 1;
        let parentVal, parentText, leftCVal, leftCText, rightCVal, rightCText;
        for (let x = 1; x < floor; x++) {
            parentVal = this.heap[x];
            parentText = ` PARENT : ${parentVal}`;
            leftCVal = this.heap[2 * x];
            leftCText = ` LEFT CHILD : ${leftCVal}`;
            rightCVal = this.heap[2 * x + 1];
            rightCText = ` RIGHT CHILD : ${rightCVal}`;
            console.log(parentText + leftCText + rightCText);
        }
    }
    // function to build the min heap using the min_heapify function
    minHeap = () => {
        let floorHeapSize = Math.floor(this.heapSize / 2)
        for (let x = floorHeapSize; x > -1; x--) {
            this.minHeapify(x);
        }
    }
    // function to remove and return the minimum element from the heap
    remove = () => {
        let popped = this.heap[this.FRONT];
        this.heap[this.FRONT] = this.heap[this.heapSize];
        this.heapSize -= 1;
        this.minHeapify(this.FRONT);
        return popped;
    }
}
class MinHeap2 {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.heapSize = 0;
        this.heap = [];
        this.FRONT = 1;
        this.heap[0] = -1 * maxSize;
    }
    parent = (pos) => Math.floor(pos / 2);
    leftC = (pos) => 2 * pos;
    rightC = (pos) => (2 * pos) + 1;
    isLeaf = (node) => {
        let floor = (Math.floor(this.heapSize / 2));
        if (node >= floor && node <= this.heapSize) return true;
        return false
    }
    swap = (firstN, secondN) => {
        let temp = this.heap[firstN];
        this.heap[firstN] = this.heap[secondN];
        this.heap[secondN] = temp;
    }
    minHeapify = (node) => {
        if (!this.isLeaf(node)) {
            if (
                this.heap[node] > this.heap[this.leftC(node)] ||
                this.heap[node] > this.heap[this.rightC(node)]
            ) {
                if (this.heap[this.leftC(node)] < this.heap[this.rightC(node)]) {
                    this.swap(node, this.leftC(node));
                    this.minHeapify(this.leftC(node));
                } else {
                    this.swap(node, this.rightC(node));
                    this.minHeapify(this.rightC(node));
                }
            }
        }
    }
    insert = (element) => {
        if (this.heapSize >= this.maxSize) return;
        this.heapSize += 1;
        this.heap[this.heapSize] = element;
        let cIndex = this.heapSize;
        while (this.heap[cIndex] < this.heap[this.parent(cIndex)]) {
            this.swap(cIndex, this.parent(cIndex));
            cIndex = this.parent(cIndex);
        }
    }
    printHeap = () => {
        let floor = (Math.floor(this.heapSize / 2)) + 1;
        let parentVal, parentText, leftCVal, leftCText, rightCVal, rightCText;
        for (let x = 1; x < floor; x++) {
            parentVal = this.heap[x];
            parentText = ` PARENT : ${parentVal}`;
            leftCVal = this.heap[2 * x];
            leftCText = ` LEFT CHILD : ${leftCVal}`;
            rightCVal = this.heap[2 * x + 1];
            rightCText = ` RIGHT CHILD : ${rightCVal}`;
            console.log(parentText + leftCText + rightCText);
        }
    }
    minHeap = () => {
        let floorHeapSize = Math.floor(this.heapSize / 2)
        for (let x = floorHeapSize; x > -1; x--) {
            this.minHeapify(x);
        }
    }
    remove = () => {
        let popped = this.heap[this.FRONT];
        this.heap[this.FRONT] = this.heap[this.heapSize];
        this.heapSize -= 1;
        this.minHeapify(this.FRONT);
        return popped;
    }
}
class MinHeap3 {
    constructor(max) {
        this.max = max;
        this.hsize = 0;
        this.heap = [];
        this.FRONT = 1;
        this.heap[0] = -1 * max;
    }
    parent = (pos) => Math.floor(pos / 2);
    leftC = (pos) => 2 * pos;
    rightC = (pos) => (2 * pos) + 1;
    isLeaf = (node) => {
        let fl = (Math.floor(this.hsize / 2));
        if (node >= fl && node <= this.hsize) return;
        return false;
    }
    swap = (firstN, secondN) => {
        let temp = this.heap[firstN];
        this.heap[firstN] = this.heap[secondN];
        this.heap[secondN] = temp;
    }
    minHeapify = (node) => {
        if (!(this.isLeaf(node))) {
            if(
                this.heap[node] > this.heap[this.leftC(node)] || 
                this.heap[node] > this.heap[this.rightC(node)]
            ) {
                if (this.heap[this.leftC(node)] < this.heap[this.rightC(node)]) {
                    this.swap(node, this.leftC(node));
                    this.minHeapify(this.leftC(node));
                } else {
                    this.swap(node, this.rightC(node));
                    this.minHeapify(this.rightC(node));
                }
            }
        }
    }
    insert = (element) => {
        if (this.hsize >= this.max) return;
        this.hsize++;
        this.heap[this.hsize] = element;
        let ci = this.hsize;
        while (this.heap[ci] < this.heap[this.parent(ci)]) {
            this.swap(ci, this.parent(ci));
            ci = this.parent(ci);
        }
    }
    printHeap = () => {
        let fl = (Math.floor(this.hsize / 2)) + 1;
        let pval, ptext, lcval, lctext, rcval, rctext;
        for(let x = 1; x < fl; x++) {
            pval = this.heap[x];
            ptext = `PARENT : ${pval}`;
            lcval = this.heap[2 * x];
            lctext = `LEFT CHILD:  ${lcval}`;
            rcval = this.heap[2 * x + 1];
            rctext = `RIGHT CHILD:  ${rcval}`;
            console.log(`${ptext} ${lctext} ${rctext}`);
        }
    }
    minHeap = () => {
        let flhsize = Math.floor(this.hsize / 2);
        for (let x = flhsize; x > -1; x--) this.minHeapify(x);
    }
    remove = () => {
        let popped = this.heap[this.FRONT];
        this.heap[this.FRONT] = this.heap[this.hsize];
        this.hsize--;
        this.minHeapify(this.FRONT);
        return popped;
    }
}

class MinHeap {
    constructor(max) {
        this.max = max;
        this.hsize = 0;
        this.heap = [];
        this.FRONT = 1;
        this.heap[0] = -1 * max;

    }
    parent = (pos) => { Math.floor(pos / 2)};
    leftC = (pos) => 2 * pos;
    rightC = (pos) => (2 * pos) + 1;
    isLeaf = (node) => {
        let fl = (Math.floor(this.hsize / 2));
        if (node >= fl && node <= this.hsize) return;
        return false;
    };
    swap = (firstN, secondN) => {
        let temp = this.heap[firstN];
        this.heap[firstN] = this.heap[secondN];
        this.heap[secondN] = temp;
    }
    minHeapify = (node) => {
        if (!(this.isLeaf(node))) {
            if(
                this.heap[node] > this.heap[this.leftC(node)] || 
                this.heap[node] > this.heap[this.rightC(node)]
            ) {
                if (this.heap[this.leftC(node)] < this.heap[this.rightC(node)]) {
                    this.swap(node, this.leftC(node));
                    this.minHeapify(this.leftC(node));
                } else {
                    this.swap(node, this.rightC(node));
                    this.minHeapify(this.rightC(node));
                }
            }
        }
    }
    insert = (element) => {
        if (this.hsize >= this.max) return;
        this.hsize++;
        this.heap[this.hsize] = element;
        let ci = this.hsize;
        while (this.heap[ci] < this.heap[this.parent(ci)]) {
            this.swap(ci, this.parent(ci));
            ci = this.parent(ci);
        }
    }
    printHeap = () => {
        let fl = (Math.floor(this.hsize / 2)) + 1;
        let pval, ptxt, lcval, lctxt, rcval, rctxt;
        for (let x = 1; x < fl; x++) {
            pval = this.heap[x];
            ptxt = `PARENT:  ${pval}`;
            lcval = this.heap[2 * x];
            lctxt = `LEFT CHILD:  ${rcval}`;
            rcval = this.heap[2 * x + 1];
            rctxt = `RIGHT CHILD:  ${rcval}`;
            console.log(`${ptxt} ${lctxt} ${rctxt}`);
        }
    }
    minHeap = () => {
        let flhsize = Math.floor(this.hsize / 2);
        for (let x = flhsize; x > -1; x--) this.minHeapify(x);
    }
    remove = () => {
        let popped = this.heap[this.FRONT];
        this.heap[this.FRONT] = this.heap[this.hsize];
        this.hsize--;
        this.minHeapify(this.FRONT);
        return popped;
    }
}

/*
class MinHeap {
    constructor(maxSize) {}
    parent = (pos) => {};
    leftC = (pos) => {};
    rightC = (pos) => {};
    isLeaf = (node) => {}
    swap = (firstN, secondN) => {}
    minHeapify = (node) => {}
    insert = (element) => {}
    printHeap = () => {}
    minHeap = () => {}
    remove = () => {}
}
*/
console.log(`The min heap is;`);
minHeap = new MinHeap(15)
minHeap.insert(5)
minHeap.insert(3)
minHeap.insert(17)
minHeap.insert(10)
minHeap.insert(84)
minHeap.insert(19)
minHeap.insert(6)
minHeap.insert(22)
minHeap.insert(9)
minHeap.minHeap()
minHeap.printHeap();
console.log(`The min val is ${minHeap.remove()}.`);
