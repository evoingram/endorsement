import kotlin.random.Random

// Skip Lists:
// Time Complexity: O(log n) for search, insertion, and deletion
// Space Complexity: O(n log n)
class SkipListNode(var value: Int, var next: MutableList<SkipListNode?>)

class SkipList {
    private val head: SkipListNode
    private val maxLevel: Int
    private val probability: Double
    private var size: Int

    init {
        head = SkipListNode(Int.MIN_VALUE, MutableList(MAX_LEVEL) { null })
        maxLevel = MAX_LEVEL
        probability = PROBABILITY
        size = 0
    }

    fun insert(value: Int) {
        val update = MutableList(maxLevel) { head }
        var current = head

        // Find the appropriate position to insert the new node
        for (level in maxLevel - 1 downTo 0) {
            while (current.next[level] != null && current.next[level]!!.value < value) {
                current = current.next[level]!!
            }
            update[level] = current
        }

        // Insert the new node
        val newNodeLevel = randomLevel()
        val newNode = SkipListNode(value, MutableList(newNodeLevel) { null })

        for (level in 0 until newNodeLevel) {
            newNode.next[level] = update[level].next[level]
            update[level].next[level] = newNode
        }

        size++
    }

    fun search(value: Int): Boolean {
        var current = head

        // Traverse the Skip List to find the value
        for (level in maxLevel - 1 downTo 0) {
            while (current.next[level] != null && current.next[level]!!.value < value) {
                current = current.next[level]!!
            }
        }

        // Check if the value exists in the Skip List
        return current.next[0] != null && current.next[0]!!.value == value
    }

    fun printSkipList() {
        println("Skip List:")
        for (level in maxLevel - 1 downTo 0) {
            var current = head.next[level]
            print("Level $level: ")
            while (current != null) {
                print("${current.value} -> ")
                current = current.next[level]
            }
            println("null")
        }
    }

    private fun randomLevel(): Int {
        var level = 1
        while (Random.nextDouble() < probability && level < maxLevel) {
            level++
        }
        return level
    }

    companion object {
        private const val MAX_LEVEL = 16
        private const val PROBABILITY = 0.5
    }
}

fun main() {
    val skipList = SkipList()

    // Insert elements into the skip list
    skipList.insert(3)
    skipList.insert(6)
    skipList.insert(9)
    skipList.insert(12)

    // Print the skip list
    skipList.printSkipList()

    // Search for elements in the skip list
    println("Search for 6: ${skipList.search(6)}")
    println("Search for 8: ${skipList.search(8)}")
}


main()

/*
In this code:

The SkipListNode class represents a node in
the Skip List containing a value and
references to its next nodes.
The SkipList class represents the Skip List with
methods to insert elements, search for elements,
and print the Skip List.
The insert method inserts a new node into the
Skip List, the search method searches for a value
in the Skip List, and the printSkipList method
prints the Skip List to the console.
In the main function, elements are inserted
into the Skip List, and then the Skip List is printed.
Additionally, the search method is used to search
for elements in the Skip List. This demonstrates
the correctness of the Skip List implementation.
 */