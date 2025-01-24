"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gragh_1 = require("./gragh");
const graph = new gragh_1.Graph();
const graphData = [
    [7, 5, 1],
    [7, 2, 1],
    [7, 6, 1],
    [6, 4, 1],
    [6, 7, 1],
    [2, 1, 1],
    [5, 9, 1],
    [8, 10, 1],
];
graph.createGraph(graphData);
/* graph.DFS(graph.value.get(graphData[graphData.length - 1][0]) as Node)
console.log('\n');
graph.DFS(graph.value.get(graphData[0][0]) as Node)
console.log('\n');
graph.DFS(graph.value.get(graphData[5][0]) as Node) */
graph.DFSWrap(graph.value);
