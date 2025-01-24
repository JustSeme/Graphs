"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = void 0;
const edge_1 = require("./edge");
const node_1 = require("./node");
class Graph {
    value = new Map();
    // accepts a graph data in format: nodeValueFrom/nodeValueTo/EdgeWeight
    createGraph(graphData) {
        for (const row of graphData) {
            const node = node_1.Node.addOrGetNode(this.value, row[0]);
            const adjacentNode = node_1.Node.addOrGetNode(this.value, row[1]);
            if (adjacentNode === null)
                continue;
            const edge = new edge_1.Edge(adjacentNode, row[2]);
            node?.edges.add(edge);
            adjacentNode.parents.set(node, edge);
        }
        return this.value;
    }
    // search by terminated nodes
    DFSWrap(graph) {
        const passed = new Set();
        for (const entry of graph.entries()) {
            if (!passed.has(entry[1]))
                this.DFS(entry[1], passed);
        }
    }
    // Depth-First Search
    DFS(node, passed) {
        console.log(node.value);
        passed.add(node);
        for (const edge of node.edges) {
            if (!passed.has(edge.adjacentNode)) {
                this.DFS(edge.adjacentNode, passed);
            }
        }
        passed = new Set();
    }
}
exports.Graph = Graph;
