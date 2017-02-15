/*****************************************************
 * Class: BSTree. Data Structures in JS, Feb 2016
 * Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
 *****************************************************/
'use strict';

class BSTree {
  constructor() {
    this._root = null;
  }

  _find(value) {
    let current = this._root;

    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return current;
      }
    }
    
    return false;
  }

  add(value) {
    const node = {
      value,
      parent: null,
      left: null,
      right: null
    };

    if (this._root === null) {
      this._root = node;
      return;
    }

    let current = this._root;

    while (true) {
      if (value > current.value) {
        if (!current.right) {
          node.parent = current.value;
          current.right = node;
          break;
        }
        current = current.right;

      } else if (value < current.value) {
        if (!current.left) {
          node.parent = current.value;
          current.left = node;
          break;
        }
        current = current.left;

      } else {
        break;
      }
    }
  }

  remove (value) {
    let node = this._find(value);

    if (!node) {
      throw new Error('Item not found in the tree');
    }

    const findMin = (root) => {
      let minNode = root;
      while (minNode.left) {
        minNode = minNode.left;
      }
      return minNode;
    }
    if (node.left && node.right) {
      const successor = findMin(node.right);
      this.remove(successor.value);
      node.value = successor.value;
      node.left.parent = node.right.parent = node.value;
    } else {
      let parent = node.parent && this._find(node.parent) || null;
      let newNode = node.left || node.right;

      if (parent) {
        parent[node === parent.left ? 'left' : 'right'] = newNode;
        if (newNode)
          newNode.parent = parent.value;
      } else {
        this._root = newNode;
        this._root.parent = null;
      }
    }
  }

  contains(value) {
    return !!this._find(value);
  }
}

module.exports = {
    BSTree
};