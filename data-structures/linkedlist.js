/*****************************************************
* Class: Linked List. Data Structures in JS, Nov 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/
'use strict';

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }
  
  add(value, position) {
    let node = {
      _value: value,
      _next: null
    };

    if (position === 0) {
      node._next = this._head;
      this._head = node;
    } else {
      let prev = this.get(position - 1);
      let current = prev._next;
      node._next = current;
      prev._next = node;
    }

    this._length++;
  }
  
  remove(position) {
    if (position === 0) {
      this._head = this._head._next;
    } else {
      let prev = this.get(position - 1);
      prev._next = prev._next._next;
    }

    this._length--;
  }
  
  get(position) {
    if (position >= this._length) {
      console.log('out of range');
    }

    let current = this._head;
    for (let i = 0; i < position; i++) {
      current = current._next;
    }

    return current;
  }
}

module.exports = {
  LinkedList: LinkedList
};