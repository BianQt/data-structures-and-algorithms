"use strict";

// const Node = require("./Node");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // push(val) {
  //   let newNode = new Node(val);

  //   if (!this.root) {
  //     this.root = newNode;
  //   } else {
  //     let current = this.root;
  //     while (current) {
  //       if (val >= current.value) {
  //         if (current.right === null) {
  //           current.right = newNode;
  //           break;
  //         } else {
  //           console.log("right");
  //           current = current.right;
  //         }
  //       } else {
  //         if (current.left === null) {
  //           current.left = newNode;
  //           break;
  //         } else {
  //           console.log("left");
  //           current = current.left;
  //         }
  //       }
  //     }
  //   }
  //   return this;
  // }

  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

 
}

module.exports = BinaryTree;
