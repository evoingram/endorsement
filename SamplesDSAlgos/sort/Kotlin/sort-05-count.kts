// Counting Sort:
// Time Complexity: O(n + k), where n is the number of elements and k is the range of the input
// Space Complexity: O(n + k)
fun countingSort(arr: IntArray) {
    val maxValue = arr.maxOrNull() ?: return
    val countArray = IntArray(maxValue + 1) { 0 }

    // Count occurrences of each element
    for (num in arr) {
        countArray[num]++
    }

    // Update countArray to store the actual position of each element
    for (i in 1 until countArray.size) {
        countArray[i] += countArray[i - 1]
    }

    // Create a sorted array using countArray
    val sortedArray = IntArray(arr.size)
    for (i in arr.size - 1 downTo 0) {
        val num = arr[i]
        val index = countArray[num] - 1
        sortedArray[index] = num
        countArray[num]--
    }

    // Copy the sorted array back to the original array
    for (i in sortedArray.indices) {
        arr[i] = sortedArray[i]
    }
}

fun main() {
    val array = intArrayOf(4, 2, 2, 8, 3, 3, 1)

    println("Original array: ${array.joinToString(", ")}")

    countingSort(array)

    println("Sorted array: ${array.joinToString(", ")}")
}


main()

/*In this code:

The countingSort function sorts the array using the
Counting Sort algorithm. It first counts the occurrences of
each element in the array and then creates a sorted array
based on these counts.
The algorithm assumes that the elements in the array
are non-negative integers.
In the main function, a sample array of integers
is defined and printed. Then, the countingSort function
is called to sort the array, and the sorted array is
printed to the console. This demonstrates the
correctness of the Counting Sort algorithm.
 */