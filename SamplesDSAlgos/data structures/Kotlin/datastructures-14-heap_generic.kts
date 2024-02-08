// Min and Max Heaps:
// Time Complexity: O(log n) for insertion, deletion, and search
// Space Complexity: O(n)
class MinHeap<T : Comparable<T>> {
    private val heapArray = mutableListOf<T>()

    fun insert(value: T) {
        heapArray.add(value)
        heapifyUp(heapArray.size - 1)
    }

    fun extractMin(): T? {
        if (heapArray.isEmpty()) return null
        val min = heapArray[0]
        heapArray[0] = heapArray.last()
        heapArray.removeAt(heapArray.size - 1)
        heapifyDown(0)
        return min
    }

    private fun heapifyUp(index: Int) {
        var currentIndex = index
        var parentIndex = (currentIndex - 1) / 2
        while (parentIndex >= 0 && heapArray[currentIndex] < heapArray[parentIndex]) {
            swap(currentIndex, parentIndex)
            currentIndex = parentIndex
            parentIndex = (currentIndex - 1) / 2
        }
    }

    private fun heapifyDown(index: Int) {
        var currentIndex = index
        var leftChildIndex = 2 * currentIndex + 1
        var rightChildIndex = 2 * currentIndex + 2
        var smallestChildIndex = currentIndex

        if (leftChildIndex < heapArray.size && heapArray[leftChildIndex] < heapArray[smallestChildIndex]) {
            smallestChildIndex = leftChildIndex
        }

        if (rightChildIndex < heapArray.size && heapArray[rightChildIndex] < heapArray[smallestChildIndex]) {
            smallestChildIndex = rightChildIndex
        }

        if (smallestChildIndex != currentIndex) {
            swap(currentIndex, smallestChildIndex)
            heapifyDown(smallestChildIndex)
        }
    }

    private fun swap(index1: Int, index2: Int) {
        val temp = heapArray[index1]
        heapArray[index1] = heapArray[index2]
        heapArray[index2] = temp
    }

    fun printHeap() {
        println("Heap: ${heapArray.joinToString(", ")}")
    }
}

fun main() {
    val heap = MinHeap<Int>()
    heap.insert(4)
    heap.insert(8)
    heap.insert(2)
    heap.insert(6)
    heap.insert(10)
    heap.insert(1)

    heap.printHeap()

    println("Min element: ${heap.extractMin()}")
    heap.printHeap()

    println("Min element: ${heap.extractMin()}")
    heap.printHeap()

    println("Min element: ${heap.extractMin()}")
    heap.printHeap()
}


main()

/*
This code demonstrates the use of a generic min heap in Kotlin.
It allows you to insert elements into the heap,
extract the minimum element, and print the current state
of the heap. The generic type T must be comparable to
itself (T : Comparable<T>) to ensure proper ordering
within the heap.
 */