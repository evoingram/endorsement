// Selection Sort:
// Time Complexity: O(n^2)
// Space Complexity: O(1)
fun selectionSort(arr: IntArray) {
    val n = arr.size
    for (i in 0 until n - 1) {
        var minIndex = i
        for (j in i + 1 until n) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex != i) {
            val temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
}

fun main() {
    val array = intArrayOf(64, 25, 12, 22, 11)

    println("Original array: ${array.joinToString(", ")}")

    selectionSort(array)

    println("Sorted array: ${array.joinToString(", ")}")
}


main()

/*
In this code:

The selectionSort function sorts the array using
the Selection Sort algorithm. It repeatedly finds the
minimum element from the unsorted portion of the array
and swaps it with the element at the current position.
In the main function, a sample array of integers
is defined and printed. Then, the selectionSort function
is called to sort the array, and the sorted array is
printed to the console. This demonstrates the correctness
of the Selection Sort algorithm.
 */