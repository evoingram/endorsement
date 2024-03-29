
/* HEAP SORT MAX
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

heapify1 = (arr, heapSize, rootIndex) => {
    let largestItemIndex = rootIndex;  // Initialize largest as root
    let leftCIndex = 2 * rootIndex + 1;     // left = 2*i + 1
    let rightCIndex = 2 * rootIndex + 2;    // right = 2*i + 2

    // check if left child of root exists and is greater than root
    let rootVal = arr[rootIndex];
    if (leftCIndex < heapSize && rootVal < arr[leftCIndex]) {
        largestItemIndex = leftCIndex
    }
    // check if right child of root exists and is greater than root
    if (rightCIndex < heapSize && arr[largestItemIndex] < arr[rightCIndex]) {
        largestItemIndex = rightCIndex;
    }

    // if largest & root indexes don't match, swap them
    if (largestItemIndex != rootIndex) {
        let temp = arr[rootIndex]; 
        arr[rootIndex] = arr[largestItemIndex]; 
        arr[largestItemIndex] = temp; 
        // heapify the root
        heapify(arr, heapSize, largestItemIndex);
    }
}
// main function to sort an array of given size
heapSort1 = (arr) => {
    // build a max heap
    for (let x = 0; x < arr.length; x++) { //2 - 1, -1, -1
        heapify(arr, arr.length, x);
    }
    // One by one extract elements
    for (let x = arr.length - 1; x > -1; x--) {
        let temp = arr[0]; // swap
        arr[0] = arr[x]; 
        arr[x] = temp; 
        heapify(arr, x, 0);
    }
}
heapify2 = (oa, hs, ri) => {
    let lii = ri;
    let lci = 2 * ri + 1;
    let rci = 2 * ri + 2;
    let rv = oa[ri];
    if (lci < hs && rv < arr[lci]) {
        lii = lci;
    }
    if (rci < hs && arr[lii] < arr[rci]) {
        lii = rci;
    }
    if (lii !== ri) {
        let temp = arr[ri];
        arr[ri] = arr[lii];
        arr[lii] = temp;
        heapify(arr, hs, lii);
    }
}
heapSort2 = (oa) => {
    for (let x = 0; x < oa.length; x++) heapify(oa, oa.length, x);
    for (let x = oa.length - 1; x > -1; x--) {
        let temp = oa[0];
        oa[0] = oa[x];
        oa[x] = temp;
        heapify(oa, x, 0);
    }
} 
heapSort3 = (oa) => {
    for (let x = 0; x < oa.length; x++) heapify(oa, oa.length, x);
    for (let x = oa.length - 1; x > -1; x--) {
        let temp = oa[x];
        oa[0] = oa[x];
        oa[x] = temp;
        heapify(oa, x, 0);
    }
} 
heapify3 = (oa, hs, ri) => {
    let lii = ri;
    let lci = 2 * ri + 1;
    let rci = 2 * ri + 2;
    let rv = oa[ri];
    if (lci < hs && rv < oa[lci]) lii = lci;
    if (rci < hs && oa[lii] < oa[rci]) lii = rci;
    if (lii !== ri) {
        let temp = oa[ri];
        oa[ri] = oa[lii];
        oa[lii] = temp;
        heapify(oa, hs, lii);
    }
}
heapSort = (oa) => {
    for (let x = 0; x < oa.length; x++) heapify(oa, oa.length, x);
    for (let x = oa.length - 1; x > -1; x--) {
        let temp = oa[0];
        oa[0] = oa[x];
        oa[x] = temp;
        heapify(oa, x, 0);
    }
} 
heapify = (oa, hs, ri) => {
    let lii = ri;
    let lci = 2*ri + 1;
    let rci = 2*ri + 2;
    let rv = oa[ri];
    if (lci < hs && rv < oa[lci]) lii = lci;
    if (rci < hs && oa[lii] < oa[rci]) lii = rci;
    if (lii !== ri) {
        let temp = oa[ri];
        oa[ri] = oa[lii];
        oa[lii] = temp;
        heapify(oa, hs, lii);
    }
}
// heapSort = (oa) => {} heapify = () => {}
arr = [12, 11, 13, 5, 6, 7]
console.log(`Original array is ${arr}.`);
heapSort(arr);
console.log(`Sorted array is   ${arr}.`);

// contributed by Mohit Kumra