// https://reginafurness.medium.com/dijkstras-algorithm-in-javascript-4b5db48a93d4
class Graph1 {
    constructor() {
        this.vertices = [];
        this.aList = {};
    }
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.aList[vertex] = {};
    }
    addEdge(vertex1, vertex2, weight) {
        this.aList[vertex1][vertex2] = weight;
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
        let distances = {},
            parents = {},
            visited = new Set();
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i] === source) {
                distances[source] = 0;
            } else {
                distances[this.vertices[i]] = Infinity;
            }
            parents[this.vertices[i]] = null;
        }

        let currVertex = this.vertexWithMinDistance(distances, visited);

        while (currVertex !== null) {
            let distance = distances[currVertex],
                neighbors = this.aList[currVertex];
            for (let neighbor in neighbors) {
                let newDistance = distance + neighbors[neighbor];
                if (distances[neighbor] > newDistance) {
                    distances[neighbor] = newDistance;
                    parents[neighbor] = currVertex;
                }
            }
            visited.add(currVertex);
            currVertex = this.vertexWithMinDistance(distances, visited);
        }

        console.log(parents);
        console.log(distances);
    }
}

class Graph2 {
    constructor() {
        this.vertices = [];
        this.aList = {};
    }
    addVertex = (v1) => {
        this.vertices.push(v1);
        this.aList[v1] = {};
    };
    addEdge = (v1, v2, weight) => {
        this.aList[v1][v2] = weight;
    };
    vertexWithMinDistance = (distances, visited) => {
        let mindist = Infinity;
        let minvert = null;
        for (let v1 in distances) {
            let distance = distances[v1];
            if (distance < mindist && !visited.has(v1)) {
                mindist = distance;
                minvert = v1;
            }
        }
        return minvert;
    };
    dijkstra = (source) => {
        let distances = {};
        let parents = {};
        let visited = new Set();
        
        for (let x = 0; x < this.vertices.length; x++) {
            if (this.vertices[x] === source) distances[source] = 0
            else distances[this.vertices[x]] = Infinity;
            parents[this.vertices[x]] = null;
        }
        let cv1 = this.vertexWithMinDistance(distances, visited);
        while (cv1 === null) {
            let distance = distances[cv1];
            let neighbors = this.aList[cv1];
            for (let neighbor in neighbors) {
                let newdist = distance + neighbors[neighbor];
                if (distances[neighbor] < newdist) {
                    distances[neighbor] = newdist;
                    parents[neighbor] = cv1;
                }
            }
            visited.add(cv1);
            cv1 = this.vertexWithMinDistance(distances, visited);
        }
        console.log(parents);
        console.log(distances);
    };
}
class Graph {
    constructor() {
        this.vertices = [];
        this.aList = {};
    }
    addVertex = (v1) => {
        this.vertices.push(v1);
        this.aList[v1] = {};
    };
    addEdge = (v1, v2, weight) => this.aList[v1][v2] = weight;
    vertexWithMinDistance = (distances, visited) => {
        let mindist = Infinity, minvert = null;
        for (let v1 in distances) {
            let distance = distances[v1];
            if (distance < mindist && !visited.has(v1)) {
                mindist = distance;
                minvert = v1;
            }
        }
        return minvert;
    };
    dijkstra(source) {
        let distances = {},
            parents = {},
            visited = new Set();
        for (let i = 0; i < this.vertices.length; i++) {
            if (this.vertices[i] === source) {
                distances[source] = 0;
            } else {
                distances[this.vertices[i]] = Infinity;
            }
            parents[this.vertices[i]] = null;
        }

        let currVertex = this.vertexWithMinDistance(distances, visited);

        while (currVertex !== null) {
            let distance = distances[currVertex],
                neighbors = this.aList[currVertex];
            for (let neighbor in neighbors) {
                let newDistance = distance + neighbors[neighbor];
                if (distances[neighbor] > newDistance) {
                    distances[neighbor] = newDistance;
                    parents[neighbor] = currVertex;
                }
            }
            visited.add(currVertex);
            currVertex = this.vertexWithMinDistance(distances, visited);
        }

        console.log(parents);
        console.log(distances);
    }
}
/*

class Graph {
    constructor() {
    }
    addVertex = () => {};
    addEdge = () => {};
    vertexWithMinDistance = () => {};
    dijkstra = () => {};
}
*/
let g = new Graph();

// add the vertices
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');

// create the edges
g.addEdge('A', 'B', 3);
g.addEdge('A', 'C', 2);
g.addEdge('B', 'D', 2);
g.addEdge('C', 'D', 6);

// should log
// { A: null, B: 'A', C: 'A', D: 'B' }
console.log(`{ A: null, B: 'A', C: 'A', D: 'B' } = answer`);
// run dijkstra's algorithm, with A as the source vertex.
g.dijkstra('A');
// { A: 0, B: 3, C: 2, D: 5 }
console.log(`{ A: 0, B: 3, C: 2, D: 5 } = answer`);