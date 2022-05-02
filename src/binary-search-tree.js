const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.node = null
  }

  root() {
    return this.node
  }

  add(data) {
    if (!this.node) {
      return this.node = new Node(data);
    }
  }

  has(data) {

  }

  find(data) {

  }

  remove(data) {

  }

  min() {

  }

  max() {

  }

}

module.exports = {
  BinarySearchTree
};