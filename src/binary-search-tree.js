const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    this.head = addWithin(this.head, data);

    function addWithin(params, data) {
      if (!params) return new Node(data)
      if (params.data === data) return params;

      data < params.data
        ? params.left = addWithin(params.left, data)
        : params.right = addWithin(params.right, data);

      return params;
    }
  }

  has(data) {
    return searchWithin(this.head, data);

    function searchWithin(params, data) {
      if (!params) return false;
      if (params.data === data) return true;

      return data < params.data
        ? searchWithin(params.left, data)
        : searchWithin(params.right, data);
    }
  }

  find(data) {
    return findWithin(this.head, data);

    function findWithin(params, data) {
      if (!params) return null;
      if (params.data === data) return params;

      return data < params.data
        ? findWithin(params.left, data)
        : findWithin(params.right, data);
    }
  }

  remove(data) {
    this.head = removeNode(this.head, data);

    function removeNode(params, data) {
      if (!params) return null;

      if (data < params.data) {
        params.left = removeNode(params.left, data);
        return params;
      }

      if (data > params.data) {
        params.right = removeNode(params.right, data);
        return params;
      }

      if ((!params.left) && (!params.right)) {
        return null;
      }
      if (!params.left) {
        params = params.right;
        return params;
      }
      if (!params.right) {
        params = params.left;
        return params;
      }

      let minFromRight = params.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      params.data = minFromRight.data;
      params.right = removeNode(params.right, minFromRight.data);
      return params;

    }
  }

  min() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};