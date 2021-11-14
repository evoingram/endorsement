// https://reginafurness.medium.com/representing-a-weighted-graph-with-an-adjacency-matrix-in-javascript/
class Graph1 {
    constructor(size = 1) {
        this.size = size;
        this.matrix = [];
        for (let i = 0; i < size; i++) {
            this.matrix.push([]);
            for (let j = 0; j < size; j++) {
                this.matrix[i][j] = 0;
            }
        }
    }
    addEdge(vertex1, vertex2, weight = 1) {
        if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
            console.log('invalid vertex');
        } else if (vertex1 === vertex2) {
            console.log('same vertex');
        } else {
            this.matrix[vertex1][vertex2] = weight;
            this.matrix[vertex2][vertex1] = weight;
        }
    }
    removeEdge(vertex1, vertex2) {
        if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
            console.log('invalid vertex');
        } else if (vertex1 === vertex2) {
            console.log('same vertex');
        } else {
            this.matrix[vertex1][vertex2] = 0;
            this.matrix[vertex2][vertex1] = 0;
        }
    }
    addVertex() {
        this.size++;
        this.matrix.push([]);
        for (let i = 0; i < this.size; i++) {
            this.matrix[i][this.size - 1] = 0;
            this.matrix[this.size - 1][i] = 0;
        }
    }
    removeVertex(vertex) {
        if (vertex < 0 || vertex > this.size - 1) {
            console.log('Invalid vertex');
        } else {
            while (vertex < this.size - 1) {
                for (let i = 0; i < this.size; i++) {
                    this.matrix[i][vertex] = graph[i][vertex + 1];
                }
                for (let i = 0; i < this.size; i++) {
                    this.matrix[vertex][i] = this.matrix[vertex + 1][i];
                }
                vertex++;
            }
            this.matrix.pop();
            this.size--;
        }
    }
    printMatrix() {
        for (let i = 0; i < this.size; i++) {
            let row = '';
            for (let j = 0; j < this.size; j++) {
                row += ` ${this.matrix[i][j]}`;
            }
            console.log(row);
        }
    }
}
class Graph {
    constructor(size = 1) {
        this.size = size;
        this.matrix = [];
        for (let x = 0; x < size; x++) {
            this.matrix.push([]);
            for (let y = 0; y < size; y++) this.matrix[x][y] = 0;
        }
    }
    addEdge(v1, v2, weight = 1) {
        if (v1 > this.size - 1 || v2 > this.size - 1) {
            console.error(`Invalid vertex.`);
            return new Error(`Invalid vertex.`)
        }
        else if (v1 === v2) {
            console.error(`Same vertex.`);
            return new Error(`Same vertex.`);
        } else {
            this.matrix[v1][v2] = weight;
            this.matrix[v2][v1] = weight;
        }
    }
    removeEdge(v1, v2) {
        if (v1 > this.size - 1 || v2 > this.size - 1) {
            console.error(`Invalid vertex.`);
            return new Error(`Invalid vertex.`);
        } else if (v1 === v2) {
            console.error(`Same vertex.`);
            return new Error(`Same vertex.`);
        } else {
            this.matrix[v1][v2] = 0;
            this.matrix[v2][v1] = 0;
        }
    }
    addVertex() {
        this.size++;
        this.matrix.push([]);
        for (let x = 0; x < this.size; x++) {
            this.matrix[x][this.size - 1] = 0;
            this.matrix[this.size - 1][x] = 0;
        }
    }
    removeVertex(vertex) {
        if (vertex < 0 || vertex > this.size - 1) console.error(`Invalid vertex.`);
        else {
            while(vertex < this.size - 1) {
                for (let x = 0; x < this.size; x++) {
                    this.matrix[x][vertex] = graph[x][vertex - 1];
                }
                for (let x = 0; x < this.size; x++) {
                    this.matrix[vertex][x] = graph[vertex - 1][x];
                }
                vertex++;
            }
            this.matrix.pop();
            this.size--;
        }
    }
    printMatrix() {
        for (let x = 0; x < this.size; x++) {
            let row = ``;
            for (let y = 0; y < this.size; y++) row += ` ${this.matrix[x][y]}`;
            console.log(row);
        }
    }
}
/*

class Graph {
    constructor(size = 1) {}
    addEdge(vertex1, vertex2, weight = 1) {}
    removeEdge(vertex1, vertex2) {}
    addVertex() {}
    removeVertex(vertex) {}
    printMatrix() {}
}
*/
let g = new Graph();

// add the vertices
g.addVertex();
g.addVertex();
g.addVertex();
g.addVertex();

console.log(g);
g.printMatrix();
// create the edges
g.addEdge(0, 1, 3);
g.addEdge(4, 2, 2);
g.addEdge(2, 3, 5);
g.addEdge(3, 4, 6);
console.log('------');

// should log
// { A: null, B: 'A', C: 'A', D: 'B' 
// { A: 0, B: 3, C: 2, D: 5 }
g.printMatrix();