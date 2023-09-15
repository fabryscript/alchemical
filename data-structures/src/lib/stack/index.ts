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

export class Stack {
  private head: INode | null = null;
  private tail: INode | null = null;
  private size: number = 0;
  /**
   * Creates a new instance of the Stack class.
   * @constructor
   */
  constructor() {}

  /**
   * Pushes an element onto the top of the stack.
   * @param {any} data - The data to be pushed onto the stack.
   * @returns {number} The new size of the stack.
   * @example
   * const stack = new Stack();
   * stack.push(1); // Returns 1
   * stack.push(2); // Returns 2
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
   * Removes and returns the top element from the stack.
   * @returns {any} The element removed from the top of the stack.
   * @example
   * const stack = new Stack();
   * stack.push(1);
   * stack.push(2);
   * const poppedItem = stack.pop(); // Returns 2
   */
  pop(): any {
    if (this.isEmpty()) return undefined;

    const poppedData = this.tail!.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentElement = this.head;
      while (currentElement?.next !== this.tail) {
        currentElement = currentElement!.next;
      }

      this.tail = currentElement;
      this.tail!.next = null;
    }

    this.size--;
    return poppedData;
  }

  /**
   * Returns the top element of the stack without removing it.
   * @returns {any} The top element of the stack.
   * @example
   * const stack = new Stack();
   * stack.push(1);
   * stack.push(2);
   * const topItem = stack.peek(); // Returns 2
   */
  peek(): any {
    return this.tail?.data;
  }

  /**
   * Converts the stack to an array.
   * @returns {Array} An array containing all elements in the stack.
   * @example
   * const stack = new Stack();
   * stack.push(1);
   * stack.push(2);
   * const stackArray = stack.toArray(); // Returns [2, 1]
   */
  toArray(): Array<any> {
    const arr = [];

    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }

    return arr;
  }

  /**
   * Returns the current size of the stack.
   * @returns {number} The number of elements in the stack.
   * @example
   * const stack = new Stack();
   * stack.push(1);
   * stack.push(2);
   * const size = stack.length(); // Returns 2
   */
  length(): number {
    return this.size;
  }

  /**
   * Checks if the stack is empty.
   * @returns {boolean} True if the stack is empty, otherwise false.
   * @example
   * const stack = new Stack();
   * const isEmpty = stack.isEmpty(); // Returns true
   */
  isEmpty(): boolean {
    return this.length() === 0;
  }
}
