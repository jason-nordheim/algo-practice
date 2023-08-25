export class GraphNode {
  id: string;
  neighbors: Map<GraphNode, number>;

  constructor(id: string) {
    this.id = id;
    this.neighbors = new Map();
  }

  addNeighbor(neighbor: GraphNode, weight: number) {
    this.neighbors.set(neighbor, weight);
  }
}
