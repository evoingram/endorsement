// Min and Max Heaps: O(log n) for insertion, extraction of the minimum/maximum element
class MinHeap {
    private val heapArray = mutableListOf<Int>()

    fun insert(value: Int) {
        heapArray.add(value)
        heapifyUp(heapArray.size - 1)
    }

    fun extractMin(): Int {
        if (heapArray.isEmpty()) {
            throw NoSuchElementException("Heap is empty")
        }

        val minValue = heapArray[0]
        val lastValue = heapArray.removeAt(heapArray.size - 1)

        if (heapArray.isNotEmpty()) {
            heapArray[0] = lastValue
            heapifyDown(0)
        }

        return minValue
    }

    private fun heapifyUp(index: Int) {
        var currentIndex = index
        while (currentIndex > 0) {
            val parentIndex = (currentIndex - 1) / 2
            if (heapArray[currentIndex] < heapArray[parentIndex]) {
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
            var smallestChildIndex = currentIndex

            if (leftChildIndex < heapArray.size && heapArray[leftChildIndex] < heapArray[smallestChildIndex]) {
                smallestChildIndex = leftChildIndex
            }

            if (rightChildIndex < heapArray.size && heapArray[rightChildIndex] < heapArray[smallestChildIndex]) {
                smallestChildIndex = rightChildIndex
            }

            if (smallestChildIndex != currentIndex) {
                swap(currentIndex, smallestChildIndex)
                currentIndex = smallestChildIndex
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
        println("Min Heap: ${heapArray.joinToString(", ")}")
    }
}

fun main() {
    val minHeap = MinHeap()

    // Insert elements into the heap
    minHeap.insert(4)
    minHeap.insert(7)
    minHeap.insert(2)
    minHeap.insert(9)
    minHeap.insert(1)

    minHeap.printHeap()

    // Extract and print the minimum element
    val minElement = minHeap.extractMin()
    println("Minimum element extracted: $minElement")
    minHeap.printHeap()

    // Extract and print the minimum element again
    val minElementAgain = minHeap.extractMin()
    println("Minimum element extracted again: $minElementAgain")
    minHeap.printHeap()
}


main()

/*
In this code:

The MinHeap class represents a min heap data structure.
It supports operations such as insert to add elements into the heap
and extractMin to remove and return the minimum element.
The heapifyUp and heapifyDown functions ensure that
the heap property is maintained after insertion and extraction operations.
In the main function, a MinHeap instance is created,
elements are inserted into the heap,
and then the minimum element is extracted and printed.
This process is repeated to demonstrate the
correctness of the min heap data structure.
 */