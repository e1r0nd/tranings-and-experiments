'use strict';

var assert = require('assert');
var Stack = require('../stack').Stack;

describe('Stack', function() {
  it('should use LIFO', () => {
    let stack = new Stack();
    
    stack.push(1);
    stack.push(2);
    
    assert.equal(stack._length, 2);
    assert.equal(stack.peek(), 2);
    assert.equal(stack.peek(), 2);
    assert.equal(stack.pop(), 2);
    assert.equal(stack.pop(), 1);
    assert.equal(stack._length, 0);
  });
});