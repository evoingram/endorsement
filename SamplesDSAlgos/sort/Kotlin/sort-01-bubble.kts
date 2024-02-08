// Bubble Sort:
// Time Complexity:
// Best Case: O(n) - when the array is already sorted
// Average Case: O(n^2)
// Worst Case: O(n^2) - when the array is sorted in reverse order
// Space Complexity: O(1) - it is an in-place sorting algorithm
fun bubbleSort(arr: IntArray) {
    val n = arr.size
    var swapped: Boolean

    do {
        swapped = false
        for (i in 0 until n - 1) {
            if (arr[i] > arr[i + 1]) {
                val temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

fun main() {
    val array = intArrayOf(64, 25, 12, 22, 11)

    println("Original array: ${array.joinToString(", ")}")

    bubbleSort(array)

    println("Sorted array: ${array.joinToString(", ")}")
}


main()

/*
In this code:

The bubbleSort function sorts the array
using the Bubble Sort algorithm. It repeatedly iterates
through the array and swaps adjacent elements if they
are in the wrong order until the entire array is sorted.
In the main function, a sample array of integers
is defined and printed. Then, the bubbleSort function
is called to sort the array, and the sorted array is
printed to the console. This demonstrates the
correctness of the Bubble Sort algorithm.
 */