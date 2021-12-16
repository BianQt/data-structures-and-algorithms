"use strict";
const HashMap = require("../lib/HashTable");

const intersection = (tree1, tree2) => {
    if (tree1.root === null || tree2.root === null) return null;
  const tree1Arr = tree1.DFSPreOrder();
  const tree2Arr = tree2.DFSPreOrder();
  const outputs = [];
  const hashTable = new HashMap(500);
  
  for (let i = 0; i < tree1Arr.length; i++) {
    if (hashTable.get(tree1Arr[i]) === undefined) {
      hashTable.set(tree1Arr[i], 1);
    }
  }
  for (let i = 0; i < tree2Arr.length; i++) {
    if (hashTable.get(tree2Arr[i]) !== undefined) {
      outputs.push(tree2Arr[i]);
    }
  }
  if (outputs.length)  return outputs 
   return null
};

module.exports = intersection;
