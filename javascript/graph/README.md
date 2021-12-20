# Graphs
<!-- Short summary or background information -->
A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as, A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.
## Challenge
<!-- Description of the challenge -->
Implement a Graph. The graph should be represented as an adjacency list, and should include the following methods:

* add node
   - Arguments: value
   - Returns: The added node
   - Add a node to the graph
* add edge
   - Arguments: 2 nodes to be connected by the edge, weight (optional)
   - Returns: nothing
   - Adds a new edge between two nodes in the graph
   - If specified, assign a weight to the edge
   - Both nodes should already be in the Graph
* get nodes
   - Arguments: none
   - Returns all of the nodes in the graph as a collection (set, list, or similar)
* get neighbors
   - Arguments: node
   - Returns a collection of edges connected to the given node
   - Include the weight of the connection in the returned collection
* size
   - Arguments: none
   - Returns the total number of nodes in the graph

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

* add node : I added the new node directly to the map with time & space complexity of o(1).
* add edge : I added the new edge directly to the map element with time & space complexity of o(1).
* get neighbors : Get the node directly from the map  time & space complexity of o(1).
* get weight : Get the node directly from the map then loop through its edges and check if it's contain the other node and return true. Time complexity of o(n) & space complexity of o(1).
* size: Get the size of the map using a build-in method with time & space complexity of o(1).
## API
<!-- Description of each method publicly available in your Graph -->
* ```add node```
* ```add edge```
* ```getNeighbors```
* ```getWeight```
* ```size```