"use strict";

const Stack = require('../lib/Stack');
const Queue = require('../lib/Queue');


const stack = new Stack();
const queue = new Queue();

describe("Stacks", () => {

  



// 
// 
// 
// 
// 
// Can successfully instantiate an empty queue
// 

  it("Can successfully push onto a stack", () => {
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  it("Can successfully push multiple values onto a stack", () => {
    stack.push(2);
    expect(stack.top.value).toEqual(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
  });

  it("Can successfully pop off the stack", () => {
    let popItem =stack.pop();
    expect(popItem).toEqual(3);
  });

 
  it("Can successfully empty a stack after multiple pops", () => {
    stack.pop();
    stack.pop();
    expect(stack.top).toBeNull();
  });
  
  
  it("Can successfully peek the next item on the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.top.value).toEqual(1);
  });

  it("Can successfully instantiate an empty stack", () => {
    let newStack = new Stack();
    expect(newStack.top).toBeNull();
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    stack.pop();
    let popItem =stack.pop();
    expect(popItem).toBeNull();
    expect(stack.peek()).toBeNull();
    
  });

  it("Can successfully enqueue into a queue", () => {
    queue.enqueue(1);
    expect(queue.front.value).toEqual(1);
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    queue.enqueue(2);
    expect(queue.rear.value).toEqual(2);
    queue.enqueue(3);
    expect(queue.rear.value).toEqual(3);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    let popItem = queue.dequeue();
    expect(popItem).toEqual(1);
  });

  
  it("Can successfully peek into a queue, seeing the expected value", () => {
    let peakItem = queue.peek();
    expect(peakItem).toEqual(2);
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
  });

  it("Can successfully instantiate an empty queue", () => {
    let newQueue = new Queue;
    expect(newQueue.front).toBeNull();
  });

  it("Calling dequeue or peek on empty queue raises exception", () => {
    let popItem =queue.dequeue();
    expect(popItem).toBeNull();
    expect(queue.peek()).toBeNull();
  });

});
