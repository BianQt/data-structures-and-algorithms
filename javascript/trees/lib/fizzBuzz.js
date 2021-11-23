"use strict";

const fizzBuzz = (tree) => {
  let queues = [];
  let treeArr = [];
  let current = tree.root;
  queues.push(current);
  while (queues.length) {
    current = queues.shift();
    if (current.value % 3 === 0 && current.value % 5 !== 0)
      treeArr.push("Fizz");
    else if (current.value % 5 === 0 && current.value % 3 !== 0)
      treeArr.push("Buzz");
    else if (current.value % 3 === 0 && current.value % 5 === 0)
      treeArr.push("FizzBuzz");
    else treeArr.push(`${current.value}`);
    if (current.left !== null) queues.push(current.left);
    if (current.right !== null) queues.push(current.right);
  }
  return treeArr;
};

module.exports = fizzBuzz;
