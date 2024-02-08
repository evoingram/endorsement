// Quick Sort:
// Time Complexity: O(n log n) average case, O(n^2) worst case
// Space Complexity: O(log n) average case, O(n) worst case
fun quickSort(arr: IntArray, low: Int, high: Int) {
    if (low < high) {
        val pivotIndex = partition(arr, low, high)
        quickSort(arr, low, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, high)
    }
}

fun partition(arr: IntArray, low: Int, high: Int): Int {
    val pivot = arr[high]
    var i = low - 1

    for (j in low until high) {
        if (arr[j] < pivot) {
            i++
            swap(arr, i, j)
        }
    }

    swap(arr, i + 1, high)
    return i + 1
}

fun swap(arr: IntArray, i: Int, j: Int) {
    val temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

fun main() {
    val array = intArrayOf(9, 7, 5, 11, 12, 2, 14, 3, 10, 6)

    println("Original array: ${array.joinToString(", ")}")

    quickSort(array, 0, array.size - 1)

    println("Sorted array: ${array.joinToString(", ")}")
}

main()

/*
In this code:

quickSort function sorts the array using the Quick Sort algorithm.
It recursively partitions the array around a pivot element and
sorts the subarrays on both sides of the pivot.
partition function partitions the array around a pivot element
such that all elements smaller than the pivot are on its left,
and all elements greater than the pivot are on its right.
swap function swaps two elements in the array.
In the main function, a sample array is defined and printed.
Then, the quickSort function is called to sort the array,
and the sorted array is printed to the console.
This demonstrates the correctness of the Quick Sort algorithm.
 */