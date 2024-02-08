class AdjacencyMatrix(private val numVertices: Int) {
    private val matrix: Array<IntArray> = Array(numVertices) { IntArray(numVertices) }

    fun addEdge(fromVertex: Int, toVertex: Int) {
        matrix[fromVertex][toVertex] = 1
        matrix[toVertex][fromVertex] = 1 // For undirected graphs
    }

    fun printMatrix() {
        for (row in matrix) {
            for (element in row) {
                print("$element ")
            }
            println()
        }
    }
}

fun main() {
    val adjacencyMatrix = AdjacencyMatrix(5)

    adjacencyMatrix.addEdge(0, 1)
    adjacencyMatrix.addEdge(0, 4)
    adjacencyMatrix.addEdge(1, 2)
    adjacencyMatrix.addEdge(1, 3)
    adjacencyMatrix.addEdge(1, 4)
    adjacencyMatrix.addEdge(2, 3)
    adjacencyMatrix.addEdge(3, 4)

    adjacencyMatrix.printMatrix()
}


main()

/*
This code creates an AdjacencyMatrix class that
represents a graph using an adjacency matrix.
It allows adding edges between vertices and
printing the adjacency matrix to the console.
The main function demonstrates how to use this
class by adding edges to the graph and printing
the adjacency matrix.
 */