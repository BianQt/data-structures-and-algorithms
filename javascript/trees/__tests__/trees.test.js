"use strict";

const BinarySearchTree = require("../lib/BinarySearchTree");
const BinaryTree = require("../lib/BinaryTree");

let tree1 = new BinarySearchTree();

describe("Binary Search Tree & Traversing", () => {
  
  it("Can successfully instantiate an empty tree", () => {
    expect(tree1.root).toEqual(null);
  });

  it("Can successfully add a left child and right child to a single root node", () => {
    tree1.insert(10);
    expect(tree1.root.value).toEqual(10);
    tree1.insert(7);
    expect(tree1.root.left.value).toEqual(7);
    tree1.insert(15);
    expect(tree1.root.right.value).toEqual(15);
    tree1.insert(9);
    tree1.insert(5);
  });

  it("Can successfully return true when value is exist in the tree", () => {
    expect(tree1.find(15)).toEqual(true);
  });

  it("Can successfully return false when value does not exist in the tree", () => {
    expect(tree1.find(11)).toEqual(false);
  });


  it("Can successfully return a collection from a preorder traversal", () => {
    expect(tree1.DFSPreOrder()).toEqual([10, 7, 5, 9, 15]);
  });

  it("Can successfully return a collection from an inorder traversal", () => {
    expect(tree1.DFSInOrder()).toEqual([5, 7, 9, 10, 15]);
  });

  it("Can successfully return a collection from a postorder traversal", () => {
    expect(tree1.DFSPostOrder()).toEqual([5, 9, 7, 15, 10]);
  });

});
