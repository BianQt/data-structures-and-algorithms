"use strict";

const HashMap = require("../lib/HashTable");
const BinarySearchTree =require('../../trees/lib/BinarySearchTree');
const repeatedWord = require('../lib/repeatedWord');
const intersection = require('../treeIntersection/intersection')

let tree1 = new BinarySearchTree();
let tree2 = new BinarySearchTree();
let tree3 = new BinarySearchTree();
let tree4 = new BinarySearchTree();


tree1.insert(10);
tree1.insert(15);
tree1.insert(20);
tree1.insert(5);
tree1.insert(11);

tree2.insert(3);
tree2.insert(2);
tree2.insert(15);
tree2.insert(11);
tree2.insert(1);

tree3.insert(50);
tree3.insert(65);


let hashTable = new HashMap(50);
let str1 = "Once upon a time, there was a brave princess who...";
let str2 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
let str3 ="It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
let str4 = "//-"

describe("Hash Map", () => {
  it("Adding a key/value to your hashtable results in the value being in the data structure", () => {
    expect(hashTable.keyMap.length).toEqual(50);
  });

  it("Successfully hash a key to an in-range value", () => {
    expect(hashTable._hash('cyan')).toEqual(43);
  });

  it("Retrieving based on a key returns the value stored", () => {
    hashTable.set('cyan', '#79fff9')
    expect(hashTable.get('cyan')).toEqual('#79fff9');
  });

  it("Successfully returns null for a key that does not exist in the hashtable", () => {
    expect(hashTable.get('pink')).toEqual(undefined);
  });

  it("Successfully handle a collision within the hashtable", () => {
    hashTable.set('pink', '#f980f9')
    expect(hashTable.get('pink')).toEqual('#f980f9');
  });

  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    expect(hashTable.get('pink')).toEqual('#f980f9');
  });

  it("Successfully return true if the key exist", () => {
    expect(hashTable.contain('pink')).toEqual(true);
  });
  it("Successfully return false if there is no key", () => {
    expect(hashTable.contain('black')).toEqual(false);
  });

});

describe("First Repeated Word", () => {
  it("Check if the first word repeated correct", () => {
    expect(repeatedWord(str1)).toEqual('a');
  });
  it("Check if the first word repeated correct", () => {
    expect(repeatedWord(str2)).toEqual('it');
  });
  it("Check if the first word repeated correct", () => {
    expect(repeatedWord(str3)).toEqual('summer');
  });
  it("Check if there is no words return null", () => {
    expect(repeatedWord(str4)).toEqual(null);
  });


});

describe("Trees intersection", () => {
  it("Check if trees has intersection ", () => {
    expect(intersection(tree1,tree2)).toEqual([15,11]);
  });
  it("Check if trees has no intersection ", () => {
    expect(intersection(tree1,tree3)).toEqual(null);
  });
  it("Check if one tree has no root ", () => {
    expect(intersection(tree1,tree4)).toEqual(null);
  });
});