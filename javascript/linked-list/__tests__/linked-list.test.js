"use strict";

// Require our linked list implementation
const LinkedList = require("../lib/LinkedList");

let list = new LinkedList();

describe("Linked list", () => {
  it("creation of linkedList works", () => {
    expect(list.head).toBeNull();
  });

  it("insert to linkedList works", () => {
    list.insert("c");
    expect(list.head.value).toEqual("c");
  });

  // The head property will properly point to the first node in the linked list
  it("head property", () => {
    expect(list.head.value).toEqual("c");
  });

  // Can properly insert multiple nodes into the linked list
  it("insert multiple nodes", () => {
    list.insert("b");
    expect(list.head.value).toEqual("b");
    list.insert("a");
    expect(list.head.value).toEqual("a");
  });
  
  // Will return true when finding a value within the linked list that exists
  it("finding a value within the linked list", () => {
    let index = list.include("b");
    expect(typeof index).toEqual("number");
  });

  // Will return false when searching for a value in the linked list that does not exist
  it("finding a value thath does not exist within the linked list", () => {
    let index = list.include("f");
    expect(index).toEqual(null);
  });

  // Can properly return a collection of all the values that exist in the linked list
  it("collection of all the values that exist in the linked list", () => {
    let string = list.string();
    expect(string).toEqual("{ a } -> { b } -> { c } -> NULL");
  });

});
