/*****************************************************
* Test: Graph. Data Structures in JS, Feb 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/
'use strict';

const assert = require('assert');
const Graph = require('../graph').Graph;

describe('Graph', () => {
  it('should use Graph', () => {
    const friends = new Graph();
    
    friends.addNode('John Doe');
    friends.addNode('Jack Daniels');
    friends.addNode('Jim Morgan');
    
    assert.equal(friends.hasNode('Jack Daniels'), true);
    
    friends.addEdge('John Doe', 'Jack Daniels');
    friends.addEdge('John Doe', 'Jim Morgan');

    assert.equal(friends.hasEdge('Jack Daniels', 'John Doe'), true);
    
    friends.removeEdge('John Doe', 'Jack Daniels');
    assert.equal(friends.hasEdge('Jack Daniels', 'John Doe'), false);
    
    friends.removeNode('Jack Daniels');
    assert.equal(friends.hasNode('Jack Daniels'), false);
  });
});