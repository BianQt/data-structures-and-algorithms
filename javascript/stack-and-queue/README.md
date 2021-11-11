# Stacks and Queues
### Stack
 A stack is a linear data structure in which elements can be inserted and deleted only from one side of the list, called the top.
### Queue
A queue is a linear data structure in which elements can be inserted only from one side of the list called rear, and the elements can be deleted only from the other side called the front.

## Challenge
<!-- Description of the challenge -->
Implementation the Stacks and Queues

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
* Node
  Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
* Stack
   Create a Stack class that has a top property. It creates an empty Stack when instantiated.
   This object should be aware of a default empty value assigned to top when the stack is created.
   The class should contain the following methods:
   - push
     - Arguments: value
     - adds a new node with that value to the top of the stack with an O(1) Time performance.
  - pop
     - Arguments: none
     - Returns: the value from node from the top of the stack
     - Removes the node from the top of the stack 
   - peek
     - Arguments: none
     - Returns: Value of the node located at the top of the stack

  - is empty
     - Arguments: none
     - Returns: Boolean indicating whether or not the stack is empty.
* Queue
   Create a Queue class that has a front property. It creates an empty Queue when instantiated.
   This object should be aware of a default empty value assigned to front when the queue is created.
   The class should contain the following methods:
   - enqueue
      - Arguments: value
      - adds a new node with that value to the back of the queue with an O(1) Time performance.
   - dequeue
      - Arguments: none
      - Returns: the value from node from the front of the queue
      - Removes the node from the front of the queue
   - peek
      - Arguments: none
      - Returns: Value of the node located at the front of the queue
   - is empty
      - Arguments: none
      - Returns: Boolean indicating whether or not the queue is empty

## API

* Stack
   - ```push``` : adds a new node with that value to the top of the stack with an O(1) Time performance.
  - ```pop``` : Returns the value from node from the top of the stack & Removes the node from the top of the stack 
   - ```peek``` : Returns Value of the node located at the top of the stack

  - ```is empty``` : Returns Boolean indicating whether or not the stack is empty.

* Queue
  
   - ``enqueue`` : adds a new node with that value to the back of the queue with an O(1) Time performance.
   - ```dequeue``` : Returns the value from node from the front of the queue & Removes the node from the front of the queue
   - ```peek```: Returns Value of the node located at the front of the queue
   - ```is empty``` : Returns Boolean indicating whether or not the queue is empty