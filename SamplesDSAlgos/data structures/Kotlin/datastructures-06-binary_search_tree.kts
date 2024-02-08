// Binary Search Trees:
// Time Complexity: O(h) for insertion, deletion, and search, where h is the height of the tree (average case)
// Space Complexity: O(n)
class TreeNode(var value: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}

class BinarySearchTree {
    private var root: TreeNode? = null

    fun insert(value: Int) {
        root = insertRecursive(root, value)
    }

    private fun insertRecursive(node: TreeNode?, value: Int): TreeNode {
        if (node == null) {
            return TreeNode(value)
        }

        if (value < node.value) {
            node.left = insertRecursive(node.left, value)
        } else if (value > node.value) {
            node.right = insertRecursive(node.right, value)
        }

        return node
    }

    fun search(value: Int): Boolean {
        return searchRecursive(root, value)
    }

    private fun searchRecursive(node: TreeNode?, value: Int): Boolean {
        if (node == null) {
            return false
        }

        if (value == node.value) {
            return true
        }

        return if (value < node.value) {
            searchRecursive(node.left, value)
        } else {
            searchRecursive(node.right, value)
        }
    }

    fun printInOrder() {
        println("In-order traversal:")
        printInOrderRecursive(root)
        println()
    }

    private fun printInOrderRecursive(node: TreeNode?) {
        if (node != null) {
            printInOrderRecursive(node.left)
            print("${node.value} ")
            printInOrderRecursive(node.right)
        }
    }

    fun printLevelOrder() {
        println("Level-order traversal:")
        if (root == null) {
            println("Tree is empty")
            return
        }

        val queue = ArrayDeque<TreeNode>()
        queue.add(root!!)

        while (queue.isNotEmpty()) {
            val node = queue.removeFirst()
            print("${node.value} ")

            if (node.left != null) {
                queue.add(node.left!!)
            }
            if (node.right != null) {
                queue.add(node.right!!)
            }
        }

        println()
    }
}

fun main() {
    val bst = BinarySearchTree()

    // Insert elements into the binary search tree
    bst.insert(8)
    bst.insert(3)
    bst.insert(10)
    bst.insert(1)
    bst.insert(6)
    bst.insert(14)
    bst.insert(4)
    bst.insert(7)
    bst.insert(13)

    // Search for elements in the binary search tree
    println("Search for element 6: ${bst.search(6)}")
    println("Search for element 11: ${bst.search(11)}")

    // Print the binary search tree using in-order traversal
    bst.printInOrder()

    // Print the binary search tree using level-order traversal
    bst.printLevelOrder()
}


main()

/*
In this code:

The TreeNode class represents a node in the binary search tree
containing a value and references to its left and right children.
The BinarySearchTree class represents the binary search tree
with methods to insert elements, search for elements, and
print the tree using in-order and level-order traversal.
In the main function, a binary search tree is created,
elements are inserted into it, and then various operations
such as searching for elements and printing the tree
are performed to demonstrate the correctness of the
Binary Search Tree implementation.
 */