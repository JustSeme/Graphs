import { Node } from "./node";

export class Edge {
    constructor(
        public adjacentNode: Node,
        public weight: number,
    ) {}
}