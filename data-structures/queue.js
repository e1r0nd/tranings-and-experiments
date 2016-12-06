/*****************************************************
* Class: Queue. Data Structures in JS, November 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/
'use strict';

class Queue {
  constructor() {
    this._elements = [];
    this._length = 0;
  }
  
  enqueue(value) {
    this._elements.push(value);
    this._length++;
  }
  
  dequeue() {
    if (this._length === 0) {
      return;
    }
    this._length--;
    return this._elements.shift();
  }
  
  peek() {
    return this._elements[0];
  }
}

module.exports = {
  Queue: Queue
};