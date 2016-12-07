/*****************************************************
* Test: Linked List. Data Structures in JS, Nov 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/

'use strict';

let assert = require('assert');
let LinkedList = require('../linkedlist').LinkedList;

describe('Linked List', () => {
  it('should use List', () => {
    let menu = new LinkedList();
    
    menu.add('home', 0);
    menu.add('edit', 1);
    menu.add('about', 2);
    
    assert.equal(menu._length, 3);
    assert.equal(menu.get(2), 'about');
    menu.remove(2)
    assert.equal(menu.get(2), 'edit');
    assert.equal(menu._length, 2);
  });
});