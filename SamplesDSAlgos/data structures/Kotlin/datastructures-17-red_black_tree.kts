// Red-Black Tree:
// O(log n) for insertion, deletion, and search
// O(1) for rotations and color changes
enum class Color {
    RED,
    BLACK
}

class Node(var key: Int, var color: Color) {
    var parent: Node? = null
    var left: Node? = null
    var right: Node? = null
}

class RedBlackTree {
    private var root: Node? = null

    fun insert(key: Int) {
        val newNode = Node(key, Color.RED)
        root = insertRecursive(root, newNode)
        fixViolation(newNode)
    }

    private fun insertRecursive(root: Node?, newNode: Node): Node {
        if (root == null) {
            return newNode
        }

        if (newNode.key < root.key) {
            root.left = insertRecursive(root.left, newNode)
            root.left?.parent = root
        } else if (newNode.key > root.key) {
            root.right = insertRecursive(root.right, newNode)
            root.right?.parent = root
        }

        return root
    }

    private fun fixViolation(newNode: Node) {
        var currentNode = newNode

        while (currentNode != root && currentNode.parent?.color == Color.RED) {
            val parent = currentNode.parent
            val grandParent = currentNode.parent?.parent

            if (parent == grandParent?.left) {
                val uncle = grandParent?.right

                if (uncle != null && uncle.color == Color.RED) {
                    parent?.color = Color.BLACK
                    uncle?.color = Color.BLACK
                    grandParent.color = Color.RED
                    currentNode = grandParent
                } else {
                    if (currentNode == parent?.right) {
                        currentNode = parent
                        leftRotate(currentNode)
                    }

                    currentNode.parent?.let { parent ->
                        grandParent?.let { grandParent ->
                            parent.color = Color.BLACK
                            grandParent.color = Color.RED
                            rightRotate(grandParent)
                        }
                    }
                }
            } else {
                val uncle = grandParent?.left

                if (uncle != null && uncle.color == Color.RED) {
                    parent?.color = Color.BLACK
                    uncle.color = Color.BLACK
                    grandParent.color = Color.RED
                    currentNode = grandParent
                } else {
                    if (currentNode == parent?.left) {
                        currentNode = parent
                        rightRotate(currentNode)
                    }

                    currentNode.parent?.let { parent ->
                        grandParent?.let { grandParent ->
                            parent.color = Color.BLACK
                            grandParent.color = Color.RED
                            leftRotate(grandParent)
                        }
                    }
                }
            }
        }

        root?.color = Color.BLACK
    }

    private fun leftRotate(node: Node?) {
        if (node == null) return
        val rightChild = node.right ?: return

        node.right = rightChild.left
        rightChild.left?.parent = node

        rightChild.parent = node.parent
        if (node.parent == null) {
            root = rightChild
        } else if (node == node.parent!!.left) {
            node.parent!!.left = rightChild
        } else {
            node.parent!!.right = rightChild
        }

        rightChild.left = node
        node.parent = rightChild
    }

    private fun rightRotate(node: Node?) {
        if (node == null) return
        val leftChild = node.left ?: return

        node.left = leftChild.right
        leftChild.right?.parent = node

        leftChild.parent = node.parent
        if (node.parent == null) {
            root = leftChild
        } else if (node == node.parent!!.right) {
            node.parent!!.right = leftChild
        } else {
            node.parent!!.left = leftChild
        }

        leftChild.right = node
        node.parent = leftChild
    }

    fun printTree() {
        println("Red-Black Tree:")
        printTreeRecursive(root)
        println()
    }

    private fun printTreeRecursive(node: Node?) {
        if (node != null) {
            printTreeRecursive(node.left)
            println("${node.key} (${node.color})")
            printTreeRecursive(node.right)
        }
    }
}

fun main() {
    val redBlackTree = RedBlackTree()

    // Insert elements into the Red-Black Tree
    redBlackTree.insert(10)
    redBlackTree.insert(20)
    redBlackTree.insert(30)
    redBlackTree.insert(40)
    redBlackTree.insert(50)

    // Print the Red-Black Tree
    redBlackTree.printTree()
}



main()

/*
In this code:

The Node class represents a node in the Red-Black Tree
containing a key, color, and references to its parent,
left child, and right child.
The RedBlackTree class represents the Red-Black Tree with
methods to insert elements and print the tree.
The insert method inserts a key into the Red-Black Tree
and fixes any violations of the Red-Black Tree properties.
The fixViolation method is a helper function to fix any
violations of the Red-Black Tree properties after inserting a new node.
The leftRotate and rightRotate methods perform left and
right rotations, respectively, to maintain the balance of the Red-Black Tree.
The printTree method prints the elements of the
Red-Black Tree along with their colors.
In the main function, elements are inserted into the Red-Black Tree,
and then the Red-Black Tree is printed to demonstrate its correctness.
 */