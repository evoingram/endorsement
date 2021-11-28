
// see also https://jarednielsen.com/data-structure-graph-topological-sort/
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

class Graph1 {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++) this.adj[i] = [];
    }
    addEdge = (v, w) => this.adj[v].push(w);
    dfsUtil = (v, visited) => {
        visited[v] = true;
        console.log(v + " ");
        for (let i of this.adj[v].values()) {
            let n = i;
            if (!visited[n]) this.dfsUtil(n, visited);
        }
    }
    dfs = (v) => {
        let visited = new Array(this.V);
        for (let i = 0; i < this.V; i++) visited[i] = false;
        this.dfsUtil(v, visited);
    }
    bfs(startingNode) {
        let visited = {};
        let q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);
        while (!q.isEmpty()) {
            let getQueueElement = q.dequeue();
            console.log(getQueueElement);
            let getList = Object.values(this.adj[getQueueElement]);
            for (let i in getList) {
                let neighbor = getList[i];

                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.enqueue(neighbor);
                }
            }
        }
    }
    printGraph = () => {
        let keys = Object.keys(this.adj);
        for (let i of keys) {
            let values = Object.values(this.adj[i]);
            let conc = "";
            for (let value of values) conc += `${value} `;
            console.log(`${i} -> ${conc}`);
        }
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
}class Graph {
    constructor(v) {
        this.V = v;
        this.alist = new Array(v);
        for (let x = 0; x < v; x++) this.alist[x] = [];
    }
    addEdge = (v, w) => this.alist[v].push(w);
    dfsUtil = (v, visited) => {
        visited[v] = true;
        console.log(v + " ");
        for (let x of this.alist[v].values()) {
            let n = x;
            if (!visited[n]) this.dfsUtil(n, visited);
        }
    }
    dfs = (v) => {
        let visited = new Array(this.V);
        for (let x = 0; x < this.V; x++) visited[x] = false;
        this.dfsUtil(v, visited);
    }
    bfs = (startingNode) => {
        let visited = {};
        let q = new Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);
        while (!q.isEmpty()) {
            let currentQElement = q.dequeue();
            console.log(currentQElement);
            let list = Object.values(this.alist[currentQElement]);
            for (let key in list) {
                let neighbor = list[key];
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.enqueue(neighbor);
                }
            }
        }
    }
    printGraph = () => {
        let keys = Object.keys(this.alist);
        for (let key of keys) {
            let values = Object.values(this.alist[key]);
            let conc = ``;
            for (let value of values) conc += `${value} `;
            console.log(`${key} -> ${conc}`);
        }
    }
    vertexWithMinDistance = (distances, visited) => {
        let mindist = Infinity;
        let minvert = null;
        for (let vertex in distances) {
            let distance = distances[vertex];
            if (distance < mindist && !visited.has(vertex)) {
                mindist = distance;
                minvert = vertex;
            }
        }
        return minvert;
    }
    dijkstra = (source) => {
        let distances = {}, parents = {}, visited = new Set();
        for (let x = 0; x < this.alist.length; x++) {
            if (this.V[x] === source) distances[source] = 0
            else distances[this.alist[x]] = Infinity;
            parents[this.alist[x]] = null;
        }
        let cv = this.vertexWithMinDistance(distances, visited);
        while (cv !== null) {
            let distance = distances[cv];
            let neighbors = this.alist[cv];
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

/*
class Graph {
    constructor() {}
    addEdge = () => {};
    dfsUtil = () => {}
    dfs = () => {}
    bfs = () => {}
    printGraph = () => {}
    vertexWithMinDistance = () => {}
    dijkstra = () => {}
}
*/
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