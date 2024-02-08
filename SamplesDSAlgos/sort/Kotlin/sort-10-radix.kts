// Radix Sort: O(n * k), where
// n is the number of elements and
// k is the number of digits in the largest number.
fun radixSort(arr: IntArray) {
    val maxDigits = getMaxDigits(arr)

    for (i in 0 until maxDigits) {
        val buckets = Array(10) { mutableListOf<Int>() }

        for (num in arr) {
            val digit = getDigit(num, i)
            buckets[digit].add(num)
        }

        var index = 0
        for (bucket in buckets) {
            for (num in bucket) {
                arr[index++] = num
            }
        }
    }
}

fun getMaxDigits(arr: IntArray): Int {
    var maxDigits = 0
    for (num in arr) {
        val numDigits = countDigits(num)
        if (numDigits > maxDigits) {
            maxDigits = numDigits
        }
    }
    return maxDigits
}

fun countDigits(num: Int): Int {
    return if (num == 0) 1 else (Math.log10(Math.abs(num.toDouble())) + 1).toInt()
}

fun getDigit(num: Int, place: Int): Int {
    return (Math.abs(num) / Math.pow(10.0, place.toDouble())).toInt() % 10
}

fun main() {
    val array = intArrayOf(170, 45, 75, 90, 802, 24, 2, 66)

    println("Original array: ${array.joinToString(", ")}")

    radixSort(array)

    println("Sorted array: ${array.joinToString(", ")}")
}


main()

/*
In this code:

radixSort function sorts the array using the Radix Sort algorithm.
It iterates through each digit position in the numbers
and sorts the array based on that position.
getMaxDigits function determines the maximum number of digits in the array,
which is necessary to know the number of iterations needed in the radix sort.
countDigits function counts the number of digits in a given number.
getDigit function returns the digit at a specific place in a number.
In the main function, a sample array is defined and printed. Then, the
radixSort function is called to sort the array, and the sorted array
is printed to the console.
This demonstrates the correctness of the Radix Sort algorithm.
 */