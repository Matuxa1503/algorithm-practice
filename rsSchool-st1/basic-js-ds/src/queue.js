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
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class Queue {
  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
		if (this.length == 0) {
      this.head = new Node(value);
    } else {
      let cur = this.head;

      while(cur.next) {
        cur = cur.next;
      }
      cur.next = new Node(value);
    }

    this.length++;
}

  dequeue() {
    let cur = this.head;
    this.head = cur.next;
    this.length--;
    return cur.value;
  }
}


module.exports = {
  Queue
};
