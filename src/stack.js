const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  a = [];
  push(b) {
    this.a = [...this.a, b]
  }
  pop() {
    var c = (this.a.splice(this.a.length - 1))[0];
    return c;
  }
  peek() {
    var c = this.a[this.a.length - 1];
    return c;
  }
}

module.exports = {
  Stack
};
