import { LinkedList, SortFunction } from "./lib";

export class Node {
  private _id: string;
  private _edges: Edge[];

  constructor(id: string, edges: Edge[] = []) {
    this._id = id;
    this._edges = edges;
  }

  get id() {
    return this._id;
  }
  get edges() {
    return this._edges;
  }
}

export class Edge {
  private _weight: number;
  private _to: string;

  constructor(to: string, weight: number) {
    this._to = to;
    this._weight = weight;
  }

  set weight(amount: number) {
    // edges cannot have a negative weight
    if (amount < 0) throw new Error("Edge must have a positive weight");
    this._weight = amount;
  }
  get weight() {
    return this._weight;
  }
  set to(destination: string) {
    this._to = destination;
  }
  get to() {
    return this._to;
  }
}

export class VisitedNode extends Node {
  distanceFromRoot: number;

  constructor(id: string, edges: Edge[] = []) {
    super(id, edges);
    this.distanceFromRoot = Infinity;
  }
}

export const ERROR_MESSAGES = {
  START_NODE_NOT_IN_GRAPH: "Start node is not part of the graph",
  END_NODE_NOT_IN_GRAPH: "End node is not part of the graph",
};

/** determine the shortest path from a starting node to an ending node in a graph */
export const dijkstra = (start: Node, end: Node, graph: Node[]) => {
  // guard/edge cases
  if (!graph.includes(start)) {
    throw new Error(ERROR_MESSAGES.START_NODE_NOT_IN_GRAPH);
  }
  if (!graph.includes(end)) {
    throw new Error(ERROR_MESSAGES.END_NODE_NOT_IN_GRAPH);
  }

  const sortFunction: SortFunction<VisitedNode> = (a, b) => {
    if (a.distanceFromRoot < b.distanceFromRoot) return -1;
    if (a.distanceFromRoot > b.distanceFromRoot) return 1;
    return 0;
  };

  const convertedNodes = graph.map((node) => new VisitedNode(node.id, node.edges));
  const queue: LinkedList<VisitedNode> = new LinkedList<VisitedNode>([], sortFunction);

  // add all the items to the linked list
  while (convertedNodes?.length > 0) {
    const n = convertedNodes.shift();
    let added = false;
    if (n) {
      // handle the first node getting added to the LinkedList
      if (n.id === start.id) {
        n.distanceFromRoot = 0;
        console.log("adding node:", { ...n });
        queue.add(n);
        added = true;
        continue;
      }

      const rootId = queue.head?.value?.id || start.id;

      // loop over edges to find connected nodes
      if (n.edges && rootId) {
        for (let i = 0; i < n.edges.length; i++) {
          // do any edges connect to the root of the graph?
          if (n.edges[i].to === rootId) {
            n.distanceFromRoot = n.edges[i].weight;
            console.log("adding node:", { ...n });
            queue.add(n);
            added = true;
            continue;
          }

          // if there are other items in the queue,
          // calculate the distance from start using the weighted edge
          // and the connected node
          if (queue.items.length) {
            const connectedNodeId = n.edges[i].to;
            const connectedNode = queue.items.find((n) => n.value.id == connectedNodeId);
            if (connectedNode && connectedNode.value.distanceFromRoot !== Infinity) {
              const distance = n.edges[i].weight + connectedNode.value.distanceFromRoot;
              n.distanceFromRoot = distance;
              queue.add(n);
              added = true;
              continue;
            }
          }
        }
      }
      if (!added) {
        console.log("adding node:", { ...n });
        queue.add(n);
      }
    }
  }

  const minDistance = queue.items.find((x) => x.value.id == end.id)?.value.distanceFromRoot;

  return { distance: minDistance, sortedList: queue.toArray() };
};
