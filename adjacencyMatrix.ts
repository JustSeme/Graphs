/* 
Задача: Реализуй два способа представления графа:

Список смежности
Матрица смежности
*/

class AdjacencyMatrixGraph {
    constructor(
        private vertices: string[],
        private matrix: number[][]
    ) {}

    addVertex(vertex: string) {
        if (this.vertices.includes(vertex)) throw new Error(`Vertex ${vertex} already exists`)

        this.vertices.push(vertex)
        for(const row of this.matrix) {
            row.push(0)
        }
        this.matrix.push(new Array(this.vertices.length).fill(0))
    }

    addEdge(from: string, to: string) {
        const fromIndex = this.vertices.indexOf(from)
        const toIndex = this.vertices.indexOf(to)

        if(fromIndex === -1 || toIndex === -1) throw new Error(`Vertex ${from} or vertex ${to} does not exists, cannot add edge.`)
    
        this.matrix[fromIndex][toIndex] = 1
    }

    displayGraph() {
        console.log("Adjacency matrix graph:");
        console.log("  ", this.vertices.join(" "));
        this.matrix.forEach((row, index) => {
            console.log(this.vertices[index], row.join(" "));
        });
    }
}

const vertices = ['A', 'B', 'C', 'D'];
// A,B,C,D * A,B,C,D
const adjacencyMatrixGraph: number[][] = [
    [0, 1, 1, 0], // A
    [0, 0, 0, 1], // B
    [0, 0, 0, 1], // C
    [0, 0, 0, 0], // D
]

const matrixGraphInstance = new AdjacencyMatrixGraph(['A', 'B', 'C', 'D'], adjacencyMatrixGraph)

console.log('Start');
matrixGraphInstance.displayGraph()

const newMatrixVertex = 'E'
console.log(`Add vertex ${newMatrixVertex}`);
matrixGraphInstance.addVertex(newMatrixVertex)

const newMatrixVertex2 = 'F'
console.log(`Add vertex ${newMatrixVertex2}`);
matrixGraphInstance.addVertex(newMatrixVertex2)

const newMatrixEdge = 'F'
console.log(`Add edge ${newMatrixEdge} for ${newMatrixVertex}`);
matrixGraphInstance.addEdge(newMatrixVertex, newMatrixEdge)

matrixGraphInstance.displayGraph()