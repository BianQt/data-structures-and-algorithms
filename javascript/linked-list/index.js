'use strict';

const LinkedList = require('./lib/LinkedList');

// create a new instance of list
const list= new LinkedList(); 

list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
list.append('f');

console.log(list);