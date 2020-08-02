# Notes about individual data structures and algorithms may be found directly within samples.

**theoretical CS**:  writing big O complexity analysis<br>
**experimental CS**:  run function with 100k inputs & measure how long it took<br>

# Dynamic Programming

- way of making algorithm more efficient by storing some of the intermediate results
- works really well when your algorithm has a lot of repetitive computations

# Sorting Algorithms

|           |  Time Best  | Time Average | Time Worst |Worst Space|
|:---------:|:-----------:|:------------:|:----------:|:---------:|
|   Quick   | O(n log(n)) | O(n log(n)) | O(n^2) | O(log(n)) |
|   Merge   | O(n log(n)) | O(n log(n)) | O(n^2) |    O(n)   |
|    Heap   |     O(n)    | O(n log(n)) | O(n^2) |    O(1)   |
|   Bubble  |     O(n)    |    O(n^2)   | O(n^2) |    O(1)   |
| Insertion |     O(n)    |    O(n^2)   | O(n^2) |    O(1)   |
| Selection |    O(n^2)   |    O(n^2)   | O(n^2) |    O(1)   |
|    Tree   | O(n log(n)) | O(n log(n)) | O(n^2) |    O(n)   |
|   Bucket  |    O(n+k)   |    O(n+k)   | O(n^2) |    O(n)   |
|   Radix   |    O(nk)    |    O(nk)    |  O(nk) |   O(n+k)  |
|  Counting |    O(n+k)   |    O(n+k)   | O(n+k) |    O(k)   |

# Data Structures

|   Data Structure   | Average Access | Worst Access | Average Search | Worst Search | Average Insertion | Worst Insertion | Average Deletion | Worst Deletion | Worst Space |
|:------------------:|:--------------:|--------------|:--------------:|--------------|:-----------------:|-----------------|:----------------:|----------------|-------------|
|        Array       |      O(1)      | O(1)         |      O(n)      | O(n)         |        O(n)       | O(n)            |       O(n)       | O(n)           | O(n)        |
|        Stack       |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
|        Queue       |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
| Singly Linked List |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
| Doubly Linked List |      O(n)      | O(n)         |      O(n)      | O(n)         |        O(1)       | O(1)            |       O(1)       | O(1)           | O(n)        |
|      Skip List     |    O(log(n))   | O(n)         |    O(log(n))   | O(n)         |     O(log(n))     | O(n)            |     O(log(n))    | O(n)           | O(n log(n)) |
|     Hash Table     |       N/A      | N/A          |      O(1)      | O(n)         |        O(1)       | O(n)            |       O(1)       | O(n)           | O(n)        |
| Binary Search Tree |    O(log(n))   | O(n)         |    O(log(n))   | O(n)         |     O(log(n))     | O(n)            |     O(log(n))    | O(n)           | O(n)        |
|      AVL Tree      |    O(log(n))   | O(log(n))    |    O(log(n))   | O(log(n))    |     O(log(n))     | O(log(n))       |     O(log(n))    | O(log(n))      | O(n)        |

## Time Definitions
- **constant**:  does not scale with input, will take same amount of time
  - for any input size n, constant time performs same number of operations every time
- **logarithmic**:  increases number of operations it performs as logarithmic function of input size n
  - function log n grows very slowly, so as n gets longer, number of operations the algorithm needs to perform doesn't increase very much
- **linear**:  increases number of operations it performs as linear function of input size n
  - number of additional operations needed to perform grows in direct proportion to increase in input size n
- **log-linear**:  increases number of operations it performs as log-linear function of input size n
  - looking over every element and doing work on each one
- **quadratic**:  increases number of operations it performs as quadratic function of input size n
- **exponential**:  increases number of operations it performs as exponential function of input size n
  - number of nested loops increases as function of n
- **polynomial**:  as size of input increases, runtime/space used will grow at a faster rate
- **factorial**:  as size of input increases, runtime/space used will grow astronomically even with relatively small inputs
- **rate of growth**:  how fast a function grows with input size

| Big O | Classification | Rate |
|:-----:|:--------------:|:----:|
| O(c) | constant | Better |
| O(log(n)) | logarithmic |  |
| O(n) | linear |  |
| O(n log(n)) | log-linear |  |
| O(n^c) | quadratic |  |
| O(c^n) | exponential | Worst |

## Doubly Linked Lists
 * The `ListNode` class, which represents a single node in the doubly-linked list, has already been implemented for you. Inspect this code and try to understand what it is doing to the best of your ability.
 * The `DoublyLinkedList` class itself should have the methods: `add_to_head`, `add_to_tail`, `remove_from_head`, `remove_from_tail`, `move_to_front`, `move_to_end`, `delete`, and `get_max`.
   * `add_to_head` replaces the head of the list with a new value that is passed in.
   * `add_to_tail` replaces the tail of the list with a new value that is passed in.
   * `remove_from_head` removes the head node and returns the value stored in it.
   * `remove_from_tail` removes the tail node and returns the value stored in it.
   * `move_to_front` takes a reference to a node in the list and moves it to the front of the list, shifting all other list nodes down. 
   * `move_to_end` takes a reference to a node in the list and moves it to the end of the list, shifting all other list nodes up. 
   * `delete` takes a reference to a node in the list and removes it from the list. The deleted node's `previous` and `next` pointers should point to each afterwards.
   * `get_max` returns the maximum value in the list. 
 * The `head` property is a reference to the first node and the `tail` property is a reference to the last node.
 
![Image of Doubly Linked List](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/610px-Doubly-linked-list.svg.png)

## Binary Search Trees
* Should have the methods `insert`, `contains`, `get_max`.
  * `insert` adds the input value to the binary search tree, adhering to the rules of the ordering of elements in a binary search tree.
  * `contains` searches the binary search tree for the input value, returning a boolean indicating whether the value exists in the tree or not.
  * `get_max` returns the maximum value in the binary search tree.
  * `for_each` performs a traversal of _every_ node in the tree, executing the passed-in callback function on each tree node value. There is a myriad of ways to perform tree traversal; in this case any of them should work. 

![Image of Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Binary_search_tree.svg/300px-Binary_search_tree.svg.png)

## Heaps
* Should have the methods `insert`, `delete`, `get_max`, `_bubble_up`, and `_sift_down`.
  * `insert` adds the input value into the heap; this method should ensure that the inserted value is in the correct spot in the heap
  * `delete` removes and returns the 'topmost' value from the heap; this method needs to ensure that the heap property is maintained after the topmost element has been removed. 
  * `get_max` returns the maximum value in the heap _in constant time_.
  * `get_size` returns the number of elements stored in the heap.
  * `_bubble_up` moves the element at the specified index "up" the heap by swapping it with its parent if the parent's value is less than the value at the specified index.
  * `_sift_down` grabs the indices of this element's children and determines which child has a larger value. If the larger child's value is larger than the parent's value, the child element is swapped with the parent.

![Image of a Heap in Tree form](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Max-Heap.svg/501px-Max-Heap.svg.png)

![Image of a Heap in Array form](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Heap-as-array.svg/603px-Heap-as-array.svg.png)

## LRU Cache
An LRU (Least Recently Used) cache is an in-memory storage structure that adheres to the [Least Recently Used](https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)) caching strategy. 

In essence, you can think of an LRU cache as a data structure that keeps track of the order in which elements (which take the form of key-value pairs) it holds are added and updated. The cache also has a max number of entries it can hold. This is important because once the cache is holding the max number of entries, if a new entry is to be inserted, another pre-existing entry needs to be evicted from the cache. Because the cache is using a least-recently used strategy, the oldest entry (the one that was added/updated the longest time ago) is removed to make space for the new entry. 

So what operations will we need on our cache? We'll certainly need some sort of `set` operation to add key-value pairs to the cache. Newly-set pairs will get moved up the priority order such that every other pair in the cache is now one spot lower in the priority order that the cache maintains. The lowest-priority pair will get removed from the cache if the cache is already at its maximal capacity. Additionally, in the case that the key already exists in the cache, we simply want to overwrite the old value associated with the key with the newly-specified value. 

We'll also need a `get` operation that fetches a value given a key. When a key-value pair is fetched from the cache, we'll go through the same priority-increase dance that also happens when a new pair is added to the cache.

Note that the only way for entries to be removed from the cache is when one needs to be evicted to make room for a new one. Thus, there is no explicit `remove` method. 

Given the above spec, try to get a working implementation that passes the tests. What data structure(s) might be good candidates with which to build our cache on top of? Hint: Since our cache is going to be storing key-value pairs, we might want to use a structure that is adept at handling those. 

---

Once you've gotten the tests passing, it's time to analyze the runtime complexity of your `get` and `set` operations. There's a way to get both operations down to sub-linear time. In fact, we can get them each down to constant time by picking the right data structures to use. 

Here are you some things to think about with regards to optimizing your implementation: If you opted to use a dictionary to work with key-value pairs, we know that dictionaries give us constant access time, which is great. It's cheap and efficient to fetch pairs. A problem arises though from the fact that dictionaries don't have any way of remembering the order in which key-value pairs are added. But we definitely need something to remember the order in which pairs are added. Can you think of some ways to get around this constraint?

## Generic Heaps
A max heap is pretty useful, but what's even more useful is to have our heap be generic such that the user can define their own priority function and pass it to the heap to use.

Augment your heap implementation so that it exhibits this behavior. If no comparator function is passed in to the heap constructor, it should default to being a max heap. Also change the name of the `get_max` function to `get_priority`.

You can test your implementation against the tests in `test_generic_heap.py`. The test expects your augmented heap implementation lives in a file called `generic_heap.py`. Feel free to change the import statement to work with your file structure or copy/paste your implementation into a file with the expected name. 

## AVL Tree
An AVL tree (Georgy Adelson-Velsky and Landis' tree, named after the inventors) is a self-balancing binary search tree. In an AVL tree, the heights of the two child subtrees of any node differ by at most one; if at any time they differ by more than one, rebalancing is done to restore this property.

We define balance factor for each node as :
```
balanceFactor = height(left subtree) - height(right subtree)
```

The balance factor of any node of an AVL tree is in the integer range [-1,+1]. If after any modification in the tree, the balance factor becomes less than −1 or greater than +1, the subtree rooted at this node is unbalanced, and a rotation is needed.

![AVL tree rebalancing](https://s3.amazonaws.com/hr-challenge-images/0/1436854305-b167cc766c-AVL_Tree_Rebalancing.svg.png)

Implement an AVL Tree class that exhibits the aforementioned behavior. The tree's `insert` method should perform the same logic as what was implemented for the binary search tree, with the caveat that upon inserting a new element into the tree, it will then check to see if the tree needs to be rebalanced.

How does the time complexity of the AVL Tree's insertion method differ from the binary search tree's?

## Stack vs Heap Memory Allocation

Memory in a C/C++ program can either be allocated on stack or heap.

### Prerequisite:  Memory layout of C program

### Stack Allocation

The allocation happens on contiguous blocks of memory. We call it stack memory allocation because the allocation happens in function call stack. The size of memory to be allocated is known to compiler and whenever a function is called, its variables get memory allocated on the stack. And whenever the function call is over, the memory for the variables is deallocated. This all happens using some predefined routines in compiler. Programmer does not have to worry about memory allocation and deallocation of stack variables.

```
int main() {
   // All these variables get memory
   // allocated on stack
   int a;
   int b[10];
   int n = 20;
   int c[n];
}
```

### Heap Allocation

The memory is allocated during execution of instructions written by programmers. Note that the name heap has nothing to do with heap data structure. It is called heap because it is a pile of memory space available to programmers to allocated and de-allocate. If a programmer does not handle this memory well, memory leak can happen in the program.

```
int main() {
   // This memory for 10 integers
   // is allocated on heap.
   int *ptr  = new int[10];
}
```

### Key Differences Between Stack and Heap Allocations

1. In a stack, the allocation and deallocation is automatically done by whereas, in heap, it needs to be done by the programmer manually.
2. Handling of Heap frame is costlier than handling of stack frame.
3. Memory shortage problem is more likely to happen in stack whereas the main issue in heap memory is fragmentation.
4. Stack frame access is easier than the heap frame as the stack have small region of memory and is cache friendly, but in case of heap frames which are dispersed throughout the memory so it cause more cache misses.
5. Stack is not flexible, the memory size allotted cannot be changed whereas a heap is flexible, and the allotted memory can be altered.
6. Accessing time of heap takes is more than a stack.

### Comparison Chart

|          PARAMETER          |                    STACK                   | HEAP                                     |
|:---------------------------:|:------------------------------------------:|------------------------------------------|
|            Basic            | Memory is allocated in a contiguous block. | Memory is allocated in any random order. |
| Allocation and Deallocation |     Automatic by compiler instructions.    | Manual by programmer.                    |
|             Cost            |                    Less                    | More                                     |
|        Implementation       |                    Hard                    | Easy                                     |
|         Access time         |                   Faster                   | Slower                                   |
|          Main Issue         |             Shortage of memory             | Memory fragmentation                     |
|    Locality of reference    |                  Excellent                 | Adequate                                 |
|         Flexibility         |                 Fixed size                 | Resizing is possible                     |
|     Data type structure     |                   Linear                   | Hierarchical                             |
