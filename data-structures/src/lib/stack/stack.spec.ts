import { Stack } from "./index";

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should push items onto the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.length()).toBe(3);
  });

  it('should pop items from the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });

  it('should peek at the top item without removing it', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.length()).toBe(3);
  });

  it('should check if the stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it('should return the correct length of the stack', () => {
    expect(stack.length()).toBe(0);

    stack.push(1);
    stack.push(2);
    expect(stack.length()).toBe(2);

    stack.pop();
    expect(stack.length()).toBe(1);
  });
});