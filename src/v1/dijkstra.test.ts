import { Node, Edge, dijkstra, ERROR_MESSAGES } from "./dijkstra";
import { LinkedList } from "./lib";

describe("dijksta - basic graph", () => {
  const A = new Node("A", [new Edge("B", 5)]);
  const B = new Node("B", [new Edge("A", 5)]);
  const C = new Node("C", [new Edge("B", 3)]);
  const D = new Node("D", [new Edge("C", 4)]);
  const E = new Node("E", [new Edge("B", 4)]);
  const F = new Node("F", []);
  const G = new Node("G", []);

  describe("errors", () => {
    const nodes = [A, B, C, D, E];
    it("throws if start node is not in the graph", () => {
      expect(() => dijkstra(F, A, nodes)).toThrowError(ERROR_MESSAGES.START_NODE_NOT_IN_GRAPH);
    });
    it("throws if end node is not in the graph", () => {
      expect(() => dijkstra(A, G, nodes)).toThrowError(ERROR_MESSAGES.END_NODE_NOT_IN_GRAPH);
    });
  });

  describe("with unconnected node(s)", () => {
    const nodes = [A, B, C, D, E, F];
    const addSpy = jest.spyOn(LinkedList.prototype, "add");
    // @ts-expect-error private method
    const sortSpy = jest.spyOn(LinkedList.prototype, "sort");
    it("processes all the nodes", () => {
      const { sortedList } = dijkstra(A, F, nodes);
      expect(sortedList.length).toBe(nodes.length);
      expect(addSpy).toHaveBeenCalledTimes(nodes.length);
      expect(sortSpy).toHaveBeenCalledTimes(nodes.length);
    });

    it('unconnected nodes are set to "Infinity"', () => {
      const { sortedList } = dijkstra(A, F, nodes);
      sortedList.forEach((item) => {
        if (item.id == F.id) {
          expect(item.distanceFromRoot).toBe(Infinity);
        } else {
          expect(item.distanceFromRoot).not.toBe(Infinity);
        }
      });
    });
  });

  describe("with all connected nodes", () => {
    const nodes = [A, B, C, D, E];
    const addSpy = jest.spyOn(LinkedList.prototype, "add");
    // @ts-expect-error private method
    const sortSpy = jest.spyOn(LinkedList.prototype, "sort");

    it("processes all the nodes", () => {
      const { sortedList } = dijkstra(A, D, nodes);
      expect(sortedList.length).toBe(nodes.length);
      expect(addSpy).toHaveBeenCalledTimes(nodes.length);
      expect(sortSpy).toHaveBeenCalledTimes(nodes.length);
    });

    it("sets the distance from start for each node", () => {
      const { sortedList } = dijkstra(A, D, nodes);
      sortedList.forEach((item) => {
        expect(item.distanceFromRoot).not.toBe(Infinity);
      });
    });

    it("correctly orders the list", () => {
      const { sortedList } = dijkstra(A, D, nodes);
      expect(sortedList[0].id).toBe(A.id);
      expect(sortedList[1].id).toBe(B.id);
      expect(sortedList[2].id).toBe(C.id);
      expect(sortedList[3].id).toBe(E.id);
      expect(sortedList[4].id).toBe(D.id);
    });

    it("correctly determines the distance to start", () => {
      const { sortedList } = dijkstra(A, D, nodes);
      expect(sortedList[0].distanceFromRoot).toBe(0);
      expect(sortedList[1].distanceFromRoot).toBe(5);
      expect(sortedList[2].distanceFromRoot).toBe(8);
      expect(sortedList[3].distanceFromRoot).toBe(9);
      expect(sortedList[4].distanceFromRoot).toBe(12);
    });

    it("correctly determines the minimum distance", () => {
      const { distance } = dijkstra(A, D, nodes);
      expect(distance).toBe(12);
    });
  });
});
