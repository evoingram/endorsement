// AVL Tree:
// O(log n) for insertion, deletion, and search
// O(log n) for rotation operations
class TreeNode(var key: Int) {
    var left: TreeNode? = null
    var right: TreeNode? = null
    var height: Int = 1
}

class AVLTree {
    private var root: TreeNode? = null

    private fun height(node: TreeNode?): Int {
        return node?.height ?: 0
    }

    private fun updateHeight(node: TreeNode?) {
        node?.height = 1 + maxOf(height(node?.left), height(node?.right))
    }

    private fun balanceFactor(node: TreeNode?): Int {
        return height(node?.left) - height(node?.right)
    }

    private fun rotateRight(y: TreeNode): TreeNode {
        val x = y.left!!
        val T2 = x.right

        x.right = y
        y.left = T2

        updateHeight(y)
        updateHeight(x)

        return x
    }

    private fun rotateLeft(x: TreeNode): TreeNode {
        val y = x.right!!
        val T2 = y.left

        y.left = x
        x.right = T2

        updateHeight(x)
        updateHeight(y)

        return y
    }

    fun insert(key: Int) {
        root = insertRecursive(root, key)
    }

    private fun insertRecursive(node: TreeNode?, key: Int): TreeNode {
        if (node == null) {
            return TreeNode(key)
        }

        when {
            key < node.key -> node.left = insertRecursive(node.left, key)
            key > node.key -> node.right = insertRecursive(node.right, key)
            else -> return node // Duplicate keys are not allowed
        }

        updateHeight(node)

        val balance = balanceFactor(node)

        // Left Left case
        if (balance > 1 && key < node.left!!.key) {
            return rotateRight(node)
        }

        // Right Right case
        if (balance < -1 && key > node.right!!.key) {
            return rotateLeft(node)
        }

        // Left Right case
        if (balance > 1 && key > node.left!!.key) {
            node.left = rotateLeft(node.left!!)
            return rotateRight(node)
        }

        // Right Left case
        if (balance < -1 && key < node.right!!.key) {
            node.right = rotateRight(node.right!!)
            return rotateLeft(node)
        }

        return node
    }

    fun printTree() {
        println("AVL Tree:")
        printTreeRecursive(root)
        println()
    }

    private fun printTreeRecursive(node: TreeNode?) {
        if (node != null) {
            printTreeRecursive(node.left)
            print("${node.key} ")
            printTreeRecursive(node.right)
        }
    }
}

fun main() {
    val avlTree = AVLTree()

    // Insert elements into the AVL tree
    avlTree.insert(10)
    avlTree.insert(20)
    avlTree.insert(30)
    avlTree.insert(40)
    avlTree.insert(50)
    avlTree.insert(25)

    // Print the AVL tree
    avlTree.printTree()
}


main()

/*
In this code:

The TreeNode class represents a node in the AVL tree containing a key
and references to its left and right children.
The AVLTree class represents the AVL tree with methods to insert
elements and print the tree.
The height function returns the height of a node, the updateHeight
function updates the height of a node based on the heights of its children,
and the balanceFactor function calculates the balance factor of a node.
The rotateRight and rotateLeft functions perform right and left rotations,
respectively, on the AVL tree.
The insert method inserts a key into the AVL tree while maintaining
the AVL property by performing rotations as needed.
The printTree method prints the elements of the AVL tree in sorted order.
In the main function, elements are inserted into the AVL tree,
and then the AVL tree is printed to demonstrate the correctness
of the AVL tree implementation.
 */