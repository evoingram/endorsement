import java.util.*

class WeightedGraph(private val numVertices: Int) {
    private val adjacencyList: Array<MutableList<Pair<Int, Int>>> = Array(numVertices) { mutableListOf() }

    fun addEdge(source: Int, destination: Int, weight: Int) {
        adjacencyList[source].add(Pair(destination, weight))
        // For undirected graph, uncomment the line below
        // adjacencyList[destination].add(Pair(source, weight))
    }

    fun dijkstra(source: Int) {
        val minDistances = IntArray(numVertices) { Int.MAX_VALUE }
        minDistances[source] = 0

        val priorityQueue = PriorityQueue<Pair<Int, Int>>(compareBy { it.second })
        priorityQueue.offer(Pair(source, 0))

        while (priorityQueue.isNotEmpty()) {
            val (currentVertex, currentDistance) = priorityQueue.poll()

            // Skip if the current distance is greater than the known minimum distance
            if (currentDistance > minDistances[currentVertex]) {
                continue
            }

            for ((neighbor, weight) in adjacencyList[currentVertex]) {
                val distanceThroughCurrent = currentDistance + weight
                if (distanceThroughCurrent < minDistances[neighbor]) {
                    minDistances[neighbor] = distanceThroughCurrent
                    priorityQueue.offer(Pair(neighbor, distanceThroughCurrent))
                }
            }
        }

        println("Shortest distances from source vertex $source:")
        for (i in 0 until numVertices) {
            println("Vertex $i: ${if (minDistances[i] != Int.MAX_VALUE) minDistances[i] else "Infinity"}")
        }
    }
}

fun main() {
    val graph = WeightedGraph(6)

    // Add weighted edges to the graph
    graph.addEdge(0, 1, 4)
    graph.addEdge(0, 2, 1)
    graph.addEdge(1, 3, 1)
    graph.addEdge(2, 1, 2)
    graph.addEdge(2, 3, 5)
    graph.addEdge(3, 4, 3)
    graph.addEdge(4, 5, 2)

    // Find shortest distances from source vertex 0 using Dijkstra's algorithm
    graph.dijkstra(0)
}


main()

/*
In this code:

The WeightedGraph class represents a weighted graph with methods to add
weighted edges and find the shortest distances from a source vertex using Dijkstra's algorithm.
The addEdge method adds a weighted edge from a source vertex
to a destination vertex with a given weight.
The dijkstra method finds the shortest distances from a
specified source vertex to all other vertices in the graph using Dijkstra's algorithm.
In the main function, weighted edges are added to the graph,
and then Dijkstra's algorithm is used to find the shortest distances
from source vertex 0. The shortest distances are printed to the console,
demonstrating the correctness of Dijkstra's algorithm implementation.
 */