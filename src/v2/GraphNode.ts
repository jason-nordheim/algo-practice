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

export class PriorityQueue<T> {
  elements: [T, number][] = [];

  enqueue(element: T, priority: number) {
    this.elements.push([element, priority]);
    this.elements.sort((a, b) => a[1] - b[1]);
  }

  dequeue(): T | undefined {
    return this.elements.shift()?.[0];
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
}

export const dijkstra = (start: GraphNode, target: GraphNode): GraphNode[] | undefined => {
  const distances = new Map<GraphNode, number>();
  const previousNodes = new Map<GraphNode, GraphNode | null>();
  const queue = new PriorityQueue<GraphNode>();
  const visited = new Set<GraphNode>();

  // set the start node distance and enqueue it
  distances.set(start, 0);
  queue.enqueue(start, 0);

  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    if (!current) break;

    // if the current node is the target node
    if (current === target) {
      const path: GraphNode[] = [];
      let node = target;

      while (node) {
        path.unshift(node);
        node = previousNodes.get(node)!;
      }

      return path;
    }

    // not the target
    visited.add(current);

    // loop through the nodes we've seen so far and
    // if it has not been visited AND we do not know the distance from the start
    // set a tentative distance of
    for (const [neighbor, weight] of current.neighbors.entries()) {
      if (!visited.has(neighbor)) {
        const tentativeDistance = distances.get(current)! + weight;

        // if the tentative distance is smaller than the currently recorded distance
        // or the neighbor has not been encountered,
        //  - update the distances and previous nodes  maps
        //  - enqueue the neighbor with its tentative distance as priority
        if (!distances.has(neighbor) || tentativeDistance < distances.get(neighbor)!) {
          distances.set(neighbor, tentativeDistance);
          previousNodes.set(neighbor, current);
          queue.enqueue(neighbor, tentativeDistance);
        }
      }
    }
  }

  return undefined;
};
