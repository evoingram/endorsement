import unittest
from unittest.mock import MagicMock
from generic_heap import Heap

'''
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
'''

# HEAP SORT:
    # data structure optimized for retrieving either maximal or minimal values of a dataset
    # all about maximizing priority
    # binary tree data structure centered around the heap property
        # always satisfies the heap property
    # root element of heap is max value of all heap elements
    # array representing the data structure
    # has to be sorted in particular way to represent that tree priority queues often 
        # represented as heaps
        # often these terms used interchangeably
    # priority queues are often heaps; easy to tell largest number
        # none of other guaranteed, but once you dequeue, easy to find next item in queue
    # combining of tree & array based approaches doesn't make heap a particularly intuitive
        # data structure to understand & grasp
    # maximally efficient at what they do
    # very flexible since we can generalize idea of priority to many different contexts
    # arrays well-suited to storing heaps not just because off constant-time access to any element,
        # but also we can more easily swap elements in different positions throughout heap easily, 
            # again due to array indexing
    # can use queue 

# to fetch a node's parent, floor((x-1)/2)
    # emulates a binary tree structure of a heap using an array, with added benefit of 
        # now-constant-time access to any element in heap that comes with array indexing

# when using BST, problem is we only have direct access to node
# to construct max heap, run heapify starting @ array middle and work backwards to root.

# time complexity:  Best O(n log(n))   |   Avg O(n log(n))   |   Worst O(n log(n))
# space complexity:  O(1)

class HeapTests(unittest.TestCase):
    def setUp(self):
        self.heap = Heap()

    def test_default_heap_insert_works(self):
        self.heap.insert(6)
        self.heap.insert(8)
        self.heap.insert(10)
        self.heap.insert(9)
        self.heap.insert(1)
        self.heap.insert(9)
        self.heap.insert(9)
        self.heap.insert(5) 
        self.assertEqual(self.heap.storage, [10, 9, 9, 6, 1, 8, 9, 5])

    def test_default_get_priority_works(self):
        self.heap.insert(6)
        self.heap.insert(8)
        self.heap.insert(10)
        self.heap.insert(9)
        self.heap.insert(1)
        self.heap.insert(9)
        self.heap.insert(9)
        self.heap.insert(5)
        self.assertEqual(self.heap.get_size(), 8)
        self.assertEqual(self.heap.get_priority(), 10)

    def test_default_get_priority_after_delete(self):
        self.heap.insert(6)
        self.heap.insert(8)
        self.heap.insert(10)
        self.heap.insert(9)
        self.heap.insert(1)
        self.heap.insert(9)
        self.heap.insert(9)
        self.heap.insert(5)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 9)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 9)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 9)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 8)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 6)

    def test_default_delete_elements_in_order(self):
        self.heap.insert(6)
        self.heap.insert(7)
        self.heap.insert(5)
        self.heap.insert(8)
        self.heap.insert(10)
        self.heap.insert(1)
        self.heap.insert(2)
        self.heap.insert(5)

        descending_order = []

        while self.heap.get_size() > 0:
            descending_order.append(self.heap.delete())

        self.assertEqual(descending_order, [10, 8, 7, 6, 5, 5, 2, 1])

    def test_custom_heap_insert_works(self):
        self.heap = Heap(lambda x, y: x < y)

        self.heap.insert(6)
        self.heap.insert(8)
        self.heap.insert(10)
        self.heap.insert(9)
        self.heap.insert(1)
        self.heap.insert(9)
        self.heap.insert(9)
        self.heap.insert(5) 
        self.assertEqual(self.heap.storage, [1, 5, 9, 6, 8, 10, 9, 9])

    def test_custom_get_priority_works(self):
        self.heap = Heap(lambda x, y: x < y)

        self.heap.insert(6)
        self.heap.insert(8)
        self.heap.insert(10)
        self.heap.insert(9)
        self.heap.insert(1)
        self.heap.insert(9)
        self.heap.insert(9)
        self.heap.insert(5)
        self.assertEqual(self.heap.get_size(), 8)
        self.assertEqual(self.heap.get_priority(), 1)

    def test_custom_get_priority_after_delete(self):
        self.heap = Heap(lambda x, y: x < y)

        self.heap.insert(6)
        self.heap.insert(8)
        self.heap.insert(10)
        self.heap.insert(9)
        self.heap.insert(1)
        self.heap.insert(9)
        self.heap.insert(9)
        self.heap.insert(5)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 5)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 6)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 8)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 9)
        self.heap.delete()
        self.assertEqual(self.heap.get_priority(), 9)

    def test_custom_delete_elements_in_order(self):
        self.heap = Heap(lambda x, y: x < y)

        self.heap.insert(6)
        self.heap.insert(7)
        self.heap.insert(5)
        self.heap.insert(8)
        self.heap.insert(10)
        self.heap.insert(1)
        self.heap.insert(2)
        self.heap.insert(5)

        ascending_order = []

        while self.heap.get_size() > 0:
            ascending_order.append(self.heap.delete())

        self.assertEqual(ascending_order, [1, 2, 5, 5, 6, 7, 8, 10])

    def test_bubble_up_was_called(self):
        self.heap._bubble_up = MagicMock()
        self.heap.insert(5)
        self.assertTrue(self.heap._bubble_up.called)

    def test_sift_down_was_called(self):
        self.heap._sift_down = MagicMock()
        self.heap.insert(10)
        self.heap.insert(11)
        self.heap.delete()
        self.assertTrue(self.heap._sift_down.called)


if __name__ == '__main__':
    unittest.main()