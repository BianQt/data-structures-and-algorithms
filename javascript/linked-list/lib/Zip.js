"use strict";
const Node = require("./Node");

module.exports = (list1, list2) => {
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
};
