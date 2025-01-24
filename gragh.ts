import { Edge } from "./edge"
import { Node } from "./node"

export class Graph {
    public value: Map<number, Node> = new Map()

    // accepts a graph data in format: nodeValueFrom/nodeValueTo/EdgeWeight
    public createGraph(graphData: number[][]) {
        for(const row of graphData) {
            const node = Node.addOrGetNode(this.value, row[0])
            const adjacentNode = Node.addOrGetNode(this.value, row[1])
            if(adjacentNode === null) continue

            const edge = new Edge(adjacentNode, row[2])
            node?.edges.add(edge)
            adjacentNode.parents.set(node as Node, edge)
        }
        return this.value
    }

    // search by terminated nodes
    public DFSWrap(graph: Map<number, Node>) {
        const passed: Set<Node> = new Set()
        for(const entry of graph.entries()) {
            if(!passed.has(entry[1]))
                this.DFS(entry[1], passed)
        }
    }

    // Depth-First Search
    private DFS(node: Node, passed: Set<Node>) {
        console.log(node.value);
        passed.add(node)
        for(const edge of node.edges) {
            if(!passed.has(edge.adjacentNode)) {
                this.DFS(edge.adjacentNode, passed)
            }
        }
        passed = new Set()
    }
}
