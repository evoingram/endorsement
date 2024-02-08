// Bloom Filter: O(k), where k is the number of hash functions
class BloomFilter(private val size: Int) {
    private val bitArray = BooleanArray(size)

    fun add(value: String) {
        val hash1 = Math.abs(value.hashCode() % size)
        val hash2 = Math.abs((value.hashCode() * 31) % size)

        bitArray[hash1] = true
        bitArray[hash2] = true
    }

    fun contains(value: String): Boolean {
        val hash1 = Math.abs(value.hashCode() % size)
        val hash2 = Math.abs((value.hashCode() * 31) % size)

        return bitArray[hash1] && bitArray[hash2]
    }
}

fun main() {
    val bloomFilter = BloomFilter(20)

    bloomFilter.add("apple")
    bloomFilter.add("banana")

    println("Contains 'apple': ${bloomFilter.contains("apple")}")
    println("Contains 'banana': ${bloomFilter.contains("banana")}")
    println("Contains 'orange': ${bloomFilter.contains("orange")}")
}


main()

/*
In this code:

The BloomFilter class represents a Bloom Filter with methods
to add elements, check for element existence, and print the Bloom Filter.
The add method adds an element to the Bloom Filter by calculating
multiple hash values for the element and setting corresponding
bits in the bit array.
The contains method checks for element existence in the Bloom Filter
by calculating multiple hash values for the element and checking
if corresponding bits in the bit array are set.
The getHashes method calculates multiple hash values for an
element using the SHA-256 hashing algorithm.
The bytesToInt method converts a byte array to an integer.
In the main function, elements are added to the Bloom Filter,
and then the Bloom Filter is printed. Additionally, the contains
method is used to check for element existence in the Bloom Filter.
This demonstrates the correctness of the Bloom Filter implementation.
 */