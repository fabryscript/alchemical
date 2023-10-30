/**
 * @name transformKeys
 *
 * @description
 * Transforms an object's keys based on a provided callback function, which can be either async or synchronous.
 *
 * @param o
 * The object to be operated on.
 *
 * @param transformCallback
 * The callback function that transforms each key. It must return a string as the keys are expected to be strings.
 *
 * @returns
 * A promise (if the callback is async) or a new object with transformed keys (if the callback is synchronous).
 */
export function transformKeys<T>(
  o: Record<string, T>,
  transformCallback: (originalKey: string) => string
): Record<string, T>;

export function transformKeys<T>(
  o: Record<string, T>,
  transformCallback: (originalKey: string) => Promise<string>
): Promise<Record<string, T>>;

// Implementation of the overloaded functions
export async function transformKeys<T>(
  o: Record<string, T>,
  transformCallback: (originalKey: string) => string | Promise<string>
): Promise<Record<string, T>> {
  // Create an array to store transformation promises.
  const transformationPromises = Object.keys(o).map(async (key) => {
    // Ensure that the key is an own property of the object using Object.prototype.hasOwnProperty.
    if (Object.prototype.hasOwnProperty.call(o, key)) {
      // Apply the transformation callback to the key.
      const newKey = await transformCallback(key);
      return [newKey, o[key]];
    }

    return undefined;
  });

  // Use Promise.all to resolve all transformation promises.
  const transformedKeyValues = (
    await Promise.all(transformationPromises)
  ).filter((result): result is [string, T] => result !== undefined); // Filter out undefined results

  // Convert the array of key-value pairs into a new object.
  const newObject: Record<string, T> = {};
  for (const [newKey, value] of transformedKeyValues) {
    newObject[newKey] = value;
  }

  // Return the new object with transformed keys.
  return newObject;
}
