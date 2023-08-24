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
  const Nodes = [A, B, C, D, E];

  describe("errors", () => {
    it("throws if start node is not in the graph", () => {
      expect(() => dijkstra(F, A, Nodes)).toThrowError(ERROR_MESSAGES.START_NODE_NOT_IN_GRAPH);
    });
    it("throws if end node is not in the graph", () => {
      expect(() => dijkstra(A, G, Nodes)).toThrowError(ERROR_MESSAGES.END_NODE_NOT_IN_GRAPH);
    });
  });

  describe("failure", () => {
    const addSpy = jest.spyOn(LinkedList.prototype, "add");
    // @ts-expect-error private method
    const sortSpy = jest.spyOn(LinkedList.prototype, "sort");
    it("processes all the nodes", () => {
      const { sortedList } = dijkstra(A, F, [F, ...Nodes]);
      const count = Nodes.length + 1;
      expect(sortedList.length).toBe(count);
      expect(addSpy).toHaveBeenCalledTimes(count);
      expect(sortSpy).toHaveBeenCalledTimes(count);
    });

    it.only('unconnected nodes are set to "Infinity"', () => {
      const { sortedList } = dijkstra(A, F, [F, ...Nodes]);
      sortedList.forEach((item) => {
        if (item.id == F.id) {
          expect(item.distanceFromRoot).toBe(Infinity);
        } else {
          expect(item.distanceFromRoot).not.toBe(Infinity);
        }
      });
    });
  });

  describe("success", () => {
    const addSpy = jest.spyOn(LinkedList.prototype, "add");
    // @ts-expect-error private method
    const sortSpy = jest.spyOn(LinkedList.prototype, "sort");

    it("processes all the nodes", () => {
      const { sortedList } = dijkstra(A, D, Nodes);
      expect(sortedList.length).toBe(Nodes.length);
      expect(addSpy).toHaveBeenCalledTimes(Nodes.length);
      expect(sortSpy).toHaveBeenCalledTimes(Nodes.length);
    });

    it("sets the distance from start for each node", () => {
      const { sortedList } = dijkstra(A, D, Nodes);
      sortedList.forEach((item) => {
        expect(item.distanceFromRoot).not.toBe(Infinity);
      });
    });

    it("correctly orders the list", () => {
      const { sortedList } = dijkstra(A, D, Nodes);
      expect(sortedList[0].id).toBe(A.id);
      expect(sortedList[1].id).toBe(B.id);
      expect(sortedList[2].id).toBe(C.id);
      expect(sortedList[3].id).toBe(E.id);
      expect(sortedList[4].id).toBe(D.id);
    });

    it("correctly determines the distance to start", () => {
      const { sortedList } = dijkstra(A, D, Nodes);
      expect(sortedList[0].distanceFromRoot).toBe(0);
      expect(sortedList[1].distanceFromRoot).toBe(5);
      expect(sortedList[2].distanceFromRoot).toBe(8);
      expect(sortedList[3].distanceFromRoot).toBe(9);
      expect(sortedList[4].distanceFromRoot).toBe(12);
    });

    it("correctly determines the minimum distance", () => {
      const { distance } = dijkstra(A, D, Nodes);
      expect(distance).toBe(12);
    });
  });
});
