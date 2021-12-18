const Graph  = require("../lib/Graph");

test("Node can be successfully added to the graph", () => {
  const graph = new Graph();
  graph.addVertix(1);
  expect(graph.size()).toBe(1);
});
test("An edge can be successfully added to the graph", () => {
  const graph = new Graph();
  graph.addVertix(1);
  graph.addVertix(2);
  graph.addDirectedEdge(1, 2);
  expect(graph.size()).toBe(2);
});
test("A collection of all nodes can be properly retrieved from the graph", () => {
  const graph = new Graph();
  graph.addVertix(1);
  graph.addVertix(2);
  graph.addVertix(3);
  graph.addDirectedEdge(1, 2);
  graph.addDirectedEdge(2, 3);
  expect(graph.size()).toBe(3);
});
test("All appropriate neighbors can be retrieved from the graph", () => {
  const graph = new Graph();
  graph.addVertix(1);
  graph.addVertix(2);
  graph.addVertix(3);
  graph.addDirectedEdge(1, 2);
  graph.addDirectedEdge(2, 3);
  expect(graph.getNeighbors(3)).toStrictEqual([]);
});
test("Neighbors are returned with the weight between nodes included", () => {
  const graph = new Graph();
  graph.addVertix(1);
  graph.addVertix(2);
  graph.addVertix(3);
  graph.addDirectedEdge(1, 2, 5);
  graph.addDirectedEdge(2, 3, 10);
  expect(graph.getWeight(1, 2)).toBe(5);
  expect(graph.getWeight(2, 3)).toBe(10);
});
test("The proper size is returned, representing the number of nodes in the graph", () => {
  const graph = new Graph();
  graph.addVertix(1);
  graph.addVertix(2);
  graph.addVertix(3);
  graph.addDirectedEdge(1, 2);
  graph.addDirectedEdge(2, 3);
  expect(graph.size()).toBe(3);
});
test("A graph with only one node and edge can be properly returned", () => {
  const graph = new Graph();
  graph.addVertix(1);
  graph.addDirectedEdge(1, 1);
  expect(graph.size()).toBe(1);
});
test("An empty graph properly returns null", () => {
  const graph = new Graph();
  expect(graph.size()).toBe(0);
});
