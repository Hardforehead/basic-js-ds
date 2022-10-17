const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
     this.h = null;
     this.t = null;
  }
  getUnderlyingList() {
     return this.h;
  }
  enqueue(value) {
     var n = new Node(value)
     if (this.h) {
        this.t.next = n;
        this.t = n;
     } else {
        this.h = n;
        this.t = n;
     }
  }
  dequeue() {
     const top = this.h;
     this.h = this.h.next;
     return top.value;
  }
}
class Node {
  constructor(value) {
     this.value = value
     this.next = null
  }
}
module.exports = {
  Queue
};
