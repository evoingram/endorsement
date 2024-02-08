fun insertionSort(arr: IntArray) {
    val n = arr.size
    for (i in 1 until n) {
        val key = arr[i]
        var j = i - 1

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
}

fun main() {
    val array = intArrayOf(64, 25, 12, 22, 11)

    println("Original array: ${array.joinToString(", ")}")

    insertionSort(array)

    println("Sorted array: ${array.joinToString(", ")}")
}


main()

/*
In this code:

The insertionSort function sorts the array using the
Insertion Sort algorithm. It iterates through the array,
starting from the second element, and for each element,
it finds its correct position in the sorted subarray to its left.
In the main function, a sample array of integers is
defined and printed. Then, the insertionSort function is
called to sort the array, and the sorted array is printed
to the console. This demonstrates the correctness of the
Insertion Sort algorithm.
 */