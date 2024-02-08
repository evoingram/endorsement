
class Graph(private val numVertices: Int) {
    private val adjacencyList: Array<MutableList<Int>> = Array(numVertices) { mutableListOf() }

    fun addEdge(vertex1: Int, vertex2: Int) {
        adjacencyList[vertex1].add(vertex2)
        adjacencyList[vertex2].add(vertex1) // For undirected graph
    }

    fun printAdjacencyList() {
        println("Adjacency List:")
        for (vertex in 0 until numVertices) {
            print("$vertex -> ")
            for (adjacentVertex in adjacencyList[vertex]) {
                print("$adjacentVertex ")
            }
            println()
        }
    }
}

fun main() {
    // Create a graph with 5 vertices
    val graph = Graph(5)

    // Add edges
    graph.addEdge(0, 1)
    graph.addEdge(0, 4)
    graph.addEdge(1, 2)
    graph.addEdge(1, 3)
    graph.addEdge(1, 4)
    graph.addEdge(2, 3)
    graph.addEdge(3, 4)

    // Print the adjacency list
    graph.printAdjacencyList()
}


main()

/*
This code creates a Graph class with methods to add
edges between vertices and print the adjacency list.
In the main function, we create a graph with 5 vertices
and add some edges. Then, we print the adjacency list
to verify that it is correct.
 */