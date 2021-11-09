// https://reginafurness.medium.com/representing-a-weighted-graph-with-an-adjacency-matrix-in-javascript/
class Graph {
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
            while ( vertex < this.size - 1) {  
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
