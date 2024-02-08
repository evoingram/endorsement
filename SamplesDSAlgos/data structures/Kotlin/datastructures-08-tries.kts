// Tries:
// O(m) for insertion, deletion, and search, where m is the length of the key
// Space complexity: O(n * m), where n is the number of keys and m is the average length of a key
// Time Complexity: O(m), where m is the length of the key
// Space Complexity: O(n * m), where n is the number of keys
class TrieNode {
    val children = mutableMapOf<Char, TrieNode>()
    var isEndOfWord = false
}

class Trie {
    private val root = TrieNode()

    fun insert(word: String) {
        var current = root
        for (char in word) {
            val node = current.children.getOrPut(char) { TrieNode() }
            current = node
        }
        current.isEndOfWord = true
    }

    fun search(word: String): Boolean {
        var current = root
        for (char in word) {
            val node = current.children[char] ?: return false
            current = node
        }
        return current.isEndOfWord
    }

    fun printTrie() {
        printTrieRecursive(root, "")
    }

    private fun printTrieRecursive(node: TrieNode, prefix: String) {
        if (node.isEndOfWord) {
            println(prefix)
        }
        for ((char, child) in node.children) {
            printTrieRecursive(child, prefix + char)
        }
    }
}

fun main() {
    val trie = Trie()

    // Insert words into the trie
    trie.insert("apple")
    trie.insert("banana")
    trie.insert("car")
    trie.insert("carrot")

    // Print the trie
    println("Trie:")
    trie.printTrie()

    // Search for words in the trie
    println("Search for 'apple': ${trie.search("apple")}")
    println("Search for 'banana': ${trie.search("banana")}")
    println("Search for 'carrot': ${trie.search("carrot")}")
    println("Search for 'grape': ${trie.search("grape")}")
}


main()

/*
In this code:

The TrieNode class represents a node in the trie
containing a map of its children nodes and a flag
indicating whether it marks the end of a word.
The Trie class represents the trie with methods to
insert words, search for words, and print the trie.
The insert method inserts a word into the trie by
traversing the trie from the root and
creating new nodes as necessary.
The search method searches for a word in the trie
by traversing the trie from the root and checking if
each character of the word exists in the trie.
The printTrie method prints all words stored in the trie
by traversing the trie recursively and printing the
characters along the way until it reaches the end of a word.
In the main function, words are inserted into the trie,
and then the trie is printed. Additionally, the search
method is used to search for words in the trie.
This demonstrates the correctness of the trie implementation.
 */