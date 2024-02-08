class LRUCache(private val capacity: Int) {
    private val cache: MutableMap<Int, Int> = LinkedHashMap(capacity, 0.75f, true)

    fun get(key: Int): Int {
        return cache.getOrDefault(key, -1)
    }

    fun put(key: Int, value: Int) {
        cache[key] = value
        if (cache.size > capacity) {
            val iterator = cache.iterator()
            iterator.next()
            iterator.remove()
        }
    }

    fun printCache() {
        println("LRU Cache:")
        cache.forEach { (key, value) ->
            println("$key: $value")
        }
    }
}

fun main() {
    val cache = LRUCache(3)

    // Add elements to the cache
    cache.put(1, 10)
    cache.put(2, 20)
    cache.put(3, 30)

    // Print the cache
    cache.printCache()

    // Retrieve elements from the cache
    println("Get key 2: ${cache.get(2)}")
    println("Get key 4: ${cache.get(4)}")

    // Add more elements to the cache
    cache.put(4, 40)
    cache.put(5, 50)

    // Print the cache after adding more elements
    cache.printCache()
}


main()

/*
In this code:

The LRUCache class represents a Least Recently Used (LRU) Cache
with methods to add elements, retrieve elements, and print the cache.
The get method retrieves the value associated
with the given key from the cache.
If the key is not present in the cache, it returns -1.
The put method adds a key-value pair to the cache.
If the cache exceeds its capacity, it removes the least recently used element.
The printCache method prints the contents of the cache to the console.
In the main function, elements are added to the cache,
and then the cache is printed. Elements are retrieved from the cache,
and then more elements are added to the cache.
Finally, the cache is printed again after adding more elements.
This demonstrates the correctness of the LRU Cache implementation.
 */