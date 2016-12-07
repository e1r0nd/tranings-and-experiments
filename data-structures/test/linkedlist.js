/*****************************************************
* Test: Linked List. Data Structures in JS, Nov 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/

'use strict';

let assert = require('assert');
let LinkedList = require('../linkedlist').LinkedList;

describe('Linked List', () => {
  it('should use List', () => {
    let slideShow = new LinkedList();
    
    slideShow.add('image-001', 0);
    slideShow.add('image-002', 1);
    slideShow.add('image-003', 2);

    assert.equal(slideShow._length, 3);
    assert.equal(slideShow.get(1)._value, 'image-002');
    slideShow.remove(1)

    assert.equal(slideShow.get(1)._value, 'image-003');
    assert.equal(slideShow._length, 2);
  });
});