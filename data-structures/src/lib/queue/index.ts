interface INode {
  data: any | null;
  next: INode | null;
}

class ListNode {
  data: INode['data'] = null;
  next: INode['next'] = null;

  constructor(data: INode['data'] = null) {
    this.data = data;
  }
}

export class Queue {
  private head: INode | null = null;
  private tail: INode | null = null;
  private size: number = 0;

  /**
   * Creates a new instance of the Queue class.
   * @constructor
   */
  constructor() {}

  /**
   * Adds an element to the back of the queue.
   * @param {any} data - The data to be added to the queue.
   * @returns {number} The new size of the queue.
   * @example
   * const queue = new Queue();
   * queue.push(1); // Returns 1
   * queue.push(2); // Returns 2
   */
  push(data: INode['data']): number {
    let newNode = new ListNode(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return this.length();
  }

  /**
   * Removes and returns the front element from the queue.
   * @returns {any} The element removed from the front of the queue.
   * @example
   * const queue = new Queue();
   * queue.push(1);
   * queue.push(2);
   * const removedItem = queue.pop(); // Returns 1
   */
  pop(): any {
    if (this.isEmpty()) return undefined;

    const poppedData = this.head!.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
    }

    this.size--;
    return poppedData;
  }

  /**
   * Returns the current size of the queue.
   * @returns {number} The number of elements in the queue.
   * @example
   * const queue = new Queue();
   * queue.push(1);
   * queue.push(2);
   * const size = queue.length(); // Returns 2
   */
  length(): number {
    return this.size;
  }

  /**
   * Converts the queue to an array.
   * @returns {Array} An array containing all elements in the queue.
   * @example
   * const queue = new Queue();
   * queue.push(1);
   * queue.push(2);
   * const queueArray = queue.toArray(); // Returns [1, 2]
   */
  toArray(): Array<any> {
    const arr = [];

    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return arr;
  }

  /**
   * Checks if the queue is empty.
   * @returns {boolean} True if the queue is empty, otherwise false.
   * @example
   * const queue = new Queue();
   * const isEmpty = queue.isEmpty(); // Returns true
   */
  isEmpty(): boolean {
    return this.length() === 0;
  }
}
