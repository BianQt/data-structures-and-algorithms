"use strict";
const HashMap = require("./HashTable");

const repeatedWord = (str) => {
  const hashTable = new HashMap(500);
  let wordsArr = str
    .toLowerCase()
    .replace(/[^((a-z)& )]/gm, "")
    .split(" ");
  if (wordsArr.length === 1 &&  wordsArr[0]==="") return null;
  console.log(wordsArr);
  for (let i = 0; i < wordsArr.length; i++) {
    if (hashTable.get(wordsArr[i]) !== undefined) {
      return wordsArr[i];
    } else hashTable.set(wordsArr[i], 1);
  }
};
module.exports = repeatedWord;
