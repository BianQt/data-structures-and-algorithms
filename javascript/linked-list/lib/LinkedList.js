"use strict";

const Node = require('./Node')

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  
  insert(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  include(num) {
    let counter = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value === num) {
        return counter;
      }
      current = current.next;
      counter++;
    }
    return null;
  }

  string() {
    if (this.length === 0) {
      return "NULL";
    }
    let current = this.head.next;
    let string = `{ ${this.head.value} } ->`;
    while (current !== null) {
      string = string + ` { ${current.value} } ->`;
      current = current.next;
    }
    string = string + ` NULL`;
    return string;
  }
}

module.exports = LinkedList;
