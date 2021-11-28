
class Queue {
    constructor() {
        this.size = 0;
        this.storage = [];
    }
    enqueue = (value) => {
        this.size++;
        this.storage.push(value);
    }
    dequeue = () => {
        if (this.size === 0) return new Error(`Empty Queue`);
        this.size--;
        return this.storage.shift();
    }
    isEmpty = () => this.size === 0;
    get len() { return this.size }
    printQueue = () => {
        let string = `{ `;
        for (let x = 0; x < this.size; x++) string += `${x}:  ${this.storage[x]}, `;
        string = `${string.trim()} }`;
        return string;
    }
    front = () => this.storage[0];
    back = () => this.storage[this.size - 1];
    static isQueue(ti) { return ti instanceof Queue }
}

class Graph {

    // Constructor
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++) this.adj[i] = [];
    }

    addEdge(v, w) {

        // Add w to v's list.
        this.adj[v].push(w);
    }

    DFSUtil(v, visited) {

        // Mark the current node as visited and print it
        visited[v] = true;
        console.log(v + " ");

        // Recur for all the vertices adjacent to this
        // vertex
        for (let i of this.adj[v].values()) {
            let n = i
            if (!visited[n])
                this.DFSUtil(n, visited);
        }
    }

    dfs(v) {

        // Mark all the vertices as
        // not visited(set as
        // false by default in java)
        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++)
            visited[i] = false;

        // Call the recursive helper
        // function to print DFS
        // traversal
        this.DFSUtil(v, visited);
    }
    bfs(startingNode) {

        var visited = {};
        var q = new Queue();

        // add the starting node to the queue
        visited[startingNode] = true;
        q.enqueue(startingNode);

        // loop until queue is element
        while (!q.isEmpty()) {
            // get the element from the queue
            var getQueueElement = q.dequeue();

            // passing the current vertex to callback function
            console.log(getQueueElement);

            // get the adjacent list for current vertex
            var get_List = Object.values(this.adj[getQueueElement]);

            // loop through the list and add the element to the
            // queue if it is not processed yet
            for (var i in get_List) {
                var neighbor = get_List[i];

                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.enqueue(neighbor);
                }
            }
        }
    }
    printGraph = () => {
        var keys = Object.keys(this.adj);
        for (var i of keys) {
            var values = Object.values(this.adj[i]);
            var conc = "";
            for (var j of values)
                conc += j + " ";
            console.log(i + " -> " + conc);
        }
    }
    topoSort(v = this.V[0], discovered = [], s) {
        // https://jarednielsen.com/data-structure-graph-topological-sort/
        const stack = s || [];
        let adj = this.adj;
        discovered[v] = true;
        console.log(`adj = ${adj} || v = ${v}`);
        for (let i = 0; i < adj[v].length; i++){
            let w = adj[v][i];
            if (!discovered[w]) this.topoSort(w, discovered, stack);
        }
        stack.unshift(v);
        return stack || false;
    }
    vertexWithMinDistance(distances, visited) {
        let minDistance = Infinity,
            minVertex = null;
        for (let vertex in distances) {
            let distance = distances[vertex];
            if (distance < minDistance && !visited.has(vertex)) {
                minDistance = distance;
                minVertex = vertex;
            }
        }
        return minVertex;
    }
    dijkstra(source) {
        let distances = {}, parents = {}, visited = new Set();
        console.log(`this.V = ${this.V}`);
        for (let x = 0; x < this.adj.length; x++) {
            if (this.V[x] === source) distances[source] = 0;
            else distances[this.adj[x]] = Infinity;
            parents[this.adj[x]] = null;
        }
        let cv = this.vertexWithMinDistance(distances, visited);
        while (cv !== null) {
            let distance = distances[cv],
                neighbors = this.adj[cv];
            for (let neighbor in neighbors) {
                let newdist = distance + neighbors[neighbor];
                if (distances[neighbor] > newdist) {
                    distances[neighbor] = newdist;
                    parents[neighbor] = cv;
                }
            }
            visited.add(cv);
            cv = this.vertexWithMinDistance(distances, visited);
        }
        console.log(` parents =   ${JSON.stringify(parents)}`);
        console.log(` distances = ${JSON.stringify(distances)}`);
    }
}
g = new Graph(4);

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log("Depth First Traversal");
g.dfs(2);
console.log("Breadth First Traversal");
g.bfs(2);
console.log("-----printGraph-----");
g.printGraph();
console.log("--------djikstra------------");
g.dijkstra(2);
console.log("----------------------------");