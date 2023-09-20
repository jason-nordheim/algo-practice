import { describe, expect, test } from "bun:test";
import { GraphNode } from "./GraphNode";
import { dijkstra } from "./dijkstra";

describe("Dijkstra's Algorithm", () => {
  const nodeA = new GraphNode("A");
  const nodeB = new GraphNode("B");
  const nodeC = new GraphNode("C");
  const nodeD = new GraphNode("D");

  nodeA.addNeighbor(nodeB, 5);
  nodeA.addNeighbor(nodeC, 2);
  nodeB.addNeighbor(nodeD, 3);
  nodeC.addNeighbor(nodeD, 1);

  test("should find the shortest path between two nodes", () => {
    const path = dijkstra(nodeA, nodeD);
    const pathIds = path!.map((node) => node.id);

    expect(pathIds).toEqual(["A", "C", "D"]);
  });

  test("should handle when no path exists", () => {
    const path = dijkstra(nodeB, nodeC);

    expect(path).toBeUndefined();
  });
});
