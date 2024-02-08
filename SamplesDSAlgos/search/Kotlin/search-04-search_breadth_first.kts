import java.util.*

// Breadth-First Search (BFS):
// Time Complexity: O(V + E)
// Space Complexity: O(V)
class Graph(private val numVertices: Int) {
    private val adjacencyList: Array<MutableList<Int>> = Array(numVertices) { mutableListOf() }

    fun addEdge(from: Int, to: Int) {
        adjacencyList[from].add(to)
    }

    fun bfs(startVertex: Int) {
        val visited = BooleanArray(numVertices)
        val queue: Queue<Int> = LinkedList()

        visited[startVertex] = true
        queue.add(startVertex)

        while (queue.isNotEmpty()) {
            val currentVertex = queue.poll()
            print("$currentVertex ")

            for (adjacentVertex in adjacencyList[currentVertex]) {
                if (!visited[adjacentVertex]) {
                    visited[adjacentVertex] = true
                    queue.add(adjacentVertex)
                }
            }
        }
    }
}

fun main() {
    val graph = Graph(7)

    graph.addEdge(0, 1)
    graph.addEdge(0, 2)
    graph.addEdge(1, 3)
    graph.addEdge(1, 4)
    graph.addEdge(2, 5)
    graph.addEdge(2, 6)

    println("Breadth-First Search traversal starting from vertex 0:")
    graph.bfs(0)
}


main()
// not sure if this is the right algorithm.

/*
In this code:

Graph class represents a graph using an adjacency list representation.
addEdge function is used to add edges between vertices.
bfs function performs breadth-first search traversal starting from a given vertex.
In the main function, a sample graph is created with vertices and edges,
and then breadth-first search is performed starting from vertex 0.
The visited vertices are printed during the traversal to demonstrate
the correctness of the breadth-first search algorithm.
 */