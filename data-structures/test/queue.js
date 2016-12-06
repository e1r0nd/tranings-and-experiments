/*****************************************************
* Test: Queue. Data Structures in JS, November 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/
'use strict';

let assert = require('assert');
let Queue = require('../queue').Queue;

describe('Queue', function() {
  it('should use FIFO', () => {
    let orders = new Queue();
    
    orders.enqueue('order-001');
    orders.enqueue('order-002');
    
    assert.equal(orders._length, 2);
    assert.equal(orders.peek(), 'order-001');
    assert.equal(orders.peek(), 'order-001');
    assert.equal(orders.dequeue(), 'order-001');
    assert.equal(orders.dequeue(), 'order-002');
    assert.equal(orders._length, 0);
  });
});