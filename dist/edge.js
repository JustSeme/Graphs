"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edge = void 0;
class Edge {
    adjacentNode;
    weight;
    constructor(adjacentNode, weight) {
        this.adjacentNode = adjacentNode;
        this.weight = weight;
    }
}
exports.Edge = Edge;
