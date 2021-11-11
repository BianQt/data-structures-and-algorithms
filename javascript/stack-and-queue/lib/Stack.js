"use strict";

const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) { 
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
  }
  pop() {
    if (this.top === null) {
      return null;
    }
    const temp = this.top; 
    this.top = this.top.next;
    temp.next = null; 
    this.length--;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}


module.exports = Stack;
