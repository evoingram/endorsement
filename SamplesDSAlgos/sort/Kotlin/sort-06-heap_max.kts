// Max Heaps: O(log n) for insertion and extraction of the maximum element
class MaxHeap {
    private val heap = mutableListOf<Int>()

    fun insert(value: Int) {
        heap.add(value)
        heapifyUp(heap.size - 1)
    }

    fun extractMax(): Int {
        if (heap.isEmpty()) throw NoSuchElementException("Heap is empty")

        val max = heap[0]
        heap[0] = heap.last()
        heap.removeAt(heap.size - 1)
        heapifyDown(0)

        return max
    }

    private fun heapifyUp(index: Int) {
        var currentIndex = index
        while (currentIndex > 0) {
            val parentIndex = (currentIndex - 1) / 2
            if (heap[parentIndex] < heap[currentIndex]) {
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
            var largestIndex = currentIndex

            if (leftChildIndex < heap.size && heap[leftChildIndex] > heap[largestIndex]) {
                largestIndex = leftChildIndex
            }
            if (rightChildIndex < heap.size && heap[rightChildIndex] > heap[largestIndex]) {
                largestIndex = rightChildIndex
            }

            if (largestIndex != currentIndex) {
                swap(currentIndex, largestIndex)
                currentIndex = largestIndex
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
        println("Max Heap:")
        println(heap)
    }
}

fun maxHeapSort(array: IntArray): IntArray {
    val maxHeap = MaxHeap()
    for (element in array) {
        maxHeap.insert(element)
    }

    val sortedArray = IntArray(array.size)
    for (i in sortedArray.indices) {
        sortedArray[i] = maxHeap.extractMax()
    }

    return sortedArray
}

fun main() {
    // Example of Max heap sort
    val unsortedArray = intArrayOf(4, 2, 8, 1, 5)
    val sortedArray = maxHeapSort(unsortedArray)
    println("Sorted Array using Max Heap Sort:")
    println(sortedArray.contentToString())
}


main()

/*
This code demonstrates a max heap sort implementation in Kotlin.
The MaxHeap class represents the max heap data structure with
methods for insertion and extraction of the maximum element.
The maxHeapSort function takes an input array, uses a max heap
to sort it in non-increasing order, and returns the sorted array.
The example prints the sorted array to the console to
demonstrate its correctness.
 */