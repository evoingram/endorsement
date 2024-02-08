// Min and Max Heaps:
// Time Complexity: O(log n) for insertion, deletion, and search
// Space Complexity: O(n)
class MaxHeap {
    private val heapArray = mutableListOf<Int>()

    fun insert(value: Int) {
        heapArray.add(value)
        heapifyUp(heapArray.size - 1)
    }

    fun extractMax(): Int {
        if (heapArray.isEmpty()) {
            throw NoSuchElementException("Heap is empty")
        }

        val maxValue = heapArray[0]
        val lastValue = heapArray.removeAt(heapArray.size - 1)

        if (heapArray.isNotEmpty()) {
            heapArray[0] = lastValue
            heapifyDown(0)
        }

        return maxValue
    }

    private fun heapifyUp(index: Int) {
        var currentIndex = index
        while (currentIndex > 0) {
            val parentIndex = (currentIndex - 1) / 2
            if (heapArray[currentIndex] > heapArray[parentIndex]) {
                swap(currentIndex, parentIndex)
                currentIndex = parentIndex
            } else {
                break
            }
        }
    }

    private fun heapifyDown(index: Int) {
        var currentIndex = index
        while (true) {
            val leftChildIndex = 2 * currentIndex + 1
            val rightChildIndex = 2 * currentIndex + 2
            var largestChildIndex = currentIndex

            if (leftChildIndex < heapArray.size && heapArray[leftChildIndex] > heapArray[largestChildIndex]) {
                largestChildIndex = leftChildIndex
            }

            if (rightChildIndex < heapArray.size && heapArray[rightChildIndex] > heapArray[largestChildIndex]) {
                largestChildIndex = rightChildIndex
            }

            if (largestChildIndex != currentIndex) {
                swap(currentIndex, largestChildIndex)
                currentIndex = largestChildIndex
            } else {
                break
            }
        }
    }

    private fun swap(i: Int, j: Int) {
        val temp = heapArray[i]
        heapArray[i] = heapArray[j]
        heapArray[j] = temp
    }

    fun printHeap() {
        println("Max Heap: ${heapArray.joinToString(", ")}")
    }
}

fun main() {
    val maxHeap = MaxHeap()

    // Insert elements into the heap
    maxHeap.insert(4)
    maxHeap.insert(7)
    maxHeap.insert(2)
    maxHeap.insert(9)
    maxHeap.insert(1)

    maxHeap.printHeap()

    // Extract and print the maximum element
    val maxElement = maxHeap.extractMax()
    println("Maximum element extracted: $maxElement")
    maxHeap.printHeap()

    // Extract and print the maximum element again
    val maxElementAgain = maxHeap.extractMax()
    println("Maximum element extracted again: $maxElementAgain")
    maxHeap.printHeap()
}


main()

/*
In this code:

The MaxHeap class represents a max heap data structure.
It supports operations such as insert to add elements into the heap
and extractMax to remove and return the maximum element.
The heapifyUp and heapifyDown functions ensure that
the heap property is maintained after insertion and extraction operations.
In the main function, a MaxHeap instance is created,
elements are inserted into the heap, and then the maximum element
is extracted and printed. This process is repeated to demonstrate
the correctness of the max heap data structure.
 */