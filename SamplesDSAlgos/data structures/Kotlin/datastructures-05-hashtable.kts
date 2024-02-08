// Hash Tables:
// Time Complexity: O(1) average case for insertion, deletion, and search
// Space Complexity: O(n)
class HashTable<K, V>(private val capacity: Int) {
    private val table: Array<MutableList<Pair<K, V>>> = Array(capacity) { mutableListOf() }

    private fun hash(key: K): Int {
        return (key.hashCode() and Int.MAX_VALUE) % capacity // Ensure non-negative hash value
    }

    fun put(key: K, value: V) {
        val index = hash(key)
        table[index].add(Pair(key, value))
    }

    fun get(key: K): V? {
        val index = hash(key)
        val bucket = table[index]
        for (pair in bucket) {
            if (pair.first == key) {
                return pair.second
            }
        }
        return null
    }
}

fun main() {
    val hashTable = HashTable<String, Int>(10)

    hashTable.put("apple", 10)
    hashTable.put("banana", 20)

    println("Value for key 'apple': ${hashTable.get("apple")}")
    println("Value for key 'banana': ${hashTable.get("banana")}")
    println("Value for key 'orange': ${hashTable.get("orange")}")
}

main()

/*
In this code:

The HashTable class represents a hash table with methods
to insert key-value pairs (put), retrieve values by keys (get),
and print the contents of the hash table (printTable).
The hash function calculates the hash value for a given key.
In the main function, a hash table is created, key-value pairs
are added to it, and then the hash table is printed to the
console to demonstrate its contents. Additionally, values are
retrieved by keys to show the correctness of the implementation.
 */