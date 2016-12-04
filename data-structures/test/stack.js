'use strict';

var assert = require('assert');
var Stack = require('../stack').Stack;

describe('Stack', function() {
  it('should use LIFO', () => {
    let history = new Stack();
    
    history.push('#!/home');
    history.push('#!/about');
    
    assert.equal(history._length, 2);
    assert.equal(history.peek(), '#!/about');
    assert.equal(history.peek(), '#!/about');
    assert.equal(history.pop(), '#!/about');
    assert.equal(history.pop(), '#!/home');
    assert.equal(history._length, 0);
  });
});