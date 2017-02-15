/*****************************************************
* Test: BS Tree. Data Structures in JS, Feb 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/
'use strict';

const assert = require('assert');
const BSTree = require('../bstree').BSTree;

describe('BS Tree', () => {
  it('should use BS Tree', () => {
    const states = new BSTree();
    
    states.add('Narnia');
    states.add('Spain');
    states.add('Greece');
    states.add('Moldova');
    states.add('Albania');
    states.add('Poland');
    states.add('Denmark');
    states.add('Germany');
    
    assert.equal(states.contains('Narnia'), true);

    states.remove('Narnia');
    assert.equal(states.contains('Narnia'), false);
  });
});