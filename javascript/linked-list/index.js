'use strict';

const LinkedList = require('./lib/LinkedList');

// create a new instance of list
const list= new LinkedList(); 

list.insert('a');
list.insert('b');
list.insert('c');
list.insert('d');
list.insert('e');
list.insert('f');

console.log(list);