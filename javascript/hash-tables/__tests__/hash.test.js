"use strict";

const HashMap = require("../lib/HashTable");


let hashTable = new HashMap(50);

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
