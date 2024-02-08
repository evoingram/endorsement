// Min Heaps:
// Time Complexity: O(n log n) for building the heap, O(log n) for insertion and deletion
// Space Complexity: O(n)

class MinHeap {
    private val heap = mutableListOf<Int>()

    fun insert(value: Int) {
        heap.add(value)
        heapifyUp(heap.size - 1)
    }

    fun extractMin(): Int {
        if (heap.isEmpty()) throw NoSuchElementException("Heap is empty")

        val min = heap[0]
        heap[0] = heap.last()
        heap.removeAt(heap.size - 1)
        heapifyDown(0)

        return min
    }

    private fun heapifyUp(index: Int) {
        var currentIndex = index
        while (currentIndex > 0) {
            val parentIndex = (currentIndex - 1) / 2
            if (heap[parentIndex] > heap[currentIndex]) {
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
            var smallestIndex = currentIndex

            if (leftChildIndex < heap.size && heap[leftChildIndex] < heap[smallestIndex]) {
                smallestIndex = leftChildIndex
            }
            if (rightChildIndex < heap.size && heap[rightChildIndex] < heap[smallestIndex]) {
                smallestIndex = rightChildIndex
            }

            if (smallestIndex != currentIndex) {
                swap(currentIndex, smallestIndex)
                currentIndex = smallestIndex
            } else {
                break
            }
        }
    }

    private fun swap(index1: Int, index2: Int) {
        val temp = heap[index1]
        heap[index1] = heap[index2]
        heap[index2] = temp
    }

    fun printHeap() {
        println("Min Heap:")
        println(heap)
    }
}

// Min heap sort
fun minHeapSort(array: IntArray): IntArray {
    val minHeap = MinHeap()
    for (element in array) {
        minHeap.insert(element)
    }

    val sortedArray = IntArray(array.size)
    for (i in sortedArray.indices) {
        sortedArray[i] = minHeap.extractMin()
    }

    return sortedArray
}

fun main() {
    // Example of MinHeap data structure
    val minHeap = MinHeap()
    minHeap.insert(4)
    minHeap.insert(2)
    minHeap.insert(8)
    minHeap.insert(1)
    minHeap.insert(5)
    minHeap.printHeap()

    // Example of Min heap sort
    val unsortedArray = intArrayOf(4, 2, 8, 1, 5)
    val sortedArray = minHeapSort(unsortedArray)
    println("Sorted Array using Min Heap Sort:")
    println(sortedArray.contentToString())
}


main()

/*
This code demonstrates the usage of both a
min heap data structure and min heap sort in Kotlin.
The MinHeap class implements the min heap data
structure with methods for insertion and extraction
of the minimum element. The minHeapSort function takes
an input array, uses a min heap to sort it in non-decreasing
order, and returns the sorted array. Both examples print
their outputs to the console to demonstrate their correctness.
 */