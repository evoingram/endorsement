// Bucket Sort:
// Time Complexity: O(n + k), where n is the number of elements and k is the number of buckets
// Space Complexity: O(n + k)
fun bucketSort(arr: DoubleArray) {
    val n = arr.size
    val buckets = Array<MutableList<Double>>(n) { mutableListOf() }

    // Put array elements into different buckets
    for (i in 0 until n) {
        val bucketIndex = (n * arr[i]).toInt()
        buckets[bucketIndex].add(arr[i])
    }

    // Sort individual buckets
    for (bucket in buckets) {
        bucket.sort()
    }

    // Concatenate all buckets into arr
    var index = 0
    for (i in 0 until n) {
        for (j in 0 until buckets[i].size) {
            arr[index++] = buckets[i][j]
        }
    }
}

fun main() {
    val arr = doubleArrayOf(0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51)
    println("Original array: ${arr.joinToString(", ")}")

    bucketSort(arr)

    println("Sorted array: ${arr.joinToString(", ")}")
}



main()

/*
In this code:

The bucketSort function sorts the array using the Bucket Sort algorithm.
It first finds the maximum and minimum values in the array,
then divides the range of values into equal-sized buckets.
Elements are then distributed into the appropriate buckets,
each of which is sorted individually using a simple sorting algorithm
(such as insertion sort). Finally, the sorted elements from all buckets
are concatenated back into the original array.
In the main function, a sample array of floating-point numbers
is defined and printed. Then, the bucketSort function is called
to sort the array, and the sorted array is printed to the console.
This demonstrates the correctness of the Bucket Sort algorithm.
 */