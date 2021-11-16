"use strict";

function brackets(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "[" || str[i] === "(") {
      arr.push(str[i]);
    } else if (str[i] === "}" && arr.pop() !== "{") return false;
    else if (str[i] === ")" && arr.pop() !== "(") return false;
    else if (str[i] === "]" && arr.pop() !== "[") return false;
  }
  return true;
}

module.exports = brackets;
