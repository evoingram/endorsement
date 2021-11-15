/*
Design an iterator that supports the peek operation on an existing iterator 
    in addition to the hasNext and the next operations.

Implement the PeekingIterator class:

PeekingIterator(Iterator<int> nums) Initializes the object with the given integer iterator, iterator.

Note: Each language may have a different implementation of the constructor and Iterator, 
    but they all support the int next() and boolean hasNext() functions.

Example 1:
    Input: ["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
            [[[1, 2, 3]], [], [], [], [], []]
    Output: [null, 1, 2, 2, 3, false]

    Explanation: PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
                 peekingIterator.next();    // return 1, the pointer moves to the next element [1,2,3].
                 peekingIterator.peek();    // return 2, the pointer does not move [1,2,3].
                 peekingIterator.next();    // return 2, the pointer moves to the next element [1,2,3]
                 peekingIterator.next();    // return 3, the pointer moves to the next element [1,2,3]
                 peekingIterator.hasNext(); // return False

Constraints:
    1 <= nums.length <= 1000
    1 <= nums[i] <= 1000
    All the calls to next and peek are valid.
    At most 1000 calls will be made to next, hasNext, and peek.

Follow up: How would you extend your design to be generic and work with all types, not just integer?

NOTE:  this.top not initialized in my solution by me nor found in provided info, 
    but is still a part of solution - makes no sense.
*/

// Initializes the object with the given integer iterator, iterator.
 class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator;
    }
    // Returns the next element in the array without moving the pointer.
    peek = () => {
        if(this.top) return this.top;
        if(this.list.hasNext()){
            this.top = this.list.next()
            return this.top;
        }
        return false;
    } // return number

    // Returns the next element in the array and moves the pointer to the next element.
    next = () => {
        if(this.top){
            var v = this.top
            this.top = null;
            return v;
        }
        return this.list.next();
    }; // return number

    // Returns true if there are still elements in the array.
    hasNext = () => {
        if(this.top) return true;
        return this.list.hasNext();
    }; // return boolean
};

let arr = ["PeekingIterator","next","peek","next","next","hasNext"]
[[[1,2,3]],[],[],[],[],[]];
 var obj = new PeekingIterator(arr);
 var param_1 = obj.peek();
 var param_2 = obj.next();
 var param_3 = obj.hasNext();