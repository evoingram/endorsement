fun mergeSort(arr: IntArray) {
    if (arr.size < 2) {
        return
    }

    val middle = arr.size / 2
    val left = arr.copyOfRange(0, middle)
    val right = arr.copyOfRange(middle, arr.size)

    mergeSort(left)
    mergeSort(right)

    merge(left, right, arr)
}

fun merge(left: IntArray, right: IntArray, arr: IntArray) {
    var i = 0
    var j = 0
    var k = 0

    while (i < left.size && j < right.size) {
        if (left[i] <= right[j]) {
            arr[k++] = left[i++]
        } else {
            arr[k++] = right[j++]
        }
    }

    while (i < left.size) {
        arr[k++] = left[i++]
    }

    while (j < right.size) {
        arr[k++] = right[j++]
    }
}

fun main() {
    val array = intArrayOf(38, 27, 43, 3, 9, 82, 10)

    println("Original array: ${array.joinToString(", ")}")

    mergeSort(array)

    println("Sorted array: ${array.joinToString(", ")}")
}

main()

/*
In this code:

mergeSort function sorts the array using the Merge Sort algorithm.
It recursively divides the array into halves until each sub-array
has one or zero elements, then merges them back together in sorted order.
merge function merges two sorted arrays into one sorted array.
In the main function, a sample array is defined and printed.
Then, the mergeSort function is called to sort the array,
and the sorted array is printed to the console.
This demonstrates the correctness of the Merge Sort algorithm.
 */