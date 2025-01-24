import { Edge } from "./edge"

export class Node {
    public edges: Set<Edge> = new Set()
    public parents: Map<Node, Edge> = new Map()

    constructor(public value: number) {}

    public static addOrGetNode(graph: Map<number, Node>, value: number): Node | null {
        if(value === -1) return null
        if(graph.has(value)) return graph.get(value) as Node
        const node = new Node(value)
        graph = graph.set(value, node)
        return node
    }
}