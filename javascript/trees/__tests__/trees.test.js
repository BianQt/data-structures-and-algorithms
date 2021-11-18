"use strict";

const BinarySearchTree = require("../lib/BinarySearchTree");
const BinaryTree = require("../lib/BinaryTree");

let tree1 = new BinarySearchTree();
let tree2 = new BinaryTree();

describe("Binary Search Tree", () => {
  
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
  });

  it("Can successfully return true when value is exist in the tree", () => {
    expect(tree1.find(15)).toEqual(true);
  });

  it("Can successfully return false when value does not exist in the tree", () => {
    expect(tree1.find(11)).toEqual(false);
  });
});

describe("Binary Tree Traversing", () => {
  
  it("Can successfully instantiate an empty tree", () => {
    expect(tree2.root).toEqual(null);
  });

  it("Can successfully add a left child and right child to a single root node", () => {
    tree2.push(10);
    expect(tree2.root.value).toEqual(10);
    tree2.push(7);
    expect(tree2.root.left.value).toEqual(7);
    tree2.push(15);
    expect(tree2.root.right.value).toEqual(15);
    tree2.push(9);
    tree2.push(5);
  });

  it("Can successfully return a collection from a preorder traversal", () => {
    expect(tree2.DFSPreOrder()).toEqual([10, 7, 5, 9, 15]);
  });

  it("Can successfully return a collection from an inorder traversal", () => {
    expect(tree2.DFSInOrder()).toEqual([5, 7, 9, 10, 15]);
  });

  it("Can successfully return a collection from a postorder traversal", () => {
    expect(tree2.DFSPostOrder()).toEqual([5, 9, 7, 15, 10]);
  });

});
