"use strict";

const Stack = require('../lib/Stack');
const Queue = require('../lib/Queue');
const StackQueue = require('../lib/StackQueue');
const AnimalShelter = require('../lib/AnimalShelter');
const brackets = require('../lib/brackets');

const stack = new Stack();
const queue = new Queue();
const stackQueue = new StackQueue();
const animalShelter = new AnimalShelter();

describe("Stacks", () => {

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

  it("Can successfully push onto a queue-stack", () => {
    stackQueue.enqueue(1);
    expect(stackQueue.stack1.top.value).toEqual(1);
  });

  it("Can successfully push multiple values onto a queue-stack", () => {
    stackQueue.enqueue(2);
    expect(stackQueue.stack1.top.value).toEqual(2);
    stackQueue.enqueue(3);
    expect(stackQueue.stack1.top.value).toEqual(3);

  });

  it("Can successfully dequeue out of a queue-stack the expected value", () => {
    let popItem = stackQueue.dequeue();
    expect(popItem).toEqual(1);
  });

  
  it("Can successfully enqueue into an animalShelter", () => {
    animalShelter.enqueue('cat');
    expect(animalShelter.front.value).toEqual('cat');
  });

  it("Can successfully enqueue multiple values into an animalShelter", () => {
    animalShelter.enqueue('dog');
    expect(animalShelter.rear.value).toEqual('dog');
    animalShelter.enqueue('cat');
    expect(animalShelter.rear.value).toEqual('cat');
  });

  it("Can successfully dequeue out of an animalShelter the expected value", () => {
    let popItem = animalShelter.dequeue('cat');
    expect(popItem).toEqual('cat');
  });

  
  it("Can successfully empty a queue after multiple animalShelter", () => {
    animalShelter.dequeue('dog');
    animalShelter.dequeue('cat');
    expect(animalShelter.front).toBeNull();
  });

  it("Can successfully represent whether the brackets in the string are balanced", () => {
  
    expect(brackets('{}')).toEqual(true);
    expect(brackets('{}(){}')).toEqual(true);
    expect(brackets('()[[Extra Characters]]')).toEqual(true);
    expect(brackets('(){}[[]]')).toEqual(true);
    expect(brackets('{}{Code}[Fellows](())')).toEqual(true);
  
    
  });
  it("Can successfully represent whether the brackets in the string are not balanced", () => {
  
    expect(brackets('[({}]')).toEqual(false);
    expect(brackets('(](')).toEqual(false);
    expect(brackets('{(})')).toEqual(false);
    
  });

});
