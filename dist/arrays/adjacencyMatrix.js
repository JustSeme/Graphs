"use strict";
/*
Задача: Реализуй два способа представления графа:

Список смежности
Матрица смежности
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdjacencyMatrixGraph = void 0;
class AdjacencyMatrixGraph {
    vertices;
    matrix;
    constructor(vertices, matrix) {
        this.vertices = vertices;
        this.matrix = matrix;
    }
    addVertex(vertex) {
        if (this.vertices.includes(vertex))
            throw new Error(`Vertex ${vertex} already exists`);
        this.vertices.push(vertex);
        for (const row of this.matrix) {
            row.push(0);
        }
        this.matrix.push(new Array(this.vertices.length).fill(0));
    }
    addEdge(from, to) {
        const fromIndex = this.vertices.indexOf(from);
        const toIndex = this.vertices.indexOf(to);
        if (fromIndex === -1 || toIndex === -1)
            throw new Error(`Vertex ${from} or vertex ${to} does not exists, cannot add edge.`);
        this.matrix[fromIndex][toIndex] = 1;
    }
    displayGraph() {
        console.log("Adjacency matrix graph:");
        console.log("  ", this.vertices.join(" "));
        this.matrix.forEach((row, index) => {
            console.log(this.vertices[index], row.join(" "));
        });
    }
}
exports.AdjacencyMatrixGraph = AdjacencyMatrixGraph;
const vertices = ['A', 'B', 'C', 'D'];
// A,B,C,D * A,B,C,D
const adjacencyMatrixGraph = [
    [0, 1, 1, 0], // A
    [0, 0, 0, 1], // B
    [0, 0, 0, 1], // C
    [0, 0, 0, 0], // D
];
const graphInstance = new AdjacencyMatrixGraph(['A', 'B', 'C', 'D'], adjacencyMatrixGraph);
console.log('Start');
graphInstance.displayGraph();
const newMatrixVertex = 'E';
console.log(`Add vertex ${newMatrixVertex}`);
graphInstance.addVertex(newMatrixVertex);
const newMatrixVertex2 = 'F';
console.log(`Add vertex ${newMatrixVertex2}`);
graphInstance.addVertex(newMatrixVertex2);
const newMatrixEdge = 'F';
console.log(`Add edge ${newMatrixEdge} for ${newMatrixVertex}`);
graphInstance.addEdge(newMatrixVertex, newMatrixEdge);
graphInstance.displayGraph();
