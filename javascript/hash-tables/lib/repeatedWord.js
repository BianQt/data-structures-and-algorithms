'use strict';
const HashMap = require("./HashTable");

const repeatedWord = (str) => {
  const hashTable = new HashMap(1024);
  let splittedWords = str
    .toLowerCase()
    .replace(/[^((a-z)& )]/gm, "")
    .split(" ");
  console.log(splittedWords);
  for (let i = 0; i < splittedWords.length; i++) {
    const index = hashTable._hash(splittedWords[i]);
    if (hashTable.get[index]) {
      return splittedWords[i];
    } else hashTable.set(splittedWords[i], 1);
  }
};
module.exports = repeatedWord;