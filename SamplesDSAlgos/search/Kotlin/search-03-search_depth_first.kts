// Depth-First Search (DFS):
// Time Complexity: O(V + E)
// Space Complexity: O(V) (for recursive implementation)
class Graph(private val numVertices: Int) {
    private val adjacencyList: Array<MutableList<Int>> = Array(numVertices) { mutableListOf() }

    fun addEdge(from: Int, to: Int) {
        adjacencyList[from].add(to)
    }

    fun dfs(startVertex: Int) {
        val visited = BooleanArray(numVertices)

        dfsRecursive(startVertex, visited)
    }

    private fun dfsRecursive(vertex: Int, visited: BooleanArray) {
        visited[vertex] = true
        print("$vertex ")

        for (adjacentVertex in adjacencyList[vertex]) {
            if (!visited[adjacentVertex]) {
                dfsRecursive(adjacentVertex, visited)
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

    println("Depth-First Search traversal starting from vertex 0:")
    graph.dfs(0)
}


main()
// not sure if this is right data structure/search.

/*
In this code:

Graph class represents a graph using an adjacency list representation.
addEdge function is used to add edges between vertices.
dfs function performs depth-first search traversal
starting from a given vertex.
dfsRecursive function is a helper function
for dfs to perform recursive depth-first traversal.
In the main function, a sample graph is created with vertices and edges,
and then depth-first search is performed starting from vertex 0.
The visited vertices are printed during the traversal to demonstrate the
correctness of the depth-first search algorithm.
 */