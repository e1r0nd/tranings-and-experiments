'use strict';

var assert = require('assert');
var Stack = require('../stack').Stack;

describe('Stack', function() {
  it('should use LIFO', () => {
    let stack = new Stack();
    
    stack.push('#!/home');
    stack.push('#!/about');
    
    assert.equal(stack._length, 2);
    assert.equal(stack.peek(), '#!/about');
    assert.equal(stack.peek(), '#!/about');
    assert.equal(stack.pop(), '#!/about');
    assert.equal(stack.pop(), '#!/home');
    assert.equal(stack._length, 0);
  });
});