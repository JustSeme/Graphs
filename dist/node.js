"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
class Node {
    value;
    edges = new Set();
    parents = new Map();
    constructor(value) {
        this.value = value;
    }
    static addOrGetNode(graph, value) {
        if (value === -1)
            return null;
        if (graph.has(value))
            return graph.get(value);
        const node = new Node(value);
        graph = graph.set(value, node);
        return node;
    }
}
exports.Node = Node;
