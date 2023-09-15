import { Queue } from './index';

describe('Queue', () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should push items onto the queue', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    expect(queue.length()).toBe(3);
  });

  it('should pop items from the queue', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    const poppedItem = queue.pop();

    expect(poppedItem).toBe(1);
    expect(queue.length()).toBe(2);
  });

  it('should handle popping from an empty queue', () => {
    const poppedItem = queue.pop();

    expect(poppedItem).toBeUndefined();
  });

  it('should return the correct length of the queue', () => {
    expect(queue.length()).toBe(0);

    queue.push(1);
    queue.push(2);

    expect(queue.length()).toBe(2);

    queue.pop();

    expect(queue.length()).toBe(1);
  });

  it('should convert the queue to an array', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    const array = queue.toArray();

    expect(array).toEqual([1, 2, 3]);
  });

  it('should check if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);

    queue.push(1);

    expect(queue.isEmpty()).toBe(false);
  });
});
