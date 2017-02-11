/*****************************************************
* Class: Graph. Data Structures in JS, Feb 2016
* Anatol Marezhanyi http://linkedin.com/in/merezhany/ 
*****************************************************/
'use strict';

class Graph {
  constructor() {
    this._nodes = {};
  }

  addNode(value) {
    this._nodes[value] = {
      edges: {}
    };
  }
  
  removeNode(value) {
    for (let connectedNode in this._nodes[value].edges) {
      this.removeEdge(value, connectedNode);
    }
    delete this._nodes[value];
  }

  hasNode(value) {
    return !!this._nodes[value];
  }
  
  addEdge(nodeFrom, nodeTo) {
    if (this.hasNode(nodeFrom) && this.hasNode(nodeTo)) {
      this._nodes[nodeFrom].edges[nodeTo] =
      this._nodes[nodeTo].edges[nodeFrom] = true;
    }
  }
  
  removeEdge(nodeFrom, nodeTo) {
    if (this.hasNode(nodeFrom) && this.hasNode(nodeTo)) {
      delete this._nodes[nodeFrom].edges[nodeTo];
      delete this._nodes[nodeTo].edges[nodeFrom];
    }
  }
  
  hasEdge(nodeFrom, nodeTo) {
    return !!this._nodes[nodeFrom].edges[nodeTo];
  }
}

module.exports = {
  Graph
};
