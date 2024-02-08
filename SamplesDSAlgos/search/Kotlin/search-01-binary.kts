// Binary Search:
// Time Complexity: O(log n)
// Space Complexity: O(1)
fun binarySearch(arr: IntArray, target: Int): Int {
    var left = 0
    var right = arr.size - 1

    while (left <= right) {
        val mid = left + (right - left) / 2

        // Check if target is present at mid
        if (arr[mid] == target) return mid

        // If target greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1
        } else {
            // If target is smaller, ignore right half
            right = mid - 1
        }
    }

    // If the element is not present in the array
    return -1
}

fun main() {
    val sortedArray = intArrayOf(1, 3, 5, 7, 9, 11, 13)

    // Testing binary search
    val target1 = 7
    val target2 = 4

    val index1 = binarySearch(sortedArray, target1)
    val index2 = binarySearch(sortedArray, target2)

    println("Sorted Array: ${sortedArray.joinToString(", ")}")
    println("Searching for $target1. Index found: $index1")
    println("Searching for $target2. Index found: $index2")
}


main()


/*

This code defines a binarySearch function that takes
a sorted array and a target value and returns the index of the
target value if it exists in the array, otherwise returns -1.
In the main function, it demonstrates how to use the binary
search by searching for two different target values
(one present in the array and one not present) and printing
the index found for each search. This demonstrates the
correctness of the binary search algorithm.
 */