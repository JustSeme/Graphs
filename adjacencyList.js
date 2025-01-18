"use strict";
class AdjacencyListGraph {
    constructor(graph) {
        this.graph = graph;
    }
    addVertex(vertex) {
        if (!!this.graph[vertex])
            throw new Error(`Vertex ${vertex} already exists`);
        this.graph[vertex] = [];
    }
    addEdge(from, to) {
        if (!this.graph[from])
            throw new Error(`Vertex ${from} not exists. Cannot add edge for it`);
        if (this.graph[from].indexOf(to) !== -1)
            throw new Error(`Edge ${to} for vertex ${from} already exists`);
        this.graph[from].push(to);
    }
    displayGraph() {
        console.log('Adjacency list graph: ');
        for (const vertex in this.graph) {
            const edges = this.graph[vertex].join(', ');
            console.log(`${vertex} --> ${edges}`);
        }
    }
}
const adjacencyListGraph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D'],
};
const graphInstance = new AdjacencyListGraph(adjacencyListGraph);
console.log('Start');
graphInstance.displayGraph();
const newVertex = 'D';
console.log(`Add vertex ${newVertex}`);
graphInstance.addVertex(newVertex);
const newEdge = 'J';
console.log(`Add edge ${newEdge} for ${newVertex}`);
graphInstance.addEdge(newVertex, newEdge);
graphInstance.displayGraph();
