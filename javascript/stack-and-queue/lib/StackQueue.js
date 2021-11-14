"use strict";

const Stack = require("./Stack");

class StackQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.length = 0;
  }

  enqueue(value) {
    this.stack1.push(value);
    this.length = this.stack1.length + this.stack2.length;
  }

  dequeue() {
      
    if (this.stack2.length > 0) {
      this.length = this.stack1.length + this.stack2.length - 1;
      return this.stack2.pop();
    }
    while (this.stack1.length > 0) {
      console.log(1);
      this.stack2.push(this.stack1.pop());
    }

    this.length = this.stack1.length + this.stack2.length - 1;
    return this.stack2.pop();
  }
}

module.exports = StackQueue;
