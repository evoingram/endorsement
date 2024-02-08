import java.util.*

class Graph {
    private val vertices: MutableMap<Int, MutableMap<Int, Int>> = mutableMapOf()

    fun addEdge(source: Int, destination: Int, weight: Int) {
        vertices.computeIfAbsent(source) { mutableMapOf() }[destination] = weight
        vertices.computeIfAbsent(destination) { mutableMapOf() }[source] = weight
    }

    fun dijkstra(startVertex: Int) {
        val distances = mutableMapOf<Int, Int>()
        val pq = PriorityQueue<Pair<Int, Int>>(compareBy { it.second })
        val visited = mutableSetOf<Int>()

        vertices.keys.forEach { vertex ->
            distances[vertex] = Int.MAX_VALUE
        }

        distances[startVertex] = 0
        pq.offer(startVertex to 0)

        while (pq.isNotEmpty()) {
            val (currentVertex, currentDistance) = pq.poll()
            visited.add(currentVertex)

            vertices[currentVertex]?.forEach { (adjacentVertex, weight) ->
                if (adjacentVertex !in visited) {
                    val newDistance = currentDistance + weight
                    if (newDistance < distances[adjacentVertex]!!) {
                        distances[adjacentVertex] = newDistance
                        pq.offer(adjacentVertex to newDistance)
                    }
                }
            }
        }

        println("Shortest distances from vertex $startVertex:")
        distances.forEach { (vertex, distance) ->
            println("Vertex $vertex: $distance")
        }
    }
}

fun main() {
    val graph = Graph()
    graph.addEdge(0, 1, 4)
    graph.addEdge(0, 7, 8)
    graph.addEdge(1, 2, 8)
    graph.addEdge(1, 7, 11)
    graph.addEdge(2, 3, 7)
    graph.addEdge(2, 8, 2)
    graph.addEdge(2, 5, 4)
    graph.addEdge(3, 4, 9)
    graph.addEdge(3, 5, 14)
    graph.addEdge(4, 5, 10)
    graph.addEdge(5, 6, 2)
    graph.addEdge(6, 7, 1)
    graph.addEdge(6, 8, 6)
    graph.addEdge(7, 8, 7)

    graph.dijkstra(0)
}


main()

/*
This code implements Dijkstra's algorithm using a priority queue.
It finds the shortest distances from a starting vertex to
all other vertices in the graph. The priority queue is used
to select the vertex with the smallest distance for
exploration at each step of the algorithm.
 */