"use strict";

const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
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

  insert(value) {
    let newHead = new Node(value);
    let current = this.head;
    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head = newHead;
      this.head.next = current;
    }
    this.length++;

    return newHead;
  }

  insert_before(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    if (this.head.value === value) {
      this.head = newNode;
      this.head.next = current;
      this.length++;
      return true;
    } else {
      while (current.next !== null) {
        if (current.next.value === value) {
          newNode.next = current.next;
          current.next = newNode;
          this.length++;
          return true;
        }
        current = current.next;
      }
    }
    return null;
  }

  insert_after(value, newValue) {
    let newNode = new Node(newValue);
    let current = this.head;

    if (this.head.value === value) {
      newNode.next = current.next;
      this.head.next = newNode;
      this.length++;
      return true;
    }
    while (current !== null) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return true;
      }
      current = current.next;
    }
    return null;
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

  kth(num) {
    num = Math.abs(num);
    if (num >= this.length) return "Exception";
    if (num === this.length - 1) return this.head.value;
    if (num === 0) return this.tail.value;
    let current = this.head;

    for (let i = 1; i < this.length - num; i++) {
      current = current.next;
    }
    return current.value;
  }

  zip(list1, list2) {
    let newHead = new Node(0);
    let currentNode = newHead;
    let l1 = list1.head;
    let l2 = list2.head;
    while (l1 !== null && l2 !== null) {
      currentNode.next = l1;
      l1 = l1.next;
      currentNode = currentNode.next;
      currentNode.next = l2;
      l2 = l2.next;
      currentNode = currentNode.next;
    }
    if (l1 !== null) {
      currentNode.next = l1;
    } else if (l2 !== null) {
      currentNode.next = l2;
    }
    list1 = newHead.next;
    list1.lenght = list1.lenght + list2.lenght;
    return list1;
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
