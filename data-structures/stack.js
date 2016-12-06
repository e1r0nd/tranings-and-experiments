/*****************************************************
* Class: Stack. Data Structures in JS, November 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/
'use strict';

class Stack {
  constructor() {
    this._elements = [];
    this._length = 0;
  }
  
  push(value) {
    this._elements.push(value);
    this._length++;
  }
  
  pop() {
    if (this._length === 0) {
      return;
    }
    this._length--;
    return this._elements.pop();
  }
  
  peek() {
    return this._elements[this._length - 1];
  }
}

module.exports = {
  Stack: Stack
};