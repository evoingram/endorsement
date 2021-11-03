// https://www.tutorialspoint.com/Dijkstra-s-algorithm-in-Javascript

class Graph {
    constructor() {
        this.edges = {};
        this.nodes = [];
    }
    addNode = (node) => {
        this.nodes.push(node);
        this.edges[node] = [];
    }
    addEdge = (node1, node2) => {
        this.edges[node1].push(node2);
        this.edges[node2].push(node1);
    }
    addDirectedEdge = (node1, node2) => {
        this.edges[node1].push(node2);
    }
    display = () => {
        let graph = ""; this.nodes.forEach(node => {
            graph += node + "->" + this.edges[node].join(", ") + "\n";
        });
        console.log(graph);
    };
    dijkstra(graph) {


        const lowestCostNode = (costs, processed) => {
            return Object.keys(costs).reduce((lowest, node) => {
                if (lowest === null || costs[node] < costs[lowest]) {
                    if (!processed.includes(node)) {
                        lowest = node;
                    }
                }
                return lowest;
            }, null);
        };

        // track lowest cost to reach each node
        const costs = Object.assign({ finish: Infinity }, graph.start);

        // track paths
        const parents = { finish: null };
        for (let child in graph.start) {
            parents[child] = 'start';
        }

        // track nodes that have already been processed
        const processed = [];

        let node = lowestCostNode(costs, processed);

        while (node) {
            let cost = costs[node];
            let children = graph[node];
            for (let n in children) {
                let newCost = cost + children[n];
                if (!costs[n]) {
                    costs[n] = newCost;
                    parents[n] = node;
                }
                if (costs[n] > newCost) {
                    costs[n] = newCost;
                    parents[n] = node;
                }
            }
            processed.push(node);
            node = lowestCostNode(costs, processed);
        }

        let optimalPath = ['finish'];
        let parent = parents.finish;
        while (parent) {
            optimalPath.push(parent);
            parent = parents[parent];
        }
        optimalPath.reverse();

        const results = {
            distance: costs.finish,
            path: optimalPath
        };

        return results;
    };

    dijkstra1(startNode) {
        let distances = {};

        // Stores the reference to previous nodes
        let prev = {};
        let pq = new PriorityQueue(this.nodes.length * this.nodes.length);

        // Set distances to all nodes to be infinite except startNode
        distances[startNode] = 0;
        pq.enqueue(startNode, 0);
        this.nodes.forEach(node => {
            if (node !== startNode) distances[node] = Infinity;
            prev[node] = null;
        });

        while (!pq.isEmpty()) {
            let minNode = pq.dequeue();
            let currNode = minNode.data;
            let weight = minNode.priority;
            if (this.edges && currNode) {
                this.edges[currNode].forEach(neighbor => {
                    let alt = distances[currNode] + neighbor.weight;
                    if (alt < distances[neighbor.node]) {
                        distances[neighbor.node] = alt;
                        prev[neighbor.node] = currNode;
                        pq.enqueue(neighbor.node, distances[neighbor.node]);
                    }
                });
            }
        }
        return distances;
    }
}
// User defined class
// to store element and its priority
class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// PriorityQueue class
class PriorityQueue {

    // An array is used to implement priority
    constructor() {
        this.items = [];
    }

    enqueue = (element, priority) => {
        var qElement = new QElement(element, priority);
        var contain = false;

        // iterating through item array to add element at the
        // correct location of the Queue
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the correct location is found it is
                // enqueued
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) this.items.push(qElement);
    }
    dequeue = () => {
        if (this.isEmpty()) return "Queue Underflow";
        return this.items.shift();
    }
    front = () => {
        // returns highest priority element w/o removing it.
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    rear = () => {
        // returns lowest priority element
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[this.items.length - 1];
    }
    isEmpty = () => this.items.length == 0;

    printPQueue = () => {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i].element + " ";
        return str;
    }
}




let g = new Graph();
g.addNode("start");
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("finish");

g.addDirectedEdge("start", "A", 5);
g.addDirectedEdge("start", "B", 2);
g.addDirectedEdge("A", "C", 4);
g.addDirectedEdge("A", "D", 2);
g.addDirectedEdge("B", "A", 8);
g.addDirectedEdge("B", "D", 7);
g.addDirectedEdge("C", "D", 6);
g.addDirectedEdge("C", "finish", 3);
g.addDirectedEdge("D", "finish", 1);

console.log(JSON.stringify(g));
console.log(g.dijkstra("start"));

const problem = {
    start: { A: 5, B: 2 },
    A: { C: 4, D: 2 },
    B: { A: 8, D: 7 },
    C: { D: 6, finish: 3 },
    D: { finish: 1 },
    finish: {}
};

const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

// function that returns the minimum cost and path to reach Finish
const dijkstra = (graph) => {

    // track lowest cost to reach each node
    const costs = Object.assign({ finish: Infinity }, graph.start);

    // track paths
    const parents = { finish: null };
    for (let child in graph.start) {
        parents[child] = 'start';
    }

    // track nodes that have already been processed
    const processed = [];

    let node = lowestCostNode(costs, processed);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            let newCost = cost + children[n];
            if (!costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    let optimalPath = ['finish'];
    let parent = parents.finish;
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs.finish,
        path: optimalPath
    };

    return results;
};

console.log(dijkstra(problem));