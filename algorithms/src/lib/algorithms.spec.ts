import { transformKeys } from './algorithms'; // Replace with the correct path

describe('transformKeys', () => {
  it('transforms keys asynchronously according to the async callback', async () => {
    const inputObject = { a: 1, b: 2, c: 3 };
    const asyncTransformCallback = async (key: string) => key.toUpperCase();
    const a = transformKeys(inputObject, (ok) => ok.toUpperCase());
    const result = await transformKeys(inputObject, asyncTransformCallback);
    expect(result).toEqual({ A: 1, B: 2, C: 3 });
  });

  it('transforms keys with different types asynchronously', async () => {
    const inputObject = { age: 30, isStudent: true, has_spaces: 'yes' };
    const asyncTransformCallback = async (key: string) => key.replace('_', ' ');
    const result = await transformKeys(inputObject, asyncTransformCallback);
    expect(result).toEqual({ age: 30, isStudent: true, 'has spaces': 'yes' });
  });

  it('does not modify the original object', async () => {
    const inputObject = { a: 1, b: 2 };
    const asyncTransformCallback = async (key: string) => key.toUpperCase();
    const result = await transformKeys(inputObject, asyncTransformCallback);
    expect(inputObject).toEqual({ a: 1, b: 2 });
  });

  it('handles an empty object asynchronously', async () => {
    const inputObject = {};
    const asyncTransformCallback = async (key: string) => key.toUpperCase();
    const result = await transformKeys(inputObject, asyncTransformCallback);
    expect(result).toEqual({});
  });
});
