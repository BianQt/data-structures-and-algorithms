"use strict";

const Node = require("./Node");

class AnimalShelter  {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(animle) {
    const newNode = new Node(animle);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue(pref) {
    if (this.length === 0) {
      return null;
    }
    if (pref !== 'dog' && pref !== 'cat') {
      this.front = this.front.next;
      this.length -= 1;
      return null;
    }

    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.length -= 1;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = AnimalShelter ;
