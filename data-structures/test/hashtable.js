/*****************************************************
* Test: Hash Table. Data Structures in JS, Feb 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/
'use strict';

const assert = require('assert');
const HashTable = require('../hashtable').HashTable;

describe('Hash Table', () => {
  it('should use Hash Table', () => {
    const employees = new HashTable();
    
    employees.set('John Doe', 'manager');
    employees.set('Jack Daniels', 'developer');
    employees.set('Jim Morgan', 'engineer');

    assert.equal(employees.get('Jack Daniels'), 'developer');

    employees.set('Jack Daniels', 'manager');
    assert.equal(employees.get('Jack Daniels'), 'manager');

    employees.remove('Jack Daniels')
    assert.equal(employees.get('Jack Daniels'), false);

  });
});