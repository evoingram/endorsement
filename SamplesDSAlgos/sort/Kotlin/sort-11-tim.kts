// Timsort:
// Time Complexity: O(n log n)
// Space Complexity: O(n)
class TimSort {
    private val MIN_MERGE = 32

    fun sort(arr: IntArray) {
        val n = arr.size
        var minRun = minRunLength(n)

        for (i in 0 until n step minRun) {
            val end = minOf(i + minRun - 1, n - 1)
            insertionSort(arr, i, end)
        }

        var size = minRun
        while (size < n) {
            for (left in 0 until n step size * 2) {
                val mid = minOf(left + size - 1, n - 1)
                val right = minOf(left + size * 2 - 1, n - 1)
                merge(arr, left, mid, right)
            }
            size *= 2
        }
    }

    private fun insertionSort(arr: IntArray, left: Int, right: Int) {
        for (i in left + 1..right) {
            val key = arr[i]
            var j = i - 1

            while (j >= left && arr[j] > key) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = key
        }
    }

    private fun merge(arr: IntArray, left: Int, mid: Int, right: Int) {
        val len1 = mid - left + 1
        val len2 = right - mid

        val leftArr = IntArray(len1)
        val rightArr = IntArray(len2)

        for (x in 0 until len1) {
            leftArr[x] = arr[left + x]
        }
        for (x in 0 until len2) {
            rightArr[x] = arr[mid + 1 + x]
        }

        var i = 0
        var j = 0
        var k = left

        while (i < len1 && j < len2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++]
            } else {
                arr[k++] = rightArr[j++]
            }
        }

        while (i < len1) {
            arr[k++] = leftArr[i++]
        }

        while (j < len2) {
            arr[k++] = rightArr[j++]
        }
    }

    private fun minRunLength(n: Int): Int {
        var n = n
        var r = 0
        while (n >= MIN_MERGE) {
            r = r or (n and 1)
            n = n shr 1
        }
        return n + r
    }
}

fun main() {
    val arr = intArrayOf(64, 34, 25, 12, 22, 11, 90)
    println("Original array: ${arr.joinToString()}")

    val timsort = TimSort()
    timsort.sort(arr)

    println("Sorted array: ${arr.joinToString()}")
}


main()

/*
In this code:

The TimSort class implements the Timsort algorithm.
The sort function is the main sorting function that
sorts the input array using Timsort.
The insertionSort function is used to sort small
subarrays with insertion sort.
The merge function merges two sorted subarrays.
The minRunLength function calculates the minimum
run length required by Timsort.
In the main function, an array of integers is sorted
using Timsort, and the sorted array is printed to
demonstrate the correctness of the algorithm.
 */