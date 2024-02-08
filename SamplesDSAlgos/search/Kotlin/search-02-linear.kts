fun linearSearch(arr: IntArray, target: Int): Int {
    for (i in arr.indices) {
        if (arr[i] == target) {
            return i
        }
    }
    return -1
}

fun main() {
    val array = intArrayOf(4, 2, 7, 1, 9, 5)

    val target1 = 7
    val target2 = 3

    val index1 = linearSearch(array, target1)
    val index2 = linearSearch(array, target2)

    println("Array: ${array.joinToString(", ")}")
    println("Searching for $target1. Index found: $index1")
    println("Searching for $target2. Index found: $index2")
}

main()

/*
In this code:

linearSearch function takes an array and a target value and
returns the index of the target value if it exists in the array,
otherwise returns -1.
In the main function, a sample array is defined.
Then, two different target values are searched for using the
linear search algorithm.
The index found for each search is printed to the console,
demonstrating the correctness of the linear search algorithm.
 */