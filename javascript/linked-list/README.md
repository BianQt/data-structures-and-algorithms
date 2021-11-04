# Singly Linked List
<!-- Short summary or background information -->
 Linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers. In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

## Challenge
<!-- Description of the challenge -->
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
- Create a Linked List class that has a head, tail & length properties.
Upon instantiation, an empty Linked List should be created.
- The Linked List class should contain the following methods
  - insert : Adds a new node with that value to the head of the list with an O(1) Time performance.
  - includes : Indicates whether that value exists as a Node’s value somewhere within the list.
  - to string : Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
- Insert : for the insertion of a new node, I used the tail to do that. It has O(1) time complexity.
- include : I used the for loop to traverse the complete list by following the next pointers. And check if the value exist or not. It hasO(n) time complexity.
- To string : I used the for loop to traverse the complete list by following the next pointers. And add join the values of the nodes. It hasO(n) time complexity.


## API
<!-- Description of each method publicly available to your Linked List -->
- insert : Adds a new node with that value to the head of the list with an O(1) Time performance.
- includes : Indicates whether that value exists as a Node’s value somewhere within the list.
- to string : Returns: a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"